//该文件用于扩展openlayers 3功能

/*----------扩展鹰眼类功能{ol.control.OverviewMap}---------*/
/**
 * 设置控件是否可见
 * @param visible {Boolean} true可见，false，不可见
 */
ol.control.OverviewMap.prototype.setVisible = function(visible){
	var display = visible ? "block" : "none";
	this.element.style.display = display;
}

ol.control.FullScreen.prototype.setVisible = function(visible){
	var display = visible ? "block" : "none";
	this.element.style.display = display;
}

ol.control.ScaleLine.prototype.setVisible = function(visible){
	var display = visible ? "ol-custom-scaleline ol-unselectable" : "ol-custom-scaleline ol-unselectable hide";
	this.element.className = display;
}

/*-------------------------------------------------------*/
/*           扩展几何对象{ol.geom.SimpleGeometry}            */
/*-------------------------------------------------------*/
/**
 * 两条直线相交返回true, 不相交返回false
 * @param p点[x,y] p1, p2为一条线段两端点 p3, p4为另一条线段的两端点
 */
ol.geom.SimpleGeometry.isCrossLine = function(p1,p2,p3,p4){
	
	var _crossMulti = function(v1, v2){
		return v1.x * v2.y - v1.y * v2.x;
	}

    var v1={x:p1[0]-p3[0],y:p1[1]-p3[1]},
    v2={x:p2[0]-p3[0],y:p2[1]-p3[1]},
    v3={x:p4[0]-p3[0],y:p4[1]-p3[1]},
    v=_crossMulti(v1,v3)*_crossMulti(v2,v3),
    v1={x:p3[0]-p1[0],y:p3[1]-p1[1]},
    v2={x:p4[0]-p1[0],y:p4[1]-p1[1]},
    v3={x:p2[0]-p1[0],y:p2[1]-p1[1]};

    return (v <= 0 && _crossMulti(v1,v3) * _crossMulti(v2,v3) <= 0) ? true : false;
}

/**
 * 该方法适用于MultiPoint|LineString|LinearRing
 * 如果与geometry有交集则返回true
 * @param geometry - {ol.geom.SimpleGeometry}
 * @return {Boolean}
 */
ol.geom.SimpleGeometry.prototype.intersects = function(geometry){
	return false;
}

/**
 * 如果与geometry有交集则返回true
 * @param geometry - {ol.geom.SimpleGeometry}
 * @return {Boolean}
 */
ol.geom.Point.prototype.intersects = function(geometry){
	var intersect = false;
    if(geometry.getType() == "Point") {
    	intersect = this.intersectsCoordinate(geometry.getCoordinates());
    } else {
    	intersect = geometry.intersects(this);
    }
    
    return intersect;
}

/**
 * 如果与geometry有交集则返回true
 * @param geometry - {ol.geom.SimpleGeometry}
 * @return {Boolean}
 */
ol.geom.MultiPoint.prototype.intersects = function(geometry){
	var intersect = false;
    if(geometry.getType() == "Point") {
    	intersect = this.intersectsCoordinate(geometry.getCoordinates());
    } else {
    	var coords = this.getCoordinates();
    	for(var i = 0; i < coords.length; i++){
    		intersect = geometry.intersectsCoordinate(coords[i]);
    		//相交则返回true
    		if(intersect) return true;
    	}
    }
    
    return intersect;
}

/**
 * 如果与geometry有交集则返回true
 * @param geometry - {ol.geom.SimpleGeometry}
 * @return {Boolean}
 */
ol.geom.LineString.prototype.intersects = function(geometry){
	var intersect = false;
    var type = geometry.getType();
    if(type == "LineString" || type == "LinearRing" || type == "Point") {
        var segs1 = this.getCoordinates();
        var segs2;
        if(type == "Point") {
            segs2 = [geometry.getCoordinates()];
        } else {
            segs2 = geometry.getCoordinates();
        }
        
        //判断相交
        for(var i = 0; i < segs1.length - 1; i++){
        	for(var j = 0; j < segs2.length - 1; j++){
        		intersect = ol.geom.SimpleGeometry.isCrossLine(segs1[i],segs1[i+1],segs2[j],segs2[j+1]);
        		//相交则返回true
        		if(intersect) return true;
        	}
        }
    } else {
        intersect = geometry.intersects(this);
    }
    return intersect;
}

