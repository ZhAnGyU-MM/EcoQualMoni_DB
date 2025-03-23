if (typeof DCI == "undefined") { var DCI = {}; }
DCI.thematicmap = {
    /**
     * 界面设计
    */
    Html:
       //迁徙图
         "<div style='height:25px;background:#30A4D5;margin-top:10px;width: 98%;margin-left: 3px;float: left;'>" +
              "<span style='margin-left:5px;font-size: 13px;color:white;'>迁徙图</span>" +
         "</div>" +
        '<div id="moveEchartsLayer" style="padding:5px;float: left;">' +
             '<input type="checkbox" name="moveechartslayer" id="moveechartslayer1"  style="width: 15px;height: 15px;vertical-align: middle;margin: auto;"/>' +
             '<label style="font-weight: normal;vertical-align: middle;margin: auto;">迁徙图</label>' +
        '</div>' +

        
        '<button class="btn btn-default btn-xs" id="clearAllMap"  style="margin-right: 15px;height: 25px;float: right;clear: both;">重置</button>'+

        "</div>",

    //模块初始化函数
    Init: function (bmap) {
        //滚动条样式
        $("#thematicmapDIV").mCustomScrollbar({
            theme: "minimal-dark",
        });
        $("#clearAllMap").bind("click", function () {
            DCI.thematicmap.InitState(bmap);
        });
       
        //迁徙图
        $("#moveEchartsLayer input").bind("click", function () {
            if (this.checked) {
                if(!bxmap.olEchartsLayer.isLoad){
                    bxmap.olEchartsLayer.Init(bmap);
                }else{
                    bxmap.olEchartsLayer.loadEchartsLayer();
                }
            }
            else {
                bxmap.olEchartsLayer.removeEchartsLayer();
            }
        })
        //DCI.moveEcharts.Init(map);
    },
    InitState: function (bmap) {
        //图例面板隐藏
        $("#map_tl").hide();
        $("[name = heatmapFeatureLayer]:checkbox").attr("checked", false);
        //迁徙图
        bxmap.olEchartsLayer.removeEchartsLayer();
        $("[name = moveechartslayer]:checkbox").attr("checked", false);

    },


}