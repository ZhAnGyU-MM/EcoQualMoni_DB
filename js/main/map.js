var map;
var bmap;
if (typeof DCI == "undefined") { var DCI = {}; }
$(function () {
    DCI.sidebarCtrl.initLayout();//动态初始化界面的布局
    //动态创建主界面左边菜单栏
    //地图图层
    var panel = DCI.sidebarCtrl.createItem("数据", "数据", true, "nav_but_layer", "layermodel");
    panel.append(DCI.Catalog.Html);//加载显示的内容
    //load2DMap();//初始化地图加载部分
});
/**
 * 初始化地图加载
*/
/*function load2DMap() {
    //设置地图res目录
    bxmap.Resource.setBasePath(getRootPath() + "js/olmap");
    //初始化地图
    bmap = bxmap.Map.createDefaultMap('map','map_1'); //创建一个地图实例
    var olmap = map = bmap.getMap();
    //显示地图工具栏
    DCI.map2dTool.InitTool(map);
    //空间查询初始化
    DCI.SpatialQuery.Init(bmap.getMap());
    //专题图初始化
    DCI.thematicmap.Init(bmap);
    //互斥管理工具
    //bmap.MutexManager = new MutexClickManager();
    //初始化地图控件
    initControls();
    //初始化图层
    initLayers();
    //初始化交互工具
    initInteraction();
    //初始化图层管理器
    intiLayerManagerWindow();
    //注册清空对象
    registerClearObjects();
    //注册DOM事件
    registerDomEvents();

}
//交互工具点击事件
function registerInteractionClick(){ 
    //军事标绘
    var plottypes = ["freehandline","polyline","arc","curve","freehandpolygon","polygon",
        "rectangle","circle","assaultdirection","squadcombat","tailedsquadcombat","gatheringplace"];
    for(var i = 0; i < plottypes.length; i++){
        var selector = '#map_toolbar_plot li[plottype="' + plottypes[i] + '"]';
        $(selector).on('click',function(){
            var id = "10006";//军事标绘工具
            var tool = bmap.getIndexInteraction(id);
            bmap.setCurrentMutexInteraction(tool);
            //标绘类型
            var plottype = $(this).attr("plottype");
            tool.setDrawType(plottype);
        })
    }
}
//注册按钮点击事件
function registerDomEvents() {
    //注册工具点击事件
    registerInteractionClick();
    //地图复位
/*    $('#d2d #goto-init-position').on('click',function () {
        bmap.zoomInitialPosition();
    });


}
//注册清空对象
function registerClearObjects(){
    //量测注册为清空对象
    var dataClears = bmap.dataClear;
    if(!dataClears){
        dataClears = bmap.dataClear = new bxmap.DataClear();
    }
    var measure_area = bmap.getIndexInteraction("10005");
    dataClears.register(measure_area);
    var measure_distance = bmap.getIndexInteraction("10004");
    dataClears.register(measure_distance);

    //图片标注清空
    var imageLabelLayer = bmap.getIndexLayer(bxmap.DEFAULT_IMG_LABEL_LAYER_ID);
    dataClears.register(imageLabelLayer.getSource());

    //文本标注清空
    var plotTextTool = bmap.getIndexInteraction("11001");
    dataClears.register(plotTextTool);
    
    //军事标绘清空
    var plotLayer = bmap.getIndexInteraction("10006");
    dataClears.register(plotLayer);
}
//初始化图层管理器
function intiLayerManagerWindow(){
    var layerSwitcherCtrl = new bxmap.control.LayerSwitcher({
        className:"ol-layer-switcher-nobutton",
        shownButton:false
    });
    layerSwitcherCtrl.showPanel();
    layerSwitcherCtrl.setMap(bmap.getMap());
    $("#ztreeThemeServerOfCatalog").append(layerSwitcherCtrl.panel);
}

//初始化图层
function initLayers() {
    var defLayers = new bxmap.layer.Defaults();
    var layer;
    for(var i = 0; i < defLayers.layers.length; i++){
        layer = defLayers.layers[i];
        bmap.addIndexLayer(layer);
    }
}
//初始化交互工具
function initInteraction(){
    var defInteractions = new bxmap.interaction.Defaults();
    var interaction;
    for(var i = 0; i < defInteractions.interactions.length; i++){
        interaction = defInteractions.interactions[i];
        if(interaction){
            bmap.addMutexInteraction(interaction);
        }
    }

    //文本标注
    var plotTextTool = new bxmap.interaction.TextLabel();
    plotTextTool.set(bxmap.INDEX_INTERACTION_ID, "11001");
    bmap.addMutexInteraction(plotTextTool);

    //图片标注
    var imageLabelLayer = bmap.getIndexLayer(bxmap.DEFAULT_IMG_LABEL_LAYER_ID);
    var imageLabelTool = new bxmap.interaction.Draw({
        source : imageLabelLayer.getSource(),
        type: 'Point'
    });
    imageLabelTool.set(bxmap.INDEX_INTERACTION_ID, "11002");
    bmap.addMutexInteraction(imageLabelTool);

    //pan
    var pan = bmap.getIndexInteraction("10001");
    bmap.setCurrentMutexInteraction(pan);
}
//初始化地图控件
function initControls(){
    var controlCreator = new bxmap.control.Defaults();
    //地图滑动卷帘控件
    controlCreator.createSwipeControl(bmap);
    //创建底图切换控件
    var mapLabelArray = [
        {"id":1,"label":"天地图","className":"imgType","data":"tdtmap_img"},
        {"id":2,"label":"天地图","className":"vecType","data":"tdtmap_vec"},
        //{"id":3,"label":"arcgis","className":"imgType","data":"arcgisserver_img"},
        {"id":4,"label":"高德地图","className":"vecType","data":"gaodemap_vec"},
        //{"id":5,"label":"OSM","className":"vecType","data":"osm"},
        //{"id":6,"label":"WMS影像","className":"imgType","data":"geoserver_img"},
        //{"id":7,"label":"WMS街道","className":"vecType","data":"geoserver_vec"}
    ];
    controlCreator.createBaseLayerControl(bmap, mapLabelArray);
    //创建地图导航控件
    controlCreator.createNavigation(bmap);
    //显示鹰眼
    controlCreator.createOverviewMap(bmap);
    //创建底部背景条
    controlCreator.createBottomBackgroudControl(bmap);
    //显示地图比例尺
    controlCreator.createScaleLine(bmap);
    //显示当前坐标
    controlCreator.createMousePosition(bmap);
}*/
/**
 * 动态初始化界面的布局
 * 控制左边的导航菜单
*/
DCI.sidebarCtrl = {
    NavBar: null,
    NavContent: null,

    initLayout: function () {
        NavBar = $('<div id="nav_bar" class="nav_bar"></div>');
        NavContent = $('<div id="nav_Content" class="nav_Content"></div>');
        $("#sidebar").append(NavBar);
        $("#sidebar").append(NavContent);
    },

    createItem: function (title, name, isHigh, cssName, id) {
        var navItem = $('<div></div>');
        navItem.attr("id", id);
        navItem.attr("title", title);
        var css = isHigh == true ? "nav_but nav_sel" : "nav_but";
        navItem.attr("class", css);
        var img = $('<div></div>');
        cssName = cssName ? cssName : "nav_but_ss";
        img.attr("class", cssName);
        navItem.append(img);
        var span = $('<span></span>');
        span.text(name);
        navItem.append(span);

        $("#nav_bar").append(navItem);
        var navItemContent = $('<div class="nav_Item_Content"></div>');
        $("#nav_Content").append(navItemContent);
        navItem.click(function () {
            $(".nav_Item_Content").css("display", "none");
            navItemContent.css("display", "block");
            $(".nav_but").attr("class", "nav_but");
            this.className = "nav_but nav_sel";
            var id = this.id;
          //  switch (id) {
            //    case "spatialmodel"://地图查询
              //  	//$("#clearSpaButton").click();
              //      break;
             //   case "thematicmap"://专题图
             //   	//DCI.thematicmap.InitState(bmap);
            //        break;
           // }
        	$("#clearSpaButton").click();
        	DCI.thematicmap.InitState(bmap);
            //各个不同功能模块之间切换--清空Graphic
            $("#bClear").click();
        });
        return navItemContent;
    },
    clear: function () {
        $("#nav_bar").children().remove();
        $("#nav_Content").children().remove();
    }

}
