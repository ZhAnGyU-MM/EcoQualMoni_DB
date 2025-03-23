//包含
// bxmap.DataClear
// bxmap.SmoothMove

/**
 * @classdesc 用于注册可清除对象，可清除对象必须实现clear()方法，用于管理执行clear()方法
 * @constructor
 * @extends {ol.Object}
 * @param	{String} id 可选。唯一标识
 */
bxmap.DataClear = function(id) {
	ol.Object.call(this);
	
	this.clears = [];
	this.id = id == null ? "" : id;
}
ol.inherits(bxmap.DataClear, ol.Object);

/**
 * @description 注册对象
 * @param clears - {Array|Object} 将对象添加到清除数组中，单个对象或数组中对象必须实现clear()方法
 */
bxmap.DataClear.prototype.register = function(clears){
	if(clears == null || typeof clears != 'object') return;
	//判断是否为数组
	if(clears instanceof Array && Object.prototype.toString.call(clears) === '[object Array]'){
		this.clears = this.clears.concat(clears);
	}else{
		var arr = this.clears;
		var i = arr.indexOf(clears);
		var found = i > -1;
		if(!found){
			this.clears.push(clears);
		}
	}
}

/**
 * @description 注销清除
 * @param clear {Object} 从清除数组中将对象移除
 */
bxmap.DataClear.prototype.unregister = function(clear){
	if(clear == null) return;
	var arr = this.clears;
	var i = arr.indexOf(clear);
	var found = i > -1;
	if (found) {
		arr.splice(i, 1);
	}
}

/**
 * @description 循环遍历可清除对象，执行对象的清除方法。
 */
bxmap.DataClear.prototype.clear = function(){
	var clearObj = null,
		cont = false;
	for(var i = this.clears.length -1 ; i>=0 ;i--){
		clearObj = this.clears[i];
		cont = (clearObj != null) &&  (clearObj.clear != null) && ((clearObj.clear) instanceof Function);
		if(cont){
			try{
				clearObj.clear();
			}
			catch(ex){
				//TODO
				//清除数据出错
			}
		}
	}
}

/**
 * @classdesc 用于计算平滑移动数据
 * @param options
 * @param options.coordinates {Array<Array<Number>>} 坐标点数组[[117.23,23.4],...]，经纬度坐标/投影坐标系
 * @param options.isProjected {Boolean} 是否为投影坐标系，默认为true，经纬度需要执行球面计算
 * @param optison.maxDivide {Number} 最大分割间距，默认为5m，即两点间大于5m则等间距分割
 * @param options.totalDuration {Number} 平滑移动消耗总时间（秒）。该值为预期值，实际运行不精确，
 * 分割后的每段间距执行大约需要5毫秒，若设置间距过密集，消耗总时间设置过短，可能与预期时间有较大差距。
 * @param options.moveListener {function(evt)} 监听移动
 * @constructor
 */
bxmap.SmoothMove = function (options) {
	var opts = options || {};

    /**
	 * @description 是否为投影坐标系
	 * @readonly
     * @type {Boolean}
     */
	this.isProjected = opts.isProjected == null ? true : opts.isProjected;
    /**
	 * @description 最大分割间距，默认为5m
	 * @public
     * @type {Number}
     */
	this.maxDivide = opts.maxDivide ? opts.maxDivide : 5.0;
    /**
     * @description 坐标点数组
     * @public
     * @type {Array<Array<Number>>}
     */
    this.coordinates = opts.coordinates || [];
    /**
	 * @description 平滑移动消耗总时间
	 * @public
     * @type {number}
     */
    this.totalDuration = opts.totalDuration;
    /**
	 * @description 平滑移动消耗总时间
	 * @public
	 * @type {function(evt)}
     */
    this.moveListener = opts.moveListener;
    /**
     * @description 是否正在移动
     * @readonly
     * @type {Boolean}
     */
    this.moving = false;
    /**
	 * 按线段分割
     * @type {Array} 格式
	 * [{
   		points:[],
        azimuthAngle: 0, //方位角弧度
        interval: [], //平均分割x、y方向间隔值[x,y]
        divideLength: 0, //平均分割后长度(米)
		totalLength: 0 //该线段总长度(米)
        }]
     */
	this.smoothPoints = [];
}

