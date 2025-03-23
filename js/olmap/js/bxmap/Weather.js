/**气象**/
//bxmap.Typhoon - 台风类
//bxmap.TyphoonListDialog - 台风列表弹框
//bxmap.AIS - 船讯

/**
 * @classdesc 在地图上播放台风路径
 * @param options
 * @param options.bmap {bxmap.Map}
 * @param options.enableNodeClick {Boolean} 是否开启台风数据节点点击事件，默认为true
 * @param options.showInfoWindow {Boolean} 是否显示默认的信息弹框，默认为true，只有enableNodeClick为true时才有效
 * @fires nodeclicked
 * @extends {ol.Object}
 * @constructor
 */
bxmap.Typhoon = function (options) {
    ol.Object.call(this);

    var opts = options || {};
    /**
     * @description 播放状态，true - 正在播放中
     * @readonly
     * @type {Boolean}
     */
    this.playing = false;

    /**
     * @description 是否为投影坐标系
     * @public
     * @type {Boolean}
     */
    this.isProjected = true;

    /**
     * @description 台风实际路径数据
     * @readonly
     * @type {Array}
     */
    this.path = [];

    /**
     * @description 是否开启台风数据节点点击事件
     * @readonly
     * @type {Boolean}
     */
    this.enableNodeClick = opts.enableNodeClick == null ? true : opts.enableNodeClick;

    /**
     * @description 是否显示默认的信息弹框
     * @readonly
     * @type {Boolean}
     */
    this.showInfoWindow = opts.showInfoWindow == null ? true : opts.showInfoWindow;

    /**
     * @description 地图
     * @readonly
     * @type {bxmap.Map}
     */
    this.bmap = null;

    /**
     * @description 用于存储绘制的24小时、48小时警戒线
     * @readonly
     * @type {bxmap.layer.Vector}
     */
    this.picketLineLayer = null;

    /**
     * @description 用于存储台风实际路线节点
     * @readonly
     * @type {bxmap.layer.Vector}
     */
    this.realNodesLayer = null;

    /**
     * @description 用于存储台风预报路线节点
     * @readonly
     * @type {bxmap.layer.Vector}
     */
    this.forecastNodesLayer = null;

    /**
     * @description 用于存储不交互的数据，包括台风实际路线、预报路线、风圈和台风图标
     * @type {bxmap.layer.Vector}
     * @private
     */
    this.resourceLayer = null;

    /**
     * @description 根据预报时间分组的中国预报数据[{YBSJ: "", data: info}]
     * @type {Array} [{YBSJ: "", data: info}]
     * @private
     */
    this._forecastGroupPaths = null;

    /**
     * @description 点击台风节点信息弹框
     * @type {bxmap.overlay.Popup}
     */
    this.infoWindow = new bxmap.overlay.Popup({
        showClose: false,
        positioning : 'bottom-center',
        panToCenter: false
    });

    //初始化样式
    this.styles = this.createStyles();

    //初始化图层
    this._initializeLayers();
    //设置地图
    this.setMap(opts.bmap);

    //开启台风节点点击事件
    if(this.enableNodeClick){
        this.enableNodeDetected();
    }
    //绘制默认警戒线
    this.drawDefaultPicketLine();
}
ol.inherits(bxmap.Typhoon, ol.Object);

/**
 * @description 创建样式
 * @return {JSON}
 */
bxmap.Typhoon.prototype.createStyles = function () {
    var output = {};
    //台风节点
    output["TyphoonNodes_Unselected"] = {
        "热带低压": new ol.style.Style({
            image: new ol.style.Icon({opacity: 0.8, scale: 0.8, src: bxmap.Resource.TyphoonPngRddy})
        })
        ,"热带风暴": new ol.style.Style({
            image: new ol.style.Icon({opacity: 0.8, scale: 0.8, src: bxmap.Resource.TyphoonPngRdfb})
        })
        ,"强热带风暴": new ol.style.Style({
            image: new ol.style.Icon({opacity: 0.8, scale: 0.8, src: bxmap.Resource.TyphoonPngQrdfb})
        })
        ,"台风": new ol.style.Style({
            image: new ol.style.Icon({opacity: 0.8, scale: 0.8, src: bxmap.Resource.TyphoonPngTf})
        })
        ,"强台风": new ol.style.Style({
            image: new ol.style.Icon({opacity: 0.8, scale: 0.8, src: bxmap.Resource.TyphoonPngQtf})
        })
        ,"超强台风": new ol.style.Style({
            image: new ol.style.Icon({opacity: 0.8, scale: 0.8, src: bxmap.Resource.TyphoonPngCqtf})
        })
    };
    output["TyphoonNodes_Selected"] = {
        "热带低压": new ol.style.Style({
            image: new ol.style.Icon({opacity: 1, scale: 1, src: bxmap.Resource.TyphoonPngRddy})
        })
        ,"热带风暴": new ol.style.Style({
            image: new ol.style.Icon({opacity: 1, scale: 1, src: bxmap.Resource.TyphoonPngRdfb})
        })
        ,"强热带风暴": new ol.style.Style({
            image: new ol.style.Icon({opacity: 1, scale: 1, src: bxmap.Resource.TyphoonPngQrdfb})
        })
        ,"台风": new ol.style.Style({
            image: new ol.style.Icon({opacity: 1, scale: 1, src: bxmap.Resource.TyphoonPngTf})
        })
        ,"强台风": new ol.style.Style({
            image: new ol.style.Icon({opacity: 1, scale: 1, src: bxmap.Resource.TyphoonPngQtf})
        })
        ,"超强台风": new ol.style.Style({
            image: new ol.style.Icon({opacity: 1, scale: 1, src: bxmap.Resource.TyphoonPngCqtf})
        })
    };

    return output;
}

/**
 * @description 初始化图层
 * @param bmap
 * @private
 */
bxmap.Typhoon.prototype._initializeLayers = function () {
    //24小时48小时警戒线
    this.picketLineLayer = new bxmap.layer.Vector({
        source: new ol.source.Vector()
    });
    //台风实际路线节点
    this.realNodesLayer = new bxmap.layer.Vector({
        source: new ol.source.Vector(),
        property: "symbol",
        style: null,
        context: function (feature) {
            return feature["symbol"];
        }
    });
    var symbolizer = new bxmap.symbol.UniqueValueSymbolizer();
    var styles = this.styles;
    symbolizer.addRule({ruleName: "default", styles: styles["TyphoonNodes_Unselected"]});
    symbolizer.addRule({ruleName: "selected", styles: styles["TyphoonNodes_Selected"]});
    symbolizer.addRule({ruleName: "unselected", styles: styles["TyphoonNodes_Unselected"]});
    this.realNodesLayer.setSymbolizer(symbolizer);

    //台风预测路线节点
    this.forecastNodesLayer = new bxmap.layer.Vector({
        source: new ol.source.Vector(),
        property: "symbol",
        style: null,
        context: function (feature) {
            return feature["symbol"];
        }
    });
    symbolizer = new bxmap.symbol.UniqueValueSymbolizer();
    symbolizer.addRule({ruleName: "default", styles: styles["TyphoonNodes_Unselected"]});
    symbolizer.addRule({ruleName: "selected", styles: styles["TyphoonNodes_Selected"]});
    symbolizer.addRule({ruleName: "unselected", styles: styles["TyphoonNodes_Unselected"]});
    this.forecastNodesLayer.setSymbolizer(symbolizer);


    //其他数据
    this.resourceLayer = new bxmap.layer.Vector({
        source: new ol.source.Vector()
    });
}

/**
 * @description 设置地图
 * @param bmap {bxmap.Map}
 */
bxmap.Typhoon.prototype.setMap = function (bmap) {
    if(this.bmap && this.bmap == bmap) return;
    if(this.bmap){
        var map = this.bmap.getMap();
        map.removeOverlay(this.infoWindow);
        map.removeLayer(this.picketLineLayer);
        map.removeLayer(this.resourceLayer);
        map.removeLayer(this.forecastNodesLayer);
        map.removeLayer(this.realNodesLayer);
    }

    if(bmap){
        var map = bmap.getMap();
        map.addOverlay(this.infoWindow);
        map.addLayer(this.picketLineLayer);
        map.addLayer(this.resourceLayer);
        map.addLayer(this.forecastNodesLayer);
        map.addLayer(this.realNodesLayer);
    }
    this.bmap = bmap;
    if(this.bmap) {
        //根据地图坐标系判断是否为经纬度坐标系
        var view = this.bmap.getMap().getView();
        var sourceProj = view.getProjection();
        if (sourceProj.getUnits() == 'degrees') {
            this.isProjected = false;
        }
    }
}

/**
 * @description 绘制默认警戒线
 */
bxmap.Typhoon.prototype.drawDefaultPicketLine = function () {
    //警戒线数据
    var picketLine24 = '';
    var picketLine48 = '';
    if(this.isProjected){
        picketLine24 = 'LINESTRING(14137575.3307 4028802.0261, 14137575.3307 2391878.5879, 12245143.9873 1689200.1396)';
        picketLine48 = 'LINESTRING(14694172.7847 4028802.0261, 14694172.7847 1689200.1396, 11688546.5333 0)';
    }else {
        picketLine24 = 'LINESTRING(127 34, 127 21, 110 15)';
        picketLine48 = 'LINESTRING(132 34, 132 15, 105 0)';
    }
    var WKTReader = new ol.format.WKT();
    var feature24 = WKTReader.readFeature(picketLine24);
    var feature48 = WKTReader.readFeature(picketLine48);

    feature24.setStyle(new ol.style.Style({
        stroke:  new ol.style.Stroke({
            color: '#ff0000',
            width: 1
        })
    }));

    feature48.setStyle(new ol.style.Style({
        stroke:  new ol.style.Stroke({
            color: '#ffff99',
            width: 1
        })
    }));

    this.picketLineLayer.getSource().addFeatures([feature24, feature48]);
}

/**
 * @description 播放台风，如果isProjected设置为true，自动将台风数据转为3857坐标系
 * @param bh - {String} 台风编号
 * @param interval - {Number} 播放速度
 */
bxmap.Typhoon.prototype.play = function (bh, interval) {
    var paths = bxmap.Typhoon.getTyphoonPath(bh);
    this.playTyphoonPath(paths, interval);
}

/**
 * @description 播放台风，如果isProjected设置为true，方法内部会自动将经纬度转为投影坐标系
 * @param paths - {Array} 通过bxmap.Typhoon.getTyphoonPath获取，[0]-实际路径;[1]-预报路径
 * @param interval - {Number} 播放速度，默认150毫秒
 */
bxmap.Typhoon.prototype.playTyphoonPath = function (paths, interval) {
    //清空数据
    this.clearData([this.picketLineLayer]);
    //预处理数据
    this._preHandle(paths);

    var self = this;
    var realPath = this.path =paths[0], //实际路线
        chinaYbData = self._subChinaYbData(paths[1]); //中国预报路线
    self._forecastGroupPaths = self._groupByYBSJ(chinaYbData); //根据预报时间分组的数据

    //跳转定位
    var start = [Number(realPath[0].X), Number(realPath[1].Y)];
    var view = this.bmap.getMap().getView();
    view.setCenter(start);
    view.setZoom(5);

    //初始化台风路线实际、预报路线
    this._initWindPath();
    //初始化风圈对象
    this._initWindCircle();

    var interval = interval || 150;
    var index = 0;
    self._timer = setInterval(function () {
        //结束条件
        if(index >= realPath.length){
            clearInterval(self._timer);
            self.playing = false;
            return;
        }
        self.playing = true; //正在播放中

        var node = realPath[index]; //实际位置节点
        var curPosition = [node.X, node.Y];
        var nextPostion = []; //下一个点
        if(index < (realPath.length - 1)){
            var nextNode = realPath[index + 1];
            nextPostion = [Number(nextNode.X), Number(nextNode.Y)];
        }

        //创建风圈
        self.setWindCircle(node);
        //创建实际路线
        var realPathLine = self._realPathFeature.getGeometry();
        if(nextPostion.length){
            if(index == 0){
                realPathLine.setCoordinates([curPosition,nextPostion]);
            }else{
                realPathLine.appendCoordinate(nextPostion);
            }
        }

        //创建实际路线节点
        var realNodeFeature = new ol.Feature({geometry: new ol.geom.Point(curPosition)});
        realNodeFeature["symbol"] = bxmap.Typhoon.getTyphoonLevel(node.ZXFS);
        realNodeFeature["nodeData"] = node; //关联台风数据
        realNodeFeature.setId(node.RQSJ); //设置id
        self.realNodesLayer.getSource().addFeature(realNodeFeature);

        //加载预报数据到地图上（包括预报路线和预报节点）
        self.addForecastDataToMap(node);

        index++;
    }, interval);
}

/**
 * @description 预处理台风路线数据，台风坐标系存储于XY
 * @param paths
 * @private
 */
bxmap.Typhoon.prototype._preHandle = function(paths){
    //地图为投影坐标系时需要将经纬度转为EPSG:3857
    if (this.isProjected) {
        //将经纬度转为EPSG:3857
        function toEPSG3857(arr) {
            for (var i = 0; i < arr.length; i++) {
                var record = arr[i];
                var p = ol.proj.fromLonLat([Number(record.JD), Number(record.WD)]);
                record.X = p[0];
                record.Y = p[1];
            }
        }

        toEPSG3857(paths[0]);//实际路线
        toEPSG3857(paths[1]);//预报路线
    }else{
        function setXY(arr) {
            for (var i = 0; i < arr.length; i++) {
                var record = arr[i];
                var p = [Number(record.JD), Number(record.WD)];
                record.X = p[0];
                record.Y = p[1];
            }
        }

        setXY(paths[0]);//实际路线
        setXY(paths[1]);//预报路线
    }
}

