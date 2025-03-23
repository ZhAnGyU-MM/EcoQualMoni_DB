//要素符号化
//bxmap.symbol.UniqueValueSymbolizer - 唯一值符号化
//ol.style.IrregularShape - 使用canvas绘制符号

/**
 * @namespace bxmap.symbol
 */
bxmap.symbol = bxmap.symbol || {};

/**
 * @abstract
 * @classdesc 符号化抽象类
 * @extends {ol.Object}
 */
bxmap.symbol.Symbolizer = function(){
	ol.Object.call(this);
}
ol.inherits(bxmap.symbol.Symbolizer, ol.Object);

/**
 * @description 获取feature的属性，内部实现为feature.getProperties()
 * @returns {Object<String,*>}
 */
bxmap.symbol.Symbolizer.getContext = function(feature){
	return feature.getProperties();
}

/**
 * @abstract
 * @description 计算
 * @param feature
 */
bxmap.symbol.Symbolizer.prototype.evaluate = function(feature, value){
	return;
}

/**
 * @classdesc 
 * 唯一值符号化
 * @constructor
 * @extends {bxmap.symbol.Symbolizer}
 * @param {Object} options
 * @param options.defaultStyle {undefined | ol.style.Style | Array.<ol.style.Style> | ol.FeatureStyleFunction} 可选。默认样式
 * 优先根据规则名计算样式，其中默认样式规则名为default，计算默认样式时优先使用规则名，若获取为空时才使用defaultStyle选项
 * @example <caption> 如何使用唯一值符号化类 </caption>
 * var symbol = new bxmap.symbol.UniqueValueSymbolizer({
 * 	defaultStyle: ol.style
 * });
 * var styleMap = {"selected":{value1:style1,..},"unselected":{value1:style1,..}};
 * //添加选中状态样式规则
 * symbol.addRule({ruleName: "selected",styles: styleMap["selected"]});
 * //添加未选中状态abcd要素样式规则
 * symbol.addRule({ruleName: "unselected",styles: styleMap["unselected"]});
 * //添加默认abcd要素样式规则
 * symbol.addRule({ruleName: "default",styles: styleMap["unselected"]});
 */
bxmap.symbol.UniqueValueSymbolizer = function(options){
	ol.Object.call(this);
	var opt_options = options || {};
	/**
	 * @readonly
	 * @description 只读。唯一值规则
	 */
	this.rules = [];
	/**
	 * @private
	 * @description 默认样式
	 */
	this._defaultStyle = opt_options.defaultStyle;
}
ol.inherits(bxmap.symbol.UniqueValueSymbolizer, bxmap.symbol.Symbolizer);

/**
 * @description 添加唯一值样式规则
 * @param {Object} options
 * @param options.ruleName {String|undefined} 规则名称，默认值为"default"
 * @param options.styles {Object} {value1:style1,..} value为字段值，style为{ol.style.Style | Array.<ol.style.Style> | ol.FeatureStyleFunction}类型
 */
bxmap.symbol.UniqueValueSymbolizer.prototype.addRule = function(options){
	if(options == null) return;
	var ruleName = options.ruleName || "default";
	var rule = this._getRuleByName(ruleName);
	var styles = options.styles || {};
	if(rule == null){
		rule = {ruleName:ruleName,styles:styles};
		this.rules.push(rule);
	}else{
		for(key in styles){
			rule.styles[key] = styles[key];
		}
	}
}

/**
 * @description 计算符号为feature设置样式
 * @param {ol.Feature} feature 矢量要素
 * @param {String} value feature符号化使用的值
 */
bxmap.symbol.UniqueValueSymbolizer.prototype.evaluate = function(feature, value){
	var ruleName = feature.getSymbolRuleName() || "default";
	var rule = this._getRuleByName(ruleName);
	var styles = rule ? rule.styles : {};
	var style = styles[value] || this._defaultStyle;
	if(style){
		feature.setStyle(style);
	}
}

/**
 * @private
 * @description 获取定义的规则
 * @param {String} ruleName
 */