/**
 * @description 开始/继续移动
 * @param restart {Boolean} 是否从起始点开始
 */
bxmap.SmoothMove.prototype.startSmoothMove = function (restart) {
    restart = restart == null ? true : restart;
    //正在移动中执行继续移动
    if(!restart && this.moving) return;

	var movingEvt = {
		target: this,
        segmentIndex: 0, //移动至第n条线段
        segmentPointIndex: 0, //移动至第n条线段分段的第n个点
        movedLength: 0, //已行驶长度(米)
		isNode: true, //是否为原始线段节点
		point: [] //点位置
    };
	//重新开始执行
	if(restart){
		this.stopMove();
        this._movingEvent = movingEvt;

        if(!this.smoothPoints.length){
            this.smoothPoints = this.executeSmoothDivide();
		}
	}
	if(!this.smoothPoints.length) return;
	//计算时间间隔
    var interval = this._calculateTimePerSegment();
    if(interval < 0) return;

	this.moving = true;
	var self = this;
	var segmentTotal = self.smoothPoints.length; //线段个数
	if(self.moveListener){
		//第一个点位置
		if(restart){
            self._movingEvent = movingEvt;
            //第一条线段的第一个点
            movingEvt.point = self.smoothPoints[0].points[0];
            self.moveListener(self._movingEvent);
		}
        setTimeout(function(){
        	var evt = self._movingEvent;
            evt.isNode = false;

        	//该线段的下一个点
			var segmentIndex = evt.segmentIndex,
                segmentPointIndex = evt.segmentPointIndex + 1;

        	var path = self.smoothPoints[segmentIndex];
        	//判断当前位置是否为原始数据节点，线段的最后一个点是节点
			if(segmentPointIndex == path.points.length - 1){
				evt.isNode = true;
			}
        	//跳转到下一条线段的第二个点（前一条线段的终点是该线段的起点）
			else if(segmentPointIndex >= path.points.length){
                segmentIndex += 1; //下一条线段
                segmentPointIndex = 1; //第二个点
			}
            evt.segmentIndex = segmentIndex;
			evt.segmentPointIndex = segmentPointIndex;

            //不存在下一条线段，结束移动
            if(evt.segmentIndex > segmentTotal - 1){
                evt.segmentIndex = segmentTotal - 1; //最后一条线段索引
                path = self.smoothPoints[evt.segmentIndex];//最后一条线段
                evt.segmentPointIndex = path.points.length - 1;

                self.stopMove();
                return false;
            }

            //计算长度
            path = self.smoothPoints[evt.segmentIndex];
            evt.movedLength += path.divideLength; //移动长度
			evt.point = path.points[evt.segmentPointIndex]; //点位置
            self._movingEvent = evt;
            self.moveListener(self._movingEvent);
            self._timer = setTimeout(arguments.callee,interval);
        },interval)
	}
}

/**
 * @description 停止/暂停移动
 */
bxmap.SmoothMove.prototype.stopMove = function () {
    this.moving = false;
    if(this._timer){
        clearTimeout(this._timer);
	}
}

/**
 * @description 执行平滑分割数据
 * @return {Array}
 */
bxmap.SmoothMove.prototype.executeSmoothDivide = function () {
	var output = this.smoothPoints = [];
	var maxDivide = this.maxDivide;
	var coords = this.coordinates || [];
	if(!coords.length || !maxDivide || maxDivide <= 0) return output;

	for(var i = 0; i < coords.length - 1; i++){
		var c1 = coords[i], c2 = coords[i + 1];
		var points = this.dividePoints(c1, c2);
        output.push(points);
	}

	return output;
}

/**
 * 将线段等距分割，并返回该线段方位角
 * @param c1 {Array<Number>} 起始端点1 [x1,y1]
 * @param c2 {Array<Number>} 结束端点2 [x2,y2]
 * @return {JSON} {points:[],azimuthAngle:number} 分割points结果中起始端点c1和结束端点c2
 */