/**
 * @description 仅清空台风数据
 * @param excepts - {Array<bxmap.layer.Vector>} 例外图层，哪些图层数据不清空
 */
bxmap.Typhoon.prototype.clearData = function (excepts) {
    //清空定时器
    clearInterval(this._timer);
    //清空台风实际路径
    this.path = [];
    //不在播放
    this.playing = false;

    //关闭弹框
    this.infoWindow && this.infoWindow.close();

    excepts = excepts || [];
    //实际路线节点
    if(this.realNodesLayer && !bxmap.common.exist(this.realNodesLayer, excepts)){
        this.realNodesLayer.getSource().clear(true);
    }
    //预报路线节点
    if(this.forecastNodesLayer && !bxmap.common.exist(this.forecastNodesLayer, excepts)){
        this.forecastNodesLayer.getSource().clear(true);
    }
    //台风实际路线、预报路线和台风图标
    if(this.resourceLayer && !bxmap.common.exist(this.resourceLayer, excepts)){
        this.resourceLayer.getSource().clear(true);
    }
    //24小时、48小时警戒线
    if(this.picketLineLayer && !bxmap.common.exist(this.picketLineLayer, excepts)){
        this.picketLineLayer.getSource().clear(true);
    }
}

/**
 * @description 清除图层
 */
bxmap.Typhoon.prototype.clear = function () {
    //清空定时器
    clearInterval(this._timer);
    //清空台风实际路径
    this.path = [];
    //不在播放
    this.playing = false;

    //关闭弹框
    this.infoWindow && this.infoWindow.close();

    var map = this.bmap.getMap();
    if(map){
        //实际路线节点
        this.realNodesLayer && map.removeLayer(this.realNodesLayer);
        //预报路线节点
        this.forecastNodesLayer && map.removeLayer(this.forecastNodesLayer);
        //台风实际路线、预报路线和台风图标
        this.resourceLayer && map.removeLayer(this.resourceLayer);
        //24小时、48小时警戒线
        this.picketLineLayer && map.removeLayer(this.picketLineLayer);
    }
}

/**
 * @description 设置风圈
 * @param node - {JSON} 格式{"WD":"20.9","JD":"116.2","EN7Radii":"220","ES7Radii":"220","WS7Radii":"260","WN7Radii":"240","EN10Radii":"50","ES10Radii":"80","WS10Radii":"80","WN10Radii":"50"}
 */
bxmap.Typhoon.prototype.setWindCircle = function (node) {
    if(node == null) return;

    var n = node;
    var center = [n.X,n.Y];
    //台风位置
    this._typhoonFeature.setGeometry(new ol.geom.Point([Number(center[0]),Number(center[1])]));

    //7级风圈
    if(n.EN7Radii){
        var path = this.getSectorPoints(center, n.EN7Radii,0,90,30);
        this._windEN7.setGeometry(new ol.geom.Polygon([path]));
    }else{
        this._windEN7.setGeometry(null);
    }
    if(n.ES7Radii){
        var path = this.getSectorPoints(center, n.ES7Radii,90,180,30);
        this._windES7.setGeometry(new ol.geom.Polygon([path]));
    }else{
        this._windES7.setGeometry(null);
    }
    if(n.WS7Radii){
        var path = this.getSectorPoints(center, n.WS7Radii,180,270,30);
        this._windWS7.setGeometry(new ol.geom.Polygon([path]));
    }else{
        this._windWS7.setGeometry(null);
    }
    if(n.WN7Radii){
        var path = this.getSectorPoints(center, n.WN7Radii,270,360,30);
        this._windWN7.setGeometry(new ol.geom.Polygon([path]));
    }else{
        this._windWN7.setGeometry(null);
    }
    //10级风圈
    if(n.EN10Radii){
        var path = this.getSectorPoints(center, n.EN10Radii,0,90,30);
        this._windEN10.setGeometry(new ol.geom.Polygon([path]));
    }else{
        this._windEN10.setGeometry(null);
    }
    if(n.ES10Radii){
        var path = this.getSectorPoints(center, n.ES10Radii,90,180,30);
        this._windES10.setGeometry(new ol.geom.Polygon([path]));
    }else{
        this._windES10.setGeometry(null);
    }
    if(n.WS10Radii){
        var path = this.getSectorPoints(center, n.WS10Radii,180,270,30);
        this._windWS10.setGeometry(new ol.geom.Polygon([path]));
    }else{
        this._windWS10.setGeometry(null);
    }
    if(n.WN10Radii){
        var path = this.getSectorPoints(center, n.WN10Radii,270,360,30);
        this._windWN10.setGeometry(new ol.geom.Polygon([path]));
    }else{
        this._windWN10.setGeometry(null);
    }
}

/**
 * @description 创建台风要素
 * @return {ol.Feature}
 */
bxmap.Typhoon.prototype.createTyphoonFeature = function () {
    var feature = new ol.Feature();
    feature.setStyle(new ol.style.Style({
        image: new ol.style.Icon({
            src: bxmap.Resource.TyphoonPng
        })
    }));
    return feature;
}

/**
 * @description 逆时针计算扇形风圈的点集合
 * @param center - {Array<String|Number>}中心点，例如[117.23,23.123]
 * @param radius - {String|Number} 半径km
 * @param startAngle - {String|Number} 起始角度（单位°）
 * @param endAngle - {String|Number} 结束角度（单位°）
 * @param pointNum - {String|Number} 返回构成的弧点个数，默认30
 * @return {Array}
 */
bxmap.Typhoon.prototype.getSectorPoints = function(center,radius,startAngle,endAngle,pointNum) {
    radius = Number(radius) * 1000;

    if(!this.isProjected){
        var MetersPerUnit = 111319.49079327358; //1度多少米
        radius = radius/MetersPerUnit;//转化为度
    }
    center = [Number(center[0]),Number(center[1])];
    startAngle = Number(startAngle);
    endAngle = Number(endAngle);
    pointNum = Number(pointNum || 30);

    var sin;
    var cos;
    var x;
    var y;
    var angle;
    var points = new Array();
    var pointsLL = new Array();
    var lonlat = center;
    points.push([center[0], center[1]]);
    for (var i = 0; i <= pointNum; i++) {
        angle = startAngle + (endAngle - startAngle) * i / pointNum;
        sin = Math.sin(angle * Math.PI / 180);
        cos = Math.cos(angle * Math.PI / 180);
        x = center[0] + radius * sin;
        y = center[1] + radius * cos;

        points[i + 1] = [x, y];
    }
    points.push([center[0], center[1]]);
    for (var j = 0; j < points.length; j++) {
        pointsLL[j] = points[j];
    }

    return pointsLL;
}

/**
 * @description 加载预报数据到地图上（包括预报路线和预报节点），预报时间分组数据必需已计算，例如在play方式之后使用
 * @param node
 */
bxmap.Typhoon.prototype.addForecastDataToMap = function (node) {
    //清空预报路线节点
    this.forecastNodesLayer.getSource().clear();
    //根据预报时间分组的数据
    var forecastGroupPaths = this._forecastGroupPaths;
    if(!forecastGroupPaths ||  !forecastGroupPaths.length) return;

    //获取预报数据
    var ybData = this._getForecastData(node, forecastGroupPaths);
    //创建预报路线节点
    var coords = this._addForecastNodesToMap(ybData);
    //创建预报路线
    if(coords.length){
        coords.unshift([Number(node.X),Number(node.Y)]); //添加该位置为首节点
    }
    this._forecastPathFeature.getGeometry().setCoordinates(coords);
}

/**
 * @description 开启实际节点、预测节点点击事件
 * @private
 */
bxmap.Typhoon.prototype.enableNodeDetected = function () {
    this.disableNodeDetected();

    //实际路线节点图层
    var layer = this.realNodesLayer;
    layer.registerDetectingFeature(this.bmap);
    layer.on("afterselect", this._handleRealLayerNodeClick, this);

    //预测路线节点图层
    layer = this.forecastNodesLayer;
    layer.registerDetectingFeature(this.bmap);
    layer.on("afterselect", this._handleForecastLayerNodeClick, this);

    this.enableNodeClick = true;
}

/**
 * @description 取消实际节点、预测节点点击事件
 * @private
 */
bxmap.Typhoon.prototype.disableNodeDetected = function () {
    //实际路线节点图层
    var layer = this.realNodesLayer;
    layer.unregisterDetectingFeature(this.bmap);
    layer.un("afterselect", this._handleRealLayerNodeClick, this);

    //预测路线节点图层
    layer = this.forecastNodesLayer;
    layer.unregisterDetectingFeature(this.bmap);
    layer.un("afterselect", this._handleForecastLayerNodeClick, this);

    this.enableNodeClick = false;
}

/**
 * @description 实际路线节点点击事件
 * @param evt
 * @private
 */
bxmap.Typhoon.prototype._handleRealLayerNodeClick = function (evt) {
    // //正在播放中不允许点击操作
    // if (this.playing) return;

    //当前点击的真实路径节点
    this._clickedRealNode = evt.feature;

    //取消选中要素
    if(!evt.feature){
        this.infoWindow && this.infoWindow.close();
        return;
    }

    var feature = evt.feature;
    var node = feature["nodeData"];

    //播放状态下风圈位置不再重新设置
    if (!this.playing){
        //显示风圈和预报数据
        this.setWindCircle(node);
        //加载预报数据到地图上（包括预报路线和预报节点）
        this.addForecastDataToMap(node);
    }

    //信息弹框
    if (this.showInfoWindow) {
        var html = this._getRealInfoHtml(node);
        var coord = feature.getGeometry().getCoordinates();

        //台风名称 + 时间
        var name = node.TFM,
            date = this._formateTyphoonTime(node.RQSJ);
        var title = '<span style="font-weight:bold;font-size:14px;">'+name+'</span>&nbsp;&nbsp;&nbsp;&nbsp;'+date;
        this.infoWindow.show(coord, html, title);
    }

    //触发nodeclicked
    this.dispatchEvent({type: 'nodeclicked', target: this, feature: feature});
}

/**
 * @description 预测路线节点点击事件
 * @param evt
 * @private
 */
bxmap.Typhoon.prototype._handleForecastLayerNodeClick = function (evt) {
    //正在播放中不允许点击操作
    if (this.playing) return;

    //避免真实路径节点弹框信息被关闭
    if(!evt.feature && this._clickedRealNode){
        return;
    }

    //取消选中要素
    if(!evt.feature){
        this.infoWindow && this.infoWindow.close();
        return;
    }

    var feature = evt.feature;
    //信息弹框
    if (this.showInfoWindow) {
        var node = feature["nodeData"];
        var html = this._getForecastInfoHtml(node);
        var coord = feature.getGeometry().getCoordinates();
        //预报台 + 时间
        var name = node.TM,
            date = this._formateTyphoonTime(node.RQSJ);
        var title = '<span style="font-weight:bold;font-size:14px;">'+name+'</span>&nbsp;&nbsp;&nbsp;&nbsp;'+date+'&nbsp;预报';
        this.infoWindow.show(coord, html, title);
    }

    //触发nodeclicked
    this.dispatchEvent({type: 'nodeclicked', target: this, feature: feature});
}

/**
 * 将台风时间格式化为 8月20日5时5分5秒
 * @param time {String} 时间格式为：YYYY-MM-DD HH:mm:ss
 * @return {String}
 * @private
 */
bxmap.Typhoon.prototype._formateTyphoonTime = function (time) {
    //YYYY-MM-DD HH:mm:ss
    //处理为8月20日5时5分5秒
    var output = "";
    var MM = time.substr(5, 2);
    if (MM == "00") return output;
    MM = (Number(MM) < 10 ? MM.substr(1) : MM) + "月";
    var DD = time.substr(8, 2);
    DD = (Number(DD) < 10 ? DD.substr(1) : DD) + "日";

    var ss = time.substr(17, 2);
    ss = ss !== "00" ? ((Number(ss) < 10 ? ss.substr(1) : ss) + "秒") : "";

    var mm = time.substr(14, 2);
    mm = mm !== "00" ? ((Number(mm) < 10 ? mm.substr(1) : mm) + "分") : (ss ? "0分" : "");

    var HH = time.substr(11, 2);
    HH = HH !== "00" ? ((Number(HH) < 10 ? HH.substr(1) : HH) + "时") : (mm ? "0时" : "");

    output = MM + DD + HH + mm + ss;

    return output;
}

