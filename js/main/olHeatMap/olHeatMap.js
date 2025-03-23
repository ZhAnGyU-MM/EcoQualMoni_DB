var bxmap = bxmap || {};
bxmap.olHeatMap = {
    map:null,
    isLoad:false,
    layer: null,//热力图图层
    radius:2,
    gradient1: ['#00f', '#0ff', '#0f0', '#ff0', '#f00'],//百度热力图风格
    gradient2: ["rgba(0, 0, 255, 0)","rgb(0, 0, 255)","rgb(255, 0, 255)", "rgb(255,69, 0)"],//ArcGIS热力图默认风格
    Init:function(bmap){
        //加载热力图
        this.map = bmap.getMap();
        this.isLoad = true;
        this.initHeatMapLayer(dz);
    },
    /**
     * 初始化加载-热力图
     */
    initHeatMapLayer:function(data){
               var num = data.features.length;
               if (num > 0) {
                   var features = new Array(num);
                   for (var i = 0; i < num; i++) {
                       var geo = data.features[i].geometry;
                       var coordinate = [geo.x, geo.y];
                           features[i] = new ol.Feature({
                           geometry: new ol.geom.Point(coordinate),
                           weight: data.features[i].attributes[field_dz]
                       });
                   }
                   this.loadHeatLayer(features);
               }
    },
    loadHeatLayer:function(features){
        var self = bxmap.olHeatMap;
        self.layer = self.createHeatMap({ features: features, radius: self.radius, gradient: self.gradient1 });//创建热力图层
        self.map.addLayer(self.layer);
        self.map.getView().on('change:resolution', self.handleHeatMap);
        //缩放至范围
        self.map.getView().fit(self.layer.getSource().getExtent(), self.map.getSize());

    },
    handleHeatMap:function(){
        var self = bxmap.olHeatMap;
        if (self.layer) {
            self.layer.setVisible(true);
            var radius = self.getRadiusByMapZoom();
            self.layer.setRadius(radius);
        }
    },
    getRadiusByMapZoom:function(){
        var radius = 2;
        var self = bxmap.olHeatMap;
        switch (self.map.getView().getZoom()) {
            case 9:
                radius = 2;
                break;
            case 10:
                radius = 3;
                break;
            case 11:
                radius = 4;
                break;
            case 12:
                radius = 5;
                break;
            case 13:
                radius = 6;
                break;
            case 14:
                radius = 7;
                break;
            case 15:
                radius = 8;
                break;
            case 16:
                radius = 9;
                break;
            default:
                if (self.map.getView().getZoom() > 16) {
                    radius = 9;
                }
                else {
                    radius = 2;
                }
        }
        return radius;
    },
    /**
     * 创建热力图层
     * @method createHeatmap
     * @param  features 渲染热力图的要素集
     * @return Heatmap  返回热力图层
     */
    createHeatMap:function(options){
        var vector = new ol.layer.Heatmap({
            source: new ol.source.Vector({//热力图数据来源
                features: options.features
            }),
            id: 'heat',
            extent: options.extent,
            weight: weightFunction,//设置权重,值在0-1之间
            gradient: options.gradient,
            blur: 15,//默认15
            radius: options.radius || 8//默认8
        });
        /*
         *设置权重
         */
        function weightFunction(feature) {
            var weight = feature.get('weight');
            weight = parseFloat(weight);
            //weight = parseFloat(weight) / 10;
            return weight;
        }
        return vector;
    },
    showHeatMapLayer:function(){
        var self = bxmap.olHeatMap;
        if (self.layer) {
            self.layer.setVisible(true);
            //缩放至范围
            self.map.getView().fit(self.layer.getSource().getExtent(), self.map.getSize());
        }
        self.map.getView().un('change:resolution', self.handleHeatMap);
        self.map.getView().on('change:resolution', self.handleHeatMap);
    },
    hideHeatMapLayer:function(){
        var self = bxmap.olHeatMap;
        if (self.layer) {
            self.layer.setVisible(false);
        }
        if(self.map)
           self.map.getView().un('change:resolution', self.handleHeatMap);
    }

}


