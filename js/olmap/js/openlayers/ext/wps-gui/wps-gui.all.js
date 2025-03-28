var Filter_1_1_0_Module_Factory = function () {
  var Filter_1_1_0 = {
    name: 'Filter_1_1_0',
    defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/ogc',
    typeInfos: [{
        type: 'classInfo',
        localName: 'BinaryOperatorType',
        baseTypeInfo: 'Filter_1_1_0.ExpressionType',
        propertyInfos: [{
            name: 'expression',
            collection: true,
            elementName: 'expression',
            typeInfo: 'Filter_1_1_0.ExpressionType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'ExpressionType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'BinarySpatialOpType',
        baseTypeInfo: 'Filter_1_1_0.SpatialOpsType',
        propertyInfos: [{
            name: 'rest',
            collection: true,
            elementTypeInfos: [{
                elementName: {
                  localPart: '_Geometry',
                  namespaceURI: 'http:\/\/www.opengis.net\/gml'
                },
                typeInfo: 'GML_3_1_1.AbstractGeometryType'
              }, {
                elementName: 'PropertyName',
                typeInfo: 'Filter_1_1_0.PropertyNameType'
              }, {
                elementName: {
                  localPart: 'Envelope',
                  namespaceURI: 'http:\/\/www.opengis.net\/gml'
                },
                typeInfo: 'GML_3_1_1.EnvelopeType'
              }],
            type: 'elementRefs'
          }]
      }, {
        type: 'classInfo',
        localName: 'SpatialOpsType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'BinaryLogicOpType',
        baseTypeInfo: 'Filter_1_1_0.LogicOpsType',
        propertyInfos: [{
            name: 'comparisonOpsOrSpatialOpsOrLogicOps',
            collection: true,
            elementTypeInfos: [{
                elementName: 'logicOps',
                typeInfo: 'Filter_1_1_0.LogicOpsType'
              }, {
                elementName: 'Function',
                typeInfo: 'Filter_1_1_0.FunctionType'
              }, {
                elementName: 'comparisonOps',
                typeInfo: 'Filter_1_1_0.ComparisonOpsType'
              }, {
                elementName: 'spatialOps',
                typeInfo: 'Filter_1_1_0.SpatialOpsType'
              }],
            type: 'elementRefs'
          }]
      }, {
        type: 'classInfo',
        localName: 'LogicOpsType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'BinaryComparisonOpType',
        baseTypeInfo: 'Filter_1_1_0.ComparisonOpsType',
        propertyInfos: [{
            name: 'expression',
            collection: true,
            elementName: 'expression',
            typeInfo: 'Filter_1_1_0.ExpressionType',
            type: 'elementRef'
          }, {
            name: 'matchCase',
            typeInfo: 'Boolean',
            attributeName: 'matchCase',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ComparisonOpsType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'SortByType',
        propertyInfos: [{
            type: 'element',
            name: 'sortProperty',
            collection: true,
            elementName: 'SortProperty',
            typeInfo: 'Filter_1_1_0.SortPropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'DistanceBufferType',
        baseTypeInfo: 'Filter_1_1_0.SpatialOpsType',
        propertyInfos: [{
            type: 'element',
            name: 'propertyName',
            elementName: 'PropertyName',
            typeInfo: 'Filter_1_1_0.PropertyNameType'
          }, {
            name: 'geometry',
            elementName: {
              localPart: '_Geometry',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            typeInfo: 'GML_3_1_1.AbstractGeometryType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'distance',
            elementName: 'Distance',
            typeInfo: 'Filter_1_1_0.DistanceType'
          }]
      }, {
        type: 'classInfo',
        localName: 'GmlObjectIdType',
        baseTypeInfo: 'Filter_1_1_0.AbstractIdType',
        propertyInfos: [{
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'id',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractIdType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'FunctionType',
        baseTypeInfo: 'Filter_1_1_0.ExpressionType',
        propertyInfos: [{
            name: 'expression',
            collection: true,
            elementName: 'expression',
            typeInfo: 'Filter_1_1_0.ExpressionType',
            type: 'elementRef'
          }, {
            name: 'name',
            typeInfo: 'String',
            attributeName: 'name',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'LiteralType',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowTypedObject: true,
            mixed: true,
            type: 'anyElement'
          }]
      }, {
        type: 'classInfo',
        localName: 'PropertyIsBetweenType',
        baseTypeInfo: 'Filter_1_1_0.ComparisonOpsType',
        propertyInfos: [{
            name: 'expression',
            elementName: 'expression',
            typeInfo: 'Filter_1_1_0.ExpressionType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'lowerBoundary',
            elementName: 'LowerBoundary',
            typeInfo: 'Filter_1_1_0.LowerBoundaryType'
          }, {
            type: 'element',
            name: 'upperBoundary',
            elementName: 'UpperBoundary',
            typeInfo: 'Filter_1_1_0.UpperBoundaryType'
          }]
      }, {
        type: 'classInfo',
        localName: 'FilterCapabilities',
        propertyInfos: [{
            type: 'element',
            name: 'spatialCapabilities',
            elementName: 'Spatial_Capabilities',
            typeInfo: 'Filter_1_1_0.SpatialCapabilitiesType'
          }, {
            type: 'element',
            name: 'scalarCapabilities',
            elementName: 'Scalar_Capabilities',
            typeInfo: 'Filter_1_1_0.ScalarCapabilitiesType'
          }, {
            type: 'element',
            name: 'idCapabilities',
            elementName: 'Id_Capabilities',
            typeInfo: 'Filter_1_1_0.IdCapabilitiesType'
          }]
      }, {
        type: 'classInfo',
        localName: 'SpatialCapabilitiesType',
        propertyInfos: [{
            type: 'element',
            name: 'geometryOperands',
            elementName: 'GeometryOperands',
            typeInfo: 'Filter_1_1_0.GeometryOperandsType'
          }, {
            type: 'element',
            name: 'spatialOperators',
            elementName: 'SpatialOperators',
            typeInfo: 'Filter_1_1_0.SpatialOperatorsType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ScalarCapabilitiesType',
        propertyInfos: [{
            type: 'element',
            name: 'logicalOperators',
            elementName: 'LogicalOperators',
            typeInfo: 'Filter_1_1_0.LogicalOperators'
          }, {
            type: 'element',
            name: 'comparisonOperators',
            elementName: 'ComparisonOperators',
            typeInfo: 'Filter_1_1_0.ComparisonOperatorsType'
          }, {
            type: 'element',
            name: 'arithmeticOperators',
            elementName: 'ArithmeticOperators',
            typeInfo: 'Filter_1_1_0.ArithmeticOperatorsType'
          }]
      }, {
        type: 'classInfo',
        localName: 'IdCapabilitiesType',
        propertyInfos: [{
            name: 'eidOrFID',
            collection: true,
            elementTypeInfos: [{
                elementName: 'EID',
                typeInfo: 'Filter_1_1_0.EID'
              }, {
                elementName: 'FID',
                typeInfo: 'Filter_1_1_0.FID'
              }],
            type: 'elements'
          }]
      }, {
        type: 'classInfo',
        localName: 'FID',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'PropertyNameType',
        baseTypeInfo: 'Filter_1_1_0.ExpressionType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'EID',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'PropertyIsLikeType',
        baseTypeInfo: 'Filter_1_1_0.ComparisonOpsType',
        propertyInfos: [{
            type: 'element',
            name: 'propertyName',
            elementName: 'PropertyName',
            typeInfo: 'Filter_1_1_0.PropertyNameType'
          }, {
            type: 'element',
            name: 'literal',
            elementName: 'Literal',
            typeInfo: 'Filter_1_1_0.LiteralType'
          }, {
            name: 'wildCard',
            typeInfo: 'String',
            attributeName: 'wildCard',
            type: 'attribute'
          }, {
            name: 'singleChar',
            typeInfo: 'String',
            attributeName: 'singleChar',
            type: 'attribute'
          }, {
            name: 'escapeChar',
            typeInfo: 'String',
            attributeName: 'escapeChar',
            type: 'attribute'
          }, {
            name: 'matchCase',
            typeInfo: 'Boolean',
            attributeName: 'matchCase',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'LogicalOperators',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'SimpleArithmetic',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'FeatureIdType',
        baseTypeInfo: 'Filter_1_1_0.AbstractIdType',
        propertyInfos: [{
            name: 'fid',
            typeInfo: 'ID',
            attributeName: 'fid',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'UnaryLogicOpType',
        baseTypeInfo: 'Filter_1_1_0.LogicOpsType',
        propertyInfos: [{
            name: 'comparisonOps',
            elementName: 'comparisonOps',
            typeInfo: 'Filter_1_1_0.ComparisonOpsType',
            type: 'elementRef'
          }, {
            name: 'spatialOps',
            elementName: 'spatialOps',
            typeInfo: 'Filter_1_1_0.SpatialOpsType',
            type: 'elementRef'
          }, {
            name: 'logicOps',
            elementName: 'logicOps',
            typeInfo: 'Filter_1_1_0.LogicOpsType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'function',
            elementName: 'Function',
            typeInfo: 'Filter_1_1_0.FunctionType'
          }]
      }, {
        type: 'classInfo',
        localName: 'PropertyIsNullType',
        baseTypeInfo: 'Filter_1_1_0.ComparisonOpsType',
        propertyInfos: [{
            type: 'element',
            name: 'propertyName',
            elementName: 'PropertyName',
            typeInfo: 'Filter_1_1_0.PropertyNameType'
          }]
      }, {
        type: 'classInfo',
        localName: 'FilterType',
        propertyInfos: [{
            name: 'spatialOps',
            elementName: 'spatialOps',
            typeInfo: 'Filter_1_1_0.SpatialOpsType',
            type: 'elementRef'
          }, {
            name: 'comparisonOps',
            elementName: 'comparisonOps',
            typeInfo: 'Filter_1_1_0.ComparisonOpsType',
            type: 'elementRef'
          }, {
            name: 'logicOps',
            elementName: 'logicOps',
            typeInfo: 'Filter_1_1_0.LogicOpsType',
            type: 'elementRef'
          }, {
            name: 'id',
            collection: true,
            elementName: '_Id',
            typeInfo: 'Filter_1_1_0.AbstractIdType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'BBOXType',
        baseTypeInfo: 'Filter_1_1_0.SpatialOpsType',
        propertyInfos: [{
            type: 'element',
            name: 'propertyName',
            elementName: 'PropertyName',
            typeInfo: 'Filter_1_1_0.PropertyNameType'
          }, {
            name: 'envelope',
            elementName: {
              localPart: 'Envelope',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            typeInfo: 'GML_3_1_1.EnvelopeType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'FunctionNameType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'String',
            type: 'value'
          }, {
            name: 'nArgs',
            typeInfo: 'String',
            attributeName: 'nArgs',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'FunctionsType',
        propertyInfos: [{
            type: 'element',
            name: 'functionNames',
            elementName: 'FunctionNames',
            typeInfo: 'Filter_1_1_0.FunctionNamesType'
          }]
      }, {
        type: 'classInfo',
        localName: 'DistanceType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Double',
            type: 'value'
          }, {
            name: 'units',
            typeInfo: 'String',
            attributeName: 'units',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'SpatialOperatorsType',
        propertyInfos: [{
            type: 'element',
            name: 'spatialOperator',
            collection: true,
            elementName: 'SpatialOperator',
            typeInfo: 'Filter_1_1_0.SpatialOperatorType'
          }]
      }, {
        type: 'classInfo',
        localName: 'GeometryOperandsType',
        propertyInfos: [{
            type: 'element',
            name: 'geometryOperand',
            collection: true,
            elementName: 'GeometryOperand',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'SortPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'propertyName',
            elementName: 'PropertyName',
            typeInfo: 'Filter_1_1_0.PropertyNameType'
          }, {
            type: 'element',
            name: 'sortOrder',
            elementName: 'SortOrder',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'SpatialOperatorType',
        propertyInfos: [{
            type: 'element',
            name: 'geometryOperands',
            elementName: 'GeometryOperands',
            typeInfo: 'Filter_1_1_0.GeometryOperandsType'
          }, {
            name: 'name',
            typeInfo: 'String',
            attributeName: 'name',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'FunctionNamesType',
        propertyInfos: [{
            type: 'element',
            name: 'functionName',
            collection: true,
            elementName: 'FunctionName',
            typeInfo: 'Filter_1_1_0.FunctionNameType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ArithmeticOperatorsType',
        propertyInfos: [{
            name: 'simpleArithmeticOrFunctions',
            collection: true,
            elementTypeInfos: [{
                elementName: 'SimpleArithmetic',
                typeInfo: 'Filter_1_1_0.SimpleArithmetic'
              }, {
                elementName: 'Functions',
                typeInfo: 'Filter_1_1_0.FunctionsType'
              }],
            type: 'elements'
          }]
      }, {
        type: 'classInfo',
        localName: 'UpperBoundaryType',
        propertyInfos: [{
            name: 'expression',
            elementName: 'expression',
            typeInfo: 'Filter_1_1_0.ExpressionType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'ComparisonOperatorsType',
        propertyInfos: [{
            type: 'element',
            name: 'comparisonOperator',
            collection: true,
            elementName: 'ComparisonOperator',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'LowerBoundaryType',
        propertyInfos: [{
            name: 'expression',
            elementName: 'expression',
            typeInfo: 'Filter_1_1_0.ExpressionType',
            type: 'elementRef'
          }]
      }, {
        type: 'enumInfo',
        localName: 'SpatialOperatorNameType',
        baseTypeInfo: 'String',
        values: ['BBOX', 'Equals', 'Disjoint', 'Intersects', 'Touches', 'Crosses', 'Within', 'Contains', 'Overlaps', 'Beyond', 'DWithin']
      }, {
        type: 'enumInfo',
        localName: 'ComparisonOperatorType',
        baseTypeInfo: 'String',
        values: ['LessThan', 'GreaterThan', 'LessThanEqualTo', 'GreaterThanEqualTo', 'EqualTo', 'NotEqualTo', 'Like', 'Between', 'NullCheck']
      }, {
        type: 'enumInfo',
        localName: 'SortOrderType',
        baseTypeInfo: 'String',
        values: ['DESC', 'ASC']
      }],
    elementInfos: [{
        elementName: 'Filter_Capabilities',
        typeInfo: 'Filter_1_1_0.FilterCapabilities'
      }, {
        elementName: 'FID',
        typeInfo: 'Filter_1_1_0.FID'
      }, {
        elementName: 'EID',
        typeInfo: 'Filter_1_1_0.EID'
      }, {
        elementName: 'LogicalOperators',
        typeInfo: 'Filter_1_1_0.LogicalOperators'
      }, {
        elementName: 'SimpleArithmetic',
        typeInfo: 'Filter_1_1_0.SimpleArithmetic'
      }, {
        elementName: 'Mul',
        typeInfo: 'Filter_1_1_0.BinaryOperatorType',
        substitutionHead: 'expression'
      }, {
        elementName: 'Sub',
        typeInfo: 'Filter_1_1_0.BinaryOperatorType',
        substitutionHead: 'expression'
      }, {
        elementName: 'PropertyName',
        typeInfo: 'Filter_1_1_0.PropertyNameType',
        substitutionHead: 'expression'
      }, {
        elementName: 'PropertyIsLike',
        typeInfo: 'Filter_1_1_0.PropertyIsLikeType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'expression',
        typeInfo: 'Filter_1_1_0.ExpressionType'
      }, {
        elementName: 'logicOps',
        typeInfo: 'Filter_1_1_0.LogicOpsType'
      }, {
        elementName: 'PropertyIsGreaterThan',
        typeInfo: 'Filter_1_1_0.BinaryComparisonOpType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'PropertyIsLessThan',
        typeInfo: 'Filter_1_1_0.BinaryComparisonOpType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'Within',
        typeInfo: 'Filter_1_1_0.BinarySpatialOpType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'Contains',
        typeInfo: 'Filter_1_1_0.BinarySpatialOpType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'Filter',
        typeInfo: 'Filter_1_1_0.FilterType'
      }, {
        elementName: 'PropertyIsNotEqualTo',
        typeInfo: 'Filter_1_1_0.BinaryComparisonOpType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'BBOX',
        typeInfo: 'Filter_1_1_0.BBOXType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'And',
        typeInfo: 'Filter_1_1_0.BinaryLogicOpType',
        substitutionHead: 'logicOps'
      }, {
        elementName: 'Div',
        typeInfo: 'Filter_1_1_0.BinaryOperatorType',
        substitutionHead: 'expression'
      }, {
        elementName: 'FeatureId',
        typeInfo: 'Filter_1_1_0.FeatureIdType',
        substitutionHead: '_Id'
      }, {
        elementName: 'Equals',
        typeInfo: 'Filter_1_1_0.BinarySpatialOpType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'Not',
        typeInfo: 'Filter_1_1_0.UnaryLogicOpType',
        substitutionHead: 'logicOps'
      }, {
        elementName: 'PropertyIsNull',
        typeInfo: 'Filter_1_1_0.PropertyIsNullType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'Beyond',
        typeInfo: 'Filter_1_1_0.DistanceBufferType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'comparisonOps',
        typeInfo: 'Filter_1_1_0.ComparisonOpsType'
      }, {
        elementName: 'PropertyIsLessThanOrEqualTo',
        typeInfo: 'Filter_1_1_0.BinaryComparisonOpType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'SortBy',
        typeInfo: 'Filter_1_1_0.SortByType'
      }, {
        elementName: 'spatialOps',
        typeInfo: 'Filter_1_1_0.SpatialOpsType'
      }, {
        elementName: 'Add',
        typeInfo: 'Filter_1_1_0.BinaryOperatorType',
        substitutionHead: 'expression'
      }, {
        elementName: 'Overlaps',
        typeInfo: 'Filter_1_1_0.BinarySpatialOpType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'Or',
        typeInfo: 'Filter_1_1_0.BinaryLogicOpType',
        substitutionHead: 'logicOps'
      }, {
        elementName: 'Disjoint',
        typeInfo: 'Filter_1_1_0.BinarySpatialOpType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'Touches',
        typeInfo: 'Filter_1_1_0.BinarySpatialOpType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'PropertyIsBetween',
        typeInfo: 'Filter_1_1_0.PropertyIsBetweenType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: '_Id',
        typeInfo: 'Filter_1_1_0.AbstractIdType'
      }, {
        elementName: 'PropertyIsEqualTo',
        typeInfo: 'Filter_1_1_0.BinaryComparisonOpType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'DWithin',
        typeInfo: 'Filter_1_1_0.DistanceBufferType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'Literal',
        typeInfo: 'Filter_1_1_0.LiteralType',
        substitutionHead: 'expression'
      }, {
        elementName: 'Intersects',
        typeInfo: 'Filter_1_1_0.BinarySpatialOpType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'GmlObjectId',
        typeInfo: 'Filter_1_1_0.GmlObjectIdType',
        substitutionHead: '_Id'
      }, {
        elementName: 'PropertyIsGreaterThanOrEqualTo',
        typeInfo: 'Filter_1_1_0.BinaryComparisonOpType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'Function',
        typeInfo: 'Filter_1_1_0.FunctionType',
        substitutionHead: 'expression'
      }, {
        elementName: 'Crosses',
        typeInfo: 'Filter_1_1_0.BinarySpatialOpType',
        substitutionHead: 'spatialOps'
      }]
  };
  return {
    Filter_1_1_0: Filter_1_1_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], Filter_1_1_0_Module_Factory);
}
else {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.Filter_1_1_0 = Filter_1_1_0_Module_Factory().Filter_1_1_0;
  }
  else {
    var Filter_1_1_0 = Filter_1_1_0_Module_Factory().Filter_1_1_0;
  }
}
var Filter_2_0_Module_Factory = function () {
  var Filter_2_0 = {
    name: 'Filter_2_0',
    defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/fes\/2.0',
    typeInfos: [{
        type: 'classInfo',
        localName: 'BinaryTemporalOpType',
        baseTypeInfo: 'Filter_2_0.TemporalOpsType',
        propertyInfos: [{
            type: 'element',
            name: 'valueReference',
            elementName: 'ValueReference',
            typeInfo: 'String'
          }, {
            name: 'expression',
            elementName: 'expression',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }, {
            name: 'any',
            allowTypedObject: true,
            type: 'anyElement'
          }]
      }, {
        type: 'classInfo',
        localName: 'TemporalOpsType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'BinaryLogicOpType',
        baseTypeInfo: 'Filter_2_0.LogicOpsType',
        propertyInfos: [{
            name: 'comparisonOpsOrSpatialOpsOrTemporalOps',
            collection: true,
            elementTypeInfos: [{
                elementName: 'extensionOps',
                typeInfo: 'Filter_2_0.ExtensionOpsType'
              }, {
                elementName: 'temporalOps',
                typeInfo: 'Filter_2_0.TemporalOpsType'
              }, {
                elementName: 'logicOps',
                typeInfo: 'Filter_2_0.LogicOpsType'
              }, {
                elementName: 'comparisonOps',
                typeInfo: 'Filter_2_0.ComparisonOpsType'
              }, {
                elementName: '_Id',
                typeInfo: 'Filter_2_0.AbstractIdType'
              }, {
                elementName: 'spatialOps',
                typeInfo: 'Filter_2_0.SpatialOpsType'
              }, {
                elementName: 'Function',
                typeInfo: 'Filter_2_0.FunctionType'
              }],
            type: 'elementRefs'
          }]
      }, {
        type: 'classInfo',
        localName: 'LogicOpsType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'ComparisonOpsType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'LiteralType',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowTypedObject: true,
            mixed: true,
            type: 'anyElement'
          }, {
            name: 'type',
            typeInfo: 'String',
            attributeName: 'type',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'BinarySpatialOpType',
        baseTypeInfo: 'Filter_2_0.SpatialOpsType',
        propertyInfos: [{
            type: 'element',
            name: 'valueReference',
            elementName: 'ValueReference',
            typeInfo: 'String'
          }, {
            name: 'expression',
            elementName: 'expression',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }, {
            name: 'any',
            allowTypedObject: true,
            type: 'anyElement'
          }]
      }, {
        type: 'classInfo',
        localName: 'SpatialOpsType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'AbstractQueryExpressionType',
        propertyInfos: [{
            name: 'handle',
            typeInfo: 'String',
            attributeName: 'handle',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'PropertyIsLikeType',
        baseTypeInfo: 'Filter_2_0.ComparisonOpsType',
        propertyInfos: [{
            name: 'expression',
            collection: true,
            elementName: 'expression',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }, {
            name: 'wildCard',
            typeInfo: 'String',
            attributeName: 'wildCard',
            type: 'attribute'
          }, {
            name: 'singleChar',
            typeInfo: 'String',
            attributeName: 'singleChar',
            type: 'attribute'
          }, {
            name: 'escapeChar',
            typeInfo: 'String',
            attributeName: 'escapeChar',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'LogicalOperators',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'UnaryLogicOpType',
        baseTypeInfo: 'Filter_2_0.LogicOpsType',
        propertyInfos: [{
            name: 'comparisonOps',
            elementName: 'comparisonOps',
            typeInfo: 'Filter_2_0.ComparisonOpsType',
            type: 'elementRef'
          }, {
            name: 'spatialOps',
            elementName: 'spatialOps',
            typeInfo: 'Filter_2_0.SpatialOpsType',
            type: 'elementRef'
          }, {
            name: 'temporalOps',
            elementName: 'temporalOps',
            typeInfo: 'Filter_2_0.TemporalOpsType',
            type: 'elementRef'
          }, {
            name: 'logicOps',
            elementName: 'logicOps',
            typeInfo: 'Filter_2_0.LogicOpsType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'extensionOps',
            elementName: 'extensionOps',
            typeInfo: 'Filter_2_0.ExtensionOpsType'
          }, {
            type: 'element',
            name: 'function',
            elementName: 'Function',
            typeInfo: 'Filter_2_0.FunctionType'
          }, {
            name: 'id',
            collection: true,
            elementName: '_Id',
            typeInfo: 'Filter_2_0.AbstractIdType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'PropertyIsNullType',
        baseTypeInfo: 'Filter_2_0.ComparisonOpsType',
        propertyInfos: [{
            name: 'expression',
            elementName: 'expression',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'BBOXType',
        baseTypeInfo: 'Filter_2_0.SpatialOpsType',
        propertyInfos: [{
            name: 'expression',
            elementName: 'expression',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }, {
            name: 'any',
            allowTypedObject: true,
            type: 'anyElement'
          }]
      }, {
        type: 'classInfo',
        localName: 'PropertyIsNilType',
        baseTypeInfo: 'Filter_2_0.ComparisonOpsType',
        propertyInfos: [{
            name: 'expression',
            elementName: 'expression',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: 'String',
            attributeName: 'nilReason',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'BinaryComparisonOpType',
        baseTypeInfo: 'Filter_2_0.ComparisonOpsType',
        propertyInfos: [{
            name: 'expression',
            collection: true,
            elementName: 'expression',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }, {
            name: 'matchCase',
            typeInfo: 'Boolean',
            attributeName: 'matchCase',
            type: 'attribute'
          }, {
            name: 'matchAction',
            typeInfo: 'String',
            attributeName: 'matchAction',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'SortByType',
        propertyInfos: [{
            type: 'element',
            name: 'sortProperty',
            collection: true,
            elementName: 'SortProperty',
            typeInfo: 'Filter_2_0.SortPropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'DistanceBufferType',
        baseTypeInfo: 'Filter_2_0.SpatialOpsType',
        propertyInfos: [{
            name: 'expression',
            elementName: 'expression',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }, {
            name: 'any',
            allowTypedObject: true,
            type: 'anyElement'
          }, {
            type: 'element',
            name: 'distance',
            elementName: 'Distance',
            typeInfo: 'Filter_2_0.MeasureType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ExtensionOpsType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'FunctionType',
        propertyInfos: [{
            name: 'expression',
            collection: true,
            elementName: 'expression',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }, {
            name: 'name',
            typeInfo: 'String',
            attributeName: 'name',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'PropertyIsBetweenType',
        baseTypeInfo: 'Filter_2_0.ComparisonOpsType',
        propertyInfos: [{
            name: 'expression',
            elementName: 'expression',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'lowerBoundary',
            elementName: 'LowerBoundary',
            typeInfo: 'Filter_2_0.LowerBoundaryType'
          }, {
            type: 'element',
            name: 'upperBoundary',
            elementName: 'UpperBoundary',
            typeInfo: 'Filter_2_0.UpperBoundaryType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractIdType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'FilterCapabilities',
        propertyInfos: [{
            type: 'element',
            name: 'conformance',
            elementName: 'Conformance',
            typeInfo: 'Filter_2_0.ConformanceType'
          }, {
            type: 'element',
            name: 'idCapabilities',
            elementName: 'Id_Capabilities',
            typeInfo: 'Filter_2_0.IdCapabilitiesType'
          }, {
            type: 'element',
            name: 'scalarCapabilities',
            elementName: 'Scalar_Capabilities',
            typeInfo: 'Filter_2_0.ScalarCapabilitiesType'
          }, {
            type: 'element',
            name: 'spatialCapabilities',
            elementName: 'Spatial_Capabilities',
            typeInfo: 'Filter_2_0.SpatialCapabilitiesType'
          }, {
            type: 'element',
            name: 'temporalCapabilities',
            elementName: 'Temporal_Capabilities',
            typeInfo: 'Filter_2_0.TemporalCapabilitiesType'
          }, {
            type: 'element',
            name: 'functions',
            elementName: 'Functions',
            typeInfo: 'Filter_2_0.AvailableFunctionsType'
          }, {
            type: 'element',
            name: 'extendedCapabilities',
            elementName: 'Extended_Capabilities',
            typeInfo: 'Filter_2_0.ExtendedCapabilitiesType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ConformanceType',
        propertyInfos: [{
            type: 'element',
            name: 'constraint',
            collection: true,
            elementName: 'Constraint',
            typeInfo: 'OWS_1_1_0.DomainType'
          }]
      }, {
        type: 'classInfo',
        localName: 'IdCapabilitiesType',
        propertyInfos: [{
            type: 'element',
            name: 'resourceIdentifier',
            collection: true,
            elementName: 'ResourceIdentifier',
            typeInfo: 'Filter_2_0.ResourceIdentifierType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ScalarCapabilitiesType',
        propertyInfos: [{
            type: 'element',
            name: 'logicalOperators',
            elementName: 'LogicalOperators',
            typeInfo: 'Filter_2_0.LogicalOperators'
          }, {
            type: 'element',
            name: 'comparisonOperators',
            elementName: 'ComparisonOperators',
            typeInfo: 'Filter_2_0.ComparisonOperatorsType'
          }]
      }, {
        type: 'classInfo',
        localName: 'SpatialCapabilitiesType',
        propertyInfos: [{
            type: 'element',
            name: 'geometryOperands',
            elementName: 'GeometryOperands',
            typeInfo: 'Filter_2_0.GeometryOperandsType'
          }, {
            type: 'element',
            name: 'spatialOperators',
            elementName: 'SpatialOperators',
            typeInfo: 'Filter_2_0.SpatialOperatorsType'
          }]
      }, {
        type: 'classInfo',
        localName: 'TemporalCapabilitiesType',
        propertyInfos: [{
            type: 'element',
            name: 'temporalOperands',
            elementName: 'TemporalOperands',
            typeInfo: 'Filter_2_0.TemporalOperandsType'
          }, {
            type: 'element',
            name: 'temporalOperators',
            elementName: 'TemporalOperators',
            typeInfo: 'Filter_2_0.TemporalOperatorsType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AvailableFunctionsType',
        propertyInfos: [{
            type: 'element',
            name: 'function',
            collection: true,
            elementName: 'Function',
            typeInfo: 'Filter_2_0.AvailableFunctionType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ExtendedCapabilitiesType',
        propertyInfos: [{
            type: 'element',
            name: 'additionalOperators',
            elementName: 'AdditionalOperators',
            typeInfo: 'Filter_2_0.AdditionalOperatorsType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractAdhocQueryExpressionType',
        baseTypeInfo: 'Filter_2_0.AbstractQueryExpressionType',
        propertyInfos: [{
            type: 'element',
            name: 'abstractProjectionClause',
            collection: true,
            elementName: 'AbstractProjectionClause',
            typeInfo: 'AnyType'
          }, {
            name: 'abstractSelectionClause',
            elementName: 'AbstractSelectionClause',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }, {
            name: 'abstractSortingClause',
            elementName: 'AbstractSortingClause',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }, {
            name: 'typeNames',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            },
            attributeName: 'typeNames',
            type: 'attribute'
          }, {
            name: 'aliases',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            },
            attributeName: 'aliases',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'FilterType',
        baseTypeInfo: 'Filter_2_0.AbstractSelectionClauseType',
        propertyInfos: [{
            name: 'comparisonOps',
            elementName: 'comparisonOps',
            typeInfo: 'Filter_2_0.ComparisonOpsType',
            type: 'elementRef'
          }, {
            name: 'spatialOps',
            elementName: 'spatialOps',
            typeInfo: 'Filter_2_0.SpatialOpsType',
            type: 'elementRef'
          }, {
            name: 'temporalOps',
            elementName: 'temporalOps',
            typeInfo: 'Filter_2_0.TemporalOpsType',
            type: 'elementRef'
          }, {
            name: 'logicOps',
            elementName: 'logicOps',
            typeInfo: 'Filter_2_0.LogicOpsType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'extensionOps',
            elementName: 'extensionOps',
            typeInfo: 'Filter_2_0.ExtensionOpsType'
          }, {
            type: 'element',
            name: 'function',
            elementName: 'Function',
            typeInfo: 'Filter_2_0.FunctionType'
          }, {
            name: 'id',
            collection: true,
            elementName: '_Id',
            typeInfo: 'Filter_2_0.AbstractIdType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'ResourceIdType',
        baseTypeInfo: 'Filter_2_0.AbstractIdType',
        propertyInfos: [{
            name: 'rid',
            typeInfo: 'String',
            attributeName: 'rid',
            type: 'attribute'
          }, {
            name: 'previousRid',
            typeInfo: 'String',
            attributeName: 'previousRid',
            type: 'attribute'
          }, {
            name: 'version',
            typeInfo: 'String',
            attributeName: 'version',
            type: 'attribute'
          }, {
            name: 'startDate',
            typeInfo: 'Calendar',
            attributeName: 'startDate',
            type: 'attribute'
          }, {
            name: 'endDate',
            typeInfo: 'Calendar',
            attributeName: 'endDate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ArgumentType',
        propertyInfos: [{
            type: 'element',
            name: 'metadata',
            elementName: {
              localPart: 'Metadata',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.MetadataType'
          }, {
            type: 'element',
            name: 'type',
            elementName: 'Type',
            typeInfo: 'String'
          }, {
            name: 'name',
            typeInfo: 'String',
            attributeName: 'name',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractSortingClauseType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'SpatialOperatorsType',
        propertyInfos: [{
            type: 'element',
            name: 'spatialOperator',
            collection: true,
            elementName: 'SpatialOperator',
            typeInfo: 'Filter_2_0.SpatialOperatorType'
          }]
      }, {
        type: 'classInfo',
        localName: 'TemporalOperatorsType',
        propertyInfos: [{
            type: 'element',
            name: 'temporalOperator',
            collection: true,
            elementName: 'TemporalOperator',
            typeInfo: 'Filter_2_0.TemporalOperatorType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ComparisonOperatorType',
        propertyInfos: [{
            name: 'name',
            typeInfo: 'String',
            attributeName: 'name',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ExtensionOperatorType',
        propertyInfos: [{
            name: 'name',
            typeInfo: 'String',
            attributeName: 'name',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'SpatialOperatorType',
        propertyInfos: [{
            type: 'element',
            name: 'geometryOperands',
            elementName: 'GeometryOperands',
            typeInfo: 'Filter_2_0.GeometryOperandsType'
          }, {
            name: 'name',
            typeInfo: 'String',
            attributeName: 'name',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'UpperBoundaryType',
        propertyInfos: [{
            name: 'expression',
            elementName: 'expression',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'TemporalOperatorType',
        propertyInfos: [{
            type: 'element',
            name: 'temporalOperands',
            elementName: 'TemporalOperands',
            typeInfo: 'Filter_2_0.TemporalOperandsType'
          }, {
            name: 'name',
            typeInfo: 'String',
            attributeName: 'name',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractSelectionClauseType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'TemporalOperandsType',
        propertyInfos: [{
            type: 'element',
            name: 'temporalOperand',
            collection: true,
            elementName: 'TemporalOperand',
            typeInfo: 'Filter_2_0.TemporalOperandsType.TemporalOperand'
          }]
      }, {
        type: 'classInfo',
        localName: 'AvailableFunctionType',
        propertyInfos: [{
            type: 'element',
            name: 'metadata',
            elementName: {
              localPart: 'Metadata',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.MetadataType'
          }, {
            type: 'element',
            name: 'returns',
            elementName: 'Returns',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'arguments',
            elementName: 'Arguments',
            typeInfo: 'Filter_2_0.ArgumentsType'
          }, {
            name: 'name',
            typeInfo: 'String',
            attributeName: 'name',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'MeasureType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Double',
            type: 'value'
          }, {
            name: 'uom',
            typeInfo: 'String',
            attributeName: 'uom',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ResourceIdentifierType',
        propertyInfos: [{
            type: 'element',
            name: 'metadata',
            elementName: {
              localPart: 'Metadata',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.MetadataType'
          }, {
            name: 'name',
            typeInfo: 'String',
            attributeName: 'name',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AdditionalOperatorsType',
        propertyInfos: [{
            type: 'element',
            name: 'operator',
            collection: true,
            elementName: 'Operator',
            typeInfo: 'Filter_2_0.ExtensionOperatorType'
          }]
      }, {
        type: 'classInfo',
        localName: 'GeometryOperandsType',
        propertyInfos: [{
            type: 'element',
            name: 'geometryOperand',
            collection: true,
            elementName: 'GeometryOperand',
            typeInfo: 'Filter_2_0.GeometryOperandsType.GeometryOperand'
          }]
      }, {
        type: 'classInfo',
        localName: 'SortPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'valueReference',
            elementName: 'ValueReference',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'sortOrder',
            elementName: 'SortOrder',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'ArgumentsType',
        propertyInfos: [{
            type: 'element',
            name: 'argument',
            collection: true,
            elementName: 'Argument',
            typeInfo: 'Filter_2_0.ArgumentType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractProjectionClauseType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'ComparisonOperatorsType',
        propertyInfos: [{
            type: 'element',
            name: 'comparisonOperator',
            collection: true,
            elementName: 'ComparisonOperator',
            typeInfo: 'Filter_2_0.ComparisonOperatorType'
          }]
      }, {
        type: 'classInfo',
        localName: 'LowerBoundaryType',
        propertyInfos: [{
            name: 'expression',
            elementName: 'expression',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'GeometryOperandsType.GeometryOperand',
        propertyInfos: [{
            name: 'name',
            typeInfo: 'String',
            attributeName: 'name',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TemporalOperandsType.TemporalOperand',
        propertyInfos: [{
            name: 'name',
            typeInfo: 'String',
            attributeName: 'name',
            type: 'attribute'
          }]
      }, {
        type: 'enumInfo',
        localName: 'MatchActionType',
        baseTypeInfo: 'String',
        values: ['All', 'Any', 'One']
      }, {
        type: 'enumInfo',
        localName: 'SortOrderType',
        baseTypeInfo: 'String',
        values: ['DESC', 'ASC']
      }, {
        type: 'enumInfo',
        localName: 'VersionActionTokens',
        baseTypeInfo: 'String',
        values: ['FIRST', 'LAST', 'PREVIOUS', 'NEXT', 'ALL']
      }],
    elementInfos: [{
        elementName: 'LogicalOperators',
        typeInfo: 'Filter_2_0.LogicalOperators'
      }, {
        elementName: 'Filter_Capabilities',
        typeInfo: 'Filter_2_0.FilterCapabilities'
      }, {
        elementName: 'AbstractProjectionClause',
        typeInfo: 'AnyType'
      }, {
        elementName: 'expression',
        typeInfo: 'AnyType'
      }, {
        elementName: 'TOverlaps',
        typeInfo: 'Filter_2_0.BinaryTemporalOpType',
        substitutionHead: 'temporalOps'
      }, {
        elementName: 'EndedBy',
        typeInfo: 'Filter_2_0.BinaryTemporalOpType',
        substitutionHead: 'temporalOps'
      }, {
        elementName: 'AbstractSelectionClause',
        typeInfo: 'AnyType'
      }, {
        elementName: 'AnyInteracts',
        typeInfo: 'Filter_2_0.BinaryTemporalOpType',
        substitutionHead: 'temporalOps'
      }, {
        elementName: 'TContains',
        typeInfo: 'Filter_2_0.BinaryTemporalOpType',
        substitutionHead: 'temporalOps'
      }, {
        elementName: 'AbstractAdhocQueryExpression',
        typeInfo: 'Filter_2_0.AbstractAdhocQueryExpressionType',
        substitutionHead: 'AbstractQueryExpression'
      }, {
        elementName: 'Equals',
        typeInfo: 'Filter_2_0.BinarySpatialOpType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'Filter',
        typeInfo: 'Filter_2_0.FilterType',
        substitutionHead: 'AbstractSelectionClause'
      }, {
        elementName: 'ResourceId',
        typeInfo: 'Filter_2_0.ResourceIdType',
        substitutionHead: '_Id'
      }, {
        elementName: 'PropertyIsNotEqualTo',
        typeInfo: 'Filter_2_0.BinaryComparisonOpType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'PropertyIsLessThan',
        typeInfo: 'Filter_2_0.BinaryComparisonOpType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'Within',
        typeInfo: 'Filter_2_0.BinarySpatialOpType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'After',
        typeInfo: 'Filter_2_0.BinaryTemporalOpType',
        substitutionHead: 'temporalOps'
      }, {
        elementName: 'logicOps',
        typeInfo: 'Filter_2_0.LogicOpsType'
      }, {
        elementName: 'Before',
        typeInfo: 'Filter_2_0.BinaryTemporalOpType',
        substitutionHead: 'temporalOps'
      }, {
        elementName: 'Overlaps',
        typeInfo: 'Filter_2_0.BinarySpatialOpType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'PropertyIsLessThanOrEqualTo',
        typeInfo: 'Filter_2_0.BinaryComparisonOpType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'spatialOps',
        typeInfo: 'Filter_2_0.SpatialOpsType'
      }, {
        elementName: 'SortBy',
        typeInfo: 'Filter_2_0.SortByType',
        substitutionHead: 'AbstractSortingClause'
      }, {
        elementName: 'Beyond',
        typeInfo: 'Filter_2_0.DistanceBufferType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'extensionOps',
        typeInfo: 'Filter_2_0.ExtensionOpsType'
      }, {
        elementName: 'AbstractSortingClause',
        typeInfo: 'AnyType'
      }, {
        elementName: 'During',
        typeInfo: 'Filter_2_0.BinaryTemporalOpType',
        substitutionHead: 'temporalOps'
      }, {
        elementName: 'Function',
        typeInfo: 'Filter_2_0.FunctionType',
        substitutionHead: 'expression'
      }, {
        elementName: 'PropertyIsGreaterThanOrEqualTo',
        typeInfo: 'Filter_2_0.BinaryComparisonOpType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'Crosses',
        typeInfo: 'Filter_2_0.BinarySpatialOpType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'Begins',
        typeInfo: 'Filter_2_0.BinaryTemporalOpType',
        substitutionHead: 'temporalOps'
      }, {
        elementName: 'PropertyIsEqualTo',
        typeInfo: 'Filter_2_0.BinaryComparisonOpType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'DWithin',
        typeInfo: 'Filter_2_0.DistanceBufferType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'Disjoint',
        typeInfo: 'Filter_2_0.BinarySpatialOpType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: '_Id',
        typeInfo: 'Filter_2_0.AbstractIdType'
      }, {
        elementName: 'PropertyIsBetween',
        typeInfo: 'Filter_2_0.PropertyIsBetweenType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'MetBy',
        typeInfo: 'Filter_2_0.BinaryTemporalOpType',
        substitutionHead: 'temporalOps'
      }, {
        elementName: 'BegunBy',
        typeInfo: 'Filter_2_0.BinaryTemporalOpType',
        substitutionHead: 'temporalOps'
      }, {
        elementName: 'PropertyIsLike',
        typeInfo: 'Filter_2_0.PropertyIsLikeType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'PropertyIsNull',
        typeInfo: 'Filter_2_0.PropertyIsNullType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'Not',
        typeInfo: 'Filter_2_0.UnaryLogicOpType',
        substitutionHead: 'logicOps'
      }, {
        elementName: 'PropertyIsNil',
        typeInfo: 'Filter_2_0.PropertyIsNilType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'BBOX',
        typeInfo: 'Filter_2_0.BBOXType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'And',
        typeInfo: 'Filter_2_0.BinaryLogicOpType',
        substitutionHead: 'logicOps'
      }, {
        elementName: 'Ends',
        typeInfo: 'Filter_2_0.BinaryTemporalOpType',
        substitutionHead: 'temporalOps'
      }, {
        elementName: 'Contains',
        typeInfo: 'Filter_2_0.BinarySpatialOpType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'PropertyIsGreaterThan',
        typeInfo: 'Filter_2_0.BinaryComparisonOpType',
        substitutionHead: 'comparisonOps'
      }, {
        elementName: 'Meets',
        typeInfo: 'Filter_2_0.BinaryTemporalOpType',
        substitutionHead: 'temporalOps'
      }, {
        elementName: 'Or',
        typeInfo: 'Filter_2_0.BinaryLogicOpType',
        substitutionHead: 'logicOps'
      }, {
        elementName: 'comparisonOps',
        typeInfo: 'Filter_2_0.ComparisonOpsType'
      }, {
        elementName: 'TEquals',
        typeInfo: 'Filter_2_0.BinaryTemporalOpType',
        substitutionHead: 'temporalOps'
      }, {
        elementName: 'Literal',
        typeInfo: 'Filter_2_0.LiteralType',
        substitutionHead: 'expression'
      }, {
        elementName: 'Intersects',
        typeInfo: 'Filter_2_0.BinarySpatialOpType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'temporalOps',
        typeInfo: 'Filter_2_0.TemporalOpsType'
      }, {
        elementName: 'Touches',
        typeInfo: 'Filter_2_0.BinarySpatialOpType',
        substitutionHead: 'spatialOps'
      }, {
        elementName: 'OverlappedBy',
        typeInfo: 'Filter_2_0.BinaryTemporalOpType',
        substitutionHead: 'temporalOps'
      }, {
        elementName: 'AbstractQueryExpression',
        typeInfo: 'Filter_2_0.AbstractQueryExpressionType'
      }, {
        elementName: 'ValueReference',
        typeInfo: 'String',
        substitutionHead: 'expression'
      }]
  };
  return {
    Filter_2_0: Filter_2_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], Filter_2_0_Module_Factory);
}
else {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.Filter_2_0 = Filter_2_0_Module_Factory().Filter_2_0;
  }
  else {
    var Filter_2_0 = Filter_2_0_Module_Factory().Filter_2_0;
  }
}
var GML_2_1_2_Module_Factory = function () {
  var GML_2_1_2 = {
    name: 'GML_2_1_2',
    defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/gml',
    defaultAttributeNamespaceURI: 'http:\/\/www.w3.org\/1999\/xlink',
    typeInfos: [{
        type: 'classInfo',
        localName: 'MultiPointType',
        baseTypeInfo: 'GML_2_1_2.GeometryCollectionType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'AbstractGeometryType',
        propertyInfos: [{
            name: 'gid',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'gid'
            },
            type: 'attribute'
          }, {
            name: 'srsName',
            typeInfo: 'String',
            attributeName: {
              localPart: 'srsName'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'MultiLineStringType',
        baseTypeInfo: 'GML_2_1_2.GeometryCollectionType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'LinearRingMemberType',
        baseTypeInfo: 'GML_2_1_2.GeometryAssociationType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'GeometryAssociationType',
        propertyInfos: [{
            name: 'geometry',
            elementName: '_Geometry',
            typeInfo: 'GML_2_1_2.AbstractGeometryType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'LineStringMemberType',
        baseTypeInfo: 'GML_2_1_2.GeometryAssociationType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'AbstractFeatureCollectionType',
        baseTypeInfo: 'GML_2_1_2.AbstractFeatureCollectionBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'featureMember',
            collection: true,
            elementName: 'featureMember',
            typeInfo: 'GML_2_1_2.FeatureAssociationType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractFeatureType',
        propertyInfos: [{
            type: 'element',
            name: 'description',
            elementName: 'description',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'name',
            elementName: 'name',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'boundedBy',
            elementName: 'boundedBy',
            typeInfo: 'GML_2_1_2.BoundingShapeType'
          }, {
            name: 'fid',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'fid'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'CoordType',
        propertyInfos: [{
            type: 'element',
            name: 'x',
            elementName: 'X',
            typeInfo: 'Decimal'
          }, {
            type: 'element',
            name: 'y',
            elementName: 'Y',
            typeInfo: 'Decimal'
          }, {
            type: 'element',
            name: 'z',
            elementName: 'Z',
            typeInfo: 'Decimal'
          }]
      }, {
        type: 'classInfo',
        localName: 'GeometryCollectionType',
        baseTypeInfo: 'GML_2_1_2.AbstractGeometryCollectionBaseType',
        propertyInfos: [{
            name: 'geometryMember',
            collection: true,
            elementName: 'geometryMember',
            typeInfo: 'GML_2_1_2.GeometryAssociationType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'PolygonPropertyType',
        baseTypeInfo: 'GML_2_1_2.GeometryAssociationType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'MultiLineStringPropertyType',
        baseTypeInfo: 'GML_2_1_2.GeometryAssociationType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'MultiPolygonPropertyType',
        baseTypeInfo: 'GML_2_1_2.GeometryAssociationType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'PolygonType',
        baseTypeInfo: 'GML_2_1_2.AbstractGeometryType',
        propertyInfos: [{
            type: 'element',
            name: 'outerBoundaryIs',
            elementName: 'outerBoundaryIs',
            typeInfo: 'GML_2_1_2.LinearRingMemberType'
          }, {
            type: 'element',
            name: 'innerBoundaryIs',
            collection: true,
            elementName: 'innerBoundaryIs',
            typeInfo: 'GML_2_1_2.LinearRingMemberType'
          }]
      }, {
        type: 'classInfo',
        localName: 'MultiPointPropertyType',
        baseTypeInfo: 'GML_2_1_2.GeometryAssociationType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'PointPropertyType',
        baseTypeInfo: 'GML_2_1_2.GeometryAssociationType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'MultiGeometryPropertyType',
        baseTypeInfo: 'GML_2_1_2.GeometryAssociationType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'LineStringPropertyType',
        baseTypeInfo: 'GML_2_1_2.GeometryAssociationType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'BoundingShapeType',
        propertyInfos: [{
            type: 'element',
            name: 'box',
            elementName: 'Box',
            typeInfo: 'GML_2_1_2.BoxType'
          }, {
            type: 'element',
            name: '_null',
            elementName: 'null',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'CoordinatesType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'String',
            type: 'value'
          }, {
            name: 'decimal',
            typeInfo: 'String',
            attributeName: {
              localPart: 'decimal'
            },
            type: 'attribute'
          }, {
            name: 'cs',
            typeInfo: 'String',
            attributeName: {
              localPart: 'cs'
            },
            type: 'attribute'
          }, {
            name: 'ts',
            typeInfo: 'String',
            attributeName: {
              localPart: 'ts'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'BoxType',
        baseTypeInfo: 'GML_2_1_2.AbstractGeometryType',
        propertyInfos: [{
            type: 'element',
            name: 'coord',
            collection: true,
            elementName: 'coord',
            typeInfo: 'GML_2_1_2.CoordType'
          }, {
            type: 'element',
            name: 'coordinates',
            elementName: 'coordinates',
            typeInfo: 'GML_2_1_2.CoordinatesType'
          }]
      }, {
        type: 'classInfo',
        localName: 'PointType',
        baseTypeInfo: 'GML_2_1_2.AbstractGeometryType',
        propertyInfos: [{
            type: 'element',
            name: 'coord',
            elementName: 'coord',
            typeInfo: 'GML_2_1_2.CoordType'
          }, {
            type: 'element',
            name: 'coordinates',
            elementName: 'coordinates',
            typeInfo: 'GML_2_1_2.CoordinatesType'
          }]
      }, {
        type: 'classInfo',
        localName: 'FeatureAssociationType',
        propertyInfos: [{
            name: 'feature',
            elementName: '_Feature',
            typeInfo: 'GML_2_1_2.AbstractFeatureType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'LineStringType',
        baseTypeInfo: 'GML_2_1_2.AbstractGeometryType',
        propertyInfos: [{
            type: 'element',
            name: 'coord',
            collection: true,
            elementName: 'coord',
            typeInfo: 'GML_2_1_2.CoordType'
          }, {
            type: 'element',
            name: 'coordinates',
            elementName: 'coordinates',
            typeInfo: 'GML_2_1_2.CoordinatesType'
          }]
      }, {
        type: 'classInfo',
        localName: 'MultiPolygonType',
        baseTypeInfo: 'GML_2_1_2.GeometryCollectionType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'PointMemberType',
        baseTypeInfo: 'GML_2_1_2.GeometryAssociationType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'LinearRingType',
        baseTypeInfo: 'GML_2_1_2.AbstractGeometryType',
        propertyInfos: [{
            type: 'element',
            name: 'coord',
            collection: true,
            elementName: 'coord',
            typeInfo: 'GML_2_1_2.CoordType'
          }, {
            type: 'element',
            name: 'coordinates',
            elementName: 'coordinates',
            typeInfo: 'GML_2_1_2.CoordinatesType'
          }]
      }, {
        type: 'classInfo',
        localName: 'PolygonMemberType',
        baseTypeInfo: 'GML_2_1_2.GeometryAssociationType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'AbstractFeatureCollectionBaseType',
        baseTypeInfo: 'GML_2_1_2.AbstractFeatureType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'AbstractGeometryCollectionBaseType',
        baseTypeInfo: 'GML_2_1_2.AbstractGeometryType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'GeometryPropertyType',
        propertyInfos: [{
            name: 'geometry',
            elementName: '_Geometry',
            typeInfo: 'GML_2_1_2.AbstractGeometryType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'enumInfo',
        localName: 'NullType',
        baseTypeInfo: 'String',
        values: ['inapplicable', 'unknown', 'unavailable', 'missing']
      }],
    elementInfos: [{
        elementName: 'multiPointProperty',
        typeInfo: 'GML_2_1_2.MultiPointPropertyType',
        substitutionHead: '_geometryProperty'
      }, {
        elementName: 'coverage',
        typeInfo: 'GML_2_1_2.PolygonPropertyType',
        substitutionHead: 'polygonProperty'
      }, {
        elementName: 'geometryMember',
        typeInfo: 'GML_2_1_2.GeometryAssociationType'
      }, {
        elementName: 'pointProperty',
        typeInfo: 'GML_2_1_2.PointPropertyType',
        substitutionHead: '_geometryProperty'
      }, {
        elementName: 'multiGeometryProperty',
        typeInfo: 'GML_2_1_2.MultiGeometryPropertyType',
        substitutionHead: '_geometryProperty'
      }, {
        elementName: 'boundedBy',
        typeInfo: 'GML_2_1_2.BoundingShapeType'
      }, {
        elementName: 'multiCenterLineOf',
        typeInfo: 'GML_2_1_2.MultiLineStringPropertyType',
        substitutionHead: 'multiLineStringProperty'
      }, {
        elementName: 'centerLineOf',
        typeInfo: 'GML_2_1_2.LineStringPropertyType',
        substitutionHead: 'lineStringProperty'
      }, {
        elementName: 'coordinates',
        typeInfo: 'GML_2_1_2.CoordinatesType'
      }, {
        elementName: 'Point',
        typeInfo: 'GML_2_1_2.PointType',
        substitutionHead: '_Geometry'
      }, {
        elementName: 'Box',
        typeInfo: 'GML_2_1_2.BoxType'
      }, {
        elementName: '_geometryProperty',
        typeInfo: 'GML_2_1_2.GeometryAssociationType'
      }, {
        elementName: 'multiCoverage',
        typeInfo: 'GML_2_1_2.MultiPolygonPropertyType',
        substitutionHead: 'multiPolygonProperty'
      }, {
        elementName: 'featureMember',
        typeInfo: 'GML_2_1_2.FeatureAssociationType'
      }, {
        elementName: 'multiPolygonProperty',
        typeInfo: 'GML_2_1_2.MultiPolygonPropertyType',
        substitutionHead: '_geometryProperty'
      }, {
        elementName: 'LineString',
        typeInfo: 'GML_2_1_2.LineStringType',
        substitutionHead: '_Geometry'
      }, {
        elementName: 'MultiPolygon',
        typeInfo: 'GML_2_1_2.MultiPolygonType',
        substitutionHead: '_Geometry'
      }, {
        elementName: '_Geometry',
        typeInfo: 'GML_2_1_2.AbstractGeometryType'
      }, {
        elementName: 'multiLocation',
        typeInfo: 'GML_2_1_2.MultiPointPropertyType',
        substitutionHead: 'multiPointProperty'
      }, {
        elementName: 'pointMember',
        typeInfo: 'GML_2_1_2.PointMemberType',
        substitutionHead: 'geometryMember'
      }, {
        elementName: 'multiPosition',
        typeInfo: 'GML_2_1_2.MultiPointPropertyType',
        substitutionHead: 'multiPointProperty'
      }, {
        elementName: 'name',
        typeInfo: 'String'
      }, {
        elementName: 'MultiGeometry',
        typeInfo: 'GML_2_1_2.GeometryCollectionType',
        substitutionHead: '_Geometry'
      }, {
        elementName: 'position',
        typeInfo: 'GML_2_1_2.PointPropertyType',
        substitutionHead: 'pointProperty'
      }, {
        elementName: 'multiEdgeOf',
        typeInfo: 'GML_2_1_2.MultiLineStringPropertyType',
        substitutionHead: 'multiLineStringProperty'
      }, {
        elementName: 'location',
        typeInfo: 'GML_2_1_2.PointPropertyType',
        substitutionHead: 'pointProperty'
      }, {
        elementName: '_Feature',
        typeInfo: 'GML_2_1_2.AbstractFeatureType'
      }, {
        elementName: 'polygonProperty',
        typeInfo: 'GML_2_1_2.PolygonPropertyType',
        substitutionHead: '_geometryProperty'
      }, {
        elementName: 'centerOf',
        typeInfo: 'GML_2_1_2.PointPropertyType',
        substitutionHead: 'pointProperty'
      }, {
        elementName: 'LinearRing',
        typeInfo: 'GML_2_1_2.LinearRingType',
        substitutionHead: '_Geometry'
      }, {
        elementName: 'lineStringProperty',
        typeInfo: 'GML_2_1_2.LineStringPropertyType',
        substitutionHead: '_geometryProperty'
      }, {
        elementName: 'polygonMember',
        typeInfo: 'GML_2_1_2.PolygonMemberType',
        substitutionHead: 'geometryMember'
      }, {
        elementName: 'outerBoundaryIs',
        typeInfo: 'GML_2_1_2.LinearRingMemberType'
      }, {
        elementName: 'multiCenterOf',
        typeInfo: 'GML_2_1_2.MultiPointPropertyType',
        substitutionHead: 'multiPointProperty'
      }, {
        elementName: 'edgeOf',
        typeInfo: 'GML_2_1_2.LineStringPropertyType',
        substitutionHead: 'lineStringProperty'
      }, {
        elementName: 'MultiLineString',
        typeInfo: 'GML_2_1_2.MultiLineStringType',
        substitutionHead: '_Geometry'
      }, {
        elementName: 'MultiPoint',
        typeInfo: 'GML_2_1_2.MultiPointType',
        substitutionHead: '_Geometry'
      }, {
        elementName: 'innerBoundaryIs',
        typeInfo: 'GML_2_1_2.LinearRingMemberType'
      }, {
        elementName: 'geometryProperty',
        typeInfo: 'GML_2_1_2.GeometryAssociationType'
      }, {
        elementName: 'description',
        typeInfo: 'String'
      }, {
        elementName: 'lineStringMember',
        typeInfo: 'GML_2_1_2.LineStringMemberType',
        substitutionHead: 'geometryMember'
      }, {
        elementName: '_FeatureCollection',
        typeInfo: 'GML_2_1_2.AbstractFeatureCollectionType',
        substitutionHead: '_Feature'
      }, {
        elementName: 'coord',
        typeInfo: 'GML_2_1_2.CoordType'
      }, {
        elementName: '_GeometryCollection',
        typeInfo: 'GML_2_1_2.GeometryCollectionType',
        substitutionHead: '_Geometry'
      }, {
        elementName: 'multiLineStringProperty',
        typeInfo: 'GML_2_1_2.MultiLineStringPropertyType',
        substitutionHead: '_geometryProperty'
      }, {
        elementName: 'extentOf',
        typeInfo: 'GML_2_1_2.PolygonPropertyType',
        substitutionHead: 'polygonProperty'
      }, {
        elementName: 'multiExtentOf',
        typeInfo: 'GML_2_1_2.MultiPolygonPropertyType',
        substitutionHead: 'multiPolygonProperty'
      }, {
        elementName: 'Polygon',
        typeInfo: 'GML_2_1_2.PolygonType',
        substitutionHead: '_Geometry'
      }]
  };
  return {
    GML_2_1_2: GML_2_1_2
  };
};
if (typeof define === 'function' && define.amd) {
  define([], GML_2_1_2_Module_Factory);
}
else {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.GML_2_1_2 = GML_2_1_2_Module_Factory().GML_2_1_2;
  }
  else {
    var GML_2_1_2 = GML_2_1_2_Module_Factory().GML_2_1_2;
  }
}
var GML_3_1_1_Module_Factory = function () {
  var GML_3_1_1 = {
    name: 'GML_3_1_1',
    defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/gml',
    defaultAttributeNamespaceURI: 'http:\/\/www.w3.org\/1999\/xlink',
    typeInfos: [{
        type: 'classInfo',
        localName: 'CodeType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'String',
            type: 'value'
          }, {
            name: 'codeSpace',
            typeInfo: 'String',
            attributeName: {
              localPart: 'codeSpace'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TopoPointType',
        baseTypeInfo: 'GML_3_1_1.AbstractTopologyType',
        propertyInfos: [{
            type: 'element',
            name: 'directedNode',
            elementName: 'directedNode',
            typeInfo: 'GML_3_1_1.DirectedNodePropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'DerivedCRSRefType',
        propertyInfos: [{
            type: 'element',
            name: 'derivedCRS',
            elementName: 'DerivedCRS',
            typeInfo: 'GML_3_1_1.DerivedCRSType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'GridDomainType',
        baseTypeInfo: 'GML_3_1_1.DomainSetType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'DomainSetType',
        propertyInfos: [{
            name: 'geometry',
            elementName: '_Geometry',
            typeInfo: 'GML_3_1_1.AbstractGeometryType',
            type: 'elementRef'
          }, {
            name: 'timeObject',
            elementName: '_TimeObject',
            typeInfo: 'GML_3_1_1.AbstractTimeObjectType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractCoordinateOperationType',
        baseTypeInfo: 'GML_3_1_1.AbstractCoordinateOperationBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'coordinateOperationID',
            collection: true,
            elementName: 'coordinateOperationID',
            typeInfo: 'GML_3_1_1.IdentifierType'
          }, {
            type: 'element',
            name: 'remarks',
            elementName: 'remarks',
            typeInfo: 'GML_3_1_1.StringOrRefType'
          }, {
            type: 'element',
            name: 'operationVersion',
            elementName: 'operationVersion',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'validArea',
            elementName: 'validArea',
            typeInfo: 'GML_3_1_1.ExtentType'
          }, {
            type: 'element',
            name: 'scope',
            elementName: 'scope',
            typeInfo: 'String'
          }, {
            name: 'positionalAccuracy',
            collection: true,
            elementName: '_positionalAccuracy',
            typeInfo: 'GML_3_1_1.AbstractPositionalAccuracyType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'sourceCRS',
            elementName: 'sourceCRS',
            typeInfo: 'GML_3_1_1.CRSRefType'
          }, {
            type: 'element',
            name: 'targetCRS',
            elementName: 'targetCRS',
            typeInfo: 'GML_3_1_1.CRSRefType'
          }]
      }, {
        type: 'classInfo',
        localName: 'DefinitionType',
        baseTypeInfo: 'GML_3_1_1.AbstractGMLType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'AbstractGMLType',
        propertyInfos: [{
            type: 'element',
            name: 'metaDataProperty',
            collection: true,
            elementName: 'metaDataProperty',
            typeInfo: 'GML_3_1_1.MetaDataPropertyType'
          }, {
            type: 'element',
            name: 'description',
            elementName: 'description',
            typeInfo: 'GML_3_1_1.StringOrRefType'
          }, {
            name: 'name',
            collection: true,
            elementName: 'name',
            typeInfo: 'GML_3_1_1.CodeType',
            type: 'elementRef'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'id',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'DirectionVectorType',
        propertyInfos: [{
            type: 'element',
            name: 'vector',
            elementName: 'vector',
            typeInfo: 'GML_3_1_1.VectorType'
          }, {
            type: 'element',
            name: 'horizontalAngle',
            elementName: 'horizontalAngle',
            typeInfo: 'GML_3_1_1.AngleType'
          }, {
            type: 'element',
            name: 'verticalAngle',
            elementName: 'verticalAngle',
            typeInfo: 'GML_3_1_1.AngleType'
          }]
      }, {
        type: 'classInfo',
        localName: 'TopoVolumePropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'topoVolume',
            elementName: 'TopoVolume',
            typeInfo: 'GML_3_1_1.TopoVolumeType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ArcStringType',
        baseTypeInfo: 'GML_3_1_1.AbstractCurveSegmentType',
        propertyInfos: [{
            name: 'posOrPointPropertyOrPointRep',
            collection: true,
            elementTypeInfos: [{
                elementName: 'pointProperty',
                typeInfo: 'GML_3_1_1.PointPropertyType'
              }, {
                elementName: 'pointRep',
                typeInfo: 'GML_3_1_1.PointPropertyType'
              }, {
                elementName: 'pos',
                typeInfo: 'GML_3_1_1.DirectPositionType'
              }],
            type: 'elementRefs'
          }, {
            type: 'element',
            name: 'posList',
            elementName: 'posList',
            typeInfo: 'GML_3_1_1.DirectPositionListType'
          }, {
            type: 'element',
            name: 'coordinates',
            elementName: 'coordinates',
            typeInfo: 'GML_3_1_1.CoordinatesType'
          }, {
            name: 'interpolation',
            typeInfo: 'String',
            attributeName: {
              localPart: 'interpolation'
            },
            type: 'attribute'
          }, {
            name: 'numArc',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'numArc'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractCurveSegmentType',
        propertyInfos: [{
            name: 'numDerivativesAtStart',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'numDerivativesAtStart'
            },
            type: 'attribute'
          }, {
            name: 'numDerivativesAtEnd',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'numDerivativesAtEnd'
            },
            type: 'attribute'
          }, {
            name: 'numDerivativeInterior',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'numDerivativeInterior'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'SphereType',
        baseTypeInfo: 'GML_3_1_1.AbstractGriddedSurfaceType',
        propertyInfos: [{
            name: 'horizontalCurveType',
            typeInfo: 'String',
            attributeName: {
              localPart: 'horizontalCurveType'
            },
            type: 'attribute'
          }, {
            name: 'verticalCurveType',
            typeInfo: 'String',
            attributeName: {
              localPart: 'verticalCurveType'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractGriddedSurfaceType',
        baseTypeInfo: 'GML_3_1_1.AbstractParametricCurveSurfaceType',
        propertyInfos: [{
            type: 'element',
            name: 'row',
            collection: true,
            elementName: 'row',
            typeInfo: 'GML_3_1_1.AbstractGriddedSurfaceType.Row'
          }, {
            type: 'element',
            name: 'rows',
            elementName: 'rows',
            typeInfo: 'Integer'
          }, {
            type: 'element',
            name: 'columns',
            elementName: 'columns',
            typeInfo: 'Integer'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractParametricCurveSurfaceType',
        baseTypeInfo: 'GML_3_1_1.AbstractSurfacePatchType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'AbstractSurfacePatchType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'CoverageFunctionType',
        propertyInfos: [{
            type: 'element',
            name: 'mappingRule',
            elementName: 'MappingRule',
            typeInfo: 'GML_3_1_1.StringOrRefType'
          }, {
            name: 'gridFunction',
            elementName: 'GridFunction',
            typeInfo: 'GML_3_1_1.GridFunctionType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'TopoCurveType',
        baseTypeInfo: 'GML_3_1_1.AbstractTopologyType',
        propertyInfos: [{
            type: 'element',
            name: 'directedEdge',
            collection: true,
            elementName: 'directedEdge',
            typeInfo: 'GML_3_1_1.DirectedEdgePropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractDiscreteCoverageType',
        baseTypeInfo: 'GML_3_1_1.AbstractCoverageType',
        propertyInfos: [{
            type: 'element',
            name: 'coverageFunction',
            elementName: 'coverageFunction',
            typeInfo: 'GML_3_1_1.CoverageFunctionType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractCoverageType',
        baseTypeInfo: 'GML_3_1_1.AbstractFeatureType',
        propertyInfos: [{
            name: 'domainSet',
            elementName: 'domainSet',
            typeInfo: 'GML_3_1_1.DomainSetType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'rangeSet',
            elementName: 'rangeSet',
            typeInfo: 'GML_3_1_1.RangeSetType'
          }, {
            name: 'dimension',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'dimension'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractFeatureType',
        baseTypeInfo: 'GML_3_1_1.AbstractGMLType',
        propertyInfos: [{
            type: 'element',
            name: 'boundedBy',
            elementName: 'boundedBy',
            typeInfo: 'GML_3_1_1.BoundingShapeType'
          }, {
            name: 'location',
            elementName: 'location',
            typeInfo: 'GML_3_1_1.LocationPropertyType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'RectifiedGridType',
        baseTypeInfo: 'GML_3_1_1.GridType',
        propertyInfos: [{
            type: 'element',
            name: 'origin',
            elementName: 'origin',
            typeInfo: 'GML_3_1_1.PointPropertyType'
          }, {
            type: 'element',
            name: 'offsetVector',
            collection: true,
            elementName: 'offsetVector',
            typeInfo: 'GML_3_1_1.VectorType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractGeometryType',
        baseTypeInfo: 'GML_3_1_1.AbstractGMLType',
        propertyInfos: [{
            name: 'gid',
            typeInfo: 'String',
            attributeName: {
              localPart: 'gid'
            },
            type: 'attribute'
          }, {
            name: 'srsName',
            typeInfo: 'String',
            attributeName: {
              localPart: 'srsName'
            },
            type: 'attribute'
          }, {
            name: 'srsDimension',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'srsDimension'
            },
            type: 'attribute'
          }, {
            name: 'axisLabels',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            },
            attributeName: {
              localPart: 'axisLabels'
            },
            type: 'attribute'
          }, {
            name: 'uomLabels',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            },
            attributeName: {
              localPart: 'uomLabels'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'FeaturePropertyType',
        propertyInfos: [{
            name: 'feature',
            elementName: '_Feature',
            typeInfo: 'GML_3_1_1.AbstractFeatureType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractGeneralTransformationType',
        baseTypeInfo: 'GML_3_1_1.AbstractCoordinateOperationType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'GeometryPropertyType',
        propertyInfos: [{
            name: 'geometry',
            elementName: '_Geometry',
            typeInfo: 'GML_3_1_1.AbstractGeometryType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractReferenceSystemType',
        baseTypeInfo: 'GML_3_1_1.AbstractReferenceSystemBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'srsID',
            collection: true,
            elementName: 'srsID',
            typeInfo: 'GML_3_1_1.IdentifierType'
          }, {
            type: 'element',
            name: 'remarks',
            elementName: 'remarks',
            typeInfo: 'GML_3_1_1.StringOrRefType'
          }, {
            type: 'element',
            name: 'validArea',
            elementName: 'validArea',
            typeInfo: 'GML_3_1_1.ExtentType'
          }, {
            type: 'element',
            name: 'scope',
            elementName: 'scope',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'GeometricComplexType',
        baseTypeInfo: 'GML_3_1_1.AbstractGeometryType',
        propertyInfos: [{
            type: 'element',
            name: 'element',
            collection: true,
            elementName: 'element',
            typeInfo: 'GML_3_1_1.GeometricPrimitivePropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'IdentifierType',
        propertyInfos: [{
            name: 'name',
            elementName: 'name',
            typeInfo: 'GML_3_1_1.CodeType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'version',
            elementName: 'version',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'remarks',
            elementName: 'remarks',
            typeInfo: 'GML_3_1_1.StringOrRefType'
          }]
      }, {
        type: 'classInfo',
        localName: 'GeometryArrayPropertyType',
        propertyInfos: [{
            name: 'geometry',
            collection: true,
            elementName: '_Geometry',
            typeInfo: 'GML_3_1_1.AbstractGeometryType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractGeneralOperationParameterRefType',
        propertyInfos: [{
            name: 'generalOperationParameter',
            elementName: '_GeneralOperationParameter',
            typeInfo: 'GML_3_1_1.AbstractGeneralOperationParameterType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractContinuousCoverageType',
        baseTypeInfo: 'GML_3_1_1.AbstractCoverageType',
        propertyInfos: [{
            type: 'element',
            name: 'coverageFunction',
            elementName: 'coverageFunction',
            typeInfo: 'GML_3_1_1.CoverageFunctionType'
          }]
      }, {
        type: 'classInfo',
        localName: 'MultiSolidCoverageType',
        baseTypeInfo: 'GML_3_1_1.AbstractDiscreteCoverageType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'TopologyStyleType',
        baseTypeInfo: 'GML_3_1_1.BaseStyleDescriptorType',
        propertyInfos: [{
            type: 'element',
            name: 'symbol',
            elementName: 'symbol',
            typeInfo: 'GML_3_1_1.SymbolType'
          }, {
            type: 'element',
            name: 'style',
            elementName: 'style',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'labelStyle',
            elementName: 'labelStyle',
            typeInfo: 'GML_3_1_1.LabelStylePropertyType'
          }, {
            name: 'topologyProperty',
            typeInfo: 'String',
            attributeName: {
              localPart: 'topologyProperty'
            },
            type: 'attribute'
          }, {
            name: 'topologyType',
            typeInfo: 'String',
            attributeName: {
              localPart: 'topologyType'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TopologyStylePropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'topologyStyle',
            elementName: 'TopologyStyle',
            typeInfo: 'GML_3_1_1.TopologyStyleType'
          }, {
            name: 'about',
            typeInfo: 'String',
            attributeName: {
              localPart: 'about'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'MultiPolygonType',
        baseTypeInfo: 'GML_3_1_1.AbstractGeometricAggregateType',
        propertyInfos: [{
            type: 'element',
            name: 'polygonMember',
            collection: true,
            elementName: 'polygonMember',
            typeInfo: 'GML_3_1_1.PolygonPropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractGeometricAggregateType',
        baseTypeInfo: 'GML_3_1_1.AbstractGeometryType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'CartesianCSRefType',
        propertyInfos: [{
            type: 'element',
            name: 'cartesianCS',
            elementName: 'CartesianCS',
            typeInfo: 'GML_3_1_1.CartesianCSType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'PointPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'point',
            elementName: 'Point',
            typeInfo: 'GML_3_1_1.PointType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TimeInstantType',
        baseTypeInfo: 'GML_3_1_1.AbstractTimeGeometricPrimitiveType',
        propertyInfos: [{
            type: 'element',
            name: 'timePosition',
            elementName: 'timePosition',
            typeInfo: 'GML_3_1_1.TimePositionType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractTimeGeometricPrimitiveType',
        baseTypeInfo: 'GML_3_1_1.AbstractTimePrimitiveType',
        propertyInfos: [{
            name: 'frame',
            typeInfo: 'String',
            attributeName: {
              localPart: 'frame'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractTimePrimitiveType',
        baseTypeInfo: 'GML_3_1_1.AbstractTimeObjectType',
        propertyInfos: [{
            type: 'element',
            name: 'relatedTime',
            collection: true,
            elementName: 'relatedTime',
            typeInfo: 'GML_3_1_1.RelatedTimeType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractTimeObjectType',
        baseTypeInfo: 'GML_3_1_1.AbstractGMLType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'EngineeringCRSType',
        baseTypeInfo: 'GML_3_1_1.AbstractReferenceSystemType',
        propertyInfos: [{
            type: 'element',
            name: 'usesCS',
            elementName: 'usesCS',
            typeInfo: 'GML_3_1_1.CoordinateSystemRefType'
          }, {
            type: 'element',
            name: 'usesEngineeringDatum',
            elementName: 'usesEngineeringDatum',
            typeInfo: 'GML_3_1_1.EngineeringDatumRefType'
          }]
      }, {
        type: 'classInfo',
        localName: 'OperationParameterGroupRefType',
        propertyInfos: [{
            type: 'element',
            name: 'operationParameterGroup',
            elementName: 'OperationParameterGroup',
            typeInfo: 'GML_3_1_1.OperationParameterGroupType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ReferenceSystemRefType',
        propertyInfos: [{
            name: 'referenceSystem',
            elementName: '_ReferenceSystem',
            typeInfo: 'GML_3_1_1.AbstractReferenceSystemType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'EllipsoidalCSRefType',
        propertyInfos: [{
            type: 'element',
            name: 'ellipsoidalCS',
            elementName: 'EllipsoidalCS',
            typeInfo: 'GML_3_1_1.EllipsoidalCSType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ParameterValueType',
        baseTypeInfo: 'GML_3_1_1.AbstractGeneralParameterValueType',
        propertyInfos: [{
            type: 'element',
            name: 'value',
            elementName: 'value',
            typeInfo: 'GML_3_1_1.MeasureType'
          }, {
            type: 'element',
            name: 'dmsAngleValue',
            elementName: 'dmsAngleValue',
            typeInfo: 'GML_3_1_1.DMSAngleType'
          }, {
            type: 'element',
            name: 'stringValue',
            elementName: 'stringValue',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'integerValue',
            elementName: 'integerValue',
            typeInfo: 'Integer'
          }, {
            type: 'element',
            name: 'booleanValue',
            elementName: 'booleanValue',
            typeInfo: 'Boolean'
          }, {
            type: 'element',
            name: 'valueList',
            elementName: 'valueList',
            typeInfo: 'GML_3_1_1.MeasureListType'
          }, {
            type: 'element',
            name: 'integerValueList',
            elementName: 'integerValueList',
            typeInfo: {
              type: 'list',
              typeInfo: 'Integer'
            }
          }, {
            type: 'element',
            name: 'valueFile',
            elementName: 'valueFile',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'valueOfParameter',
            elementName: 'valueOfParameter',
            typeInfo: 'GML_3_1_1.OperationParameterRefType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractGeneralParameterValueType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'OperationMethodType',
        baseTypeInfo: 'GML_3_1_1.OperationMethodBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'methodID',
            collection: true,
            elementName: 'methodID',
            typeInfo: 'GML_3_1_1.IdentifierType'
          }, {
            type: 'element',
            name: 'remarks',
            elementName: 'remarks',
            typeInfo: 'GML_3_1_1.StringOrRefType'
          }, {
            type: 'element',
            name: 'methodFormula',
            elementName: 'methodFormula',
            typeInfo: 'GML_3_1_1.CodeType'
          }, {
            type: 'element',
            name: 'sourceDimensions',
            elementName: 'sourceDimensions',
            typeInfo: 'Integer'
          }, {
            type: 'element',
            name: 'targetDimensions',
            elementName: 'targetDimensions',
            typeInfo: 'Integer'
          }, {
            type: 'element',
            name: 'usesParameter',
            collection: true,
            elementName: 'usesParameter',
            typeInfo: 'GML_3_1_1.AbstractGeneralOperationParameterRefType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractRingPropertyType',
        propertyInfos: [{
            name: 'ring',
            elementName: '_Ring',
            typeInfo: 'GML_3_1_1.AbstractRingType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'SurfaceType',
        baseTypeInfo: 'GML_3_1_1.AbstractSurfaceType',
        propertyInfos: [{
            name: 'patches',
            elementName: 'patches',
            typeInfo: 'GML_3_1_1.SurfacePatchArrayPropertyType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractSurfaceType',
        baseTypeInfo: 'GML_3_1_1.AbstractGeometricPrimitiveType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'AbstractGeometricPrimitiveType',
        baseTypeInfo: 'GML_3_1_1.AbstractGeometryType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'MeasureType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Double',
            type: 'value'
          }, {
            name: 'uom',
            typeInfo: 'String',
            attributeName: {
              localPart: 'uom'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'VerticalCSRefType',
        propertyInfos: [{
            type: 'element',
            name: 'verticalCS',
            elementName: 'VerticalCS',
            typeInfo: 'GML_3_1_1.VerticalCSType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'StringOrRefType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'String',
            type: 'value'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'GeneralConversionRefType',
        propertyInfos: [{
            name: 'generalConversion',
            elementName: '_GeneralConversion',
            typeInfo: 'GML_3_1_1.AbstractGeneralConversionType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'SurfacePropertyType',
        propertyInfos: [{
            name: 'surface',
            elementName: '_Surface',
            typeInfo: 'GML_3_1_1.AbstractSurfaceType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'PolyhedralSurfaceType',
        baseTypeInfo: 'GML_3_1_1.SurfaceType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'DirectedObservationAtDistanceType',
        baseTypeInfo: 'GML_3_1_1.DirectedObservationType',
        propertyInfos: [{
            type: 'element',
            name: 'distance',
            elementName: 'distance',
            typeInfo: 'GML_3_1_1.MeasureType'
          }]
      }, {
        type: 'classInfo',
        localName: 'DirectedObservationType',
        baseTypeInfo: 'GML_3_1_1.ObservationType',
        propertyInfos: [{
            type: 'element',
            name: 'direction',
            elementName: 'direction',
            typeInfo: 'GML_3_1_1.DirectionPropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ObservationType',
        baseTypeInfo: 'GML_3_1_1.AbstractFeatureType',
        propertyInfos: [{
            type: 'element',
            name: 'validTime',
            elementName: 'validTime',
            typeInfo: 'GML_3_1_1.TimePrimitivePropertyType'
          }, {
            type: 'element',
            name: 'using',
            elementName: 'using',
            typeInfo: 'GML_3_1_1.FeaturePropertyType'
          }, {
            name: 'target',
            elementName: 'target',
            typeInfo: 'GML_3_1_1.TargetPropertyType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'resultOf',
            elementName: 'resultOf',
            typeInfo: 'GML_3_1_1.AssociationType'
          }]
      }, {
        type: 'classInfo',
        localName: 'GeocentricCRSRefType',
        propertyInfos: [{
            type: 'element',
            name: 'geocentricCRS',
            elementName: 'GeocentricCRS',
            typeInfo: 'GML_3_1_1.GeocentricCRSType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TinType',
        baseTypeInfo: 'GML_3_1_1.TriangulatedSurfaceType',
        propertyInfos: [{
            type: 'element',
            name: 'stopLines',
            collection: true,
            elementName: 'stopLines',
            typeInfo: 'GML_3_1_1.LineStringSegmentArrayPropertyType'
          }, {
            type: 'element',
            name: 'breakLines',
            collection: true,
            elementName: 'breakLines',
            typeInfo: 'GML_3_1_1.LineStringSegmentArrayPropertyType'
          }, {
            type: 'element',
            name: 'maxLength',
            elementName: 'maxLength',
            typeInfo: 'GML_3_1_1.LengthType'
          }, {
            type: 'element',
            name: 'controlPoint',
            elementName: 'controlPoint',
            typeInfo: 'GML_3_1_1.TinType.ControlPoint'
          }]
      }, {
        type: 'classInfo',
        localName: 'TriangulatedSurfaceType',
        baseTypeInfo: 'GML_3_1_1.SurfaceType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'TemporalDatumRefType',
        propertyInfos: [{
            type: 'element',
            name: 'temporalDatum',
            elementName: 'TemporalDatum',
            typeInfo: 'GML_3_1_1.TemporalDatumType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'CoordinateReferenceSystemRefType',
        propertyInfos: [{
            name: 'coordinateReferenceSystem',
            elementName: '_CoordinateReferenceSystem',
            typeInfo: 'GML_3_1_1.AbstractReferenceSystemType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'LinearRingType',
        baseTypeInfo: 'GML_3_1_1.AbstractRingType',
        propertyInfos: [{
            name: 'posOrPointPropertyOrPointRep',
            collection: true,
            elementTypeInfos: [{
                elementName: 'pointProperty',
                typeInfo: 'GML_3_1_1.PointPropertyType'
              }, {
                elementName: 'pointRep',
                typeInfo: 'GML_3_1_1.PointPropertyType'
              }, {
                elementName: 'pos',
                typeInfo: 'GML_3_1_1.DirectPositionType'
              }],
            type: 'elementRefs'
          }, {
            type: 'element',
            name: 'posList',
            elementName: 'posList',
            typeInfo: 'GML_3_1_1.DirectPositionListType'
          }, {
            type: 'element',
            name: 'coordinates',
            elementName: 'coordinates',
            typeInfo: 'GML_3_1_1.CoordinatesType'
          }, {
            type: 'element',
            name: 'coord',
            collection: true,
            elementName: 'coord',
            typeInfo: 'GML_3_1_1.CoordType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractRingType',
        baseTypeInfo: 'GML_3_1_1.AbstractGeometryType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'PrimeMeridianRefType',
        propertyInfos: [{
            type: 'element',
            name: 'primeMeridian',
            elementName: 'PrimeMeridian',
            typeInfo: 'GML_3_1_1.PrimeMeridianType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'LinearCSRefType',
        propertyInfos: [{
            type: 'element',
            name: 'linearCS',
            elementName: 'LinearCS',
            typeInfo: 'GML_3_1_1.LinearCSType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'CompoundCRSRefType',
        propertyInfos: [{
            type: 'element',
            name: 'compoundCRS',
            elementName: 'CompoundCRS',
            typeInfo: 'GML_3_1_1.CompoundCRSType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'GeometryStyleType',
        baseTypeInfo: 'GML_3_1_1.BaseStyleDescriptorType',
        propertyInfos: [{
            type: 'element',
            name: 'symbol',
            elementName: 'symbol',
            typeInfo: 'GML_3_1_1.SymbolType'
          }, {
            type: 'element',
            name: 'style',
            elementName: 'style',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'labelStyle',
            elementName: 'labelStyle',
            typeInfo: 'GML_3_1_1.LabelStylePropertyType'
          }, {
            name: 'geometryProperty',
            typeInfo: 'String',
            attributeName: {
              localPart: 'geometryProperty'
            },
            type: 'attribute'
          }, {
            name: 'geometryType',
            typeInfo: 'String',
            attributeName: {
              localPart: 'geometryType'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'VerticalCRSRefType',
        propertyInfos: [{
            type: 'element',
            name: 'verticalCRS',
            elementName: 'VerticalCRS',
            typeInfo: 'GML_3_1_1.VerticalCRSType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'MultiCurveType',
        baseTypeInfo: 'GML_3_1_1.AbstractGeometricAggregateType',
        propertyInfos: [{
            type: 'element',
            name: 'curveMember',
            collection: true,
            elementName: 'curveMember',
            typeInfo: 'GML_3_1_1.CurvePropertyType'
          }, {
            type: 'element',
            name: 'curveMembers',
            elementName: 'curveMembers',
            typeInfo: 'GML_3_1_1.CurveArrayPropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'BezierType',
        baseTypeInfo: 'GML_3_1_1.BSplineType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'BSplineType',
        baseTypeInfo: 'GML_3_1_1.AbstractCurveSegmentType',
        propertyInfos: [{
            name: 'posOrPointPropertyOrPointRep',
            collection: true,
            elementTypeInfos: [{
                elementName: 'pointProperty',
                typeInfo: 'GML_3_1_1.PointPropertyType'
              }, {
                elementName: 'pointRep',
                typeInfo: 'GML_3_1_1.PointPropertyType'
              }, {
                elementName: 'pos',
                typeInfo: 'GML_3_1_1.DirectPositionType'
              }],
            type: 'elementRefs'
          }, {
            type: 'element',
            name: 'posList',
            elementName: 'posList',
            typeInfo: 'GML_3_1_1.DirectPositionListType'
          }, {
            type: 'element',
            name: 'coordinates',
            elementName: 'coordinates',
            typeInfo: 'GML_3_1_1.CoordinatesType'
          }, {
            type: 'element',
            name: 'degree',
            elementName: 'degree',
            typeInfo: 'Integer'
          }, {
            type: 'element',
            name: 'knot',
            collection: true,
            elementName: 'knot',
            typeInfo: 'GML_3_1_1.KnotPropertyType'
          }, {
            name: 'interpolation',
            typeInfo: 'String',
            attributeName: {
              localPart: 'interpolation'
            },
            type: 'attribute'
          }, {
            name: 'isPolynomial',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'isPolynomial'
            },
            type: 'attribute'
          }, {
            name: 'knotType',
            typeInfo: 'String',
            attributeName: {
              localPart: 'knotType'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'EllipsoidalCSType',
        baseTypeInfo: 'GML_3_1_1.AbstractCoordinateSystemType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'AbstractCoordinateSystemType',
        baseTypeInfo: 'GML_3_1_1.AbstractCoordinateSystemBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'csID',
            collection: true,
            elementName: 'csID',
            typeInfo: 'GML_3_1_1.IdentifierType'
          }, {
            type: 'element',
            name: 'remarks',
            elementName: 'remarks',
            typeInfo: 'GML_3_1_1.StringOrRefType'
          }, {
            type: 'element',
            name: 'usesAxis',
            collection: true,
            elementName: 'usesAxis',
            typeInfo: 'GML_3_1_1.CoordinateSystemAxisRefType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ClothoidType',
        baseTypeInfo: 'GML_3_1_1.AbstractCurveSegmentType',
        propertyInfos: [{
            type: 'element',
            name: 'refLocation',
            elementName: 'refLocation',
            typeInfo: 'GML_3_1_1.ClothoidType.RefLocation'
          }, {
            type: 'element',
            name: 'scaleFactor',
            elementName: 'scaleFactor',
            typeInfo: 'Decimal'
          }, {
            type: 'element',
            name: 'startParameter',
            elementName: 'startParameter',
            typeInfo: 'Double'
          }, {
            type: 'element',
            name: 'endParameter',
            elementName: 'endParameter',
            typeInfo: 'Double'
          }]
      }, {
        type: 'classInfo',
        localName: 'CircleType',
        baseTypeInfo: 'GML_3_1_1.ArcType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'ArcType',
        baseTypeInfo: 'GML_3_1_1.ArcStringType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'BoundingShapeType',
        propertyInfos: [{
            name: 'envelope',
            elementName: 'Envelope',
            typeInfo: 'GML_3_1_1.EnvelopeType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: '_null',
            elementName: 'Null',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            }
          }]
      }, {
        type: 'classInfo',
        localName: 'ObliqueCartesianCSRefType',
        propertyInfos: [{
            type: 'element',
            name: 'obliqueCartesianCS',
            elementName: 'ObliqueCartesianCS',
            typeInfo: 'GML_3_1_1.ObliqueCartesianCSType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'GridCoverageType',
        baseTypeInfo: 'GML_3_1_1.AbstractDiscreteCoverageType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'EngineeringCRSRefType',
        propertyInfos: [{
            type: 'element',
            name: 'engineeringCRS',
            elementName: 'EngineeringCRS',
            typeInfo: 'GML_3_1_1.EngineeringCRSType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'MovingObjectStatusType',
        baseTypeInfo: 'GML_3_1_1.AbstractTimeSliceType',
        propertyInfos: [{
            name: 'location',
            elementName: 'location',
            typeInfo: 'GML_3_1_1.LocationPropertyType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'speed',
            elementName: 'speed',
            typeInfo: 'GML_3_1_1.MeasureType'
          }, {
            type: 'element',
            name: 'bearing',
            elementName: 'bearing',
            typeInfo: 'GML_3_1_1.DirectionPropertyType'
          }, {
            type: 'element',
            name: 'acceleration',
            elementName: 'acceleration',
            typeInfo: 'GML_3_1_1.MeasureType'
          }, {
            type: 'element',
            name: 'elevation',
            elementName: 'elevation',
            typeInfo: 'GML_3_1_1.MeasureType'
          }, {
            type: 'element',
            name: 'status',
            elementName: 'status',
            typeInfo: 'GML_3_1_1.StringOrRefType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractTimeSliceType',
        baseTypeInfo: 'GML_3_1_1.AbstractGMLType',
        propertyInfos: [{
            type: 'element',
            name: 'validTime',
            elementName: 'validTime',
            typeInfo: 'GML_3_1_1.TimePrimitivePropertyType'
          }, {
            type: 'element',
            name: 'dataSource',
            elementName: 'dataSource',
            typeInfo: 'GML_3_1_1.StringOrRefType'
          }]
      }, {
        type: 'classInfo',
        localName: 'TopoVolumeType',
        baseTypeInfo: 'GML_3_1_1.AbstractTopologyType',
        propertyInfos: [{
            type: 'element',
            name: 'directedTopoSolid',
            collection: true,
            elementName: 'directedTopoSolid',
            typeInfo: 'GML_3_1_1.DirectedTopoSolidPropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ImageDatumType',
        baseTypeInfo: 'GML_3_1_1.AbstractDatumType',
        propertyInfos: [{
            type: 'element',
            name: 'pixelInCell',
            elementName: 'pixelInCell',
            typeInfo: 'GML_3_1_1.PixelInCellType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractDatumType',
        baseTypeInfo: 'GML_3_1_1.AbstractDatumBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'datumID',
            collection: true,
            elementName: 'datumID',
            typeInfo: 'GML_3_1_1.IdentifierType'
          }, {
            type: 'element',
            name: 'remarks',
            elementName: 'remarks',
            typeInfo: 'GML_3_1_1.StringOrRefType'
          }, {
            type: 'element',
            name: 'anchorPoint',
            elementName: 'anchorPoint',
            typeInfo: 'GML_3_1_1.CodeType'
          }, {
            type: 'element',
            name: 'realizationEpoch',
            elementName: 'realizationEpoch',
            typeInfo: 'Calendar'
          }, {
            type: 'element',
            name: 'validArea',
            elementName: 'validArea',
            typeInfo: 'GML_3_1_1.ExtentType'
          }, {
            type: 'element',
            name: 'scope',
            elementName: 'scope',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'PolygonPatchArrayPropertyType',
        baseTypeInfo: 'GML_3_1_1.SurfacePatchArrayPropertyType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'SurfacePatchArrayPropertyType',
        propertyInfos: [{
            name: 'surfacePatch',
            collection: true,
            elementName: '_SurfacePatch',
            typeInfo: 'GML_3_1_1.AbstractSurfacePatchType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'MultiCurvePropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'multiCurve',
            elementName: 'MultiCurve',
            typeInfo: 'GML_3_1_1.MultiCurveType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'MultiSurfaceDomainType',
        baseTypeInfo: 'GML_3_1_1.DomainSetType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'PolygonPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'polygon',
            elementName: 'Polygon',
            typeInfo: 'GML_3_1_1.PolygonType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'SolidPropertyType',
        propertyInfos: [{
            name: 'solid',
            elementName: '_Solid',
            typeInfo: 'GML_3_1_1.AbstractSolidType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'LinearCSType',
        baseTypeInfo: 'GML_3_1_1.AbstractCoordinateSystemType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'OperationParameterRefType',
        propertyInfos: [{
            type: 'element',
            name: 'operationParameter',
            elementName: 'OperationParameter',
            typeInfo: 'GML_3_1_1.OperationParameterType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TemporalCRSType',
        baseTypeInfo: 'GML_3_1_1.AbstractReferenceSystemType',
        propertyInfos: [{
            type: 'element',
            name: 'usesTemporalCS',
            elementName: 'usesTemporalCS',
            typeInfo: 'GML_3_1_1.TemporalCSRefType'
          }, {
            type: 'element',
            name: 'usesTemporalDatum',
            elementName: 'usesTemporalDatum',
            typeInfo: 'GML_3_1_1.TemporalDatumRefType'
          }]
      }, {
        type: 'classInfo',
        localName: 'DirectedTopoSolidPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'topoSolid',
            elementName: 'TopoSolid',
            typeInfo: 'GML_3_1_1.TopoSolidType'
          }, {
            name: 'orientation',
            typeInfo: 'String',
            attributeName: {
              localPart: 'orientation'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TimeOrdinalReferenceSystemType',
        baseTypeInfo: 'GML_3_1_1.AbstractTimeReferenceSystemType',
        propertyInfos: [{
            type: 'element',
            name: 'component',
            collection: true,
            elementName: 'component',
            typeInfo: 'GML_3_1_1.TimeOrdinalEraPropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractTimeReferenceSystemType',
        baseTypeInfo: 'GML_3_1_1.DefinitionType',
        propertyInfos: [{
            type: 'element',
            name: 'domainOfValidity',
            elementName: 'domainOfValidity',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'TimeIntervalLengthType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Decimal',
            type: 'value'
          }, {
            name: 'unit',
            typeInfo: 'String',
            attributeName: {
              localPart: 'unit'
            },
            type: 'attribute'
          }, {
            name: 'radix',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'radix'
            },
            type: 'attribute'
          }, {
            name: 'factor',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'factor'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'GeographicCRSType',
        baseTypeInfo: 'GML_3_1_1.AbstractReferenceSystemType',
        propertyInfos: [{
            type: 'element',
            name: 'usesEllipsoidalCS',
            elementName: 'usesEllipsoidalCS',
            typeInfo: 'GML_3_1_1.EllipsoidalCSRefType'
          }, {
            type: 'element',
            name: 'usesGeodeticDatum',
            elementName: 'usesGeodeticDatum',
            typeInfo: 'GML_3_1_1.GeodeticDatumRefType'
          }]
      }, {
        type: 'classInfo',
        localName: 'CircleByCenterPointType',
        baseTypeInfo: 'GML_3_1_1.ArcByCenterPointType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'ArcByCenterPointType',
        baseTypeInfo: 'GML_3_1_1.AbstractCurveSegmentType',
        propertyInfos: [{
            type: 'element',
            name: 'pos',
            elementName: 'pos',
            typeInfo: 'GML_3_1_1.DirectPositionType'
          }, {
            type: 'element',
            name: 'pointProperty',
            elementName: 'pointProperty',
            typeInfo: 'GML_3_1_1.PointPropertyType'
          }, {
            type: 'element',
            name: 'pointRep',
            elementName: 'pointRep',
            typeInfo: 'GML_3_1_1.PointPropertyType'
          }, {
            type: 'element',
            name: 'posList',
            elementName: 'posList',
            typeInfo: 'GML_3_1_1.DirectPositionListType'
          }, {
            type: 'element',
            name: 'coordinates',
            elementName: 'coordinates',
            typeInfo: 'GML_3_1_1.CoordinatesType'
          }, {
            type: 'element',
            name: 'radius',
            elementName: 'radius',
            typeInfo: 'GML_3_1_1.LengthType'
          }, {
            type: 'element',
            name: 'startAngle',
            elementName: 'startAngle',
            typeInfo: 'GML_3_1_1.AngleType'
          }, {
            type: 'element',
            name: 'endAngle',
            elementName: 'endAngle',
            typeInfo: 'GML_3_1_1.AngleType'
          }, {
            name: 'interpolation',
            typeInfo: 'String',
            attributeName: {
              localPart: 'interpolation'
            },
            type: 'attribute'
          }, {
            name: 'numArc',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'numArc'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ConversionToPreferredUnitType',
        baseTypeInfo: 'GML_3_1_1.UnitOfMeasureType',
        propertyInfos: [{
            type: 'element',
            name: 'factor',
            elementName: 'factor',
            typeInfo: 'Double'
          }, {
            type: 'element',
            name: 'formula',
            elementName: 'formula',
            typeInfo: 'GML_3_1_1.FormulaType'
          }]
      }, {
        type: 'classInfo',
        localName: 'DerivedCRSType',
        baseTypeInfo: 'GML_3_1_1.AbstractGeneralDerivedCRSType',
        propertyInfos: [{
            type: 'element',
            name: 'derivedCRSType',
            elementName: 'derivedCRSType',
            typeInfo: 'GML_3_1_1.DerivedCRSTypeType'
          }, {
            type: 'element',
            name: 'usesCS',
            elementName: 'usesCS',
            typeInfo: 'GML_3_1_1.CoordinateSystemRefType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractGeneralDerivedCRSType',
        baseTypeInfo: 'GML_3_1_1.AbstractReferenceSystemType',
        propertyInfos: [{
            type: 'element',
            name: 'baseCRS',
            elementName: 'baseCRS',
            typeInfo: 'GML_3_1_1.CoordinateReferenceSystemRefType'
          }, {
            type: 'element',
            name: 'definedByConversion',
            elementName: 'definedByConversion',
            typeInfo: 'GML_3_1_1.GeneralConversionRefType'
          }]
      }, {
        type: 'classInfo',
        localName: 'UserDefinedCSType',
        baseTypeInfo: 'GML_3_1_1.AbstractCoordinateSystemType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'LabelStyleType',
        baseTypeInfo: 'GML_3_1_1.BaseStyleDescriptorType',
        propertyInfos: [{
            type: 'element',
            name: 'style',
            elementName: 'style',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'label',
            elementName: 'label',
            typeInfo: 'GML_3_1_1.LabelType'
          }]
      }, {
        type: 'classInfo',
        localName: 'FeatureArrayPropertyType',
        propertyInfos: [{
            name: 'feature',
            collection: true,
            elementName: '_Feature',
            typeInfo: 'GML_3_1_1.AbstractFeatureType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'AssociationType',
        propertyInfos: [{
            name: 'object',
            elementName: '_Object',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TopoPrimitiveMemberType',
        propertyInfos: [{
            name: 'topoPrimitive',
            elementName: '_TopoPrimitive',
            typeInfo: 'GML_3_1_1.AbstractTopoPrimitiveType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'MultiSurfacePropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'multiSurface',
            elementName: 'MultiSurface',
            typeInfo: 'GML_3_1_1.MultiSurfaceType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'CylinderType',
        baseTypeInfo: 'GML_3_1_1.AbstractGriddedSurfaceType',
        propertyInfos: [{
            name: 'horizontalCurveType',
            typeInfo: 'String',
            attributeName: {
              localPart: 'horizontalCurveType'
            },
            type: 'attribute'
          }, {
            name: 'verticalCurveType',
            typeInfo: 'String',
            attributeName: {
              localPart: 'verticalCurveType'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TopoSolidType',
        baseTypeInfo: 'GML_3_1_1.AbstractTopoPrimitiveType',
        propertyInfos: [{
            type: 'element',
            name: 'directedFace',
            collection: true,
            elementName: 'directedFace',
            typeInfo: 'GML_3_1_1.DirectedFacePropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractTopoPrimitiveType',
        baseTypeInfo: 'GML_3_1_1.AbstractTopologyType',
        propertyInfos: [{
            type: 'element',
            name: 'isolated',
            collection: true,
            elementName: 'isolated',
            typeInfo: 'GML_3_1_1.IsolatedPropertyType'
          }, {
            type: 'element',
            name: 'container',
            elementName: 'container',
            typeInfo: 'GML_3_1_1.ContainerPropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractTopologyType',
        baseTypeInfo: 'GML_3_1_1.AbstractGMLType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'MultiPointPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'multiPoint',
            elementName: 'MultiPoint',
            typeInfo: 'GML_3_1_1.MultiPointType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'LineStringSegmentType',
        baseTypeInfo: 'GML_3_1_1.AbstractCurveSegmentType',
        propertyInfos: [{
            name: 'posOrPointPropertyOrPointRep',
            collection: true,
            elementTypeInfos: [{
                elementName: 'pointProperty',
                typeInfo: 'GML_3_1_1.PointPropertyType'
              }, {
                elementName: 'pointRep',
                typeInfo: 'GML_3_1_1.PointPropertyType'
              }, {
                elementName: 'pos',
                typeInfo: 'GML_3_1_1.DirectPositionType'
              }],
            type: 'elementRefs'
          }, {
            type: 'element',
            name: 'posList',
            elementName: 'posList',
            typeInfo: 'GML_3_1_1.DirectPositionListType'
          }, {
            type: 'element',
            name: 'coordinates',
            elementName: 'coordinates',
            typeInfo: 'GML_3_1_1.CoordinatesType'
          }, {
            name: 'interpolation',
            typeInfo: 'String',
            attributeName: {
              localPart: 'interpolation'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AngleChoiceType',
        propertyInfos: [{
            type: 'element',
            name: 'angle',
            elementName: 'angle',
            typeInfo: 'GML_3_1_1.MeasureType'
          }, {
            type: 'element',
            name: 'dmsAngle',
            elementName: 'dmsAngle',
            typeInfo: 'GML_3_1_1.DMSAngleType'
          }]
      }, {
        type: 'classInfo',
        localName: 'TrianglePatchArrayPropertyType',
        baseTypeInfo: 'GML_3_1_1.SurfacePatchArrayPropertyType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'CylindricalCSRefType',
        propertyInfos: [{
            type: 'element',
            name: 'cylindricalCS',
            elementName: 'CylindricalCS',
            typeInfo: 'GML_3_1_1.CylindricalCSType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'CompoundCRSType',
        baseTypeInfo: 'GML_3_1_1.AbstractReferenceSystemType',
        propertyInfos: [{
            type: 'element',
            name: 'includesCRS',
            collection: true,
            elementName: 'includesCRS',
            typeInfo: 'GML_3_1_1.CoordinateReferenceSystemRefType'
          }]
      }, {
        type: 'classInfo',
        localName: 'RectifiedGridDomainType',
        baseTypeInfo: 'GML_3_1_1.DomainSetType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'GeodeticDatumRefType',
        propertyInfos: [{
            type: 'element',
            name: 'geodeticDatum',
            elementName: 'GeodeticDatum',
            typeInfo: 'GML_3_1_1.GeodeticDatumType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'CRSRefType',
        propertyInfos: [{
            name: 'crs',
            elementName: '_CRS',
            typeInfo: 'GML_3_1_1.AbstractReferenceSystemType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'SurfaceArrayPropertyType',
        propertyInfos: [{
            name: 'surface',
            collection: true,
            elementName: '_Surface',
            typeInfo: 'GML_3_1_1.AbstractSurfaceType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'IndirectEntryType',
        propertyInfos: [{
            type: 'element',
            name: 'definitionProxy',
            elementName: 'DefinitionProxy',
            typeInfo: 'GML_3_1_1.DefinitionProxyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'OperationMethodRefType',
        propertyInfos: [{
            type: 'element',
            name: 'operationMethod',
            elementName: 'OperationMethod',
            typeInfo: 'GML_3_1_1.OperationMethodType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'UnitOfMeasureType',
        propertyInfos: [{
            name: 'uom',
            typeInfo: 'String',
            attributeName: {
              localPart: 'uom'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ImageCRSRefType',
        propertyInfos: [{
            type: 'element',
            name: 'imageCRS',
            elementName: 'ImageCRS',
            typeInfo: 'GML_3_1_1.ImageCRSType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'CurvePropertyType',
        propertyInfos: [{
            name: 'curve',
            elementName: '_Curve',
            typeInfo: 'GML_3_1_1.AbstractCurveType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'DirectedNodePropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'node',
            elementName: 'Node',
            typeInfo: 'GML_3_1_1.NodeType'
          }, {
            name: 'orientation',
            typeInfo: 'String',
            attributeName: {
              localPart: 'orientation'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'CoordinateSystemRefType',
        propertyInfos: [{
            name: 'coordinateSystem',
            elementName: '_CoordinateSystem',
            typeInfo: 'GML_3_1_1.AbstractCoordinateSystemType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ImageDatumRefType',
        propertyInfos: [{
            type: 'element',
            name: 'imageDatum',
            elementName: 'ImageDatum',
            typeInfo: 'GML_3_1_1.ImageDatumType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'MultiSurfaceCoverageType',
        baseTypeInfo: 'GML_3_1_1.AbstractDiscreteCoverageType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'BaseUnitType',
        baseTypeInfo: 'GML_3_1_1.UnitDefinitionType',
        propertyInfos: [{
            type: 'element',
            name: 'unitsSystem',
            elementName: 'unitsSystem',
            typeInfo: 'GML_3_1_1.ReferenceType'
          }]
      }, {
        type: 'classInfo',
        localName: 'UnitDefinitionType',
        baseTypeInfo: 'GML_3_1_1.DefinitionType',
        propertyInfos: [{
            type: 'element',
            name: 'quantityType',
            elementName: 'quantityType',
            typeInfo: 'GML_3_1_1.StringOrRefType'
          }, {
            type: 'element',
            name: 'catalogSymbol',
            elementName: 'catalogSymbol',
            typeInfo: 'GML_3_1_1.CodeType'
          }]
      }, {
        type: 'classInfo',
        localName: 'TimeCoordinateSystemType',
        baseTypeInfo: 'GML_3_1_1.AbstractTimeReferenceSystemType',
        propertyInfos: [{
            type: 'element',
            name: 'originPosition',
            elementName: 'originPosition',
            typeInfo: 'GML_3_1_1.TimePositionType'
          }, {
            type: 'element',
            name: 'origin',
            elementName: 'origin',
            typeInfo: 'GML_3_1_1.TimeInstantPropertyType'
          }, {
            type: 'element',
            name: 'interval',
            elementName: 'interval',
            typeInfo: 'GML_3_1_1.TimeIntervalLengthType'
          }]
      }, {
        type: 'classInfo',
        localName: 'CurveArrayPropertyType',
        propertyInfos: [{
            name: 'curve',
            collection: true,
            elementName: '_Curve',
            typeInfo: 'GML_3_1_1.AbstractCurveType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'SolidArrayPropertyType',
        propertyInfos: [{
            name: 'solid',
            collection: true,
            elementName: '_Solid',
            typeInfo: 'GML_3_1_1.AbstractSolidType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'TimeClockType',
        baseTypeInfo: 'GML_3_1_1.AbstractTimeReferenceSystemType',
        propertyInfos: [{
            type: 'element',
            name: 'referenceEvent',
            elementName: 'referenceEvent',
            typeInfo: 'GML_3_1_1.StringOrRefType'
          }, {
            type: 'element',
            name: 'referenceTime',
            elementName: 'referenceTime',
            typeInfo: 'Calendar'
          }, {
            type: 'element',
            name: 'utcReference',
            elementName: 'utcReference',
            typeInfo: 'Calendar'
          }, {
            type: 'element',
            name: 'dateBasis',
            collection: true,
            elementName: 'dateBasis',
            typeInfo: 'GML_3_1_1.TimeCalendarPropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'TimePrimitivePropertyType',
        propertyInfos: [{
            name: 'timePrimitive',
            elementName: '_TimePrimitive',
            typeInfo: 'GML_3_1_1.AbstractTimePrimitiveType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'EnvelopeType',
        propertyInfos: [{
            type: 'element',
            name: 'lowerCorner',
            elementName: 'lowerCorner',
            typeInfo: 'GML_3_1_1.DirectPositionType'
          }, {
            type: 'element',
            name: 'upperCorner',
            elementName: 'upperCorner',
            typeInfo: 'GML_3_1_1.DirectPositionType'
          }, {
            type: 'element',
            name: 'coord',
            collection: true,
            elementName: 'coord',
            typeInfo: 'GML_3_1_1.CoordType'
          }, {
            type: 'element',
            name: 'pos',
            collection: true,
            elementName: 'pos',
            typeInfo: 'GML_3_1_1.DirectPositionType'
          }, {
            type: 'element',
            name: 'coordinates',
            elementName: 'coordinates',
            typeInfo: 'GML_3_1_1.CoordinatesType'
          }, {
            name: 'srsName',
            typeInfo: 'String',
            attributeName: {
              localPart: 'srsName'
            },
            type: 'attribute'
          }, {
            name: 'srsDimension',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'srsDimension'
            },
            type: 'attribute'
          }, {
            name: 'axisLabels',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            },
            attributeName: {
              localPart: 'axisLabels'
            },
            type: 'attribute'
          }, {
            name: 'uomLabels',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            },
            attributeName: {
              localPart: 'uomLabels'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractTimeTopologyPrimitiveType',
        baseTypeInfo: 'GML_3_1_1.AbstractTimePrimitiveType',
        propertyInfos: [{
            type: 'element',
            name: 'complex',
            elementName: 'complex',
            typeInfo: 'GML_3_1_1.ReferenceType'
          }]
      }, {
        type: 'classInfo',
        localName: 'TopoComplexMemberType',
        propertyInfos: [{
            type: 'element',
            name: 'topoComplex',
            elementName: 'TopoComplex',
            typeInfo: 'GML_3_1_1.TopoComplexType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TopoSurfaceType',
        baseTypeInfo: 'GML_3_1_1.AbstractTopologyType',
        propertyInfos: [{
            type: 'element',
            name: 'directedFace',
            collection: true,
            elementName: 'directedFace',
            typeInfo: 'GML_3_1_1.DirectedFacePropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'FeatureStyleType',
        baseTypeInfo: 'GML_3_1_1.AbstractGMLType',
        propertyInfos: [{
            type: 'element',
            name: 'featureConstraint',
            elementName: 'featureConstraint',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'geometryStyle',
            collection: true,
            elementName: 'geometryStyle',
            typeInfo: 'GML_3_1_1.GeometryStylePropertyType'
          }, {
            type: 'element',
            name: 'topologyStyle',
            collection: true,
            elementName: 'topologyStyle',
            typeInfo: 'GML_3_1_1.TopologyStylePropertyType'
          }, {
            type: 'element',
            name: 'labelStyle',
            elementName: 'labelStyle',
            typeInfo: 'GML_3_1_1.LabelStylePropertyType'
          }, {
            name: 'featureType',
            typeInfo: 'String',
            attributeName: {
              localPart: 'featureType'
            },
            type: 'attribute'
          }, {
            name: 'baseType',
            typeInfo: 'String',
            attributeName: {
              localPart: 'baseType'
            },
            type: 'attribute'
          }, {
            name: 'queryGrammar',
            typeInfo: 'String',
            attributeName: {
              localPart: 'queryGrammar'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'CurveSegmentArrayPropertyType',
        propertyInfos: [{
            name: 'curveSegment',
            collection: true,
            elementName: '_CurveSegment',
            typeInfo: 'GML_3_1_1.AbstractCurveSegmentType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'GeometryStylePropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'geometryStyle',
            elementName: 'GeometryStyle',
            typeInfo: 'GML_3_1_1.GeometryStyleType'
          }, {
            name: 'about',
            typeInfo: 'String',
            attributeName: {
              localPart: 'about'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'PassThroughOperationType',
        baseTypeInfo: 'GML_3_1_1.AbstractCoordinateOperationType',
        propertyInfos: [{
            type: 'element',
            name: 'modifiedCoordinate',
            collection: true,
            elementName: 'modifiedCoordinate',
            typeInfo: 'Integer'
          }, {
            type: 'element',
            name: 'usesOperation',
            elementName: 'usesOperation',
            typeInfo: 'GML_3_1_1.OperationRefType'
          }]
      }, {
        type: 'classInfo',
        localName: 'VerticalCRSType',
        baseTypeInfo: 'GML_3_1_1.AbstractReferenceSystemType',
        propertyInfos: [{
            type: 'element',
            name: 'usesVerticalCS',
            elementName: 'usesVerticalCS',
            typeInfo: 'GML_3_1_1.VerticalCSRefType'
          }, {
            type: 'element',
            name: 'usesVerticalDatum',
            elementName: 'usesVerticalDatum',
            typeInfo: 'GML_3_1_1.VerticalDatumRefType'
          }]
      }, {
        type: 'classInfo',
        localName: 'StyleType',
        baseTypeInfo: 'GML_3_1_1.AbstractStyleType',
        propertyInfos: [{
            type: 'element',
            name: 'featureStyle',
            collection: true,
            elementName: 'featureStyle',
            typeInfo: 'GML_3_1_1.FeatureStylePropertyType'
          }, {
            type: 'element',
            name: 'graphStyle',
            elementName: 'graphStyle',
            typeInfo: 'GML_3_1_1.GraphStylePropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractStyleType',
        baseTypeInfo: 'GML_3_1_1.AbstractGMLType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'CompositeValueType',
        baseTypeInfo: 'GML_3_1_1.AbstractGMLType',
        propertyInfos: [{
            type: 'element',
            name: 'valueComponent',
            collection: true,
            elementName: 'valueComponent',
            typeInfo: 'GML_3_1_1.ValuePropertyType'
          }, {
            type: 'element',
            name: 'valueComponents',
            elementName: 'valueComponents',
            typeInfo: 'GML_3_1_1.ValueArrayPropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ValueArrayPropertyType',
        propertyInfos: [{
            name: 'value',
            collection: true,
            elementTypeInfos: [{
                elementName: 'Category',
                typeInfo: 'GML_3_1_1.CodeType'
              }, {
                elementName: 'Boolean',
                typeInfo: 'Boolean'
              }, {
                elementName: 'Quantity',
                typeInfo: 'GML_3_1_1.MeasureType'
              }, {
                elementName: 'Count',
                typeInfo: 'Integer'
              }, {
                elementName: 'CompositeValue',
                typeInfo: 'GML_3_1_1.CompositeValueType'
              }, {
                elementName: 'CategoryList',
                typeInfo: 'GML_3_1_1.CodeOrNullListType'
              }, {
                elementName: 'CountList',
                typeInfo: {
                  type: 'list',
                  typeInfo: 'String'
                }
              }, {
                elementName: 'CategoryExtent',
                typeInfo: 'GML_3_1_1.CategoryExtentType'
              }, {
                elementName: 'Null',
                typeInfo: {
                  type: 'list',
                  typeInfo: 'String'
                }
              }, {
                elementName: 'QuantityList',
                typeInfo: 'GML_3_1_1.MeasureOrNullListType'
              }, {
                elementName: 'QuantityExtent',
                typeInfo: 'GML_3_1_1.QuantityExtentType'
              }, {
                elementName: 'BooleanList',
                typeInfo: {
                  type: 'list',
                  typeInfo: 'String'
                }
              }, {
                elementName: 'CountExtent',
                typeInfo: {
                  type: 'list',
                  typeInfo: 'String'
                }
              }, {
                elementName: '_Object',
                typeInfo: 'AnyType'
              }],
            type: 'elementRefs'
          }]
      }, {
        type: 'classInfo',
        localName: 'TemporalCSRefType',
        propertyInfos: [{
            type: 'element',
            name: 'temporalCS',
            elementName: 'TemporalCS',
            typeInfo: 'GML_3_1_1.TemporalCSType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'DirectedEdgePropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'edge',
            elementName: 'Edge',
            typeInfo: 'GML_3_1_1.EdgeType'
          }, {
            name: 'orientation',
            typeInfo: 'String',
            attributeName: {
              localPart: 'orientation'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'PrimeMeridianType',
        baseTypeInfo: 'GML_3_1_1.PrimeMeridianBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'meridianID',
            collection: true,
            elementName: 'meridianID',
            typeInfo: 'GML_3_1_1.IdentifierType'
          }, {
            type: 'element',
            name: 'remarks',
            elementName: 'remarks',
            typeInfo: 'GML_3_1_1.StringOrRefType'
          }, {
            type: 'element',
            name: 'greenwichLongitude',
            elementName: 'greenwichLongitude',
            typeInfo: 'GML_3_1_1.AngleChoiceType'
          }]
      }, {
        type: 'classInfo',
        localName: 'CompositeSolidType',
        baseTypeInfo: 'GML_3_1_1.AbstractSolidType',
        propertyInfos: [{
            type: 'element',
            name: 'solidMember',
            collection: true,
            elementName: 'solidMember',
            typeInfo: 'GML_3_1_1.SolidPropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractSolidType',
        baseTypeInfo: 'GML_3_1_1.AbstractGeometricPrimitiveType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'GeodesicType',
        baseTypeInfo: 'GML_3_1_1.GeodesicStringType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'GeodesicStringType',
        baseTypeInfo: 'GML_3_1_1.AbstractCurveSegmentType',
        propertyInfos: [{
            type: 'element',
            name: 'posList',
            elementName: 'posList',
            typeInfo: 'GML_3_1_1.DirectPositionListType'
          }, {
            name: 'geometricPositionGroup',
            collection: true,
            elementTypeInfos: [{
                elementName: 'pos',
                typeInfo: 'GML_3_1_1.DirectPositionType'
              }, {
                elementName: 'pointProperty',
                typeInfo: 'GML_3_1_1.PointPropertyType'
              }],
            type: 'elements'
          }, {
            name: 'interpolation',
            typeInfo: 'String',
            attributeName: {
              localPart: 'interpolation'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'PriorityLocationPropertyType',
        baseTypeInfo: 'GML_3_1_1.LocationPropertyType',
        propertyInfos: [{
            name: 'priority',
            typeInfo: 'String',
            attributeName: {
              localPart: 'priority'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'LocationPropertyType',
        propertyInfos: [{
            name: 'geometry',
            elementName: '_Geometry',
            typeInfo: 'GML_3_1_1.AbstractGeometryType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'locationKeyWord',
            elementName: 'LocationKeyWord',
            typeInfo: 'GML_3_1_1.CodeType'
          }, {
            type: 'element',
            name: 'locationString',
            elementName: 'LocationString',
            typeInfo: 'GML_3_1_1.StringOrRefType'
          }, {
            type: 'element',
            name: '_null',
            elementName: 'Null',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            }
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'DefinitionProxyType',
        baseTypeInfo: 'GML_3_1_1.DefinitionType',
        propertyInfos: [{
            type: 'element',
            name: 'definitionRef',
            elementName: 'definitionRef',
            typeInfo: 'GML_3_1_1.ReferenceType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ValueArrayType',
        baseTypeInfo: 'GML_3_1_1.CompositeValueType',
        propertyInfos: [{
            name: 'codeSpace',
            typeInfo: 'String',
            attributeName: {
              localPart: 'codeSpace'
            },
            type: 'attribute'
          }, {
            name: 'uom',
            typeInfo: 'String',
            attributeName: {
              localPart: 'uom'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'MultiLineStringType',
        baseTypeInfo: 'GML_3_1_1.AbstractGeometricAggregateType',
        propertyInfos: [{
            type: 'element',
            name: 'lineStringMember',
            collection: true,
            elementName: 'lineStringMember',
            typeInfo: 'GML_3_1_1.LineStringPropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'TargetPropertyType',
        propertyInfos: [{
            name: 'feature',
            elementName: '_Feature',
            typeInfo: 'GML_3_1_1.AbstractFeatureType',
            type: 'elementRef'
          }, {
            name: 'geometry',
            elementName: '_Geometry',
            typeInfo: 'GML_3_1_1.AbstractGeometryType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'DirectedFacePropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'face',
            elementName: 'Face',
            typeInfo: 'GML_3_1_1.FaceType'
          }, {
            name: 'orientation',
            typeInfo: 'String',
            attributeName: {
              localPart: 'orientation'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'DirectPositionListType',
        propertyInfos: [{
            name: 'value',
            typeInfo: {
              type: 'list',
              typeInfo: 'Double'
            },
            type: 'value'
          }, {
            name: 'count',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'count'
            },
            type: 'attribute'
          }, {
            name: 'srsName',
            typeInfo: 'String',
            attributeName: {
              localPart: 'srsName'
            },
            type: 'attribute'
          }, {
            name: 'srsDimension',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'srsDimension'
            },
            type: 'attribute'
          }, {
            name: 'axisLabels',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            },
            attributeName: {
              localPart: 'axisLabels'
            },
            type: 'attribute'
          }, {
            name: 'uomLabels',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            },
            attributeName: {
              localPart: 'uomLabels'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'CovarianceMatrixType',
        baseTypeInfo: 'GML_3_1_1.AbstractPositionalAccuracyType',
        propertyInfos: [{
            type: 'element',
            name: 'unitOfMeasure',
            collection: true,
            elementName: 'unitOfMeasure',
            typeInfo: 'GML_3_1_1.UnitOfMeasureType'
          }, {
            type: 'element',
            name: 'includesElement',
            collection: true,
            elementName: 'includesElement',
            typeInfo: 'GML_3_1_1.CovarianceElementType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractPositionalAccuracyType',
        propertyInfos: [{
            type: 'element',
            name: 'measureDescription',
            elementName: 'measureDescription',
            typeInfo: 'GML_3_1_1.CodeType'
          }]
      }, {
        type: 'classInfo',
        localName: 'VerticalCSType',
        baseTypeInfo: 'GML_3_1_1.AbstractCoordinateSystemType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'ArrayAssociationType',
        propertyInfos: [{
            name: 'object',
            collection: true,
            elementName: '_Object',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'TemporalCSType',
        baseTypeInfo: 'GML_3_1_1.AbstractCoordinateSystemType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'VerticalDatumType',
        baseTypeInfo: 'GML_3_1_1.AbstractDatumType',
        propertyInfos: [{
            type: 'element',
            name: 'verticalDatumType',
            elementName: 'verticalDatumType',
            typeInfo: 'GML_3_1_1.VerticalDatumTypeType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ConversionType',
        baseTypeInfo: 'GML_3_1_1.AbstractGeneralConversionType',
        propertyInfos: [{
            type: 'element',
            name: 'usesMethod',
            elementName: 'usesMethod',
            typeInfo: 'GML_3_1_1.OperationMethodRefType'
          }, {
            type: 'element',
            name: 'usesValue',
            collection: true,
            elementName: 'usesValue',
            typeInfo: 'GML_3_1_1.ParameterValueType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractGeneralConversionType',
        baseTypeInfo: 'GML_3_1_1.AbstractCoordinateOperationType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'CoordinateSystemAxisRefType',
        propertyInfos: [{
            type: 'element',
            name: 'coordinateSystemAxis',
            elementName: 'CoordinateSystemAxis',
            typeInfo: 'GML_3_1_1.CoordinateSystemAxisType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'MultiSolidType',
        baseTypeInfo: 'GML_3_1_1.AbstractGeometricAggregateType',
        propertyInfos: [{
            type: 'element',
            name: 'solidMember',
            collection: true,
            elementName: 'solidMember',
            typeInfo: 'GML_3_1_1.SolidPropertyType'
          }, {
            type: 'element',
            name: 'solidMembers',
            elementName: 'solidMembers',
            typeInfo: 'GML_3_1_1.SolidArrayPropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'VerticalDatumTypeType',
        baseTypeInfo: 'GML_3_1_1.CodeType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'CylindricalCSType',
        baseTypeInfo: 'GML_3_1_1.AbstractCoordinateSystemType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'TopoPointPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'topoPoint',
            elementName: 'TopoPoint',
            typeInfo: 'GML_3_1_1.TopoPointType'
          }]
      }, {
        type: 'classInfo',
        localName: 'FileType',
        propertyInfos: [{
            type: 'element',
            name: 'rangeParameters',
            elementName: 'rangeParameters',
            typeInfo: 'GML_3_1_1.RangeParametersType'
          }, {
            type: 'element',
            name: 'fileName',
            elementName: 'fileName',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'fileStructure',
            elementName: 'fileStructure',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'mimeType',
            elementName: 'mimeType',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'compression',
            elementName: 'compression',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'PointArrayPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'point',
            collection: true,
            elementName: 'Point',
            typeInfo: 'GML_3_1_1.PointType'
          }]
      }, {
        type: 'classInfo',
        localName: 'DictionaryType',
        baseTypeInfo: 'GML_3_1_1.DefinitionType',
        propertyInfos: [{
            name: 'dictionaryEntryOrIndirectEntry',
            collection: true,
            elementTypeInfos: [{
                elementName: 'indirectEntry',
                typeInfo: 'GML_3_1_1.IndirectEntryType'
              }, {
                elementName: 'dictionaryEntry',
                typeInfo: 'GML_3_1_1.DictionaryEntryType'
              }],
            type: 'elementRefs'
          }]
      }, {
        type: 'classInfo',
        localName: 'IndexMapType',
        baseTypeInfo: 'GML_3_1_1.GridFunctionType',
        propertyInfos: [{
            type: 'element',
            name: 'lookUpTable',
            elementName: 'lookUpTable',
            typeInfo: {
              type: 'list',
              typeInfo: 'Integer'
            }
          }]
      }, {
        type: 'classInfo',
        localName: 'GridFunctionType',
        propertyInfos: [{
            type: 'element',
            name: 'sequenceRule',
            elementName: 'sequenceRule',
            typeInfo: 'GML_3_1_1.SequenceRuleType'
          }, {
            type: 'element',
            name: 'startPoint',
            elementName: 'startPoint',
            typeInfo: {
              type: 'list',
              typeInfo: 'Integer'
            }
          }]
      }, {
        type: 'classInfo',
        localName: 'ConventionalUnitType',
        baseTypeInfo: 'GML_3_1_1.UnitDefinitionType',
        propertyInfos: [{
            type: 'element',
            name: 'conversionToPreferredUnit',
            elementName: 'conversionToPreferredUnit',
            typeInfo: 'GML_3_1_1.ConversionToPreferredUnitType'
          }, {
            type: 'element',
            name: 'roughConversionToPreferredUnit',
            elementName: 'roughConversionToPreferredUnit',
            typeInfo: 'GML_3_1_1.ConversionToPreferredUnitType'
          }, {
            type: 'element',
            name: 'derivationUnitTerm',
            collection: true,
            elementName: 'derivationUnitTerm',
            typeInfo: 'GML_3_1_1.DerivationUnitTermType'
          }]
      }, {
        type: 'classInfo',
        localName: 'MeasureOrNullListType',
        propertyInfos: [{
            name: 'value',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            },
            type: 'value'
          }, {
            name: 'uom',
            typeInfo: 'String',
            attributeName: {
              localPart: 'uom'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'CoordinateSystemAxisType',
        baseTypeInfo: 'GML_3_1_1.CoordinateSystemAxisBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'axisID',
            collection: true,
            elementName: 'axisID',
            typeInfo: 'GML_3_1_1.IdentifierType'
          }, {
            type: 'element',
            name: 'remarks',
            elementName: 'remarks',
            typeInfo: 'GML_3_1_1.StringOrRefType'
          }, {
            type: 'element',
            name: 'axisAbbrev',
            elementName: 'axisAbbrev',
            typeInfo: 'GML_3_1_1.CodeType'
          }, {
            type: 'element',
            name: 'axisDirection',
            elementName: 'axisDirection',
            typeInfo: 'GML_3_1_1.CodeType'
          }, {
            name: 'uom',
            typeInfo: 'String',
            attributeName: {
              localPart: 'uom',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'MultiSolidPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'multiSolid',
            elementName: 'MultiSolid',
            typeInfo: 'GML_3_1_1.MultiSolidType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ReferenceType',
        propertyInfos: [{
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'CovarianceElementType',
        propertyInfos: [{
            type: 'element',
            name: 'rowIndex',
            elementName: 'rowIndex',
            typeInfo: 'Integer'
          }, {
            type: 'element',
            name: 'columnIndex',
            elementName: 'columnIndex',
            typeInfo: 'Integer'
          }, {
            type: 'element',
            name: 'covariance',
            elementName: 'covariance',
            typeInfo: 'Double'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractCurveType',
        baseTypeInfo: 'GML_3_1_1.AbstractGeometricPrimitiveType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'QuantityExtentType',
        baseTypeInfo: 'GML_3_1_1.MeasureOrNullListType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'TimeOrdinalEraType',
        baseTypeInfo: 'GML_3_1_1.DefinitionType',
        propertyInfos: [{
            type: 'element',
            name: 'relatedTime',
            collection: true,
            elementName: 'relatedTime',
            typeInfo: 'GML_3_1_1.RelatedTimeType'
          }, {
            type: 'element',
            name: 'start',
            elementName: 'start',
            typeInfo: 'GML_3_1_1.TimeNodePropertyType'
          }, {
            type: 'element',
            name: 'end',
            elementName: 'end',
            typeInfo: 'GML_3_1_1.TimeNodePropertyType'
          }, {
            type: 'element',
            name: 'extent',
            elementName: 'extent',
            typeInfo: 'GML_3_1_1.TimePeriodPropertyType'
          }, {
            type: 'element',
            name: 'member',
            collection: true,
            elementName: 'member',
            typeInfo: 'GML_3_1_1.TimeOrdinalEraPropertyType'
          }, {
            type: 'element',
            name: 'group',
            elementName: 'group',
            typeInfo: 'GML_3_1_1.ReferenceType'
          }]
      }, {
        type: 'classInfo',
        localName: 'TimePeriodType',
        baseTypeInfo: 'GML_3_1_1.AbstractTimeGeometricPrimitiveType',
        propertyInfos: [{
            type: 'element',
            name: 'beginPosition',
            elementName: 'beginPosition',
            typeInfo: 'GML_3_1_1.TimePositionType'
          }, {
            type: 'element',
            name: 'begin',
            elementName: 'begin',
            typeInfo: 'GML_3_1_1.TimeInstantPropertyType'
          }, {
            type: 'element',
            name: 'endPosition',
            elementName: 'endPosition',
            typeInfo: 'GML_3_1_1.TimePositionType'
          }, {
            type: 'element',
            name: 'end',
            elementName: 'end',
            typeInfo: 'GML_3_1_1.TimeInstantPropertyType'
          }, {
            type: 'element',
            name: 'duration',
            elementName: 'duration',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'timeInterval',
            elementName: 'timeInterval',
            typeInfo: 'GML_3_1_1.TimeIntervalLengthType'
          }]
      }, {
        type: 'classInfo',
        localName: 'RelativeInternalPositionalAccuracyType',
        baseTypeInfo: 'GML_3_1_1.AbstractPositionalAccuracyType',
        propertyInfos: [{
            type: 'element',
            name: 'result',
            elementName: 'result',
            typeInfo: 'GML_3_1_1.MeasureType'
          }]
      }, {
        type: 'classInfo',
        localName: 'DirectionPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'directionVector',
            elementName: 'DirectionVector',
            typeInfo: 'GML_3_1_1.DirectionVectorType'
          }, {
            type: 'element',
            name: 'compassPoint',
            elementName: 'CompassPoint',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'directionKeyword',
            elementName: 'DirectionKeyword',
            typeInfo: 'GML_3_1_1.CodeType'
          }, {
            type: 'element',
            name: 'directionString',
            elementName: 'DirectionString',
            typeInfo: 'GML_3_1_1.StringOrRefType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'EngineeringDatumRefType',
        propertyInfos: [{
            type: 'element',
            name: 'engineeringDatum',
            elementName: 'EngineeringDatum',
            typeInfo: 'GML_3_1_1.EngineeringDatumType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'OperationParameterGroupType',
        baseTypeInfo: 'GML_3_1_1.OperationParameterGroupBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'groupID',
            collection: true,
            elementName: 'groupID',
            typeInfo: 'GML_3_1_1.IdentifierType'
          }, {
            type: 'element',
            name: 'remarks',
            elementName: 'remarks',
            typeInfo: 'GML_3_1_1.StringOrRefType'
          }, {
            type: 'element',
            name: 'maximumOccurs',
            elementName: 'maximumOccurs',
            typeInfo: 'Integer'
          }, {
            type: 'element',
            name: 'includesParameter',
            collection: true,
            elementName: 'includesParameter',
            typeInfo: 'GML_3_1_1.AbstractGeneralOperationParameterRefType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractGeneralOperationParameterType',
        baseTypeInfo: 'GML_3_1_1.DefinitionType',
        propertyInfos: [{
            type: 'element',
            name: 'minimumOccurs',
            elementName: 'minimumOccurs',
            typeInfo: 'Integer'
          }]
      }, {
        type: 'classInfo',
        localName: 'PointType',
        baseTypeInfo: 'GML_3_1_1.AbstractGeometricPrimitiveType',
        propertyInfos: [{
            type: 'element',
            name: 'pos',
            elementName: 'pos',
            typeInfo: 'GML_3_1_1.DirectPositionType'
          }, {
            type: 'element',
            name: 'coordinates',
            elementName: 'coordinates',
            typeInfo: 'GML_3_1_1.CoordinatesType'
          }, {
            type: 'element',
            name: 'coord',
            elementName: 'coord',
            typeInfo: 'GML_3_1_1.CoordType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ArrayType',
        baseTypeInfo: 'GML_3_1_1.AbstractGMLType',
        propertyInfos: [{
            type: 'element',
            name: 'members',
            elementName: 'members',
            typeInfo: 'GML_3_1_1.ArrayAssociationType'
          }]
      }, {
        type: 'classInfo',
        localName: 'CodeOrNullListType',
        propertyInfos: [{
            name: 'value',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            },
            type: 'value'
          }, {
            name: 'codeSpace',
            typeInfo: 'String',
            attributeName: {
              localPart: 'codeSpace'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'SingleOperationRefType',
        propertyInfos: [{
            name: 'singleOperation',
            elementName: '_SingleOperation',
            typeInfo: 'GML_3_1_1.AbstractCoordinateOperationType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'MultiGeometryType',
        baseTypeInfo: 'GML_3_1_1.AbstractGeometricAggregateType',
        propertyInfos: [{
            type: 'element',
            name: 'geometryMember',
            collection: true,
            elementName: 'geometryMember',
            typeInfo: 'GML_3_1_1.GeometryPropertyType'
          }, {
            type: 'element',
            name: 'geometryMembers',
            elementName: 'geometryMembers',
            typeInfo: 'GML_3_1_1.GeometryArrayPropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'EdgeType',
        baseTypeInfo: 'GML_3_1_1.AbstractTopoPrimitiveType',
        propertyInfos: [{
            type: 'element',
            name: 'directedNode',
            collection: true,
            elementName: 'directedNode',
            typeInfo: 'GML_3_1_1.DirectedNodePropertyType'
          }, {
            type: 'element',
            name: 'directedFace',
            collection: true,
            elementName: 'directedFace',
            typeInfo: 'GML_3_1_1.DirectedFacePropertyType'
          }, {
            type: 'element',
            name: 'curveProperty',
            elementName: 'curveProperty',
            typeInfo: 'GML_3_1_1.CurvePropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'VerticalDatumRefType',
        propertyInfos: [{
            type: 'element',
            name: 'verticalDatum',
            elementName: 'VerticalDatum',
            typeInfo: 'GML_3_1_1.VerticalDatumType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ConcatenatedOperationRefType',
        propertyInfos: [{
            type: 'element',
            name: 'concatenatedOperation',
            elementName: 'ConcatenatedOperation',
            typeInfo: 'GML_3_1_1.ConcatenatedOperationType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'OperationRefType',
        propertyInfos: [{
            name: 'operation',
            elementName: '_Operation',
            typeInfo: 'GML_3_1_1.AbstractCoordinateOperationType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'NodeType',
        baseTypeInfo: 'GML_3_1_1.AbstractTopoPrimitiveType',
        propertyInfos: [{
            type: 'element',
            name: 'directedEdge',
            collection: true,
            elementName: 'directedEdge',
            typeInfo: 'GML_3_1_1.DirectedEdgePropertyType'
          }, {
            type: 'element',
            name: 'pointProperty',
            elementName: 'pointProperty',
            typeInfo: 'GML_3_1_1.PointPropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'OffsetCurveType',
        baseTypeInfo: 'GML_3_1_1.AbstractCurveSegmentType',
        propertyInfos: [{
            type: 'element',
            name: 'offsetBase',
            elementName: 'offsetBase',
            typeInfo: 'GML_3_1_1.CurvePropertyType'
          }, {
            type: 'element',
            name: 'distance',
            elementName: 'distance',
            typeInfo: 'GML_3_1_1.LengthType'
          }, {
            type: 'element',
            name: 'refDirection',
            elementName: 'refDirection',
            typeInfo: 'GML_3_1_1.VectorType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ValuePropertyType',
        propertyInfos: [{
            type: 'element',
            name: '_boolean',
            elementName: 'Boolean',
            typeInfo: 'Boolean'
          }, {
            type: 'element',
            name: 'category',
            elementName: 'Category',
            typeInfo: 'GML_3_1_1.CodeType'
          }, {
            type: 'element',
            name: 'quantity',
            elementName: 'Quantity',
            typeInfo: 'GML_3_1_1.MeasureType'
          }, {
            type: 'element',
            name: 'count',
            elementName: 'Count',
            typeInfo: 'Integer'
          }, {
            type: 'element',
            name: 'booleanList',
            elementName: 'BooleanList',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            }
          }, {
            type: 'element',
            name: 'categoryList',
            elementName: 'CategoryList',
            typeInfo: 'GML_3_1_1.CodeOrNullListType'
          }, {
            type: 'element',
            name: 'quantityList',
            elementName: 'QuantityList',
            typeInfo: 'GML_3_1_1.MeasureOrNullListType'
          }, {
            type: 'element',
            name: 'countList',
            elementName: 'CountList',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            }
          }, {
            type: 'element',
            name: 'categoryExtent',
            elementName: 'CategoryExtent',
            typeInfo: 'GML_3_1_1.CategoryExtentType'
          }, {
            type: 'element',
            name: 'quantityExtent',
            elementName: 'QuantityExtent',
            typeInfo: 'GML_3_1_1.QuantityExtentType'
          }, {
            type: 'element',
            name: 'countExtent',
            elementName: 'CountExtent',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            }
          }, {
            name: 'compositeValue',
            elementName: 'CompositeValue',
            typeInfo: 'GML_3_1_1.CompositeValueType',
            type: 'elementRef'
          }, {
            name: 'object',
            elementName: '_Object',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: '_null',
            elementName: 'Null',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            }
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'LabelStylePropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'labelStyle',
            elementName: 'LabelStyle',
            typeInfo: 'GML_3_1_1.LabelStyleType'
          }, {
            name: 'about',
            typeInfo: 'String',
            attributeName: {
              localPart: 'about'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TopoComplexType',
        baseTypeInfo: 'GML_3_1_1.AbstractTopologyType',
        propertyInfos: [{
            type: 'element',
            name: 'maximalComplex',
            elementName: 'maximalComplex',
            typeInfo: 'GML_3_1_1.TopoComplexMemberType'
          }, {
            type: 'element',
            name: 'superComplex',
            collection: true,
            elementName: 'superComplex',
            typeInfo: 'GML_3_1_1.TopoComplexMemberType'
          }, {
            type: 'element',
            name: 'subComplex',
            collection: true,
            elementName: 'subComplex',
            typeInfo: 'GML_3_1_1.TopoComplexMemberType'
          }, {
            type: 'element',
            name: 'topoPrimitiveMember',
            collection: true,
            elementName: 'topoPrimitiveMember',
            typeInfo: 'GML_3_1_1.TopoPrimitiveMemberType'
          }, {
            type: 'element',
            name: 'topoPrimitiveMembers',
            elementName: 'topoPrimitiveMembers',
            typeInfo: 'GML_3_1_1.TopoPrimitiveArrayAssociationType'
          }, {
            name: 'isMaximal',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'isMaximal'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ParameterValueGroupType',
        baseTypeInfo: 'GML_3_1_1.AbstractGeneralParameterValueType',
        propertyInfos: [{
            type: 'element',
            name: 'includesValue',
            collection: true,
            elementName: 'includesValue',
            typeInfo: 'GML_3_1_1.AbstractGeneralParameterValueType'
          }, {
            type: 'element',
            name: 'valuesOfGroup',
            elementName: 'valuesOfGroup',
            typeInfo: 'GML_3_1_1.OperationParameterGroupRefType'
          }]
      }, {
        type: 'classInfo',
        localName: 'DerivationUnitTermType',
        baseTypeInfo: 'GML_3_1_1.UnitOfMeasureType',
        propertyInfos: [{
            name: 'exponent',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'exponent'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ProjectedCRSRefType',
        propertyInfos: [{
            type: 'element',
            name: 'projectedCRS',
            elementName: 'ProjectedCRS',
            typeInfo: 'GML_3_1_1.ProjectedCRSType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ImageCRSType',
        baseTypeInfo: 'GML_3_1_1.AbstractReferenceSystemType',
        propertyInfos: [{
            type: 'element',
            name: 'usesCartesianCS',
            elementName: 'usesCartesianCS',
            typeInfo: 'GML_3_1_1.CartesianCSRefType'
          }, {
            type: 'element',
            name: 'usesObliqueCartesianCS',
            elementName: 'usesObliqueCartesianCS',
            typeInfo: 'GML_3_1_1.ObliqueCartesianCSRefType'
          }, {
            type: 'element',
            name: 'usesImageDatum',
            elementName: 'usesImageDatum',
            typeInfo: 'GML_3_1_1.ImageDatumRefType'
          }]
      }, {
        type: 'classInfo',
        localName: 'SecondDefiningParameterType',
        propertyInfos: [{
            type: 'element',
            name: 'inverseFlattening',
            elementName: 'inverseFlattening',
            typeInfo: 'GML_3_1_1.MeasureType'
          }, {
            type: 'element',
            name: 'semiMinorAxis',
            elementName: 'semiMinorAxis',
            typeInfo: 'GML_3_1_1.MeasureType'
          }, {
            type: 'element',
            name: 'isSphere',
            elementName: 'isSphere',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'MultiSurfaceType',
        baseTypeInfo: 'GML_3_1_1.AbstractGeometricAggregateType',
        propertyInfos: [{
            type: 'element',
            name: 'surfaceMember',
            collection: true,
            elementName: 'surfaceMember',
            typeInfo: 'GML_3_1_1.SurfacePropertyType'
          }, {
            type: 'element',
            name: 'surfaceMembers',
            elementName: 'surfaceMembers',
            typeInfo: 'GML_3_1_1.SurfaceArrayPropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'DictionaryEntryType',
        propertyInfos: [{
            name: 'definition',
            elementName: 'Definition',
            typeInfo: 'GML_3_1_1.DefinitionType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TimeEdgeType',
        baseTypeInfo: 'GML_3_1_1.AbstractTimeTopologyPrimitiveType',
        propertyInfos: [{
            type: 'element',
            name: 'start',
            elementName: 'start',
            typeInfo: 'GML_3_1_1.TimeNodePropertyType'
          }, {
            type: 'element',
            name: 'end',
            elementName: 'end',
            typeInfo: 'GML_3_1_1.TimeNodePropertyType'
          }, {
            type: 'element',
            name: 'extent',
            elementName: 'extent',
            typeInfo: 'GML_3_1_1.TimePeriodPropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'SolidType',
        baseTypeInfo: 'GML_3_1_1.AbstractSolidType',
        propertyInfos: [{
            type: 'element',
            name: 'exterior',
            elementName: 'exterior',
            typeInfo: 'GML_3_1_1.SurfacePropertyType'
          }, {
            type: 'element',
            name: 'interior',
            collection: true,
            elementName: 'interior',
            typeInfo: 'GML_3_1_1.SurfacePropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'GraphStylePropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'graphStyle',
            elementName: 'GraphStyle',
            typeInfo: 'GML_3_1_1.GraphStyleType'
          }, {
            name: 'about',
            typeInfo: 'String',
            attributeName: {
              localPart: 'about'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TimeCalendarEraType',
        baseTypeInfo: 'GML_3_1_1.DefinitionType',
        propertyInfos: [{
            type: 'element',
            name: 'referenceEvent',
            elementName: 'referenceEvent',
            typeInfo: 'GML_3_1_1.StringOrRefType'
          }, {
            type: 'element',
            name: 'referenceDate',
            elementName: 'referenceDate',
            typeInfo: 'Calendar'
          }, {
            type: 'element',
            name: 'julianReference',
            elementName: 'julianReference',
            typeInfo: 'Decimal'
          }, {
            type: 'element',
            name: 'epochOfUse',
            elementName: 'epochOfUse',
            typeInfo: 'GML_3_1_1.TimePeriodPropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'SphericalCSType',
        baseTypeInfo: 'GML_3_1_1.AbstractCoordinateSystemType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'DirectPositionType',
        propertyInfos: [{
            name: 'value',
            typeInfo: {
              type: 'list',
              typeInfo: 'Double'
            },
            type: 'value'
          }, {
            name: 'srsName',
            typeInfo: 'String',
            attributeName: {
              localPart: 'srsName'
            },
            type: 'attribute'
          }, {
            name: 'srsDimension',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'srsDimension'
            },
            type: 'attribute'
          }, {
            name: 'axisLabels',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            },
            attributeName: {
              localPart: 'axisLabels'
            },
            type: 'attribute'
          }, {
            name: 'uomLabels',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            },
            attributeName: {
              localPart: 'uomLabels'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'MultiPointCoverageType',
        baseTypeInfo: 'GML_3_1_1.AbstractDiscreteCoverageType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'VectorType',
        propertyInfos: [{
            name: 'value',
            typeInfo: {
              type: 'list',
              typeInfo: 'Double'
            },
            type: 'value'
          }, {
            name: 'srsName',
            typeInfo: 'String',
            attributeName: {
              localPart: 'srsName'
            },
            type: 'attribute'
          }, {
            name: 'srsDimension',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'srsDimension'
            },
            type: 'attribute'
          }, {
            name: 'axisLabels',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            },
            attributeName: {
              localPart: 'axisLabels'
            },
            type: 'attribute'
          }, {
            name: 'uomLabels',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            },
            attributeName: {
              localPart: 'uomLabels'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'FaceType',
        baseTypeInfo: 'GML_3_1_1.AbstractTopoPrimitiveType',
        propertyInfos: [{
            type: 'element',
            name: 'directedEdge',
            collection: true,
            elementName: 'directedEdge',
            typeInfo: 'GML_3_1_1.DirectedEdgePropertyType'
          }, {
            type: 'element',
            name: 'directedTopoSolid',
            collection: true,
            elementName: 'directedTopoSolid',
            typeInfo: 'GML_3_1_1.DirectedTopoSolidPropertyType'
          }, {
            type: 'element',
            name: 'surfaceProperty',
            elementName: 'surfaceProperty',
            typeInfo: 'GML_3_1_1.SurfacePropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'DatumRefType',
        propertyInfos: [{
            name: 'datum',
            elementName: '_Datum',
            typeInfo: 'GML_3_1_1.AbstractDatumType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'CoordinatesType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'String',
            type: 'value'
          }, {
            name: 'decimal',
            typeInfo: 'String',
            attributeName: {
              localPart: 'decimal'
            },
            type: 'attribute'
          }, {
            name: 'cs',
            typeInfo: 'String',
            attributeName: {
              localPart: 'cs'
            },
            type: 'attribute'
          }, {
            name: 'ts',
            typeInfo: 'String',
            attributeName: {
              localPart: 'ts'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'GeodeticDatumType',
        baseTypeInfo: 'GML_3_1_1.AbstractDatumType',
        propertyInfos: [{
            type: 'element',
            name: 'usesPrimeMeridian',
            elementName: 'usesPrimeMeridian',
            typeInfo: 'GML_3_1_1.PrimeMeridianRefType'
          }, {
            type: 'element',
            name: 'usesEllipsoid',
            elementName: 'usesEllipsoid',
            typeInfo: 'GML_3_1_1.EllipsoidRefType'
          }]
      }, {
        type: 'classInfo',
        localName: 'RingType',
        baseTypeInfo: 'GML_3_1_1.AbstractRingType',
        propertyInfos: [{
            type: 'element',
            name: 'curveMember',
            collection: true,
            elementName: 'curveMember',
            typeInfo: 'GML_3_1_1.CurvePropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'TemporalCRSRefType',
        propertyInfos: [{
            type: 'element',
            name: 'temporalCRS',
            elementName: 'TemporalCRS',
            typeInfo: 'GML_3_1_1.TemporalCRSType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ConcatenatedOperationType',
        baseTypeInfo: 'GML_3_1_1.AbstractCoordinateOperationType',
        propertyInfos: [{
            type: 'element',
            name: 'usesSingleOperation',
            collection: true,
            elementName: 'usesSingleOperation',
            typeInfo: 'GML_3_1_1.SingleOperationRefType'
          }]
      }, {
        type: 'classInfo',
        localName: 'LineStringPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'lineString',
            elementName: 'LineString',
            typeInfo: 'GML_3_1_1.LineStringType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TopoCurvePropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'topoCurve',
            elementName: 'TopoCurve',
            typeInfo: 'GML_3_1_1.TopoCurveType'
          }]
      }, {
        type: 'classInfo',
        localName: 'SymbolType',
        propertyInfos: [{
            name: 'any',
            collection: true,
            allowDom: true,
            type: 'anyElement'
          }, {
            name: 'symbolType',
            typeInfo: 'String',
            attributeName: {
              localPart: 'symbolType'
            },
            type: 'attribute'
          }, {
            name: 'transform',
            typeInfo: 'String',
            attributeName: {
              localPart: 'transform',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'about',
            typeInfo: 'String',
            attributeName: {
              localPart: 'about'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'MultiPointDomainType',
        baseTypeInfo: 'GML_3_1_1.DomainSetType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'TimeNodeType',
        baseTypeInfo: 'GML_3_1_1.AbstractTimeTopologyPrimitiveType',
        propertyInfos: [{
            type: 'element',
            name: 'previousEdge',
            collection: true,
            elementName: 'previousEdge',
            typeInfo: 'GML_3_1_1.TimeEdgePropertyType'
          }, {
            type: 'element',
            name: 'nextEdge',
            collection: true,
            elementName: 'nextEdge',
            typeInfo: 'GML_3_1_1.TimeEdgePropertyType'
          }, {
            type: 'element',
            name: 'position',
            elementName: 'position',
            typeInfo: 'GML_3_1_1.TimeInstantPropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ArcByBulgeType',
        baseTypeInfo: 'GML_3_1_1.ArcStringByBulgeType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'ArcStringByBulgeType',
        baseTypeInfo: 'GML_3_1_1.AbstractCurveSegmentType',
        propertyInfos: [{
            name: 'posOrPointPropertyOrPointRep',
            collection: true,
            elementTypeInfos: [{
                elementName: 'pointProperty',
                typeInfo: 'GML_3_1_1.PointPropertyType'
              }, {
                elementName: 'pointRep',
                typeInfo: 'GML_3_1_1.PointPropertyType'
              }, {
                elementName: 'pos',
                typeInfo: 'GML_3_1_1.DirectPositionType'
              }],
            type: 'elementRefs'
          }, {
            type: 'element',
            name: 'posList',
            elementName: 'posList',
            typeInfo: 'GML_3_1_1.DirectPositionListType'
          }, {
            type: 'element',
            name: 'coordinates',
            elementName: 'coordinates',
            typeInfo: 'GML_3_1_1.CoordinatesType'
          }, {
            type: 'element',
            name: 'bulge',
            collection: true,
            elementName: 'bulge',
            typeInfo: 'Double'
          }, {
            type: 'element',
            name: 'normal',
            collection: true,
            elementName: 'normal',
            typeInfo: 'GML_3_1_1.VectorType'
          }, {
            name: 'interpolation',
            typeInfo: 'String',
            attributeName: {
              localPart: 'interpolation'
            },
            type: 'attribute'
          }, {
            name: 'numArc',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'numArc'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractMetaDataType',
        propertyInfos: [{
            name: 'content',
            typeInfo: 'String',
            type: 'value'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'id',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'DerivedUnitType',
        baseTypeInfo: 'GML_3_1_1.UnitDefinitionType',
        propertyInfos: [{
            type: 'element',
            name: 'derivationUnitTerm',
            collection: true,
            elementName: 'derivationUnitTerm',
            typeInfo: 'GML_3_1_1.DerivationUnitTermType'
          }]
      }, {
        type: 'classInfo',
        localName: 'EllipsoidRefType',
        propertyInfos: [{
            type: 'element',
            name: 'ellipsoid',
            elementName: 'Ellipsoid',
            typeInfo: 'GML_3_1_1.EllipsoidType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AffinePlacementType',
        propertyInfos: [{
            type: 'element',
            name: 'location',
            elementName: 'location',
            typeInfo: 'GML_3_1_1.DirectPositionType'
          }, {
            type: 'element',
            name: 'refDirection',
            collection: true,
            elementName: 'refDirection',
            typeInfo: 'GML_3_1_1.VectorType'
          }, {
            type: 'element',
            name: 'inDimension',
            elementName: 'inDimension',
            typeInfo: 'Integer'
          }, {
            type: 'element',
            name: 'outDimension',
            elementName: 'outDimension',
            typeInfo: 'Integer'
          }]
      }, {
        type: 'classInfo',
        localName: 'DerivedCRSTypeType',
        baseTypeInfo: 'GML_3_1_1.CodeType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'PolygonType',
        baseTypeInfo: 'GML_3_1_1.AbstractSurfaceType',
        propertyInfos: [{
            name: 'exterior',
            elementName: 'exterior',
            typeInfo: 'GML_3_1_1.AbstractRingPropertyType',
            type: 'elementRef'
          }, {
            name: 'interior',
            collection: true,
            elementName: 'interior',
            typeInfo: 'GML_3_1_1.AbstractRingPropertyType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'OperationParameterType',
        baseTypeInfo: 'GML_3_1_1.OperationParameterBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'parameterID',
            collection: true,
            elementName: 'parameterID',
            typeInfo: 'GML_3_1_1.IdentifierType'
          }, {
            type: 'element',
            name: 'remarks',
            elementName: 'remarks',
            typeInfo: 'GML_3_1_1.StringOrRefType'
          }]
      }, {
        type: 'classInfo',
        localName: 'TemporalDatumType',
        baseTypeInfo: 'GML_3_1_1.TemporalDatumBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'origin',
            elementName: 'origin',
            typeInfo: 'Calendar'
          }]
      }, {
        type: 'classInfo',
        localName: 'EnvelopeWithTimePeriodType',
        baseTypeInfo: 'GML_3_1_1.EnvelopeType',
        propertyInfos: [{
            type: 'element',
            name: 'timePosition',
            collection: true,
            elementName: 'timePosition',
            typeInfo: 'GML_3_1_1.TimePositionType'
          }, {
            name: 'frame',
            typeInfo: 'String',
            attributeName: {
              localPart: 'frame'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'MetaDataPropertyType',
        propertyInfos: [{
            name: 'any',
            allowDom: true,
            allowTypedObject: true,
            type: 'anyElement'
          }, {
            name: 'about',
            typeInfo: 'String',
            attributeName: {
              localPart: 'about'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'CompositeSurfaceType',
        baseTypeInfo: 'GML_3_1_1.AbstractSurfaceType',
        propertyInfos: [{
            type: 'element',
            name: 'surfaceMember',
            collection: true,
            elementName: 'surfaceMember',
            typeInfo: 'GML_3_1_1.SurfacePropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ObliqueCartesianCSType',
        baseTypeInfo: 'GML_3_1_1.AbstractCoordinateSystemType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'DataBlockType',
        propertyInfos: [{
            type: 'element',
            name: 'rangeParameters',
            elementName: 'rangeParameters',
            typeInfo: 'GML_3_1_1.RangeParametersType'
          }, {
            type: 'element',
            name: 'tupleList',
            elementName: 'tupleList',
            typeInfo: 'GML_3_1_1.CoordinatesType'
          }, {
            type: 'element',
            name: 'doubleOrNullTupleList',
            elementName: 'doubleOrNullTupleList',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            }
          }]
      }, {
        type: 'classInfo',
        localName: 'GeneralTransformationRefType',
        propertyInfos: [{
            name: 'generalTransformation',
            elementName: '_GeneralTransformation',
            typeInfo: 'GML_3_1_1.AbstractGeneralTransformationType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'RectifiedGridCoverageType',
        baseTypeInfo: 'GML_3_1_1.AbstractDiscreteCoverageType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'TimeCalendarType',
        baseTypeInfo: 'GML_3_1_1.AbstractTimeReferenceSystemType',
        propertyInfos: [{
            type: 'element',
            name: 'referenceFrame',
            collection: true,
            elementName: 'referenceFrame',
            typeInfo: 'GML_3_1_1.TimeCalendarEraPropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'TimeTopologyComplexType',
        baseTypeInfo: 'GML_3_1_1.AbstractTimeComplexType',
        propertyInfos: [{
            type: 'element',
            name: 'primitive',
            collection: true,
            elementName: 'primitive',
            typeInfo: 'GML_3_1_1.TimeTopologyPrimitivePropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractTimeComplexType',
        baseTypeInfo: 'GML_3_1_1.AbstractTimeObjectType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'TransformationRefType',
        propertyInfos: [{
            type: 'element',
            name: 'transformation',
            elementName: 'Transformation',
            typeInfo: 'GML_3_1_1.TransformationType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'RangeParametersType',
        propertyInfos: [{
            type: 'element',
            name: '_boolean',
            elementName: 'Boolean',
            typeInfo: 'Boolean'
          }, {
            type: 'element',
            name: 'category',
            elementName: 'Category',
            typeInfo: 'GML_3_1_1.CodeType'
          }, {
            type: 'element',
            name: 'quantity',
            elementName: 'Quantity',
            typeInfo: 'GML_3_1_1.MeasureType'
          }, {
            type: 'element',
            name: 'count',
            elementName: 'Count',
            typeInfo: 'Integer'
          }, {
            type: 'element',
            name: 'booleanList',
            elementName: 'BooleanList',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            }
          }, {
            type: 'element',
            name: 'categoryList',
            elementName: 'CategoryList',
            typeInfo: 'GML_3_1_1.CodeOrNullListType'
          }, {
            type: 'element',
            name: 'quantityList',
            elementName: 'QuantityList',
            typeInfo: 'GML_3_1_1.MeasureOrNullListType'
          }, {
            type: 'element',
            name: 'countList',
            elementName: 'CountList',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            }
          }, {
            type: 'element',
            name: 'categoryExtent',
            elementName: 'CategoryExtent',
            typeInfo: 'GML_3_1_1.CategoryExtentType'
          }, {
            type: 'element',
            name: 'quantityExtent',
            elementName: 'QuantityExtent',
            typeInfo: 'GML_3_1_1.QuantityExtentType'
          }, {
            type: 'element',
            name: 'countExtent',
            elementName: 'CountExtent',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            }
          }, {
            name: 'compositeValue',
            elementName: 'CompositeValue',
            typeInfo: 'GML_3_1_1.CompositeValueType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'LineStringType',
        baseTypeInfo: 'GML_3_1_1.AbstractCurveType',
        propertyInfos: [{
            name: 'posOrPointPropertyOrPointRep',
            collection: true,
            elementTypeInfos: [{
                elementName: 'pointProperty',
                typeInfo: 'GML_3_1_1.PointPropertyType'
              }, {
                elementName: 'pointRep',
                typeInfo: 'GML_3_1_1.PointPropertyType'
              }, {
                elementName: 'pos',
                typeInfo: 'GML_3_1_1.DirectPositionType'
              }, {
                elementName: 'coord',
                typeInfo: 'GML_3_1_1.CoordType'
              }],
            type: 'elementRefs'
          }, {
            type: 'element',
            name: 'posList',
            elementName: 'posList',
            typeInfo: 'GML_3_1_1.DirectPositionListType'
          }, {
            type: 'element',
            name: 'coordinates',
            elementName: 'coordinates',
            typeInfo: 'GML_3_1_1.CoordinatesType'
          }]
      }, {
        type: 'classInfo',
        localName: 'PolygonPatchType',
        baseTypeInfo: 'GML_3_1_1.AbstractSurfacePatchType',
        propertyInfos: [{
            name: 'exterior',
            elementName: 'exterior',
            typeInfo: 'GML_3_1_1.AbstractRingPropertyType',
            type: 'elementRef'
          }, {
            name: 'interior',
            collection: true,
            elementName: 'interior',
            typeInfo: 'GML_3_1_1.AbstractRingPropertyType',
            type: 'elementRef'
          }, {
            name: 'interpolation',
            typeInfo: 'String',
            attributeName: {
              localPart: 'interpolation'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'RangeSetType',
        propertyInfos: [{
            type: 'element',
            name: 'valueArray',
            collection: true,
            elementName: 'ValueArray',
            typeInfo: 'GML_3_1_1.ValueArrayType'
          }, {
            name: 'scalarValueList',
            collection: true,
            elementTypeInfos: [{
                elementName: 'QuantityList',
                typeInfo: 'GML_3_1_1.MeasureOrNullListType'
              }, {
                elementName: 'BooleanList',
                typeInfo: {
                  type: 'list',
                  typeInfo: 'String'
                }
              }, {
                elementName: 'CategoryList',
                typeInfo: 'GML_3_1_1.CodeOrNullListType'
              }, {
                elementName: 'CountList',
                typeInfo: {
                  type: 'list',
                  typeInfo: 'String'
                }
              }],
            type: 'elementRefs'
          }, {
            type: 'element',
            name: 'dataBlock',
            elementName: 'DataBlock',
            typeInfo: 'GML_3_1_1.DataBlockType'
          }, {
            type: 'element',
            name: 'file',
            elementName: 'File',
            typeInfo: 'GML_3_1_1.FileType'
          }]
      }, {
        type: 'classInfo',
        localName: 'EllipsoidType',
        baseTypeInfo: 'GML_3_1_1.EllipsoidBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'ellipsoidID',
            collection: true,
            elementName: 'ellipsoidID',
            typeInfo: 'GML_3_1_1.IdentifierType'
          }, {
            type: 'element',
            name: 'remarks',
            elementName: 'remarks',
            typeInfo: 'GML_3_1_1.StringOrRefType'
          }, {
            type: 'element',
            name: 'semiMajorAxis',
            elementName: 'semiMajorAxis',
            typeInfo: 'GML_3_1_1.MeasureType'
          }, {
            type: 'element',
            name: 'secondDefiningParameter',
            elementName: 'secondDefiningParameter',
            typeInfo: 'GML_3_1_1.SecondDefiningParameterType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ContainerPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'face',
            elementName: 'Face',
            typeInfo: 'GML_3_1_1.FaceType'
          }, {
            type: 'element',
            name: 'topoSolid',
            elementName: 'TopoSolid',
            typeInfo: 'GML_3_1_1.TopoSolidType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'GraphStyleType',
        baseTypeInfo: 'GML_3_1_1.BaseStyleDescriptorType',
        propertyInfos: [{
            type: 'element',
            name: 'planar',
            elementName: 'planar',
            typeInfo: 'Boolean'
          }, {
            type: 'element',
            name: 'directed',
            elementName: 'directed',
            typeInfo: 'Boolean'
          }, {
            type: 'element',
            name: 'grid',
            elementName: 'grid',
            typeInfo: 'Boolean'
          }, {
            type: 'element',
            name: 'minDistance',
            elementName: 'minDistance',
            typeInfo: 'Double'
          }, {
            type: 'element',
            name: 'minAngle',
            elementName: 'minAngle',
            typeInfo: 'Double'
          }, {
            type: 'element',
            name: 'graphType',
            elementName: 'graphType',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'drawingType',
            elementName: 'drawingType',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'lineType',
            elementName: 'lineType',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'aestheticCriteria',
            collection: true,
            elementName: 'aestheticCriteria',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'GenericMetaDataType',
        baseTypeInfo: 'GML_3_1_1.AbstractMetaDataType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'TriangleType',
        baseTypeInfo: 'GML_3_1_1.AbstractSurfacePatchType',
        propertyInfos: [{
            name: 'exterior',
            elementName: 'exterior',
            typeInfo: 'GML_3_1_1.AbstractRingPropertyType',
            type: 'elementRef'
          }, {
            name: 'interpolation',
            typeInfo: 'String',
            attributeName: {
              localPart: 'interpolation'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'RectangleType',
        baseTypeInfo: 'GML_3_1_1.AbstractSurfacePatchType',
        propertyInfos: [{
            name: 'exterior',
            elementName: 'exterior',
            typeInfo: 'GML_3_1_1.AbstractRingPropertyType',
            type: 'elementRef'
          }, {
            name: 'interpolation',
            typeInfo: 'String',
            attributeName: {
              localPart: 'interpolation'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'DegreesType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'Int',
            type: 'value'
          }, {
            name: 'direction',
            typeInfo: 'String',
            attributeName: {
              localPart: 'direction'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'CartesianCSType',
        baseTypeInfo: 'GML_3_1_1.AbstractCoordinateSystemType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'AbsoluteExternalPositionalAccuracyType',
        baseTypeInfo: 'GML_3_1_1.AbstractPositionalAccuracyType',
        propertyInfos: [{
            type: 'element',
            name: 'result',
            elementName: 'result',
            typeInfo: 'GML_3_1_1.MeasureType'
          }]
      }, {
        type: 'classInfo',
        localName: 'CurveType',
        baseTypeInfo: 'GML_3_1_1.AbstractCurveType',
        propertyInfos: [{
            type: 'element',
            name: 'segments',
            elementName: 'segments',
            typeInfo: 'GML_3_1_1.CurveSegmentArrayPropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'FeatureStylePropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'featureStyle',
            elementName: 'FeatureStyle',
            typeInfo: 'GML_3_1_1.FeatureStyleType'
          }, {
            name: 'about',
            typeInfo: 'String',
            attributeName: {
              localPart: 'about'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'GridType',
        baseTypeInfo: 'GML_3_1_1.AbstractGeometryType',
        propertyInfos: [{
            type: 'element',
            name: 'limits',
            elementName: 'limits',
            typeInfo: 'GML_3_1_1.GridLimitsType'
          }, {
            type: 'element',
            name: 'axisName',
            collection: true,
            elementName: 'axisName',
            typeInfo: 'String'
          }, {
            name: 'dimension',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'dimension'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'IsolatedPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'node',
            elementName: 'Node',
            typeInfo: 'GML_3_1_1.NodeType'
          }, {
            type: 'element',
            name: 'edge',
            elementName: 'Edge',
            typeInfo: 'GML_3_1_1.EdgeType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'PassThroughOperationRefType',
        propertyInfos: [{
            type: 'element',
            name: 'passThroughOperation',
            elementName: 'PassThroughOperation',
            typeInfo: 'GML_3_1_1.PassThroughOperationType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'CoordType',
        propertyInfos: [{
            type: 'element',
            name: 'x',
            elementName: 'X',
            typeInfo: 'Decimal'
          }, {
            type: 'element',
            name: 'y',
            elementName: 'Y',
            typeInfo: 'Decimal'
          }, {
            type: 'element',
            name: 'z',
            elementName: 'Z',
            typeInfo: 'Decimal'
          }]
      }, {
        type: 'classInfo',
        localName: 'SphericalCSRefType',
        propertyInfos: [{
            type: 'element',
            name: 'sphericalCS',
            elementName: 'SphericalCS',
            typeInfo: 'GML_3_1_1.SphericalCSType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'GeographicCRSRefType',
        propertyInfos: [{
            type: 'element',
            name: 'geographicCRS',
            elementName: 'GeographicCRS',
            typeInfo: 'GML_3_1_1.GeographicCRSType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'GeocentricCRSType',
        baseTypeInfo: 'GML_3_1_1.AbstractReferenceSystemType',
        propertyInfos: [{
            type: 'element',
            name: 'usesCartesianCS',
            elementName: 'usesCartesianCS',
            typeInfo: 'GML_3_1_1.CartesianCSRefType'
          }, {
            type: 'element',
            name: 'usesSphericalCS',
            elementName: 'usesSphericalCS',
            typeInfo: 'GML_3_1_1.SphericalCSRefType'
          }, {
            type: 'element',
            name: 'usesGeodeticDatum',
            elementName: 'usesGeodeticDatum',
            typeInfo: 'GML_3_1_1.GeodeticDatumRefType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ExtentType',
        propertyInfos: [{
            type: 'element',
            name: 'description',
            elementName: 'description',
            typeInfo: 'GML_3_1_1.StringOrRefType'
          }, {
            type: 'element',
            name: 'boundingBox',
            collection: true,
            elementName: 'boundingBox',
            typeInfo: 'GML_3_1_1.EnvelopeType'
          }, {
            type: 'element',
            name: 'boundingPolygon',
            collection: true,
            elementName: 'boundingPolygon',
            typeInfo: 'GML_3_1_1.PolygonType'
          }, {
            type: 'element',
            name: 'verticalExtent',
            collection: true,
            elementName: 'verticalExtent',
            typeInfo: 'GML_3_1_1.EnvelopeType'
          }, {
            type: 'element',
            name: 'temporalExtent',
            collection: true,
            elementName: 'temporalExtent',
            typeInfo: 'GML_3_1_1.TimePeriodType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ConversionRefType',
        propertyInfos: [{
            type: 'element',
            name: 'conversion',
            elementName: 'Conversion',
            typeInfo: 'GML_3_1_1.ConversionType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ConeType',
        baseTypeInfo: 'GML_3_1_1.AbstractGriddedSurfaceType',
        propertyInfos: [{
            name: 'horizontalCurveType',
            typeInfo: 'String',
            attributeName: {
              localPart: 'horizontalCurveType'
            },
            type: 'attribute'
          }, {
            name: 'verticalCurveType',
            typeInfo: 'String',
            attributeName: {
              localPart: 'verticalCurveType'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'DefaultStylePropertyType',
        propertyInfos: [{
            name: 'style',
            elementName: '_Style',
            typeInfo: 'GML_3_1_1.AbstractStyleType',
            type: 'elementRef'
          }, {
            name: 'about',
            typeInfo: 'String',
            attributeName: {
              localPart: 'about'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'PolarCSType',
        baseTypeInfo: 'GML_3_1_1.AbstractCoordinateSystemType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'ProjectedCRSType',
        baseTypeInfo: 'GML_3_1_1.AbstractGeneralDerivedCRSType',
        propertyInfos: [{
            type: 'element',
            name: 'usesCartesianCS',
            elementName: 'usesCartesianCS',
            typeInfo: 'GML_3_1_1.CartesianCSRefType'
          }]
      }, {
        type: 'classInfo',
        localName: 'CoordinateOperationRefType',
        propertyInfos: [{
            name: 'coordinateOperation',
            elementName: '_CoordinateOperation',
            typeInfo: 'GML_3_1_1.AbstractCoordinateOperationType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'MultiPointType',
        baseTypeInfo: 'GML_3_1_1.AbstractGeometricAggregateType',
        propertyInfos: [{
            type: 'element',
            name: 'pointMember',
            collection: true,
            elementName: 'pointMember',
            typeInfo: 'GML_3_1_1.PointPropertyType'
          }, {
            type: 'element',
            name: 'pointMembers',
            elementName: 'pointMembers',
            typeInfo: 'GML_3_1_1.PointArrayPropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'TransformationType',
        baseTypeInfo: 'GML_3_1_1.AbstractGeneralTransformationType',
        propertyInfos: [{
            type: 'element',
            name: 'usesMethod',
            elementName: 'usesMethod',
            typeInfo: 'GML_3_1_1.OperationMethodRefType'
          }, {
            type: 'element',
            name: 'usesValue',
            collection: true,
            elementName: 'usesValue',
            typeInfo: 'GML_3_1_1.ParameterValueType'
          }]
      }, {
        type: 'classInfo',
        localName: 'OrientableSurfaceType',
        baseTypeInfo: 'GML_3_1_1.AbstractSurfaceType',
        propertyInfos: [{
            type: 'element',
            name: 'baseSurface',
            elementName: 'baseSurface',
            typeInfo: 'GML_3_1_1.SurfacePropertyType'
          }, {
            name: 'orientation',
            typeInfo: 'String',
            attributeName: {
              localPart: 'orientation'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TopoPrimitiveArrayAssociationType',
        propertyInfos: [{
            name: 'topoPrimitive',
            collection: true,
            elementName: '_TopoPrimitive',
            typeInfo: 'GML_3_1_1.AbstractTopoPrimitiveType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'DMSAngleType',
        propertyInfos: [{
            type: 'element',
            name: 'degrees',
            elementName: 'degrees',
            typeInfo: 'GML_3_1_1.DegreesType'
          }, {
            type: 'element',
            name: 'decimalMinutes',
            elementName: 'decimalMinutes',
            typeInfo: 'Decimal'
          }, {
            type: 'element',
            name: 'minutes',
            elementName: 'minutes',
            typeInfo: 'Int'
          }, {
            type: 'element',
            name: 'seconds',
            elementName: 'seconds',
            typeInfo: 'Decimal'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractFeatureCollectionType',
        baseTypeInfo: 'GML_3_1_1.AbstractFeatureType',
        propertyInfos: [{
            type: 'element',
            name: 'featureMember',
            collection: true,
            elementName: 'featureMember',
            typeInfo: 'GML_3_1_1.FeaturePropertyType'
          }, {
            type: 'element',
            name: 'featureMembers',
            elementName: 'featureMembers',
            typeInfo: 'GML_3_1_1.FeatureArrayPropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'MultiCurveDomainType',
        baseTypeInfo: 'GML_3_1_1.DomainSetType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'CubicSplineType',
        baseTypeInfo: 'GML_3_1_1.AbstractCurveSegmentType',
        propertyInfos: [{
            name: 'posOrPointPropertyOrPointRep',
            collection: true,
            elementTypeInfos: [{
                elementName: 'pointProperty',
                typeInfo: 'GML_3_1_1.PointPropertyType'
              }, {
                elementName: 'pointRep',
                typeInfo: 'GML_3_1_1.PointPropertyType'
              }, {
                elementName: 'pos',
                typeInfo: 'GML_3_1_1.DirectPositionType'
              }],
            type: 'elementRefs'
          }, {
            type: 'element',
            name: 'posList',
            elementName: 'posList',
            typeInfo: 'GML_3_1_1.DirectPositionListType'
          }, {
            type: 'element',
            name: 'coordinates',
            elementName: 'coordinates',
            typeInfo: 'GML_3_1_1.CoordinatesType'
          }, {
            type: 'element',
            name: 'vectorAtStart',
            elementName: 'vectorAtStart',
            typeInfo: 'GML_3_1_1.VectorType'
          }, {
            type: 'element',
            name: 'vectorAtEnd',
            elementName: 'vectorAtEnd',
            typeInfo: 'GML_3_1_1.VectorType'
          }, {
            name: 'interpolation',
            typeInfo: 'String',
            attributeName: {
              localPart: 'interpolation'
            },
            type: 'attribute'
          }, {
            name: 'degree',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'degree'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'CategoryExtentType',
        baseTypeInfo: 'GML_3_1_1.CodeOrNullListType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'HistoryPropertyType',
        propertyInfos: [{
            name: 'timeSlice',
            collection: true,
            elementName: '_TimeSlice',
            typeInfo: 'GML_3_1_1.AbstractTimeSliceType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'OrientableCurveType',
        baseTypeInfo: 'GML_3_1_1.AbstractCurveType',
        propertyInfos: [{
            type: 'element',
            name: 'baseCurve',
            elementName: 'baseCurve',
            typeInfo: 'GML_3_1_1.CurvePropertyType'
          }, {
            name: 'orientation',
            typeInfo: 'String',
            attributeName: {
              localPart: 'orientation'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'EngineeringDatumType',
        baseTypeInfo: 'GML_3_1_1.AbstractDatumType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'PixelInCellType',
        baseTypeInfo: 'GML_3_1_1.CodeType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'TopoSurfacePropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'topoSurface',
            elementName: 'TopoSurface',
            typeInfo: 'GML_3_1_1.TopoSurfaceType'
          }]
      }, {
        type: 'classInfo',
        localName: 'CompositeCurveType',
        baseTypeInfo: 'GML_3_1_1.AbstractCurveType',
        propertyInfos: [{
            type: 'element',
            name: 'curveMember',
            collection: true,
            elementName: 'curveMember',
            typeInfo: 'GML_3_1_1.CurvePropertyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'TrackType',
        baseTypeInfo: 'GML_3_1_1.HistoryPropertyType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'MultiCurveCoverageType',
        baseTypeInfo: 'GML_3_1_1.AbstractDiscreteCoverageType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'UserDefinedCSRefType',
        propertyInfos: [{
            type: 'element',
            name: 'userDefinedCS',
            elementName: 'UserDefinedCS',
            typeInfo: 'GML_3_1_1.UserDefinedCSType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'MultiGeometryPropertyType',
        propertyInfos: [{
            name: 'geometricAggregate',
            elementName: '_GeometricAggregate',
            typeInfo: 'GML_3_1_1.AbstractGeometricAggregateType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'MultiSolidDomainType',
        baseTypeInfo: 'GML_3_1_1.DomainSetType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'TimePositionType',
        propertyInfos: [{
            name: 'value',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            },
            type: 'value'
          }, {
            name: 'frame',
            typeInfo: 'String',
            attributeName: {
              localPart: 'frame'
            },
            type: 'attribute'
          }, {
            name: 'calendarEraName',
            typeInfo: 'String',
            attributeName: {
              localPart: 'calendarEraName'
            },
            type: 'attribute'
          }, {
            name: 'indeterminatePosition',
            typeInfo: 'String',
            attributeName: {
              localPart: 'indeterminatePosition'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'BagType',
        baseTypeInfo: 'GML_3_1_1.AbstractGMLType',
        propertyInfos: [{
            type: 'element',
            name: 'member',
            collection: true,
            elementName: 'member',
            typeInfo: 'GML_3_1_1.AssociationType'
          }, {
            type: 'element',
            name: 'members',
            elementName: 'members',
            typeInfo: 'GML_3_1_1.ArrayAssociationType'
          }]
      }, {
        type: 'classInfo',
        localName: 'PolarCSRefType',
        propertyInfos: [{
            type: 'element',
            name: 'polarCS',
            elementName: 'PolarCS',
            typeInfo: 'GML_3_1_1.PolarCSType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'FeatureCollectionType',
        baseTypeInfo: 'GML_3_1_1.AbstractFeatureCollectionType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'MeasureListType',
        propertyInfos: [{
            name: 'value',
            typeInfo: {
              type: 'list',
              typeInfo: 'Double'
            },
            type: 'value'
          }, {
            name: 'uom',
            typeInfo: 'String',
            attributeName: {
              localPart: 'uom'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ScaleType',
        baseTypeInfo: 'GML_3_1_1.MeasureType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'DynamicFeatureType',
        baseTypeInfo: 'GML_3_1_1.AbstractFeatureType',
        propertyInfos: [{
            type: 'element',
            name: 'validTime',
            elementName: 'validTime',
            typeInfo: 'GML_3_1_1.TimePrimitivePropertyType'
          }, {
            name: 'history',
            elementName: 'history',
            typeInfo: 'GML_3_1_1.HistoryPropertyType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'dataSource',
            elementName: 'dataSource',
            typeInfo: 'GML_3_1_1.StringOrRefType'
          }]
      }, {
        type: 'classInfo',
        localName: 'DynamicFeatureCollectionType',
        baseTypeInfo: 'GML_3_1_1.FeatureCollectionType',
        propertyInfos: [{
            type: 'element',
            name: 'validTime',
            elementName: 'validTime',
            typeInfo: 'GML_3_1_1.TimePrimitivePropertyType'
          }, {
            name: 'history',
            elementName: 'history',
            typeInfo: 'GML_3_1_1.HistoryPropertyType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'dataSource',
            elementName: 'dataSource',
            typeInfo: 'GML_3_1_1.StringOrRefType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractCoordinateOperationBaseType',
        baseTypeInfo: 'GML_3_1_1.DefinitionType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'TimeCalendarPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'timeCalendar',
            elementName: 'TimeCalendar',
            typeInfo: 'GML_3_1_1.TimeCalendarType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'CodeListType',
        propertyInfos: [{
            name: 'value',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            },
            type: 'value'
          }, {
            name: 'codeSpace',
            typeInfo: 'String',
            attributeName: {
              localPart: 'codeSpace'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AngleType',
        baseTypeInfo: 'GML_3_1_1.MeasureType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'MultiPolygonPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'multiPolygon',
            elementName: 'MultiPolygon',
            typeInfo: 'GML_3_1_1.MultiPolygonType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TimeOrdinalEraPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'timeOrdinalEra',
            elementName: 'TimeOrdinalEra',
            typeInfo: 'GML_3_1_1.TimeOrdinalEraType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'BaseStyleDescriptorType',
        baseTypeInfo: 'GML_3_1_1.AbstractGMLType',
        propertyInfos: [{
            type: 'element',
            name: 'spatialResolution',
            elementName: 'spatialResolution',
            typeInfo: 'GML_3_1_1.ScaleType'
          }, {
            type: 'element',
            name: 'styleVariation',
            collection: true,
            elementName: 'styleVariation',
            typeInfo: 'GML_3_1_1.StyleVariationType'
          }, {
            type: 'element',
            name: 'animate',
            collection: true,
            elementName: {
              localPart: 'animate',
              namespaceURI: 'http:\/\/www.w3.org\/2001\/SMIL20\/'
            },
            typeInfo: 'SMIL_2_0_Language.AnimateType'
          }, {
            type: 'element',
            name: 'animateMotion',
            collection: true,
            elementName: {
              localPart: 'animateMotion',
              namespaceURI: 'http:\/\/www.w3.org\/2001\/SMIL20\/'
            },
            typeInfo: 'SMIL_2_0_Language.AnimateMotionType'
          }, {
            type: 'element',
            name: 'animateColor',
            collection: true,
            elementName: {
              localPart: 'animateColor',
              namespaceURI: 'http:\/\/www.w3.org\/2001\/SMIL20\/'
            },
            typeInfo: 'SMIL_2_0_Language.AnimateColorType'
          }, {
            type: 'element',
            name: 'set',
            collection: true,
            elementName: {
              localPart: 'set',
              namespaceURI: 'http:\/\/www.w3.org\/2001\/SMIL20\/'
            },
            typeInfo: 'SMIL_2_0_Language.SetType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractCoordinateSystemBaseType',
        baseTypeInfo: 'GML_3_1_1.DefinitionType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'ScalarValuePropertyType',
        baseTypeInfo: 'GML_3_1_1.ValuePropertyType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'GridLimitsType',
        propertyInfos: [{
            type: 'element',
            name: 'gridEnvelope',
            elementName: 'GridEnvelope',
            typeInfo: 'GML_3_1_1.GridEnvelopeType'
          }]
      }, {
        type: 'classInfo',
        localName: 'GeometricComplexPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'geometricComplex',
            elementName: 'GeometricComplex',
            typeInfo: 'GML_3_1_1.GeometricComplexType'
          }, {
            type: 'element',
            name: 'compositeCurve',
            elementName: 'CompositeCurve',
            typeInfo: 'GML_3_1_1.CompositeCurveType'
          }, {
            type: 'element',
            name: 'compositeSurface',
            elementName: 'CompositeSurface',
            typeInfo: 'GML_3_1_1.CompositeSurfaceType'
          }, {
            type: 'element',
            name: 'compositeSolid',
            elementName: 'CompositeSolid',
            typeInfo: 'GML_3_1_1.CompositeSolidType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TimeClockPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'timeClock',
            elementName: 'TimeClock',
            typeInfo: 'GML_3_1_1.TimeClockType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'OperationParameterGroupBaseType',
        baseTypeInfo: 'GML_3_1_1.AbstractGeneralOperationParameterType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'AreaType',
        baseTypeInfo: 'GML_3_1_1.MeasureType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'CompositeSurfacePropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'compositeSurface',
            elementName: 'CompositeSurface',
            typeInfo: 'GML_3_1_1.CompositeSurfaceType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'LineStringSegmentArrayPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'lineStringSegment',
            collection: true,
            elementName: 'LineStringSegment',
            typeInfo: 'GML_3_1_1.LineStringSegmentType'
          }]
      }, {
        type: 'classInfo',
        localName: 'CoordinateSystemAxisBaseType',
        baseTypeInfo: 'GML_3_1_1.DefinitionType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'TimePeriodPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'timePeriod',
            elementName: 'TimePeriod',
            typeInfo: 'GML_3_1_1.TimePeriodType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TimeEdgePropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'timeEdge',
            elementName: 'TimeEdge',
            typeInfo: 'GML_3_1_1.TimeEdgeType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'BooleanPropertyType',
        baseTypeInfo: 'GML_3_1_1.ValuePropertyType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'TimeTopologyComplexPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'timeTopologyComplex',
            elementName: 'TimeTopologyComplex',
            typeInfo: 'GML_3_1_1.TimeTopologyComplexType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'RelatedTimeType',
        baseTypeInfo: 'GML_3_1_1.TimePrimitivePropertyType',
        propertyInfos: [{
            name: 'relativePosition',
            typeInfo: 'String',
            attributeName: {
              localPart: 'relativePosition'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'BoundedFeatureType',
        baseTypeInfo: 'GML_3_1_1.AbstractFeatureType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'LinearRingPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'linearRing',
            elementName: 'LinearRing',
            typeInfo: 'GML_3_1_1.LinearRingType'
          }]
      }, {
        type: 'classInfo',
        localName: 'SpeedType',
        baseTypeInfo: 'GML_3_1_1.MeasureType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'SequenceRuleType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'String',
            type: 'value'
          }, {
            name: 'order',
            typeInfo: 'String',
            attributeName: {
              localPart: 'order'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'CompositeCurvePropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'compositeCurve',
            elementName: 'CompositeCurve',
            typeInfo: 'GML_3_1_1.CompositeCurveType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TimeInstantPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'timeInstant',
            elementName: 'TimeInstant',
            typeInfo: 'GML_3_1_1.TimeInstantType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'CompositeSolidPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'compositeSolid',
            elementName: 'CompositeSolid',
            typeInfo: 'GML_3_1_1.CompositeSolidType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TimeCalendarEraPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'timeCalendarEra',
            elementName: 'TimeCalendarEra',
            typeInfo: 'GML_3_1_1.TimeCalendarEraType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'CategoryPropertyType',
        baseTypeInfo: 'GML_3_1_1.ValuePropertyType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'GridEnvelopeType',
        propertyInfos: [{
            type: 'element',
            name: 'low',
            elementName: 'low',
            typeInfo: {
              type: 'list',
              typeInfo: 'Integer'
            }
          }, {
            type: 'element',
            name: 'high',
            elementName: 'high',
            typeInfo: {
              type: 'list',
              typeInfo: 'Integer'
            }
          }]
      }, {
        type: 'classInfo',
        localName: 'StyleVariationType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'String',
            type: 'value'
          }, {
            name: 'styleProperty',
            typeInfo: 'String',
            attributeName: {
              localPart: 'styleProperty'
            },
            type: 'attribute'
          }, {
            name: 'featurePropertyRange',
            typeInfo: 'String',
            attributeName: {
              localPart: 'featurePropertyRange'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'GeometricPrimitivePropertyType',
        propertyInfos: [{
            name: 'geometricPrimitive',
            elementName: '_GeometricPrimitive',
            typeInfo: 'GML_3_1_1.AbstractGeometricPrimitiveType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'OperationMethodBaseType',
        baseTypeInfo: 'GML_3_1_1.DefinitionType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'TemporalDatumBaseType',
        baseTypeInfo: 'GML_3_1_1.AbstractDatumType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'EllipsoidBaseType',
        baseTypeInfo: 'GML_3_1_1.DefinitionType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'TimeNodePropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'timeNode',
            elementName: 'TimeNode',
            typeInfo: 'GML_3_1_1.TimeNodeType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractReferenceSystemBaseType',
        baseTypeInfo: 'GML_3_1_1.DefinitionType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'LabelType',
        propertyInfos: [{
            name: 'content',
            collection: true,
            mixed: true,
            elementName: 'LabelExpression',
            typeInfo: 'String',
            type: 'elementRef'
          }, {
            name: 'transform',
            typeInfo: 'String',
            attributeName: {
              localPart: 'transform',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'FormulaType',
        propertyInfos: [{
            type: 'element',
            name: 'a',
            elementName: 'a',
            typeInfo: 'Double'
          }, {
            type: 'element',
            name: 'b',
            elementName: 'b',
            typeInfo: 'Double'
          }, {
            type: 'element',
            name: 'c',
            elementName: 'c',
            typeInfo: 'Double'
          }, {
            type: 'element',
            name: 'd',
            elementName: 'd',
            typeInfo: 'Double'
          }]
      }, {
        type: 'classInfo',
        localName: 'RingPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'ring',
            elementName: 'Ring',
            typeInfo: 'GML_3_1_1.RingType'
          }]
      }, {
        type: 'classInfo',
        localName: 'MultiLineStringPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'multiLineString',
            elementName: 'MultiLineString',
            typeInfo: 'GML_3_1_1.MultiLineStringType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'GridLengthType',
        baseTypeInfo: 'GML_3_1_1.MeasureType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'LengthType',
        baseTypeInfo: 'GML_3_1_1.MeasureType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'AbstractDatumBaseType',
        baseTypeInfo: 'GML_3_1_1.DefinitionType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'TimeTopologyPrimitivePropertyType',
        propertyInfos: [{
            name: 'timeTopologyPrimitive',
            elementName: '_TimeTopologyPrimitive',
            typeInfo: 'GML_3_1_1.AbstractTimeTopologyPrimitiveType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'PrimeMeridianBaseType',
        baseTypeInfo: 'GML_3_1_1.DefinitionType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'KnotPropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'knot',
            elementName: 'Knot',
            typeInfo: 'GML_3_1_1.KnotType'
          }]
      }, {
        type: 'classInfo',
        localName: 'TimeGeometricPrimitivePropertyType',
        propertyInfos: [{
            name: 'timeGeometricPrimitive',
            elementName: '_TimeGeometricPrimitive',
            typeInfo: 'GML_3_1_1.AbstractTimeGeometricPrimitiveType',
            type: 'elementRef'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TimeType',
        baseTypeInfo: 'GML_3_1_1.MeasureType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'VolumeType',
        baseTypeInfo: 'GML_3_1_1.MeasureType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'CountPropertyType',
        baseTypeInfo: 'GML_3_1_1.ValuePropertyType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'KnotType',
        propertyInfos: [{
            type: 'element',
            name: 'value',
            elementName: 'value',
            typeInfo: 'Double'
          }, {
            type: 'element',
            name: 'multiplicity',
            elementName: 'multiplicity',
            typeInfo: 'Integer'
          }, {
            type: 'element',
            name: 'weight',
            elementName: 'weight',
            typeInfo: 'Double'
          }]
      }, {
        type: 'classInfo',
        localName: 'QuantityPropertyType',
        baseTypeInfo: 'GML_3_1_1.ValuePropertyType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'OperationParameterBaseType',
        baseTypeInfo: 'GML_3_1_1.AbstractGeneralOperationParameterType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'AbstractGriddedSurfaceType.Row',
        propertyInfos: [{
            type: 'element',
            name: 'posList',
            elementName: 'posList',
            typeInfo: 'GML_3_1_1.DirectPositionListType'
          }, {
            name: 'geometricPositionGroup',
            collection: true,
            elementTypeInfos: [{
                elementName: 'pos',
                typeInfo: 'GML_3_1_1.DirectPositionType'
              }, {
                elementName: 'pointProperty',
                typeInfo: 'GML_3_1_1.PointPropertyType'
              }],
            type: 'elements'
          }]
      }, {
        type: 'classInfo',
        localName: 'ClothoidType.RefLocation',
        propertyInfos: [{
            type: 'element',
            name: 'affinePlacement',
            elementName: 'AffinePlacement',
            typeInfo: 'GML_3_1_1.AffinePlacementType'
          }]
      }, {
        type: 'classInfo',
        localName: 'TinType.ControlPoint',
        propertyInfos: [{
            type: 'element',
            name: 'posList',
            elementName: 'posList',
            typeInfo: 'GML_3_1_1.DirectPositionListType'
          }, {
            name: 'geometricPositionGroup',
            collection: true,
            elementTypeInfos: [{
                elementName: 'pos',
                typeInfo: 'GML_3_1_1.DirectPositionType'
              }, {
                elementName: 'pointProperty',
                typeInfo: 'GML_3_1_1.PointPropertyType'
              }],
            type: 'elements'
          }]
      }, {
        type: 'enumInfo',
        localName: 'CompassPointEnumeration',
        baseTypeInfo: 'String',
        values: ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
      }, {
        type: 'enumInfo',
        localName: 'SurfaceInterpolationType',
        baseTypeInfo: 'String',
        values: ['none', 'planar', 'spherical', 'elliptical', 'conic', 'tin', 'parametricCurve', 'polynomialSpline', 'rationalSpline', 'triangulatedSpline']
      }, {
        type: 'enumInfo',
        localName: 'SuccessionType',
        baseTypeInfo: 'String',
        values: ['substitution', 'division', 'fusion', 'initiation']
      }, {
        type: 'enumInfo',
        localName: 'SignType',
        baseTypeInfo: 'String',
        values: ['-', '+']
      }, {
        type: 'enumInfo',
        localName: 'QueryGrammarEnumeration',
        baseTypeInfo: 'String',
        values: ['xpath', 'xquery', 'other']
      }, {
        type: 'enumInfo',
        localName: 'DrawingTypeType',
        baseTypeInfo: 'String',
        values: ['POLYLINE', 'ORTHOGONAL']
      }, {
        type: 'enumInfo',
        localName: 'LineTypeType',
        baseTypeInfo: 'String',
        values: ['STRAIGHT', 'BENT']
      }, {
        type: 'enumInfo',
        localName: 'GraphTypeType',
        baseTypeInfo: 'String',
        values: ['TREE', 'BICONNECTED']
      }, {
        type: 'enumInfo',
        localName: 'AesheticCriteriaType',
        baseTypeInfo: 'String',
        values: ['MIN_CROSSINGS', 'MIN_AREA', 'MIN_BENDS', 'MAX_BENDS', 'UNIFORM_BENDS', 'MIN_SLOPES', 'MIN_EDGE_LENGTH', 'MAX_EDGE_LENGTH', 'UNIFORM_EDGE_LENGTH', 'MAX_ANGULAR_RESOLUTION', 'MIN_ASPECT_RATIO', 'MAX_SYMMETRIES']
      }, {
        type: 'enumInfo',
        localName: 'CurveInterpolationType',
        baseTypeInfo: 'String',
        values: ['linear', 'geodesic', 'circularArc3Points', 'circularArc2PointWithBulge', 'circularArcCenterPointWithRadius', 'elliptical', 'clothoid', 'conic', 'polynomialSpline', 'cubicSpline', 'rationalSpline']
      }, {
        type: 'enumInfo',
        localName: 'SymbolTypeEnumeration',
        baseTypeInfo: 'String',
        values: ['svg', 'xpath', 'other']
      }, {
        type: 'enumInfo',
        localName: 'IncrementOrder',
        baseTypeInfo: 'String',
        values: ['+x+y', '+y+x', '+x-y', '-x-y']
      }, {
        type: 'enumInfo',
        localName: 'FileValueModelType',
        baseTypeInfo: 'String',
        values: ['Record Interleaved']
      }, {
        type: 'enumInfo',
        localName: 'KnotTypesType',
        baseTypeInfo: 'String',
        values: ['uniform', 'quasiUniform', 'piecewiseBezier']
      }, {
        type: 'enumInfo',
        localName: 'TimeIndeterminateValueType',
        baseTypeInfo: 'String',
        values: ['after', 'before', 'now', 'unknown']
      }, {
        type: 'enumInfo',
        localName: 'SequenceRuleNames',
        baseTypeInfo: 'String',
        values: ['Linear', 'Boustrophedonic', 'Cantor-diagonal', 'Spiral', 'Morton', 'Hilbert']
      }],
    elementInfos: [{
        elementName: 'OperationParameter',
        typeInfo: 'GML_3_1_1.OperationParameterType',
        substitutionHead: '_GeneralOperationParameter'
      }, {
        elementName: 'groupID',
        typeInfo: 'GML_3_1_1.IdentifierType'
      }, {
        elementName: 'verticalDatumRef',
        typeInfo: 'GML_3_1_1.VerticalDatumRefType'
      }, {
        elementName: 'baseCurve',
        typeInfo: 'GML_3_1_1.CurvePropertyType'
      }, {
        elementName: 'TemporalDatum',
        typeInfo: 'GML_3_1_1.TemporalDatumType',
        substitutionHead: '_Datum'
      }, {
        elementName: 'measure',
        typeInfo: 'GML_3_1_1.MeasureType'
      }, {
        elementName: '_Geometry',
        typeInfo: 'GML_3_1_1.AbstractGeometryType',
        substitutionHead: '_GML'
      }, {
        elementName: 'datumName',
        typeInfo: 'GML_3_1_1.CodeType',
        substitutionHead: 'name'
      }, {
        elementName: 'maximumOccurs',
        typeInfo: 'Integer'
      }, {
        elementName: 'name',
        typeInfo: 'GML_3_1_1.CodeType'
      }, {
        elementName: 'Observation',
        typeInfo: 'GML_3_1_1.ObservationType',
        substitutionHead: '_Feature'
      }, {
        elementName: 'EnvelopeWithTimePeriod',
        typeInfo: 'GML_3_1_1.EnvelopeWithTimePeriodType',
        substitutionHead: 'Envelope'
      }, {
        elementName: 'ArcStringByBulge',
        typeInfo: 'GML_3_1_1.ArcStringByBulgeType',
        substitutionHead: '_CurveSegment'
      }, {
        elementName: 'symbol',
        typeInfo: 'GML_3_1_1.SymbolType'
      }, {
        elementName: 'multiPointDomain',
        typeInfo: 'GML_3_1_1.MultiPointDomainType',
        substitutionHead: 'domainSet'
      }, {
        elementName: 'TimeNode',
        typeInfo: 'GML_3_1_1.TimeNodeType',
        substitutionHead: '_TimeTopologyPrimitive'
      }, {
        elementName: '_TimeReferenceSystem',
        typeInfo: 'GML_3_1_1.AbstractTimeReferenceSystemType',
        substitutionHead: 'Definition'
      }, {
        elementName: 'ArcByBulge',
        typeInfo: 'GML_3_1_1.ArcByBulgeType',
        substitutionHead: 'ArcStringByBulge'
      }, {
        elementName: 'usesOperation',
        typeInfo: 'GML_3_1_1.OperationRefType'
      }, {
        elementName: 'DerivedUnit',
        typeInfo: 'GML_3_1_1.DerivedUnitType',
        substitutionHead: 'UnitDefinition'
      }, {
        elementName: 'usesEllipsoid',
        typeInfo: 'GML_3_1_1.EllipsoidRefType'
      }, {
        elementName: '_MetaData',
        typeInfo: 'GML_3_1_1.AbstractMetaDataType',
        substitutionHead: '_Object'
      }, {
        elementName: 'AffinePlacement',
        typeInfo: 'GML_3_1_1.AffinePlacementType'
      }, {
        elementName: 'stringValue',
        typeInfo: 'String'
      }, {
        elementName: 'derivedCRSType',
        typeInfo: 'GML_3_1_1.DerivedCRSTypeType'
      }, {
        elementName: 'usesImageDatum',
        typeInfo: 'GML_3_1_1.ImageDatumRefType'
      }, {
        elementName: 'integerValue',
        typeInfo: 'Integer'
      }, {
        elementName: 'Polygon',
        typeInfo: 'GML_3_1_1.PolygonType',
        substitutionHead: '_Surface'
      }, {
        elementName: 'transformationRef',
        typeInfo: 'GML_3_1_1.TransformationRefType'
      }, {
        elementName: '_TimePrimitive',
        typeInfo: 'GML_3_1_1.AbstractTimePrimitiveType',
        substitutionHead: '_TimeObject'
      }, {
        elementName: 'target',
        typeInfo: 'GML_3_1_1.TargetPropertyType'
      }, {
        elementName: 'rangeParameters',
        typeInfo: 'GML_3_1_1.RangeParametersType'
      }, {
        elementName: 'srsName',
        typeInfo: 'GML_3_1_1.CodeType',
        substitutionHead: 'name'
      }, {
        elementName: 'usesEllipsoidalCS',
        typeInfo: 'GML_3_1_1.EllipsoidalCSRefType'
      }, {
        elementName: 'LineString',
        typeInfo: 'GML_3_1_1.LineStringType',
        substitutionHead: '_Curve'
      }, {
        elementName: '_GeneralDerivedCRS',
        typeInfo: 'GML_3_1_1.AbstractGeneralDerivedCRSType',
        substitutionHead: '_CoordinateReferenceSystem'
      }, {
        elementName: 'rangeSet',
        typeInfo: 'GML_3_1_1.RangeSetType'
      }, {
        elementName: 'decimalMinutes',
        typeInfo: 'Decimal'
      }, {
        elementName: 'PolygonPatch',
        typeInfo: 'GML_3_1_1.PolygonPatchType',
        substitutionHead: '_SurfacePatch'
      }, {
        elementName: 'TriangulatedSurface',
        typeInfo: 'GML_3_1_1.TriangulatedSurfaceType',
        substitutionHead: 'Surface'
      }, {
        elementName: 'location',
        typeInfo: 'GML_3_1_1.LocationPropertyType'
      }, {
        elementName: 'Ellipsoid',
        typeInfo: 'GML_3_1_1.EllipsoidType',
        substitutionHead: 'Definition'
      }, {
        elementName: 'BooleanList',
        typeInfo: {
          type: 'list',
          typeInfo: 'String'
        }
      }, {
        elementName: 'metaDataProperty',
        typeInfo: 'GML_3_1_1.MetaDataPropertyType'
      }, {
        elementName: 'coordinateSystemAxisRef',
        typeInfo: 'GML_3_1_1.CoordinateSystemAxisRefType'
      }, {
        elementName: 'generalConversionRef',
        typeInfo: 'GML_3_1_1.GeneralConversionRefType'
      }, {
        elementName: 'description',
        typeInfo: 'GML_3_1_1.StringOrRefType'
      }, {
        elementName: 'CompositeSurface',
        typeInfo: 'GML_3_1_1.CompositeSurfaceType',
        substitutionHead: '_Surface'
      }, {
        elementName: 'ObliqueCartesianCS',
        typeInfo: 'GML_3_1_1.ObliqueCartesianCSType',
        substitutionHead: '_CoordinateSystem'
      }, {
        elementName: 'DataBlock',
        typeInfo: 'GML_3_1_1.DataBlockType'
      }, {
        elementName: '_CurveSegment',
        typeInfo: 'GML_3_1_1.AbstractCurveSegmentType'
      }, {
        elementName: 'generalTransformationRef',
        typeInfo: 'GML_3_1_1.GeneralTransformationRefType'
      }, {
        elementName: 'RectifiedGridCoverage',
        typeInfo: 'GML_3_1_1.RectifiedGridCoverageType',
        substitutionHead: '_DiscreteCoverage'
      }, {
        elementName: 'measureDescription',
        typeInfo: 'GML_3_1_1.CodeType'
      }, {
        elementName: 'TimeTopologyComplex',
        typeInfo: 'GML_3_1_1.TimeTopologyComplexType',
        substitutionHead: '_TimeComplex'
      }, {
        elementName: 'UnitDefinition',
        typeInfo: 'GML_3_1_1.UnitDefinitionType',
        substitutionHead: 'Definition'
      }, {
        elementName: 'valueComponent',
        typeInfo: 'GML_3_1_1.ValuePropertyType'
      }, {
        elementName: 'TimeCalendar',
        typeInfo: 'GML_3_1_1.TimeCalendarType',
        substitutionHead: '_TimeReferenceSystem'
      }, {
        elementName: 'TopoComplex',
        typeInfo: 'GML_3_1_1.TopoComplexType',
        substitutionHead: '_Topology'
      }, {
        elementName: 'using',
        typeInfo: 'GML_3_1_1.FeaturePropertyType'
      }, {
        elementName: 'patches',
        typeInfo: 'GML_3_1_1.SurfacePatchArrayPropertyType'
      }, {
        elementName: 'parameterValueGroup',
        typeInfo: 'GML_3_1_1.ParameterValueGroupType',
        substitutionHead: '_generalParameterValue'
      }, {
        elementName: 'baseSurface',
        typeInfo: 'GML_3_1_1.SurfacePropertyType'
      }, {
        elementName: 'curveMember',
        typeInfo: 'GML_3_1_1.CurvePropertyType'
      }, {
        elementName: 'CountList',
        typeInfo: {
          type: 'list',
          typeInfo: 'String'
        }
      }, {
        elementName: 'superComplex',
        typeInfo: 'GML_3_1_1.TopoComplexMemberType'
      }, {
        elementName: 'derivationUnitTerm',
        typeInfo: 'GML_3_1_1.DerivationUnitTermType'
      }, {
        elementName: 'projectedCRSRef',
        typeInfo: 'GML_3_1_1.ProjectedCRSRefType'
      }, {
        elementName: 'Arc',
        typeInfo: 'GML_3_1_1.ArcType',
        substitutionHead: 'ArcString'
      }, {
        elementName: 'groupName',
        typeInfo: 'GML_3_1_1.CodeType',
        substitutionHead: 'name'
      }, {
        elementName: 'ImageCRS',
        typeInfo: 'GML_3_1_1.ImageCRSType',
        substitutionHead: '_CoordinateReferenceSystem'
      }, {
        elementName: 'secondDefiningParameter',
        typeInfo: 'GML_3_1_1.SecondDefiningParameterType'
      }, {
        elementName: 'quantityType',
        typeInfo: 'GML_3_1_1.StringOrRefType'
      }, {
        elementName: 'usesVerticalDatum',
        typeInfo: 'GML_3_1_1.VerticalDatumRefType'
      }, {
        elementName: '_TimeGeometricPrimitive',
        typeInfo: 'GML_3_1_1.AbstractTimeGeometricPrimitiveType',
        substitutionHead: '_TimePrimitive'
      }, {
        elementName: '_Operation',
        typeInfo: 'GML_3_1_1.AbstractCoordinateOperationType',
        substitutionHead: '_SingleOperation'
      }, {
        elementName: 'inverseFlattening',
        typeInfo: 'GML_3_1_1.MeasureType'
      }, {
        elementName: 'operationRef',
        typeInfo: 'GML_3_1_1.OperationRefType'
      }, {
        elementName: 'conversionToPreferredUnit',
        typeInfo: 'GML_3_1_1.ConversionToPreferredUnitType'
      }, {
        elementName: 'concatenatedOperationRef',
        typeInfo: 'GML_3_1_1.ConcatenatedOperationRefType'
      }, {
        elementName: 'Node',
        typeInfo: 'GML_3_1_1.NodeType',
        substitutionHead: '_TopoPrimitive'
      }, {
        elementName: 'subComplex',
        typeInfo: 'GML_3_1_1.TopoComplexMemberType'
      }, {
        elementName: 'OffsetCurve',
        typeInfo: 'GML_3_1_1.OffsetCurveType',
        substitutionHead: '_CurveSegment'
      }, {
        elementName: 'valueProperty',
        typeInfo: 'GML_3_1_1.ValuePropertyType'
      }, {
        elementName: 'domainSet',
        typeInfo: 'GML_3_1_1.DomainSetType'
      }, {
        elementName: 'labelStyle',
        typeInfo: 'GML_3_1_1.LabelStylePropertyType'
      }, {
        elementName: 'columnIndex',
        typeInfo: 'Integer'
      }, {
        elementName: '_Surface',
        typeInfo: 'GML_3_1_1.AbstractSurfaceType',
        substitutionHead: '_GeometricPrimitive'
      }, {
        elementName: '_TopoPrimitive',
        typeInfo: 'GML_3_1_1.AbstractTopoPrimitiveType',
        substitutionHead: '_Topology'
      }, {
        elementName: 'multiPointProperty',
        typeInfo: 'GML_3_1_1.MultiPointPropertyType'
      }, {
        elementName: 'datumRef',
        typeInfo: 'GML_3_1_1.DatumRefType'
      }, {
        elementName: 'usesTemporalCS',
        typeInfo: 'GML_3_1_1.TemporalCSRefType'
      }, {
        elementName: '_SurfacePatch',
        typeInfo: 'GML_3_1_1.AbstractSurfacePatchType'
      }, {
        elementName: 'CountExtent',
        typeInfo: {
          type: 'list',
          typeInfo: 'String'
        }
      }, {
        elementName: 'multiCenterLineOf',
        typeInfo: 'GML_3_1_1.MultiCurvePropertyType'
      }, {
        elementName: 'coordinates',
        typeInfo: 'GML_3_1_1.CoordinatesType'
      }, {
        elementName: 'GeodeticDatum',
        typeInfo: 'GML_3_1_1.GeodeticDatumType',
        substitutionHead: '_Datum'
      }, {
        elementName: 'integerValueList',
        typeInfo: {
          type: 'list',
          typeInfo: 'Integer'
        }
      }, {
        elementName: 'temporalCRSRef',
        typeInfo: 'GML_3_1_1.TemporalCRSRefType'
      }, {
        elementName: '_Style',
        typeInfo: 'GML_3_1_1.AbstractStyleType',
        substitutionHead: '_GML'
      }, {
        elementName: 'Ring',
        typeInfo: 'GML_3_1_1.RingType',
        substitutionHead: '_Ring'
      }, {
        elementName: 'ConcatenatedOperation',
        typeInfo: 'GML_3_1_1.ConcatenatedOperationType',
        substitutionHead: '_CoordinateOperation'
      }, {
        elementName: 'rowIndex',
        typeInfo: 'Integer'
      }, {
        elementName: 'polygonProperty',
        typeInfo: 'GML_3_1_1.PolygonPropertyType'
      }, {
        elementName: 'GridFunction',
        typeInfo: 'GML_3_1_1.GridFunctionType'
      }, {
        elementName: 'lineStringProperty',
        typeInfo: 'GML_3_1_1.LineStringPropertyType'
      }, {
        elementName: 'topoCurveProperty',
        typeInfo: 'GML_3_1_1.TopoCurvePropertyType'
      }, {
        elementName: 'edgeOf',
        typeInfo: 'GML_3_1_1.CurvePropertyType'
      }, {
        elementName: 'operationParameterRef',
        typeInfo: 'GML_3_1_1.OperationParameterRefType'
      }, {
        elementName: 'MultiSurface',
        typeInfo: 'GML_3_1_1.MultiSurfaceType',
        substitutionHead: '_GeometricAggregate'
      }, {
        elementName: 'usesSingleOperation',
        typeInfo: 'GML_3_1_1.SingleOperationRefType'
      }, {
        elementName: 'realizationEpoch',
        typeInfo: 'Calendar'
      }, {
        elementName: 'dictionaryEntry',
        typeInfo: 'GML_3_1_1.DictionaryEntryType'
      }, {
        elementName: 'TimeEdge',
        typeInfo: 'GML_3_1_1.TimeEdgeType',
        substitutionHead: '_TimeTopologyPrimitive'
      }, {
        elementName: 'DefinitionCollection',
        typeInfo: 'GML_3_1_1.DictionaryType',
        substitutionHead: 'Definition'
      }, {
        elementName: 'Envelope',
        typeInfo: 'GML_3_1_1.EnvelopeType'
      }, {
        elementName: '_GeometricAggregate',
        typeInfo: 'GML_3_1_1.AbstractGeometricAggregateType',
        substitutionHead: '_Geometry'
      }, {
        elementName: '_Ring',
        typeInfo: 'GML_3_1_1.AbstractRingType',
        substitutionHead: '_Geometry'
      }, {
        elementName: 'Solid',
        typeInfo: 'GML_3_1_1.SolidType',
        substitutionHead: '_Solid'
      }, {
        elementName: 'graphStyle',
        typeInfo: 'GML_3_1_1.GraphStylePropertyType'
      }, {
        elementName: 'TimeCalendarEra',
        typeInfo: 'GML_3_1_1.TimeCalendarEraType',
        substitutionHead: 'Definition'
      }, {
        elementName: 'usesGeodeticDatum',
        typeInfo: 'GML_3_1_1.GeodeticDatumRefType'
      }, {
        elementName: 'SphericalCS',
        typeInfo: 'GML_3_1_1.SphericalCSType',
        substitutionHead: '_CoordinateSystem'
      }, {
        elementName: 'definitionRef',
        typeInfo: 'GML_3_1_1.ReferenceType'
      }, {
        elementName: 'pos',
        typeInfo: 'GML_3_1_1.DirectPositionType'
      }, {
        elementName: 'MultiPointCoverage',
        typeInfo: 'GML_3_1_1.MultiPointCoverageType',
        substitutionHead: '_DiscreteCoverage'
      }, {
        elementName: 'vector',
        typeInfo: 'GML_3_1_1.VectorType'
      }, {
        elementName: 'Face',
        typeInfo: 'GML_3_1_1.FaceType',
        substitutionHead: '_TopoPrimitive'
      }, {
        elementName: 'CategoryExtent',
        typeInfo: 'GML_3_1_1.CategoryExtentType'
      }, {
        elementName: '_SingleOperation',
        typeInfo: 'GML_3_1_1.AbstractCoordinateOperationType',
        substitutionHead: '_CoordinateOperation'
      }, {
        elementName: 'operationParameterGroupRef',
        typeInfo: 'GML_3_1_1.OperationParameterRefType'
      }, {
        elementName: 'minutes',
        typeInfo: 'Int'
      }, {
        elementName: 'multiCurveProperty',
        typeInfo: 'GML_3_1_1.MultiCurvePropertyType'
      }, {
        elementName: 'history',
        typeInfo: 'GML_3_1_1.HistoryPropertyType'
      }, {
        elementName: 'boundingPolygon',
        typeInfo: 'GML_3_1_1.PolygonType'
      }, {
        elementName: 'OrientableCurve',
        typeInfo: 'GML_3_1_1.OrientableCurveType',
        substitutionHead: '_Curve'
      }, {
        elementName: 'EngineeringDatum',
        typeInfo: 'GML_3_1_1.EngineeringDatumType',
        substitutionHead: '_Datum'
      }, {
        elementName: '_TimeComplex',
        typeInfo: 'GML_3_1_1.AbstractTimeComplexType',
        substitutionHead: '_TimeObject'
      }, {
        elementName: 'pixelInCell',
        typeInfo: 'GML_3_1_1.PixelInCellType'
      }, {
        elementName: 'booleanValue',
        typeInfo: 'Boolean'
      }, {
        elementName: 'dataSource',
        typeInfo: 'GML_3_1_1.StringOrRefType'
      }, {
        elementName: 'surfaceMember',
        typeInfo: 'GML_3_1_1.SurfacePropertyType'
      }, {
        elementName: 'MultiPoint',
        typeInfo: 'GML_3_1_1.MultiPointType',
        substitutionHead: '_GeometricAggregate'
      }, {
        elementName: 'Transformation',
        typeInfo: 'GML_3_1_1.TransformationType',
        substitutionHead: '_GeneralTransformation'
      }, {
        elementName: 'OrientableSurface',
        typeInfo: 'GML_3_1_1.OrientableSurfaceType',
        substitutionHead: '_Surface'
      }, {
        elementName: 'usesSphericalCS',
        typeInfo: 'GML_3_1_1.SphericalCSRefType'
      }, {
        elementName: '_positionalAccuracy',
        typeInfo: 'GML_3_1_1.AbstractPositionalAccuracyType'
      }, {
        elementName: 'primeMeridianRef',
        typeInfo: 'GML_3_1_1.PrimeMeridianRefType'
      }, {
        elementName: 'topoPrimitiveMembers',
        typeInfo: 'GML_3_1_1.TopoPrimitiveArrayAssociationType'
      }, {
        elementName: '_FeatureCollection',
        typeInfo: 'GML_3_1_1.AbstractFeatureCollectionType',
        substitutionHead: '_Feature'
      }, {
        elementName: 'dmsAngleValue',
        typeInfo: 'GML_3_1_1.DMSAngleType'
      }, {
        elementName: 'multiCurveDomain',
        typeInfo: 'GML_3_1_1.MultiCurveDomainType',
        substitutionHead: 'domainSet'
      }, {
        elementName: 'CubicSpline',
        typeInfo: 'GML_3_1_1.CubicSplineType',
        substitutionHead: '_CurveSegment'
      }, {
        elementName: 'userDefinedCSRef',
        typeInfo: 'GML_3_1_1.UserDefinedCSRefType'
      }, {
        elementName: 'pointProperty',
        typeInfo: 'GML_3_1_1.PointPropertyType'
      }, {
        elementName: 'multiGeometryProperty',
        typeInfo: 'GML_3_1_1.MultiGeometryPropertyType'
      }, {
        elementName: 'multiSolidDomain',
        typeInfo: 'GML_3_1_1.MultiSolidDomainType',
        substitutionHead: 'domainSet'
      }, {
        elementName: 'Bag',
        typeInfo: 'GML_3_1_1.BagType',
        substitutionHead: '_GML'
      }, {
        elementName: 'Quantity',
        typeInfo: 'GML_3_1_1.MeasureType'
      }, {
        elementName: 'methodName',
        typeInfo: 'GML_3_1_1.CodeType',
        substitutionHead: 'name'
      }, {
        elementName: 'dmsAngle',
        typeInfo: 'GML_3_1_1.DMSAngleType'
      }, {
        elementName: 'timePosition',
        typeInfo: 'GML_3_1_1.TimePositionType'
      }, {
        elementName: 'ellipsoidID',
        typeInfo: 'GML_3_1_1.IdentifierType'
      }, {
        elementName: 'polarCSRef',
        typeInfo: 'GML_3_1_1.PolarCSRefType'
      }, {
        elementName: 'featureMember',
        typeInfo: 'GML_3_1_1.FeaturePropertyType'
      }, {
        elementName: 'FeatureCollection',
        typeInfo: 'GML_3_1_1.FeatureCollectionType',
        substitutionHead: '_Feature'
      }, {
        elementName: 'valueList',
        typeInfo: 'GML_3_1_1.MeasureListType'
      }, {
        elementName: '_GeneralOperationParameter',
        typeInfo: 'GML_3_1_1.AbstractGeneralOperationParameterType',
        substitutionHead: 'Definition'
      }, {
        elementName: '_generalParameterValue',
        typeInfo: 'GML_3_1_1.AbstractGeneralParameterValueType'
      }, {
        elementName: '_GeometricPrimitive',
        typeInfo: 'GML_3_1_1.AbstractGeometricPrimitiveType',
        substitutionHead: '_Geometry'
      }, {
        elementName: 'Category',
        typeInfo: 'GML_3_1_1.CodeType'
      }, {
        elementName: 'coordinateOperationName',
        typeInfo: 'GML_3_1_1.CodeType',
        substitutionHead: 'name'
      }, {
        elementName: 'datumID',
        typeInfo: 'GML_3_1_1.IdentifierType'
      }, {
        elementName: 'CompassPoint',
        typeInfo: 'String'
      }, {
        elementName: 'curveProperty',
        typeInfo: 'GML_3_1_1.CurvePropertyType'
      }, {
        elementName: 'usesObliqueCartesianCS',
        typeInfo: 'GML_3_1_1.ObliqueCartesianCSRefType'
      }, {
        elementName: 'ellipsoidName',
        typeInfo: 'GML_3_1_1.CodeType',
        substitutionHead: 'name'
      }, {
        elementName: 'modifiedCoordinate',
        typeInfo: 'Integer'
      }, {
        elementName: 'topoSurfaceProperty',
        typeInfo: 'GML_3_1_1.TopoSurfacePropertyType'
      }, {
        elementName: 'CompositeCurve',
        typeInfo: 'GML_3_1_1.CompositeCurveType',
        substitutionHead: '_Curve'
      }, {
        elementName: 'topoComplexProperty',
        typeInfo: 'GML_3_1_1.TopoComplexMemberType'
      }, {
        elementName: 'value',
        typeInfo: 'GML_3_1_1.MeasureType'
      }, {
        elementName: 'track',
        typeInfo: 'GML_3_1_1.TrackType',
        substitutionHead: 'history'
      }, {
        elementName: 'MultiCurveCoverage',
        typeInfo: 'GML_3_1_1.MultiCurveCoverageType',
        substitutionHead: '_DiscreteCoverage'
      }, {
        elementName: 'includesValue',
        typeInfo: 'GML_3_1_1.AbstractGeneralParameterValueType',
        substitutionHead: '_generalParameterValue'
      }, {
        elementName: 'CartesianCS',
        typeInfo: 'GML_3_1_1.CartesianCSType',
        substitutionHead: '_CoordinateSystem'
      }, {
        elementName: 'tupleList',
        typeInfo: 'GML_3_1_1.CoordinatesType'
      }, {
        elementName: 'pointRep',
        typeInfo: 'GML_3_1_1.PointPropertyType'
      }, {
        elementName: 'absoluteExternalPositionalAccuracy',
        typeInfo: 'GML_3_1_1.AbsoluteExternalPositionalAccuracyType',
        substitutionHead: '_positionalAccuracy'
      }, {
        elementName: 'TimePeriod',
        typeInfo: 'GML_3_1_1.TimePeriodType',
        substitutionHead: '_TimeGeometricPrimitive'
      }, {
        elementName: 'Definition',
        typeInfo: 'GML_3_1_1.DefinitionType',
        substitutionHead: '_GML'
      }, {
        elementName: 'Curve',
        typeInfo: 'GML_3_1_1.CurveType',
        substitutionHead: '_Curve'
      }, {
        elementName: '_GeneralConversion',
        typeInfo: 'GML_3_1_1.AbstractGeneralConversionType',
        substitutionHead: '_Operation'
      }, {
        elementName: '_Coverage',
        typeInfo: 'GML_3_1_1.AbstractCoverageType',
        substitutionHead: '_Feature'
      }, {
        elementName: 'featureStyle',
        typeInfo: 'GML_3_1_1.FeatureStylePropertyType'
      }, {
        elementName: 'curveMembers',
        typeInfo: 'GML_3_1_1.CurveArrayPropertyType'
      }, {
        elementName: 'container',
        typeInfo: 'GML_3_1_1.ContainerPropertyType'
      }, {
        elementName: 'GraphStyle',
        typeInfo: 'GML_3_1_1.GraphStyleType',
        substitutionHead: '_GML'
      }, {
        elementName: 'GenericMetaData',
        typeInfo: 'GML_3_1_1.GenericMetaDataType',
        substitutionHead: '_MetaData'
      }, {
        elementName: 'verticalExtent',
        typeInfo: 'GML_3_1_1.EnvelopeType'
      }, {
        elementName: 'solidArrayProperty',
        typeInfo: 'GML_3_1_1.SolidArrayPropertyType'
      }, {
        elementName: 'Triangle',
        typeInfo: 'GML_3_1_1.TriangleType',
        substitutionHead: '_SurfacePatch'
      }, {
        elementName: 'Rectangle',
        typeInfo: 'GML_3_1_1.RectangleType',
        substitutionHead: '_SurfacePatch'
      }, {
        elementName: 'Count',
        typeInfo: 'Integer'
      }, {
        elementName: 'lineStringMember',
        typeInfo: 'GML_3_1_1.LineStringPropertyType'
      }, {
        elementName: 'degrees',
        typeInfo: 'GML_3_1_1.DegreesType'
      }, {
        elementName: 'seconds',
        typeInfo: 'Decimal'
      }, {
        elementName: 'definitionMember',
        typeInfo: 'GML_3_1_1.DictionaryEntryType',
        substitutionHead: 'dictionaryEntry'
      }, {
        elementName: 'usesCS',
        typeInfo: 'GML_3_1_1.CoordinateSystemRefType'
      }, {
        elementName: 'axisDirection',
        typeInfo: 'GML_3_1_1.CodeType'
      }, {
        elementName: 'Boolean',
        typeInfo: 'Boolean'
      }, {
        elementName: 'Cone',
        typeInfo: 'GML_3_1_1.ConeType',
        substitutionHead: '_GriddedSurface'
      }, {
        elementName: 'validArea',
        typeInfo: 'GML_3_1_1.ExtentType'
      }, {
        elementName: 'conversionRef',
        typeInfo: 'GML_3_1_1.ConversionRefType'
      }, {
        elementName: 'defaultStyle',
        typeInfo: 'GML_3_1_1.DefaultStylePropertyType'
      }, {
        elementName: 'crsRef',
        typeInfo: 'GML_3_1_1.CRSRefType'
      }, {
        elementName: '_Topology',
        typeInfo: 'GML_3_1_1.AbstractTopologyType',
        substitutionHead: '_GML'
      }, {
        elementName: '_Solid',
        typeInfo: 'GML_3_1_1.AbstractSolidType',
        substitutionHead: '_GeometricPrimitive'
      }, {
        elementName: 'usesMethod',
        typeInfo: 'GML_3_1_1.OperationMethodRefType'
      }, {
        elementName: 'PolarCS',
        typeInfo: 'GML_3_1_1.PolarCSType',
        substitutionHead: '_CoordinateSystem'
      }, {
        elementName: 'ProjectedCRS',
        typeInfo: 'GML_3_1_1.ProjectedCRSType',
        substitutionHead: '_GeneralDerivedCRS'
      }, {
        elementName: '_association',
        typeInfo: 'GML_3_1_1.AssociationType'
      }, {
        elementName: 'coordinateOperationRef',
        typeInfo: 'GML_3_1_1.CoordinateOperationRefType'
      }, {
        elementName: 'ellipsoidRef',
        typeInfo: 'GML_3_1_1.EllipsoidRefType'
      }, {
        elementName: 'surfaceArrayProperty',
        typeInfo: 'GML_3_1_1.SurfaceArrayPropertyType'
      }, {
        elementName: 'Grid',
        typeInfo: 'GML_3_1_1.GridType',
        substitutionHead: '_ImplicitGeometry'
      }, {
        elementName: 'isolated',
        typeInfo: 'GML_3_1_1.IsolatedPropertyType'
      }, {
        elementName: '_GML',
        typeInfo: 'GML_3_1_1.AbstractGMLType',
        substitutionHead: '_Object'
      }, {
        elementName: 'passThroughOperationRef',
        typeInfo: 'GML_3_1_1.PassThroughOperationRefType'
      }, {
        elementName: 'pointMembers',
        typeInfo: 'GML_3_1_1.PointArrayPropertyType'
      }, {
        elementName: 'coord',
        typeInfo: 'GML_3_1_1.CoordType'
      }, {
        elementName: 'isSphere',
        typeInfo: 'String'
      }, {
        elementName: 'sphericalCSRef',
        typeInfo: 'GML_3_1_1.SphericalCSRefType'
      }, {
        elementName: 'usesTemporalDatum',
        typeInfo: 'GML_3_1_1.TemporalDatumRefType'
      }, {
        elementName: 'multiSurfaceProperty',
        typeInfo: 'GML_3_1_1.MultiSurfacePropertyType'
      }, {
        elementName: 'geographicCRSRef',
        typeInfo: 'GML_3_1_1.GeographicCRSRefType'
      }, {
        elementName: 'GeocentricCRS',
        typeInfo: 'GML_3_1_1.GeocentricCRSType',
        substitutionHead: '_CoordinateReferenceSystem'
      }, {
        elementName: 'Circle',
        typeInfo: 'GML_3_1_1.CircleType',
        substitutionHead: 'Arc'
      }, {
        elementName: 'boundedBy',
        typeInfo: 'GML_3_1_1.BoundingShapeType'
      }, {
        elementName: 'obliqueCartesianCSRef',
        typeInfo: 'GML_3_1_1.ObliqueCartesianCSRefType'
      }, {
        elementName: 'operationVersion',
        typeInfo: 'String'
      }, {
        elementName: 'engineeringCRSRef',
        typeInfo: 'GML_3_1_1.EngineeringCRSRefType'
      }, {
        elementName: 'GridCoverage',
        typeInfo: 'GML_3_1_1.GridCoverageType',
        substitutionHead: '_DiscreteCoverage'
      }, {
        elementName: 'MovingObjectStatus',
        typeInfo: 'GML_3_1_1.MovingObjectStatusType',
        substitutionHead: '_TimeSlice'
      }, {
        elementName: 'ImageDatum',
        typeInfo: 'GML_3_1_1.ImageDatumType',
        substitutionHead: '_Datum'
      }, {
        elementName: 'TopoVolume',
        typeInfo: 'GML_3_1_1.TopoVolumeType'
      }, {
        elementName: 'multiEdgeOf',
        typeInfo: 'GML_3_1_1.MultiCurvePropertyType'
      }, {
        elementName: 'polygonPatches',
        typeInfo: 'GML_3_1_1.PolygonPatchArrayPropertyType',
        substitutionHead: 'patches'
      }, {
        elementName: 'multiSurfaceDomain',
        typeInfo: 'GML_3_1_1.MultiSurfaceDomainType',
        substitutionHead: 'domainSet'
      }, {
        elementName: 'polygonMember',
        typeInfo: 'GML_3_1_1.PolygonPropertyType'
      }, {
        elementName: 'srsID',
        typeInfo: 'GML_3_1_1.IdentifierType'
      }, {
        elementName: 'linearCSRef',
        typeInfo: 'GML_3_1_1.LinearCSRefType'
      }, {
        elementName: 'parameterName',
        typeInfo: 'GML_3_1_1.CodeType',
        substitutionHead: 'name'
      }, {
        elementName: 'axisAbbrev',
        typeInfo: 'GML_3_1_1.CodeType'
      }, {
        elementName: 'compoundCRSRef',
        typeInfo: 'GML_3_1_1.CompoundCRSRefType'
      }, {
        elementName: 'GeometryStyle',
        typeInfo: 'GML_3_1_1.GeometryStyleType',
        substitutionHead: '_GML'
      }, {
        elementName: 'MultiCurve',
        typeInfo: 'GML_3_1_1.MultiCurveType',
        substitutionHead: '_GeometricAggregate'
      }, {
        elementName: 'verticalCRSRef',
        typeInfo: 'GML_3_1_1.VerticalCRSRefType'
      }, {
        elementName: 'Bezier',
        typeInfo: 'GML_3_1_1.BezierType',
        substitutionHead: 'BSpline'
      }, {
        elementName: 'sourceDimensions',
        typeInfo: 'Integer'
      }, {
        elementName: 'EllipsoidalCS',
        typeInfo: 'GML_3_1_1.EllipsoidalCSType',
        substitutionHead: '_CoordinateSystem'
      }, {
        elementName: 'Clothoid',
        typeInfo: 'GML_3_1_1.ClothoidType',
        substitutionHead: '_CurveSegment'
      }, {
        elementName: 'usesParameter',
        typeInfo: 'GML_3_1_1.AbstractGeneralOperationParameterRefType'
      }, {
        elementName: 'roughConversionToPreferredUnit',
        typeInfo: 'GML_3_1_1.ConversionToPreferredUnitType'
      }, {
        elementName: 'UserDefinedCS',
        typeInfo: 'GML_3_1_1.UserDefinedCSType',
        substitutionHead: '_CoordinateSystem'
      }, {
        elementName: 'DerivedCRS',
        typeInfo: 'GML_3_1_1.DerivedCRSType',
        substitutionHead: '_GeneralDerivedCRS'
      }, {
        elementName: 'featureMembers',
        typeInfo: 'GML_3_1_1.FeatureArrayPropertyType'
      }, {
        elementName: 'LabelStyle',
        typeInfo: 'GML_3_1_1.LabelStyleType',
        substitutionHead: '_GML'
      }, {
        elementName: '_strictAssociation',
        typeInfo: 'GML_3_1_1.AssociationType'
      }, {
        elementName: 'topoPrimitiveMember',
        typeInfo: 'GML_3_1_1.TopoPrimitiveMemberType'
      }, {
        elementName: 'Cylinder',
        typeInfo: 'GML_3_1_1.CylinderType',
        substitutionHead: '_GriddedSurface'
      }, {
        elementName: 'TopoSolid',
        typeInfo: 'GML_3_1_1.TopoSolidType',
        substitutionHead: '_TopoPrimitive'
      }, {
        elementName: 'multiCoverage',
        typeInfo: 'GML_3_1_1.MultiSurfacePropertyType'
      }, {
        elementName: 'LineStringSegment',
        typeInfo: 'GML_3_1_1.LineStringSegmentType',
        substitutionHead: '_CurveSegment'
      }, {
        elementName: 'multiLocation',
        typeInfo: 'GML_3_1_1.MultiPointPropertyType'
      }, {
        elementName: 'greenwichLongitude',
        typeInfo: 'GML_3_1_1.AngleChoiceType'
      }, {
        elementName: '_Feature',
        typeInfo: 'GML_3_1_1.AbstractFeatureType',
        substitutionHead: '_GML'
      }, {
        elementName: 'solidMember',
        typeInfo: 'GML_3_1_1.SolidPropertyType'
      }, {
        elementName: 'innerBoundaryIs',
        typeInfo: 'GML_3_1_1.AbstractRingPropertyType',
        substitutionHead: 'interior'
      }, {
        elementName: 'anchorPoint',
        typeInfo: 'GML_3_1_1.CodeType'
      }, {
        elementName: 'origin',
        typeInfo: 'Calendar'
      }, {
        elementName: 'LinearCS',
        typeInfo: 'GML_3_1_1.LinearCSType',
        substitutionHead: '_CoordinateSystem'
      }, {
        elementName: 'valueOfParameter',
        typeInfo: 'GML_3_1_1.OperationParameterRefType'
      }, {
        elementName: 'duration',
        typeInfo: 'String'
      }, {
        elementName: 'directedTopoSolid',
        typeInfo: 'GML_3_1_1.DirectedTopoSolidPropertyType'
      }, {
        elementName: 'TemporalCRS',
        typeInfo: 'GML_3_1_1.TemporalCRSType',
        substitutionHead: '_CoordinateReferenceSystem'
      }, {
        elementName: 'TimeOrdinalReferenceSystem',
        typeInfo: 'GML_3_1_1.TimeOrdinalReferenceSystemType',
        substitutionHead: '_TimeReferenceSystem'
      }, {
        elementName: 'scope',
        typeInfo: 'String'
      }, {
        elementName: 'timeInterval',
        typeInfo: 'GML_3_1_1.TimeIntervalLengthType'
      }, {
        elementName: 'valueFile',
        typeInfo: 'String'
      }, {
        elementName: 'GeographicCRS',
        typeInfo: 'GML_3_1_1.GeographicCRSType',
        substitutionHead: '_CoordinateReferenceSystem'
      }, {
        elementName: 'CircleByCenterPoint',
        typeInfo: 'GML_3_1_1.CircleByCenterPointType',
        substitutionHead: 'ArcByCenterPoint'
      }, {
        elementName: 'geometryMember',
        typeInfo: 'GML_3_1_1.GeometryPropertyType'
      }, {
        elementName: '_ReferenceSystem',
        typeInfo: 'GML_3_1_1.AbstractReferenceSystemType',
        substitutionHead: 'Definition'
      }, {
        elementName: '_GeneralTransformation',
        typeInfo: 'GML_3_1_1.AbstractGeneralTransformationType',
        substitutionHead: '_Operation'
      }, {
        elementName: 'GeometricComplex',
        typeInfo: 'GML_3_1_1.GeometricComplexType',
        substitutionHead: '_Geometry'
      }, {
        elementName: 'methodID',
        typeInfo: 'GML_3_1_1.IdentifierType'
      }, {
        elementName: 'geometryMembers',
        typeInfo: 'GML_3_1_1.GeometryArrayPropertyType'
      }, {
        elementName: 'abstractGeneralOperationParameterRef',
        typeInfo: 'GML_3_1_1.AbstractGeneralOperationParameterRefType'
      }, {
        elementName: 'version',
        typeInfo: 'String'
      }, {
        elementName: 'meridianName',
        typeInfo: 'GML_3_1_1.CodeType',
        substitutionHead: 'name'
      }, {
        elementName: '_ContinuousCoverage',
        typeInfo: 'GML_3_1_1.AbstractContinuousCoverageType',
        substitutionHead: '_Coverage'
      }, {
        elementName: 'axisID',
        typeInfo: 'GML_3_1_1.IdentifierType'
      }, {
        elementName: 'MultiSolidCoverage',
        typeInfo: 'GML_3_1_1.MultiSolidCoverageType',
        substitutionHead: '_DiscreteCoverage'
      }, {
        elementName: 'topologyStyle',
        typeInfo: 'GML_3_1_1.TopologyStylePropertyType'
      }, {
        elementName: 'TopologyStyle',
        typeInfo: 'GML_3_1_1.TopologyStyleType',
        substitutionHead: '_GML'
      }, {
        elementName: 'MultiPolygon',
        typeInfo: 'GML_3_1_1.MultiPolygonType',
        substitutionHead: '_GeometricAggregate'
      }, {
        elementName: 'cartesianCSRef',
        typeInfo: 'GML_3_1_1.CartesianCSRefType'
      }, {
        elementName: 'minimumOccurs',
        typeInfo: 'Integer'
      }, {
        elementName: 'centerOf',
        typeInfo: 'GML_3_1_1.PointPropertyType'
      }, {
        elementName: 'TimeInstant',
        typeInfo: 'GML_3_1_1.TimeInstantType',
        substitutionHead: '_TimeGeometricPrimitive'
      }, {
        elementName: 'catalogSymbol',
        typeInfo: 'GML_3_1_1.CodeType'
      }, {
        elementName: 'TopoPoint',
        typeInfo: 'GML_3_1_1.TopoPointType'
      }, {
        elementName: 'derivedCRSRef',
        typeInfo: 'GML_3_1_1.DerivedCRSRefType'
      }, {
        elementName: 'gridDomain',
        typeInfo: 'GML_3_1_1.GridDomainType',
        substitutionHead: 'domainSet'
      }, {
        elementName: 'DirectionVector',
        typeInfo: 'GML_3_1_1.DirectionVectorType'
      }, {
        elementName: 'topoVolumeProperty',
        typeInfo: 'GML_3_1_1.TopoVolumePropertyType'
      }, {
        elementName: '_CoordinateOperation',
        typeInfo: 'GML_3_1_1.AbstractCoordinateOperationType',
        substitutionHead: 'Definition'
      }, {
        elementName: 'ArcString',
        typeInfo: 'GML_3_1_1.ArcStringType',
        substitutionHead: '_CurveSegment'
      }, {
        elementName: 'coverageFunction',
        typeInfo: 'GML_3_1_1.CoverageFunctionType'
      }, {
        elementName: 'Sphere',
        typeInfo: 'GML_3_1_1.SphereType',
        substitutionHead: '_GriddedSurface'
      }, {
        elementName: 'TopoCurve',
        typeInfo: 'GML_3_1_1.TopoCurveType'
      }, {
        elementName: '_DiscreteCoverage',
        typeInfo: 'GML_3_1_1.AbstractDiscreteCoverageType',
        substitutionHead: '_Coverage'
      }, {
        elementName: 'RectifiedGrid',
        typeInfo: 'GML_3_1_1.RectifiedGridType',
        substitutionHead: '_ImplicitGeometry'
      }, {
        elementName: 'featureProperty',
        typeInfo: 'GML_3_1_1.FeaturePropertyType'
      }, {
        elementName: 'LocationString',
        typeInfo: 'GML_3_1_1.StringOrRefType'
      }, {
        elementName: 'definedByConversion',
        typeInfo: 'GML_3_1_1.GeneralConversionRefType'
      }, {
        elementName: 'LocationKeyWord',
        typeInfo: 'GML_3_1_1.CodeType'
      }, {
        elementName: 'surfaceProperty',
        typeInfo: 'GML_3_1_1.SurfacePropertyType'
      }, {
        elementName: 'coordinateOperationID',
        typeInfo: 'GML_3_1_1.IdentifierType'
      }, {
        elementName: 'PolyhedralSurface',
        typeInfo: 'GML_3_1_1.PolyhedralSurfaceType',
        substitutionHead: 'Surface'
      }, {
        elementName: 'usesValue',
        typeInfo: 'GML_3_1_1.ParameterValueType'
      }, {
        elementName: 'DirectedObservationAtDistance',
        typeInfo: 'GML_3_1_1.DirectedObservationAtDistanceType',
        substitutionHead: 'DirectedObservation'
      }, {
        elementName: 'csName',
        typeInfo: 'GML_3_1_1.CodeType',
        substitutionHead: 'name'
      }, {
        elementName: 'geocentricCRSRef',
        typeInfo: 'GML_3_1_1.GeocentricCRSRefType'
      }, {
        elementName: 'doubleOrNullTupleList',
        typeInfo: {
          type: 'list',
          typeInfo: 'String'
        }
      }, {
        elementName: 'pointMember',
        typeInfo: 'GML_3_1_1.PointPropertyType'
      }, {
        elementName: 'coordinateReferenceSystemRef',
        typeInfo: 'GML_3_1_1.CoordinateReferenceSystemRefType'
      }, {
        elementName: 'Tin',
        typeInfo: 'GML_3_1_1.TinType',
        substitutionHead: 'TriangulatedSurface'
      }, {
        elementName: 'temporalDatumRef',
        typeInfo: 'GML_3_1_1.TemporalDatumRefType'
      }, {
        elementName: 'LinearRing',
        typeInfo: 'GML_3_1_1.LinearRingType',
        substitutionHead: '_Ring'
      }, {
        elementName: 'usesPrimeMeridian',
        typeInfo: 'GML_3_1_1.PrimeMeridianRefType'
      }, {
        elementName: 'EngineeringCRS',
        typeInfo: 'GML_3_1_1.EngineeringCRSType',
        substitutionHead: '_CoordinateReferenceSystem'
      }, {
        elementName: 'referenceSystemRef',
        typeInfo: 'GML_3_1_1.ReferenceSystemRefType'
      }, {
        elementName: 'valuesOfGroup',
        typeInfo: 'GML_3_1_1.OperationParameterGroupRefType'
      }, {
        elementName: 'ellipsoidalCSRef',
        typeInfo: 'GML_3_1_1.EllipsoidalCSRefType'
      }, {
        elementName: 'parameterValue',
        typeInfo: 'GML_3_1_1.ParameterValueType',
        substitutionHead: '_generalParameterValue'
      }, {
        elementName: 'interior',
        typeInfo: 'GML_3_1_1.AbstractRingPropertyType'
      }, {
        elementName: 'Surface',
        typeInfo: 'GML_3_1_1.SurfaceType',
        substitutionHead: '_Surface'
      }, {
        elementName: 'OperationMethod',
        typeInfo: 'GML_3_1_1.OperationMethodType',
        substitutionHead: 'Definition'
      }, {
        elementName: 'semiMajorAxis',
        typeInfo: 'GML_3_1_1.MeasureType'
      }, {
        elementName: 'result',
        typeInfo: 'GML_3_1_1.MeasureType'
      }, {
        elementName: 'verticalCSRef',
        typeInfo: 'GML_3_1_1.VerticalCSRefType'
      }, {
        elementName: '_ImplicitGeometry',
        typeInfo: 'GML_3_1_1.AbstractGeometryType',
        substitutionHead: '_Geometry'
      }, {
        elementName: 'TemporalCS',
        typeInfo: 'GML_3_1_1.TemporalCSType',
        substitutionHead: '_CoordinateSystem'
      }, {
        elementName: 'csID',
        typeInfo: 'GML_3_1_1.IdentifierType'
      }, {
        elementName: '_Object',
        typeInfo: 'AnyType'
      }, {
        elementName: 'VerticalDatum',
        typeInfo: 'GML_3_1_1.VerticalDatumType',
        substitutionHead: '_Datum'
      }, {
        elementName: 'Conversion',
        typeInfo: 'GML_3_1_1.ConversionType',
        substitutionHead: '_GeneralConversion'
      }, {
        elementName: '_CoordinateSystem',
        typeInfo: 'GML_3_1_1.AbstractCoordinateSystemType',
        substitutionHead: 'Definition'
      }, {
        elementName: 'usesAxis',
        typeInfo: 'GML_3_1_1.CoordinateSystemAxisRefType'
      }, {
        elementName: 'verticalDatumType',
        typeInfo: 'GML_3_1_1.VerticalDatumTypeType'
      }, {
        elementName: 'MultiSolid',
        typeInfo: 'GML_3_1_1.MultiSolidType',
        substitutionHead: '_GeometricAggregate'
      }, {
        elementName: 'CylindricalCS',
        typeInfo: 'GML_3_1_1.CylindricalCSType',
        substitutionHead: '_CoordinateSystem'
      }, {
        elementName: 'topoPointProperty',
        typeInfo: 'GML_3_1_1.TopoPointPropertyType'
      }, {
        elementName: 'multiPosition',
        typeInfo: 'GML_3_1_1.MultiPointPropertyType'
      }, {
        elementName: 'position',
        typeInfo: 'GML_3_1_1.PointPropertyType'
      }, {
        elementName: 'File',
        typeInfo: 'GML_3_1_1.FileType'
      }, {
        elementName: 'pointArrayProperty',
        typeInfo: 'GML_3_1_1.PointArrayPropertyType'
      }, {
        elementName: 'outerBoundaryIs',
        typeInfo: 'GML_3_1_1.AbstractRingPropertyType',
        substitutionHead: 'exterior'
      }, {
        elementName: 'multiCenterOf',
        typeInfo: 'GML_3_1_1.MultiPointPropertyType'
      }, {
        elementName: 'MultiLineString',
        typeInfo: 'GML_3_1_1.MultiLineStringType',
        substitutionHead: '_GeometricAggregate'
      }, {
        elementName: 'Null',
        typeInfo: {
          type: 'list',
          typeInfo: 'String'
        }
      }, {
        elementName: 'subject',
        typeInfo: 'GML_3_1_1.TargetPropertyType',
        substitutionHead: 'target'
      }, {
        elementName: 'directedFace',
        typeInfo: 'GML_3_1_1.DirectedFacePropertyType'
      }, {
        elementName: 'posList',
        typeInfo: 'GML_3_1_1.DirectPositionListType'
      }, {
        elementName: 'covarianceMatrix',
        typeInfo: 'GML_3_1_1.CovarianceMatrixType',
        substitutionHead: '_positionalAccuracy'
      }, {
        elementName: 'methodFormula',
        typeInfo: 'GML_3_1_1.CodeType'
      }, {
        elementName: 'VerticalCS',
        typeInfo: 'GML_3_1_1.VerticalCSType',
        substitutionHead: '_CoordinateSystem'
      }, {
        elementName: 'members',
        typeInfo: 'GML_3_1_1.ArrayAssociationType'
      }, {
        elementName: '_ParametricCurveSurface',
        typeInfo: 'GML_3_1_1.AbstractParametricCurveSurfaceType',
        substitutionHead: '_SurfacePatch'
      }, {
        elementName: 'usesEngineeringDatum',
        typeInfo: 'GML_3_1_1.EngineeringDatumRefType'
      }, {
        elementName: 'engineeringDatumRef',
        typeInfo: 'GML_3_1_1.EngineeringDatumRefType'
      }, {
        elementName: 'BSpline',
        typeInfo: 'GML_3_1_1.BSplineType',
        substitutionHead: '_CurveSegment'
      }, {
        elementName: 'GeodesicString',
        typeInfo: 'GML_3_1_1.GeodesicStringType',
        substitutionHead: '_CurveSegment'
      }, {
        elementName: 'Point',
        typeInfo: 'GML_3_1_1.PointType',
        substitutionHead: '_GeometricPrimitive'
      }, {
        elementName: 'OperationParameterGroup',
        typeInfo: 'GML_3_1_1.OperationParameterGroupType',
        substitutionHead: '_GeneralOperationParameter'
      }, {
        elementName: 'targetCRS',
        typeInfo: 'GML_3_1_1.CRSRefType'
      }, {
        elementName: 'Array',
        typeInfo: 'GML_3_1_1.ArrayType',
        substitutionHead: '_GML'
      }, {
        elementName: 'CategoryList',
        typeInfo: 'GML_3_1_1.CodeOrNullListType'
      }, {
        elementName: 'singleOperationRef',
        typeInfo: 'GML_3_1_1.SingleOperationRefType'
      }, {
        elementName: 'MultiGeometry',
        typeInfo: 'GML_3_1_1.MultiGeometryType',
        substitutionHead: '_GeometricAggregate'
      }, {
        elementName: 'Edge',
        typeInfo: 'GML_3_1_1.EdgeType',
        substitutionHead: '_TopoPrimitive'
      }, {
        elementName: '_CoordinateReferenceSystem',
        typeInfo: 'GML_3_1_1.AbstractReferenceSystemType',
        substitutionHead: '_CRS'
      }, {
        elementName: 'remarks',
        typeInfo: 'GML_3_1_1.StringOrRefType'
      }, {
        elementName: 'Dictionary',
        typeInfo: 'GML_3_1_1.DictionaryType',
        substitutionHead: 'Definition'
      }, {
        elementName: 'ConventionalUnit',
        typeInfo: 'GML_3_1_1.ConventionalUnitType',
        substitutionHead: 'UnitDefinition'
      }, {
        elementName: 'QuantityList',
        typeInfo: 'GML_3_1_1.MeasureOrNullListType'
      }, {
        elementName: 'IndexMap',
        typeInfo: 'GML_3_1_1.IndexMapType',
        substitutionHead: 'GridFunction'
      }, {
        elementName: 'exterior',
        typeInfo: 'GML_3_1_1.AbstractRingPropertyType'
      }, {
        elementName: 'DirectedObservation',
        typeInfo: 'GML_3_1_1.DirectedObservationType',
        substitutionHead: 'Observation'
      }, {
        elementName: 'CoordinateSystemAxis',
        typeInfo: 'GML_3_1_1.CoordinateSystemAxisType',
        substitutionHead: 'Definition'
      }, {
        elementName: 'multiSolidProperty',
        typeInfo: 'GML_3_1_1.MultiSolidPropertyType'
      }, {
        elementName: '_GriddedSurface',
        typeInfo: 'GML_3_1_1.AbstractGriddedSurfaceType',
        substitutionHead: '_ParametricCurveSurface'
      }, {
        elementName: 'MappingRule',
        typeInfo: 'GML_3_1_1.StringOrRefType'
      }, {
        elementName: 'targetDimensions',
        typeInfo: 'Integer'
      }, {
        elementName: '_reference',
        typeInfo: 'GML_3_1_1.ReferenceType'
      }, {
        elementName: 'includesElement',
        typeInfo: 'GML_3_1_1.CovarianceElementType'
      }, {
        elementName: '_Curve',
        typeInfo: 'GML_3_1_1.AbstractCurveType',
        substitutionHead: '_GeometricPrimitive'
      }, {
        elementName: 'QuantityExtent',
        typeInfo: 'GML_3_1_1.QuantityExtentType'
      }, {
        elementName: 'ArcByCenterPoint',
        typeInfo: 'GML_3_1_1.ArcByCenterPointType',
        substitutionHead: '_CurveSegment'
      }, {
        elementName: 'TimeOrdinalEra',
        typeInfo: 'GML_3_1_1.TimeOrdinalEraType'
      }, {
        elementName: 'extentOf',
        typeInfo: 'GML_3_1_1.SurfacePropertyType'
      }, {
        elementName: 'multiExtentOf',
        typeInfo: 'GML_3_1_1.MultiSurfacePropertyType'
      }, {
        elementName: 'temporalExtent',
        typeInfo: 'GML_3_1_1.TimePeriodType'
      }, {
        elementName: 'relativeInternalPositionalAccuracy',
        typeInfo: 'GML_3_1_1.RelativeInternalPositionalAccuracyType',
        substitutionHead: '_positionalAccuracy'
      }, {
        elementName: 'direction',
        typeInfo: 'GML_3_1_1.DirectionPropertyType'
      }, {
        elementName: 'unitOfMeasure',
        typeInfo: 'GML_3_1_1.UnitOfMeasureType'
      }, {
        elementName: 'parameterID',
        typeInfo: 'GML_3_1_1.IdentifierType'
      }, {
        elementName: 'imageCRSRef',
        typeInfo: 'GML_3_1_1.ImageCRSRefType'
      }, {
        elementName: 'directedNode',
        typeInfo: 'GML_3_1_1.DirectedNodePropertyType'
      }, {
        elementName: 'centerLineOf',
        typeInfo: 'GML_3_1_1.CurvePropertyType'
      }, {
        elementName: '_CRS',
        typeInfo: 'GML_3_1_1.AbstractReferenceSystemType',
        substitutionHead: '_ReferenceSystem'
      }, {
        elementName: 'coordinateSystemRef',
        typeInfo: 'GML_3_1_1.CoordinateSystemRefType'
      }, {
        elementName: 'imageDatumRef',
        typeInfo: 'GML_3_1_1.ImageDatumRefType'
      }, {
        elementName: 'resultOf',
        typeInfo: 'GML_3_1_1.AssociationType'
      }, {
        elementName: 'BaseUnit',
        typeInfo: 'GML_3_1_1.BaseUnitType',
        substitutionHead: 'UnitDefinition'
      }, {
        elementName: 'TimeCoordinateSystem',
        typeInfo: 'GML_3_1_1.TimeCoordinateSystemType',
        substitutionHead: '_TimeReferenceSystem'
      }, {
        elementName: 'MultiSurfaceCoverage',
        typeInfo: 'GML_3_1_1.MultiSurfaceCoverageType',
        substitutionHead: '_DiscreteCoverage'
      }, {
        elementName: 'includesParameter',
        typeInfo: 'GML_3_1_1.AbstractGeneralOperationParameterRefType'
      }, {
        elementName: 'curveArrayProperty',
        typeInfo: 'GML_3_1_1.CurveArrayPropertyType'
      }, {
        elementName: 'solidMembers',
        typeInfo: 'GML_3_1_1.SolidArrayPropertyType'
      }, {
        elementName: 'TimeClock',
        typeInfo: 'GML_3_1_1.TimeClockType',
        substitutionHead: '_TimeReferenceSystem'
      }, {
        elementName: 'semiMinorAxis',
        typeInfo: 'GML_3_1_1.MeasureType'
      }, {
        elementName: 'validTime',
        typeInfo: 'GML_3_1_1.TimePrimitivePropertyType'
      }, {
        elementName: 'status',
        typeInfo: 'GML_3_1_1.StringOrRefType'
      }, {
        elementName: 'trianglePatches',
        typeInfo: 'GML_3_1_1.TrianglePatchArrayPropertyType',
        substitutionHead: 'patches'
      }, {
        elementName: 'cylindricalCSRef',
        typeInfo: 'GML_3_1_1.CylindricalCSRefType'
      }, {
        elementName: 'rectifiedGridDomain',
        typeInfo: 'GML_3_1_1.RectifiedGridDomainType',
        substitutionHead: 'domainSet'
      }, {
        elementName: 'geodeticDatumRef',
        typeInfo: 'GML_3_1_1.GeodeticDatumRefType'
      }, {
        elementName: 'CompoundCRS',
        typeInfo: 'GML_3_1_1.CompoundCRSType',
        substitutionHead: '_CRS'
      }, {
        elementName: 'surfaceMembers',
        typeInfo: 'GML_3_1_1.SurfaceArrayPropertyType'
      }, {
        elementName: 'sourceCRS',
        typeInfo: 'GML_3_1_1.CRSRefType'
      }, {
        elementName: '_TimeObject',
        typeInfo: 'GML_3_1_1.AbstractTimeObjectType',
        substitutionHead: '_GML'
      }, {
        elementName: 'meridianID',
        typeInfo: 'GML_3_1_1.IdentifierType'
      }, {
        elementName: '_TimeSlice',
        typeInfo: 'GML_3_1_1.AbstractTimeSliceType',
        substitutionHead: '_GML'
      }, {
        elementName: 'indirectEntry',
        typeInfo: 'GML_3_1_1.IndirectEntryType'
      }, {
        elementName: 'operationMethodRef',
        typeInfo: 'GML_3_1_1.OperationMethodRefType'
      }, {
        elementName: 'valueComponents',
        typeInfo: 'GML_3_1_1.ValueArrayPropertyType'
      }, {
        elementName: 'temporalCSRef',
        typeInfo: 'GML_3_1_1.TemporalCSRefType'
      }, {
        elementName: 'directedEdge',
        typeInfo: 'GML_3_1_1.DirectedEdgePropertyType'
      }, {
        elementName: 'includesCRS',
        typeInfo: 'GML_3_1_1.CoordinateReferenceSystemRefType'
      }, {
        elementName: 'usesCartesianCS',
        typeInfo: 'GML_3_1_1.CartesianCSRefType'
      }, {
        elementName: 'PrimeMeridian',
        typeInfo: 'GML_3_1_1.PrimeMeridianType',
        substitutionHead: 'Definition'
      }, {
        elementName: 'CompositeSolid',
        typeInfo: 'GML_3_1_1.CompositeSolidType',
        substitutionHead: '_Solid'
      }, {
        elementName: 'priorityLocation',
        typeInfo: 'GML_3_1_1.PriorityLocationPropertyType',
        substitutionHead: 'location'
      }, {
        elementName: 'Geodesic',
        typeInfo: 'GML_3_1_1.GeodesicType',
        substitutionHead: 'GeodesicString'
      }, {
        elementName: 'DefinitionProxy',
        typeInfo: 'GML_3_1_1.DefinitionProxyType',
        substitutionHead: 'Definition'
      }, {
        elementName: 'ValueArray',
        typeInfo: 'GML_3_1_1.ValueArrayType',
        substitutionHead: 'CompositeValue'
      }, {
        elementName: 'baseCRS',
        typeInfo: 'GML_3_1_1.CoordinateReferenceSystemRefType'
      }, {
        elementName: 'solidProperty',
        typeInfo: 'GML_3_1_1.SolidPropertyType'
      }, {
        elementName: 'boundingBox',
        typeInfo: 'GML_3_1_1.EnvelopeType'
      }, {
        elementName: '_TimeTopologyPrimitive',
        typeInfo: 'GML_3_1_1.AbstractTimeTopologyPrimitiveType',
        substitutionHead: '_TimePrimitive'
      }, {
        elementName: 'maximalComplex',
        typeInfo: 'GML_3_1_1.TopoComplexMemberType'
      }, {
        elementName: 'TopoSurface',
        typeInfo: 'GML_3_1_1.TopoSurfaceType'
      }, {
        elementName: 'covariance',
        typeInfo: 'Double'
      }, {
        elementName: 'segments',
        typeInfo: 'GML_3_1_1.CurveSegmentArrayPropertyType'
      }, {
        elementName: 'usesVerticalCS',
        typeInfo: 'GML_3_1_1.VerticalCSRefType'
      }, {
        elementName: 'FeatureStyle',
        typeInfo: 'GML_3_1_1.FeatureStyleType',
        substitutionHead: '_GML'
      }, {
        elementName: 'geometryStyle',
        typeInfo: 'GML_3_1_1.GeometryStylePropertyType'
      }, {
        elementName: 'PassThroughOperation',
        typeInfo: 'GML_3_1_1.PassThroughOperationType',
        substitutionHead: '_SingleOperation'
      }, {
        elementName: 'angle',
        typeInfo: 'GML_3_1_1.MeasureType'
      }, {
        elementName: 'Style',
        typeInfo: 'GML_3_1_1.StyleType',
        substitutionHead: '_Style'
      }, {
        elementName: '_Datum',
        typeInfo: 'GML_3_1_1.AbstractDatumType',
        substitutionHead: 'Definition'
      }, {
        elementName: 'member',
        typeInfo: 'GML_3_1_1.AssociationType'
      }, {
        elementName: 'VerticalCRS',
        typeInfo: 'GML_3_1_1.VerticalCRSType',
        substitutionHead: '_CoordinateReferenceSystem'
      }, {
        elementName: 'CompositeValue',
        typeInfo: 'GML_3_1_1.CompositeValueType'
      }, {
        elementName: 'LabelExpression',
        typeInfo: 'String',
        scope: 'GML_3_1_1.LabelType'
      }]
  };
  return {
    GML_3_1_1: GML_3_1_1
  };
};
if (typeof define === 'function' && define.amd) {
  define([], GML_3_1_1_Module_Factory);
}
else {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.GML_3_1_1 = GML_3_1_1_Module_Factory().GML_3_1_1;
  }
  else {
    var GML_3_1_1 = GML_3_1_1_Module_Factory().GML_3_1_1;
  }
}
var OWS_1_0_0_Module_Factory = function () {
  var OWS_1_0_0 = {
    name: 'OWS_1_0_0',
    defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/ows',
    defaultAttributeNamespaceURI: 'http:\/\/www.w3.org\/1999\/xlink',
    typeInfos: [{
        type: 'classInfo',
        localName: 'OperationsMetadata',
        propertyInfos: [{
            type: 'element',
            name: 'operation',
            collection: true,
            elementName: 'Operation',
            typeInfo: 'OWS_1_0_0.Operation'
          }, {
            type: 'element',
            name: 'parameter',
            collection: true,
            elementName: 'Parameter',
            typeInfo: 'OWS_1_0_0.DomainType'
          }, {
            type: 'element',
            name: 'constraint',
            collection: true,
            elementName: 'Constraint',
            typeInfo: 'OWS_1_0_0.DomainType'
          }, {
            type: 'element',
            name: 'extendedCapabilities',
            elementName: 'ExtendedCapabilities',
            typeInfo: 'AnyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'Operation',
        propertyInfos: [{
            type: 'element',
            name: 'dcp',
            collection: true,
            elementName: 'DCP',
            typeInfo: 'OWS_1_0_0.DCP'
          }, {
            type: 'element',
            name: 'parameter',
            collection: true,
            elementName: 'Parameter',
            typeInfo: 'OWS_1_0_0.DomainType'
          }, {
            type: 'element',
            name: 'constraint',
            collection: true,
            elementName: 'Constraint',
            typeInfo: 'OWS_1_0_0.DomainType'
          }, {
            type: 'element',
            name: 'metadata',
            collection: true,
            elementName: 'Metadata',
            typeInfo: 'OWS_1_0_0.MetadataType'
          }, {
            name: 'name',
            typeInfo: 'String',
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'DCP',
        propertyInfos: [{
            type: 'element',
            name: 'http',
            elementName: 'HTTP',
            typeInfo: 'OWS_1_0_0.HTTP'
          }]
      }, {
        type: 'classInfo',
        localName: 'HTTP',
        propertyInfos: [{
            name: 'getOrPost',
            collection: true,
            elementTypeInfos: [{
                elementName: 'Get',
                typeInfo: 'OWS_1_0_0.RequestMethodType'
              }, {
                elementName: 'Post',
                typeInfo: 'OWS_1_0_0.RequestMethodType'
              }],
            type: 'elementRefs'
          }]
      }, {
        type: 'classInfo',
        localName: 'RequestMethodType',
        baseTypeInfo: 'OWS_1_0_0.OnlineResourceType',
        propertyInfos: [{
            type: 'element',
            name: 'constraint',
            collection: true,
            elementName: 'Constraint',
            typeInfo: 'OWS_1_0_0.DomainType'
          }]
      }, {
        type: 'classInfo',
        localName: 'DomainType',
        propertyInfos: [{
            type: 'element',
            name: 'value',
            collection: true,
            elementName: 'Value',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'metadata',
            collection: true,
            elementName: 'Metadata',
            typeInfo: 'OWS_1_0_0.MetadataType'
          }, {
            name: 'name',
            typeInfo: 'String',
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'MetadataType',
        propertyInfos: [{
            type: 'element',
            name: 'abstractMetaData',
            elementName: 'AbstractMetaData',
            typeInfo: 'AnyType'
          }, {
            name: 'about',
            typeInfo: 'String',
            attributeName: {
              localPart: 'about'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'KeywordsType',
        propertyInfos: [{
            type: 'element',
            name: 'keyword',
            collection: true,
            elementName: 'Keyword',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'type',
            elementName: 'Type',
            typeInfo: 'OWS_1_0_0.CodeType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ExceptionReport',
        propertyInfos: [{
            type: 'element',
            name: 'exception',
            collection: true,
            elementName: 'Exception',
            typeInfo: 'OWS_1_0_0.ExceptionType'
          }, {
            name: 'version',
            typeInfo: 'String',
            attributeName: {
              localPart: 'version'
            },
            type: 'attribute'
          }, {
            name: 'language',
            typeInfo: 'String',
            attributeName: {
              localPart: 'language'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ExceptionType',
        propertyInfos: [{
            type: 'element',
            name: 'exceptionText',
            collection: true,
            elementName: 'ExceptionText',
            typeInfo: 'String'
          }, {
            name: 'exceptionCode',
            typeInfo: 'String',
            attributeName: {
              localPart: 'exceptionCode'
            },
            type: 'attribute'
          }, {
            name: 'locator',
            typeInfo: 'String',
            attributeName: {
              localPart: 'locator'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'WGS84BoundingBoxType',
        baseTypeInfo: 'OWS_1_0_0.BoundingBoxType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'BoundingBoxType',
        propertyInfos: [{
            type: 'element',
            name: 'lowerCorner',
            elementName: 'LowerCorner',
            typeInfo: {
              type: 'list',
              typeInfo: 'Double'
            }
          }, {
            type: 'element',
            name: 'upperCorner',
            elementName: 'UpperCorner',
            typeInfo: {
              type: 'list',
              typeInfo: 'Double'
            }
          }, {
            name: 'crs',
            typeInfo: 'String',
            attributeName: {
              localPart: 'crs'
            },
            type: 'attribute'
          }, {
            name: 'dimensions',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'dimensions'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'CodeType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'String',
            type: 'value'
          }, {
            name: 'codeSpace',
            typeInfo: 'String',
            attributeName: {
              localPart: 'codeSpace'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'GetCapabilitiesType',
        propertyInfos: [{
            type: 'element',
            name: 'acceptVersions',
            elementName: 'AcceptVersions',
            typeInfo: 'OWS_1_0_0.AcceptVersionsType'
          }, {
            type: 'element',
            name: 'sections',
            elementName: 'Sections',
            typeInfo: 'OWS_1_0_0.SectionsType'
          }, {
            type: 'element',
            name: 'acceptFormats',
            elementName: 'AcceptFormats',
            typeInfo: 'OWS_1_0_0.AcceptFormatsType'
          }, {
            name: 'updateSequence',
            typeInfo: 'String',
            attributeName: {
              localPart: 'updateSequence'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ContactType',
        propertyInfos: [{
            type: 'element',
            name: 'phone',
            elementName: 'Phone',
            typeInfo: 'OWS_1_0_0.TelephoneType'
          }, {
            type: 'element',
            name: 'address',
            elementName: 'Address',
            typeInfo: 'OWS_1_0_0.AddressType'
          }, {
            type: 'element',
            name: 'onlineResource',
            elementName: 'OnlineResource',
            typeInfo: 'OWS_1_0_0.OnlineResourceType'
          }, {
            type: 'element',
            name: 'hoursOfService',
            elementName: 'HoursOfService',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'contactInstructions',
            elementName: 'ContactInstructions',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'ServiceIdentification',
        baseTypeInfo: 'OWS_1_0_0.DescriptionType',
        propertyInfos: [{
            type: 'element',
            name: 'serviceType',
            elementName: 'ServiceType',
            typeInfo: 'OWS_1_0_0.CodeType'
          }, {
            type: 'element',
            name: 'serviceTypeVersion',
            collection: true,
            elementName: 'ServiceTypeVersion',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'fees',
            elementName: 'Fees',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'accessConstraints',
            collection: true,
            elementName: 'AccessConstraints',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'DescriptionType',
        propertyInfos: [{
            type: 'element',
            name: 'title',
            elementName: 'Title',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: '_abstract',
            elementName: 'Abstract',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'keywords',
            collection: true,
            elementName: 'Keywords',
            typeInfo: 'OWS_1_0_0.KeywordsType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ResponsiblePartyType',
        propertyInfos: [{
            type: 'element',
            name: 'individualName',
            elementName: 'IndividualName',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'organisationName',
            elementName: 'OrganisationName',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'positionName',
            elementName: 'PositionName',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'contactInfo',
            elementName: 'ContactInfo',
            typeInfo: 'OWS_1_0_0.ContactType'
          }, {
            type: 'element',
            name: 'role',
            elementName: 'Role',
            typeInfo: 'OWS_1_0_0.CodeType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ServiceProvider',
        propertyInfos: [{
            type: 'element',
            name: 'providerName',
            elementName: 'ProviderName',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'providerSite',
            elementName: 'ProviderSite',
            typeInfo: 'OWS_1_0_0.OnlineResourceType'
          }, {
            type: 'element',
            name: 'serviceContact',
            elementName: 'ServiceContact',
            typeInfo: 'OWS_1_0_0.ResponsiblePartySubsetType'
          }]
      }, {
        type: 'classInfo',
        localName: 'OnlineResourceType',
        propertyInfos: [{
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ResponsiblePartySubsetType',
        propertyInfos: [{
            type: 'element',
            name: 'individualName',
            elementName: 'IndividualName',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'positionName',
            elementName: 'PositionName',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'contactInfo',
            elementName: 'ContactInfo',
            typeInfo: 'OWS_1_0_0.ContactType'
          }, {
            type: 'element',
            name: 'role',
            elementName: 'Role',
            typeInfo: 'OWS_1_0_0.CodeType'
          }]
      }, {
        type: 'classInfo',
        localName: 'TelephoneType',
        propertyInfos: [{
            type: 'element',
            name: 'voice',
            collection: true,
            elementName: 'Voice',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'facsimile',
            collection: true,
            elementName: 'Facsimile',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'CapabilitiesBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'serviceIdentification',
            elementName: 'ServiceIdentification',
            typeInfo: 'OWS_1_0_0.ServiceIdentification'
          }, {
            type: 'element',
            name: 'serviceProvider',
            elementName: 'ServiceProvider',
            typeInfo: 'OWS_1_0_0.ServiceProvider'
          }, {
            type: 'element',
            name: 'operationsMetadata',
            elementName: 'OperationsMetadata',
            typeInfo: 'OWS_1_0_0.OperationsMetadata'
          }, {
            name: 'version',
            typeInfo: 'String',
            attributeName: {
              localPart: 'version'
            },
            type: 'attribute'
          }, {
            name: 'updateSequence',
            typeInfo: 'String',
            attributeName: {
              localPart: 'updateSequence'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AcceptVersionsType',
        propertyInfos: [{
            type: 'element',
            name: 'version',
            collection: true,
            elementName: 'Version',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'IdentificationType',
        baseTypeInfo: 'OWS_1_0_0.DescriptionType',
        propertyInfos: [{
            type: 'element',
            name: 'identifier',
            elementName: 'Identifier',
            typeInfo: 'OWS_1_0_0.CodeType'
          }, {
            name: 'boundingBox',
            collection: true,
            elementName: 'BoundingBox',
            typeInfo: 'OWS_1_0_0.BoundingBoxType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'outputFormat',
            collection: true,
            elementName: 'OutputFormat',
            typeInfo: 'String'
          }, {
            name: 'availableCRS',
            collection: true,
            elementName: 'AvailableCRS',
            typeInfo: 'String',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'metadata',
            collection: true,
            elementName: 'Metadata',
            typeInfo: 'OWS_1_0_0.MetadataType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AcceptFormatsType',
        propertyInfos: [{
            type: 'element',
            name: 'outputFormat',
            collection: true,
            elementName: 'OutputFormat',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'SectionsType',
        propertyInfos: [{
            type: 'element',
            name: 'section',
            collection: true,
            elementName: 'Section',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'AddressType',
        propertyInfos: [{
            type: 'element',
            name: 'deliveryPoint',
            collection: true,
            elementName: 'DeliveryPoint',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'city',
            elementName: 'City',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'administrativeArea',
            elementName: 'AdministrativeArea',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'postalCode',
            elementName: 'PostalCode',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'country',
            elementName: 'Country',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'electronicMailAddress',
            collection: true,
            elementName: 'ElectronicMailAddress',
            typeInfo: 'String'
          }]
      }],
    elementInfos: [{
        elementName: 'OperationsMetadata',
        typeInfo: 'OWS_1_0_0.OperationsMetadata'
      }, {
        elementName: 'Operation',
        typeInfo: 'OWS_1_0_0.Operation'
      }, {
        elementName: 'DCP',
        typeInfo: 'OWS_1_0_0.DCP'
      }, {
        elementName: 'HTTP',
        typeInfo: 'OWS_1_0_0.HTTP'
      }, {
        elementName: 'ExceptionReport',
        typeInfo: 'OWS_1_0_0.ExceptionReport'
      }, {
        elementName: 'ServiceIdentification',
        typeInfo: 'OWS_1_0_0.ServiceIdentification'
      }, {
        elementName: 'ServiceProvider',
        typeInfo: 'OWS_1_0_0.ServiceProvider'
      }, {
        elementName: 'WGS84BoundingBox',
        typeInfo: 'OWS_1_0_0.WGS84BoundingBoxType',
        substitutionHead: 'BoundingBox'
      }, {
        elementName: 'Fees',
        typeInfo: 'String'
      }, {
        elementName: 'Exception',
        typeInfo: 'OWS_1_0_0.ExceptionType'
      }, {
        elementName: 'Metadata',
        typeInfo: 'OWS_1_0_0.MetadataType'
      }, {
        elementName: 'OutputFormat',
        typeInfo: 'String'
      }, {
        elementName: 'Title',
        typeInfo: 'String'
      }, {
        elementName: 'PositionName',
        typeInfo: 'String'
      }, {
        elementName: 'Abstract',
        typeInfo: 'String'
      }, {
        elementName: 'AccessConstraints',
        typeInfo: 'String'
      }, {
        elementName: 'ExtendedCapabilities',
        typeInfo: 'AnyType'
      }, {
        elementName: 'Keywords',
        typeInfo: 'OWS_1_0_0.KeywordsType'
      }, {
        elementName: 'AbstractMetaData',
        typeInfo: 'AnyType'
      }, {
        elementName: 'SupportedCRS',
        typeInfo: 'String',
        substitutionHead: 'AvailableCRS'
      }, {
        elementName: 'OrganisationName',
        typeInfo: 'String'
      }, {
        elementName: 'ContactInfo',
        typeInfo: 'OWS_1_0_0.ContactType'
      }, {
        elementName: 'AvailableCRS',
        typeInfo: 'String'
      }, {
        elementName: 'Language',
        typeInfo: 'String'
      }, {
        elementName: 'PointOfContact',
        typeInfo: 'OWS_1_0_0.ResponsiblePartyType'
      }, {
        elementName: 'GetCapabilities',
        typeInfo: 'OWS_1_0_0.GetCapabilitiesType'
      }, {
        elementName: 'BoundingBox',
        typeInfo: 'OWS_1_0_0.BoundingBoxType'
      }, {
        elementName: 'IndividualName',
        typeInfo: 'String'
      }, {
        elementName: 'Role',
        typeInfo: 'OWS_1_0_0.CodeType'
      }, {
        elementName: 'Identifier',
        typeInfo: 'OWS_1_0_0.CodeType'
      }, {
        elementName: 'Post',
        typeInfo: 'OWS_1_0_0.RequestMethodType',
        scope: 'OWS_1_0_0.HTTP'
      }, {
        elementName: 'Get',
        typeInfo: 'OWS_1_0_0.RequestMethodType',
        scope: 'OWS_1_0_0.HTTP'
      }]
  };
  return {
    OWS_1_0_0: OWS_1_0_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], OWS_1_0_0_Module_Factory);
}
else {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.OWS_1_0_0 = OWS_1_0_0_Module_Factory().OWS_1_0_0;
  }
  else {
    var OWS_1_0_0 = OWS_1_0_0_Module_Factory().OWS_1_0_0;
  }
}
var OWS_1_1_0_Module_Factory = function () {
  var OWS_1_1_0 = {
    name: 'OWS_1_1_0',
    defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1',
    defaultAttributeNamespaceURI: 'http:\/\/www.w3.org\/1999\/xlink',
    typeInfos: [{
        type: 'classInfo',
        localName: 'OperationsMetadata',
        propertyInfos: [{
            type: 'element',
            name: 'operation',
            collection: true,
            elementName: 'Operation',
            typeInfo: 'OWS_1_1_0.Operation'
          }, {
            type: 'element',
            name: 'parameter',
            collection: true,
            elementName: 'Parameter',
            typeInfo: 'OWS_1_1_0.DomainType'
          }, {
            type: 'element',
            name: 'constraint',
            collection: true,
            elementName: 'Constraint',
            typeInfo: 'OWS_1_1_0.DomainType'
          }, {
            type: 'element',
            name: 'extendedCapabilities',
            elementName: 'ExtendedCapabilities',
            typeInfo: 'AnyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'Operation',
        propertyInfos: [{
            type: 'element',
            name: 'dcp',
            collection: true,
            elementName: 'DCP',
            typeInfo: 'OWS_1_1_0.DCP'
          }, {
            type: 'element',
            name: 'parameter',
            collection: true,
            elementName: 'Parameter',
            typeInfo: 'OWS_1_1_0.DomainType'
          }, {
            type: 'element',
            name: 'constraint',
            collection: true,
            elementName: 'Constraint',
            typeInfo: 'OWS_1_1_0.DomainType'
          }, {
            type: 'element',
            name: 'metadata',
            collection: true,
            elementName: 'Metadata',
            typeInfo: 'OWS_1_1_0.MetadataType'
          }, {
            name: 'name',
            typeInfo: 'String',
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'DCP',
        propertyInfos: [{
            type: 'element',
            name: 'http',
            elementName: 'HTTP',
            typeInfo: 'OWS_1_1_0.HTTP'
          }]
      }, {
        type: 'classInfo',
        localName: 'HTTP',
        propertyInfos: [{
            name: 'getOrPost',
            collection: true,
            elementTypeInfos: [{
                elementName: 'Get',
                typeInfo: 'OWS_1_1_0.RequestMethodType'
              }, {
                elementName: 'Post',
                typeInfo: 'OWS_1_1_0.RequestMethodType'
              }],
            type: 'elementRefs'
          }]
      }, {
        type: 'classInfo',
        localName: 'RequestMethodType',
        baseTypeInfo: 'OWS_1_1_0.OnlineResourceType',
        propertyInfos: [{
            type: 'element',
            name: 'constraint',
            collection: true,
            elementName: 'Constraint',
            typeInfo: 'OWS_1_1_0.DomainType'
          }]
      }, {
        type: 'classInfo',
        localName: 'DomainType',
        baseTypeInfo: 'OWS_1_1_0.UnNamedDomainType',
        propertyInfos: [{
            name: 'name',
            typeInfo: 'String',
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'MetadataType',
        propertyInfos: [{
            type: 'element',
            name: 'abstractMetaData',
            elementName: 'AbstractMetaData',
            typeInfo: 'AnyType'
          }, {
            name: 'about',
            typeInfo: 'String',
            attributeName: {
              localPart: 'about'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'WGS84BoundingBoxType',
        baseTypeInfo: 'OWS_1_1_0.BoundingBoxType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'BoundingBoxType',
        propertyInfos: [{
            type: 'element',
            name: 'lowerCorner',
            elementName: 'LowerCorner',
            typeInfo: {
              type: 'list',
              typeInfo: 'Double'
            }
          }, {
            type: 'element',
            name: 'upperCorner',
            elementName: 'UpperCorner',
            typeInfo: {
              type: 'list',
              typeInfo: 'Double'
            }
          }, {
            name: 'crs',
            typeInfo: 'String',
            attributeName: {
              localPart: 'crs'
            },
            type: 'attribute'
          }, {
            name: 'dimensions',
            typeInfo: 'Integer',
            attributeName: {
              localPart: 'dimensions'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'DomainMetadataType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'String',
            type: 'value'
          }, {
            name: 'reference',
            typeInfo: 'String',
            attributeName: {
              localPart: 'reference',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'CodeType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'String',
            type: 'value'
          }, {
            name: 'codeSpace',
            typeInfo: 'String',
            attributeName: {
              localPart: 'codeSpace'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ValuesReference',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'String',
            type: 'value'
          }, {
            name: 'reference',
            typeInfo: 'String',
            attributeName: {
              localPart: 'reference',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ContactType',
        propertyInfos: [{
            type: 'element',
            name: 'phone',
            elementName: 'Phone',
            typeInfo: 'OWS_1_1_0.TelephoneType'
          }, {
            type: 'element',
            name: 'address',
            elementName: 'Address',
            typeInfo: 'OWS_1_1_0.AddressType'
          }, {
            type: 'element',
            name: 'onlineResource',
            elementName: 'OnlineResource',
            typeInfo: 'OWS_1_1_0.OnlineResourceType'
          }, {
            type: 'element',
            name: 'hoursOfService',
            elementName: 'HoursOfService',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'contactInstructions',
            elementName: 'ContactInstructions',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'ServiceIdentification',
        baseTypeInfo: 'OWS_1_1_0.DescriptionType',
        propertyInfos: [{
            type: 'element',
            name: 'serviceType',
            elementName: 'ServiceType',
            typeInfo: 'OWS_1_1_0.CodeType'
          }, {
            type: 'element',
            name: 'serviceTypeVersion',
            collection: true,
            elementName: 'ServiceTypeVersion',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'profile',
            collection: true,
            elementName: 'Profile',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'fees',
            elementName: 'Fees',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'accessConstraints',
            collection: true,
            elementName: 'AccessConstraints',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'DescriptionType',
        propertyInfos: [{
            type: 'element',
            name: 'title',
            collection: true,
            elementName: 'Title',
            typeInfo: 'OWS_1_1_0.LanguageStringType'
          }, {
            type: 'element',
            name: '_abstract',
            collection: true,
            elementName: 'Abstract',
            typeInfo: 'OWS_1_1_0.LanguageStringType'
          }, {
            type: 'element',
            name: 'keywords',
            collection: true,
            elementName: 'Keywords',
            typeInfo: 'OWS_1_1_0.KeywordsType'
          }]
      }, {
        type: 'classInfo',
        localName: 'LanguageStringType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'String',
            type: 'value'
          }, {
            name: 'lang',
            typeInfo: 'String',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'KeywordsType',
        propertyInfos: [{
            type: 'element',
            name: 'keyword',
            collection: true,
            elementName: 'Keyword',
            typeInfo: 'OWS_1_1_0.LanguageStringType'
          }, {
            type: 'element',
            name: 'type',
            elementName: 'Type',
            typeInfo: 'OWS_1_1_0.CodeType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ReferenceGroupType',
        baseTypeInfo: 'OWS_1_1_0.BasicIdentificationType',
        propertyInfos: [{
            name: 'abstractReferenceBase',
            collection: true,
            elementName: 'AbstractReferenceBase',
            typeInfo: 'OWS_1_1_0.AbstractReferenceBaseType',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'GetResourceByIdType',
        propertyInfos: [{
            type: 'element',
            name: 'resourceID',
            collection: true,
            elementName: 'ResourceID',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'outputFormat',
            elementName: 'OutputFormat',
            typeInfo: 'String'
          }, {
            name: 'service',
            typeInfo: 'String',
            attributeName: {
              localPart: 'service'
            },
            type: 'attribute'
          }, {
            name: 'version',
            typeInfo: 'String',
            attributeName: {
              localPart: 'version'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AllowedValues',
        propertyInfos: [{
            name: 'valueOrRange',
            collection: true,
            elementTypeInfos: [{
                elementName: 'Value',
                typeInfo: 'OWS_1_1_0.ValueType'
              }, {
                elementName: 'Range',
                typeInfo: 'OWS_1_1_0.RangeType'
              }],
            type: 'elements'
          }]
      }, {
        type: 'classInfo',
        localName: 'ValueType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'String',
            type: 'value'
          }]
      }, {
        type: 'classInfo',
        localName: 'RangeType',
        propertyInfos: [{
            type: 'element',
            name: 'minimumValue',
            elementName: 'MinimumValue',
            typeInfo: 'OWS_1_1_0.ValueType'
          }, {
            type: 'element',
            name: 'maximumValue',
            elementName: 'MaximumValue',
            typeInfo: 'OWS_1_1_0.ValueType'
          }, {
            type: 'element',
            name: 'spacing',
            elementName: 'Spacing',
            typeInfo: 'OWS_1_1_0.ValueType'
          }, {
            name: 'rangeClosure',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            },
            attributeName: {
              localPart: 'rangeClosure',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AbstractReferenceBaseType',
        propertyInfos: [{
            name: 'type',
            typeInfo: 'String',
            attributeName: {
              localPart: 'type',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ServiceReferenceType',
        baseTypeInfo: 'OWS_1_1_0.ReferenceType',
        propertyInfos: [{
            type: 'element',
            name: 'requestMessage',
            elementName: 'RequestMessage',
            typeInfo: 'AnyType'
          }, {
            type: 'element',
            name: 'requestMessageReference',
            elementName: 'RequestMessageReference',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'ReferenceType',
        baseTypeInfo: 'OWS_1_1_0.AbstractReferenceBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'identifier',
            elementName: 'Identifier',
            typeInfo: 'OWS_1_1_0.CodeType'
          }, {
            type: 'element',
            name: '_abstract',
            collection: true,
            elementName: 'Abstract',
            typeInfo: 'OWS_1_1_0.LanguageStringType'
          }, {
            type: 'element',
            name: 'format',
            elementName: 'Format',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'metadata',
            collection: true,
            elementName: 'Metadata',
            typeInfo: 'OWS_1_1_0.MetadataType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ServiceProvider',
        propertyInfos: [{
            type: 'element',
            name: 'providerName',
            elementName: 'ProviderName',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'providerSite',
            elementName: 'ProviderSite',
            typeInfo: 'OWS_1_1_0.OnlineResourceType'
          }, {
            type: 'element',
            name: 'serviceContact',
            elementName: 'ServiceContact',
            typeInfo: 'OWS_1_1_0.ResponsiblePartySubsetType'
          }]
      }, {
        type: 'classInfo',
        localName: 'OnlineResourceType',
        propertyInfos: [{
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ResponsiblePartySubsetType',
        propertyInfos: [{
            type: 'element',
            name: 'individualName',
            elementName: 'IndividualName',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'positionName',
            elementName: 'PositionName',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'contactInfo',
            elementName: 'ContactInfo',
            typeInfo: 'OWS_1_1_0.ContactType'
          }, {
            type: 'element',
            name: 'role',
            elementName: 'Role',
            typeInfo: 'OWS_1_1_0.CodeType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ExceptionReport',
        propertyInfos: [{
            type: 'element',
            name: 'exception',
            collection: true,
            elementName: 'Exception',
            typeInfo: 'OWS_1_1_0.ExceptionType'
          }, {
            name: 'version',
            typeInfo: 'String',
            attributeName: {
              localPart: 'version'
            },
            type: 'attribute'
          }, {
            name: 'lang',
            typeInfo: 'String',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ExceptionType',
        propertyInfos: [{
            type: 'element',
            name: 'exceptionText',
            collection: true,
            elementName: 'ExceptionText',
            typeInfo: 'String'
          }, {
            name: 'exceptionCode',
            typeInfo: 'String',
            attributeName: {
              localPart: 'exceptionCode'
            },
            type: 'attribute'
          }, {
            name: 'locator',
            typeInfo: 'String',
            attributeName: {
              localPart: 'locator'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'GetCapabilitiesType',
        propertyInfos: [{
            type: 'element',
            name: 'acceptVersions',
            elementName: 'AcceptVersions',
            typeInfo: 'OWS_1_1_0.AcceptVersionsType'
          }, {
            type: 'element',
            name: 'sections',
            elementName: 'Sections',
            typeInfo: 'OWS_1_1_0.SectionsType'
          }, {
            type: 'element',
            name: 'acceptFormats',
            elementName: 'AcceptFormats',
            typeInfo: 'OWS_1_1_0.AcceptFormatsType'
          }, {
            name: 'updateSequence',
            typeInfo: 'String',
            attributeName: {
              localPart: 'updateSequence'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'NoValues',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'ManifestType',
        baseTypeInfo: 'OWS_1_1_0.BasicIdentificationType',
        propertyInfos: [{
            type: 'element',
            name: 'referenceGroup',
            collection: true,
            elementName: 'ReferenceGroup',
            typeInfo: 'OWS_1_1_0.ReferenceGroupType'
          }]
      }, {
        type: 'classInfo',
        localName: 'DatasetDescriptionSummaryBaseType',
        baseTypeInfo: 'OWS_1_1_0.DescriptionType',
        propertyInfos: [{
            type: 'element',
            name: 'wgs84BoundingBox',
            collection: true,
            elementName: 'WGS84BoundingBox',
            typeInfo: 'OWS_1_1_0.WGS84BoundingBoxType'
          }, {
            type: 'element',
            name: 'identifier',
            elementName: 'Identifier',
            typeInfo: 'OWS_1_1_0.CodeType'
          }, {
            name: 'boundingBox',
            collection: true,
            elementName: 'BoundingBox',
            typeInfo: 'OWS_1_1_0.BoundingBoxType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'metadata',
            collection: true,
            elementName: 'Metadata',
            typeInfo: 'OWS_1_1_0.MetadataType'
          }, {
            type: 'element',
            name: 'datasetDescriptionSummary',
            collection: true,
            elementName: 'DatasetDescriptionSummary',
            typeInfo: 'OWS_1_1_0.DatasetDescriptionSummaryBaseType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ResponsiblePartyType',
        propertyInfos: [{
            type: 'element',
            name: 'individualName',
            elementName: 'IndividualName',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'organisationName',
            elementName: 'OrganisationName',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'positionName',
            elementName: 'PositionName',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'contactInfo',
            elementName: 'ContactInfo',
            typeInfo: 'OWS_1_1_0.ContactType'
          }, {
            type: 'element',
            name: 'role',
            elementName: 'Role',
            typeInfo: 'OWS_1_1_0.CodeType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AnyValue',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'BasicIdentificationType',
        baseTypeInfo: 'OWS_1_1_0.DescriptionType',
        propertyInfos: [{
            type: 'element',
            name: 'identifier',
            elementName: 'Identifier',
            typeInfo: 'OWS_1_1_0.CodeType'
          }, {
            type: 'element',
            name: 'metadata',
            collection: true,
            elementName: 'Metadata',
            typeInfo: 'OWS_1_1_0.MetadataType'
          }]
      }, {
        type: 'classInfo',
        localName: 'TelephoneType',
        propertyInfos: [{
            type: 'element',
            name: 'voice',
            collection: true,
            elementName: 'Voice',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'facsimile',
            collection: true,
            elementName: 'Facsimile',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'ContentsBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'datasetDescriptionSummary',
            collection: true,
            elementName: 'DatasetDescriptionSummary',
            typeInfo: 'OWS_1_1_0.DatasetDescriptionSummaryBaseType'
          }, {
            type: 'element',
            name: 'otherSource',
            collection: true,
            elementName: 'OtherSource',
            typeInfo: 'OWS_1_1_0.MetadataType'
          }]
      }, {
        type: 'classInfo',
        localName: 'CapabilitiesBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'serviceIdentification',
            elementName: 'ServiceIdentification',
            typeInfo: 'OWS_1_1_0.ServiceIdentification'
          }, {
            type: 'element',
            name: 'serviceProvider',
            elementName: 'ServiceProvider',
            typeInfo: 'OWS_1_1_0.ServiceProvider'
          }, {
            type: 'element',
            name: 'operationsMetadata',
            elementName: 'OperationsMetadata',
            typeInfo: 'OWS_1_1_0.OperationsMetadata'
          }, {
            name: 'version',
            typeInfo: 'String',
            attributeName: {
              localPart: 'version'
            },
            type: 'attribute'
          }, {
            name: 'updateSequence',
            typeInfo: 'String',
            attributeName: {
              localPart: 'updateSequence'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'UnNamedDomainType',
        propertyInfos: [{
            type: 'element',
            name: 'allowedValues',
            elementName: 'AllowedValues',
            typeInfo: 'OWS_1_1_0.AllowedValues'
          }, {
            type: 'element',
            name: 'anyValue',
            elementName: 'AnyValue',
            typeInfo: 'OWS_1_1_0.AnyValue'
          }, {
            type: 'element',
            name: 'noValues',
            elementName: 'NoValues',
            typeInfo: 'OWS_1_1_0.NoValues'
          }, {
            type: 'element',
            name: 'valuesReference',
            elementName: 'ValuesReference',
            typeInfo: 'OWS_1_1_0.ValuesReference'
          }, {
            type: 'element',
            name: 'defaultValue',
            elementName: 'DefaultValue',
            typeInfo: 'OWS_1_1_0.ValueType'
          }, {
            type: 'element',
            name: 'meaning',
            elementName: 'Meaning',
            typeInfo: 'OWS_1_1_0.DomainMetadataType'
          }, {
            type: 'element',
            name: 'dataType',
            elementName: 'DataType',
            typeInfo: 'OWS_1_1_0.DomainMetadataType'
          }, {
            type: 'element',
            name: 'uom',
            elementName: 'UOM',
            typeInfo: 'OWS_1_1_0.DomainMetadataType'
          }, {
            type: 'element',
            name: 'referenceSystem',
            elementName: 'ReferenceSystem',
            typeInfo: 'OWS_1_1_0.DomainMetadataType'
          }, {
            type: 'element',
            name: 'metadata',
            collection: true,
            elementName: 'Metadata',
            typeInfo: 'OWS_1_1_0.MetadataType'
          }]
      }, {
        type: 'classInfo',
        localName: 'AcceptVersionsType',
        propertyInfos: [{
            type: 'element',
            name: 'version',
            collection: true,
            elementName: 'Version',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'IdentificationType',
        baseTypeInfo: 'OWS_1_1_0.BasicIdentificationType',
        propertyInfos: [{
            name: 'boundingBox',
            collection: true,
            elementName: 'BoundingBox',
            typeInfo: 'OWS_1_1_0.BoundingBoxType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'outputFormat',
            collection: true,
            elementName: 'OutputFormat',
            typeInfo: 'String'
          }, {
            name: 'availableCRS',
            collection: true,
            elementName: 'AvailableCRS',
            typeInfo: 'String',
            type: 'elementRef'
          }]
      }, {
        type: 'classInfo',
        localName: 'AcceptFormatsType',
        propertyInfos: [{
            type: 'element',
            name: 'outputFormat',
            collection: true,
            elementName: 'OutputFormat',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'SectionsType',
        propertyInfos: [{
            type: 'element',
            name: 'section',
            collection: true,
            elementName: 'Section',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'AddressType',
        propertyInfos: [{
            type: 'element',
            name: 'deliveryPoint',
            collection: true,
            elementName: 'DeliveryPoint',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'city',
            elementName: 'City',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'administrativeArea',
            elementName: 'AdministrativeArea',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'postalCode',
            elementName: 'PostalCode',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'country',
            elementName: 'Country',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'electronicMailAddress',
            collection: true,
            elementName: 'ElectronicMailAddress',
            typeInfo: 'String'
          }]
      }],
    elementInfos: [{
        elementName: 'OperationsMetadata',
        typeInfo: 'OWS_1_1_0.OperationsMetadata'
      }, {
        elementName: 'Operation',
        typeInfo: 'OWS_1_1_0.Operation'
      }, {
        elementName: 'DCP',
        typeInfo: 'OWS_1_1_0.DCP'
      }, {
        elementName: 'HTTP',
        typeInfo: 'OWS_1_1_0.HTTP'
      }, {
        elementName: 'ValuesReference',
        typeInfo: 'OWS_1_1_0.ValuesReference'
      }, {
        elementName: 'ServiceIdentification',
        typeInfo: 'OWS_1_1_0.ServiceIdentification'
      }, {
        elementName: 'AllowedValues',
        typeInfo: 'OWS_1_1_0.AllowedValues'
      }, {
        elementName: 'ServiceProvider',
        typeInfo: 'OWS_1_1_0.ServiceProvider'
      }, {
        elementName: 'ExceptionReport',
        typeInfo: 'OWS_1_1_0.ExceptionReport'
      }, {
        elementName: 'NoValues',
        typeInfo: 'OWS_1_1_0.NoValues'
      }, {
        elementName: 'AnyValue',
        typeInfo: 'OWS_1_1_0.AnyValue'
      }, {
        elementName: 'Metadata',
        typeInfo: 'OWS_1_1_0.MetadataType'
      }, {
        elementName: 'MaximumValue',
        typeInfo: 'OWS_1_1_0.ValueType'
      }, {
        elementName: 'WGS84BoundingBox',
        typeInfo: 'OWS_1_1_0.WGS84BoundingBoxType',
        substitutionHead: 'BoundingBox'
      }, {
        elementName: 'ReferenceSystem',
        typeInfo: 'OWS_1_1_0.DomainMetadataType'
      }, {
        elementName: 'Keywords',
        typeInfo: 'OWS_1_1_0.KeywordsType'
      }, {
        elementName: 'OrganisationName',
        typeInfo: 'String'
      }, {
        elementName: 'DataType',
        typeInfo: 'OWS_1_1_0.DomainMetadataType'
      }, {
        elementName: 'ContactInfo',
        typeInfo: 'OWS_1_1_0.ContactType'
      }, {
        elementName: 'InputData',
        typeInfo: 'OWS_1_1_0.ManifestType'
      }, {
        elementName: 'AbstractMetaData',
        typeInfo: 'AnyType'
      }, {
        elementName: 'IndividualName',
        typeInfo: 'String'
      }, {
        elementName: 'DefaultValue',
        typeInfo: 'OWS_1_1_0.ValueType'
      }, {
        elementName: 'OtherSource',
        typeInfo: 'OWS_1_1_0.MetadataType'
      }, {
        elementName: 'Identifier',
        typeInfo: 'OWS_1_1_0.CodeType'
      }, {
        elementName: 'Language',
        typeInfo: 'String'
      }, {
        elementName: 'GetCapabilities',
        typeInfo: 'OWS_1_1_0.GetCapabilitiesType'
      }, {
        elementName: 'BoundingBox',
        typeInfo: 'OWS_1_1_0.BoundingBoxType'
      }, {
        elementName: 'Resource',
        typeInfo: 'AnyType'
      }, {
        elementName: 'OutputFormat',
        typeInfo: 'String'
      }, {
        elementName: 'Title',
        typeInfo: 'OWS_1_1_0.LanguageStringType'
      }, {
        elementName: 'Spacing',
        typeInfo: 'OWS_1_1_0.ValueType'
      }, {
        elementName: 'Fees',
        typeInfo: 'String'
      }, {
        elementName: 'Range',
        typeInfo: 'OWS_1_1_0.RangeType'
      }, {
        elementName: 'Manifest',
        typeInfo: 'OWS_1_1_0.ManifestType'
      }, {
        elementName: 'Exception',
        typeInfo: 'OWS_1_1_0.ExceptionType'
      }, {
        elementName: 'AbstractReferenceBase',
        typeInfo: 'OWS_1_1_0.AbstractReferenceBaseType'
      }, {
        elementName: 'ServiceReference',
        typeInfo: 'OWS_1_1_0.ServiceReferenceType',
        substitutionHead: 'Reference'
      }, {
        elementName: 'ReferenceGroup',
        typeInfo: 'OWS_1_1_0.ReferenceGroupType'
      }, {
        elementName: 'AccessConstraints',
        typeInfo: 'String'
      }, {
        elementName: 'ExtendedCapabilities',
        typeInfo: 'AnyType'
      }, {
        elementName: 'GetResourceByID',
        typeInfo: 'OWS_1_1_0.GetResourceByIdType'
      }, {
        elementName: 'DatasetDescriptionSummary',
        typeInfo: 'OWS_1_1_0.DatasetDescriptionSummaryBaseType'
      }, {
        elementName: 'PositionName',
        typeInfo: 'String'
      }, {
        elementName: 'Abstract',
        typeInfo: 'OWS_1_1_0.LanguageStringType'
      }, {
        elementName: 'Reference',
        typeInfo: 'OWS_1_1_0.ReferenceType',
        substitutionHead: 'AbstractReferenceBase'
      }, {
        elementName: 'Value',
        typeInfo: 'OWS_1_1_0.ValueType'
      }, {
        elementName: 'AvailableCRS',
        typeInfo: 'String'
      }, {
        elementName: 'MinimumValue',
        typeInfo: 'OWS_1_1_0.ValueType'
      }, {
        elementName: 'OperationResponse',
        typeInfo: 'OWS_1_1_0.ManifestType'
      }, {
        elementName: 'Meaning',
        typeInfo: 'OWS_1_1_0.DomainMetadataType'
      }, {
        elementName: 'SupportedCRS',
        typeInfo: 'String',
        substitutionHead: 'AvailableCRS'
      }, {
        elementName: 'Role',
        typeInfo: 'OWS_1_1_0.CodeType'
      }, {
        elementName: 'UOM',
        typeInfo: 'OWS_1_1_0.DomainMetadataType'
      }, {
        elementName: 'PointOfContact',
        typeInfo: 'OWS_1_1_0.ResponsiblePartyType'
      }, {
        elementName: 'Post',
        typeInfo: 'OWS_1_1_0.RequestMethodType',
        scope: 'OWS_1_1_0.HTTP'
      }, {
        elementName: 'Get',
        typeInfo: 'OWS_1_1_0.RequestMethodType',
        scope: 'OWS_1_1_0.HTTP'
      }]
  };
  return {
    OWS_1_1_0: OWS_1_1_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], OWS_1_1_0_Module_Factory);
}
else {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.OWS_1_1_0 = OWS_1_1_0_Module_Factory().OWS_1_1_0;
  }
  else {
    var OWS_1_1_0 = OWS_1_1_0_Module_Factory().OWS_1_1_0;
  }
}
var SMIL_2_0_Module_Factory = function () {
  var SMIL_2_0 = {
    name: 'SMIL_2_0',
    defaultElementNamespaceURI: 'http:\/\/www.w3.org\/2001\/SMIL20\/',
    typeInfos: [{
        type: 'classInfo',
        localName: 'SetPrototype',
        propertyInfos: [{
            name: 'attributeName',
            typeInfo: 'String',
            attributeName: 'attributeName',
            type: 'attribute'
          }, {
            name: 'attributeType',
            typeInfo: 'String',
            attributeName: 'attributeType',
            type: 'attribute'
          }, {
            name: 'to',
            typeInfo: 'String',
            attributeName: 'to',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AnimateColorPrototype',
        propertyInfos: [{
            name: 'attributeName',
            typeInfo: 'String',
            attributeName: 'attributeName',
            type: 'attribute'
          }, {
            name: 'attributeType',
            typeInfo: 'String',
            attributeName: 'attributeType',
            type: 'attribute'
          }, {
            name: 'additive',
            typeInfo: 'String',
            attributeName: 'additive',
            type: 'attribute'
          }, {
            name: 'accumulate',
            typeInfo: 'String',
            attributeName: 'accumulate',
            type: 'attribute'
          }, {
            name: 'from',
            typeInfo: 'String',
            attributeName: 'from',
            type: 'attribute'
          }, {
            name: 'by',
            typeInfo: 'String',
            attributeName: 'by',
            type: 'attribute'
          }, {
            name: 'values',
            typeInfo: 'String',
            attributeName: 'values',
            type: 'attribute'
          }, {
            name: 'to',
            typeInfo: 'String',
            attributeName: 'to',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AnimateMotionPrototype',
        propertyInfos: [{
            name: 'origin',
            typeInfo: 'String',
            attributeName: 'origin',
            type: 'attribute'
          }, {
            name: 'additive',
            typeInfo: 'String',
            attributeName: 'additive',
            type: 'attribute'
          }, {
            name: 'accumulate',
            typeInfo: 'String',
            attributeName: 'accumulate',
            type: 'attribute'
          }, {
            name: 'from',
            typeInfo: 'String',
            attributeName: 'from',
            type: 'attribute'
          }, {
            name: 'by',
            typeInfo: 'String',
            attributeName: 'by',
            type: 'attribute'
          }, {
            name: 'values',
            typeInfo: 'String',
            attributeName: 'values',
            type: 'attribute'
          }, {
            name: 'to',
            typeInfo: 'String',
            attributeName: 'to',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AnimatePrototype',
        propertyInfos: [{
            name: 'from',
            typeInfo: 'String',
            attributeName: 'from',
            type: 'attribute'
          }, {
            name: 'by',
            typeInfo: 'String',
            attributeName: 'by',
            type: 'attribute'
          }, {
            name: 'values',
            typeInfo: 'String',
            attributeName: 'values',
            type: 'attribute'
          }, {
            name: 'to',
            typeInfo: 'String',
            attributeName: 'to',
            type: 'attribute'
          }, {
            name: 'additive',
            typeInfo: 'String',
            attributeName: 'additive',
            type: 'attribute'
          }, {
            name: 'accumulate',
            typeInfo: 'String',
            attributeName: 'accumulate',
            type: 'attribute'
          }, {
            name: 'attributeName',
            typeInfo: 'String',
            attributeName: 'attributeName',
            type: 'attribute'
          }, {
            name: 'attributeType',
            typeInfo: 'String',
            attributeName: 'attributeType',
            type: 'attribute'
          }]
      }, {
        type: 'enumInfo',
        localName: 'RestartDefaultType',
        baseTypeInfo: 'String',
        values: ['never', 'always', 'whenNotActive', 'inherit']
      }, {
        type: 'enumInfo',
        localName: 'FillDefaultType',
        baseTypeInfo: 'String',
        values: ['remove', 'freeze', 'hold', 'auto', 'inherit', 'transition']
      }, {
        type: 'enumInfo',
        localName: 'FillTimingAttrsType',
        baseTypeInfo: 'String',
        values: ['remove', 'freeze', 'hold', 'auto', 'default', 'transition']
      }, {
        type: 'enumInfo',
        localName: 'RestartTimingType',
        baseTypeInfo: 'String',
        values: ['never', 'always', 'whenNotActive', 'default']
      }, {
        type: 'enumInfo',
        localName: 'SyncBehaviorType',
        baseTypeInfo: 'String',
        values: ['canSlip', 'locked', 'independent', 'default']
      }, {
        type: 'enumInfo',
        localName: 'SyncBehaviorDefaultType',
        baseTypeInfo: 'String',
        values: ['canSlip', 'locked', 'independent', 'inherit']
      }],
    elementInfos: [{
        elementName: 'animate',
        typeInfo: 'SMIL_2_0_Language.AnimateType',
        substitutionHead: {
          localPart: 'animate',
          namespaceURI: 'http:\/\/www.w3.org\/2001\/SMIL20\/Language'
        }
      }, {
        elementName: 'animateMotion',
        typeInfo: 'SMIL_2_0_Language.AnimateMotionType',
        substitutionHead: {
          localPart: 'animateMotion',
          namespaceURI: 'http:\/\/www.w3.org\/2001\/SMIL20\/Language'
        }
      }, {
        elementName: 'set',
        typeInfo: 'SMIL_2_0_Language.SetType',
        substitutionHead: {
          localPart: 'set',
          namespaceURI: 'http:\/\/www.w3.org\/2001\/SMIL20\/Language'
        }
      }, {
        elementName: 'animateColor',
        typeInfo: 'SMIL_2_0_Language.AnimateColorType',
        substitutionHead: {
          localPart: 'animateColor',
          namespaceURI: 'http:\/\/www.w3.org\/2001\/SMIL20\/Language'
        }
      }]
  };
  return {
    SMIL_2_0: SMIL_2_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], SMIL_2_0_Module_Factory);
}
else {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.SMIL_2_0 = SMIL_2_0_Module_Factory().SMIL_2_0;
  }
  else {
    var SMIL_2_0 = SMIL_2_0_Module_Factory().SMIL_2_0;
  }
}
var SMIL_2_0_Language_Module_Factory = function () {
  var SMIL_2_0_Language = {
    name: 'SMIL_2_0_Language',
    defaultElementNamespaceURI: 'http:\/\/www.w3.org\/2001\/SMIL20\/Language',
    typeInfos: [{
        type: 'classInfo',
        localName: 'SetType',
        baseTypeInfo: 'SMIL_2_0.SetPrototype',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'any',
            collection: true,
            allowDom: true,
            allowTypedObject: true,
            type: 'anyElement'
          }, {
            name: 'restartDefault',
            typeInfo: 'String',
            attributeName: 'restartDefault',
            type: 'attribute'
          }, {
            name: 'fill',
            typeInfo: 'String',
            attributeName: 'fill',
            type: 'attribute'
          }, {
            name: 'syncBehaviorDefault',
            typeInfo: 'String',
            attributeName: 'syncBehaviorDefault',
            type: 'attribute'
          }, {
            name: 'syncToleranceDefault',
            typeInfo: 'String',
            attributeName: 'syncToleranceDefault',
            type: 'attribute'
          }, {
            name: 'fillDefault',
            typeInfo: 'String',
            attributeName: 'fillDefault',
            type: 'attribute'
          }, {
            name: 'restart',
            typeInfo: 'String',
            attributeName: 'restart',
            type: 'attribute'
          }, {
            name: 'min',
            typeInfo: 'String',
            attributeName: 'min',
            type: 'attribute'
          }, {
            name: 'max',
            typeInfo: 'String',
            attributeName: 'max',
            type: 'attribute'
          }, {
            name: 'dur',
            typeInfo: 'String',
            attributeName: 'dur',
            type: 'attribute'
          }, {
            name: 'repeat',
            typeInfo: 'Integer',
            attributeName: 'repeat',
            type: 'attribute'
          }, {
            name: 'begin',
            typeInfo: 'String',
            attributeName: 'begin',
            type: 'attribute'
          }, {
            name: 'end',
            typeInfo: 'String',
            attributeName: 'end',
            type: 'attribute'
          }, {
            name: 'repeatDur',
            typeInfo: 'String',
            attributeName: 'repeatDur',
            type: 'attribute'
          }, {
            name: 'repeatCount',
            typeInfo: 'Decimal',
            attributeName: 'repeatCount',
            type: 'attribute'
          }, {
            name: 'syncBehavior',
            typeInfo: 'String',
            attributeName: 'syncBehavior',
            type: 'attribute'
          }, {
            name: 'syncTolerance',
            typeInfo: 'String',
            attributeName: 'syncTolerance',
            type: 'attribute'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: 'id',
            type: 'attribute'
          }, {
            name: 'clazz',
            typeInfo: 'String',
            attributeName: 'class',
            type: 'attribute'
          }, {
            name: 'lang',
            typeInfo: 'String',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }, {
            name: 'alt',
            typeInfo: 'String',
            attributeName: 'alt',
            type: 'attribute'
          }, {
            name: 'longdesc',
            typeInfo: 'String',
            attributeName: 'longdesc',
            type: 'attribute'
          }, {
            name: 'targetElement',
            typeInfo: 'IDREF',
            attributeName: 'targetElement',
            type: 'attribute'
          }, {
            name: 'skipContent',
            typeInfo: 'Boolean',
            attributeName: 'skip-content',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AnimateMotionType',
        baseTypeInfo: 'SMIL_2_0.AnimateMotionPrototype',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'any',
            collection: true,
            allowDom: true,
            allowTypedObject: true,
            type: 'anyElement'
          }, {
            name: 'calcMode',
            typeInfo: 'String',
            attributeName: 'calcMode',
            type: 'attribute'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: 'id',
            type: 'attribute'
          }, {
            name: 'clazz',
            typeInfo: 'String',
            attributeName: 'class',
            type: 'attribute'
          }, {
            name: 'lang',
            typeInfo: 'String',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }, {
            name: 'alt',
            typeInfo: 'String',
            attributeName: 'alt',
            type: 'attribute'
          }, {
            name: 'longdesc',
            typeInfo: 'String',
            attributeName: 'longdesc',
            type: 'attribute'
          }, {
            name: 'restartDefault',
            typeInfo: 'String',
            attributeName: 'restartDefault',
            type: 'attribute'
          }, {
            name: 'fill',
            typeInfo: 'String',
            attributeName: 'fill',
            type: 'attribute'
          }, {
            name: 'syncBehaviorDefault',
            typeInfo: 'String',
            attributeName: 'syncBehaviorDefault',
            type: 'attribute'
          }, {
            name: 'syncToleranceDefault',
            typeInfo: 'String',
            attributeName: 'syncToleranceDefault',
            type: 'attribute'
          }, {
            name: 'fillDefault',
            typeInfo: 'String',
            attributeName: 'fillDefault',
            type: 'attribute'
          }, {
            name: 'restart',
            typeInfo: 'String',
            attributeName: 'restart',
            type: 'attribute'
          }, {
            name: 'min',
            typeInfo: 'String',
            attributeName: 'min',
            type: 'attribute'
          }, {
            name: 'max',
            typeInfo: 'String',
            attributeName: 'max',
            type: 'attribute'
          }, {
            name: 'dur',
            typeInfo: 'String',
            attributeName: 'dur',
            type: 'attribute'
          }, {
            name: 'repeat',
            typeInfo: 'Integer',
            attributeName: 'repeat',
            type: 'attribute'
          }, {
            name: 'begin',
            typeInfo: 'String',
            attributeName: 'begin',
            type: 'attribute'
          }, {
            name: 'end',
            typeInfo: 'String',
            attributeName: 'end',
            type: 'attribute'
          }, {
            name: 'repeatDur',
            typeInfo: 'String',
            attributeName: 'repeatDur',
            type: 'attribute'
          }, {
            name: 'repeatCount',
            typeInfo: 'Decimal',
            attributeName: 'repeatCount',
            type: 'attribute'
          }, {
            name: 'syncBehavior',
            typeInfo: 'String',
            attributeName: 'syncBehavior',
            type: 'attribute'
          }, {
            name: 'syncTolerance',
            typeInfo: 'String',
            attributeName: 'syncTolerance',
            type: 'attribute'
          }, {
            name: 'skipContent',
            typeInfo: 'Boolean',
            attributeName: 'skip-content',
            type: 'attribute'
          }, {
            name: 'targetElement',
            typeInfo: 'IDREF',
            attributeName: 'targetElement',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AnimateColorType',
        baseTypeInfo: 'SMIL_2_0.AnimateColorPrototype',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'any',
            collection: true,
            allowDom: true,
            allowTypedObject: true,
            type: 'anyElement'
          }, {
            name: 'calcMode',
            typeInfo: 'String',
            attributeName: 'calcMode',
            type: 'attribute'
          }, {
            name: 'skipContent',
            typeInfo: 'Boolean',
            attributeName: 'skip-content',
            type: 'attribute'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: 'id',
            type: 'attribute'
          }, {
            name: 'clazz',
            typeInfo: 'String',
            attributeName: 'class',
            type: 'attribute'
          }, {
            name: 'lang',
            typeInfo: 'String',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }, {
            name: 'alt',
            typeInfo: 'String',
            attributeName: 'alt',
            type: 'attribute'
          }, {
            name: 'longdesc',
            typeInfo: 'String',
            attributeName: 'longdesc',
            type: 'attribute'
          }, {
            name: 'restartDefault',
            typeInfo: 'String',
            attributeName: 'restartDefault',
            type: 'attribute'
          }, {
            name: 'fill',
            typeInfo: 'String',
            attributeName: 'fill',
            type: 'attribute'
          }, {
            name: 'syncBehaviorDefault',
            typeInfo: 'String',
            attributeName: 'syncBehaviorDefault',
            type: 'attribute'
          }, {
            name: 'syncToleranceDefault',
            typeInfo: 'String',
            attributeName: 'syncToleranceDefault',
            type: 'attribute'
          }, {
            name: 'fillDefault',
            typeInfo: 'String',
            attributeName: 'fillDefault',
            type: 'attribute'
          }, {
            name: 'restart',
            typeInfo: 'String',
            attributeName: 'restart',
            type: 'attribute'
          }, {
            name: 'min',
            typeInfo: 'String',
            attributeName: 'min',
            type: 'attribute'
          }, {
            name: 'max',
            typeInfo: 'String',
            attributeName: 'max',
            type: 'attribute'
          }, {
            name: 'dur',
            typeInfo: 'String',
            attributeName: 'dur',
            type: 'attribute'
          }, {
            name: 'repeat',
            typeInfo: 'Integer',
            attributeName: 'repeat',
            type: 'attribute'
          }, {
            name: 'begin',
            typeInfo: 'String',
            attributeName: 'begin',
            type: 'attribute'
          }, {
            name: 'end',
            typeInfo: 'String',
            attributeName: 'end',
            type: 'attribute'
          }, {
            name: 'repeatDur',
            typeInfo: 'String',
            attributeName: 'repeatDur',
            type: 'attribute'
          }, {
            name: 'repeatCount',
            typeInfo: 'Decimal',
            attributeName: 'repeatCount',
            type: 'attribute'
          }, {
            name: 'syncBehavior',
            typeInfo: 'String',
            attributeName: 'syncBehavior',
            type: 'attribute'
          }, {
            name: 'syncTolerance',
            typeInfo: 'String',
            attributeName: 'syncTolerance',
            type: 'attribute'
          }, {
            name: 'targetElement',
            typeInfo: 'IDREF',
            attributeName: 'targetElement',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AnimateType',
        baseTypeInfo: 'SMIL_2_0.AnimatePrototype',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'any',
            collection: true,
            allowDom: true,
            allowTypedObject: true,
            type: 'anyElement'
          }, {
            name: 'skipContent',
            typeInfo: 'Boolean',
            attributeName: 'skip-content',
            type: 'attribute'
          }, {
            name: 'calcMode',
            typeInfo: 'String',
            attributeName: 'calcMode',
            type: 'attribute'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: 'id',
            type: 'attribute'
          }, {
            name: 'clazz',
            typeInfo: 'String',
            attributeName: 'class',
            type: 'attribute'
          }, {
            name: 'lang',
            typeInfo: 'String',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }, {
            name: 'alt',
            typeInfo: 'String',
            attributeName: 'alt',
            type: 'attribute'
          }, {
            name: 'longdesc',
            typeInfo: 'String',
            attributeName: 'longdesc',
            type: 'attribute'
          }, {
            name: 'targetElement',
            typeInfo: 'IDREF',
            attributeName: 'targetElement',
            type: 'attribute'
          }, {
            name: 'restartDefault',
            typeInfo: 'String',
            attributeName: 'restartDefault',
            type: 'attribute'
          }, {
            name: 'fill',
            typeInfo: 'String',
            attributeName: 'fill',
            type: 'attribute'
          }, {
            name: 'syncBehaviorDefault',
            typeInfo: 'String',
            attributeName: 'syncBehaviorDefault',
            type: 'attribute'
          }, {
            name: 'syncToleranceDefault',
            typeInfo: 'String',
            attributeName: 'syncToleranceDefault',
            type: 'attribute'
          }, {
            name: 'fillDefault',
            typeInfo: 'String',
            attributeName: 'fillDefault',
            type: 'attribute'
          }, {
            name: 'restart',
            typeInfo: 'String',
            attributeName: 'restart',
            type: 'attribute'
          }, {
            name: 'min',
            typeInfo: 'String',
            attributeName: 'min',
            type: 'attribute'
          }, {
            name: 'max',
            typeInfo: 'String',
            attributeName: 'max',
            type: 'attribute'
          }, {
            name: 'dur',
            typeInfo: 'String',
            attributeName: 'dur',
            type: 'attribute'
          }, {
            name: 'repeat',
            typeInfo: 'Integer',
            attributeName: 'repeat',
            type: 'attribute'
          }, {
            name: 'begin',
            typeInfo: 'String',
            attributeName: 'begin',
            type: 'attribute'
          }, {
            name: 'end',
            typeInfo: 'String',
            attributeName: 'end',
            type: 'attribute'
          }, {
            name: 'repeatDur',
            typeInfo: 'String',
            attributeName: 'repeatDur',
            type: 'attribute'
          }, {
            name: 'repeatCount',
            typeInfo: 'Decimal',
            attributeName: 'repeatCount',
            type: 'attribute'
          }, {
            name: 'syncBehavior',
            typeInfo: 'String',
            attributeName: 'syncBehavior',
            type: 'attribute'
          }, {
            name: 'syncTolerance',
            typeInfo: 'String',
            attributeName: 'syncTolerance',
            type: 'attribute'
          }]
      }],
    elementInfos: [{
        elementName: 'set',
        typeInfo: 'SMIL_2_0_Language.SetType'
      }, {
        elementName: 'animateColor',
        typeInfo: 'SMIL_2_0_Language.AnimateColorType'
      }, {
        elementName: 'animateMotion',
        typeInfo: 'SMIL_2_0_Language.AnimateMotionType'
      }, {
        elementName: 'animate',
        typeInfo: 'SMIL_2_0_Language.AnimateType'
      }]
  };
  return {
    SMIL_2_0_Language: SMIL_2_0_Language
  };
};
if (typeof define === 'function' && define.amd) {
  define([], SMIL_2_0_Language_Module_Factory);
}
else {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.SMIL_2_0_Language = SMIL_2_0_Language_Module_Factory().SMIL_2_0_Language;
  }
  else {
    var SMIL_2_0_Language = SMIL_2_0_Language_Module_Factory().SMIL_2_0_Language;
  }
}
var WCS_1_1_Module_Factory = function () {
  var WCS_1_1 = {
    name: 'WCS_1_1',
    defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/wcs\/1.1.1',
    typeInfos: [{
        type: 'classInfo',
        localName: 'AxisSubset',
        propertyInfos: [{
            type: 'element',
            name: 'identifier',
            elementName: 'Identifier',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'key',
            collection: true,
            elementName: 'Key',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'TimeSequenceType',
        propertyInfos: [{
            name: 'timePositionOrTimePeriod',
            collection: true,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'timePosition',
                  namespaceURI: 'http:\/\/www.opengis.net\/gml'
                },
                typeInfo: 'GML_3_1_1.TimePositionType'
              }, {
                elementName: 'TimePeriod',
                typeInfo: 'WCS_1_1.TimePeriodType'
              }],
            type: 'elements'
          }]
      }, {
        type: 'classInfo',
        localName: 'AvailableKeys',
        propertyInfos: [{
            type: 'element',
            name: 'key',
            collection: true,
            elementName: 'Key',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'CoverageSummaryType',
        baseTypeInfo: 'OWS_1_1_0.DescriptionType',
        propertyInfos: [{
            name: 'content',
            collection: true,
            elementTypeInfos: [{
                elementName: {
                  localPart: 'Metadata',
                  namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
                },
                typeInfo: 'OWS_1_1_0.MetadataType'
              }, {
                elementName: 'CoverageSummary',
                typeInfo: 'WCS_1_1.CoverageSummaryType'
              }, {
                elementName: {
                  localPart: 'WGS84BoundingBox',
                  namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
                },
                typeInfo: 'OWS_1_1_0.WGS84BoundingBoxType'
              }, {
                elementName: 'Identifier',
                typeInfo: 'String'
              }, {
                elementName: 'SupportedCRS',
                typeInfo: 'String'
              }, {
                elementName: 'SupportedFormat',
                typeInfo: 'String'
              }],
            type: 'elementRefs'
          }]
      }, {
        type: 'classInfo',
        localName: 'GridCrsType',
        propertyInfos: [{
            type: 'element',
            name: 'srsName',
            elementName: {
              localPart: 'srsName',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            typeInfo: 'GML_3_1_1.CodeType'
          }, {
            type: 'element',
            name: 'gridBaseCRS',
            elementName: 'GridBaseCRS',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'gridType',
            elementName: 'GridType',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'gridOrigin',
            elementName: 'GridOrigin',
            typeInfo: {
              type: 'list',
              typeInfo: 'Double'
            }
          }, {
            type: 'element',
            name: 'gridOffsets',
            elementName: 'GridOffsets',
            typeInfo: {
              type: 'list',
              typeInfo: 'Double'
            }
          }, {
            type: 'element',
            name: 'gridCS',
            elementName: 'GridCS',
            typeInfo: 'String'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'id',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'InterpolationMethods',
        propertyInfos: [{
            type: 'element',
            name: 'interpolationMethod',
            collection: true,
            elementName: 'InterpolationMethod',
            typeInfo: 'WCS_1_1.InterpolationMethodType'
          }, {
            type: 'element',
            name: '_default',
            elementName: 'Default',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'InterpolationMethodType',
        baseTypeInfo: 'WCS_1_1.InterpolationMethodBaseType',
        propertyInfos: [{
            name: 'nullResistance',
            typeInfo: 'String',
            attributeName: 'nullResistance',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'GetCoverage',
        baseTypeInfo: 'WCS_1_1.RequestBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'identifier',
            elementName: {
              localPart: 'Identifier',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.CodeType'
          }, {
            type: 'element',
            name: 'domainSubset',
            elementName: 'DomainSubset',
            typeInfo: 'WCS_1_1.DomainSubsetType'
          }, {
            type: 'element',
            name: 'rangeSubset',
            elementName: 'RangeSubset',
            typeInfo: 'WCS_1_1.RangeSubsetType'
          }, {
            type: 'element',
            name: 'output',
            elementName: 'Output',
            typeInfo: 'WCS_1_1.OutputType'
          }]
      }, {
        type: 'classInfo',
        localName: 'RequestBaseType',
        propertyInfos: [{
            name: 'service',
            typeInfo: 'String',
            attributeName: 'service',
            type: 'attribute'
          }, {
            name: 'version',
            typeInfo: 'String',
            attributeName: 'version',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'DomainSubsetType',
        propertyInfos: [{
            name: 'boundingBox',
            elementName: {
              localPart: 'BoundingBox',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.BoundingBoxType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'temporalSubset',
            elementName: 'TemporalSubset',
            typeInfo: 'WCS_1_1.TimeSequenceType'
          }]
      }, {
        type: 'classInfo',
        localName: 'RangeSubsetType',
        propertyInfos: [{
            type: 'element',
            name: 'fieldSubset',
            collection: true,
            elementName: 'FieldSubset',
            typeInfo: 'WCS_1_1.RangeSubsetType.FieldSubset'
          }]
      }, {
        type: 'classInfo',
        localName: 'OutputType',
        propertyInfos: [{
            type: 'element',
            name: 'gridCRS',
            elementName: 'GridCRS',
            typeInfo: 'WCS_1_1.GridCrsType'
          }, {
            name: 'format',
            typeInfo: 'String',
            attributeName: 'format',
            type: 'attribute'
          }, {
            name: 'store',
            typeInfo: 'Boolean',
            attributeName: 'store',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'CoveragesType',
        propertyInfos: [{
            type: 'element',
            name: 'coverage',
            collection: true,
            elementName: 'Coverage',
            typeInfo: 'OWS_1_1_0.ReferenceGroupType'
          }]
      }, {
        type: 'classInfo',
        localName: 'Contents',
        propertyInfos: [{
            type: 'element',
            name: 'coverageSummary',
            collection: true,
            elementName: 'CoverageSummary',
            typeInfo: 'WCS_1_1.CoverageSummaryType'
          }, {
            type: 'element',
            name: 'supportedCRS',
            collection: true,
            elementName: 'SupportedCRS',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'supportedFormat',
            collection: true,
            elementName: 'SupportedFormat',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'otherSource',
            collection: true,
            elementName: 'OtherSource',
            typeInfo: 'OWS_1_1_0.OnlineResourceType'
          }]
      }, {
        type: 'classInfo',
        localName: 'CoverageDescriptions',
        propertyInfos: [{
            type: 'element',
            name: 'coverageDescription',
            collection: true,
            elementName: 'CoverageDescription',
            typeInfo: 'WCS_1_1.CoverageDescriptionType'
          }]
      }, {
        type: 'classInfo',
        localName: 'CoverageDescriptionType',
        baseTypeInfo: 'OWS_1_1_0.DescriptionType',
        propertyInfos: [{
            type: 'element',
            name: 'identifier',
            elementName: 'Identifier',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'metadata',
            collection: true,
            elementName: {
              localPart: 'Metadata',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.MetadataType'
          }, {
            type: 'element',
            name: 'domain',
            elementName: 'Domain',
            typeInfo: 'WCS_1_1.CoverageDomainType'
          }, {
            type: 'element',
            name: 'range',
            elementName: 'Range',
            typeInfo: 'WCS_1_1.RangeType'
          }, {
            type: 'element',
            name: 'supportedCRS',
            collection: true,
            elementName: 'SupportedCRS',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'supportedFormat',
            collection: true,
            elementName: 'SupportedFormat',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'DescribeCoverage',
        baseTypeInfo: 'WCS_1_1.RequestBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'identifier',
            collection: true,
            elementName: 'Identifier',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'GetCapabilities',
        baseTypeInfo: 'OWS_1_1_0.GetCapabilitiesType',
        propertyInfos: [{
            name: 'service',
            typeInfo: 'String',
            attributeName: 'service',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'Capabilities',
        baseTypeInfo: 'OWS_1_1_0.CapabilitiesBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'contents',
            elementName: 'Contents',
            typeInfo: 'WCS_1_1.Contents'
          }]
      }, {
        type: 'classInfo',
        localName: 'CoverageDomainType',
        propertyInfos: [{
            type: 'element',
            name: 'spatialDomain',
            elementName: 'SpatialDomain',
            typeInfo: 'WCS_1_1.SpatialDomainType'
          }, {
            type: 'element',
            name: 'temporalDomain',
            elementName: 'TemporalDomain',
            typeInfo: 'WCS_1_1.TimeSequenceType'
          }]
      }, {
        type: 'classInfo',
        localName: 'FieldType',
        baseTypeInfo: 'OWS_1_1_0.DescriptionType',
        propertyInfos: [{
            type: 'element',
            name: 'identifier',
            elementName: 'Identifier',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'definition',
            elementName: 'Definition',
            typeInfo: 'OWS_1_1_0.UnNamedDomainType'
          }, {
            type: 'element',
            name: 'nullValue',
            collection: true,
            elementName: 'NullValue',
            typeInfo: 'OWS_1_1_0.CodeType'
          }, {
            type: 'element',
            name: 'interpolationMethods',
            elementName: 'InterpolationMethods',
            typeInfo: 'WCS_1_1.InterpolationMethods'
          }, {
            type: 'element',
            name: 'axis',
            collection: true,
            elementName: 'Axis',
            typeInfo: 'WCS_1_1.AxisType'
          }]
      }, {
        type: 'classInfo',
        localName: 'RangeType',
        propertyInfos: [{
            type: 'element',
            name: 'field',
            collection: true,
            elementName: 'Field',
            typeInfo: 'WCS_1_1.FieldType'
          }]
      }, {
        type: 'classInfo',
        localName: 'TimePeriodType',
        propertyInfos: [{
            type: 'element',
            name: 'beginPosition',
            elementName: 'BeginPosition',
            typeInfo: 'GML_3_1_1.TimePositionType'
          }, {
            type: 'element',
            name: 'endPosition',
            elementName: 'EndPosition',
            typeInfo: 'GML_3_1_1.TimePositionType'
          }, {
            type: 'element',
            name: 'timeResolution',
            elementName: 'TimeResolution',
            typeInfo: 'String'
          }, {
            name: 'frame',
            typeInfo: 'String',
            attributeName: 'frame',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ImageCRSRefType',
        propertyInfos: [{
            type: 'element',
            name: 'imageCRS',
            elementName: {
              localPart: 'ImageCRS',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            typeInfo: 'GML_3_1_1.ImageCRSType'
          }, {
            name: 'remoteSchema',
            typeInfo: 'String',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            type: 'attribute'
          }, {
            name: 'type',
            typeInfo: 'XLink_1_0.TypeType',
            attributeName: {
              localPart: 'type',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: {
              localPart: 'href',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: {
              localPart: 'role',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: {
              localPart: 'arcrole',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: {
              localPart: 'title',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'XLink_1_0.ShowType',
            attributeName: {
              localPart: 'show',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'XLink_1_0.ActuateType',
            attributeName: {
              localPart: 'actuate',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'AxisType',
        baseTypeInfo: 'OWS_1_1_0.DescriptionType',
        propertyInfos: [{
            type: 'element',
            name: 'availableKeys',
            elementName: 'AvailableKeys',
            typeInfo: 'WCS_1_1.AvailableKeys'
          }, {
            type: 'element',
            name: 'meaning',
            elementName: {
              localPart: 'Meaning',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.DomainMetadataType'
          }, {
            type: 'element',
            name: 'dataType',
            elementName: {
              localPart: 'DataType',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.DomainMetadataType'
          }, {
            type: 'element',
            name: 'uom',
            elementName: {
              localPart: 'UOM',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.DomainMetadataType'
          }, {
            type: 'element',
            name: 'referenceSystem',
            elementName: {
              localPart: 'ReferenceSystem',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.DomainMetadataType'
          }, {
            type: 'element',
            name: 'metadata',
            collection: true,
            elementName: {
              localPart: 'Metadata',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.MetadataType'
          }, {
            name: 'identifier',
            typeInfo: 'String',
            attributeName: 'identifier',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'InterpolationMethodBaseType',
        baseTypeInfo: 'OWS_1_1_0.CodeType',
        propertyInfos: []
      }, {
        type: 'classInfo',
        localName: 'SpatialDomainType',
        propertyInfos: [{
            name: 'boundingBox',
            collection: true,
            elementName: {
              localPart: 'BoundingBox',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.BoundingBoxType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'gridCRS',
            elementName: 'GridCRS',
            typeInfo: 'WCS_1_1.GridCrsType'
          }, {
            name: 'coordinateOperation',
            elementName: {
              localPart: '_CoordinateOperation',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            typeInfo: 'GML_3_1_1.AbstractCoordinateOperationType',
            type: 'elementRef'
          }, {
            type: 'element',
            name: 'imageCRS',
            elementName: 'ImageCRS',
            typeInfo: 'WCS_1_1.ImageCRSRefType'
          }, {
            type: 'element',
            name: 'polygon',
            collection: true,
            elementName: {
              localPart: 'Polygon',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            typeInfo: 'GML_3_1_1.PolygonType'
          }]
      }, {
        type: 'classInfo',
        localName: 'RangeSubsetType.FieldSubset',
        propertyInfos: [{
            type: 'element',
            name: 'identifier',
            elementName: {
              localPart: 'Identifier',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.CodeType'
          }, {
            type: 'element',
            name: 'interpolationType',
            elementName: 'InterpolationType',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'axisSubset',
            collection: true,
            elementName: 'AxisSubset',
            typeInfo: 'WCS_1_1.AxisSubset'
          }]
      }],
    elementInfos: [{
        elementName: 'AxisSubset',
        typeInfo: 'WCS_1_1.AxisSubset'
      }, {
        elementName: 'AvailableKeys',
        typeInfo: 'WCS_1_1.AvailableKeys'
      }, {
        elementName: 'InterpolationMethods',
        typeInfo: 'WCS_1_1.InterpolationMethods'
      }, {
        elementName: 'GetCoverage',
        typeInfo: 'WCS_1_1.GetCoverage'
      }, {
        elementName: 'Contents',
        typeInfo: 'WCS_1_1.Contents'
      }, {
        elementName: 'CoverageDescriptions',
        typeInfo: 'WCS_1_1.CoverageDescriptions'
      }, {
        elementName: 'DescribeCoverage',
        typeInfo: 'WCS_1_1.DescribeCoverage'
      }, {
        elementName: 'GetCapabilities',
        typeInfo: 'WCS_1_1.GetCapabilities'
      }, {
        elementName: 'Capabilities',
        typeInfo: 'WCS_1_1.Capabilities'
      }, {
        elementName: 'GridOffsets',
        typeInfo: {
          type: 'list',
          typeInfo: 'Double'
        }
      }, {
        elementName: 'TemporalSubset',
        typeInfo: 'WCS_1_1.TimeSequenceType'
      }, {
        elementName: 'Coverage',
        typeInfo: 'OWS_1_1_0.ReferenceGroupType',
        substitutionHead: {
          localPart: 'ReferenceGroup',
          namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
        }
      }, {
        elementName: 'TemporalDomain',
        typeInfo: 'WCS_1_1.TimeSequenceType'
      }, {
        elementName: 'CoverageSummary',
        typeInfo: 'WCS_1_1.CoverageSummaryType'
      }, {
        elementName: 'Identifier',
        typeInfo: 'String'
      }, {
        elementName: 'Coverages',
        typeInfo: 'WCS_1_1.CoveragesType'
      }, {
        elementName: 'GridType',
        typeInfo: 'String'
      }, {
        elementName: 'GridCS',
        typeInfo: 'String'
      }, {
        elementName: 'GridOrigin',
        typeInfo: {
          type: 'list',
          typeInfo: 'Double'
        }
      }, {
        elementName: 'GridCRS',
        typeInfo: 'WCS_1_1.GridCrsType'
      }, {
        elementName: 'GridBaseCRS',
        typeInfo: 'String'
      }, {
        elementName: 'Transformation',
        typeInfo: 'GML_3_1_1.AbstractCoordinateOperationType',
        substitutionHead: {
          localPart: '_CoordinateOperation',
          namespaceURI: 'http:\/\/www.opengis.net\/gml'
        }
      }, {
        elementName: 'SupportedCRS',
        typeInfo: 'String',
        scope: 'WCS_1_1.CoverageSummaryType'
      }, {
        elementName: 'SupportedFormat',
        typeInfo: 'String',
        scope: 'WCS_1_1.CoverageSummaryType'
      }]
  };
  return {
    WCS_1_1: WCS_1_1
  };
};
if (typeof define === 'function' && define.amd) {
  define([], WCS_1_1_Module_Factory);
}
else {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.WCS_1_1 = WCS_1_1_Module_Factory().WCS_1_1;
  }
  else {
    var WCS_1_1 = WCS_1_1_Module_Factory().WCS_1_1;
  }
}

var WFS_1_1_0_Module_Factory = function () {
  var WFS_1_1_0 = {
    name: 'WFS_1_1_0',
    defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/wfs',
    typeInfos: [{
        type: 'classInfo',
        localName: 'DescribeFeatureTypeType',
        baseTypeInfo: 'WFS_1_1_0.BaseRequestType',
        propertyInfos: [{
            type: 'element',
            name: 'typeName',
            collection: true,
            elementName: 'TypeName',
            typeInfo: 'String'
          }, {
            name: 'outputFormat',
            typeInfo: 'String',
            attributeName: 'outputFormat',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'DeleteElementType',
        propertyInfos: [{
            type: 'element',
            name: 'filter',
            elementName: {
              localPart: 'Filter',
              namespaceURI: 'http:\/\/www.opengis.net\/ogc'
            },
            typeInfo: 'Filter_1_1_0.FilterType'
          }, {
            name: 'handle',
            typeInfo: 'String',
            attributeName: 'handle',
            type: 'attribute'
          }, {
            name: 'typeName',
            typeInfo: 'String',
            attributeName: 'typeName',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'GetFeatureType',
        baseTypeInfo: 'WFS_1_1_0.BaseRequestType',
        propertyInfos: [{
            type: 'element',
            name: 'query',
            collection: true,
            elementName: 'Query',
            typeInfo: 'WFS_1_1_0.QueryType'
          }, {
            name: 'resultType',
            typeInfo: 'String',
            attributeName: 'resultType',
            type: 'attribute'
          }, {
            name: 'outputFormat',
            typeInfo: 'String',
            attributeName: 'outputFormat',
            type: 'attribute'
          }, {
            name: 'maxFeatures',
            typeInfo: 'Integer',
            attributeName: 'maxFeatures',
            type: 'attribute'
          }, {
            name: 'traverseXlinkDepth',
            typeInfo: 'String',
            attributeName: 'traverseXlinkDepth',
            type: 'attribute'
          }, {
            name: 'traverseXlinkExpiry',
            typeInfo: 'Integer',
            attributeName: 'traverseXlinkExpiry',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'LockFeatureResponseType',
        propertyInfos: [{
            type: 'element',
            name: 'lockId',
            elementName: 'LockId',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'featuresLocked',
            elementName: 'FeaturesLocked',
            typeInfo: 'WFS_1_1_0.FeaturesLockedType'
          }, {
            type: 'element',
            name: 'featuresNotLocked',
            elementName: 'FeaturesNotLocked',
            typeInfo: 'WFS_1_1_0.FeaturesNotLockedType'
          }]
      }, {
        type: 'classInfo',
        localName: 'QueryType',
        propertyInfos: [{
            name: 'propertyNameOrXlinkPropertyNameOrFunction',
            collection: true,
            elementTypeInfos: [{
                elementName: 'PropertyName',
                typeInfo: 'String'
              }, {
                elementName: 'XlinkPropertyName',
                typeInfo: 'WFS_1_1_0.XlinkPropertyName'
              }, {
                elementName: {
                  localPart: 'Function',
                  namespaceURI: 'http:\/\/www.opengis.net\/ogc'
                },
                typeInfo: 'Filter_1_1_0.FunctionType'
              }],
            type: 'elements'
          }, {
            type: 'element',
            name: 'filter',
            elementName: {
              localPart: 'Filter',
              namespaceURI: 'http:\/\/www.opengis.net\/ogc'
            },
            typeInfo: 'Filter_1_1_0.FilterType'
          }, {
            type: 'element',
            name: 'sortBy',
            elementName: {
              localPart: 'SortBy',
              namespaceURI: 'http:\/\/www.opengis.net\/ogc'
            },
            typeInfo: 'Filter_1_1_0.SortByType'
          }, {
            name: 'handle',
            typeInfo: 'String',
            attributeName: 'handle',
            type: 'attribute'
          }, {
            name: 'typeName',
            typeInfo: {
              type: 'list',
              typeInfo: 'String'
            },
            attributeName: 'typeName',
            type: 'attribute'
          }, {
            name: 'featureVersion',
            typeInfo: 'String',
            attributeName: 'featureVersion',
            type: 'attribute'
          }, {
            name: 'srsName',
            typeInfo: 'String',
            attributeName: 'srsName',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'GetFeatureWithLockType',
        baseTypeInfo: 'WFS_1_1_0.BaseRequestType',
        propertyInfos: [{
            type: 'element',
            name: 'query',
            collection: true,
            elementName: 'Query',
            typeInfo: 'WFS_1_1_0.QueryType'
          }, {
            name: 'expiry',
            typeInfo: 'Integer',
            attributeName: 'expiry',
            type: 'attribute'
          }, {
            name: 'resultType',
            typeInfo: 'String',
            attributeName: 'resultType',
            type: 'attribute'
          }, {
            name: 'outputFormat',
            typeInfo: 'String',
            attributeName: 'outputFormat',
            type: 'attribute'
          }, {
            name: 'maxFeatures',
            typeInfo: 'Integer',
            attributeName: 'maxFeatures',
            type: 'attribute'
          }, {
            name: 'traverseXlinkDepth',
            typeInfo: 'String',
            attributeName: 'traverseXlinkDepth',
            type: 'attribute'
          }, {
            name: 'traverseXlinkExpiry',
            typeInfo: 'Integer',
            attributeName: 'traverseXlinkExpiry',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'GetGmlObjectType',
        baseTypeInfo: 'WFS_1_1_0.BaseRequestType',
        propertyInfos: [{
            type: 'element',
            name: 'gmlObjectId',
            elementName: {
              localPart: 'GmlObjectId',
              namespaceURI: 'http:\/\/www.opengis.net\/ogc'
            },
            typeInfo: 'Filter_1_1_0.GmlObjectIdType'
          }, {
            name: 'outputFormat',
            typeInfo: 'String',
            attributeName: 'outputFormat',
            type: 'attribute'
          }, {
            name: 'traverseXlinkDepth',
            typeInfo: 'String',
            attributeName: 'traverseXlinkDepth',
            type: 'attribute'
          }, {
            name: 'traverseXlinkExpiry',
            typeInfo: 'Integer',
            attributeName: 'traverseXlinkExpiry',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'LockFeatureType',
        baseTypeInfo: 'WFS_1_1_0.BaseRequestType',
        propertyInfos: [{
            type: 'element',
            name: 'lock',
            collection: true,
            elementName: 'Lock',
            typeInfo: 'WFS_1_1_0.LockType'
          }, {
            name: 'expiry',
            typeInfo: 'Integer',
            attributeName: 'expiry',
            type: 'attribute'
          }, {
            name: 'lockAction',
            typeInfo: 'String',
            attributeName: 'lockAction',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'WFSCapabilitiesType',
        baseTypeInfo: 'OWS_1_0_0.CapabilitiesBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'featureTypeList',
            elementName: 'FeatureTypeList',
            typeInfo: 'WFS_1_1_0.FeatureTypeListType'
          }, {
            type: 'element',
            name: 'servesGMLObjectTypeList',
            elementName: 'ServesGMLObjectTypeList',
            typeInfo: 'WFS_1_1_0.GMLObjectTypeListType'
          }, {
            type: 'element',
            name: 'supportsGMLObjectTypeList',
            elementName: 'SupportsGMLObjectTypeList',
            typeInfo: 'WFS_1_1_0.GMLObjectTypeListType'
          }, {
            type: 'element',
            name: 'filterCapabilities',
            elementName: {
              localPart: 'Filter_Capabilities',
              namespaceURI: 'http:\/\/www.opengis.net\/ogc'
            },
            typeInfo: 'Filter_1_1_0.FilterCapabilities'
          }]
      }, {
        type: 'classInfo',
        localName: 'FeatureTypeListType',
        propertyInfos: [{
            type: 'element',
            name: 'operations',
            elementName: 'Operations',
            typeInfo: 'WFS_1_1_0.OperationsType'
          }, {
            type: 'element',
            name: 'featureType',
            collection: true,
            elementName: 'FeatureType',
            typeInfo: 'WFS_1_1_0.FeatureTypeType'
          }]
      }, {
        type: 'classInfo',
        localName: 'XlinkPropertyName',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'String',
            type: 'value'
          }, {
            name: 'traverseXlinkDepth',
            typeInfo: 'String',
            attributeName: 'traverseXlinkDepth',
            type: 'attribute'
          }, {
            name: 'traverseXlinkExpiry',
            typeInfo: 'Integer',
            attributeName: 'traverseXlinkExpiry',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'InsertElementType',
        propertyInfos: [{
            name: 'feature',
            collection: true,
            elementName: {
              localPart: '_Feature',
              namespaceURI: 'http:\/\/www.opengis.net\/gml'
            },
            typeInfo: 'GML_3_1_1.AbstractFeatureType',
            type: 'elementRef'
          }, {
            name: 'idgen',
            typeInfo: 'String',
            attributeName: 'idgen',
            type: 'attribute'
          }, {
            name: 'handle',
            typeInfo: 'String',
            attributeName: 'handle',
            type: 'attribute'
          }, {
            name: 'inputFormat',
            typeInfo: 'String',
            attributeName: 'inputFormat',
            type: 'attribute'
          }, {
            name: 'srsName',
            typeInfo: 'String',
            attributeName: 'srsName',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'UpdateElementType',
        propertyInfos: [{
            type: 'element',
            name: 'property',
            collection: true,
            elementName: 'Property',
            typeInfo: 'WFS_1_1_0.PropertyType'
          }, {
            type: 'element',
            name: 'filter',
            elementName: {
              localPart: 'Filter',
              namespaceURI: 'http:\/\/www.opengis.net\/ogc'
            },
            typeInfo: 'Filter_1_1_0.FilterType'
          }, {
            name: 'handle',
            typeInfo: 'String',
            attributeName: 'handle',
            type: 'attribute'
          }, {
            name: 'typeName',
            typeInfo: 'String',
            attributeName: 'typeName',
            type: 'attribute'
          }, {
            name: 'inputFormat',
            typeInfo: 'String',
            attributeName: 'inputFormat',
            type: 'attribute'
          }, {
            name: 'srsName',
            typeInfo: 'String',
            attributeName: 'srsName',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'NativeType',
        propertyInfos: [{
            name: 'vendorId',
            typeInfo: 'String',
            attributeName: 'vendorId',
            type: 'attribute'
          }, {
            name: 'safeToIgnore',
            typeInfo: 'Boolean',
            attributeName: 'safeToIgnore',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TransactionResponseType',
        propertyInfos: [{
            type: 'element',
            name: 'transactionSummary',
            elementName: 'TransactionSummary',
            typeInfo: 'WFS_1_1_0.TransactionSummaryType'
          }, {
            type: 'element',
            name: 'transactionResults',
            elementName: 'TransactionResults',
            typeInfo: 'WFS_1_1_0.TransactionResultsType'
          }, {
            type: 'element',
            name: 'insertResults',
            elementName: 'InsertResults',
            typeInfo: 'WFS_1_1_0.InsertResultsType'
          }, {
            name: 'version',
            typeInfo: 'String',
            attributeName: 'version',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TransactionType',
        baseTypeInfo: 'WFS_1_1_0.BaseRequestType',
        propertyInfos: [{
            type: 'element',
            name: 'lockId',
            elementName: 'LockId',
            typeInfo: 'String'
          }, {
            name: 'insertOrUpdateOrDelete',
            collection: true,
            elementTypeInfos: [{
                elementName: 'Insert',
                typeInfo: 'WFS_1_1_0.InsertElementType'
              }, {
                elementName: 'Update',
                typeInfo: 'WFS_1_1_0.UpdateElementType'
              }, {
                elementName: 'Delete',
                typeInfo: 'WFS_1_1_0.DeleteElementType'
              }, {
                elementName: 'Native',
                typeInfo: 'WFS_1_1_0.NativeType'
              }],
            type: 'elements'
          }, {
            name: 'releaseAction',
            typeInfo: 'String',
            attributeName: 'releaseAction',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'FeatureCollectionType',
        baseTypeInfo: 'GML_3_1_1.AbstractFeatureCollectionType',
        propertyInfos: [{
            name: 'lockId',
            typeInfo: 'String',
            attributeName: 'lockId',
            type: 'attribute'
          }, {
            name: 'timeStamp',
            typeInfo: 'Calendar',
            attributeName: 'timeStamp',
            type: 'attribute'
          }, {
            name: 'numberOfFeatures',
            typeInfo: 'Integer',
            attributeName: 'numberOfFeatures',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'GetCapabilitiesType',
        baseTypeInfo: 'OWS_1_0_0.GetCapabilitiesType',
        propertyInfos: [{
            name: 'service',
            typeInfo: 'String',
            attributeName: 'service',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'GMLObjectTypeListType',
        propertyInfos: [{
            type: 'element',
            name: 'gmlObjectType',
            collection: true,
            elementName: 'GMLObjectType',
            typeInfo: 'WFS_1_1_0.GMLObjectTypeType'
          }]
      }, {
        type: 'classInfo',
        localName: 'PropertyType',
        propertyInfos: [{
            type: 'element',
            name: 'name',
            elementName: 'Name',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'value',
            elementName: 'Value',
            typeInfo: 'AnyType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ActionType',
        propertyInfos: [{
            type: 'element',
            name: 'message',
            elementName: 'Message',
            typeInfo: 'String'
          }, {
            name: 'locator',
            typeInfo: 'String',
            attributeName: 'locator',
            type: 'attribute'
          }, {
            name: 'code',
            typeInfo: 'String',
            attributeName: 'code',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'FeaturesNotLockedType',
        propertyInfos: [{
            type: 'element',
            name: 'featureId',
            collection: true,
            elementName: {
              localPart: 'FeatureId',
              namespaceURI: 'http:\/\/www.opengis.net\/ogc'
            },
            typeInfo: 'Filter_1_1_0.FeatureIdType'
          }]
      }, {
        type: 'classInfo',
        localName: 'FeaturesLockedType',
        propertyInfos: [{
            type: 'element',
            name: 'featureId',
            collection: true,
            elementName: {
              localPart: 'FeatureId',
              namespaceURI: 'http:\/\/www.opengis.net\/ogc'
            },
            typeInfo: 'Filter_1_1_0.FeatureIdType'
          }]
      }, {
        type: 'classInfo',
        localName: 'TransactionSummaryType',
        propertyInfos: [{
            type: 'element',
            name: 'totalInserted',
            elementName: 'totalInserted',
            typeInfo: 'Integer'
          }, {
            type: 'element',
            name: 'totalUpdated',
            elementName: 'totalUpdated',
            typeInfo: 'Integer'
          }, {
            type: 'element',
            name: 'totalDeleted',
            elementName: 'totalDeleted',
            typeInfo: 'Integer'
          }]
      }, {
        type: 'classInfo',
        localName: 'LockType',
        propertyInfos: [{
            type: 'element',
            name: 'filter',
            elementName: {
              localPart: 'Filter',
              namespaceURI: 'http:\/\/www.opengis.net\/ogc'
            },
            typeInfo: 'Filter_1_1_0.FilterType'
          }, {
            name: 'handle',
            typeInfo: 'String',
            attributeName: 'handle',
            type: 'attribute'
          }, {
            name: 'typeName',
            typeInfo: 'String',
            attributeName: 'typeName',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'OperationsType',
        propertyInfos: [{
            type: 'element',
            name: 'operation',
            collection: true,
            elementName: 'Operation',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'GMLObjectTypeType',
        propertyInfos: [{
            type: 'element',
            name: 'name',
            elementName: 'Name',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'title',
            elementName: 'Title',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: '_abstract',
            elementName: 'Abstract',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'keywords',
            collection: true,
            elementName: {
              localPart: 'Keywords',
              namespaceURI: 'http:\/\/www.opengis.net\/ows'
            },
            typeInfo: 'OWS_1_0_0.KeywordsType'
          }, {
            type: 'element',
            name: 'outputFormats',
            elementName: 'OutputFormats',
            typeInfo: 'WFS_1_1_0.OutputFormatListType'
          }]
      }, {
        type: 'classInfo',
        localName: 'InsertResultsType',
        propertyInfos: [{
            type: 'element',
            name: 'feature',
            collection: true,
            elementName: 'Feature',
            typeInfo: 'WFS_1_1_0.InsertedFeatureType'
          }]
      }, {
        type: 'classInfo',
        localName: 'MetadataURLType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'String',
            type: 'value'
          }, {
            name: 'type',
            typeInfo: 'String',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'format',
            typeInfo: 'String',
            attributeName: 'format',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'FeatureTypeType',
        propertyInfos: [{
            type: 'element',
            name: 'name',
            elementName: 'Name',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'title',
            elementName: 'Title',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: '_abstract',
            elementName: 'Abstract',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'keywords',
            collection: true,
            elementName: {
              localPart: 'Keywords',
              namespaceURI: 'http:\/\/www.opengis.net\/ows'
            },
            typeInfo: 'OWS_1_0_0.KeywordsType'
          }, {
            type: 'element',
            name: 'defaultSRS',
            elementName: 'DefaultSRS',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'otherSRS',
            collection: true,
            elementName: 'OtherSRS',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'noSRS',
            elementName: 'NoSRS',
            typeInfo: 'WFS_1_1_0.FeatureTypeType.NoSRS'
          }, {
            type: 'element',
            name: 'operations',
            elementName: 'Operations',
            typeInfo: 'WFS_1_1_0.OperationsType'
          }, {
            type: 'element',
            name: 'outputFormats',
            elementName: 'OutputFormats',
            typeInfo: 'WFS_1_1_0.OutputFormatListType'
          }, {
            type: 'element',
            name: 'wgs84BoundingBox',
            collection: true,
            elementName: {
              localPart: 'WGS84BoundingBox',
              namespaceURI: 'http:\/\/www.opengis.net\/ows'
            },
            typeInfo: 'OWS_1_0_0.WGS84BoundingBoxType'
          }, {
            type: 'element',
            name: 'metadataURL',
            collection: true,
            elementName: 'MetadataURL',
            typeInfo: 'WFS_1_1_0.MetadataURLType'
          }]
      }, {
        type: 'classInfo',
        localName: 'InsertedFeatureType',
        propertyInfos: [{
            type: 'element',
            name: 'featureId',
            collection: true,
            elementName: {
              localPart: 'FeatureId',
              namespaceURI: 'http:\/\/www.opengis.net\/ogc'
            },
            typeInfo: 'Filter_1_1_0.FeatureIdType'
          }, {
            name: 'handle',
            typeInfo: 'String',
            attributeName: 'handle',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'OutputFormatListType',
        propertyInfos: [{
            type: 'element',
            name: 'format',
            collection: true,
            elementName: 'Format',
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'BaseRequestType',
        propertyInfos: [{
            name: 'service',
            typeInfo: 'String',
            attributeName: 'service',
            type: 'attribute'
          }, {
            name: 'version',
            typeInfo: 'String',
            attributeName: 'version',
            type: 'attribute'
          }, {
            name: 'handle',
            typeInfo: 'String',
            attributeName: 'handle',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TransactionResultsType',
        propertyInfos: [{
            type: 'element',
            name: 'action',
            collection: true,
            elementName: 'Action',
            typeInfo: 'WFS_1_1_0.ActionType'
          }]
      }, {
        type: 'classInfo',
        localName: 'FeatureTypeType.NoSRS',
        propertyInfos: []
      }, {
        type: 'enumInfo',
        localName: 'IdentifierGenerationOptionType',
        baseTypeInfo: 'String',
        values: ['UseExisting', 'ReplaceDuplicate', 'GenerateNew']
      }, {
        type: 'enumInfo',
        localName: 'AllSomeType',
        baseTypeInfo: 'String',
        values: ['ALL', 'SOME']
      }, {
        type: 'enumInfo',
        localName: 'ResultTypeType',
        baseTypeInfo: 'String',
        values: ['results', 'hits']
      }, {
        type: 'enumInfo',
        localName: 'OperationType',
        baseTypeInfo: 'String',
        values: ['Insert', 'Update', 'Delete', 'Query', 'Lock', 'GetGmlObject']
      }],
    elementInfos: [{
        elementName: 'XlinkPropertyName',
        typeInfo: 'WFS_1_1_0.XlinkPropertyName'
      }, {
        elementName: 'GetGmlObject',
        typeInfo: 'WFS_1_1_0.GetGmlObjectType'
      }, {
        elementName: 'GetFeatureWithLock',
        typeInfo: 'WFS_1_1_0.GetFeatureWithLockType'
      }, {
        elementName: 'PropertyName',
        typeInfo: 'String'
      }, {
        elementName: 'GetFeature',
        typeInfo: 'WFS_1_1_0.GetFeatureType'
      }, {
        elementName: 'LockFeatureResponse',
        typeInfo: 'WFS_1_1_0.LockFeatureResponseType'
      }, {
        elementName: 'WFS_Capabilities',
        typeInfo: 'WFS_1_1_0.WFSCapabilitiesType'
      }, {
        elementName: 'FeatureCollection',
        typeInfo: 'WFS_1_1_0.FeatureCollectionType',
        substitutionHead: {
          localPart: '_FeatureCollection',
          namespaceURI: 'http:\/\/www.opengis.net\/gml'
        }
      }, {
        elementName: 'Transaction',
        typeInfo: 'WFS_1_1_0.TransactionType'
      }, {
        elementName: 'LockId',
        typeInfo: 'String'
      }, {
        elementName: 'ServesGMLObjectTypeList',
        typeInfo: 'WFS_1_1_0.GMLObjectTypeListType'
      }, {
        elementName: 'LockFeature',
        typeInfo: 'WFS_1_1_0.LockFeatureType'
      }, {
        elementName: 'Query',
        typeInfo: 'WFS_1_1_0.QueryType'
      }, {
        elementName: 'DescribeFeatureType',
        typeInfo: 'WFS_1_1_0.DescribeFeatureTypeType'
      }, {
        elementName: 'Delete',
        typeInfo: 'WFS_1_1_0.DeleteElementType'
      }, {
        elementName: 'Insert',
        typeInfo: 'WFS_1_1_0.InsertElementType'
      }, {
        elementName: 'Update',
        typeInfo: 'WFS_1_1_0.UpdateElementType'
      }, {
        elementName: 'FeatureTypeList',
        typeInfo: 'WFS_1_1_0.FeatureTypeListType'
      }, {
        elementName: 'GetCapabilities',
        typeInfo: 'WFS_1_1_0.GetCapabilitiesType'
      }, {
        elementName: 'TransactionResponse',
        typeInfo: 'WFS_1_1_0.TransactionResponseType'
      }, {
        elementName: 'Native',
        typeInfo: 'WFS_1_1_0.NativeType'
      }, {
        elementName: 'SupportsGMLObjectTypeList',
        typeInfo: 'WFS_1_1_0.GMLObjectTypeListType'
      }, {
        elementName: 'Property',
        typeInfo: 'WFS_1_1_0.PropertyType'
      }]
  };
  return {
    WFS_1_1_0: WFS_1_1_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], WFS_1_1_0_Module_Factory);
}
else {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.WFS_1_1_0 = WFS_1_1_0_Module_Factory().WFS_1_1_0;
  }
  else {
    var WFS_1_1_0 = WFS_1_1_0_Module_Factory().WFS_1_1_0;
  }
}
/**
 * @require Jsonix-min.js
 * version wps-gui-1.0
 */

if (!window.wps) {
	window.wps = {};
}
var wps = window.wps;

wps.htmlEncode = function(value) {
	return !value ? value : String(value).replace(/&/g, "&amp;").replace(/>/g,"&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
};

wps.hiddenForm = function(unmarshaller, options, url, fields, body) {
	if ($('#hiddenform-iframe').length) {
		$('#hiddenform-iframe').remove();
	}
	$('body').append('<iframe class="x-hidden" id="hiddenform-iframe" name="iframe"></iframe>');
	$('#hiddenform-iframe').on('load',
			function(evt) {
				var info = unmarshaller
						.unmarshalDocument(evt.target.contentDocument).value;
				var exception = wps.client.getExceptionText(info);
				if (options.failure) {
					options.failure.call(options.scope, exception, body);
				}
			});
	if ($('#hiddenform-form').length) {
		$('#hiddenform-form').remove();
	}
	$('body').append('<form classs="x-hidden" action="'
							+ url
							+ '" method="POST" target="iframe" encType="multipart/form-data" id="hiddenform-form"></form>');
	$.each(fields, function(i, values) {
		$('#hiddenform-form').append('<input type="text" class="x-hidden" id="' + 'hiddenform-'
						+ values[0] + '" name="' + values[0] + '" value="'
						+ wps.htmlEncode(values[1]) + '" />');
	});
	$('form#hiddenform-form').submit();
	if (options.success) {
		var outputs = {};
		outputs[options.output || 'result'] = '';
		options.success.call(options.scope, outputs, body);
	}
};

/**
 * 用于WPS调用
 * @param options
 * 		client - {wps.client} WPS调用客户端
 * 		server - {String} 客户端wps服务key
 * 		identifier - {String} process id.例如geoserver wps中的JTS:buffer/JTS:intersection等
 */
wps.process = function(options) {
	var opts = options || {};
	/**
	 * {wps.client} 调用wps客户端
	 */
	this.client = opts.client;
	/**
	 * {String} 客户端wps服务key
	 */
	this.server = opts.server;
	/**
	 * process id.例如geoserver wps中的JTS:buffer/JTS:intersection等
	 */
	this.identifier = opts.identifier;
	/**
	 * {Object} DescribeProcess请求结果.
	 */
	this.description = null;
	/**
	 * {String} Service endpoint for locally chained WPS processes
	 */
	this.localWPS = 'http://geoserver/wps';
	this.localWFS = 'http://geoserver/wfs';
	this.localWCS = 'http://geoserver/wcs';
    /**
	 * 用于格式解析，对应调用方法的options使用属性的方式，
	 * 例如
     */
	this.WKTFormat = new ol.format.WKT();
	this.GeoJSONFormat = new ol.format.GeoJSON();
	this.WFSFormat = new ol.format.WFS();
    /**
	 * {Integer} 尚未配置完成的process挂起请求的数量
	 */
	this.chained = 0;
	for ( var prop in options) {
		if (this.hasOwnProperty(prop)) {
			this[prop] = options[prop];
		}
	}
	/**
	 * chained processes的回调函数
	 */
	this.executeCallbacks = [];
	this.formats = [ {
		mimeType : 'text/xml; subtype=wfs-collection/1.1',
		format : this.WFSFormat
	}, {
		mimeType : 'application/wkt',
		format : this.WKTFormat
	}, {
		mimeType : 'application/json',
		format : this.GeoJSONFormat
	} ];
};

/**
 * 调用wps.client对象执行DescribeProcess异步请求
 * @param options
 * 		callback - {Function}
 * 		scope - {Object}
 */
wps.process.prototype.describe = function(options) {
	options = options || {};
	if (!this.description) {
		this.client.describeProcess(this.server, this.identifier, function(description) {
			if (!this.description) {
				this.parseDescription(description);
			}
			if (options.callback) {
				options.callback.call(options.scope || this, this.description);
			}
		}, this);
	} else if (options.callback) {
		var description = this.description;
		window.setTimeout(function() {
			options.callback.call(options.scope || this, description);
		}, 0);
	}
};

// check the values against the required inputs
wps.process.prototype.isComplete = function(values) {
	if (this.description) {
		var hasUndefined = false;
		var inputs = this.description.dataInputs.input;
		for ( var i = 0, ii = inputs.length; i < ii; ++i) {
			var input = inputs[i];
			if (input.minOccurs > 0) {
				if (values[input.identifier.value] === undefined) {
					hasUndefined = true;
					break;
				}
			}
		}
		return !hasUndefined;
	} else {
		return false;
	}
};

/**
 * 配置wps
 * @param options
 * 		inputs - {Object} process输入参数，常为geometry对象或features对象，
 * 					例如JTS:buffer输入参数inputs：{geom: intersect.output(),distance: 1}
 * 		callback - {Function(scope)} 配置完成后回调函数
 * 		scope - {Object} scope for the callback
 * @returns {wps.process}
 */
wps.process.prototype.configure = function(options) {
	this.info = {
		name : {
			localPart : "Execute",
			namespaceURI : "http://www.opengis.net/wps/1.0.0"
		},
		value : {
			service : "WPS",
			version : "1.0.0",
			identifier : {
				value : this.identifier
			},
			dataInputs : {
				input : []
			}
		}
	};
	this.describe({
		callback : function() {
			var description = this.description, inputs = options.inputs, input, i, ii;
			for (i = 0, ii = description.dataInputs.input.length; i < ii; ++i) {
				input = description.dataInputs.input[i];
				if (inputs[input.identifier.value] !== undefined) {
					if (!input.boundingBoxData && $.isArray(inputs[input.identifier.value])) {
						//直接传入features数组
						this.setInputData(input, inputs[input.identifier.value]);
						/*for ( var j = 0, jj = inputs[input.identifier.value].length; j < jj; ++j) {
							this.setInputData(input, inputs[input.identifier.value][j]);
						}*/
					} else {
						this.setInputData(input, inputs[input.identifier.value]);
					}
				}
			}
			if (options.callback) {
				options.callback.call(options.scope);
			}
		},
		scope : this
	});
	return this;
};

/**
 * 执行process
 * @param options
 * 		inputs - {Object} process输入参数，常为geometry对象或features对象，
 * 					例如JTS:buffer输入参数inputs：{geom: intersect.output(),distance: '1'}
 * 		output - {String} 要解析的输出ID；如果未设置该参数，则解析第一个输出
 * 		success - {Function(outputs)} 执行完成后回调函数
 * 		scope - {Object}可选，scope for the success callback.
 */
wps.process.prototype.execute = function(options) {
	this.configure({
		inputs : options.inputs,
		callback : function() {
			var me = this;
			var outputIndex = this.getOutputIndex(
					me.description.processOutputs.output,
					options.output);
			me.setResponseForm({outputIndex : outputIndex});
			(function callback() {
				var idx = me.executeCallbacks.indexOf(callback);
				if (idx > -1) {
					me.executeCallbacks.splice(idx, 1);
				}
				if (me.chained !== 0) {
					// need to wait until chained processes have a
					// description and configuration - see chainProcess
					me.executeCallbacks.push(callback);
					return;
				}
				// all chained processes are added as references now, so
				// let's proceed.

				var desc = me.description;
				var hasTiffOutput = false;
				if (desc.processOutputs) {
					for ( var i = 0, ii = desc.processOutputs.output.length; i < ii; ++i) {
						var output = desc.processOutputs.output[i];
						if (output.complexOutput
								&& output.complexOutput.supported
								&& output.complexOutput.supported.format) {
							for ( var j = 0, jj = output.complexOutput.supported.format.length; j < jj; ++j) {
								if (output.complexOutput.supported.format[j].mimeType === 'image/tiff') {
									hasTiffOutput = true;
									break;
								}
							}
						}
					}
				}
				var body = me.client.marshaller.marshalString(me.info);
				if (hasTiffOutput) {
					new wps.hiddenForm(me.client.unmarshaller, options,
							me.client.servers[me.server].url, [ [
									'body', body ] ], body);
					if (options.startdownload) {
						options.startdownload.call(options.scope);
					}
				} else {
					var xmlhttp = new XMLHttpRequest();
					xmlhttp.open('POST',
							me.client.servers[me.server].url, true);
					xmlhttp.setRequestHeader('Content-type',
							'application/xml');
					xmlhttp.onload = function() {

						// check for exceptions
						if (this.responseText.indexOf('ExceptionText') !== -1) {
							var info = me.client.unmarshaller
									.unmarshalDocument(this.responseXML).value;
							var exception = wps.client
									.getExceptionText(info);
							if (options.failure) {
								options.failure.call(options.scope,
										exception, body);
								return;
							}
						}
						var output = me.description.processOutputs.output[outputIndex];
						var result;
						if (output.literalOutput) {
							if (output.literalOutput.dataType === "boolean") {
								result = (this.responseText.trim()
										.toLowerCase() === 'true');
							} else if (output.literalOutput.dataType === "double") {
								result = parseFloat(this.responseText);
							} else {
								result = this.responseText;
							}
						} else if (output.boundingBoxOutput) {
							var box = me.client.unmarshaller
									.unmarshalDocument(this.responseXML).value;
							var feature = new ol.Feature();
							var geom = new ol.geom.Polygon([ [
									box.lowerCorner,
									[ box.lowerCorner[0],
											box.upperCorner[1] ],
									box.upperCorner,
									[ box.upperCorner[0],
											box.lowerCorner[1] ],
									box.lowerCorner ] ]);
							feature.setGeometry(geom);
							result = [ feature ];
						} else if (output.complexOutput) {
							if (output.complexOutput._default.format.mimeType === 'text/xml') {
								result = this.responseText;
							} else {
                                result = this.responseText;
                                //由于me.formats[i].format使用默认参数，造成readFeatures解析有误，在外部解析
								/*var mimeType = me
										.findMimeType(output.complexOutput.supported.format);
								for ( var i = 0, ii = me.formats.length; i < ii; ++i) {
									if (me.formats[i].mimeType === mimeType) {
										try {
											result = me.formats[i].format
													.readFeatures(this.responseText);
										} catch (e) {
											if (window.console) {
												window.console.warn(e);
											}
											result = this.responseText;
										}
										break;
									}
								}*/
							}
						}
						if (options.success) {
							var outputs = {};
							outputs[options.output || 'result'] = result;
							options.success.call(options.scope,
									outputs, body, this.responseText);
						}
					};
					xmlhttp.send(body);
				}
			})();
		},
		scope : this
	});
};

/**
 * 将配置process的输出作为另一个process的输入
 * (code)
 * intersect = client.getProcess('opengeo', 'JTS:intersection');
 * intersect.configure({
 *     // ...
 * });
 * buffer = client.getProcess('opengeo', 'JTS:buffer');
 * buffer.execute({
 *     inputs: {
 *         geom: intersect.output('result'), // <-- here we're chaining
 *         distance: 1
 *     },
 *     // ...
 * });
 * (end)
 * @param identifier {String} chain的输出id，未设置时默认使用第一个输出
 * @returns {bxmap.protocol.WPSProcess.chainlink}
 */
wps.process.prototype.output = function(identifier) {
	return new wps.process.chainlink({
		process : this,
		output : identifier
	});
};

/**
 * 解析DescribeProcess response
 * @param description
 */
wps.process.prototype.parseDescription = function(description) {
	var server = this.client.servers[this.server];
	this.description = this.client.unmarshaller.unmarshalString(server.processDescription[this.identifier]).value.processDescription[0];
};

/**
 * 设置单个input数据
 * @param input - {Object}  An entry from the dataInputs array of the process description.
 * @param data - {Mixed} 空间数据，通常为几何/几何集合对象或者要素/要素集合对象等
 */
wps.process.prototype.setInputData = function(input, data) {
	var inputValue;
	if (data instanceof wps.process.chainlink) {
		++this.chained;
		inputValue = {
			identifier : {
				value : input.identifier.value
			},
			reference : {
				method : 'POST',
				href : data.process.server === this.server ? this.localWPS: this.client.servers[data.process.server].url
			}
		};
		this.info.value.dataInputs.input.push(inputValue);
		data.process.describe({
			callback : function() {
				--this.chained;
				this.chainProcess(input, inputValue, data);
			},
			scope : this
		});
	} else if (data instanceof wps.process.localWCS) {
		inputValue = {
			identifier : {
				value : input.identifier.value
			},
			reference : {
				method : 'POST',
				mimeType : 'image/tiff',
				href : this.localWCS
			}
		};
		inputValue.reference.body = {
			content : [ {
				name : {
					namespaceURI : "http://www.opengis.net/wcs/1.1.1",
					localPart : "GetCoverage"
				},
				value : {
					domainSubset : {
						boundingBox : {
							name : {
								namespaceURI : "http://www.opengis.net/ows/1.1",
								localPart : "BoundingBox"
							},
							value : {
								crs : 'http://www.opengis.net/gml/srs/epsg.xml#4326',
								lowerCorner : data.lowerCorner,
								upperCorner : data.upperCorner
							}
						}
					},
					identifier : {
						value : data.identifier
					},
					output : {
						format : "image/tiff"
					},
					service : "WCS",
					version : "1.1.1"
				}
			} ]
		};
		this.info.value.dataInputs.input.push(inputValue);
	} else if (data instanceof wps.process.localWFS) {
		inputValue = {
			identifier : {
				value : input.identifier.value
			},
			reference : {
				method : 'POST',
				mimeType : 'text/xml',
				href : this.localWFS
			}
		};
		inputValue.reference.body = {
			content : [ {
				name : {
					namespaceURI : "http://www.opengis.net/wfs",
					localPart : "GetFeature"
				},
				value : {
					outputFormat : "GML2",
					service : "WFS",
					version : "1.1.0",
					query : [ {
						srsName : data.srsName,
						filter : data.bbox ? {
							spatialOps : {
								name : {
									namespaceURI : "http://www.opengis.net/ogc",
									localPart : "BBOX"
								},
								value : {
									envelope : {
										name : {
											namespaceURI : "http://www.opengis.net/gml",
											localPart : "Envelope"
										},
										value : {
											lowerCorner : {
												value : [
														data.bbox.split(',')[0],
														data.bbox.split(',')[1] ]
											},
											upperCorner : {
												value : [
														data.bbox.split(',')[2],
														data.bbox.split(',')[3] ]
											},
											srsName : data.srsName
										}
									}
								}
							}
						}
								: undefined,
						typeName : [ data.typeName ]
					} ]
				}
			} ]
		};
		this.info.value.dataInputs.input.push(inputValue);
	} else {
		var complexData = input.complexData;
		if (complexData) {
			// ol.format.WFS has no writeFeatures so skip it
			var formats = [ {
				mimeType : 'application/wkt',
				format : this.WKTFormat
			}, {
				mimeType : 'application/json',
				format : this.GeoJSONFormat
			} ];
			var format = this.findMimeType(complexData.supported.format, formats);
			var content;
			if ($.isXMLDoc(data)) {
				content = data.childNodes[0];
				format = 'application/gml-3.1.1';
			} else {
				for ( var i = 0, ii = this.formats.length; i < ii; ++i) {
					if (this.formats[i].mimeType === format) {
						if (typeof (data) === "string") {
							if (format === "application/wkt") {
								content = data;
							} else {
								content = this.formats[i].format.writeFeatures(this.WKTFormat.readFeatures(data));
								if (format === 'application/json') {
									content = JSON.stringify(content);
								}
							}
						} else {
							content = this.formats[i].format.writeFeatures(this.toFeatures(data));
						}
						break;
					}
				}
			}
			this.info.value.dataInputs.input.push({
				identifier : {
					value : input.identifier.value
				},
				data : {
					complexData : {
						mimeType : format,
						content : [ content ]
					}
				}
			});
		} else {
			if (input.boundingBoxData) {
				this.info.value.dataInputs.input.push({
					identifier : {
						value : input.identifier.value
					},
					data : {
						boundingBoxData : {
							crs : "EPSG:4326",
							lowerCorner : [ data[0], data[1] ],
							upperCorner : [ data[2], data[3] ]
						}
					}
				});
			} else {
				this.info.value.dataInputs.input.push({
					identifier : {
						value : input.identifier.value
					},
					data : {
						literalData : {
							value : data
						}
					}
				});
			}
		}
	}
};

/**
 * 设置responseForm属性
 * @param options
 * 		outputIndex - {Integer} The index of the output to use. Optional.
 * 		supportedFormats - {Object} Object with supported mime types as key,
 *     		and true as value for supported types. Optional.
 */
wps.process.prototype.setResponseForm = function(options) {
	options = options || {};
	var output = this.description.processOutputs.output[options.outputIndex || 0];
	var mimeType;
	if (output.complexOutput) {
		mimeType = this.findMimeType(output.complexOutput.supported.format, options.supportedFormats);
	}
	this.info.value.responseForm = {
		rawDataOutput : {
			identifier : {
				value : output.identifier.value
			},
			mimeType : mimeType
		}
	};
};

/**
 * Method: getOutputIndex
 * Gets the index of a processOutput by its identifier
 *
 * Parameters:
 * outputs - {Array} The processOutputs array to look at
 * identifier - {String} The identifier of the output
 *
 * Returns
 * {Integer} The index of the processOutput with the provided identifier
 *     in the outputs array.
 */
wps.process.prototype.getOutputIndex = function(outputs, identifier) {
	var output;
	if (identifier) {
		for ( var i = outputs.length - 1; i >= 0; --i) {
			if (outputs[i].identifier.value === identifier) {
				output = i;
				break;
			}
		}
	} else {
		output = 0;
	}
	return output;
};

/**
 * Method: chainProcess
 * Sets a fully configured chained process as input for this process.
 *
 * Parameters:
 * input - {Object} The dataInput that the chained process provides.
 * chainLink - {<wps.process.chainlink>} The process to chain.
 */
wps.process.prototype.chainProcess = function(input, inputValue, chainLink) {
	var output = this.getOutputIndex(
			chainLink.process.description.processOutputs.output,
			chainLink.output);
	inputValue.reference.mimeType = this
			.findMimeType(
					input.complexData.supported.format,
					chainLink.process.description.processOutputs.output[output].complexOutput.supported.format);
	var formats = {};
	formats[inputValue.reference.mimeType] = true;
	chainLink.process.setResponseForm({
		outputIndex : output,
		supportedFormats : formats
	});
	inputValue.reference.body = {
		content : [ chainLink.process.info ]
	};
	while (this.executeCallbacks.length > 0) {
		this.executeCallbacks[0]();
	}
};

wps.process.prototype.toFeatures = function(source) {
	if (!$.isArray(source)) {
		source = [ source ];
	}
	return source;
};

/**
 * 查找支持的mime type
 * @param sourceFormats - {Object} An object literal with mime types as key and true as value for supported formats.
 * @param targetFormats {Object} Like <sourceFormats>, but optional to check for supported mime types on a different target than this process.
 *     			Default is to check against this process's supported formats.
 * @returns
 */
wps.process.prototype.findMimeType = function(sourceFormats, targetFormats) {
	targetFormats = targetFormats || this.formats;
	for ( var i = 0, ii = sourceFormats.length; i < ii; ++i) {
		var f = sourceFormats[i].mimeType;
		for ( var j = 0, jj = targetFormats.length; j < jj; ++j) {
			if (targetFormats[j].mimeType === f) {
				return f;
			}
		}
	}
	return null;
};

wps.process.chainlink = function(options) {
	this.process = null;
	this.output = null;
	for ( var prop in options) {
		if (this.hasOwnProperty(prop)) {
			this[prop] = options[prop];
		}
	}
};

wps.process.localWCS = function(options) {
	this.lowerCorner = null;
	this.upperCorner = null;
	this.identifier = null;
	for ( var prop in options) {
		if (this.hasOwnProperty(prop)) {
			this[prop] = options[prop];
		}
	}
};

wps.process.localWFS = function(options) {
	this.srsName = null;
	this.typeName = null;
	this.bbox = null;
	for ( var prop in options) {
		if (this.hasOwnProperty(prop)) {
			this[prop] = options[prop];
		}
	}
};

/**
 * 用于调用WPS客户端
 * @param options
 * 		servers - 示例{
		     		{local: '/geoserver/wps'},
		     		{opengeo: {url: 'http://demo.opengeo.org/geoserver/wps',version: '1.0.0'}
				  }
 */
wps.client = function(options) {
	/**
	 * json xml转换对象
	 */
	this.context = new Jsonix.Context([ XLink_1_0, OWS_1_1_0, WPS_1_0_0, Filter_2_0, OWS_1_0_0, Filter_1_1_0, GML_2_1_2, WFS_1_1_0, GML_3_1_1, SMIL_2_0, SMIL_2_0_Language, WCS_1_1 ]);
	this.unmarshaller = this.context.createUnmarshaller();
	this.marshaller = this.context.createMarshaller();
	/**
	 * 默认wps版本
	 */
	this.version = options.version || "1.0.0";
	/**
	 * 设置为true,process配置完成才会调用DescribeProcess。默认为true.
	 */
	this.lazy = options.lazy !== undefined ? options.lazy : true;
	/**
     * wps服务元数据，由key标识，例如,key为local和opengeo的服务
     * servers: {
     * 	{local: '/geoserver/wps'},
     * 	{opengeo: {url: 'http://demo.opengeo.org/geoserver/wps',version: '1.0.0'}
     * }
     */
	this.servers = {};
	for ( var s in options.servers) {
		this.servers[s] = typeof options.servers[s] == 'string' ? {
			url : options.servers[s],
			version : this.version,
			processDescription : {}
		} : options.servers[s];
	}
};

/**
 * 获取异常错误
 * @param info {Object}
 * @returns {String}
 */
wps.client.getExceptionText = function(info) {
	var exception = '', i, ii;
	if (info['status'] && info['status'].processFailed
			&& info['status'].processFailed.exceptionReport
			&& info['status'].processFailed.exceptionReport.exception) {
		for (i = 0, ii = info['status'].processFailed.exceptionReport.exception.length; i < ii; ++i) {
			exception += info['status'].processFailed.exceptionReport.exception[i].exceptionText.join('<br/>');
		}
	} else if (info.exception) {
		for (i = 0, ii = info.exception.length; i < ii; ++i) {
			exception += info.exception[i].exceptionText.join('<br/>');
		}
	}
	return exception;
};

/**
 * 执行wps函数
 * @param options
 * 		server - {String} wps服务key
 * 		process - {String} 例如geoserver wps中的JTS:buffer/JTS:intersection等
 * 		inputs - {Object} process输入参数，常为geometry对象或features对象，
 * 					例如JTS:buffer输入参数inputs：{geom: intersect.output(),distance: '1'}
 * 		output - {String} 要解析的输出ID；如果未设置该参数，则解析第一个输出
 * 		success - {Function(outputs)} 执行完成后回调函数
 * 		scope - {Object} 可选，scope for the success callback.
 */
wps.client.prototype.execute = function(options) {
	var process = this.getProcess(options.server, options.process);
	process.execute({
		inputs : options.inputs,
		success : options.success,
		scope : options.scope
	});
};

/**
 * 获取执行的process
 * @param serverID - {String} wps服务key
 * @param processID - {String} 例如geoserver wps中的JTS:buffer/JTS:intersection等
 * @returns {wps.process}
 */
wps.client.prototype.getProcess = function(serverID, processID, options) {
	var process = new wps.process({
		client : this,
		server : serverID,
		identifier : processID
	});
	if (!this.lazy) {
		process.describe(options);
	}
	return process;
};

/**
 * 执行WFS GetCapabilities请求,获取WFS1.1.0服务图层
 * @param serverID - {String} 必需。wps服务key
 * @param callback - {Function({wps.client},{Array} featureTypes)}
 */
wps.client.prototype.getFeatureTypes = function(serverID, callback) {
	var server = this.servers[serverID];
	var xmlhttp = new XMLHttpRequest();
	var url = server.url + '?service=WFS&VERSION=1.1.0&request=GetCapabilities';
	var me = this;
	xmlhttp.open("GET", url, true);
	xmlhttp.onload = function() {
		var featureTypes = [];
		if (this.responseXML !== null) {
			var info = me.unmarshaller.unmarshalDocument(this.responseXML).value;
			if (info && info.featureTypeList && info.featureTypeList.featureType) {
				for ( var i = 0, ii = info.featureTypeList.featureType.length; i < ii; ++i) {
					var featureType = {};
					var ft = info.featureTypeList.featureType[i];
					featureType.name = ft.name;
					featureType.lowerCorner = ft.wgs84BoundingBox[0].lowerCorner;
					featureType.upperCorner = ft.wgs84BoundingBox[0].upperCorner;
					featureTypes.push(featureType);
				}
			} else if (window.console) {
				window.console.warn('No featureTypes found on WFS server: ' + server.url);
			}
		} else if (window.console) {
			window.console.error('There was an error loading WFS 1.1.0 GetCapabilities from: '
							+ server.url);
		}
		callback.call(me, featureTypes);
	};
	xmlhttp.send();
};

/**
 * 执行WCS GetCapabilities请求,获取WCS1.1.0 coverages图层
 * @param serverID - {String} 必需。wps服务key
 * @param callback - {Function({wps.client},{Array} coverages)}
 */
wps.client.prototype.getCoverages = function(serverID, callback) {
	var server = this.servers[serverID];
	var xmlhttp = new XMLHttpRequest();
	var url = server.url + '?service=WCS&VERSION=1.1.0&request=GetCapabilities';
	var me = this;
	xmlhttp.open("GET", url, true);
	xmlhttp.onload = function() {
		var coverages = [];
		if (this.responseXML !== null) {
			var info = me.unmarshaller.unmarshalDocument(this.responseXML).value;
			if (info && info.contents && info.contents.coverageSummary) {
				for ( var i = 0, ii = info.contents.coverageSummary.length; i < ii; ++i) {
					var coverage = {};
					if (info.contents.coverageSummary[i].content) {
						for ( var j = 0, jj = info.contents.coverageSummary[i].content.length; j < jj; ++j) {
							var content = info.contents.coverageSummary[i].content[j];
							if (content.name.localPart === "Identifier") {
								coverage.name = content.value;
							}
							if (content.name.localPart === "WGS84BoundingBox") {
								coverage.lowerCorner = content.value.lowerCorner;
								coverage.upperCorner = content.value.upperCorner;
							}
							if (coverage.name && coverage.lowerCorner && coverage.upperCorner) {
								coverages.push(coverage);
							}
						}
					}
				}
			} else if (window.console) {
				window.console.warn('No coverages found on WCS server: ' + server.url);
			}
		} else if (window.console) {
			window.console.error('There was an error loading WCS 1.1.0 GetCapabilities from: ' + server.url);
		}
		callback.call(me, coverages);
	};
	xmlhttp.send();
};

/**
 * 执行WPS GetCapabilities请求,获取wps
 * @param serverID - {String} 必需。wps服务key
 * @param callback - {Function({wps.client},groups)}
 */
wps.client.prototype.getGroupedProcesses = function(serverID, callback) {
	var server = this.servers[serverID];
	var xmlhttp = new XMLHttpRequest();
	var url = server.url + '?service=WPS&VERSION=' + server.version + '&request=GetCapabilities';
	var me = this;
	var errorText = 'There was an error loading the WPS GetCapabilities document from: ' + server.url;
	xmlhttp.open("GET", url, true);
	xmlhttp.onload = function() {
		if (this.responseXML !== null) {
			var info = me.unmarshaller.unmarshalDocument(this.responseXML).value;
			if (info && info.exception) {
				alert(errorText + ' (' + wps.client.getExceptionText(info) + ')');
			} else if (info && info.processOfferings
					&& info.processOfferings.process) {
				var groups = {};
				for ( var i = 0, ii = info.processOfferings.process.length; i < ii; ++i) {
					var key = info.processOfferings.process[i].identifier.value;
					var names = key.split(':');
					var group = names[0];
					if (!groups[group]) {
						groups[group] = [];
					}
					groups[group].push({
						name : names[1],
						value : info.processOfferings.process[i]
					});
				}
				callback.call(me, groups);
			}
		} else {
			alert(errorText);
		}
	};
	xmlhttp.send();
};

/**
 * 执行wps DescribeProcess请求获取process信息
 * @param serverID - {String} 必需。wps服务key
 * @param processID - {String} 必需。例如geoserver wps中的JTS:buffer/JTS:intersection等
 * @param callback - {Function} 可选。description有效时回调函数
 * @param scope - {Object} 可选，execution scope for the callback function
 */
wps.client.prototype.describeProcess = function(serverID, processID, callback, scope) {
	var server = this.servers[serverID];
	if (!server.processDescription[processID]) {
		// TODO see if we can prevent multiple calls to the same DescribeProcess identifier
	    // see: https://github.com/boundlessgeo/wps-gui/issues/211 for details and test case
		server.processDescription[processID] = null;
		var xmlhttp = new XMLHttpRequest();
		var url = server.url + '?service=WPS&VERSION=' + server.version + '&request=DescribeProcess&identifier=' + processID;
		xmlhttp.open("GET", url, true);
		var me = this;
		xmlhttp.onload = function() {
			server.processDescription[processID] = this.responseText;
			callback.call(scope, this.responseText);
		};
		xmlhttp.send();
	} else {
		window.setTimeout(function() {
			callback.call(scope, server.processDescription[processID]);
		}, 0);
	}
};

var WPS_1_0_0_Module_Factory = function () {
  var WPS_1_0_0 = {
    name: 'WPS_1_0_0',
    defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/wps\/1.0.0',
    typeInfos: [{
        type: 'classInfo',
        localName: 'Execute',
        baseTypeInfo: 'WPS_1_0_0.RequestBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'identifier',
            elementName: {
              localPart: 'Identifier',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.CodeType'
          }, {
            type: 'element',
            name: 'dataInputs',
            elementName: 'DataInputs',
            typeInfo: 'WPS_1_0_0.DataInputsType'
          }, {
            type: 'element',
            name: 'responseForm',
            elementName: 'ResponseForm',
            typeInfo: 'WPS_1_0_0.ResponseFormType'
          }]
      }, {
        type: 'classInfo',
        localName: 'RequestBaseType',
        propertyInfos: [{
            name: 'service',
            typeInfo: 'String',
            attributeName: 'service',
            type: 'attribute'
          }, {
            name: 'version',
            typeInfo: 'String',
            attributeName: 'version',
            type: 'attribute'
          }, {
            name: 'language',
            typeInfo: 'String',
            attributeName: 'language',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'DataInputsType',
        propertyInfos: [{
            type: 'element',
            name: 'input',
            collection: true,
            elementName: 'Input',
            typeInfo: 'WPS_1_0_0.InputType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ResponseFormType',
        propertyInfos: [{
            type: 'element',
            name: 'responseDocument',
            elementName: 'ResponseDocument',
            typeInfo: 'WPS_1_0_0.ResponseDocumentType'
          }, {
            type: 'element',
            name: 'rawDataOutput',
            elementName: 'RawDataOutput',
            typeInfo: 'WPS_1_0_0.OutputDefinitionType'
          }]
      }, {
        type: 'classInfo',
        localName: 'GetCapabilities',
        propertyInfos: [{
            type: 'element',
            name: 'acceptVersions',
            elementName: 'AcceptVersions',
            typeInfo: 'OWS_1_1_0.AcceptVersionsType'
          }, {
            name: 'service',
            typeInfo: 'String',
            attributeName: 'service',
            type: 'attribute'
          }, {
            name: 'language',
            typeInfo: 'String',
            attributeName: 'language',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'WPSCapabilitiesType',
        baseTypeInfo: 'OWS_1_1_0.CapabilitiesBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'processOfferings',
            elementName: 'ProcessOfferings',
            typeInfo: 'WPS_1_0_0.ProcessOfferings'
          }, {
            type: 'element',
            name: 'languages',
            elementName: 'Languages',
            typeInfo: 'WPS_1_0_0.Languages'
          }, {
            type: 'element',
            name: 'wsdl',
            elementName: 'WSDL',
            typeInfo: 'WPS_1_0_0.WSDL'
          }, {
            name: 'service',
            typeInfo: 'String',
            attributeName: 'service',
            type: 'attribute'
          }, {
            name: 'lang',
            typeInfo: 'String',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'DescribeProcess',
        baseTypeInfo: 'WPS_1_0_0.RequestBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'identifier',
            collection: true,
            elementName: {
              localPart: 'Identifier',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.CodeType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ExecuteResponse',
        baseTypeInfo: 'WPS_1_0_0.ResponseBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'process',
            elementName: 'Process',
            typeInfo: 'WPS_1_0_0.ProcessBriefType'
          }, {
            type: 'element',
            name: 'status',
            elementName: 'Status',
            typeInfo: 'WPS_1_0_0.StatusType'
          }, {
            type: 'element',
            name: 'dataInputs',
            elementName: 'DataInputs',
            typeInfo: 'WPS_1_0_0.DataInputsType'
          }, {
            type: 'element',
            name: 'outputDefinitions',
            elementName: 'OutputDefinitions',
            typeInfo: 'WPS_1_0_0.OutputDefinitionsType'
          }, {
            type: 'element',
            name: 'processOutputs',
            elementName: 'ProcessOutputs',
            typeInfo: 'WPS_1_0_0.ExecuteResponse.ProcessOutputs'
          }, {
            name: 'serviceInstance',
            typeInfo: 'String',
            attributeName: 'serviceInstance',
            type: 'attribute'
          }, {
            name: 'statusLocation',
            typeInfo: 'String',
            attributeName: 'statusLocation',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ResponseBaseType',
        propertyInfos: [{
            name: 'service',
            typeInfo: 'String',
            attributeName: 'service',
            type: 'attribute'
          }, {
            name: 'version',
            typeInfo: 'String',
            attributeName: 'version',
            type: 'attribute'
          }, {
            name: 'lang',
            typeInfo: 'String',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ProcessBriefType',
        baseTypeInfo: 'WPS_1_0_0.DescriptionType',
        propertyInfos: [{
            type: 'element',
            name: 'profile',
            collection: true,
            elementName: 'Profile',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'wsdl',
            elementName: 'WSDL',
            typeInfo: 'WPS_1_0_0.WSDL'
          }, {
            name: 'processVersion',
            typeInfo: 'String',
            attributeName: {
              localPart: 'processVersion',
              namespaceURI: 'http:\/\/www.opengis.net\/wps\/1.0.0'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'StatusType',
        propertyInfos: [{
            type: 'element',
            name: 'processAccepted',
            elementName: 'ProcessAccepted',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'processStarted',
            elementName: 'ProcessStarted',
            typeInfo: 'WPS_1_0_0.ProcessStartedType'
          }, {
            type: 'element',
            name: 'processPaused',
            elementName: 'ProcessPaused',
            typeInfo: 'WPS_1_0_0.ProcessStartedType'
          }, {
            type: 'element',
            name: 'processSucceeded',
            elementName: 'ProcessSucceeded',
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'processFailed',
            elementName: 'ProcessFailed',
            typeInfo: 'WPS_1_0_0.ProcessFailedType'
          }, {
            name: 'creationTime',
            typeInfo: 'Calendar',
            attributeName: 'creationTime',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'OutputDefinitionsType',
        propertyInfos: [{
            type: 'element',
            name: 'output',
            collection: true,
            elementName: 'Output',
            typeInfo: 'WPS_1_0_0.DocumentOutputDefinitionType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ExecuteResponse.ProcessOutputs',
        propertyInfos: [{
            type: 'element',
            name: 'output',
            collection: true,
            elementName: 'Output',
            typeInfo: 'WPS_1_0_0.OutputDataType'
          }]
      }, {
        type: 'classInfo',
        localName: 'Languages',
        propertyInfos: [{
            type: 'element',
            name: '_default',
            elementName: 'Default',
            typeInfo: 'WPS_1_0_0.Languages.Default'
          }, {
            type: 'element',
            name: 'supported',
            elementName: 'Supported',
            typeInfo: 'WPS_1_0_0.LanguagesType'
          }]
      }, {
        type: 'classInfo',
        localName: 'Languages.Default',
        propertyInfos: [{
            type: 'element',
            name: 'language',
            elementName: {
              localPart: 'Language',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'LanguagesType',
        propertyInfos: [{
            type: 'element',
            name: 'language',
            collection: true,
            elementName: {
              localPart: 'Language',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'ProcessOfferings',
        propertyInfos: [{
            type: 'element',
            name: 'process',
            collection: true,
            elementName: 'Process',
            typeInfo: 'WPS_1_0_0.ProcessBriefType'
          }]
      }, {
        type: 'classInfo',
        localName: 'WSDL',
        propertyInfos: [{
            name: 'href',
            typeInfo: 'String',
            attributeName: {
              localPart: 'href',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ProcessDescriptions',
        baseTypeInfo: 'WPS_1_0_0.ResponseBaseType',
        propertyInfos: [{
            type: 'element',
            name: 'processDescription',
            collection: true,
            elementName: {
              localPart: 'ProcessDescription'
            },
            typeInfo: 'WPS_1_0_0.ProcessDescriptionType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ProcessDescriptionType',
        baseTypeInfo: 'WPS_1_0_0.ProcessBriefType',
        propertyInfos: [{
            type: 'element',
            name: 'dataInputs',
            elementName: {
              localPart: 'DataInputs'
            },
            typeInfo: 'WPS_1_0_0.ProcessDescriptionType.DataInputs'
          }, {
            type: 'element',
            name: 'processOutputs',
            elementName: {
              localPart: 'ProcessOutputs'
            },
            typeInfo: 'WPS_1_0_0.ProcessDescriptionType.ProcessOutputs'
          }, {
            name: 'storeSupported',
            typeInfo: 'Boolean',
            attributeName: 'storeSupported',
            type: 'attribute'
          }, {
            name: 'statusSupported',
            typeInfo: 'Boolean',
            attributeName: 'statusSupported',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'SupportedCRSsType',
        propertyInfos: [{
            type: 'element',
            name: '_default',
            elementName: {
              localPart: 'Default'
            },
            typeInfo: 'WPS_1_0_0.SupportedCRSsType.Default'
          }, {
            type: 'element',
            name: 'supported',
            elementName: {
              localPart: 'Supported'
            },
            typeInfo: 'WPS_1_0_0.CRSsType'
          }]
      }, {
        type: 'classInfo',
        localName: 'CRSsType',
        propertyInfos: [{
            type: 'element',
            name: 'crs',
            collection: true,
            elementName: {
              localPart: 'CRS'
            },
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'ResponseDocumentType',
        propertyInfos: [{
            type: 'element',
            name: 'output',
            collection: true,
            elementName: 'Output',
            typeInfo: 'WPS_1_0_0.DocumentOutputDefinitionType'
          }, {
            name: 'storeExecuteResponse',
            typeInfo: 'Boolean',
            attributeName: 'storeExecuteResponse',
            type: 'attribute'
          }, {
            name: 'lineage',
            typeInfo: 'Boolean',
            attributeName: 'lineage',
            type: 'attribute'
          }, {
            name: 'status',
            typeInfo: 'Boolean',
            attributeName: 'status',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'UOMsType',
        propertyInfos: [{
            type: 'element',
            name: 'uom',
            collection: true,
            elementName: {
              localPart: 'UOM',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.DomainMetadataType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ComplexDataCombinationsType',
        propertyInfos: [{
            type: 'element',
            name: 'format',
            collection: true,
            elementName: {
              localPart: 'Format'
            },
            typeInfo: 'WPS_1_0_0.ComplexDataDescriptionType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ValuesReferenceType',
        propertyInfos: [{
            name: 'reference',
            typeInfo: 'String',
            attributeName: {
              localPart: 'reference',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            type: 'attribute'
          }, {
            name: 'valuesForm',
            typeInfo: 'String',
            attributeName: 'valuesForm',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'OutputDefinitionType',
        propertyInfos: [{
            type: 'element',
            name: 'identifier',
            elementName: {
              localPart: 'Identifier',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.CodeType'
          }, {
            name: 'uom',
            typeInfo: 'String',
            attributeName: 'uom',
            type: 'attribute'
          }, {
            name: 'mimeType',
            typeInfo: 'String',
            attributeName: 'mimeType',
            type: 'attribute'
          }, {
            name: 'encoding',
            typeInfo: 'String',
            attributeName: 'encoding',
            type: 'attribute'
          }, {
            name: 'schema',
            typeInfo: 'String',
            attributeName: 'schema',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'OutputReferenceType',
        propertyInfos: [{
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'mimeType',
            typeInfo: 'String',
            attributeName: 'mimeType',
            type: 'attribute'
          }, {
            name: 'encoding',
            typeInfo: 'String',
            attributeName: 'encoding',
            type: 'attribute'
          }, {
            name: 'schema',
            typeInfo: 'String',
            attributeName: 'schema',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'DataType',
        propertyInfos: [{
            type: 'element',
            name: 'complexData',
            elementName: 'ComplexData',
            typeInfo: 'WPS_1_0_0.ComplexDataType'
          }, {
            type: 'element',
            name: 'literalData',
            elementName: 'LiteralData',
            typeInfo: 'WPS_1_0_0.LiteralDataType'
          }, {
            type: 'element',
            name: 'boundingBoxData',
            elementName: 'BoundingBoxData',
            typeInfo: 'OWS_1_1_0.BoundingBoxType'
          }]
      }, {
        type: 'classInfo',
        localName: 'InputReferenceType',
        propertyInfos: [{
            type: 'element',
            name: 'header',
            collection: true,
            elementName: 'Header',
            typeInfo: 'WPS_1_0_0.InputReferenceType.Header'
          }, {
            type: 'element',
            name: 'body',
            elementName: 'Body',
            typeInfo: 'AnyType'
          }, {
            type: 'element',
            name: 'bodyReference',
            elementName: 'BodyReference',
            typeInfo: 'WPS_1_0_0.InputReferenceType.BodyReference'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: {
              localPart: 'href',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }, {
            name: 'method',
            typeInfo: 'String',
            attributeName: 'method',
            type: 'attribute'
          }, {
            name: 'mimeType',
            typeInfo: 'String',
            attributeName: 'mimeType',
            type: 'attribute'
          }, {
            name: 'encoding',
            typeInfo: 'String',
            attributeName: 'encoding',
            type: 'attribute'
          }, {
            name: 'schema',
            typeInfo: 'String',
            attributeName: 'schema',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'DescriptionType',
        propertyInfos: [{
            type: 'element',
            name: 'identifier',
            elementName: {
              localPart: 'Identifier',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.CodeType'
          }, {
            type: 'element',
            name: 'title',
            elementName: {
              localPart: 'Title',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.LanguageStringType'
          }, {
            type: 'element',
            name: '_abstract',
            elementName: {
              localPart: 'Abstract',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.LanguageStringType'
          }, {
            type: 'element',
            name: 'metadata',
            collection: true,
            elementName: {
              localPart: 'Metadata',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.MetadataType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ProcessFailedType',
        propertyInfos: [{
            type: 'element',
            name: 'exceptionReport',
            elementName: {
              localPart: 'ExceptionReport',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.ExceptionReport'
          }]
      }, {
        type: 'classInfo',
        localName: 'ComplexDataType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'content',
            collection: true,
            allowDom: true,
            mixed: true,
            type: 'anyElement'
          }, {
            name: 'mimeType',
            typeInfo: 'String',
            attributeName: 'mimeType',
            type: 'attribute'
          }, {
            name: 'encoding',
            typeInfo: 'String',
            attributeName: 'encoding',
            type: 'attribute'
          }, {
            name: 'schema',
            typeInfo: 'String',
            attributeName: 'schema',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'LiteralDataType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'String',
            type: 'value'
          }, {
            name: 'dataType',
            typeInfo: 'String',
            attributeName: 'dataType',
            type: 'attribute'
          }, {
            name: 'uom',
            typeInfo: 'String',
            attributeName: 'uom',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'DocumentOutputDefinitionType',
        baseTypeInfo: 'WPS_1_0_0.OutputDefinitionType',
        propertyInfos: [{
            type: 'element',
            name: 'title',
            elementName: {
              localPart: 'Title',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.LanguageStringType'
          }, {
            type: 'element',
            name: '_abstract',
            elementName: {
              localPart: 'Abstract',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.LanguageStringType'
          }, {
            name: 'asReference',
            typeInfo: 'Boolean',
            attributeName: 'asReference',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'SupportedComplexDataInputType',
        baseTypeInfo: 'WPS_1_0_0.SupportedComplexDataType',
        propertyInfos: [{
            name: 'maximumMegabytes',
            typeInfo: 'Integer',
            attributeName: 'maximumMegabytes',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'InputDescriptionType',
        baseTypeInfo: 'WPS_1_0_0.DescriptionType',
        propertyInfos: [{
            type: 'element',
            name: 'complexData',
            elementName: {
              localPart: 'ComplexData'
            },
            typeInfo: 'WPS_1_0_0.SupportedComplexDataInputType'
          }, {
            type: 'element',
            name: 'literalData',
            elementName: {
              localPart: 'LiteralData'
            },
            typeInfo: 'WPS_1_0_0.LiteralInputType'
          }, {
            type: 'element',
            name: 'boundingBoxData',
            elementName: {
              localPart: 'BoundingBoxData'
            },
            typeInfo: 'WPS_1_0_0.SupportedCRSsType'
          }, {
            name: 'minOccurs',
            typeInfo: 'Integer',
            attributeName: 'minOccurs',
            type: 'attribute'
          }, {
            name: 'maxOccurs',
            typeInfo: 'Integer',
            attributeName: 'maxOccurs',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'InputType',
        propertyInfos: [{
            type: 'element',
            name: 'identifier',
            elementName: {
              localPart: 'Identifier',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.CodeType'
          }, {
            type: 'element',
            name: 'title',
            elementName: {
              localPart: 'Title',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.LanguageStringType'
          }, {
            type: 'element',
            name: '_abstract',
            elementName: {
              localPart: 'Abstract',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.LanguageStringType'
          }, {
            type: 'element',
            name: 'reference',
            elementName: 'Reference',
            typeInfo: 'WPS_1_0_0.InputReferenceType'
          }, {
            type: 'element',
            name: 'data',
            elementName: 'Data',
            typeInfo: 'WPS_1_0_0.DataType'
          }]
      }, {
        type: 'classInfo',
        localName: 'OutputDataType',
        baseTypeInfo: 'WPS_1_0_0.DescriptionType',
        propertyInfos: [{
            type: 'element',
            name: 'reference',
            elementName: 'Reference',
            typeInfo: 'WPS_1_0_0.OutputReferenceType'
          }, {
            type: 'element',
            name: 'data',
            elementName: 'Data',
            typeInfo: 'WPS_1_0_0.DataType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ComplexDataCombinationType',
        propertyInfos: [{
            type: 'element',
            name: 'format',
            elementName: {
              localPart: 'Format'
            },
            typeInfo: 'WPS_1_0_0.ComplexDataDescriptionType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ComplexDataDescriptionType',
        propertyInfos: [{
            type: 'element',
            name: 'mimeType',
            elementName: {
              localPart: 'MimeType'
            },
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'encoding',
            elementName: {
              localPart: 'Encoding'
            },
            typeInfo: 'String'
          }, {
            type: 'element',
            name: 'schema',
            elementName: {
              localPart: 'Schema'
            },
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'OutputDescriptionType',
        baseTypeInfo: 'WPS_1_0_0.DescriptionType',
        propertyInfos: [{
            type: 'element',
            name: 'complexOutput',
            elementName: {
              localPart: 'ComplexOutput'
            },
            typeInfo: 'WPS_1_0_0.SupportedComplexDataType'
          }, {
            type: 'element',
            name: 'literalOutput',
            elementName: {
              localPart: 'LiteralOutput'
            },
            typeInfo: 'WPS_1_0_0.LiteralOutputType'
          }, {
            type: 'element',
            name: 'boundingBoxOutput',
            elementName: {
              localPart: 'BoundingBoxOutput'
            },
            typeInfo: 'WPS_1_0_0.SupportedCRSsType'
          }]
      }, {
        type: 'classInfo',
        localName: 'SupportedComplexDataType',
        propertyInfos: [{
            type: 'element',
            name: '_default',
            elementName: {
              localPart: 'Default'
            },
            typeInfo: 'WPS_1_0_0.ComplexDataCombinationType'
          }, {
            type: 'element',
            name: 'supported',
            elementName: {
              localPart: 'Supported'
            },
            typeInfo: 'WPS_1_0_0.ComplexDataCombinationsType'
          }]
      }, {
        type: 'classInfo',
        localName: 'LiteralInputType',
        baseTypeInfo: 'WPS_1_0_0.LiteralOutputType',
        propertyInfos: [{
            type: 'element',
            name: 'allowedValues',
            elementName: {
              localPart: 'AllowedValues',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.AllowedValues'
          }, {
            type: 'element',
            name: 'anyValue',
            elementName: {
              localPart: 'AnyValue',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.AnyValue'
          }, {
            type: 'element',
            name: 'valuesReference',
            elementName: {
              localPart: 'ValuesReference'
            },
            typeInfo: 'WPS_1_0_0.ValuesReferenceType'
          }, {
            type: 'element',
            name: 'defaultValue',
            elementName: {
              localPart: 'DefaultValue'
            },
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'ProcessStartedType',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'String',
            type: 'value'
          }, {
            name: 'percentCompleted',
            typeInfo: 'Int',
            attributeName: 'percentCompleted',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'LiteralOutputType',
        propertyInfos: [{
            type: 'element',
            name: 'dataType',
            elementName: {
              localPart: 'DataType',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.DomainMetadataType'
          }, {
            type: 'element',
            name: 'uoMs',
            elementName: {
              localPart: 'UOMs'
            },
            typeInfo: 'WPS_1_0_0.SupportedUOMsType'
          }]
      }, {
        type: 'classInfo',
        localName: 'SupportedUOMsType',
        propertyInfos: [{
            type: 'element',
            name: '_default',
            elementName: {
              localPart: 'Default'
            },
            typeInfo: 'WPS_1_0_0.SupportedUOMsType.Default'
          }, {
            type: 'element',
            name: 'supported',
            elementName: {
              localPart: 'Supported'
            },
            typeInfo: 'WPS_1_0_0.UOMsType'
          }]
      }, {
        type: 'classInfo',
        localName: 'SupportedUOMsType.Default',
        propertyInfos: [{
            type: 'element',
            name: 'uom',
            elementName: {
              localPart: 'UOM',
              namespaceURI: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            typeInfo: 'OWS_1_1_0.DomainMetadataType'
          }]
      }, {
        type: 'classInfo',
        localName: 'InputReferenceType.Header',
        propertyInfos: [{
            name: 'key',
            typeInfo: 'String',
            attributeName: 'key',
            type: 'attribute'
          }, {
            name: 'value',
            typeInfo: 'String',
            attributeName: 'value',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'InputReferenceType.BodyReference',
        propertyInfos: [{
            name: 'href',
            typeInfo: 'String',
            attributeName: {
              localPart: 'href',
              namespaceURI: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'SupportedCRSsType.Default',
        propertyInfos: [{
            type: 'element',
            name: 'crs',
            elementName: {
              localPart: 'CRS'
            },
            typeInfo: 'String'
          }]
      }, {
        type: 'classInfo',
        localName: 'ProcessDescriptionType.DataInputs',
        propertyInfos: [{
            type: 'element',
            name: 'input',
            collection: true,
            elementName: {
              localPart: 'Input'
            },
            typeInfo: 'WPS_1_0_0.InputDescriptionType'
          }]
      }, {
        type: 'classInfo',
        localName: 'ProcessDescriptionType.ProcessOutputs',
        propertyInfos: [{
            type: 'element',
            name: 'output',
            collection: true,
            elementName: {
              localPart: 'Output'
            },
            typeInfo: 'WPS_1_0_0.OutputDescriptionType'
          }]
      }],
    elementInfos: [{
        elementName: 'Execute',
        typeInfo: 'WPS_1_0_0.Execute'
      }, {
        elementName: 'GetCapabilities',
        typeInfo: 'WPS_1_0_0.GetCapabilities'
      }, {
        elementName: 'DescribeProcess',
        typeInfo: 'WPS_1_0_0.DescribeProcess'
      }, {
        elementName: 'ExecuteResponse',
        typeInfo: 'WPS_1_0_0.ExecuteResponse'
      }, {
        elementName: 'Languages',
        typeInfo: 'WPS_1_0_0.Languages'
      }, {
        elementName: 'ProcessOfferings',
        typeInfo: 'WPS_1_0_0.ProcessOfferings'
      }, {
        elementName: 'WSDL',
        typeInfo: 'WPS_1_0_0.WSDL'
      }, {
        elementName: 'ProcessDescriptions',
        typeInfo: 'WPS_1_0_0.ProcessDescriptions'
      }, {
        elementName: 'Capabilities',
        typeInfo: 'WPS_1_0_0.WPSCapabilitiesType'
      }]
  };
  return {
    WPS_1_0_0: WPS_1_0_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], WPS_1_0_0_Module_Factory);
}
else {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.WPS_1_0_0 = WPS_1_0_0_Module_Factory().WPS_1_0_0;
  }
  else {
    var WPS_1_0_0 = WPS_1_0_0_Module_Factory().WPS_1_0_0;
  }
}
var XLink_1_0_Module_Factory = function () {
  var XLink_1_0 = {
    name: 'XLink_1_0',
    defaultElementNamespaceURI: 'http:\/\/www.w3.org\/1999\/xlink',
    defaultAttributeNamespaceURI: 'http:\/\/www.w3.org\/1999\/xlink',
    typeInfos: [{
        type: 'classInfo',
        localName: 'LocatorType',
        propertyInfos: [{
            type: 'element',
            name: 'locatorTitle',
            collection: true,
            elementName: 'title',
            typeInfo: 'XLink_1_0.TitleEltType'
          }, {
            name: 'type',
            typeInfo: 'String',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'label',
            typeInfo: 'String',
            attributeName: 'label',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'TitleEltType',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: true,
            allowTypedObject: true,
            mixed: true,
            type: 'anyElement'
          }, {
            name: 'type',
            typeInfo: 'String',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'lang',
            typeInfo: 'String',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ArcType',
        propertyInfos: [{
            type: 'element',
            name: 'locatorTitle',
            collection: true,
            elementName: 'title',
            typeInfo: 'XLink_1_0.TitleEltType'
          }, {
            name: 'type',
            typeInfo: 'String',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'String',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'String',
            attributeName: 'actuate',
            type: 'attribute'
          }, {
            name: 'from',
            typeInfo: 'String',
            attributeName: 'from',
            type: 'attribute'
          }, {
            name: 'to',
            typeInfo: 'String',
            attributeName: 'to',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'ResourceType',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: true,
            allowTypedObject: true,
            mixed: true,
            type: 'anyElement'
          }, {
            name: 'type',
            typeInfo: 'String',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'label',
            typeInfo: 'String',
            attributeName: 'label',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'Simple',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: true,
            allowTypedObject: true,
            mixed: true,
            type: 'anyElement'
          }, {
            name: 'type',
            typeInfo: 'String',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            typeInfo: 'String',
            attributeName: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            typeInfo: 'String',
            attributeName: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            typeInfo: 'String',
            attributeName: 'show',
            type: 'attribute'
          }, {
            name: 'actuate',
            typeInfo: 'String',
            attributeName: 'actuate',
            type: 'attribute'
          }]
      }, {
        type: 'classInfo',
        localName: 'Extended',
        propertyInfos: [{
            name: 'extendedModel',
            collection: true,
            elementTypeInfos: [{
                elementName: 'title',
                typeInfo: 'XLink_1_0.TitleEltType'
              }, {
                elementName: 'resource',
                typeInfo: 'XLink_1_0.ResourceType'
              }, {
                elementName: 'locator',
                typeInfo: 'XLink_1_0.LocatorType'
              }, {
                elementName: 'arc',
                typeInfo: 'XLink_1_0.ArcType'
              }],
            type: 'elements'
          }, {
            name: 'type',
            typeInfo: 'String',
            attributeName: 'type',
            type: 'attribute'
          }, {
            name: 'role',
            typeInfo: 'String',
            attributeName: 'role',
            type: 'attribute'
          }, {
            name: 'title',
            typeInfo: 'String',
            attributeName: 'title',
            type: 'attribute'
          }]
      }, {
        type: 'enumInfo',
        localName: 'TypeType',
        baseTypeInfo: 'String',
        values: ['simple', 'extended', 'title', 'resource', 'locator', 'arc']
      }, {
        type: 'enumInfo',
        localName: 'ShowType',
        baseTypeInfo: 'String',
        values: ['new', 'replace', 'embed', 'other', 'none']
      }, {
        type: 'enumInfo',
        localName: 'ActuateType',
        baseTypeInfo: 'String',
        values: ['onLoad', 'onRequest', 'other', 'none']
      }],
    elementInfos: [{
        elementName: 'resource',
        typeInfo: 'XLink_1_0.ResourceType'
      }, {
        elementName: 'arc',
        typeInfo: 'XLink_1_0.ArcType'
      }, {
        elementName: 'title',
        typeInfo: 'XLink_1_0.TitleEltType'
      }, {
        elementName: 'locator',
        typeInfo: 'XLink_1_0.LocatorType'
      }]
  };
  return {
    XLink_1_0: XLink_1_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], XLink_1_0_Module_Factory);
}
else {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.XLink_1_0 = XLink_1_0_Module_Factory().XLink_1_0;
  }
  else {
    var XLink_1_0 = XLink_1_0_Module_Factory().XLink_1_0;
  }
}