/**获取台风详细信息模版**/
bxmap.Typhoon.prototype._getRealInfoHtml = function(node) {
    var data = node || {};

    var tfmc = data.TFM + "(" + data.TFBH + ")", //台风名称
        zxwz = data.JD + "°|" + data.WD + "°", //中心位置
        zxqy = (data.ZXQY || "-") + "&nbsp;百帕", //中心气压
        zdfs = (data.ZXFS || "-") + "&nbsp;米/秒", //最大风速
        dj = data.ZXFS ? bxmap.Typhoon.getTyphoonLevel(data.ZXFS) : "-", //等级
        ydsd = (data.YDSD || "-") + "&nbsp;公里/小时", //移动速度
        ydfx = (data.YDFX || "-"),
        qjbj = (data.RADIUS7 || "-") + "&nbsp;公里", //七级风圈
        sjbj = (data.RADIUS10 || "-") + "&nbsp;公里"; //十级风圈


    html = '<div style="height:167px;width:180px;color: #615e5e;">';
    html += '<div>台风名称：' + tfmc + '</div>';
    html += '<div>中心位置：' + zxwz + '</div>';
    html += '<div>最大风速：' + zdfs + '</div>';
    html += '<div>中心气压：' + zxqy + '</div>';
    html += '<div>等&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;级：' + dj + '</div>';
    html += '<div>移动速度：' + ydsd + '</div>';
    html += '<div>移动方向：' + ydfx + '</div>';
    html += '<div>七级风圈半径：' + qjbj + '</div>';
    html += '<div>十级风圈半径：' + sjbj + '</div>';
    html += '</div>';
    return html;
}
/**
 *
 * @param node
 * @return {String}
 * @private
 */
bxmap.Typhoon.prototype._getForecastInfoHtml = function(node) {
    var data = node || {};

    var ybt = data.TM, //预报台
        fbsj = this._formateTyphoonTime(data.YBSJ), //发布时间
        ybsj = this._formateTyphoonTime(data.RQSJ), //预报时间
        zxwz = data.JD + "°|" + data.WD + "°", //中心位置
        zxqy = (data.ZXQY || "-") + "&nbsp;百帕", //中心气压
        zdfs = (data.ZXFS || "-") + "&nbsp;米/秒", //最大风速
        dj = data.ZXFS ? bxmap.Typhoon.getTyphoonLevel(data.ZXFS) : "-"; //等级

    var html = '<div style="height:129px;width:180px;color: #615e5e;">';
    html += '<div>预报台：' + ybt + '</div>';
    html += '<div>发布时间：' + fbsj + '</div>';
    html += '<div>预报时间：' + ybsj + '</div>';
    html += '<div>中心位置：' + zxwz + '</div>';
    html += '<div>中心气压：' + zxqy + '</div>';
    html += '<div>最大风速：' + zdfs + '</div>';
    html += '<div">等&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;级：' + dj + '</div>';
    html += '</div>';
    return html;
}

/**
 * @description 从预报数据中获取中国预报台风数据
 * @param ybData Array 预报数据
 * @private
 * @return Array
 */
bxmap.Typhoon.prototype._subChinaYbData = function (ybData) {
    var output = [];//中国预报路径
    for (var i = 0; i < ybData.length; i++) {
        var record = ybData[i];
        if (record.TM == "中国") {
            output.push(record);
        }
    }
    return output;
}

/**
 * @description 获取指定位置节点的预报数据
 * @param node {JSON} 指定位置台风位置信息
 * @param forecastGroupPaths {Array} 根据预报数据分组后的中国预报数据
 * @private
 */
bxmap.Typhoon.prototype._getForecastData = function (node, forecastGroupPaths) {
    //转为日期格式
    function ToDate(dateString) {
        var str = dateString.replace(/-/g, "/");
        return new Date(str);
    }

    var ybPath = [];
    var date1 = ToDate(node.RQSJ); // 指定位置过去时间
    var date2 = ToDate(forecastGroupPaths[0].YBSJ); //预报时间(发布时间)
    for (var i = 0; i < forecastGroupPaths.length; i++) {
        var record = forecastGroupPaths[i];
        var date3 = ToDate(record.YBSJ); //预报时间
        //date1以前的数据为预报数据；找到离date1时间最接近的预报数据
        if (date1 >= date3 && date3 >= date2) {
            date2 = date3;
            ybPath = record.data;
        }
    }

    ybPath = ybPath.concat([]); //赋值数据
    return ybPath;
}

/**
 * @description 创建预报节点到地图
 * @param ybdata
 * @return {Array} 预报节点数组
 * @private
 */
bxmap.Typhoon.prototype._addForecastNodesToMap = function (ybdata) {
    var output = [];
    ybdata = ybdata || [];
    for(var i = 0; i < ybdata.length; i++){
        var record = ybdata[i];
        //输出经度纬度
        output.push([Number(record.X),Number(record.Y)]);

        //预报数据节点
        var position = [Number(record.X), Number(record.Y)];
        var feature = new ol.Feature({geometry: new ol.geom.Point(position)});
        feature["symbol"] = bxmap.Typhoon.getTyphoonLevel(record.ZXFS);
        feature["nodeData"] = record;
        this.forecastNodesLayer.getSource().addFeature(feature);
    }
    return output;
}

/**
 * @description 根据预报时间（发布时间）将预报数据分组
 * @param ybChinaData {Array} 中国预报数据
 * @return {Array} 格式 [{YBSJ:"",data:[{},...]}]
 * @private
 */
bxmap.Typhoon.prototype._groupByYBSJ = function(ybChinaData) {
    ybdata = ybChinaData || [];
    var map = {}, dest = [];
    for (var i = 0; i < ybdata.length; i++) {
        var temp = ybdata[i];
        if (!map[temp.YBSJ]) {
            dest.push({
                YBSJ: temp.YBSJ,
                data: [temp]
            });
            map[temp.YBSJ] = dest.length - 1; //存储数组索引
        }
        //同一预报时间则添加
        else {
            var index = map[temp.YBSJ];
            dest[index].data.push(temp);
        }
    }
    return dest;
}

/**
 * @description 初始化台风路线要素（实际路线和预报路线）
 * @private
 */
bxmap.Typhoon.prototype._initWindPath = function () {
    //台风实际路线
    var feat = this._realPathFeature = new ol.Feature({geometry: new ol.geom.LineString([])});
    feat.setStyle(new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: [30,144,255],//"#000000",
            width: 1
        })
    }));
    this.resourceLayer.getSource().addFeature(feat);

    //台风预报路线
    feat = this._forecastPathFeature = new ol.Feature({geometry: new ol.geom.LineString([])});
    feat.setStyle(new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "#ffd700",
            width: 2,
            lineDash: [10, 2, 10] //虚线
        })
    }));
    this.resourceLayer.getSource().addFeature(feat);
}

/**
 * @description 初始化风圈要素
 * @private
 */
bxmap.Typhoon.prototype._initWindCircle = function () {
    //风圈样式
    if (!this._windStyles) {
        this._windStyles = {
            "Seven": new ol.style.Style({
                fill: new ol.style.Fill({
                    color: [60, 179, 113, 0.35]
                }),
                stroke: new ol.style.Stroke({
                    color: [60, 179, 113],
                    width: 1
                }),
                image: new ol.style.Circle({
                    radius: 7,
                    fill: new ol.style.Fill({
                        color: [60, 179, 113]
                    })
                })
            }),
            "Ten": new ol.style.Style({
                fill: new ol.style.Fill({
                    color: [255, 20, 147, 0.35]
                }),
                stroke: new ol.style.Stroke({
                    color: [255, 165, 0],
                    width: 1
                }),
                image: new ol.style.Circle({
                    radius: 7,
                    fill: new ol.style.Fill({
                        color: [255, 165, 0]
                    })
                })
            })
        };
    }
    //创建7级风圈要素
    this._windEN7 = new ol.Feature({geometry: new ol.geom.Polygon([])});
    this._windEN7.setStyle(this._windStyles.Seven);
    this._windES7 = new ol.Feature({geometry: new ol.geom.Polygon([])});
    this._windES7.setStyle(this._windStyles.Seven);
    this._windWS7 = new ol.Feature({geometry: new ol.geom.Polygon([])});
    this._windWS7.setStyle(this._windStyles.Seven);
    this._windWN7 = new ol.Feature({geometry: new ol.geom.Polygon([])});
    this._windWN7.setStyle(this._windStyles.Seven);
    this.resourceLayer.getSource().addFeatures([this._windEN7, this._windES7, this._windWS7, this._windWN7]);

    //创建10级风圈要素
    this._windEN10 = new ol.Feature({geometry: new ol.geom.Polygon([])});
    this._windEN10.setStyle(this._windStyles.Ten);
    this._windES10 = new ol.Feature({geometry: new ol.geom.Polygon([])});
    this._windES10.setStyle(this._windStyles.Ten);
    this._windWS10 = new ol.Feature({geometry: new ol.geom.Polygon([])});
    this._windWS10.setStyle(this._windStyles.Ten);
    this._windWN10 = new ol.Feature({geometry: new ol.geom.Polygon([])});
    this._windWN10.setStyle(this._windStyles.Ten);
    this.resourceLayer.getSource().addFeatures([this._windEN10, this._windES10, this._windWS10, this._windWN10]);

    //台风图标
    this._typhoonFeature = this.createTyphoonFeature();
    this.resourceLayer.getSource().addFeature(this._typhoonFeature);
}

/**
 * @description 根据年份获取台风列表
 * @param year {String|Number} 年份
 */
bxmap.Typhoon.getTyphoonListByYear = function (year) {
    var output = null;
    $.ajax({
        url: GLOBAL.domainRest + "/typhoon/list",
        type: "POST",
        async: false,
        data: {
            year: year
        },
        dataType: "json",
        success: function (data) {
            if(data.obj){
                output = eval("("+data.obj+")");
            }
        }
    });
    return output;
}

/**
 * @description 根据名称获取台风列表
 * @param name {String} 名称
 */
bxmap.Typhoon.getTyphoonListByName = function (name) {
    var output = null;
    $.ajax({
        url: GLOBAL.domainRest + "/typhoon/list",
        type: "POST",
        async: false,
        data: {
            name: name
        },
        dataType: "json",
        success: function (data) {
            if(data.obj){
                output = eval("("+data.obj+")");
            }
        }
    });
    return output;
}

/**
 * @description 获取指定台风编号的路径数据（包括实际数据和预报数据）
 * @param bh
 * @return  null|[] [0]-实际路径;[1]-预报路径
 */
bxmap.Typhoon.getTyphoonPath = function (bh) {
    if(!bh) return null;
    var output = null;
    $.ajax({
        url: GLOBAL.domainRest + "/typhoon/getPath",
        type: "POST",
        async: false,
        data: {
            TFBH: bh
        },
        dataType: "json",
        success: function (data) {
            if(data.obj){
                output = eval("("+data.obj+")");
            }
        }
    });
    return output;
}

/**
 * @description 根据风速获取台风级别
 * @param windSpeed {String|Number}
 * @return {String}
 */
bxmap.Typhoon.getTyphoonLevel = function (windSpeed){
    var level = "";
    var speed= Number(windSpeed);
    if(isNaN(speed)) return level;

    if (speed <= 17.1){
        level = "热带低压";
    } else if (speed > 17.1 && speed <= 24.4){
        level = "热带风暴";
    } else if (speed > 24.4 &&speed <= 32.6){
        level = "强热带风暴";
    } else if (speed > 32.6 &&speed <= 41.4){
        level = "台风";
    } else if (speed > 41.4 && speed <= 50.9){
        level = "强台风";
    } else if (speed > 50.9){
        level = "超强台风";
    }
    return level;
}



/**
 * @classdesc 台风列表弹框，依赖jDialog
 * @constructor
 */
bxmap.TyphoonListDialog = function () {
    /**
     * @description 台风列表弹框
	 * @readonly
     * @type {jDialog.dialog}
     */
    this.dialog = null;

    /**
     * @description 当前选择的年份
 	 * @public
     * @type {String}
     */
    this.selectedYear = '';

    /**
     * @description 台风名称查询条件
     * @type {String}
     */
    this.condition = '';

	/**
     * @description 当前年份的台风列表
 	 * @readonly
     * @type Array
     */
	this.list = [];
}

/**
 * @description 设置台风展示的地图
 * @param bmap {bxmap.Map}
 */
bxmap.TyphoonListDialog.prototype.setTyphoonMap = function(bmap){
    this.bmap = bmap;
}

/**
 * @description 打开窗体
 */
bxmap.TyphoonListDialog.prototype.show = function () {
    var self = this;
    var html = this._getTyphoonDialogHtml();
    this.dialog = jDialog.dialog({
        title: '台风操作面板',
        width: 430,
        top: 120,
        closeable: false,
        height: 410,
        left: document.documentElement.scrollWidth - 500,
        modal: false, // 非模态，即不显示遮罩层
        content: html
    });
    //收缩
    this._collpse();
    // $('.j-dialog-title').css({"-webkit-box-sizing": "border-box"});

	this._initYearSelect();

	this._bindingEvents();

	this.refresh();
}

/**
 * @description 关闭窗体
 */
bxmap.TyphoonListDialog.prototype.close = function () {
    if(this.dialog){
        this.dialog.close();
    }
    if(this._typhoonObject){
        this._typhoonObject.clear();
    }
}

/**
 * @description 刷新台风列表
 */
bxmap.TyphoonListDialog.prototype.refresh = function(){
	var list = [];
	if(this.condition){
        list = bxmap.Typhoon.getTyphoonListByName(this.condition);
	}else{
	    list = bxmap.Typhoon.getTyphoonListByYear(this.selectedYear);
    }

    //列表html
    this._createTFListHtml(list);
}

bxmap.TyphoonListDialog.prototype._expand = function () {
    var dialog = this.dialog;
    dialog && dialog.height(700);
}
bxmap.TyphoonListDialog.prototype._collpse = function () {
    var dialog = this.dialog;
    dialog && dialog.height(410);
}