bxmap.symbol.UniqueValueSymbolizer.prototype._getRuleByName = function(ruleName){
	if(ruleName == null) return null;
	var rule = null;
	for(var i = 0; i < this.rules.length; i++){
		if(this.rules[i].ruleName == ruleName){
			rule = this.rules[i];
		}
	}
	return rule;
}

/**
 * @classdesc
 * 用于canvas自由绘制点要素样式
 * @param options
 * @param options.fill {ol.style.Fill|undefined}
 * @param options.stroke {ol.style.Stroke|undefined}
 * @param options.size {Array<Number>}} 绘制画布大小[width,height]
 * @param options.paths {Array<Array<ol.Pixel}>>} canvas绘制线或面形状的路径，例如[[[10,0],[0,0],[0,10]],[[0,40],[0,50],[10,50]],[[40,50],[50,50],[50,40]],[[50,10],[50,0],[40,0]]]
 * @param options.angle {Number|undefined} 绘制的形状顺时针旋转一定的角度（弧度），默认为0
 * @param options.atlasManager {ol.style.AtlasManager|undefined}
 * @param options.rotateWithView {Boolean|undefined} 是否随视图旋转，默认为false
 * @param options.rotation {Number|undefined} 画布顺时针旋转一定的角度（弧度），默认为0
 * @constructor
 */
ol.style.IrregularShape = function(options) {
    /**
     * @private
     * @type {HTMLCanvasElement}
     */
    this.hitDetectionCanvas_ = null;

    /**
     * @private
     * @type {ol.style.Fill}
     */
    this.fill_ = options.fill !== undefined ? options.fill : null;

    /**
     * @private
     * @type {Array.<number>}
     */
    this.origin_ = [0, 0];

    /**
     * @private
     * @type {number}
     */
    this.paths_ = options.paths;

    /**
     * @private
     * @type {number}
     */
    this.angle_ = options.angle !== undefined ? options.angle : 0;

    /**
     * @private
     * @type {ol.style.Stroke}
     */
    this.stroke_ = options.stroke !== undefined ? options.stroke : null;

    /**
     * @private
     * @type {ol.Size}
     */
    this.size_ = options.size;

    /**
     * @private
     * @type {ol.Size}
     */
    this.imageSize_ = null;

    /**
     * @type {boolean}
     */
    var snapToPixel = options.snapToPixel !== undefined ?
        options.snapToPixel : true;

    /**
     * @type {boolean}
     */
    var rotateWithView = options.rotateWithView !== undefined ?
        options.rotateWithView : false;

    var w = this.size_[0], h = this.size_[1];
    var radius = Math.ceil(Math.sqrt(w * w + h * h) / 2);
    ol.style.RegularShape.call(this, {
        radius: radius,
        points: 0,
        opacity: 1,
        rotateWithView: rotateWithView,
        rotation: options.rotation !== undefined ? options.rotation : 0,
        scale: 1,
        snapToPixel: snapToPixel,
        atlasManager: options.atlasManager
    });

    this.anchor_ = this.getAnchor();
    // Hack to get the hit detection Image (no API exported)
    if (!this.hitDetectionCanvas_) {
        var img = this.getImage();
        for (var i in this) {
            if (this[i] && this[i].getContext && this[i] !== img) {
                this.hitDetectionCanvas_ = this[i];
                break;
            }
        }
    }

    this.renderShape_();
};
ol.inherits(ol.style.IrregularShape, ol.style.RegularShape);

/**
 * 克隆
 * @return {ol.style.IrregularShape}
 */
ol.style.IrregularShape.prototype.clone = function() {
    var style = new ol.style.IrregularShape({
        fill: this.getFill() ? this.getFill().clone() : undefined,
        size: [].concat(this.getSize()),
        paths: [].concat(this.getPaths()),
        angle: this.getAngle(),
        snapToPixel: this.getSnapToPixel(),
        stroke: this.getStroke() ?  this.getStroke().clone() : undefined,
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        atlasManager: this.atlasManager_
    });
    style.setOpacity(this.getOpacity());
    style.setScale(this.getScale());
    return style;
};

/**
 * Get the angle used in generating the shape.
 * @return {number} Shape's rotation in radians.
 * @api
 */
ol.style.IrregularShape.prototype.getAngle = function() {
    return this.angle_;
};