bxmap.SmoothMove.prototype.dividePoints = function (c1, c2) {
	var output = {
        points:[],
        azimuthAngle: 0, //方位角弧度
        interval: [], //平均分割x、y方向间隔值[x,y]
        divideLength: 0, //平均分割后长度(米)
		totalLength: 0 //该线段总长度(米)
	};
    var d = 0; //线段长度
    if (this.isProjected) {
        var len = bxmap.math.squaredDistance(c1, c2);
        d = Math.sqrt(len);
    } else {
        d = bxmap.math.getSphereDistance(c1, c2);
    }
    output.totalLength = d;

    //x轴角度
    var angle = bxmap.math.getAngle(c1, c2);
    //转为方位角
    output.azimuthAngle = bxmap.math.azimuthAngle(angle);

	var points = output.points;
    var distance = this.maxDivide;
    points.push(c1);//添加起始端点
    //执行等分
    if (d > this.maxDivide) {
        var num = Math.ceil(d / distance);
        var offx = (c2[0] - c1[0]) / num; //x
        var offy = (c2[1] - c1[1]) / num; //y
		output.divideLength = d / num; //分割长度
        output.interval = [offx, offy];//x/y方向间隔值
        for (var i = 1; i < num; i++) {
        	var x = c1[0] + i * offx,
				y = c1[1] + i * offy;
            points.push([x, y]);
        }
    }
    points.push(c2); //添加结束端点
    return output;
}

/**
 * 是否已移动到终点
 * @return {Boolean}
 */
bxmap.SmoothMove.prototype.hasMoveComplete = function () {
    var complete = true;
    var evt = this._movingEvent;
    var smoothPoints = this.smoothPoints;
    var segmentTotal = smoothPoints.length; //线段个数
    var path = smoothPoints[evt.segmentIndex];//最后一条线段
	//最后线段的最后一个点
	if(path && evt.segmentIndex == segmentTotal - 1 && evt.segmentPointIndex == path.points.length - 1){
        complete = true;
	}else {
        complete = false;
	}
    return complete;
}

/**
 * 计算两点间所花费的时间（毫秒）
 * @private
 */
bxmap.SmoothMove.prototype._calculateTimePerSegment = function () {
    var time = -1;
    var paths = this.smoothPoints || [];
    var total = 0;
    for (var i = 0; i < paths.length; i++) {
		var points = paths[i].points;
		//线段个数
		total += points.length - 1;
    }
    time = Math.floor(this.totalDuration / total * 1000);
    return time;
}

/**
 * @classdesc 算法
 */
bxmap.algorithm = function () {}

/**
 * @description 道格拉斯-普克抽稀数据
 * @return {{getProcessPoints: getProcessPoints}}
 */