/**
 * @description 获取台风操作窗体html
 * @return {String}
 * @private
 */
bxmap.TyphoonListDialog.prototype._getTyphoonDialogHtml = function(){
	var html = '';
    html += '<div id="typhoon_div">';
    html += ' <div id="con_div">';
    html += '  <select id="year_select" style="margin:4px;width:65px"></select>';
    html += '  <span style="margin-left:5px">输入名称：</span>';
    html += '  <input type="text" id="condition_tfName" style="width:120px;height:24px" />';
    html += '  <button id="search_typhoon" style="margin-left:10px;cursor:pointer">查询</button>';
    html += ' </div>';
    html += ' <div id="typhoon_table_div" style="height:300px;">';
    html += '  <table id="typhoon_table_head" style="">';
    html += '   <thead>';
    html += '    <tr>';
    html += '     <th>选择</th>';
    html += '     <th>台风编号</th>';
    html += '     <th>台风名</th>';
    html += '     <th>英文名</th>';
    html += '    </tr>';
    html += '   </thead>';
    html += '  </table>';
    html += '  <div id="typhoon_table_body_div" style="height:260px;width:100%">';
    html += '   <div id="typhoon_data_div">';
    html += '    <div id="progressflash" class="loadflash hiden">';
    html += '     <div class="loadingFlash">';
    html += '      <span class="icon-loading" style="font-size:24px;"></span>';
    html += '     </div>';
    html += '    </div>';
    html += '    <table id="typhoon_table_body" style="margin-top:0;border:1px solid gray">';
    html += '     <tbody></tbody>';
    html += '    </table>';
    html += '   </div>';
    html += '  </div>';
    html += ' </div>';
    html += ' <div id="typhoon_track_div" style="height:280px;display: none;">';
    html += '  <div>';
    html += '   <span id="typhoonText" style="height:30px;color:#9c9c9c">台风路径信息</span>';
    html += '  </div>';
    html += '  <table id="typhoon_track_table_head" style="">';
    html += '   <thead>';
    html += '    <tr style="border-bottom:1px solid gray">';
    html += '     <th>时间</th>';
    html += '     <th>风速（米/秒）</th>';
    html += '     <th style="width:70px">等级</th>';
    html += '     <th>移动方向</th>';
    html += '    </tr>';
    html += '   </thead>';
    html += '  </table>';
    html += '  <div id="typhoon_track_table_div" style="height:250px">';
    html += '   <div id="typhoon_track_data">';
    html += '    <table id="typhoon_track_table_body" style="margin-top:0;border:1px solid gray">';
    html += '     <tbody></tbody>';
    html += '    </table>';
    html += '   </div>';
    html += '  </div>';
    html += ' </div>';
    html += '</div>';
    return html;
}

/**
 * @description 绑定窗体事件
 * @private
 */
bxmap.TyphoonListDialog.prototype._bindingEvents = function () {
    var self = this;
    //年份改变
    $("#year_select").on("change", function () {
        //当前年份
        self.selectedYear = $(this).val();
        //查询条件
        self.condition = undefined;

        self.refresh();
    });

    //查询按钮点击
    $("#search_typhoon").on("click", function () {
        //查询条件
        self.condition = $("#condition_tfName").val();
        self.refresh();
    });

    //勾选台风事件
    $("#typhoon_table_body_div").on("change", "input[name='TF']", function(e) {
        var ischecked = $(this).is(':checked');
        //取消所有选中
        $("#typhoon_table_body_div").find("input[name='TF']").prop("checked",false);
        //设置当前选中状态
        $(this).prop("checked",ischecked);
        //台风对象
        if(self.bmap && !self._typhoonObject){
            self._typhoonObject = new bxmap.Typhoon({bmap: self.bmap});
            //地图上点击节点，路径详情列表自动调整位置
            self._typhoonObject.on("nodeclicked", function (evt) {
                var node = evt.feature.nodeData;
                var path = evt.target.path;
                var index = -1;
                for(var i = 0; i < path.length; i++){
                    if(path[i].RQSJ == node.RQSJ){
                        index = i;
                        break;
                    }
                }
                if(index > -1) {
                    //移除样式
                    $("#typhoon_track_data").find("tr").removeClass("TFselected");
                    var $elem = $("#typhoon_track_data tr").eq(index);
                    $elem.addClass("TFselected");
                    $("#typhoon_track_table_div").mCustomScrollbar("scrollTo", $elem, "first");
                }
            });
        }
        if(ischecked){
            //展开
            self._expand();
            var tfbh = $(this).attr("tfbh");
            self._typhoonObject.play(tfbh);
        }else {
            //收缩
            self._collpse();
            self._typhoonObject.clearData([self._typhoonObject.picketLineLayer]);
        }

        //台风详情
        var path = self._typhoonObject.path;
        if(path && path.length){
            $("#typhoon_track_div").show();
            //设置路径信息html
            self._createTFPathDetail(path);
        }else{
            $("#typhoon_track_div").hide();
        }
    });

    //台风路径详情点击
    $("#typhoon_track_data").on("click", "tr", function (e) {
        //移除样式
        $("#typhoon_track_data").find("tr").removeClass("TFselected");
        $(this).addClass("TFselected");

        var featureId = $(this).find("td").html(); //日期
        var typhoonObject = self._typhoonObject;
        //可点击
        if(typhoonObject.enableNodeClick && typhoonObject.realNodesLayer){
            var feature = typhoonObject.realNodesLayer.getSource().getFeatureById(featureId);
            typhoonObject.realNodesLayer.select(feature);
        }
    });
}

/**
 * @description 初始化年份
 * @private
 */
bxmap.TyphoonListDialog.prototype._initYearSelect = function() {
    var time = new Date();
    var firstDate = 1945;//1945年以后所有台风
    var curr = time.getFullYear();
    var now = curr;
    var html = '';
    while (now >= firstDate) {
        //html+='<option value="'+now+'">'+now+'</option>';
        html += '<option style="color:#000;" value="' + now + '">' + now + '</option>';
        now--;
    }
    $("#year_select").html(html);

    //当前年份
    this.selectedYear = curr + "";
}

/**
 * @description 生成台风列表html
 * @param list
 * @private
 */
bxmap.TyphoonListDialog.prototype._createTFListHtml = function(list) {
    var html = '<tr><td colspan="4">暂无台风数据</td></tr>';
    if (list) {
        if (list.length) html = '';
        for (var i = 0; i < list.length; i++) {
            var tfdata = list[i];
            html += '<tr>';
            html += ' <td><input type="checkbox" name="TF" tfbh="' + tfdata.TFBH + '" style="cursor: pointer;" /></td>';
            html += ' <td>' + tfdata.TFBH + '</td>';
            html += ' <td>' + tfdata.TFM + '</td>';
            html += ' <td>' + tfdata.TFME + '</td>';
            html += '</tr>';
        }
    }

    $("#typhoon_table_body tbody").html(html);
    $("#typhoon_table_body_div").mCustomScrollbar({
        theme: "minimal-dark"
    });
}

/**
 * @description 生成台风详情html
 * @param path
 * @private
 */
bxmap.TyphoonListDialog.prototype._createTFPathDetail = function (path) {
    //title
    var node = path[0];//实际路径
    var tfm = node.TFM;
    var tfbh = node.TFBH;
    var title = tfm + '(' + tfbh + ')路径信息';
    $("#typhoonText").html(title);

    //详情
    var html = '';
    for (var i = 0; i < path.length; i++) {
        var record = path[i];
        html += '<tr><td>' + record.RQSJ + '</td><td>' + record.ZXFS + '</td><td style="width:70px">' + bxmap.Typhoon.getTyphoonLevel(record.ZXFS) + '</td><td >' + record.YDFX + '</td></tr>';
    }
    $("#typhoon_track_table_body tbody").html(html);
    $("#typhoon_track_table_div").mCustomScrollbar({
        theme: "minimal-dark"
    });
}


/**
 * @classdesc 船讯AIS
 * @param options
 * @param options.bmap {bxmap.Map}
 * @param options.showDefaultDialog {Boolean} 默认为true，点击船舶显示弹框
 * @param options.autoRefreshTime {Number} 默认60秒刷新一次，自动刷新时间（毫秒），-1表示不刷新
 * @fires "out"|"over"|"beforeselect"|"afterselect"
 * @extends {ol.Object}
 * @constructor
 */
bxmap.AIS = function (options) {
    ol.Object.call(this);

    var opts = options || {};

    /**
     * @description 小于该精度时才会显示渔船
     * @public
     * @type {Number}
     */
    this.displayResolution = 200;

    /**
     * @description 是否为投影坐标系
     * @public
     * @type {Boolean}
     */
    this.isProjected = true;

    /**
     * @description 自动刷新时间，默认30s
     * @readonly
     * @type {number}
     */
    this.autoRefreshTime = this.autoRefreshTime == null ? 60000 : this.autoRefreshTime;

    /**
     * @description 地图
     * @readonly
     * @type {bxmap.Map}
     */
    this.bmap = null;

    /**
     * @description 船舶信息弹框
     * @readonly
     * @type {bxmap.overlay.Popup}
     */
    this.dialog = null;

    /**
     * @description 船舶信息弹框状态。1-船舶信息明细状态，2-显示轨迹状态
     * @type {String}
     */
    this.dialogState = 1;

    /**
     * @description 是否显示默认弹框
     * @public
     * @type {Boolean}
     */
    this.showDefaultDialog = opts.showDefaultDialog == null ? true : opts.showDefaultDialog;

    /**
     * @description 渔船图层
     * @readonly
     * @type {bxmap.layer.Vector}
     */
    this.shipLayer = null;

    /**
     * @description 轨迹线图层
     * @readonly
     * @type {bxmap.layer.Vector}
     */
    this.trailLineLayer = null;

    /**
     * @description 轨迹线节点图层
     * @readonly
     * @type {bxmap.layer.Vector}
     */
    this.trailNodeLayer = null;

    /**
     * @description 轨迹线节点弹框
     * @type {bxmap.overlay.Popup}
     */
    this.infoWindow = new bxmap.overlay.Popup({
        showClose: false,
        showTitle: false,
        positioning : 'bottom-center',
        panToCenter: false
    });

    /**
     * @description 当前dialog弹框信息对应的要素
     * @type {ol.Feature}
     * @private
     */
    this._shipInfoFeature = null;
    //初始化图层
    this._initializeLayers();
    this.setMap(opts.bmap);
    //开启自动刷新船舶
    this.enableAutoRefresh();
}
ol.inherits(bxmap.AIS, ol.Object);

/**
 * @description 设置地图
 * @param bmap {bxmap.Map}
 */
bxmap.AIS.prototype.setMap = function (bmap) {
    if (this.bmap && this.bmap == bmap) return;
    if (this.bmap) {
        this._removeFromMap(this.bmap);
    }

    if (bmap) {
        this._addToMap(bmap);
    }
    this.bmap = bmap;
    if (this.bmap) {
        //根据地图坐标系判断是否为经纬度坐标系
        var view = this.bmap.getMap().getView();
        var sourceProj = view.getProjection();
        if (sourceProj.getUnits() == 'degrees') {
            this.isProjected = false;
        }
    }
}
bxmap.AIS.prototype._removeFromMap = function (bmap) {
    var map = bmap.getMap();
    map.un("moveend",this._handleMapExtentChange, this);
    map.removeOverlay(this.infoWindow);
    map.removeLayer(this.shipLayer);
    map.removeLayer(this.trailLineLayer);
    map.removeLayer(this.trailNodeLayer);

    //注销要素检测事件
    bmap.setFeatureDetectingActive({
        type: "pointermove",
        target: this.shipLayer,
        active : false
    });
    bmap.setFeatureDetectingActive({
        type: "click",
        target: this,
        active : false
    });
    bmap.setFeatureDetectingActive({
        type: "pointermove",
        target: this.trailNodeLayer,
        active : false
    });
}
bxmap.AIS.prototype._addToMap = function (bmap) {
    var map = bmap.getMap();
    map.on("moveend",this._handleMapExtentChange, this);
    map.addOverlay(this.infoWindow);
    map.addLayer(this.shipLayer);
    map.addLayer(this.trailLineLayer);
    map.addLayer(this.trailNodeLayer);

    //开启要素检测事件
    var self = this;
    bmap.setFeatureDetectingActive({
        type: "pointermove",
        active : true,
        target: this.shipLayer,
        layerFilter: function(layer){
            return layer == self.shipLayer;
        },
        callback : function(evt){
            var feature = evt.currentFeature;
            var lastFeature = evt.lastFeature;
            self._handleFeatureState(feature, lastFeature);
        }
    });
    bmap.setFeatureDetectingActive({
        type: "click",
        active : true,
        target: this,
        layerFilter: function(layer){
            return layer == self.shipLayer;
        },
        callback : function(evt){
            var feature = evt.currentFeature;
            var lastFeature = evt.lastFeature;

            //避免select方法为_lastSelected赋值后，与map click要素不一致
            if(self._lastSelected && self._lastSelected != lastFeature){
                //TODO
            }else{
                self._lastSelected = lastFeature;
            }

            if(feature || self._lastSelected){
                //取消当前船舶信息要素的高亮
                if(feature && self._shipInfoFeature){
                    self.setUnhighlight(self._shipInfoFeature);
                }
                self._shipInfoFeature = feature || self._lastSelected;
                //选中要素
                self.select(feature);
            }
        }
    });
    bmap.setFeatureDetectingActive({
        type: "pointermove",
        active : true,
        target: this.trailNodeLayer,
        layerFilter: function(layer){
            return layer == self.trailNodeLayer;
        },
        callback : function(evt){
            var feature = evt.currentFeature;
            if(feature && feature["nodeData"]){
                var info = feature["nodeData"];
                var html = '<div style="height:70px;color: #615e5e;">';
                html += '<div>经度：' + info.x + '</div>';
                html += '<div>纬度：' + info.y + '</div>';
                html += '<div>速度：' + info.speed + '</div>';
                html += '<div>最后时间：' + info.lasttime + '</div>';
                html += '</div>';
                var coord = feature.getGeometry().getCoordinates();
                self.infoWindow.show(coord, html);
            }else{
                self.infoWindow.close();
            }
        }
    });
}