/**
 * 如果与geometry有交集则返回true
 * @param geometry - {ol.geom.SimpleGeometry}
 * @return {Boolean}
 */
ol.geom.LinearRing.prototype.intersects = function(geometry){
	var intersect = false;
	var type = geometry.getType();
	switch(type){
		case "Point":
			intersect = this.intersectsCoordinate(geometry.getCoordinates());
			break;
		case "LinearRing":
			var linestring = new ol.geom.LineString(geometry.getCoordinates(),geometry.getLayout());
	        intersect = linestring.intersects(this);
	        break;
		default:
			intersect = geometry.intersects(this);
			break;
	}
	
    return intersect;
}


/**
 * 如果与geometry有交集则返回true
 * @param geometry - {ol.geom.SimpleGeometry}
 * @return {Boolean}
 */
ol.geom.MultiLineString.prototype.intersects = function(geometry){
	var intersect = false;
    if(geometry.getType() == "Point") {
        intersect = this.intersectsCoordinate(geometry.getCoordinates());
    } else {
    	var lineStrings = this.getLineStrings();
    	var linestring;
    	for(var i = 0; i < lineStrings.length; i++){
    		linestring = lineStrings[i];
    		intersect = linestring.intersects(geometry);
    		//相交则返回true
    		if(intersect) return true;
    	}
    }
    return intersect;
}

/**
 * 如果与geometry有交集则返回true
 * @param geometry - {ol.geom.SimpleGeometry}
 * @return {Boolean}
 */
ol.geom.Polygon.prototype.intersects = function(geometry){
	var intersect = false;
    var type = geometry.getType();
    switch(type){
	    case "Point":
	    	intersect = this.intersectsCoordinate(geometry.getCoordinates());
	    	break;
	    case "MultiPoint":
	    	var coords = geometry.getCoordinates();
	    	for(var i=0; i < coords.length; i++){
	    		intersect = this.intersectsCoordinate(coords[i]);
	    		// 相交则返回true
        		if(intersect) return true;
	    	}
	    	break;
	    case "LineString":
	    case "LinearRing":
	    	// 判断是否与面边界线相交
	    	var linearRings = this.getLinearRings();
	        for(var i=0; i<linearRings.length; ++i) {
	            intersect = geometry.intersects(linearRings[i]);
	            // 相交则返回true
	    		if(intersect) return true;
	        }
	        if(!intersect) {
	            // 判断面是否包含线的顶点
	        	var coords = geometry.getCoordinates();
	            for(i=0, len=coords.length; i<len; ++i) {
	                intersect = this.intersectsCoordinate(coords[i]);
	                // 相交则返回true
	        		if(intersect) return true;
	            }
	        }
	        break;
	    case "MultiLineString":
	    	var lineStrings = geometry.getLineStrings();
	    	for(var i=0; i<lineStrings.length; i++){
	    		intersect = this.intersects(lineStrings[i]);
	    		// 相交则返回true
        		if(intersect) return true;
	    	}
	    	break;
	    case "Polygon":
	    	//判断polygon是否在geometry内部
	    	if(!intersect){
	    		var coords = this.getCoordinates()[0];
	    		for(var i=0; i<coords.length; i++){
	    			intersect = geometry.intersectsCoordinate(coords[i]);
		    		// 相交则返回true
	        		if(intersect) return true;
	    		}
	    	}
	    	//判断边线是否相交或polygon包含geometry
	    	var linearRings = geometry.getLinearRings();
	    	for(var i=0; i<linearRings.length; i++){
	    		intersect = this.intersects(linearRings[i]);
	    		// 相交则返回true
        		if(intersect) return true;
	    	}
	    	break;
    	default:
    		intersect = geometry.intersects(this);
    		break;
    }
    
    return intersect;
}

