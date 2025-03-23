if (typeof DCI == "undefined") { var DCI = {}; }
DCI.SpatialQuery = {
    Html: "<div style='height:5px;'></div>"+
        '<button id="clearSpaButton" style="height:28px;width:60px;float:right;margin-right:13px;margin-top:5px;margin-bottom:5px;"  class="btn btn-default btn-sm" >'+
        '<i style="margin-right:3px" class="glyphicon glyphicon-trash"></i>清空</button>'+
        '<button id="rectangleButton" style="height:28px;width:60px;float:right;margin-right:13px;margin-top:5px;margin-bottom:5px;"  class="btn btn-default btn-sm" >'+
        '<i style="margin-right:3px" class="glyphicon glyphicon-pencil"></i>矩形</button>'+
        '<button id="polygonButton" style="height:28px;width:80px;float:right;margin-right:13px;margin-top:5px;margin-bottom:5px;"  class="btn btn-default btn-sm" >'+
        '<i style="margin-right:3px" class="glyphicon glyphicon-edit"></i>多边形</button>'+
        "<div class='index_search_box' style='clear:both;height:45px;'><input type='text' id='skeyword' value='天子湖环境重点准入区'  /><div id='swatchQuery' class='watchQuery' style='margin-top:0px;'></div></div>" +
        '<div id="resultList" style="clear:both;border-top: 1px solid #0688c4;padding-top: 3px;">'+
           '<span style="font-size: 13px;margin-left:3px;float:right;margin-right:5px;" id="spatial-total"></span>'+
           '<div id="showLists" style="width:100%;height:100%;margin-left:5px;"></div>'+
        '</div>',
    map:null,
    layer:null,
    draw:null,
    source:null,
    spatialSource:null,//框选查询结果
    spatialLayer:null,
    pointSource:null,
    pointLayer:null,
    popover:null,
    Init: function (map) {
    	DCI.SpatialQuery.map = map;
        var source = DCI.SpatialQuery.source = new ol.source.Vector({wrapX: false});
        DCI.SpatialQuery.layer  = new ol.layer.Vector({
          source: source
        });
        DCI.SpatialQuery.map.addLayer(DCI.SpatialQuery.layer);
        //框选查询结果样式
        DCI.SpatialQuery.spatialSource = new ol.source.Vector();
        DCI.SpatialQuery.spatialLayer = new ol.layer.Vector({
            source: DCI.SpatialQuery.spatialSource,
            style:  new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'red',
                    width: 3
                  }),
                fill: new ol.style.Fill({
                      color: 'rgba(0, 0, 255, 0.1)'
            		  //color : 'rgba(125, 125, 125, 0.35)'
                    })
            })
          });
        DCI.SpatialQuery.map.addLayer(DCI.SpatialQuery.spatialLayer);
        //点图层
        DCI.SpatialQuery.pointSource = new ol.source.Vector();
        DCI.SpatialQuery.pointLayer = new ol.layer.Vector({
            source: DCI.SpatialQuery.pointSource,
            style:new ol.style.Style({
                image: new ol.style.Icon({
                    size: [30, 30],
                    src: getRootPath() + "Content/images/index/poiLocation.png",
                    anchor: [15, 42],
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    scale: 1
                })
            })
          });
        DCI.SpatialQuery.map.addLayer(DCI.SpatialQuery.pointLayer);
		//创建气泡窗口叠加图层
        DCI.SpatialQuery.popover = new bxmap.overlay.Popup({
            positioning : 'bottom-center',
            offset:[0,-40],
            panToCenter:false
        });
        DCI.SpatialQuery.map.addOverlay(DCI.SpatialQuery.popover);
        DCI.SpatialQuery.map.on("click", function (e) {//鼠标单击图标事件
			if (e.dragging) {
				return;
			}
			var feature =DCI.SpatialQuery.map.forEachFeatureAtPixel(e.pixel,
				function(feature) {
				return feature;
			});
			if(feature){
				var type=feature.get('type');
				if(type=='point'){
					var attribute = feature.get('attribute');
					var winObject=DCI.SpatialQuery.getWinContent(attribute);
					var centerCoordinates=DCI.SpatialQuery.getCenterCoordinates(feature);
					DCI.SpatialQuery.showGraphicWin(centerCoordinates,winObject.html,winObject.title);
					$(".openInfo").click(function(){
						DCI.SpatialQuery.showInfoWindow(attribute);
					});
				}
			}
		});	
        //清空
        $("#clearSpaButton").bind("click", function () {
        	DCI.SpatialQuery.clearMap();
        	DCI.SpatialQuery.InitState();
        })
        //多边形
        $("#polygonButton").bind("click", function () {
        	DCI.SpatialQuery.clearMap();
        	DCI.SpatialQuery.InitState();
        	DCI.SpatialQuery.addInteraction("Polygon");
        })
        //矩形
        $("#rectangleButton").bind("click", function () {
        	DCI.SpatialQuery.clearMap();
        	DCI.SpatialQuery.InitState();
        	DCI.SpatialQuery.addInteraction("Box");
        })
        $("#resultList").height($(".nav_Item_Content").height()-45);
        //滚动条样式
        $("#resultList").mCustomScrollbar({
            theme: "minimal-dark",
        });
        //模糊查询
        $("#swatchQuery").bind("click", function () {
            var keyword = $("#skeyword").val();
            if (keyword == "" || keyword == undefined) {
                alert("请输入要查找的内容!");
                return;
            }
            DCI.SpatialQuery.queryByAttribute(keyword);

        });
        
    },
	/**根据属性查询地图
	 *@attribute
	 **/
    queryByAttribute:function(keyword){
	    var featureRequest = new ol.format.WFS().writeGetFeature({
	          srsName: bxmap.config.MapConfig.wfs.srsName,
	          featureNS: bxmap.config.MapConfig.wfs.featureNS,
	          featurePrefix: bxmap.config.MapConfig.wfs.featurePrefix,
	          featureTypes: bxmap.config.MapConfig.wfs.featureTypes,
	          outputFormat: bxmap.config.MapConfig.wfs.outputFormat,
	          /*filter: ol.format.filter.and(
	                  ol.format.filter.like('name', 'Mississippi*'),
	                  ol.format.filter.equalTo('waterway', 'riverbank')
	              )*/
              filter:ol.format.filter.like(bxmap.config.MapConfig.wfs.attrName, '*'+keyword+'*')//todo 条件查询过滤
	    });
	    fetch(bxmap.config.MapConfig.geoserver_url+bxmap.config.MapConfig.wfs.url, {
	          method: 'POST',
	          body: new XMLSerializer().serializeToString(featureRequest)
	        }).then(function(response) {
	          return response.json();
	        }).then(function(json) {
	          var features = new ol.format.GeoJSON().readFeatures(json);
	          if(features && features.length>0){
	          	  if(DCI.SpatialQuery.spatialLayer)
	          	     DCI.SpatialQuery.spatialLayer.getSource().clear();
	          	  if(DCI.SpatialQuery.pointLayer)
		          	 DCI.SpatialQuery.pointLayer.getSource().clear();
		          DCI.SpatialQuery.spatialSource.addFeatures(features);
		          DCI.SpatialQuery.map.getView().fit(DCI.SpatialQuery.spatialSource.getExtent());
		          $("#spatial-total").html("框选查询共"+features.length+"条结果");
		          var innerStr = [];
	        	  for(var i=0;i<features.length;i++){
	        		  var feature = features[i];
	        		  //面取中心点
	   			      var pointGeometry=DCI.SpatialQuery.creatPointGeometry(feature.getGeometry().getExtent());//面取中心点
	   			      var attribute = {
	   			    	  "OBJECTID":features[i].get('OBJECTID'),
	   			    	  "名称":features[i].get('名称'),
	   			    	  "编号":features[i].get('编号'),
	   			    	  "类别":features[i].get('类别'),
	   			    	  "面积":features[i].get('面积'),
	   			      };
	   				  var feature=new ol.Feature({
	   					geometry: pointGeometry,
	   					attribute:attribute,
	   					id:features[i].get('OBJECTID'),
	   					type:"point"
	   				  });
	   				  DCI.SpatialQuery.pointLayer.getSource().addFeature(feature);
	   			      
	                  innerStr.push('<div class="left_list_li_box"   id="' + features[i].get('OBJECTID') + '"   onclick="DCI.SpatialQuery.locationToMap(\'' + features[i].get('OBJECTID') + '\')" >');
	                  innerStr.push('<div class="left_list_li_box_top">');
	                  innerStr.push('<div class="left2_box2">');
	                  innerStr.push('<img class="list_poi_marker" style="" src="' + getRootPath() + 'Content/images/index/poiLocation.png"></img>');
	                  innerStr.push('<div class="left_list_li1">');
	                  innerStr.push('<p>');
	                  innerStr.push('<a style="text-decoration:none">' + features[i].get('名称') + '</a><br/>');
	                  innerStr.push('</p>');
	                  innerStr.push('<p>');
	                  innerStr.push('<a style="text-decoration:none;color:#555;">' + features[i].get('编号') + '</a><br/>');
	                  innerStr.push('</p>');
	                  innerStr.push('<p>');
	                  innerStr.push('<a style="text-decoration:none;color:#555;">' + features[i].get('类别') + '</a><br/>');
	                  innerStr.push('</p>');
	                  innerStr.push('<p>');
	                  innerStr.push('<a style="text-decoration:none;color:#555;">' + features[i].get('面积') + '</a><br/>');
	                  innerStr.push('</p>');
	                  innerStr.push('</div>');
	                  innerStr.push('</div>')
	                  innerStr.push('</div>');
	                  innerStr.push('</div>');
	        	  }
	        	  $("#showLists").html(innerStr.join(''));
	          }
	          else{
	        	  $("#showLists").html("框选查询不到相关结果");	        	  
	          }
	   });    	
    },
	/**获取弹出框html模版
	 *@attribute
	 **/
	getWinContent:function(attribute){
		var e = attribute;
		var winHtml="";
		var title = attribute.名称;
		winHtml = "<div  style='width:300px;' id='inforwin_Container'>"+
			"<table>"+
			"<tr>"+
			"<td style='width:20%'><label style='font-weight:normal;font-size:13px;'>编号:</label></td>"+
			"<td><label style='font-weight:normal;font-size:13px;'>"+attribute.编号+ "</label></td>"+
			"</tr>"+
			"<tr>"+
			"<td style='width:20%'><label style='font-weight:normal;font-size:13px;'>类别:</label></td>"+
			"<td><label style='font-weight:normal;font-size:13px;'>"+attribute.类别+ "</label></td>"+
			"</tr>"+
			"<tr>"+
			"<td style='width:20%'><label style='font-weight:normal;font-size:13px;'>面积:</label></td>"+
			"<td><label style='font-weight:normal;font-size:13px;'>"+attribute.面积+ "</label></td>"+
			"</tr>"+
			"</table>"+	
			'<button videoid="'+attribute.OBJECTID+'" style="height:28px;width:60px;float:right;margin-right:18px;margin-top:5px;margin-bottom:5px;"  class="btn btn-default btn-sm openInfo" >'+
		     '<i style="margin-right:3px" class="glyphicon glyphicon-info-sign"></i>详情</button>'+
			"</div>";
		return {'html':winHtml,'title':title};
	},
	/**
	 * 弹出气泡窗口
	 * @centerPoint centerPoint @ 地图跳转中心点
	 * @html html @ 气泡窗口内容模板
	 * @title title @ 气泡窗口标题
	 * **/
	showGraphicWin:function(centerPoint,html,title){
		DCI.SpatialQuery.popover.show(centerPoint, html, title);			
	},
	/**
	 * 关闭气泡窗口
	 * **/
	hideGraphicWin:function(){
		DCI.SpatialQuery.popover.close();				
	},
    clearMap:function(){
    	DCI.SpatialQuery.map.removeInteraction(DCI.SpatialQuery.draw);
    	DCI.SpatialQuery.draw = null;
    	DCI.SpatialQuery.hideGraphicWin();
    	if(DCI.SpatialQuery.layer)
    	   DCI.SpatialQuery.layer.getSource().clear();
    	if(DCI.SpatialQuery.spatialLayer)
     	   DCI.SpatialQuery.spatialLayer.getSource().clear();
    	if(DCI.SpatialQuery.pointLayer)
      	   DCI.SpatialQuery.pointLayer.getSource().clear();
    },
    /**
     * 切换到其他模块再回来--默认初始化状态
    */
    InitState: function () {
        $("#spatial-total").html("");
        $("#showLists").empty();
    },
    addInteraction:function(value){
    	var geometryFunction;
    	switch (value) {
		case "Box":	
            value = 'Circle';
            geometryFunction = ol.interaction.Draw.createBox();
			break;
		case "Polygon":	
            value = 'Polygon';
			break;
		}
    	DCI.SpatialQuery.draw = new ol.interaction.Draw({
            source: DCI.SpatialQuery.source,
            type: value,
            geometryFunction: geometryFunction
          });
    	DCI.SpatialQuery.map.addInteraction(DCI.SpatialQuery.draw);
    	DCI.SpatialQuery.draw.on('drawend',function(evt){
    		DCI.SpatialQuery.clearMap();
    		DCI.SpatialQuery.drawEndPlot(evt.feature);
		});   	
    	
    },
	/**
	 * 地图点击完成后函数
	 * **/
	drawEndPlot:function(feature){
	    var featureRequest = new ol.format.WFS().writeGetFeature({
	          srsName: bxmap.config.MapConfig.wfs.srsName,
	          featureNS: bxmap.config.MapConfig.wfs.featureNS,
	          featurePrefix: bxmap.config.MapConfig.wfs.featurePrefix,
	          featureTypes: bxmap.config.MapConfig.wfs.featureTypes,
	          outputFormat: bxmap.config.MapConfig.wfs.outputFormat,
	          filter:ol.format.filter.intersects(bxmap.config.MapConfig.wfs.geometryName, feature.getGeometry(), bxmap.config.MapConfig.wfs.srsName)
	    });
	    fetch(bxmap.config.MapConfig.geoserver_url+bxmap.config.MapConfig.wfs.url, {
	          method: 'POST',
	          body: new XMLSerializer().serializeToString(featureRequest)
	        }).then(function(response) {
	          return response.json();
	        }).then(function(json) {
	          var features = new ol.format.GeoJSON().readFeatures(json);
	          if(features && features.length>0){
	          	  if(DCI.SpatialQuery.spatialLayer)
	          	     DCI.SpatialQuery.spatialLayer.getSource().clear();
	          	  if(DCI.SpatialQuery.pointLayer)
		          	 DCI.SpatialQuery.pointLayer.getSource().clear();
		          DCI.SpatialQuery.spatialSource.addFeatures(features);
		          DCI.SpatialQuery.map.getView().fit(DCI.SpatialQuery.spatialSource.getExtent());
		          $("#spatial-total").html("框选查询共"+features.length+"条结果");
		          var innerStr = [];
	        	  for(var i=0;i<features.length;i++){
	        		  var feature = features[i];
	        		  //面取中心点
	   			      var pointGeometry=DCI.SpatialQuery.creatPointGeometry(feature.getGeometry().getExtent());//面取中心点
	   			      var attribute = {
	   			    	  "OBJECTID":features[i].get('OBJECTID'),
	   			    	  "名称":features[i].get('名称'),
	   			    	  "编号":features[i].get('编号'),
	   			    	  "类别":features[i].get('类别'),
	   			    	  "面积":features[i].get('面积'),
	   			      };
	   				  var feature=new ol.Feature({
	   					geometry: pointGeometry,
	   					attribute:attribute,
	   					id:features[i].get('OBJECTID'),
	   					type:"point"
	   				  });
	   				  DCI.SpatialQuery.pointLayer.getSource().addFeature(feature);
	   			      
	                  innerStr.push('<div class="left_list_li_box"   id="' + features[i].get('OBJECTID') + '"   onclick="DCI.SpatialQuery.locationToMap(\'' + features[i].get('OBJECTID') + '\')" >');
	                  innerStr.push('<div class="left_list_li_box_top">');
	                  innerStr.push('<div class="left2_box2">');
	                  innerStr.push('<img class="list_poi_marker" style="" src="' + getRootPath() + 'Content/images/index/poiLocation.png"></img>');
	                  innerStr.push('<div class="left_list_li1">');
	                  innerStr.push('<p>');
	                  innerStr.push('<a style="text-decoration:none">' + features[i].get('名称') + '</a><br/>');
	                  innerStr.push('</p>');
	                  innerStr.push('<p>');
	                  innerStr.push('<a style="text-decoration:none;color:#555;">' + features[i].get('编号') + '</a><br/>');
	                  innerStr.push('</p>');
	                  innerStr.push('<p>');
	                  innerStr.push('<a style="text-decoration:none;color:#555;">' + features[i].get('类别') + '</a><br/>');
	                  innerStr.push('</p>');
	                  innerStr.push('<p>');
	                  innerStr.push('<a style="text-decoration:none;color:#555;">' + features[i].get('面积') + '</a><br/>');
	                  innerStr.push('</p>');
	                  innerStr.push('</div>');
	                  innerStr.push('</div>')
	                  innerStr.push('</div>');
	                  innerStr.push('</div>');
	        	  }
	        	  $("#showLists").html(innerStr.join(''));
	          }
	          else{
	        	  $("#showLists").html("框选查询不到相关结果");	        	  
	          }
	   });
		
	},
	/**点击list定位**/
	locationToMap:function(index){
		var curfeature;
		DCI.SpatialQuery.pointLayer.getSource().forEachFeature(function(feature){
			var fid=feature.get('id');
			if(fid==index){
				curfeature=feature;
			}
		});
		if(curfeature){
			var attribute = curfeature.get('attribute');
			var centerCord= DCI.SpatialQuery.getCenterCoordinates(curfeature);
			var winObj=DCI.SpatialQuery.getWinContent(attribute);
			DCI.SpatialQuery.showGraphicWin(centerCord,winObj.html,winObj.title);	
			$(".openInfo").click(function(){
				DCI.SpatialQuery.showInfoWindow(attribute);
			});
		}
		else{
			DCI.SpatialQuery.hideGraphicWin();
			promptdialog("提示信息","地图定位匹配不到相关数据");
		}
	},
	showInfoWindow:function(attribute){
		var id=$(this).attr("videoid");
		//var source = DCI.SpatialQuery.spatialLayer.getSource();
		//var feature = source.getFeatureById(id);
        //location.href = "map.html?username=" + username;//location.href实现客户端页面的跳转 
        var dialog = jDialog.dialog({
            title: '详情信息',
            content: '<div id="mapInfo" style="height:100% !important"></div>',
            width:$("#main-container").width()*0.8,
            height:$("#main-container").height()
        });
        var html=DCI.SpatialQuery.getInfoWinContent(attribute);
        $("#mapInfo").empty();
        $("#mapInfo").append(html);		
	},
	/**获取详情弹出框html模版
	 *@attribute
	 **/
	getInfoWinContent:function(attribute){
		var winHtml="";
		winHtml = "<div  style='width:300px;' id='inforwin_Container'>"+
			"<table>"+
			"<tr>"+
			"<td style='width:20%'><label style='font-weight:normal;font-size:13px;'>名称:</label></td>"+
			"<td><label style='font-weight:normal;font-size:13px;'>"+attribute.名称+ "</label></td>"+
			"</tr>"+
			"<tr>"+
			"<td style='width:20%'><label style='font-weight:normal;font-size:13px;'>编号:</label></td>"+
			"<td><label style='font-weight:normal;font-size:13px;'>"+attribute.编号+ "</label></td>"+
			"</tr>"+
			"<tr>"+
			"<td style='width:20%'><label style='font-weight:normal;font-size:13px;'>类别:</label></td>"+
			"<td><label style='font-weight:normal;font-size:13px;'>"+attribute.类别+ "</label></td>"+
			"</tr>"+
			"<tr>"+
			"<td style='width:20%'><label style='font-weight:normal;font-size:13px;'>面积:</label></td>"+
			"<td><label style='font-weight:normal;font-size:13px;'>"+attribute.面积+ "</label></td>"+
			"</tr>"+
			"</table>"+	
			"</div>";
		return winHtml;
	},
	/**构建点geometry
	 * @extent 范围
	 * return｛ol.geom.Point｝
	 */
	creatPointGeometry:function(extent){
		var geometry=new ol.geom.Point(new ol.extent.getCenter(extent));
		return geometry;
	},
	/**获取中心点坐标
	 * @feature 要素｛ol.feature｝
	 * return ｛ol.coordinates｝
	 * */		
	getCenterCoordinates:function(feature){
		var coord=new ol.extent.getCenter(feature.getGeometry().getExtent());
		return coord;			
	},
}