/**
 * @description 初始化图层
 * @param bmap
 * @private
 */
bxmap.AIS.prototype._initializeLayers = function () {
    //船舶图层
    this.shipLayer = new ol.layer.Vector({
        source: new ol.source.Vector()
    });
    this.shipLayer.on("change:visible", function (evt) {
        var visible = evt.target.getVisible();
        //图层可见开启自动刷新船舶信息，不可见则禁用
        if(visible){
            //立即刷新一次
            this.refresh();
            this.enableAutoRefresh();
        }else{
            this.disableAutoRefresh();
        }
    }, this)

    //轨迹线
    var trailLineStyle = new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "#1e53ff",
            width: 2
        })
    });
    var traceDefaultStyles = bxmap.common.getDefaultTraceStyles();
    var startPointStyle = traceDefaultStyles["startPoint"].clone();
    var endPointStyle = traceDefaultStyles["endPoint"].clone();
    this.trailLineLayer = new ol.layer.Vector({
        source: new ol.source.Vector(),
        style: function (feature) {
            var geometry = feature.getGeometry();
            var styles = [trailLineStyle];

            geometry.forEachSegment(function (start, end) {
                var dx = end[0] - start[0];
                var dy = end[1] - start[1];
                var rotation = Math.atan2(dy, dx);
                styles.push(new ol.style.Style({
                    geometry: new ol.geom.Point([start[0] + dx / 2, start[1] + dy / 2]),
                    image: new ol.style.IrregularShape({
                        size: [15, 10],
                        paths: [[[0, 0], [14, 5], [0, 10], [5, 5], [0, 0]]],
                        fill: new ol.style.Fill({color: "#1e53ff"}),
                        stroke: new ol.style.Stroke({color: "#1e53ff", width: 1}),
                        rotation: -rotation
                    })
                }));
            });

            //起始点
            var coordinates = feature.getGeometry().getFirstCoordinate();
            startPointStyle.setGeometry(new ol.geom.Point(coordinates));
            styles.push(startPointStyle);
            //终点
            coordinates = feature.getGeometry().getLastCoordinate();
            endPointStyle.setGeometry(new ol.geom.Point(coordinates));
            styles.push(endPointStyle);

            return styles;
        }
    });

    //轨迹节点
    this.trailNodeLayer = new ol.layer.Vector({
        source: new ol.source.Vector(),
        style: new ol.style.Style({
            image: new ol.style.Circle({
                radius: 4,
                fill: new ol.style.Fill({
                    color: "#ffff00"
                }),
                stroke: new ol.style.Stroke({
                    color: "#22226c",
                    width: 1
                })
            }),
            zIndex: Infinity
        })
    });

    //轨迹节点改变重新绘制轨迹线
    this._trailNodeLayerChangeListener = this.trailNodeLayer.getSource().on("change", function (evt) {
        if(!this.trailLineLayer) return;

        this.trailLineLayer.getSource().clear(true);
        var featrues = this.trailNodeLayer.getSource().get("nodeFeatures");
        if(!featrues) return;

        var coordinates = [];
        for(var i = 0; i < featrues.length; i++) {
            var coord = featrues[i].getGeometry().getCoordinates();
            coordinates.push(coord);
        }

        var lineFeature = new ol.Feature({
            geometry: new ol.geom.LineString(coordinates)
        });
        this.trailLineLayer.getSource().addFeature(lineFeature);
    }, this);
}

bxmap.AIS.prototype._handleMapExtentChange = function(evt){
    switch (this.dialogState){
        case 1: //船舶信息明细状态
        {
            this.refresh();
            break;
        }
        case 2: //显示轨迹状态
        {
            var source = this.trailNodeLayer.getSource();
            var data = source.get("nodes");
            this._redrawTrailLine(data);
            break;
        }
        default:
            break;

    }
};

/**
 * @description 管理船舶信息弹框状态
 * @private
 */
bxmap.AIS.prototype._handleDialogState = function () {
    //船舶详情
    if(this.dialogState == 1){
        //船舶图层显示
        var view = this.bmap.getMap().getView();
        var resolution = view.getResolution();
        //不满足显示渔船的条件
        if(resolution <= this.displayResolution) {
            this.shipLayer.setVisible(true);
        }
        //隐藏轨迹图层
        this.trailNodeLayer.setVisible(false);
        this.trailLineLayer.setVisible(false);
        this._clearTrailLine();
        //轨迹节点信息弹框
        this.infoWindow.close();
    }
    //轨迹查询
    else if(this.dialogState == 2){
        //隐藏船舶图层
        this.shipLayer.setVisible(false);
        //显示轨迹图层
        this.trailNodeLayer.setVisible(true);
        this.trailLineLayer.setVisible(true);
    }
}

/**
 * @description 刷新船舶位置
 */
bxmap.AIS.prototype.refresh = function () {
    var view = this.bmap.getMap().getView();
    var resolution = view.getResolution();
    //不满足显示渔船的条件
    if(resolution > this.displayResolution) {
        this.shipLayer && this.shipLayer.setVisible(false);
        return;
    }

    if(this.shipLayer){
        //显示图层
        this.shipLayer.setVisible(true);

        var center = view.getCenter();
        //如果投影坐标系则转为EPSG:4326
        if(this.isProjected) {
            center = ol.proj.toLonLat(center);
        }

        //获取船舶信息并添加到地图
        var self = this;
        bxmap.AIS.getShipsByResolution(center, resolution, function (data) {
            if (data && data.length) {
                //更新船舶
                self._updateFeatureToMap(data);
                //上次点击选中
                if(self._shipInfoFeature){
                    //设置要素高亮样式
                    self.setHighlight(self._shipInfoFeature, true);
                    var info = self._shipInfoFeature["shipInfoData"];
                    if(this.showDefaultDialog){
                        this._showInfoDialog(info.shipid, info.source);
                    }
                }
            }
        });
    }
}

/**
 * @description 开启自动刷新数据
 */
bxmap.AIS.prototype.enableAutoRefresh = function () {
    if(!this._autoTimer) {
        var self = this;
        //开启自动刷新
        if (self.autoRefreshTime > 0) {
            self._autoTimer = setInterval(function () {
                self.refresh()
            }, self.autoRefreshTime);
        }
    }
}

/**
 * @description 禁用自动刷新数据
 */
bxmap.AIS.prototype.disableAutoRefresh = function () {
    if(this._autoTimer){
        clearInterval(this._autoTimer);
        this._autoTimer = null;
    }
}

/**
 * @description 选中要素，由于仅能选中一个要素，所以会自动取消上一个选中的要素，如果上一个要素存在的话
 * @param {ol.Feature} feature
 */
bxmap.AIS.prototype.select = function(feature){
    //取消lastFeature选中状态
    var lastFeature = this._lastSelected;

    //移除click状态
    if(lastFeature){
        var events = bxmap.common.getFeatureDetectedParams(lastFeature);
        delete events["click"];
        this.setUnhighlight(lastFeature);
    }

    //beforeSelect
    this.dispatchEvent({type:'beforeselect',target:this,feature:feature,lastfeature:lastFeature});

    if(feature){
        //设置当前要素选中状态
        var events = bxmap.common.getFeatureDetectedParams(feature);
        events["click"] = true;

        //设置要素高亮样式
        this.setHighlight(feature, true);

        var info = feature["shipInfoData"];
        if(this.showDefaultDialog){
            this._showInfoDialog(info.shipid, info.source);
        }
    }
    //afterSelect
    this.dispatchEvent({type:'afterselect',target:this,feature:feature});

    this._lastSelected = feature;

    
}

/**
 * @description 设置高亮效果
 * @param feature {ol.Feature} 要素
 * @param withBox {Boolean|undefined} 是否带有外框样式，默认false
 */
bxmap.AIS.prototype.setHighlight = function (feature, withBox) {
    var oImgStyle = feature.getStyle()[0].getImage();
    var hoverStyle = new ol.style.Style({
        image : new ol.style.IrregularShape({
            fill: oImgStyle.getFill(),
            size: oImgStyle.getSize(),
            paths: oImgStyle.getPaths(),
            angle: oImgStyle.getAngle(),
            snapToPixel: oImgStyle.getSnapToPixel(),
            stroke :new ol.style.Stroke({color:'red',width:1}),
            rotation: oImgStyle.getRotation(),
            rotateWithView: oImgStyle.getRotateWithView()
        })
    });
    var nStyle = [hoverStyle];
    if(withBox){
        var boxStyle = new ol.style.Style({
            image: new ol.style.IrregularShape({
                stroke: new ol.style.Stroke({color:'red',width:2}),
                size: [40,40],
                paths: [
                    [[8,0],[0,0],[0,8]],
                    [[0,32],[0,40],[8,40]],
                    [[32,40],[40,40],[40,32]],
                    [[40,8],[40,0],[32,0]]
                ]
            })
        });
        nStyle.push(boxStyle);
    }
    feature.setStyle(nStyle);
}

/**
 * @description 设置取消高亮效果
 * @param feature {ol.Feature} 要素
 */
bxmap.AIS.prototype.setUnhighlight = function (feature) {
    var oImgStyle = feature.getStyle()[0].getImage();
    var nStyle = [new ol.style.Style({
        image : new ol.style.IrregularShape({
            fill: oImgStyle.getFill(),
            size: oImgStyle.getSize(),
            paths: oImgStyle.getPaths(),
            angle: oImgStyle.getAngle(),
            snapToPixel: oImgStyle.getSnapToPixel(),
            stroke :new ol.style.Stroke({color:'black',width:1}),
            rotation: oImgStyle.getRotation(),
            rotateWithView: oImgStyle.getRotateWithView()
        })
    })];
    feature.setStyle(nStyle);
}

/**
 * @description 清除数据
 */
bxmap.AIS.prototype.clear = function(){
    //清空查询面板
    this.$searchPanel && this.$searchPanel.empty();
    //关闭AIS弹框
    if(this.dialog){
        this.dialog.close();
        this.dialog = null;
    }
    //注销监听
    ol.Observable.unByKey(this._trailNodeLayerChangeListener);
    //禁用自动刷新
    this.disableAutoRefresh();
    //移除地图
    this.bmap && this._removeFromMap(this.bmap);
}

/**
 * @description 初始化查询面板，需要引入bootstrap-select.min.js
 * @param target  jquery Element
 */
bxmap.AIS.prototype.initSearchPanel = function (jq) {
    var self = this;
    var $jq = self.$searchPanel= jq;
    var html = '';
    html += '<select class="selectpicker" data-live-search="true">';
    html += '  <option>请输入船名、呼号、IMO或MMSI</option>';
    html += '</select>';
    $jq.append(html);

    var $selectElem = $jq.find("select");
    var $Plugin = $selectElem.selectpicker('refresh');
    var $SelectPicker = $Plugin.data('selectpicker');

    //重置为文本请输入船名、呼号、IMO或MMSI
    function resetPlugin(){
        $selectElem.html('<option>请输入船名、呼号、IMO或MMSI</option>');
        $selectElem.selectpicker('refresh');
        $SelectPicker.reloadLi();
    }

    //监听文本改变方法
    $SelectPicker.$searchbox.off("input propertychange").on("input propertychange", function () {
        var val = $(this).val();
        bxmap.AIS.search(val, function (data) {
            var html = '';
            if(data && data.length){
                for (var i = 0; i < data.length; i++) {
                    var item = data[i];
                    html += '<option value="'+ item[1] +'">' + item[0] + '</option>'
                }
            }else {
                html = '<option>请输入船名、呼号、IMO或MMSI</option>';
            }
            $selectElem.html(html);
            $SelectPicker.reloadLi();
        });
    });
    //监听弹出查询框
    $selectElem.on('show.bs.select', function () {
        resetPlugin();
    });
    //解决点击第一个项时不触发changed.bs.select的问题
    $SelectPicker.$menuInner.on('click', 'li a', function (e) {
        var clickedIndex = $(this).parent().data('originalIndex');
        if (clickedIndex == 0) {
            $selectElem.trigger('changed.bs.select', [0]);
        }
    });
    //查询条件改变
    $selectElem.on('changed.bs.select', function (evt, index) {
        var shipid = evt.target.options[index].value;
        if(shipid == "请输入船名、呼号、IMO或MMSI") return;

        //重置选项
        resetPlugin();

        bxmap.AIS.getShipPositionById(shipid, function(infos){
            
            if(infos.length==0) return;

            //地图跳转
            var info = infos[0];
            var lon = Number(info[1]);
            var lat = Number(info[2]);
            var center = [lon, lat];
            if(self.isProjected){
                center = ol.proj.fromLonLat(center);//经纬度转为EPSG3857
            }

            var view = self.bmap.getMap().getView();
            view.setCenter(center);
            view.setResolution(80);
            //延迟
            setTimeout(function(){
                if(self.shipLayer){
                    var source = self.shipLayer.getSource();
                    var feature = source.getFeatureById(shipid);
                    if(!feature){
                        var item = info;
                        var record = {
                            shipName: item[0],
                            lon: item[1],
                            lat: item[2],
                            csx: item[3], //船首向 heading
                            cjx: item[20], //船迹向 cog
                            nav: item[21],//
                            mmsi: item[6],
                            shipType: item[8], //船类型代码
                            length: item[9], //船长
                            beam: item[10], //
                            utc: item[12], //更新时间
                            source: item[13],
                            destination: item[15],
                            speed: item[14], //船速 sog
                            shipid: item[19] //船id
                        };
                        feature = self._createOrUpdateFeature(record);
                    }

                    //取消临时高亮
                    if(self._shipInfoFeature){
                        self.setUnhighlight(self._shipInfoFeature);
                    }
                    self.select(feature);
                    //设置当前弹框信息要素
                    self._shipInfoFeature = feature;
                }
            },300);
        });
    });
}