/**
 * Get the fill style for the shape.
 * @return {ol.style.Fill} Fill style.
 * @api
 */
ol.style.IrregularShape.prototype.getFill = function() {
    return this.fill_;
};


/**
 * @inheritDoc
 */
ol.style.IrregularShape.prototype.getHitDetectionImage = function(pixelRatio) {
    return this.hitDetectionCanvas_;
};

/**
 * @inheritDoc
 */
ol.style.IrregularShape.prototype.getImageSize = function() {
    return this.imageSize_;
};


/**
 * @inheritDoc
 * @api
 */
ol.style.IrregularShape.prototype.getOrigin = function() {
    return this.origin_;
};


/**
 * Get the number of points for generating the shape.
 * @return {number} Number of points for stars and regular polygons.
 * @api
 */
ol.style.IrregularShape.prototype.getPaths = function() {
    return this.paths_;
};

/**
 * @inheritDoc
 * @api
 */
ol.style.IrregularShape.prototype.getSize = function() {
    return this.size_;
};


/**
 * Get the stroke style for the shape.
 * @return {ol.style.Stroke} Stroke style.
 * @api
 */
ol.style.IrregularShape.prototype.getStroke = function() {
    return this.stroke_;
};

/**
 * @protected
 * @param {ol.style.AtlasManager|undefined} atlasManager An atlas manager.
 */
ol.style.IrregularShape.prototype.renderShape_ = function() {
    var lineCap = '';
    var lineJoin = '';
    var miterLimit = 0;
    var lineDash = null;
    var lineDashOffset = 0;
    var strokeStyle;
    var strokeWidth = 0;

    if (this.stroke_) {
        strokeStyle = this.stroke_.getColor();
        if (strokeStyle === null) {
            strokeStyle = [0, 0, 0, 1];
        }
        strokeStyle = ol.colorlike.asColorLike(strokeStyle);
        strokeWidth = this.stroke_.getWidth();
        if (strokeWidth === undefined) {
            strokeWidth = 1;
        }
        lineDash = this.stroke_.getLineDash();
        lineDashOffset = this.stroke_.getLineDashOffset();
        if (!ol.has.CANVAS_LINE_DASH) {
            lineDash = null;
            lineDashOffset = 0;
        }
        lineJoin = this.stroke_.getLineJoin();
        if (lineJoin === undefined) {
            lineJoin = "round";
        }
        lineCap = this.stroke_.getLineCap();
        if (lineCap === undefined) {
            lineCap = "round";
        }
        miterLimit = this.stroke_.getMiterLimit();
        if (miterLimit === undefined) {
            miterLimit = 10;
        }
    }

    var size = this.size_;

    /** @type {ol.RegularShapeRenderOptions} */
    var renderOptions = {
        strokeStyle: strokeStyle,
        strokeWidth: strokeWidth,
        size: size,
        lineCap: lineCap,
        lineDash: lineDash,
        lineDashOffset: lineDashOffset,
        lineJoin: lineJoin,
        miterLimit: miterLimit
    };

    // no atlas manager is used, create a new canvas
    var canvas = this.getImage();
    var context = (canvas.getContext('2d'));
    context.clearRect(0, 0, canvas.width, canvas.height);
    this.drawShape_(renderOptions, context, 0, 0);

    context = this.hitDetectionCanvas_.getContext('2d');
    this.drawHitDetectionCanvasShape_(renderOptions, context, 0, 0);
    this.imageSize_ = [canvas.width, canvas.height];
};


/**
 * @private
 * @param {ol.RegularShapeRenderOptions} renderOptions Render options.
 * @param {CanvasRenderingContext2D} context The rendering context.
 * @param {number} x The origin for the symbol (x).
 * @param {number} y The origin for the symbol (y).
 */