/**
 * 如果与geometry有交集则返回true
 * @param geometry - {ol.geom.SimpleGeometry}
 * @return {Boolean}
 */
ol.geom.Circle.prototype.intersects = function(geometry){
	var intersect = false;
	if(geometry.getType() == "Point") {
        intersect = this.intersectsCoordinate(geometry.getCoordinates());
    } else {
		//Circle转为Polygon
		var polygon = ol.geom.Polygon.fromCircle(this, 64);
		intersect = polygon.intersects(geometry);
	}
	return intersect;
}

/**
 * 如果与geometry有交集则返回true
 * @param geometry - {ol.geom.SimpleGeometry}
 * @return {Boolean}
 */
ol.geom.MultiPolygon.prototype.intersects = function(geometry){
	var intersect = false;
    if(geometry.getType() == "Point") {
        intersect = this.intersectsCoordinate(geometry.getCoordinates());
    } else {
    	var polygons = this.getPolygons();
    	var polygon;
    	for(var i = 0; i < polygons.length; i++){
    		polygon = polygons[i];
    		intersect = polygon.intersects(geometry);
    		//相交则返回true
    		if(intersect) return true;
    	}
    }
    return intersect;
}

/**
 * 判断是否自相交
 */
ol.geom.Polygon.prototype.isSelfIntersection = function(){
	var coordinates = this.getCoordinates()[0];
	var length = coordinates.length;

	var p1,p2,p3,p4;
	for(var i = 0;i < length - 2;i++){
		for(var j = i + 2; j < length - 1; j++){
			p1 = coordinates[i];
			p2 = coordinates[i + 1];
			p3 = coordinates[j];
			p4 = coordinates[j + 1];
			//判断连续重复点
			if(p1[0] == p2[0] && p1[1] == p2[1]) break;
			if(p3[0] == p4[0] && p3[1] == p4[1]) break;
			
			if(i == 0){
				if(j < length - 2 && ol.geom.SimpleGeometry.isCrossLine(p1,p2,p3,p4)){
					return true;
				}
			}else {
				if(ol.geom.SimpleGeometry.isCrossLine(p1,p2,p3,p4)){
					return true;
				}
			}
		}
	}
	return false;
}

/**
 * 判断是否自相交
 */
ol.geom.MultiPolygon.prototype.isSelfIntersection = function(){
	for(var coorsIndex  = 0 ; coorsIndex <= this.getCoordinates().length; coorsIndex){
		var coordinates = this.getCoordinates()[coorsIndex];
		var length = coordinates.length;
		for(var i = 0; i < length-1; i++){
			for(var j = i + 2; j < length - 2; j++){
				if(ol.geom.SimpleGeometry.isCrossLine(coordinates[i],coordinates[i+1],coordinates[j],coordinates[j+1])){
					return true;
				}
			}
		}
	}
	return false;
}


/*-------------------------------------------------------*/
/*        扩展交互工具{ol.interaction.Interaction}           */
/*-------------------------------------------------------*/
/**
 * @description 清空接口
 */
ol.interaction.Interaction.prototype.clear = function(){}
/**
 * @description 设置鼠标样式
 * @param cursor
 */
ol.interaction.Interaction.prototype.setCursor = function(cursor){
	var map = this.getMap();
	if(map){
        var elem = map.getViewport();
        var previousCursor = elem.style.cursor;
        elem.style.cursor = cursor === undefined ? previousCursor : cursor;
        //map.setCursor(cursor);
	}
}

/*-------------------------------------------------------*/
/*                扩展要素{ol.Feature}                      */
/*-------------------------------------------------------*/
/**
 * @description 获取符号化规则名称
 * @returns {String}
 */
ol.Feature.prototype.getSymbolRuleName = function(){
	var ruleName = null;
	var context = bxmap.common.getContext(this);
	return context["symbolRuleName"];
}
/**
 * @description 设置符号化规则名称
 * @param {String} ruleName 符号化规则名称
 */
ol.Feature.prototype.setSymbolRuleName = function(ruleName){
	var context = bxmap.common.getContext(this);
	context["symbolRuleName"] = ruleName;
}