/**
 * @description 显示弹框
 * @param shipid
 */
bxmap.AIS.prototype._showInfoDialog = function (shipid, source) {
    if (shipid) {
        var self = this;
        bxmap.AIS.getShipInfoById(shipid, source, function (info) {
            if (info) {
                //获取弹框html
                var html = self._getInfoDialogHtml(info);
                var title = "船舶明细-" + info.shipName; //船舶名称
                if(!self.dialog){
                    self.dialog = jDialog.dialog({
                        title: title,
                        width: 430,
                        top: 120,
                        closeable: true,
                        height: 400,
                        left: document.documentElement.scrollWidth - 500,
                        modal: false, // 非模态，即不显示遮罩层
                        content: html,
                        events:{
                            close: function () {
                                self.dialog = null;

                                //取消临时高亮
                                if(self._shipInfoFeature){
                                    self.setUnhighlight(self._shipInfoFeature);
                                }
                                self._shipInfoFeature = null;

                                //取消选中
                                self.select(null);

                                //设置船舶信息明细状态
                                self.dialogState = 1;
                                self._handleDialogState();
                            }
                        }
                    });
                }else {
                    self._collpse();
                    self.dialog.title(title);
                    self.dialog.content(html);
                }

                var shipId = info.shipid; //船舶id
                //绑定按钮事件
                self._bindingInfoDialogEvents(shipId);
            }
        });
    }
}

bxmap.AIS.prototype._collpse = function () {
    var dialog = this.dialog;
    dialog && dialog.height(400);
}

/**
 * @description 更新/添加要素
 * @private
 */
bxmap.AIS.prototype._updateFeatureToMap = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        var record = {
            shipName: item[0],
            lon: item[1],
            lat: item[2],
            csx: item[3], //船首向 heading
            cjx: item[4], //船迹向 cog
            nav: item[5],
            mmsi: item[6],
            shipType: item[10], //船类型代码
            length: item[11], //船长
            beam: item[12], //
            utc: item[14], //更新时间
            source: item[15],
            destination: item[16],
            speed: item[17], //船速 sog
            shipid: item[18] //船id
        };
        this._createOrUpdateFeature(record);
    }
}

bxmap.AIS.prototype._createOrUpdateFeature = function (info) {
    var output = null;

    var record = info;
    var color = this._getcolor(record.shipType); //获取船舶颜色

    //船舶位置
    var lon = Number(record.lon);
    var lat = Number(record.lat);
    var p = [lon, lat];
    if(this.isProjected){
        p = ol.proj.fromLonLat(p);//经纬度转为EPSG3857
    }
    var location = new ol.geom.Point(p);

    //是否已存在
    var featureId = record.shipid;
    var source = this.shipLayer.getSource();
    var oldFeature = output = source.getFeatureById(featureId);
    if(oldFeature){
        //更新时间一致则无需更改
        if(record.utc == oldFeature["shipInfoData"].utc) return oldFeature;

        //status：0-静止，1-航行，2-右转，3-左转，4-系泊
        var status = this._getShipState(record, oldFeature["shipInfoData"]);

        //重置船舶信息
        oldFeature.setGeometry(location);
        oldFeature["shipInfoData"] = record;
        var symbol = this._getShipStyle(color, record.cjx, status);
        oldFeature.setStyle(symbol);
    }
    //添加新的要素
    else{
        //status：0-静止，1-航行，2-右转，3-左转，4-系泊
        var status = this._getShipState(record);

        var feature = output = new ol.Feature({
            geometry: location, //几何信息（坐标点）
            type: "ship"
        });
        feature.setId(record.shipid);//id
        feature["shipInfoData"] = record;
        var symbol = this._getShipStyle(color, record.cjx, status);
        feature.setStyle(symbol);
        source.addFeature(feature);
    }
    return output;
}

/**
 * @description 判断船舶运行状态
 * @param newShipInfo
 * @param oldShipInfo
 * @private
 */
bxmap.AIS.prototype._getShipState = function (newShipInfo, oldShipInfo) {
    //status：0-静止，1-航行，2-右转，3-左转，4-系泊
    var status = 1;
    if (newShipInfo.nav == 1 || newShipInfo.nav == 5) {
        status = 4;
    } else if (Number(newShipInfo.speed) < 0.5) {
        status = 0;
    }
    else if(oldShipInfo){
        var nwe = Number(newShipInfo.cjx), //新的方向
            old = Number(oldShipInfo.cjx); //旧的方向
        if (nwe > old) {
            status = 2;
        }else if (nwe < old) {
            status = 3;
        }
    }

    return status;
}

/**
 * @description 弹框html
 * @param info
 * @private
 */
bxmap.AIS.prototype._getInfoDialogHtml = function (info) {
    var html = '';
    html += '<div id="divShipInfo" class="divShipInfo" style="margin-right: 10px;">';
    //船舶信息
    html += ' <table class="xinfo" style="height:265px;width:100%;font-size:14px;margin:4px;line-height:23px; ">';
    html += '  <tbody>';
    html += '   <tr>';
    html += '    <td style="width: 20% !important;">MMSI：</td><td style="width: 20% !important;"><div class="o text-overflow-hidden" title="' + info.mmsi + '">' + info.mmsi + '</div></td>';
    html += '    <td style="width: 25% !important;">预到港：</td><td style="width: 35% !important;"><div class="ro text-overflow-hidden" style="width:130px;" title="' + info.dest + '">' + info.dest + '</div></td>';
    html += '   </tr>';
    html += '   <tr>';
    html += '    <td style="width: 20% !important;">IMO：</td><td style="width: 20% !important;"><div class="o">' + info.imo + '</div></td>';
    html += '    <td style="width: 25% !important;">预到时间：</td><td style="width: 35% !important;"><div class="ro">' + info.eta + '</div></td>';
    html += '   </tr>';
    html += '   <tr>';
    html += '    <td style="width: 20% !important;">呼号：</td><td style="width: 20% !important;"><div class="o">' + info.callsign + '</div></td>';
    html += '    <td style="width: 25% !important;">经度：</td><td style="width: 35% !important;"><div class="ro">' + info.lon + '</div></td>';
    html += '   </tr>';
    html += '   <tr>';
    html += '    <td style="width: 20% !important;">中文名：</td><td style="width: 20% !important;"><div class="o">' + info.cnname + '</div></td>';
    html += '    <td style="width: 25% !important;">纬度：</td><td style="width: 35% !important;"><div class="ro">' + info.lat + '</div></td>';
    html += '   </tr>';
    html += '   <tr>';
    html += '    <td style="width: 20% !important;">船主：</td><td style="width: 20% !important;"><div class="o text-overflow-hidden" title="'+ info.owner +'">' + info.owner + '</div></td>';
    html += '    <td style="width: 25% !important;">船舶类型：</td><td style="width: 35% !important;"><div class="ro">' + info.type + '</div></td>';
    html += '   </tr>';
    html += '   <tr>';
    html += '    <td style="width: 20% !important;">国籍：</td><td style="width: 20% !important;"><div class="o text-overflow-hidden" title="'+ info.nation +'">' + info.nation + '</div></td>';
    html += '    <td style="width: 25% !important;">船首向：</td><td style="width: 35% !important;"><div class="ro">' + info.rotat + '</div></td>';
    html += '   </tr>';
    html += '   <tr>';
    html += '    <td style="width: 20% !important;">船长：</td><td style="width: 20% !important;"><div class="o">' + info.lengths + '</div></td>';
    html += '    <td style="width: 25% !important;">船迹向：</td><td style="width: 35% !important;"><div class="ro">' + info.cour + '</div></td>';
    html += '   </tr>';
    html += '   <tr>';
    html += '    <td style="width: 20% !important;">船宽：</td><td style="width: 20% !important;"><div class="o">' + info.beam + '</div></td>';
    html += '    <td style="width: 25% !important;">状态：</td><td style="width: 35% !important;"><div class="ro text-overflow-hidden" title="'+ info.status +'">' + info.status + '</div></td>';
    html += '   </tr>';
    html += '   <tr>';
    html += '    <td style="width: 20% !important;">载重吨：</td><td style="width: 20% !important;"><div class="o">' + info.deadweight + '</div></td>';
    html += '    <td style="width: 25% !important;">航速：</td><td style="width: 35% !important;"><div class="ro">' + info.speed + '</div></td>';
    html += '   </tr>';
    html += '   <tr>';
    html += '    <td style="width: 20% !important;">总吨：</td><td style="width: 20% !important;"><div class="o">' + info.gross + '</div></td>';
    html += '    <td style="width: 25% !important;">吃水：</td><td style="width: 35% !important;"><div class="ro">' + info.dra + '</div></td>';
    html += '   </tr>';
    html += '   <tr>';
    html += '    <td style="width: 20% !important;">净吨：</td><td style="width: 20% !important;"><div class="o">' + info.tons + '</div></td>';
    html += '    <td style="width: 25% !important;">更新时间：</td><td style="width: 35% !important;"><div class="ro">' + info.lasttime + '</div></td>';
    html += '   </tr>';
    html += '   <tr id="tr_ais" style="display: none;">';
    html += '    <td colspan="4" style="color:red;text-align:right;"><span>最新船位，来自卫星AIS：</span><span id="si_OBCTime" title=""></span></td>';
    html += '   </tr>';
    html += '  </tbody>';
    html += ' </table>';
    //轨迹时间条件
    html += ' <div id="divTrack_time" style="display:none;width:100%">';
    html += '  <div style="float: left;width:100%">';
    html += '   <div><span style="float:left;padding:5px 10px;height:30px;">开始时间：</span></div>';
    html += '   <div style="width:180px;float:left" class="input-group"><input style="height:26px;font-size:12px;cursor: pointer;" class="form-control date" type="text" title="请选择开始时间" id="start" placeholder="开始时间" value="" readonly="true" /></div>';
    html += '  </div>';
    html += '  <div style="float: left;width:100%">';
    html += '   <div style="float:left"><span style="float:left;padding:5px 10px;height:30px;">结束时间：</span></div>';
    html += '   <div style="width:180px;float:left;" class="input-group"><input style="height:26px;font-size:12px;cursor: pointer;" class="form-control date" type="text" title="请选择结束时间" id="end" placeholder="结束时间" readonly="true" /></div>';
    html += '  </div>';
    html += ' </div>';
    //查询/取消按钮
    html += ' <div id="divTrack_btns" style="display:none;text-align: right;margin:15px 10px 10px 0px">';
    html += '  <button id="searchTrack" class="btn btn-default btn-xs ais_op_btn">查询</button>';
    html += '  <button id="return_btn" class="btn btn-default btn-xs ais_op_btn">取消</button>';
    html += ' </div>';
    //取消历史航次按钮
    html += ' <div id="divReturnHisNav_btns" style="display:none;text-align: right;margin:15px 10px 10px 0px">';
    html += '  <button id="nav_return_btn" class="btn btn-default btn-xs ais_op_btn">取消</button>';
    html += ' </div>';
    //查询信息
    html += ' <div id="msginfo_div" style="display:none;width:100%;text-align:center;float:left">';
    html += '   <span style="color:red;font-size:13px" id="msginfo_cont">正在查询数据……</span>';
    html += ' </div>';
    //历经港口信息
    html += '<div id="ais_route_port" style="position: relative; display: none;">';
    html += ' <p style="padding: 5px 0;border-top: 1px solid #e8e8e8;">历经港口</p>';
    html += ' <table width="100%" border="0" cellspacing="0" cellpadding="0">';
    html += '  <thead>';
    html += '   <tr>';
    html += '    <th scope="col" height="24" align="center">动态</th>';
    html += '    <th scope="col" align="center">港口</th>';
    html += '    <th scope="col"  align="center" style="width:40%;">时间</th>';
    html += '   </tr>';
    html += '  </thead>';
    html += ' </table>';
    html += ' <div id="ais_route_port_content" style="height:190px;"><table width="100%" border="0" cellspacing="0" cellpadding="0">';
    html += '  <tbody>';
    html += '  </tbody>';
    html += ' </table></div>';
    html += '</div>';
    //历史航次列表内容
    html += '<div id="ais_hisNavInfos" style="display:none;"><div class="ljgk"></div></div>';
    //轨迹按钮
    html += ' <div id="opretate_div" style="float:right;margin:10px">';
    html += '  <button id="locate_btn" class="btn btn-default btn-xs ais_op_btn">定位</button>';
    html += '  <button id="track_btn" class="btn btn-default btn-xs ais_op_btn">轨迹</button>';
    html += '  <button id="track_port_btn" class="btn btn-default btn-xs ais_op_btn">历经港口</button>';
    html += '  <button id="track_nav_btn" class="btn btn-default btn-xs ais_op_btn">历史航次</button>';
    html += ' </div>';
    html += '</div>';
    return html;
}
bxmap.AIS.prototype._bindingInfoDialogEvents = function(shipId){
    var self = this;

    //查询目标 trail-轨迹;port-历经港口
    var targets = {"trail": "trail", "port": "port"};
    var searchTarget = "trail";
    //点击轨迹按钮展开轨迹查询条件
    $("#track_btn").on("click",function(){
        //展开弹框
        self.dialog && self.dialog.height(460);

        $("#divTrack_time").css({"display":"flex"});
        $("#divTrack_btns").css({"display":"block"});
        $("#opretate_div").css({"display":"none"});
        searchTarget = targets.trail;
    });
    //定位按钮
    $("#locate_btn").on("click", function(){
        if(self._shipInfoFeature){
            self.bmap.zoomToFeature(self._shipInfoFeature);
        }
    });
    //取消查询
    $("#return_btn").on("click",function(){
        self._collpse();//收缩弹框

        $("#divTrack_time").css({"display":"none"});//时间
        $("#divTrack_btns").css({"display":"none"});//查询取消按钮
        $("#divReturnHisNav_btns").css({"display":"none"});//取消历史航次按钮
        $("#opretate_div").css({"display":"block"}); //轨迹/历经港口/历史航次按钮
        $("#msginfo_div").css({"display":"none"});//查询结果信息
        $("#ais_route_port").css({"display":"none"});//历经港口列表信息

        //设置船舶信息明细状态
        self.dialogState = 1;
        self._handleDialogState();
    });
    //取消历史航次按钮
    $("#nav_return_btn").on("click", function () {
        self._collpse();//收缩弹框

        $("#msginfo_div").css({"display": "none"});//查询结果信息
        $("#ais_hisNavInfos").css({"display": "none"});//历史航次列表
        $("#divReturnHisNav_btns").css({"display":"none"});//取消历史航次按钮
        $("#opretate_div").css({"display":"block"}); //轨迹/历经港口/历史航次按钮

        //设置船舶信息明细状态
        self.dialogState = 1;
        self._handleDialogState();
    });

    //查询按钮
    $("#searchTrack").on("click",function() {
        self.dialog && self.dialog.height(480);
        var startTime = $("#start").val();
        var endTime = $("#end").val();
        $("#msginfo_div").css({"display": "block"});
        $("#msginfo_cont").html("正在查询数据,请稍后……");
        if(searchTarget == targets.trail){
            bxmap.AIS.getShipTrackPath(shipId, startTime, endTime, function (data) {
                if (data.length > 0) {
                    $("#msginfo_cont").html("查询成功");
                    //缩放至轨迹线
                    self._zoomToTrail(data);
                    //重绘轨迹图层
                    self._redrawTrailLine(data);
                    //设置轨迹查询状态
                    self.dialogState = 2;
                    self._handleDialogState();
                } else {
                    $("#msginfo_cont").html("暂无数据");
                }
            });
        }else if(searchTarget == targets.port){
            bxmap.AIS.getShipTrackPort(shipId, startTime, endTime, function (data) {
                if (data.length > 0) {
                    $("#msginfo_div").css({"display": "none"});
                    $("#ais_route_port").css({"display": "block"});
                    self.dialog && self.dialog.height(715);
                    var html = self._getTrackPortHtml(data);
                    $("#ais_route_port_content tbody").html(html);
                    $("#ais_route_port_content").mCustomScrollbar({
                        theme: "minimal-dark"
                    });
                } else {
                    $("#msginfo_cont").html("暂无数据");
                    self.dialog && self.dialog.height(480);
                    $("#ais_route_port_content tbody").html("");
                    $("#ais_route_port").css({"display": "none"});
                }
            });
        }
    });

    //历经港口按钮
    $("#track_port_btn").on("click",function () {
        //展开弹框
        self.dialog && self.dialog.height(460);

        $("#divTrack_time").css({"display":"flex"});
        $("#divTrack_btns").css({"display":"block"});
        $("#opretate_div").css({"display":"none"});
        searchTarget = targets.port;
    });

    //历史航次
    $("#track_nav_btn").on("click", function () {
        //展开弹框
        self.dialog && self.dialog.height(420);
        $("#divReturnHisNav_btns").css({"display":"block"});//取消历史航次按钮
        $("#opretate_div").css({"display":"none"});
        //查询信息
        $("#msginfo_div").css({"display": "block"});
        $("#msginfo_cont").html("正在查询数据,请稍后……");

        bxmap.AIS.getVoyage(shipId, function(nowdata, hisdata){
            var num = (nowdata ? nowdata.length : 0) + (hisdata ? hisdata.length : 0);
            if(num > 0){
                $("#msginfo_div").css({"display": "none"});
                $("#ais_hisNavInfos").css({"display": "block"});

                self.dialog && self.dialog.height(715);
                var html = self._getHisNavHtml(shipId, nowdata, hisdata);
                $("#ais_hisNavInfos .ljgk").html(html);
                $("#ais_hisNavInfos").mCustomScrollbar({
                    theme: "minimal-dark"
                });
            }else {
                $("#msginfo_cont").html("暂无数据");
                self.dialog && self.dialog.height(420);
                $("#ais_hisNavInfos").html("");
                $("#ais_hisNavInfos").css({"display": "none"});
            }
        });
    });
    //选中历史航次
    $("#ais_hisNavInfos").on("click", ".historyVoyage", function () {
        var checked = this.checked;
        $("#ais_hisNavInfos").find(".historyVoyage").attr("checked",false);
        this.checked = checked;

        if(checked){
            var params = this.value.split(",");
            bxmap.AIS.getShipTrackPath(params[0], params[1], params[2], function (data) {
                //缩放至轨迹线
                self._zoomToTrail(data);
                //重绘轨迹图层
                self._redrawTrailLine(data);
                //设置轨迹查询状态
                self.dialogState = 2;
                self._handleDialogState();
            })
        }else {
            //清除轨迹数据
            self._clearTrailLine();
        }
    });

    $("#start").jeDate({
        format: 'YYYY-MM-DD hh:mm:ss',
        isinitVal: true,
        initDate: [{DD:"-3"},true],
        festival:false,
        isTime: true
    });
    $("#end").jeDate({
        format: 'YYYY-MM-DD hh:mm:ss',
        isinitVal: true,
        festival:false,
        isTime: true
    });
}

