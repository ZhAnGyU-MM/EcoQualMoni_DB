//GeoJSON Demo示例
//点要素示例
//{ "type": "Point", "coordinates": [100.0, 0.0] }
var PointFeature = {
		  "type": "Feature",
		  "geometry": {
		    "type": "Point",
		    "coordinates": [100.0, 0.0]
		  },
		  "properties": {
		    "id": 1,
		    "name": "点要素"
		  }
		};

//多点要素示例
//{"type":"MultiPoint","coordinates":[[100,0],[101,1]]}
var MultiPointFeature = {
		  "type": "Feature",
		  "geometry": {
		    "type": "MultiPoint",
		    "coordinates": [[100,0],[101,1]]
		  },
		  "properties": {
		    "id": 1,
		    "name": "多点要素"
		  }
		};
//线要素示例
//{ "type": "LineString","coordinates": [ [100.0, 0.0], [101.0, 1.0] ]}
var LineStringFeature = {
		  "type": "Feature",
		  "geometry": {
		    "type": "LineString",
		    "coordinates": [ [100.0, 0.0], [101.0, 1.0] ]
		  },
		  "properties": {
		    "id": 1,
		    "name": "线要素示例"
		  }
		};
//多线要素示例
//{"type":"MultiLineString","coordinates":[[[100,0],[101,1]],[[102,2],[103,3]]]}
var MultiLineStringFeature = {
		  "type": "Feature",
		  "geometry": {
		    "type": "MultiLineString",
		    "coordinates": [
		      [[100,0],[101,1]],
		      [[102,2],[103,3]]
		    ]
		  },
		  "properties": {
		    "id": 1,
		    "name": "多线要素示例"
		  }
		};
//面要素示例
//不带洞的面，{"type":"Polygon","coordinates":[[[100,0],[101,0],[101,1],[100,1],[100,0]]]}
//带有洞的面，{"type":"Polygon","coordinates":[[[100,0],[101,0],[101,1],[100,1],[100,0]],[[100.2,0.2],[100.8,0.2],[100.8,0.8],[100.2,0.8],[100.2,0.2]]]}
var PolygonFeature = {
	      "type": "Feature",
	      "geometry": {
	        "type": "Polygon",
	        "coordinates": [[[100,0],[101,0],[101,1],[100,1],[100,0]]]
	      },
	      "properties": {
	        "id": 1,
	        "name": "面要素示例"
	      }
	    };

//多面要素示例
//{"type":"MultiPolygon","coordinates":[[[[102,2],[103,2],[103,3],[102,3],[102,2]]],[[[100,0],[101,0],[101,1],[100,1],[100,0]],[[100.2,0.2],[100.8,0.2],[100.8,0.8],[100.2,0.8],[100.2,0.2]]]]}
var MultiPolygonFeature = {
	      "type": "Feature",
	      "geometry": {
	        "type": "MultiPolygon",
	        "coordinates": [
	          [[[102,2],[103,2],[103,3],[102,3],[102,2]]],[[[100,0],[101,0],[101,1],[100,1],[100,0]],
	          [[100.2,0.2],[100.8,0.2],[100.8,0.8],[100.2,0.8],[100.2,0.2]]]
	        ]
	      },
	      "properties": {
	        "id": 1,
	        "name": "多面要素示例"
	      }
	    };