ol.style.IrregularShape.prototype.drawShape_ = function(renderOptions, context, x, y) {
    // reset transform
    context.setTransform(1, 0, 0, 1, 0, 0);

    // then move to (x, y)
    context.translate(x, y);

    context.beginPath();

    //旋转一定的角度
    var cos = Math.cos(this.angle_);
    var sin = Math.sin(this.angle_);
    //根据radius创建的锚点与指定size锚点差值
    var ancDx = this.anchor_[0] - renderOptions.size[0] / 2;
    var ancDy = this.anchor_[1] - renderOptions.size[1] / 2;
    function rotate(pixelCoor) {
        var anchorX = renderOptions.size[0] / 2;
        var anchorY = renderOptions.size[1] / 2;
        var deltaX = pixelCoor[0] - anchorX;
        var deltaY = pixelCoor[1] - anchorY;
        var x = anchorX + deltaX * cos - deltaY * sin + ancDx;
        var y = anchorY + deltaX * sin + deltaY * cos + ancDy;
        return [x, y];
    }

    var paths = this.paths_;
    for (var i = 0; i < paths.length; i++) {
        var path = paths[i];
        //至少两个点才有效
        if(path.length < 2) continue;
        var startPixel = path[0];
        var rotatePixel = rotate(startPixel);
        context.moveTo(rotatePixel[0], rotatePixel[1]);

        for(var j = 1; j <path.length; j++) {
            var node = path[j];
            rotateNode = rotate(node);
            context.lineTo(rotateNode[0], rotateNode[1]);
        }
    }


    if (this.fill_) {
        var color = this.fill_.getColor();
        if (color === null) {
            color = ol.render.canvas.defaultFillStyle;
        }
        context.fillStyle = ol.colorlike.asColorLike(color);
        context.fill();
    }
    if (this.stroke_) {
        context.strokeStyle = renderOptions.strokeStyle;
        context.lineWidth = renderOptions.strokeWidth;
        if (renderOptions.lineDash) {
            context.setLineDash(renderOptions.lineDash);
            context.lineDashOffset = renderOptions.lineDashOffset;
        }
        context.lineCap = renderOptions.lineCap;
        context.lineJoin = renderOptions.lineJoin;
        context.miterLimit = renderOptions.miterLimit;
        context.stroke();
    }
    context.closePath();
};

/**
 * @private
 * @param {ol.RegularShapeRenderOptions} renderOptions Render options.
 * @param {CanvasRenderingContext2D} context The context.
 * @param {number} x The origin for the symbol (x).
 * @param {number} y The origin for the symbol (y).
 */
ol.style.IrregularShape.prototype.drawHitDetectionCanvasShape_ = function(renderOptions, context, x, y) {
    // reset transform
    context.setTransform(1, 0, 0, 1, 0, 0);

    // then move to (x, y)
    context.translate(x, y);

    context.beginPath();

    //旋转一定的角度
    var cos = Math.cos(this.angle_);
    var sin = Math.sin(this.angle_);
    //根据radius创建的锚点与指定size锚点差值
    var ancDx = this.anchor_[0] - renderOptions.size[0] / 2;
    var ancDy = this.anchor_[1] - renderOptions.size[1] / 2;
    function rotate(pixelCoor) {
        var anchorX = renderOptions.size[0] / 2;
        var anchorY = renderOptions.size[1] / 2;
        var deltaX = pixelCoor[0] - anchorX;
        var deltaY = pixelCoor[1] - anchorY;
        var x = anchorX + deltaX * cos - deltaY * sin + ancDx;
        var y = anchorY + deltaX * sin + deltaY * cos + ancDy;
        return [x, y];
    }


    var paths = this.paths_;
    for (var i = 0; i < paths.length; i++) {
        var path = paths[i];
        //至少两个点才有效
        if(path.length < 2) continue;
        var startPixel = path[0];
        var rotatePixel = rotate(startPixel);
        context.moveTo(rotatePixel[0], rotatePixel[1]);

        for(var j = 1; j <path.length; j++) {
            var node = path[j];
            rotateNode = rotate(node);
            context.lineTo(rotateNode[0], rotateNode[1]);
        }
    }

    context.fillStyle = [0, 0, 0, 1];
    context.fill();
    if (this.stroke_) {
        context.strokeStyle = renderOptions.strokeStyle;
        context.lineWidth = renderOptions.strokeWidth;
        if (renderOptions.lineDash) {
            context.setLineDash(renderOptions.lineDash);
            context.lineDashOffset = renderOptions.lineDashOffset;
        }
        context.stroke();
    }
    context.closePath();
};