//历经港口列表内容
bxmap.AIS.prototype._getTrackPortHtml = function (data) {
    var html = "";
    for(var i = 0; i < data.length; i++){
        var record = data[i];
        html += '<tr><td>'+record[0]+'</td>';
        html += '<td>'+record[1]+'</td>';
        html += '<td style="width:40%;">'+record[2]+'</td></tr>';
    }
    return html;
}
//历史航次列表内容
bxmap.AIS.prototype._getHisNavHtml = function (shipid, nowdata, hisdata) {
    
    function createItemHtml(item, running) {
        var processTime = running ? "在途" : item.processTime;
        var distance = running ? "": item.distance;
        var tag = shipid + ","+ item.startTime +"," + item.endTime;
        var html = '';
        html += ' <div class="ljgkborder">';
        html += '  <div class="ljgkleft">';
        html += '   <input class="historyVoyage" type="checkbox" value="'+ tag +'"/>';
        html += '  </div>';
        html += '  <div class="ljgkright">';
        html += '   <div class="ljgkrt">';
        html += '    <div class="ljgkrtl">';
        html += '     <h3>'+ item.startPort +'</h3>';
        html += '     <p>'+ item.startTime +'</p>';
        html += '    </div>';
        html += '    <div class="ljgkrtc">';
        html += '     <h4>'+ processTime +'</h4>';
        html += '     <p>' + distance + '</p>';
        html += '    </div>';
        html += '    <div class="ljgkrtl">';
        html += '     <h3>' + item.endPort + '</h3>';
        html += '     <p>'+ item.endTime +'</p>';
        html += '    </div>';
        html += '   </div>';
        html += '   <div class="ljgkrb">';
        html += '    <span>平均航速:'+ item.avgSog +'kn</span>在港:'+ item.inPortTime +'</span>';
        html += '   </div>';
        html += '  </div>';
        html += ' </div>';
        return html;
    }

    var html = '<h4 style="padding: 5px 0;border-top: 1px solid #e8e8e8;">航次</h4>';
    if(nowdata && nowdata.length){
        html += createItemHtml(nowdata[0], true);
    }
    if(hisdata && hisdata.length){
        for(var i = 0; i < hisdata.length; i++){
            html += createItemHtml(hisdata[i], false);
        }
    }
    return html;
}

/**
 * @description 获取颜色
 * @param type
 * @return {String}
 * @private
 */
bxmap.AIS.prototype._getcolor = function(type) {
    var typ = Number(type);
    var x = "#ffff00";
    switch (typ) {
        case 60://"客船":
        case 61:
        case 62:
        case 63:
        case 64:
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
            x = "#0000ff";
            break;
        case 70://"货船":
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
            x = "#00ff00";
            break;
        case 55://"执法":
            x = "#ff0000";
            break;
        case 80://"油轮":
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
            x = "#00ffff";
            break;
        case 50://"引航":
            x = "#ff00ff";
            break;
        case 37://"游艇""高速船":
            x = "#d3d3d3";
            break;
        case 51://"搜救":
            x = "#ff9400";
            break;
        case 52://"拖轮":
            x = "#8c00ff";
            break;
        default:
            x = "#ffff00";
            break;
    }
    return x;
}

/**
 * @description 获取船舶样式
 * @param color 颜色
 * @param cjx 船迹向
 * @param status：0-静止，1-航行，2-右转，3-左转，4-系泊
 */
bxmap.AIS.prototype._getShipStyle = function(color, cjx, status) {
    var shipStyle;
    var angle = bxmap.math.toRadians(Number(cjx));
    var rotation = angle;

    switch (status) {
        case 0:
            shipStyle = [new ol.style.Style({
                image: new ol.style.IrregularShape({
                    fill :new ol.style.Fill({color:color}),
                    stroke: new ol.style.Stroke({color:'black',width:1}),
                    size: [11,20],
                    paths: [[[5,20],[0,0],[10,0],[5,20]]],
                    angle: Math.PI,
                    rotation: rotation
                })
            })];
            break;
        case 1:
            shipStyle = [new ol.style.Style({
                image: new ol.style.IrregularShape({
                    fill : new ol.style.Fill({color:color}),
                    stroke: new ol.style.Stroke({color:'black',width:1}),
                    size: [11,26],
                    paths: [[[ 5, 26 ], [5,20],[0,0],[10,0],[5,20], [ 5, 26 ]]],
                    angle: Math.PI,
                    rotation: rotation
                })
            })];
            break;
        case 2:
            shipStyle = [new ol.style.Style({
                image: new ol.style.IrregularShape({
                    fill :new ol.style.Fill({color:color}),
                    stroke: new ol.style.Stroke({color:'black',width:1}),
                    size: [11,26],
                    paths: [[[0, 26], [ 5, 26 ],[5,20],[0,0],[10,0],[5,20], [5,26],[0,26]]],//[[0, 30], [ 5, 30 ], [ 5, 20 ], [ 0, 10 ], [ 0, 0 ], [ 5, 5 ], [ 10, 0 ], [ 10, 10 ], [ 5, 20 ], [ 5, 30 ], [0, 30]],
                    angle: Math.PI,
                    rotation: rotation
                })
            })];
            break;
        case 3:
            shipStyle = [new ol.style.Style({
                image: new ol.style.IrregularShape({
                    fill :new ol.style.Fill({color:color}),
                    stroke: new ol.style.Stroke({color:'black',width:1}),
                    size: [11,26],
                    paths: [[[10,26],[5,26],[5,20],[0,0],[10,0],[5,20],[5,26],[10,26]]],//[[10, 30], [ 5, 30 ], [ 5, 20 ], [ 0, 10 ], [ 0, 0 ], [ 5, 5 ], [ 10, 0 ], [ 10, 10 ], [ 5, 20 ], [ 5, 30 ], [10, 30]],
                    angle: Math.PI,
                    rotation: rotation
                })
            })];
            break;
        case 4:
            shipStyle = [new ol.style.Style({
                image: new ol.style.IrregularShape({
                    fill: new ol.style.Fill({color:color}),
                    stroke: new ol.style.Stroke({color:'black',width:1}),
                    size: [10,10],
                    paths: [[[0, 5], [5, 10], [10, 5],[5, 0],[0, 5]]]
                })
            })];
            break;
    }
    return shipStyle;
}

