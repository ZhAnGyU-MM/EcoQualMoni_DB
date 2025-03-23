/**
 * 用于数学计算
 * @type {{}}
 */
bxmap.math = bxmap.math || {};

/**
 * @description 生成随机数
 * @param min {Number} 最小值
 * @param max {Number} 最大值
 * @return {Number}
 */
bxmap.math.getRandomNumber = function (min, max) {
    return Math.random() * (max - min + 1) + min;
}

/**
 * @description 弧度转为度
 * @param angleInRadians {Number} 弧度
 * @return {Number}
 */
bxmap.math.toDegrees = function(angleInRadians) {
    return angleInRadians * 180 / Math.PI;
};

/**
 * @description 度转为弧度
 * @param angleInDegrees {Number} 度
 * @return {Number}
 */
bxmap.math.toRadians = function(angleInDegrees) {
    return angleInDegrees * Math.PI / 180;
};

/**
 * @description 限制value的值在min和max之间， 如果value小于min，返回min。 如果value大于max，返回max，否则返回value
 * @param value {Number} 值
 * @param min {Number} 限制的最小值
 * @param max {Number} 限制的最大值
 * @return {Number}
 */
bxmap.math.clamp = function(value, min, max) {
    return Math.min(Math.max(value, min), max);
};

/**
 * @description 返回点c（x，y）到线段c1（x1，y1）、c2（x2，y2）之间最近距离的平方。
 * @param c {Array<Number>} [x,y]
 * @param c1 {Array<Number>} [x1,y1]
 * @param c2 {Array<Number>} [x2,y2]
 * @return {Number}
 */
bxmap.math.squaredSegmentDistance = function(c, c1, c2) {
    var x = c[0],y = c[1],
        x1 = c1[0],y1 = c1[1],
        x2 = c2[0],y2 = c2[1];

    var dx = x2 - x1;
    var dy = y2 - y1;
    if (dx !== 0 || dy !== 0) {
        var t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
        if (t > 1) {
            x1 = x2;
            y1 = y2;
        } else if (t > 0) {
            x1 += dx * t;
            y1 += dy * t;
        }
    }
    return bxmap.math.squaredDistance([x, y], [x1, y1]);
};

/**
 * @description 返回经纬度球面距离
 * @param c1 {Array<Number>} 经纬度c1 [x1,y1] 例如 [117.1,23.2]
 * @param c2 {Array<Number>} 经纬度c2 [x2,y2]
 * @param radius {Number} 球体半径，默认为6378137
 * @return {Number}
 */
bxmap.math.getSphereDistance = function(c1, c2, radius) {
    radius = radius || 6378137;
    var lat1 = bxmap.math.toRadians(c1[1]);
    var lat2 = bxmap.math.toRadians(c2[1]);
    var deltaLatBy2 = (lat2 - lat1) / 2;
    var deltaLonBy2 = bxmap.math.toRadians(c2[0] - c1[0]) / 2;
    var a = Math.sin(deltaLatBy2) * Math.sin(deltaLatBy2) +
        Math.sin(deltaLonBy2) * Math.sin(deltaLonBy2) *
        Math.cos(lat1) * Math.cos(lat2);
    return 2 * radius * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

/**
 * @description 返回经纬度球面面积
 * @param coordinates {Array<Array<Number>>} 环形坐标数组[[117.1,23.2],[],...]，如果环为顺时针方向，面积将是正的，否则它将是负的。
 * @param radius {Number} 球体半径，默认为6378137
 * @return {Number}
 */
bxmap.math.getSphereArea = function(coordinates, radius) {
    radius = radius || 6378137;

    var area = 0, len = coordinates.length;
    var x1 = coordinates[len - 1][0];
    var y1 = coordinates[len - 1][1];
    for (var i = 0; i < len; i++) {
        var x2 = coordinates[i][0], y2 = coordinates[i][1];
        area += bxmap.math.toRadians(x2 - x1) *
            (2 + Math.sin(bxmap.math.toRadians(y1)) +
                Math.sin(bxmap.math.toRadians(y2)));
        x1 = x2;
        y1 = y2;
    }
    return area * radius * radius / 2.0;
};

/**
 * @description 返回点（x1，y1）和（x2，y2）之间的距离的平方
 * @param c1 {Array<Number>} [x1,y1]
 * @param c2 {Array<Number>} [x2,y2]
 * @return {Number}
 */
bxmap.math.squaredDistance = function(c1, c2) {
    var dx = c2[0] - c1[0];
    var dy = c2[1] - c1[1];
    return dx * dx + dy * dy;
};

/**
 * @description 计算a和b之间的x的线性插值。例如a=10,b=20,x=0.5则返回值为15
 * @return {Number}
 */
bxmap.math.lerp = function(a, b, x) {
    return a + x * (b - a);
};

/**
 * @description 返回向量从c1到c2相对于正X轴的角度。正X轴逆时针为正，顺时针为负。返回值范围[-π,π]
 * @param c1 {Array<Number>} [x1,y1]
 * @param c2 {Array<Number>} [x2,y2]
 * @return {number}
 */
bxmap.math.getAngle = function (c1, c2) {
    var dx = c2[0] - c1[0];
    var dy = c2[1] - c1[1];
    return Math.atan2(dy, dx);
}

/**
 * @description 返回两条线的夹角（弧度）,范围[0,π]
 * @param tip1 {Array<Number>} 边线顶点p1
 * @param tail {Array<Number>} 公有顶点p
 * @param tip2 {Array<Number>} 边线顶点p2
 * @return {Number}
 */
bxmap.math.getAngleBetween = function (tip1, tail, tip2) {
    var ang1 = angle(tail, tip1);
    var ang2 = angle(tail, tip2);

    var delAngle;
    if (ang1 < ang2) {
        delAngle = ang2 - ang1;
    } else {
        delAngle = ang1 - ang2;
    }

    if (delAngle > Math.PI) {
        delAngle = Math.PI * 2 - delAngle;
    }

    return delAngle;
}

/**
 * @description 将弧度换算为方位角（弧度），方位角已Y轴正方向为0度，顺时针为正，逆时针为负
 * @param angleInRadians {Number} 以正X轴计算的弧度值参考bxmap.math.getAngle
 */
bxmap.math.azimuthAngle = function(angleInRadians){
    //( -π, π ]
    angleInRadians = bxmap.math.normalize(angleInRadians);
    return Math.PI * 0.5 - angleInRadians;
}

/**
 * @description 归一化设置弧度范围为( -π, π ]
 * @param angleInRadians
 * @return {*}
 */
bxmap.math.normalize = function(angleInRadians) {
    var angle = angleInRadians;
    var pi_times_2 = Math.PI * 2; //2π
    while(angle > Math.PI) {
        angle -= pi_times_2;
    }

    while(angle <= (-1 * Math.PI)) {
        angle += pi_times_2;
    }

    return angle;
}

/**
 * @description 归一化正值设置弧度范围为[ 0, 2*Pi )
 * @param angleInRadians
 * @return {*}
 */
bxmap.math.normalizePositive = function(angleInRadians) {
    var angle = angleInRadians;
    var pi_times_2 = Math.PI * 2; //2π
    if (angle < 0) {
        while (true) {
            if (angle >= 0) {
                if (angle >= pi_times_2) {
                    angle = 0;
                }
                break;
            }

            angle += pi_times_2;
        }
    } else {
        while (angle >= pi_times_2) {
            angle -= pi_times_2;
        }

        if (angle < 0) {
            angle = 0;
        }
    }

    return angle;
}