if (typeof DCI == "undefined") { var DCI = {}; }
DCI.map2dTool = {
    toolbar2dHtml: "<div class='alright_top_rt'>" +
            "<ul>" +
               "<li class='zoomOut' id='zoomOut'><a href='javascript:void(0)' class='zoomOutbg'><span class='zoomOutlabel'></span>放大</a></li>" +
               "<li class='publine'></li>" +
               "<li class='zoomIn' id='zoomIn'><a href='javascript:void(0)' class='zoomInbg'><span class='zoomInlabel'></span>缩小</a></li>" +
               "<li class='publine'></li>" +
               "<li class='panMove' id='panMove'><a href='javascript:void(0)' class='panMovebg'><span class='panMovelabel'></span>移动</a></li>" +
               "<li class='publine'></li>" +
               "<li class='PlotlTool' id='bPlot'><a href='javascript:void(0);' class='Pointbg'><span class='Plotlabel'></span>态势标绘</a></li>"+
               "<li class='publine'></li>" +
/*		       "<li class='legend' id='legend'><a href='javascript:void(0);' class='legendbg'><span class='legendlabel'></span>图例</a></li>" +
		       "<li class='publine'></li>" +*/
                "<li class='tool' id='tLi'>" +
                    "<a href='javascript:void(0)' class='toolbg' id='toolType'><span class='toollabel'></span>工具</a><span class='raang_more' id='toolCur'></span>" +
                    "<ul style='display: none;' id='toolDiv'>" +
                        "<li id='bMeasureLine'><a href='javascript:void(0)'><span class='toolcjlabel'></span>测距</a></li>" +
                        "<li id='bMeasureArea'><a href='javascript:void(0)'><span class='toolcmlabel'></span>测面</a></li>" +
                        "<li id='bPrint'><a href='javascript:void(0)'><span class='tooldylabel'></span>导出</a></li>" +
                     "</ul>" +
                "</li>" +
                "<li class='publine'></li>" +
                "<li class='delete' id='bClear'><a href='javascript:void(0);' class='deletebg'><span class='dellabel'></span>清空</a></li>" +
                "<li class='screen' id='fullScreen'><a href='javascript:void(0);' class='screenbg'><span class='scrlabel'></span>全屏</a></li>"+
            "</ul>" +
        "</div>",
    InitTool: function (map) {
        //加载工具栏
        var child = $("#tool_container").children();
        if (child.length > 0) {
            child.remove();
        }
        $("#tool_container").append(DCI.map2dTool.toolbar2dHtml);
        $("#tLi").bind("mouseover", function () {
            $("#toolDiv").show();
        });
        $("#tLi").bind("mouseout", function () {
            $("#toolDiv").hide();
        });
        //测距
        $("#bMeasureLine").click(function () {
            //var bmap = mapInterface.bmap;
            var inter = bmap.getIndexInteraction(bxmap.DEFAULT_INTER_MEASURE_DIST_ID);
            bmap.setCurrentMutexInteraction(inter);
        });

        //测面积
        $("#bMeasureArea").click(function () {
            //var bmap = mapInterface.bmap;
            var inter = bmap.getIndexInteraction(bxmap.DEFAULT_INTER_MEASURE_AREA_ID);
            bmap.setCurrentMutexInteraction(inter);
        });

        //清除
        $("#bClear").click(function () {
            //var bmap = mapInterface.bmap;
            //bmap.clear();
            bmap.setCurrentMutexInteraction(null);
            if(bmap.dataClear){
                bmap.dataClear.clear();
            }
        });

        var flag = false;
        //全屏
        $("#fullScreen").click(function () {
        	if(!flag){//全屏
        		flag = true;
                var elem = document.body;
                if (elem.webkitRequestFullScreen) {
                    elem.webkitRequestFullScreen()
                } else {
                    if (elem.mozRequestFullScreen) {
                        elem.mozRequestFullScreen()
                    } else {
                        if (elem.msRequestFullscreen) {
                            elem.msRequestFullscreen()
                        } else {
                            if (elem.requestFullScreen) {
                                elem.requestFullscreen()
                            } else {
                                alert("浏览器不支持全屏")
                            }
                        }
                    }
                }    		
        	}else{//退出全屏
        		flag = false;
        	    var elem = parent.document;
        	    if (elem.webkitCancelFullScreen) {
        	        elem.webkitCancelFullScreen()
        	    } else {
        	        if (elem.mozCancelFullScreen) {
        	            elem.mozCancelFullScreen()
        	        } else {
        	            if (elem.cancelFullScreen) {
        	                elem.cancelFullScreen()
        	            } else {
        	                if (elem.msExitFullscreen) {
        	                    elem.msExitFullscreen()
        	                } else {
        	                    if (elem.exitFullscreen) {
        	                        elem.exitFullscreen()
        	                    } else {
        	                        alert("浏览器不支持全屏")
        	                    }
        	                }
        	            }
        	        }
        	    }
        	}
        });
        
        //放大缩小
        $("#zoomOut").click(function () {
            var inter = bmap.getIndexInteraction(bxmap.DEFAULT_INTER_ZOOM_IN_ID);
            bmap.setCurrentMutexInteraction(inter);
        });
        $("#zoomIn").click(function () {
            var inter = bmap.getIndexInteraction(bxmap.DEFAULT_INTER_ZOOM_OUT_ID);
            bmap.setCurrentMutexInteraction(inter);      	
        });

        //漫游
        $("#panMove").click(function () {
            var inter = bmap.getIndexInteraction(bxmap.DEFAULT_INTER_DRAG_PAN_ID);
            bmap.setCurrentMutexInteraction(inter);
        });
        //标绘例
        var plotFlag = false;
        $("#bPlot").click(function () {
        	if(!plotFlag){
            	$("#map_toolbar_plot").show();
            	plotFlag = true;
        	}else{
                bmap.setCurrentMutexInteraction(null);
                if(bmap.dataClear){
                    bmap.dataClear.clear();
                }
            	$("#map_toolbar_plot").hide();
            	plotFlag = false;    		
        	}            
        });
        //图例
        $("#legend").click(function () {

        });
        //地图打印
        $("#bPrint").click(function () {
            map.once('postcompose', function(event) {
                var canvas = event.context.canvas;
                if (navigator.msSaveBlob) {
                  navigator.msSaveBlob(canvas.msToBlob(), 'map.png');
                } else {
                  canvas.toBlob(function(blob) {
                    saveAs(blob, 'map.png');
                  });
                }
            });
        	map.renderSync();
        });


    }

}