bxmap.algorithm.getDouglasPeucker = function (points, tolerance) {

    /**道格拉斯-普克抽稀**/
    var _douglasPeucker = {
        /// <summary>获取处理后的点</summary>
        /// <param name="points" type="Array">包含点的数组</param>
        /// <param name="tolerance" type="Float">取样临界值，点之间的距离</param>
        /// <returns type="Array" />
        getProcessPoints: function(points, tolerance) {
            if (!this.isArry(points) || !points.length) { //当points不是数组或没有值时，直接返回一个空数组
                return [];
            }
            if (points.length < 3) return points; //小于3个点时不抽稀，因为1个或2个点无法进行抽稀

            var firstPoint = 0,
                lastPoint = points.length - 1; //取开始点与结束点的下标
            var pointIndexsToKeep = []; //保存需要点下标的数组
            pointIndexsToKeep.push(firstPoint);
            pointIndexsToKeep.push(lastPoint); //开始与结束不进行处理，直接保留
            while (points[firstPoint] == points[lastPoint]) { //处理闭合情况，闭合时，强制断开
                lastPoint--;
            }
            this.reduce(points, firstPoint, lastPoint, tolerance, pointIndexsToKeep); //抽稀
            var resultPoints = []; //返回的点数组
            pointIndexsToKeep.sort(function(a, b) { //排序，这个可排可不排
                return a - b;
            });
            for (var i = 0; i < pointIndexsToKeep.length; i++) {
                resultPoints.push(points[pointIndexsToKeep[i]]);
            }
            return resultPoints;
        },
        /// <summary>抽稀处理</summary>
        /// <param name="points" type="Array">待抽稀的数组</param>
        /// <param name="firstPoint" type="Integer">起点</param>
        /// <param name="lastPoint" type="Integer">终点</param>
        /// <param name="tolerance" type="Float">取样临界值</param>
        /// <param name="pointIndexsToKeep" type="Array">保留点下标的数组</param>
        reduce: function(points, firstPoint, lastPoint, tolerance, pointIndexsToKeep) {

            var maxDis = 0,
                idxFarthest = 0; //定义最大长度及最远点的下标
            for (var i = firstPoint, dis; i < lastPoint; i++) {
                dis = this.perpendicularDistance(points[firstPoint], points[lastPoint], points[i]); //获取当前点到起点与
                if (dis > maxDis) { //保存最远距离
                    maxDis = dis;
                    idxFarthest = i;
                }
            }

            if (maxDis > tolerance && idxFarthest != 0) { //如果最远距离大于临界值
                pointIndexsToKeep.push(idxFarthest);
                this.reduce(points, firstPoint, idxFarthest, tolerance, pointIndexsToKeep);
                this.reduce(points, idxFarthest, lastPoint, tolerance, pointIndexsToKeep);
            }
        },
        /// <summary>计算给出的comparePoint到beginPoint与endPoint组成的直线的垂直距离</summary>
        /// <param name="beginPoint" type="Object">起始点</param>
        /// <param name="endPoint" type="Object">结束点</param>
        /// <param name="comparePoint" type="Object">比较点</param>
        /// <returns type="Float" />
        //Area = |(1/2)(x1y2 + x2y3 + x3y1 - x2y1 - x3y2 - x1y3)|   *Area of triangle
        //Base = v((x1-x2)2+(y1-y2)2)                               *Base of Triangle*
        //Area = .5*Base*H                                          *Solve for height
        //Height = Area/.5/Base
        perpendicularDistance: function(beginPoint, endPoint, comparePoint) {
            var area = Math.abs(0.5 * (beginPoint.x * endPoint.y + endPoint.x * comparePoint.y + comparePoint.x * beginPoint.y -
                endPoint.x * beginPoint.y - comparePoint.x * endPoint.y - beginPoint.x * comparePoint.y));
            var bottom = Math.sqrt(Math.pow(beginPoint.x - endPoint.x, 2) + Math.pow(beginPoint.y - endPoint.y, 2));
            var height = area / bottom * 2;
            return height;
        },
        ///判断是否是数组
        isArry:function(arg){
            return Object.prototype.toString.call(arg) === '[object Array]';
        }
    };

    return _douglasPeucker.getProcessPoints(points, tolerance);
}

/**
 * @description 根据指定的像素距离获取随机聚合的要素
 * @param features {Array<ol.Feature>}
 * @param resolution {Number} 地图精度
 * @param distance {Number} 容差距离（像素）
 * @return {Array}
 */
bxmap.algorithm.getRandomFeatureByCluster = function (features, resolution, distance) {
    if(resolution === undefined) return;

    var output = [];
    var source = new ol.source.Vector();
    source.addFeatures(features);

    var extent = ol.extent.createEmpty();
    var mapDistance = distance * resolution;
    var clustered = {};
    for (var i = 0, ii = features.length; i < ii; i++) {
        var feature = features[i];
        if (!(bxmap.common.getCounterUid(feature).toString() in clustered)) {
            var geometry = feature.getGeometry();
            if (geometry) {
                ol.extent.extend(extent, geometry.getExtent());
                ol.extent.buffer(extent, mapDistance, extent);

                var neighbors = source.getFeaturesInExtent(extent);
                neighbors = neighbors.filter(function(neighbor) {
                    var uid = bxmap.common.getCounterUid(neighbor).toString();
                    if (!(uid in clustered)) {
                        clustered[uid] = true;
                        return true;
                    } else {
                        return false;
                    }
                });
                var cluster = neighbors[0];
                output.push(cluster);
            }
        }
    }

    source.clear(true);
    return output;
}