/**
 * @private
 * @description 控制要素状态（选中/非选中）
 * @param {ol.Feature} feature 检测到的当前要素
 * @param {ol.Feature} lastFeature 上一次检测到的要素
 */
bxmap.AIS.prototype._handleFeatureState = function(feature, lastFeature){
    //设置上一个要素非hover状态
    if(lastFeature){
        this.dispatchEvent({type:'out',target:this, feature:lastFeature});
        var event = bxmap.common.getFeatureDetectedParams(lastFeature);
        if(!event["click"]){
            this.setUnhighlight(lastFeature);
        }
    }

    //设置当前要素hover状态
    if(feature){
        //触发over状态
        this.dispatchEvent({type:'over',target:this, feature:feature});
        this.setHighlight(feature);
    }
}

/**
 * @description 重绘轨迹线
 * @param arr
 * @private
 */
bxmap.AIS.prototype._redrawTrailLine = function (arr) {
    if(!arr || !arr.length) return;

    //抽稀数据
    var zoom = this.bmap.getMap().getView().getZoom();
    var wgs84Sphere = new ol.Sphere(6378137);
    function reduce(data) {
        var dataT = [data[0][1], data[0][2]];
        var prePoint = [data[0][1], data[0][2]];
        var dataTA = new Array(data[0]);
        var distanceZ;
        var disVal = 4000 * Math.pow(2, (10 - zoom)) + 30;
        for (var i = 0; i < data.length - 2; i++) {
            //across the 180th meridian
            //add by jevin
            if (Math.abs(prePoint[0] - data[i + 1][1]) > 180) {
                var a, b;
                if (prePoint[0] > 0 && prePoint[0] < 180) {
                    a = 180 - prePoint[0];
                    b = data[i + 1][1] + 180;
                } else {
                    a = prePoint[0] + 180;
                    b = 180 - data[i + 1][1];
                }

                var newLatitude = (a * (data[i + 1][2]) + b * (prePoint[1])) / (a + b);
            }

            distanceZ = wgs84Sphere.haversineDistance(dataT, [data[i + 1][1],
                data[i + 1][2]]);
            if (distanceZ > disVal || (i == data.length - 2)) {
                dataT = [data[i + 1][1], data[i + 1][2]];
                dataTA.push(data[i + 1]);
            }

            prePoint = [data[i + 1][1], data[i + 1][2]];
        }
        dataTA.push(data[data.length - 1]);
        return dataTA;
    }

    //抽稀后数据
    var reduceData = reduce(arr);
    var trailNodeFeatures = []; //轨迹线节点
    if (reduceData.length >= 2) {
        var points = [];
        for (var i = 0; i < reduceData.length; i++) {
            var record = reduceData[i];
            var item = {
                x: record[1],
                y: record[2],
                speed: record[5],
                lasttime: record[0],
                coordinate: [record[1], record[2]]
            };
            if(this.isProjected){
                var p = ol.proj.fromLonLat(item.coordinate);//经纬度转为EPSG3857
                item.coordinate = p;
            }
            points.push(item);

            var nodeFeature =  new ol.Feature({
                geometry: new ol.geom.Point(item.coordinate)
            });
            nodeFeature["nodeData"] = item;
            trailNodeFeatures.push(nodeFeature);
        }
    }

    var source = this.trailNodeLayer.getSource();
    source.clear();
    source.set("nodes", arr); //存储原始数据
    source.set("nodeFeatures", trailNodeFeatures); //抽稀后要素
    source.addFeatures(trailNodeFeatures);
}
//缩放至轨迹线
bxmap.AIS.prototype._zoomToTrail = function (arr) {
    if (arr && arr.length) {
        if (arr.length <= 2) {
            var start = arr[0];
            var center = [Number(start[1]), Number(start[2])];
            if (this.isProjected) {
                center = ol.proj.fromLonLat(center);//经纬度转为EPSG3857
            }

            var view = this.bmap.getMap().getView();
            view.setCenter(center);
            view.setResolution(80);
        } else {
            var start = arr[0], mid = arr[Math.floor(arr.length / 2)], end = arr[arr.length - 1];
            var s = [Number(start[1]), Number(start[2])],
                m = [Number(mid[1]), Number(mid[2])],
                e = [Number(end[1]), Number(end[2])];
            //经纬度转为EPSG3857
            if (this.isProjected) {
                s = ol.proj.fromLonLat(s);
                m = ol.proj.fromLonLat(m);
                e = ol.proj.fromLonLat(e);
            }

            var minx = Math.min(s[0],m[0],e[0]);
            var maxx = Math.max(s[0],m[0],e[0]);
            var miny = Math.min(s[1],m[1],e[1]);
            var maxy = Math.max(s[1],m[1],e[1]);
            this.bmap.zoomToExtent([minx, miny, maxx, maxy]);
        }
    }
}

//清除轨迹数据
bxmap.AIS.prototype._clearTrailLine = function () {
    var trailNodeSource = this.trailNodeLayer.getSource();
    trailNodeSource.clear(true);
    trailNodeSource.set("nodes", [])
    trailNodeSource.set("nodeFeatures", null);
    //隐藏轨迹图层
    this.trailLineLayer.getSource().clear(true);
}

/**
 * @description 根据中心点和精度获取渔船信息
 * @param center {Array<Number>} 中心点[x,y]
 * @param resolution {Number} 地图精度
 * @param callback {function(data)} 回调方法
 */
bxmap.AIS.getShipsByResolution = function (center, resolution, callback) {
    $.ajax({
        url: GLOBAL.domainRest + "/ais/getSomeShipMess?center_x="+center[0]+"&center_y="+center[1]+"&resolution="+resolution,
        type: 'post',
        async: true,//
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                data = data.obj;
                var Adata = eval(data.substring(9, data.length - 1));
                callback && callback(Adata);
            }
        }
    });
}

/**
 * @description 根据船舶id获取船舶信息
 * @param mmsi {String}
 * @param callback {function(info)}
 */
bxmap.AIS.getShipInfoById = function (shipid, source, callback) {
    $.ajax({
        url: GLOBAL.domainRest + "/ais/getShipInfoById",
        data:{
            shipid: shipid,
            source: source
        },
        type: 'post',
        async: true,//
        dataType: 'json',
        success: function (data) {
            function toNumber(value) {
                if (value.indexOf("*") == 0) {
                    return value;
                } else {
                    return Number(value).toFixed(1);
                }
            }

            function getNavStatus(typ) {
                typ = Number(typ);
                var x = "未定义";
                switch (typ) {
                    case 0:
                        x = "在航(主机推动)";
                        break;
                    case 1:
                        x = "锚泊";
                        break;
                    case 2:
                        x = "未操纵";
                        break;
                    case 3:
                        x = "有限操纵性";
                        break;
                    case 4:
                        x = "受船舶吃水限制";
                        break;
                    case 5:
                        x = "系泊";
                        break;
                    case 6:
                        x = "搁浅";
                        break;
                    case 7:
                        x = "从事捕捞";
                        break;
                    case 8:
                        x = "帆航中";
                        break;
                    case 11:
                        x = "机动船拖后退";
                        break;
                    case 12:
                        x = "机动船推进或在旁牵引";
                        break;
                    default:
                        x = "未定义";
                        break;
                }
                return x;
            }

            function getShipType(typ) {
                typ = Number(typ);
                var x = "其它";
                switch (typ) {
                    case 60://"客船":
                    case 61:
                    case 62:
                    case 63:
                    case 64:
                    case 65:
                    case 66:
                    case 67:
                    case 68:
                    case 69:
                        x = "客船";
                        break;
                    case 70://"货船":
                    case 71:
                    case 72:
                    case 73:
                    case 74:
                    case 75:
                    case 76:
                    case 77:
                    case 78:
                    case 79:
                        x = "货船";
                        break;
                    case 55://"执法":
                        x = "执法";
                        break;
                    case 80://"油轮":
                    case 81:
                    case 82:
                    case 83:
                    case 84:
                    case 85:
                    case 86:
                    case 87:
                    case 88:
                    case 89:
                        x = "油轮";
                        break;
                    case 50://"引航":
                        x = "引航";
                        break;
                    case 37://"游艇""高速船":
                        x = "游艇";
                        break;
                    case 51://"搜救":
                        x = "搜救";
                        break;
                    case 52://"拖轮":
                        x = "拖轮";
                        break;
                    default:
                        x = "其它";
                        break;
                }
                return x;
            }

            if (data.code == 200) {
                var inxfo = eval(data.obj);
                var info = {};
                info.shipid = shipid;
                info.shipName = inxfo[0].replace("null",""); //船名（英文名）
                info.mmsi = inxfo[1]; //mmsi
                info.imo = inxfo[2].replace("null", ""); //imo
                info.callsign = inxfo[3].replace("null", ""); //呼号
                info.lat = inxfo[4]; //纬度
                info.nation = inxfo[5].replace("null", "") ; //国籍
                info.lon = inxfo[6]; //经度
                info.rotat = inxfo[7] == 511 ? "" : inxfo[7] + "度"; //船首向
                info.type = getShipType(inxfo[8]); //船舶类型
                info.cour =  toNumber(inxfo[9]) + "度"; //船迹向
                info.status = getNavStatus(inxfo[10]); //状态
                info.speed = toNumber(inxfo[11]) + "节"; //船速
                info.lengths = inxfo[12].replace("null", "").replace("undefined", ""); //船长
                info.lengths = info.lengths ? info.lengths + "米" : "";
                info.dest = inxfo[13].replace("null", ""); //预到港
                info.beam = inxfo[14].replace("null", "").replace("undefined", ""); //船宽
                info.beam = info.beam ? info.beam + "米" : "";
                info.eta = inxfo[15].replace("null", ""); //预到时间
                info.dra = inxfo[16] == "null" ? "" : toNumber(inxfo[16]) + "米"; //吃水
                info.lasttime = inxfo[17]; //更新时间
                info.cnname = inxfo[18].replace("null", ""); //中文名

                info.gross = inxfo[20].replace("null", ""); //总吨
                info.gross = info.gross ? info.gross + "吨" : "";
                info.deadweight = inxfo[21].replace("null", ""); //载重吨
                info.deadweight = info.deadweight ? info.deadweight + "吨" : "";
                info.tons = inxfo[22].replace("null", ""); //净吨
                info.tons = info.tons ? info.tons + "吨" : "";

                info.owner = inxfo[24].replace("null","").replace("undefined",""); //船主
                callback && callback(info);
            }
        }
    });
}

/**
 * @description 根据船舶id获取船舶信息
 * @param mmsi {String}
 * @param callback {function(info)}
 */
bxmap.AIS.getShipPositionById = function(shipid, callback){
    var url = GLOBAL.domainRest + "/ais/getShipPositionById?shipid=" + shipid;
    $.ajax({
        url: url,
        type: 'post',
        async: true,//
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                var obj = data.obj;
                var Adata = eval(obj.substring(9, obj.length - 1));
                callback && callback(Adata);
            }
        }
    });
}

/**
 * @description 异步获取船只的轨迹路线
 * @param shipid
 * @param begindate
 * @param enddate
 * @param callback {function(data)}
 */
bxmap.AIS.getShipTrackPath = function(shipid, begindate, enddate, callback) {
    $.ajax({
        url:GLOBAL.domainRest + "/ais/getShipPath",
        type: 'post',
        data:{
            shipid:shipid,
            begindate:begindate,
            enddate:enddate
        },
        async: true,//异步
        dataType: 'json',
        success: function (data) {
            if(data.code == 200){
                var Adata = eval(data.obj);
                callback && callback(Adata);
            }
        }
    });
}

/**
 * @description 异步获取船舶历经港口
 * @param shipid
 * @param begindate
 * @param enddate
 * @param callback {function(data)}
 */
bxmap.AIS.getShipTrackPort = function(shipid, begindate, enddate, callback) {
    $.ajax({
        url:GLOBAL.domainRest + "/ais/getRoutePort",
        type: 'post',
        data:{
            shipid:shipid,
            begindate:begindate,
            enddate:enddate
        },
        async: true,//异步
        dataType: 'json',
        success: function (data) {
            if(data.code == 200){
                var Adata = eval(data.obj);
                callback && callback(Adata);
            }
        }
    });
}

/**
 * @description 获取船舶航次
 * @param shipid
 * @param callback
 */
bxmap.AIS.getVoyage = function (shipid, callback) {
    var $now = $.ajax(GLOBAL.domainRest + "/ais/getVoyage?voyagestate=nowVoyage&shipid="+shipid);
    var $his = $.ajax(GLOBAL.domainRest + "/ais/getVoyage?voyagestate=voyageInfo&shipid="+shipid);
    $.when($now, $his).done(function (nowdata, hisdata) {
        var _nowdata, _hisdata;
        if (nowdata[0].code == 200) {
            _nowdata = eval(nowdata[0].obj);
        }
        if (hisdata[0].code == 200) {
            _hisdata = eval(hisdata[0].obj);
        }
        callback && callback(_nowdata, _hisdata);
    });
}

/**
 * @description 模糊查询
 * @param params {String} 查询文本
 * @param callback
 */
bxmap.AIS.search = function(params, callback) {
    var url = GLOBAL.domainRest + "/ais/search?queryParam=" + params;
    $.ajax({
        url: url,
        type: 'post',
        async: true,//异步
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                var Adata = eval(data.obj);
                callback && callback(Adata);
            }
        }
    });
}