shp('shp/重庆生态质量监测样点.shp').then(function (geojson) {
  // 创建矢量层
  var vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: new ol.format.GeoJSON().readFeatures(geojson)
    })
  });

  // 将矢量层添加到地图中
  map.addLayer(vectorLayer);

12887：北碚
7563：沙坪坝