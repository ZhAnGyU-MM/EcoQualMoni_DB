bxmap.config = bxmap.config || {};

/**
 * 地图图层配置，能力包括
 * 1.地图分屏及地图内容不同；
 * 2.不同平台发布
 * 3.底图切换，及底图多层时分等级（例如底图包括：影像图层、道路图层、注记图层）
 */
bxmap.config.MapConfig = {
    "projection":"EPSG:3857",
    "geoserver_url": "http://localhost:8180/geoserver",
    "arcgisserver_url": "http://server.arcgisonline.com/arcgis/rest/services",
    "tile_grids": [
        {
            "grid_id":"grid_GDImage",
            "extent":[-2.0037507842788246E7,-3.024097195838617E7,2.0037507842788246E7,3.0240971958386205E7],
            "origin":[-2.0037508342787E7,2.0037508342787E7],
            "resolutions":[156543.03392800014,78271.51696399994,39135.75848200009,19567.87924099992,9783.93962049996,4891.96981024998,2445.98490512499,1222.992452562495,611.4962262813797,305.74811314055756,152.87405657041106,76.43702828507324,38.21851414253662,19.10925707126831,9.554628535634155,4.77731426794937,2.388657133974685,1.1943285668550503,0.5971642835598172,0.29858214164761665],
            "tile_size":[256,256]
        },
        {
            "grid_id":"grid_SeaMap",
            "extent":[1.11439072277524E7,1418671.24497287,1.43139036647952E7,4676723.13860022],
            "origin":[ -2.0037508342787E7,2.0037508342787E7],
            "resolutions":[156543.03392800014,78271.51696399994,39135.75848200009,19567.87924099992,9783.93962049996,4891.96981024998,2445.98490512499,1222.992452562495,611.4962262813797,305.74811314055756,152.87405657041106,76.43702828507324,38.21851414253662,19.10925707126831,9.554628535634155,4.77731426794937,2.388657133974685,1.1943285668550503,0.5971642835598172,0.29858214164761665],
            "tile_size":[256,256]
        }
    ],
    "layers": [
        {"layer_id":"anjiHXMap","server":"geoserver","level":0,"name":"anjiHXMap","visible":true,"format":"image/png","tile_grid":"grid_GDImage","url":"/gwc/service/wms"},
        {"layer_id":"anjiGNMap","server":"geoserver","level":0,"name":"anjiGNMap","visible":true,"format":"image/png","tile_grid":"grid_GDImage","url":"/gwc/service/wms"},
        //{"layer_id":"GISSERVER_JX","server":"geoserver","level":0,"name":"JX","visible":false,"share":true,"format":"image/png","tile_grid":"","url":"/gwc/service/wms"},                         
        {"layer_id":"GISSERVER_AnJiMapImg","server":"geoserver","level":0,"name":"AnJiMapImg","visible":true,"format":"image/jpeg","tile_grid":"","url":"/gwc/service/wms"},
        {"layer_id":"GISSERVER_AnJiMapVec","server":"geoserver","level":0,"name":"AnJiMapVec","visible":true,"format":"image/jpeg","tile_grid":"","url":"/gwc/service/wms"},
        {"layer_id":"arcgisserver_World_Imagery","server":"arcgisserver","level":0,"visible":true, "url":"/World_Imagery/MapServer"},
        {"layer_id":"id_osm_1","server":"osm","level":0,"visible":true},
        {"layer_id":"gaodemap_cva","server":"gaode","level":0,"visible":true,"share":true,"url":"http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}"},
        {"layer_id":"tmap_vec_c","server":"tianditu","level":0,"visible":true,"share":true,"url":"http://t{0-7}.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=7786923a385369346d56b966bb6ad62f"},
        {"layer_id":"tmap_cva_w","server":"tianditu","level":0,"visible":true,"share":true,"url":"http://t{0-7}.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=7786923a385369346d56b966bb6ad62f"},
        {"layer_id":"tmap_img_w","server":"tianditu","level":0,"visible":true,"share":true,"swipetype":"right","url":"http://t{0-7}.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=7786923a385369346d56b966bb6ad62f"},
        {"layer_id":"tmap_cia_w","server":"tianditu","level":0,"visible":true,"share":true,"url":"http://t{0-7}.tianditu.com/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=7786923a385369346d56b966bb6ad62f"}
    ],
    "wfs":{
        /*"cfg":[
            {"cfg_id":"DEGSRPT","url":"http://gisserver:18081/geoserver/DEGSRPT/wfs","featureNS":"http://GISSERVER:18081/geoserver/DEGSRPT","srsName":"EPSG:3857","featurePrefix":"DEGSRPT","outputFormat":"application/json"}
        ],
        "layers":[
            {"layer_id":"wfs_1","name":"贮罐区","cfg":"DEGSRPT","featureTypes":["GEO_MM_ZGQ"],"visible":true,"lazyLoading":false,"inEditor":true, "geometryName":"Shape","geometryType":"Polygon"},
            {"layer_id":"wfs_2","name":"贮罐","cfg":"DEGSRPT","featureTypes":["GEO_MM_ZG"],"visible":false,"lazyLoading":true,"inEditor":true, "geometryName":"Shape","geometryType":"Polygon"}
        ]*/
    	"url":"/wfs",
    	"featureNS":"http://www.anjiSYS.com",
    	"srsName":"EPSG:3857",
    	"featurePrefix":"anjiSYS",
    	"featureTypes":["anjiGN"],
    	"geometryName":"the_geom",
    	"attrName":"名称",
    	"outputFormat":"application/json"
    },
    "olviews":[
            {"view_id":"id_view_1","center":[13302958.014575263,3575060.50586022],"zoom":12,"max_zoom":18,"min_zoom":8}
    ],
    "maps":[
        {
            "map_id":"map_1",
            "description":"地图",
            "layer_groups":[
              
            ],
            "olview":"id_view_1"
        } 
    ] 
};

/**
 * 地图工具条设置，id为内容控件编号
 */
bxmap.config.ToolConfig = [
    {"id":1,"pid":0,"visible":true,"description":"导航工具条"},
    {"id":2,"pid":0,"visible":true,"description":"比例尺工具"},
    {"id":3,"pid":0,"visible":true,"description":"坐标显示工具"},
    {"id":4,"pid":0,"visible":true,"description":"鹰眼工具"},
    {"id":5,"pid":0,"visible":true,"description":"地图图层控制器按钮控件"},
    {"id":6,"pid":0,"visible":true,"description":"二维底图切换按钮控件"},
    {"id":7,"pid":0,"visible":true,"description":"三维切换按钮控件"},
    {"id":8,"pid":0,"visible":true,"description":"全屏按钮控件"},
    {"id":9,"pid":0,"visible":false,"description":"滑块卷帘控件"},
    {"id":999,"pid":0,"visible":true,"description":"Toolbox工具箱控件"}
];