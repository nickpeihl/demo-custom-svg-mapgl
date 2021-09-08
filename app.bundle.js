/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@turf/bbox/dist/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@turf/bbox/dist/es/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _turf_meta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/meta */ "./node_modules/@turf/meta/dist/es/index.js");

/**
 * Takes a set of features, calculates the bbox of all input features, and returns a bounding box.
 *
 * @name bbox
 * @param {GeoJSON} geojson any GeoJSON object
 * @returns {BBox} bbox extent in [minX, minY, maxX, maxY] order
 * @example
 * var line = turf.lineString([[-74, 40], [-78, 42], [-82, 35]]);
 * var bbox = turf.bbox(line);
 * var bboxPolygon = turf.bboxPolygon(bbox);
 *
 * //addToMap
 * var addToMap = [line, bboxPolygon]
 */
function bbox(geojson) {
    var result = [Infinity, Infinity, -Infinity, -Infinity];
    Object(_turf_meta__WEBPACK_IMPORTED_MODULE_0__["coordEach"])(geojson, function (coord) {
        if (result[0] > coord[0]) {
            result[0] = coord[0];
        }
        if (result[1] > coord[1]) {
            result[1] = coord[1];
        }
        if (result[2] < coord[0]) {
            result[2] = coord[0];
        }
        if (result[3] < coord[1]) {
            result[3] = coord[1];
        }
    });
    return result;
}
bbox["default"] = bbox;
/* harmony default export */ __webpack_exports__["default"] = (bbox);


/***/ }),

/***/ "./node_modules/@turf/boolean-point-in-polygon/dist/es/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@turf/boolean-point-in-polygon/dist/es/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return booleanPointInPolygon; });
/* harmony import */ var _turf_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/invariant */ "./node_modules/@turf/invariant/dist/es/index.js");

// http://en.wikipedia.org/wiki/Even%E2%80%93odd_rule
// modified from: https://github.com/substack/point-in-polygon/blob/master/index.js
// which was modified from http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
/**
 * Takes a {@link Point} and a {@link Polygon} or {@link MultiPolygon} and determines if the point
 * resides inside the polygon. The polygon can be convex or concave. The function accounts for holes.
 *
 * @name booleanPointInPolygon
 * @param {Coord} point input point
 * @param {Feature<Polygon|MultiPolygon>} polygon input polygon or multipolygon
 * @param {Object} [options={}] Optional parameters
 * @param {boolean} [options.ignoreBoundary=false] True if polygon boundary should be ignored when determining if
 * the point is inside the polygon otherwise false.
 * @returns {boolean} `true` if the Point is inside the Polygon; `false` if the Point is not inside the Polygon
 * @example
 * var pt = turf.point([-77, 44]);
 * var poly = turf.polygon([[
 *   [-81, 41],
 *   [-81, 47],
 *   [-72, 47],
 *   [-72, 41],
 *   [-81, 41]
 * ]]);
 *
 * turf.booleanPointInPolygon(pt, poly);
 * //= true
 */
function booleanPointInPolygon(point, polygon, options) {
    if (options === void 0) { options = {}; }
    // validation
    if (!point) {
        throw new Error("point is required");
    }
    if (!polygon) {
        throw new Error("polygon is required");
    }
    var pt = Object(_turf_invariant__WEBPACK_IMPORTED_MODULE_0__["getCoord"])(point);
    var geom = Object(_turf_invariant__WEBPACK_IMPORTED_MODULE_0__["getGeom"])(polygon);
    var type = geom.type;
    var bbox = polygon.bbox;
    var polys = geom.coordinates;
    // Quick elimination if point is not inside bbox
    if (bbox && inBBox(pt, bbox) === false) {
        return false;
    }
    // normalize to multipolygon
    if (type === "Polygon") {
        polys = [polys];
    }
    var insidePoly = false;
    for (var i = 0; i < polys.length && !insidePoly; i++) {
        // check if it is in the outer ring first
        if (inRing(pt, polys[i][0], options.ignoreBoundary)) {
            var inHole = false;
            var k = 1;
            // check for the point in any of the holes
            while (k < polys[i].length && !inHole) {
                if (inRing(pt, polys[i][k], !options.ignoreBoundary)) {
                    inHole = true;
                }
                k++;
            }
            if (!inHole) {
                insidePoly = true;
            }
        }
    }
    return insidePoly;
}
/**
 * inRing
 *
 * @private
 * @param {Array<number>} pt [x,y]
 * @param {Array<Array<number>>} ring [[x,y], [x,y],..]
 * @param {boolean} ignoreBoundary ignoreBoundary
 * @returns {boolean} inRing
 */
function inRing(pt, ring, ignoreBoundary) {
    var isInside = false;
    if (ring[0][0] === ring[ring.length - 1][0] &&
        ring[0][1] === ring[ring.length - 1][1]) {
        ring = ring.slice(0, ring.length - 1);
    }
    for (var i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        var xi = ring[i][0];
        var yi = ring[i][1];
        var xj = ring[j][0];
        var yj = ring[j][1];
        var onBoundary = pt[1] * (xi - xj) + yi * (xj - pt[0]) + yj * (pt[0] - xi) === 0 &&
            (xi - pt[0]) * (xj - pt[0]) <= 0 &&
            (yi - pt[1]) * (yj - pt[1]) <= 0;
        if (onBoundary) {
            return !ignoreBoundary;
        }
        var intersect = yi > pt[1] !== yj > pt[1] &&
            pt[0] < ((xj - xi) * (pt[1] - yi)) / (yj - yi) + xi;
        if (intersect) {
            isInside = !isInside;
        }
    }
    return isInside;
}
/**
 * inBBox
 *
 * @private
 * @param {Position} pt point [x,y]
 * @param {BBox} bbox BBox [west, south, east, north]
 * @returns {boolean} true/false if point is inside BBox
 */
function inBBox(pt, bbox) {
    return (bbox[0] <= pt[0] && bbox[1] <= pt[1] && bbox[2] >= pt[0] && bbox[3] >= pt[1]);
}


/***/ }),

/***/ "./node_modules/@turf/boolean-point-on-line/dist/es/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@turf/boolean-point-on-line/dist/es/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _turf_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/invariant */ "./node_modules/@turf/invariant/dist/es/index.js");

/**
 * Returns true if a point is on a line. Accepts a optional parameter to ignore the
 * start and end vertices of the linestring.
 *
 * @name booleanPointOnLine
 * @param {Coord} pt GeoJSON Point
 * @param {Feature<LineString>} line GeoJSON LineString
 * @param {Object} [options={}] Optional parameters
 * @param {boolean} [options.ignoreEndVertices=false] whether to ignore the start and end vertices.
 * @returns {boolean} true/false
 * @example
 * var pt = turf.point([0, 0]);
 * var line = turf.lineString([[-1, -1],[1, 1],[1.5, 2.2]]);
 * var isPointOnLine = turf.booleanPointOnLine(pt, line);
 * //=true
 */
function booleanPointOnLine(pt, line, options) {
    if (options === void 0) { options = {}; }
    // Normalize inputs
    var ptCoords = Object(_turf_invariant__WEBPACK_IMPORTED_MODULE_0__["getCoord"])(pt);
    var lineCoords = Object(_turf_invariant__WEBPACK_IMPORTED_MODULE_0__["getCoords"])(line);
    // Main
    for (var i = 0; i < lineCoords.length - 1; i++) {
        var ignoreBoundary = false;
        if (options.ignoreEndVertices) {
            if (i === 0) {
                ignoreBoundary = "start";
            }
            if (i === lineCoords.length - 2) {
                ignoreBoundary = "end";
            }
            if (i === 0 && i + 1 === lineCoords.length - 1) {
                ignoreBoundary = "both";
            }
        }
        if (isPointOnLineSegment(lineCoords[i], lineCoords[i + 1], ptCoords, ignoreBoundary)) {
            return true;
        }
    }
    return false;
}
// See http://stackoverflow.com/a/4833823/1979085
/**
 * @private
 * @param {Position} lineSegmentStart coord pair of start of line
 * @param {Position} lineSegmentEnd coord pair of end of line
 * @param {Position} pt coord pair of point to check
 * @param {boolean|string} excludeBoundary whether the point is allowed to fall on the line ends.
 * If true which end to ignore.
 * @returns {boolean} true/false
 */
function isPointOnLineSegment(lineSegmentStart, lineSegmentEnd, pt, excludeBoundary) {
    var x = pt[0];
    var y = pt[1];
    var x1 = lineSegmentStart[0];
    var y1 = lineSegmentStart[1];
    var x2 = lineSegmentEnd[0];
    var y2 = lineSegmentEnd[1];
    var dxc = pt[0] - x1;
    var dyc = pt[1] - y1;
    var dxl = x2 - x1;
    var dyl = y2 - y1;
    var cross = dxc * dyl - dyc * dxl;
    if (cross !== 0) {
        return false;
    }
    if (!excludeBoundary) {
        if (Math.abs(dxl) >= Math.abs(dyl)) {
            return dxl > 0 ? x1 <= x && x <= x2 : x2 <= x && x <= x1;
        }
        return dyl > 0 ? y1 <= y && y <= y2 : y2 <= y && y <= y1;
    }
    else if (excludeBoundary === "start") {
        if (Math.abs(dxl) >= Math.abs(dyl)) {
            return dxl > 0 ? x1 < x && x <= x2 : x2 <= x && x < x1;
        }
        return dyl > 0 ? y1 < y && y <= y2 : y2 <= y && y < y1;
    }
    else if (excludeBoundary === "end") {
        if (Math.abs(dxl) >= Math.abs(dyl)) {
            return dxl > 0 ? x1 <= x && x < x2 : x2 < x && x <= x1;
        }
        return dyl > 0 ? y1 <= y && y < y2 : y2 < y && y <= y1;
    }
    else if (excludeBoundary === "both") {
        if (Math.abs(dxl) >= Math.abs(dyl)) {
            return dxl > 0 ? x1 < x && x < x2 : x2 < x && x < x1;
        }
        return dyl > 0 ? y1 < y && y < y2 : y2 < y && y < y1;
    }
    return false;
}
/* harmony default export */ __webpack_exports__["default"] = (booleanPointOnLine);


/***/ }),

/***/ "./node_modules/@turf/boolean-within/dist/es/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@turf/boolean-within/dist/es/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _turf_bbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/bbox */ "./node_modules/@turf/bbox/dist/es/index.js");
/* harmony import */ var _turf_boolean_point_on_line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/boolean-point-on-line */ "./node_modules/@turf/boolean-point-on-line/dist/es/index.js");
/* harmony import */ var _turf_boolean_point_in_polygon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @turf/boolean-point-in-polygon */ "./node_modules/@turf/boolean-point-in-polygon/dist/es/index.js");
/* harmony import */ var _turf_invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @turf/invariant */ "./node_modules/@turf/invariant/dist/es/index.js");




/**
 * Boolean-within returns true if the first geometry is completely within the second geometry.
 * The interiors of both geometries must intersect and, the interior and boundary of the primary (geometry a)
 * must not intersect the exterior of the secondary (geometry b).
 * Boolean-within returns the exact opposite result of the `@turf/boolean-contains`.
 *
 * @name booleanWithin
 * @param {Geometry|Feature<any>} feature1 GeoJSON Feature or Geometry
 * @param {Geometry|Feature<any>} feature2 GeoJSON Feature or Geometry
 * @returns {boolean} true/false
 * @example
 * var line = turf.lineString([[1, 1], [1, 2], [1, 3], [1, 4]]);
 * var point = turf.point([1, 2]);
 *
 * turf.booleanWithin(point, line);
 * //=true
 */
function booleanWithin(feature1, feature2) {
    var geom1 = Object(_turf_invariant__WEBPACK_IMPORTED_MODULE_3__["getGeom"])(feature1);
    var geom2 = Object(_turf_invariant__WEBPACK_IMPORTED_MODULE_3__["getGeom"])(feature2);
    var type1 = geom1.type;
    var type2 = geom2.type;
    switch (type1) {
        case "Point":
            switch (type2) {
                case "MultiPoint":
                    return isPointInMultiPoint(geom1, geom2);
                case "LineString":
                    return Object(_turf_boolean_point_on_line__WEBPACK_IMPORTED_MODULE_1__["default"])(geom1, geom2, { ignoreEndVertices: true });
                case "Polygon":
                case "MultiPolygon":
                    return Object(_turf_boolean_point_in_polygon__WEBPACK_IMPORTED_MODULE_2__["default"])(geom1, geom2, { ignoreBoundary: true });
                default:
                    throw new Error("feature2 " + type2 + " geometry not supported");
            }
        case "MultiPoint":
            switch (type2) {
                case "MultiPoint":
                    return isMultiPointInMultiPoint(geom1, geom2);
                case "LineString":
                    return isMultiPointOnLine(geom1, geom2);
                case "Polygon":
                case "MultiPolygon":
                    return isMultiPointInPoly(geom1, geom2);
                default:
                    throw new Error("feature2 " + type2 + " geometry not supported");
            }
        case "LineString":
            switch (type2) {
                case "LineString":
                    return isLineOnLine(geom1, geom2);
                case "Polygon":
                case "MultiPolygon":
                    return isLineInPoly(geom1, geom2);
                default:
                    throw new Error("feature2 " + type2 + " geometry not supported");
            }
        case "Polygon":
            switch (type2) {
                case "Polygon":
                case "MultiPolygon":
                    return isPolyInPoly(geom1, geom2);
                default:
                    throw new Error("feature2 " + type2 + " geometry not supported");
            }
        default:
            throw new Error("feature1 " + type1 + " geometry not supported");
    }
}
function isPointInMultiPoint(point, multiPoint) {
    var i;
    var output = false;
    for (i = 0; i < multiPoint.coordinates.length; i++) {
        if (compareCoords(multiPoint.coordinates[i], point.coordinates)) {
            output = true;
            break;
        }
    }
    return output;
}
function isMultiPointInMultiPoint(multiPoint1, multiPoint2) {
    for (var i = 0; i < multiPoint1.coordinates.length; i++) {
        var anyMatch = false;
        for (var i2 = 0; i2 < multiPoint2.coordinates.length; i2++) {
            if (compareCoords(multiPoint1.coordinates[i], multiPoint2.coordinates[i2])) {
                anyMatch = true;
            }
        }
        if (!anyMatch) {
            return false;
        }
    }
    return true;
}
function isMultiPointOnLine(multiPoint, lineString) {
    var foundInsidePoint = false;
    for (var i = 0; i < multiPoint.coordinates.length; i++) {
        if (!Object(_turf_boolean_point_on_line__WEBPACK_IMPORTED_MODULE_1__["default"])(multiPoint.coordinates[i], lineString)) {
            return false;
        }
        if (!foundInsidePoint) {
            foundInsidePoint = Object(_turf_boolean_point_on_line__WEBPACK_IMPORTED_MODULE_1__["default"])(multiPoint.coordinates[i], lineString, { ignoreEndVertices: true });
        }
    }
    return foundInsidePoint;
}
function isMultiPointInPoly(multiPoint, polygon) {
    var output = true;
    var oneInside = false;
    for (var i = 0; i < multiPoint.coordinates.length; i++) {
        var isInside = Object(_turf_boolean_point_in_polygon__WEBPACK_IMPORTED_MODULE_2__["default"])(multiPoint.coordinates[1], polygon);
        if (!isInside) {
            output = false;
            break;
        }
        if (!oneInside) {
            isInside = Object(_turf_boolean_point_in_polygon__WEBPACK_IMPORTED_MODULE_2__["default"])(multiPoint.coordinates[1], polygon, {
                ignoreBoundary: true,
            });
        }
    }
    return output && isInside;
}
function isLineOnLine(lineString1, lineString2) {
    for (var i = 0; i < lineString1.coordinates.length; i++) {
        if (!Object(_turf_boolean_point_on_line__WEBPACK_IMPORTED_MODULE_1__["default"])(lineString1.coordinates[i], lineString2)) {
            return false;
        }
    }
    return true;
}
function isLineInPoly(linestring, polygon) {
    var polyBbox = Object(_turf_bbox__WEBPACK_IMPORTED_MODULE_0__["default"])(polygon);
    var lineBbox = Object(_turf_bbox__WEBPACK_IMPORTED_MODULE_0__["default"])(linestring);
    if (!doBBoxOverlap(polyBbox, lineBbox)) {
        return false;
    }
    var foundInsidePoint = false;
    for (var i = 0; i < linestring.coordinates.length - 1; i++) {
        if (!Object(_turf_boolean_point_in_polygon__WEBPACK_IMPORTED_MODULE_2__["default"])(linestring.coordinates[i], polygon)) {
            return false;
        }
        if (!foundInsidePoint) {
            foundInsidePoint = Object(_turf_boolean_point_in_polygon__WEBPACK_IMPORTED_MODULE_2__["default"])(linestring.coordinates[i], polygon, { ignoreBoundary: true });
        }
        if (!foundInsidePoint) {
            var midpoint = getMidpoint(linestring.coordinates[i], linestring.coordinates[i + 1]);
            foundInsidePoint = Object(_turf_boolean_point_in_polygon__WEBPACK_IMPORTED_MODULE_2__["default"])(midpoint, polygon, {
                ignoreBoundary: true,
            });
        }
    }
    return foundInsidePoint;
}
/**
 * Is Polygon2 in Polygon1
 * Only takes into account outer rings
 *
 * @private
 * @param {Geometry|Feature<Polygon>} feature1 Polygon1
 * @param {Geometry|Feature<Polygon>} feature2 Polygon2
 * @returns {boolean} true/false
 */
function isPolyInPoly(feature1, feature2) {
    var poly1Bbox = Object(_turf_bbox__WEBPACK_IMPORTED_MODULE_0__["default"])(feature1);
    var poly2Bbox = Object(_turf_bbox__WEBPACK_IMPORTED_MODULE_0__["default"])(feature2);
    if (!doBBoxOverlap(poly2Bbox, poly1Bbox)) {
        return false;
    }
    for (var i = 0; i < feature1.coordinates[0].length; i++) {
        if (!Object(_turf_boolean_point_in_polygon__WEBPACK_IMPORTED_MODULE_2__["default"])(feature1.coordinates[0][i], feature2)) {
            return false;
        }
    }
    return true;
}
function doBBoxOverlap(bbox1, bbox2) {
    if (bbox1[0] > bbox2[0])
        return false;
    if (bbox1[2] < bbox2[2])
        return false;
    if (bbox1[1] > bbox2[1])
        return false;
    if (bbox1[3] < bbox2[3])
        return false;
    return true;
}
/**
 * compareCoords
 *
 * @private
 * @param {Position} pair1 point [x,y]
 * @param {Position} pair2 point [x,y]
 * @returns {boolean} true/false if coord pairs match
 */
function compareCoords(pair1, pair2) {
    return pair1[0] === pair2[0] && pair1[1] === pair2[1];
}
/**
 * getMidpoint
 *
 * @private
 * @param {Position} pair1 point [x,y]
 * @param {Position} pair2 point [x,y]
 * @returns {Position} midpoint of pair1 and pair2
 */
function getMidpoint(pair1, pair2) {
    return [(pair1[0] + pair2[0]) / 2, (pair1[1] + pair2[1]) / 2];
}
/* harmony default export */ __webpack_exports__["default"] = (booleanWithin);


/***/ }),

/***/ "./node_modules/@turf/distance/dist/es/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@turf/distance/dist/es/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _turf_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/invariant */ "./node_modules/@turf/invariant/dist/es/index.js");
/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/dist/es/index.js");


//http://en.wikipedia.org/wiki/Haversine_formula
//http://www.movable-type.co.uk/scripts/latlong.html
/**
 * Calculates the distance between two {@link Point|points} in degrees, radians, miles, or kilometers.
 * This uses the [Haversine formula](http://en.wikipedia.org/wiki/Haversine_formula) to account for global curvature.
 *
 * @name distance
 * @param {Coord} from origin point
 * @param {Coord} to destination point
 * @param {Object} [options={}] Optional parameters
 * @param {string} [options.units='kilometers'] can be degrees, radians, miles, or kilometers
 * @returns {number} distance between the two points
 * @example
 * var from = turf.point([-75.343, 39.984]);
 * var to = turf.point([-75.534, 39.123]);
 * var options = {units: 'miles'};
 *
 * var distance = turf.distance(from, to, options);
 *
 * //addToMap
 * var addToMap = [from, to];
 * from.properties.distance = distance;
 * to.properties.distance = distance;
 */
function distance(from, to, options) {
    if (options === void 0) { options = {}; }
    var coordinates1 = Object(_turf_invariant__WEBPACK_IMPORTED_MODULE_0__["getCoord"])(from);
    var coordinates2 = Object(_turf_invariant__WEBPACK_IMPORTED_MODULE_0__["getCoord"])(to);
    var dLat = Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_1__["degreesToRadians"])(coordinates2[1] - coordinates1[1]);
    var dLon = Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_1__["degreesToRadians"])(coordinates2[0] - coordinates1[0]);
    var lat1 = Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_1__["degreesToRadians"])(coordinates1[1]);
    var lat2 = Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_1__["degreesToRadians"])(coordinates2[1]);
    var a = Math.pow(Math.sin(dLat / 2), 2) +
        Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
    return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_1__["radiansToLength"])(2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)), options.units);
}
/* harmony default export */ __webpack_exports__["default"] = (distance);


/***/ }),

/***/ "./node_modules/@turf/helpers/dist/es/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@turf/helpers/dist/es/index.js ***!
  \*****************************************************/
/*! exports provided: earthRadius, factors, unitsFactors, areaFactors, feature, geometry, point, points, polygon, polygons, lineString, lineStrings, featureCollection, multiLineString, multiPoint, multiPolygon, geometryCollection, round, radiansToLength, lengthToRadians, lengthToDegrees, bearingToAzimuth, radiansToDegrees, degreesToRadians, convertLength, convertArea, isNumber, isObject, validateBBox, validateId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "earthRadius", function() { return earthRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factors", function() { return factors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unitsFactors", function() { return unitsFactors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaFactors", function() { return areaFactors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feature", function() { return feature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geometry", function() { return geometry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "points", function() { return points; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polygon", function() { return polygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polygons", function() { return polygons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineString", function() { return lineString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineStrings", function() { return lineStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureCollection", function() { return featureCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiLineString", function() { return multiLineString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiPoint", function() { return multiPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiPolygon", function() { return multiPolygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geometryCollection", function() { return geometryCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radiansToLength", function() { return radiansToLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lengthToRadians", function() { return lengthToRadians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lengthToDegrees", function() { return lengthToDegrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bearingToAzimuth", function() { return bearingToAzimuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radiansToDegrees", function() { return radiansToDegrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degreesToRadians", function() { return degreesToRadians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertLength", function() { return convertLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertArea", function() { return convertArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateBBox", function() { return validateBBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateId", function() { return validateId; });
/**
 * @module helpers
 */
/**
 * Earth Radius used with the Harvesine formula and approximates using a spherical (non-ellipsoid) Earth.
 *
 * @memberof helpers
 * @type {number}
 */
var earthRadius = 6371008.8;
/**
 * Unit of measurement factors using a spherical (non-ellipsoid) earth radius.
 *
 * @memberof helpers
 * @type {Object}
 */
var factors = {
    centimeters: earthRadius * 100,
    centimetres: earthRadius * 100,
    degrees: earthRadius / 111325,
    feet: earthRadius * 3.28084,
    inches: earthRadius * 39.37,
    kilometers: earthRadius / 1000,
    kilometres: earthRadius / 1000,
    meters: earthRadius,
    metres: earthRadius,
    miles: earthRadius / 1609.344,
    millimeters: earthRadius * 1000,
    millimetres: earthRadius * 1000,
    nauticalmiles: earthRadius / 1852,
    radians: 1,
    yards: earthRadius / 1.0936,
};
/**
 * Units of measurement factors based on 1 meter.
 *
 * @memberof helpers
 * @type {Object}
 */
var unitsFactors = {
    centimeters: 100,
    centimetres: 100,
    degrees: 1 / 111325,
    feet: 3.28084,
    inches: 39.37,
    kilometers: 1 / 1000,
    kilometres: 1 / 1000,
    meters: 1,
    metres: 1,
    miles: 1 / 1609.344,
    millimeters: 1000,
    millimetres: 1000,
    nauticalmiles: 1 / 1852,
    radians: 1 / earthRadius,
    yards: 1 / 1.0936,
};
/**
 * Area of measurement factors based on 1 square meter.
 *
 * @memberof helpers
 * @type {Object}
 */
var areaFactors = {
    acres: 0.000247105,
    centimeters: 10000,
    centimetres: 10000,
    feet: 10.763910417,
    hectares: 0.0001,
    inches: 1550.003100006,
    kilometers: 0.000001,
    kilometres: 0.000001,
    meters: 1,
    metres: 1,
    miles: 3.86e-7,
    millimeters: 1000000,
    millimetres: 1000000,
    yards: 1.195990046,
};
/**
 * Wraps a GeoJSON {@link Geometry} in a GeoJSON {@link Feature}.
 *
 * @name feature
 * @param {Geometry} geometry input geometry
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature} a GeoJSON Feature
 * @example
 * var geometry = {
 *   "type": "Point",
 *   "coordinates": [110, 50]
 * };
 *
 * var feature = turf.feature(geometry);
 *
 * //=feature
 */
function feature(geom, properties, options) {
    if (options === void 0) { options = {}; }
    var feat = { type: "Feature" };
    if (options.id === 0 || options.id) {
        feat.id = options.id;
    }
    if (options.bbox) {
        feat.bbox = options.bbox;
    }
    feat.properties = properties || {};
    feat.geometry = geom;
    return feat;
}
/**
 * Creates a GeoJSON {@link Geometry} from a Geometry string type & coordinates.
 * For GeometryCollection type use `helpers.geometryCollection`
 *
 * @name geometry
 * @param {string} type Geometry Type
 * @param {Array<any>} coordinates Coordinates
 * @param {Object} [options={}] Optional Parameters
 * @returns {Geometry} a GeoJSON Geometry
 * @example
 * var type = "Point";
 * var coordinates = [110, 50];
 * var geometry = turf.geometry(type, coordinates);
 * // => geometry
 */
function geometry(type, coordinates, _options) {
    if (_options === void 0) { _options = {}; }
    switch (type) {
        case "Point":
            return point(coordinates).geometry;
        case "LineString":
            return lineString(coordinates).geometry;
        case "Polygon":
            return polygon(coordinates).geometry;
        case "MultiPoint":
            return multiPoint(coordinates).geometry;
        case "MultiLineString":
            return multiLineString(coordinates).geometry;
        case "MultiPolygon":
            return multiPolygon(coordinates).geometry;
        default:
            throw new Error(type + " is invalid");
    }
}
/**
 * Creates a {@link Point} {@link Feature} from a Position.
 *
 * @name point
 * @param {Array<number>} coordinates longitude, latitude position (each in decimal degrees)
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<Point>} a Point feature
 * @example
 * var point = turf.point([-75.343, 39.984]);
 *
 * //=point
 */
function point(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    if (!coordinates) {
        throw new Error("coordinates is required");
    }
    if (!Array.isArray(coordinates)) {
        throw new Error("coordinates must be an Array");
    }
    if (coordinates.length < 2) {
        throw new Error("coordinates must be at least 2 numbers long");
    }
    if (!isNumber(coordinates[0]) || !isNumber(coordinates[1])) {
        throw new Error("coordinates must contain numbers");
    }
    var geom = {
        type: "Point",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
/**
 * Creates a {@link Point} {@link FeatureCollection} from an Array of Point coordinates.
 *
 * @name points
 * @param {Array<Array<number>>} coordinates an array of Points
 * @param {Object} [properties={}] Translate these properties to each Feature
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north]
 * associated with the FeatureCollection
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<Point>} Point Feature
 * @example
 * var points = turf.points([
 *   [-75, 39],
 *   [-80, 45],
 *   [-78, 50]
 * ]);
 *
 * //=points
 */
function points(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    return featureCollection(coordinates.map(function (coords) {
        return point(coords, properties);
    }), options);
}
/**
 * Creates a {@link Polygon} {@link Feature} from an Array of LinearRings.
 *
 * @name polygon
 * @param {Array<Array<Array<number>>>} coordinates an array of LinearRings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<Polygon>} Polygon Feature
 * @example
 * var polygon = turf.polygon([[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]], { name: 'poly1' });
 *
 * //=polygon
 */
function polygon(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    for (var _i = 0, coordinates_1 = coordinates; _i < coordinates_1.length; _i++) {
        var ring = coordinates_1[_i];
        if (ring.length < 4) {
            throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
        }
        for (var j = 0; j < ring[ring.length - 1].length; j++) {
            // Check if first point of Polygon contains two numbers
            if (ring[ring.length - 1][j] !== ring[0][j]) {
                throw new Error("First and last Position are not equivalent.");
            }
        }
    }
    var geom = {
        type: "Polygon",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
/**
 * Creates a {@link Polygon} {@link FeatureCollection} from an Array of Polygon coordinates.
 *
 * @name polygons
 * @param {Array<Array<Array<Array<number>>>>} coordinates an array of Polygon coordinates
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<Polygon>} Polygon FeatureCollection
 * @example
 * var polygons = turf.polygons([
 *   [[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]],
 *   [[[-15, 42], [-14, 46], [-12, 41], [-17, 44], [-15, 42]]],
 * ]);
 *
 * //=polygons
 */
function polygons(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    return featureCollection(coordinates.map(function (coords) {
        return polygon(coords, properties);
    }), options);
}
/**
 * Creates a {@link LineString} {@link Feature} from an Array of Positions.
 *
 * @name lineString
 * @param {Array<Array<number>>} coordinates an array of Positions
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<LineString>} LineString Feature
 * @example
 * var linestring1 = turf.lineString([[-24, 63], [-23, 60], [-25, 65], [-20, 69]], {name: 'line 1'});
 * var linestring2 = turf.lineString([[-14, 43], [-13, 40], [-15, 45], [-10, 49]], {name: 'line 2'});
 *
 * //=linestring1
 * //=linestring2
 */
function lineString(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    if (coordinates.length < 2) {
        throw new Error("coordinates must be an array of two or more positions");
    }
    var geom = {
        type: "LineString",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
/**
 * Creates a {@link LineString} {@link FeatureCollection} from an Array of LineString coordinates.
 *
 * @name lineStrings
 * @param {Array<Array<Array<number>>>} coordinates an array of LinearRings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north]
 * associated with the FeatureCollection
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<LineString>} LineString FeatureCollection
 * @example
 * var linestrings = turf.lineStrings([
 *   [[-24, 63], [-23, 60], [-25, 65], [-20, 69]],
 *   [[-14, 43], [-13, 40], [-15, 45], [-10, 49]]
 * ]);
 *
 * //=linestrings
 */
function lineStrings(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    return featureCollection(coordinates.map(function (coords) {
        return lineString(coords, properties);
    }), options);
}
/**
 * Takes one or more {@link Feature|Features} and creates a {@link FeatureCollection}.
 *
 * @name featureCollection
 * @param {Feature[]} features input features
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {FeatureCollection} FeatureCollection of Features
 * @example
 * var locationA = turf.point([-75.343, 39.984], {name: 'Location A'});
 * var locationB = turf.point([-75.833, 39.284], {name: 'Location B'});
 * var locationC = turf.point([-75.534, 39.123], {name: 'Location C'});
 *
 * var collection = turf.featureCollection([
 *   locationA,
 *   locationB,
 *   locationC
 * ]);
 *
 * //=collection
 */
function featureCollection(features, options) {
    if (options === void 0) { options = {}; }
    var fc = { type: "FeatureCollection" };
    if (options.id) {
        fc.id = options.id;
    }
    if (options.bbox) {
        fc.bbox = options.bbox;
    }
    fc.features = features;
    return fc;
}
/**
 * Creates a {@link Feature<MultiLineString>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiLineString
 * @param {Array<Array<Array<number>>>} coordinates an array of LineStrings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiLineString>} a MultiLineString feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiLine = turf.multiLineString([[[0,0],[10,10]]]);
 *
 * //=multiLine
 */
function multiLineString(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "MultiLineString",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
/**
 * Creates a {@link Feature<MultiPoint>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiPoint
 * @param {Array<Array<number>>} coordinates an array of Positions
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiPoint>} a MultiPoint feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiPt = turf.multiPoint([[0,0],[10,10]]);
 *
 * //=multiPt
 */
function multiPoint(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "MultiPoint",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
/**
 * Creates a {@link Feature<MultiPolygon>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiPolygon
 * @param {Array<Array<Array<Array<number>>>>} coordinates an array of Polygons
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiPolygon>} a multipolygon feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiPoly = turf.multiPolygon([[[[0,0],[0,10],[10,10],[10,0],[0,0]]]]);
 *
 * //=multiPoly
 *
 */
function multiPolygon(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "MultiPolygon",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
/**
 * Creates a {@link Feature<GeometryCollection>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name geometryCollection
 * @param {Array<Geometry>} geometries an array of GeoJSON Geometries
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<GeometryCollection>} a GeoJSON GeometryCollection Feature
 * @example
 * var pt = turf.geometry("Point", [100, 0]);
 * var line = turf.geometry("LineString", [[101, 0], [102, 1]]);
 * var collection = turf.geometryCollection([pt, line]);
 *
 * // => collection
 */
function geometryCollection(geometries, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "GeometryCollection",
        geometries: geometries,
    };
    return feature(geom, properties, options);
}
/**
 * Round number to precision
 *
 * @param {number} num Number
 * @param {number} [precision=0] Precision
 * @returns {number} rounded number
 * @example
 * turf.round(120.4321)
 * //=120
 *
 * turf.round(120.4321, 2)
 * //=120.43
 */
function round(num, precision) {
    if (precision === void 0) { precision = 0; }
    if (precision && !(precision >= 0)) {
        throw new Error("precision must be a positive number");
    }
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(num * multiplier) / multiplier;
}
/**
 * Convert a distance measurement (assuming a spherical Earth) from radians to a more friendly unit.
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @name radiansToLength
 * @param {number} radians in radians across the sphere
 * @param {string} [units="kilometers"] can be degrees, radians, miles, inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} distance
 */
function radiansToLength(radians, units) {
    if (units === void 0) { units = "kilometers"; }
    var factor = factors[units];
    if (!factor) {
        throw new Error(units + " units is invalid");
    }
    return radians * factor;
}
/**
 * Convert a distance measurement (assuming a spherical Earth) from a real-world unit into radians
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @name lengthToRadians
 * @param {number} distance in real units
 * @param {string} [units="kilometers"] can be degrees, radians, miles, inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} radians
 */
function lengthToRadians(distance, units) {
    if (units === void 0) { units = "kilometers"; }
    var factor = factors[units];
    if (!factor) {
        throw new Error(units + " units is invalid");
    }
    return distance / factor;
}
/**
 * Convert a distance measurement (assuming a spherical Earth) from a real-world unit into degrees
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, centimeters, kilometres, feet
 *
 * @name lengthToDegrees
 * @param {number} distance in real units
 * @param {string} [units="kilometers"] can be degrees, radians, miles, inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} degrees
 */
function lengthToDegrees(distance, units) {
    return radiansToDegrees(lengthToRadians(distance, units));
}
/**
 * Converts any bearing angle from the north line direction (positive clockwise)
 * and returns an angle between 0-360 degrees (positive clockwise), 0 being the north line
 *
 * @name bearingToAzimuth
 * @param {number} bearing angle, between -180 and +180 degrees
 * @returns {number} angle between 0 and 360 degrees
 */
function bearingToAzimuth(bearing) {
    var angle = bearing % 360;
    if (angle < 0) {
        angle += 360;
    }
    return angle;
}
/**
 * Converts an angle in radians to degrees
 *
 * @name radiansToDegrees
 * @param {number} radians angle in radians
 * @returns {number} degrees between 0 and 360 degrees
 */
function radiansToDegrees(radians) {
    var degrees = radians % (2 * Math.PI);
    return (degrees * 180) / Math.PI;
}
/**
 * Converts an angle in degrees to radians
 *
 * @name degreesToRadians
 * @param {number} degrees angle between 0 and 360 degrees
 * @returns {number} angle in radians
 */
function degreesToRadians(degrees) {
    var radians = degrees % 360;
    return (radians * Math.PI) / 180;
}
/**
 * Converts a length to the requested unit.
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @param {number} length to be converted
 * @param {Units} [originalUnit="kilometers"] of the length
 * @param {Units} [finalUnit="kilometers"] returned unit
 * @returns {number} the converted length
 */
function convertLength(length, originalUnit, finalUnit) {
    if (originalUnit === void 0) { originalUnit = "kilometers"; }
    if (finalUnit === void 0) { finalUnit = "kilometers"; }
    if (!(length >= 0)) {
        throw new Error("length must be a positive number");
    }
    return radiansToLength(lengthToRadians(length, originalUnit), finalUnit);
}
/**
 * Converts a area to the requested unit.
 * Valid units: kilometers, kilometres, meters, metres, centimetres, millimeters, acres, miles, yards, feet, inches, hectares
 * @param {number} area to be converted
 * @param {Units} [originalUnit="meters"] of the distance
 * @param {Units} [finalUnit="kilometers"] returned unit
 * @returns {number} the converted area
 */
function convertArea(area, originalUnit, finalUnit) {
    if (originalUnit === void 0) { originalUnit = "meters"; }
    if (finalUnit === void 0) { finalUnit = "kilometers"; }
    if (!(area >= 0)) {
        throw new Error("area must be a positive number");
    }
    var startFactor = areaFactors[originalUnit];
    if (!startFactor) {
        throw new Error("invalid original units");
    }
    var finalFactor = areaFactors[finalUnit];
    if (!finalFactor) {
        throw new Error("invalid final units");
    }
    return (area / startFactor) * finalFactor;
}
/**
 * isNumber
 *
 * @param {*} num Number to validate
 * @returns {boolean} true/false
 * @example
 * turf.isNumber(123)
 * //=true
 * turf.isNumber('foo')
 * //=false
 */
function isNumber(num) {
    return !isNaN(num) && num !== null && !Array.isArray(num);
}
/**
 * isObject
 *
 * @param {*} input variable to validate
 * @returns {boolean} true/false
 * @example
 * turf.isObject({elevation: 10})
 * //=true
 * turf.isObject('foo')
 * //=false
 */
function isObject(input) {
    return !!input && input.constructor === Object;
}
/**
 * Validate BBox
 *
 * @private
 * @param {Array<number>} bbox BBox to validate
 * @returns {void}
 * @throws Error if BBox is not valid
 * @example
 * validateBBox([-180, -40, 110, 50])
 * //=OK
 * validateBBox([-180, -40])
 * //=Error
 * validateBBox('Foo')
 * //=Error
 * validateBBox(5)
 * //=Error
 * validateBBox(null)
 * //=Error
 * validateBBox(undefined)
 * //=Error
 */
function validateBBox(bbox) {
    if (!bbox) {
        throw new Error("bbox is required");
    }
    if (!Array.isArray(bbox)) {
        throw new Error("bbox must be an Array");
    }
    if (bbox.length !== 4 && bbox.length !== 6) {
        throw new Error("bbox must be an Array of 4 or 6 numbers");
    }
    bbox.forEach(function (num) {
        if (!isNumber(num)) {
            throw new Error("bbox must only contain numbers");
        }
    });
}
/**
 * Validate Id
 *
 * @private
 * @param {string|number} id Id to validate
 * @returns {void}
 * @throws Error if Id is not valid
 * @example
 * validateId([-180, -40, 110, 50])
 * //=Error
 * validateId([-180, -40])
 * //=Error
 * validateId('Foo')
 * //=OK
 * validateId(5)
 * //=OK
 * validateId(null)
 * //=Error
 * validateId(undefined)
 * //=Error
 */
function validateId(id) {
    if (!id) {
        throw new Error("id is required");
    }
    if (["string", "number"].indexOf(typeof id) === -1) {
        throw new Error("id must be a number or a string");
    }
}


/***/ }),

/***/ "./node_modules/@turf/invariant/dist/es/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@turf/invariant/dist/es/index.js ***!
  \*******************************************************/
/*! exports provided: getCoord, getCoords, containsNumber, geojsonType, featureOf, collectionOf, getGeom, getType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoord", function() { return getCoord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoords", function() { return getCoords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsNumber", function() { return containsNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geojsonType", function() { return geojsonType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureOf", function() { return featureOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectionOf", function() { return collectionOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGeom", function() { return getGeom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/dist/es/index.js");

/**
 * Unwrap a coordinate from a Point Feature, Geometry or a single coordinate.
 *
 * @name getCoord
 * @param {Array<number>|Geometry<Point>|Feature<Point>} coord GeoJSON Point or an Array of numbers
 * @returns {Array<number>} coordinates
 * @example
 * var pt = turf.point([10, 10]);
 *
 * var coord = turf.getCoord(pt);
 * //= [10, 10]
 */
function getCoord(coord) {
    if (!coord) {
        throw new Error("coord is required");
    }
    if (!Array.isArray(coord)) {
        if (coord.type === "Feature" &&
            coord.geometry !== null &&
            coord.geometry.type === "Point") {
            return coord.geometry.coordinates;
        }
        if (coord.type === "Point") {
            return coord.coordinates;
        }
    }
    if (Array.isArray(coord) &&
        coord.length >= 2 &&
        !Array.isArray(coord[0]) &&
        !Array.isArray(coord[1])) {
        return coord;
    }
    throw new Error("coord must be GeoJSON Point or an Array of numbers");
}
/**
 * Unwrap coordinates from a Feature, Geometry Object or an Array
 *
 * @name getCoords
 * @param {Array<any>|Geometry|Feature} coords Feature, Geometry Object or an Array
 * @returns {Array<any>} coordinates
 * @example
 * var poly = turf.polygon([[[119.32, -8.7], [119.55, -8.69], [119.51, -8.54], [119.32, -8.7]]]);
 *
 * var coords = turf.getCoords(poly);
 * //= [[[119.32, -8.7], [119.55, -8.69], [119.51, -8.54], [119.32, -8.7]]]
 */
function getCoords(coords) {
    if (Array.isArray(coords)) {
        return coords;
    }
    // Feature
    if (coords.type === "Feature") {
        if (coords.geometry !== null) {
            return coords.geometry.coordinates;
        }
    }
    else {
        // Geometry
        if (coords.coordinates) {
            return coords.coordinates;
        }
    }
    throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array");
}
/**
 * Checks if coordinates contains a number
 *
 * @name containsNumber
 * @param {Array<any>} coordinates GeoJSON Coordinates
 * @returns {boolean} true if Array contains a number
 */
function containsNumber(coordinates) {
    if (coordinates.length > 1 &&
        Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(coordinates[0]) &&
        Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(coordinates[1])) {
        return true;
    }
    if (Array.isArray(coordinates[0]) && coordinates[0].length) {
        return containsNumber(coordinates[0]);
    }
    throw new Error("coordinates must only contain numbers");
}
/**
 * Enforce expectations about types of GeoJSON objects for Turf.
 *
 * @name geojsonType
 * @param {GeoJSON} value any GeoJSON object
 * @param {string} type expected GeoJSON type
 * @param {string} name name of calling function
 * @throws {Error} if value is not the expected type.
 */
function geojsonType(value, type, name) {
    if (!type || !name) {
        throw new Error("type and name required");
    }
    if (!value || value.type !== type) {
        throw new Error("Invalid input to " +
            name +
            ": must be a " +
            type +
            ", given " +
            value.type);
    }
}
/**
 * Enforce expectations about types of {@link Feature} inputs for Turf.
 * Internally this uses {@link geojsonType} to judge geometry types.
 *
 * @name featureOf
 * @param {Feature} feature a feature with an expected geometry type
 * @param {string} type expected GeoJSON type
 * @param {string} name name of calling function
 * @throws {Error} error if value is not the expected type.
 */
function featureOf(feature, type, name) {
    if (!feature) {
        throw new Error("No feature passed");
    }
    if (!name) {
        throw new Error(".featureOf() requires a name");
    }
    if (!feature || feature.type !== "Feature" || !feature.geometry) {
        throw new Error("Invalid input to " + name + ", Feature with geometry required");
    }
    if (!feature.geometry || feature.geometry.type !== type) {
        throw new Error("Invalid input to " +
            name +
            ": must be a " +
            type +
            ", given " +
            feature.geometry.type);
    }
}
/**
 * Enforce expectations about types of {@link FeatureCollection} inputs for Turf.
 * Internally this uses {@link geojsonType} to judge geometry types.
 *
 * @name collectionOf
 * @param {FeatureCollection} featureCollection a FeatureCollection for which features will be judged
 * @param {string} type expected GeoJSON type
 * @param {string} name name of calling function
 * @throws {Error} if value is not the expected type.
 */
function collectionOf(featureCollection, type, name) {
    if (!featureCollection) {
        throw new Error("No featureCollection passed");
    }
    if (!name) {
        throw new Error(".collectionOf() requires a name");
    }
    if (!featureCollection || featureCollection.type !== "FeatureCollection") {
        throw new Error("Invalid input to " + name + ", FeatureCollection required");
    }
    for (var _i = 0, _a = featureCollection.features; _i < _a.length; _i++) {
        var feature = _a[_i];
        if (!feature || feature.type !== "Feature" || !feature.geometry) {
            throw new Error("Invalid input to " + name + ", Feature with geometry required");
        }
        if (!feature.geometry || feature.geometry.type !== type) {
            throw new Error("Invalid input to " +
                name +
                ": must be a " +
                type +
                ", given " +
                feature.geometry.type);
        }
    }
}
/**
 * Get Geometry from Feature or Geometry Object
 *
 * @param {Feature|Geometry} geojson GeoJSON Feature or Geometry Object
 * @returns {Geometry|null} GeoJSON Geometry Object
 * @throws {Error} if geojson is not a Feature or Geometry Object
 * @example
 * var point = {
 *   "type": "Feature",
 *   "properties": {},
 *   "geometry": {
 *     "type": "Point",
 *     "coordinates": [110, 40]
 *   }
 * }
 * var geom = turf.getGeom(point)
 * //={"type": "Point", "coordinates": [110, 40]}
 */
function getGeom(geojson) {
    if (geojson.type === "Feature") {
        return geojson.geometry;
    }
    return geojson;
}
/**
 * Get GeoJSON object's type, Geometry type is prioritize.
 *
 * @param {GeoJSON} geojson GeoJSON object
 * @param {string} [name="geojson"] name of the variable to display in error message (unused)
 * @returns {string} GeoJSON type
 * @example
 * var point = {
 *   "type": "Feature",
 *   "properties": {},
 *   "geometry": {
 *     "type": "Point",
 *     "coordinates": [110, 40]
 *   }
 * }
 * var geom = turf.getType(point)
 * //="Point"
 */
function getType(geojson, _name) {
    if (geojson.type === "FeatureCollection") {
        return "FeatureCollection";
    }
    if (geojson.type === "GeometryCollection") {
        return "GeometryCollection";
    }
    if (geojson.type === "Feature" && geojson.geometry !== null) {
        return geojson.geometry.type;
    }
    return geojson.type;
}


/***/ }),

/***/ "./node_modules/@turf/meta/dist/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@turf/meta/dist/es/index.js ***!
  \**************************************************/
/*! exports provided: coordEach, coordReduce, propEach, propReduce, featureEach, featureReduce, coordAll, geomEach, geomReduce, flattenEach, flattenReduce, segmentEach, segmentReduce, lineEach, lineReduce, findSegment, findPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coordEach", function() { return coordEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coordReduce", function() { return coordReduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propEach", function() { return propEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propReduce", function() { return propReduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureEach", function() { return featureEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureReduce", function() { return featureReduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coordAll", function() { return coordAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geomEach", function() { return geomEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geomReduce", function() { return geomReduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenEach", function() { return flattenEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenReduce", function() { return flattenReduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "segmentEach", function() { return segmentEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "segmentReduce", function() { return segmentReduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineEach", function() { return lineEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineReduce", function() { return lineReduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findSegment", function() { return findSegment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findPoint", function() { return findPoint; });
/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/dist/es/index.js");


/**
 * Callback for coordEach
 *
 * @callback coordEachCallback
 * @param {Array<number>} currentCoord The current coordinate being processed.
 * @param {number} coordIndex The current index of the coordinate being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 */

/**
 * Iterate over coordinates in any GeoJSON object, similar to Array.forEach()
 *
 * @name coordEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentCoord, coordIndex, featureIndex, multiFeatureIndex)
 * @param {boolean} [excludeWrapCoord=false] whether or not to include the final coordinate of LinearRings that wraps the ring in its iteration.
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.coordEach(features, function (currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=currentCoord
 *   //=coordIndex
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 * });
 */
function coordEach(geojson, callback, excludeWrapCoord) {
  // Handles null Geometry -- Skips this GeoJSON
  if (geojson === null) return;
  var j,
    k,
    l,
    geometry,
    stopG,
    coords,
    geometryMaybeCollection,
    wrapShrink = 0,
    coordIndex = 0,
    isGeometryCollection,
    type = geojson.type,
    isFeatureCollection = type === "FeatureCollection",
    isFeature = type === "Feature",
    stop = isFeatureCollection ? geojson.features.length : 1;

  // This logic may look a little weird. The reason why it is that way
  // is because it's trying to be fast. GeoJSON supports multiple kinds
  // of objects at its root: FeatureCollection, Features, Geometries.
  // This function has the responsibility of handling all of them, and that
  // means that some of the `for` loops you see below actually just don't apply
  // to certain inputs. For instance, if you give this just a
  // Point geometry, then both loops are short-circuited and all we do
  // is gradually rename the input until it's called 'geometry'.
  //
  // This also aims to allocate as few resources as possible: just a
  // few numbers and booleans, rather than any temporary arrays as would
  // be required with the normalization approach.
  for (var featureIndex = 0; featureIndex < stop; featureIndex++) {
    geometryMaybeCollection = isFeatureCollection
      ? geojson.features[featureIndex].geometry
      : isFeature
      ? geojson.geometry
      : geojson;
    isGeometryCollection = geometryMaybeCollection
      ? geometryMaybeCollection.type === "GeometryCollection"
      : false;
    stopG = isGeometryCollection
      ? geometryMaybeCollection.geometries.length
      : 1;

    for (var geomIndex = 0; geomIndex < stopG; geomIndex++) {
      var multiFeatureIndex = 0;
      var geometryIndex = 0;
      geometry = isGeometryCollection
        ? geometryMaybeCollection.geometries[geomIndex]
        : geometryMaybeCollection;

      // Handles null Geometry -- Skips this geometry
      if (geometry === null) continue;
      coords = geometry.coordinates;
      var geomType = geometry.type;

      wrapShrink =
        excludeWrapCoord &&
        (geomType === "Polygon" || geomType === "MultiPolygon")
          ? 1
          : 0;

      switch (geomType) {
        case null:
          break;
        case "Point":
          if (
            callback(
              coords,
              coordIndex,
              featureIndex,
              multiFeatureIndex,
              geometryIndex
            ) === false
          )
            return false;
          coordIndex++;
          multiFeatureIndex++;
          break;
        case "LineString":
        case "MultiPoint":
          for (j = 0; j < coords.length; j++) {
            if (
              callback(
                coords[j],
                coordIndex,
                featureIndex,
                multiFeatureIndex,
                geometryIndex
              ) === false
            )
              return false;
            coordIndex++;
            if (geomType === "MultiPoint") multiFeatureIndex++;
          }
          if (geomType === "LineString") multiFeatureIndex++;
          break;
        case "Polygon":
        case "MultiLineString":
          for (j = 0; j < coords.length; j++) {
            for (k = 0; k < coords[j].length - wrapShrink; k++) {
              if (
                callback(
                  coords[j][k],
                  coordIndex,
                  featureIndex,
                  multiFeatureIndex,
                  geometryIndex
                ) === false
              )
                return false;
              coordIndex++;
            }
            if (geomType === "MultiLineString") multiFeatureIndex++;
            if (geomType === "Polygon") geometryIndex++;
          }
          if (geomType === "Polygon") multiFeatureIndex++;
          break;
        case "MultiPolygon":
          for (j = 0; j < coords.length; j++) {
            geometryIndex = 0;
            for (k = 0; k < coords[j].length; k++) {
              for (l = 0; l < coords[j][k].length - wrapShrink; l++) {
                if (
                  callback(
                    coords[j][k][l],
                    coordIndex,
                    featureIndex,
                    multiFeatureIndex,
                    geometryIndex
                  ) === false
                )
                  return false;
                coordIndex++;
              }
              geometryIndex++;
            }
            multiFeatureIndex++;
          }
          break;
        case "GeometryCollection":
          for (j = 0; j < geometry.geometries.length; j++)
            if (
              coordEach(geometry.geometries[j], callback, excludeWrapCoord) ===
              false
            )
              return false;
          break;
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
  }
}

/**
 * Callback for coordReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback coordReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Array<number>} currentCoord The current coordinate being processed.
 * @param {number} coordIndex The current index of the coordinate being processed.
 * Starts at index 0, if an initialValue is provided, and at index 1 otherwise.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 */

/**
 * Reduce coordinates in any GeoJSON object, similar to Array.reduce()
 *
 * @name coordReduce
 * @param {FeatureCollection|Geometry|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentCoord, coordIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @param {boolean} [excludeWrapCoord=false] whether or not to include the final coordinate of LinearRings that wraps the ring in its iteration.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.coordReduce(features, function (previousValue, currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=previousValue
 *   //=currentCoord
 *   //=coordIndex
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   return currentCoord;
 * });
 */
function coordReduce(geojson, callback, initialValue, excludeWrapCoord) {
  var previousValue = initialValue;
  coordEach(
    geojson,
    function (
      currentCoord,
      coordIndex,
      featureIndex,
      multiFeatureIndex,
      geometryIndex
    ) {
      if (coordIndex === 0 && initialValue === undefined)
        previousValue = currentCoord;
      else
        previousValue = callback(
          previousValue,
          currentCoord,
          coordIndex,
          featureIndex,
          multiFeatureIndex,
          geometryIndex
        );
    },
    excludeWrapCoord
  );
  return previousValue;
}

/**
 * Callback for propEach
 *
 * @callback propEachCallback
 * @param {Object} currentProperties The current Properties being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Iterate over properties in any GeoJSON object, similar to Array.forEach()
 *
 * @name propEach
 * @param {FeatureCollection|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentProperties, featureIndex)
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.propEach(features, function (currentProperties, featureIndex) {
 *   //=currentProperties
 *   //=featureIndex
 * });
 */
function propEach(geojson, callback) {
  var i;
  switch (geojson.type) {
    case "FeatureCollection":
      for (i = 0; i < geojson.features.length; i++) {
        if (callback(geojson.features[i].properties, i) === false) break;
      }
      break;
    case "Feature":
      callback(geojson.properties, 0);
      break;
  }
}

/**
 * Callback for propReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback propReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {*} currentProperties The current Properties being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Reduce properties in any GeoJSON object into a single value,
 * similar to how Array.reduce works. However, in this case we lazily run
 * the reduction, so an array of all properties is unnecessary.
 *
 * @name propReduce
 * @param {FeatureCollection|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentProperties, featureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.propReduce(features, function (previousValue, currentProperties, featureIndex) {
 *   //=previousValue
 *   //=currentProperties
 *   //=featureIndex
 *   return currentProperties
 * });
 */
function propReduce(geojson, callback, initialValue) {
  var previousValue = initialValue;
  propEach(geojson, function (currentProperties, featureIndex) {
    if (featureIndex === 0 && initialValue === undefined)
      previousValue = currentProperties;
    else
      previousValue = callback(previousValue, currentProperties, featureIndex);
  });
  return previousValue;
}

/**
 * Callback for featureEach
 *
 * @callback featureEachCallback
 * @param {Feature<any>} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Iterate over features in any GeoJSON object, similar to
 * Array.forEach.
 *
 * @name featureEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentFeature, featureIndex)
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {foo: 'bar'}),
 *   turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.featureEach(features, function (currentFeature, featureIndex) {
 *   //=currentFeature
 *   //=featureIndex
 * });
 */
function featureEach(geojson, callback) {
  if (geojson.type === "Feature") {
    callback(geojson, 0);
  } else if (geojson.type === "FeatureCollection") {
    for (var i = 0; i < geojson.features.length; i++) {
      if (callback(geojson.features[i], i) === false) break;
    }
  }
}

/**
 * Callback for featureReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback featureReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Reduce features in any GeoJSON object, similar to Array.reduce().
 *
 * @name featureReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentFeature, featureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.featureReduce(features, function (previousValue, currentFeature, featureIndex) {
 *   //=previousValue
 *   //=currentFeature
 *   //=featureIndex
 *   return currentFeature
 * });
 */
function featureReduce(geojson, callback, initialValue) {
  var previousValue = initialValue;
  featureEach(geojson, function (currentFeature, featureIndex) {
    if (featureIndex === 0 && initialValue === undefined)
      previousValue = currentFeature;
    else previousValue = callback(previousValue, currentFeature, featureIndex);
  });
  return previousValue;
}

/**
 * Get all coordinates from any GeoJSON object.
 *
 * @name coordAll
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @returns {Array<Array<number>>} coordinate position array
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {foo: 'bar'}),
 *   turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * var coords = turf.coordAll(features);
 * //= [[26, 37], [36, 53]]
 */
function coordAll(geojson) {
  var coords = [];
  coordEach(geojson, function (coord) {
    coords.push(coord);
  });
  return coords;
}

/**
 * Callback for geomEach
 *
 * @callback geomEachCallback
 * @param {Geometry} currentGeometry The current Geometry being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {Object} featureProperties The current Feature Properties being processed.
 * @param {Array<number>} featureBBox The current Feature BBox being processed.
 * @param {number|string} featureId The current Feature Id being processed.
 */

/**
 * Iterate over each geometry in any GeoJSON object, similar to Array.forEach()
 *
 * @name geomEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentGeometry, featureIndex, featureProperties, featureBBox, featureId)
 * @returns {void}
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.geomEach(features, function (currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
 *   //=currentGeometry
 *   //=featureIndex
 *   //=featureProperties
 *   //=featureBBox
 *   //=featureId
 * });
 */
function geomEach(geojson, callback) {
  var i,
    j,
    g,
    geometry,
    stopG,
    geometryMaybeCollection,
    isGeometryCollection,
    featureProperties,
    featureBBox,
    featureId,
    featureIndex = 0,
    isFeatureCollection = geojson.type === "FeatureCollection",
    isFeature = geojson.type === "Feature",
    stop = isFeatureCollection ? geojson.features.length : 1;

  // This logic may look a little weird. The reason why it is that way
  // is because it's trying to be fast. GeoJSON supports multiple kinds
  // of objects at its root: FeatureCollection, Features, Geometries.
  // This function has the responsibility of handling all of them, and that
  // means that some of the `for` loops you see below actually just don't apply
  // to certain inputs. For instance, if you give this just a
  // Point geometry, then both loops are short-circuited and all we do
  // is gradually rename the input until it's called 'geometry'.
  //
  // This also aims to allocate as few resources as possible: just a
  // few numbers and booleans, rather than any temporary arrays as would
  // be required with the normalization approach.
  for (i = 0; i < stop; i++) {
    geometryMaybeCollection = isFeatureCollection
      ? geojson.features[i].geometry
      : isFeature
      ? geojson.geometry
      : geojson;
    featureProperties = isFeatureCollection
      ? geojson.features[i].properties
      : isFeature
      ? geojson.properties
      : {};
    featureBBox = isFeatureCollection
      ? geojson.features[i].bbox
      : isFeature
      ? geojson.bbox
      : undefined;
    featureId = isFeatureCollection
      ? geojson.features[i].id
      : isFeature
      ? geojson.id
      : undefined;
    isGeometryCollection = geometryMaybeCollection
      ? geometryMaybeCollection.type === "GeometryCollection"
      : false;
    stopG = isGeometryCollection
      ? geometryMaybeCollection.geometries.length
      : 1;

    for (g = 0; g < stopG; g++) {
      geometry = isGeometryCollection
        ? geometryMaybeCollection.geometries[g]
        : geometryMaybeCollection;

      // Handle null Geometry
      if (geometry === null) {
        if (
          callback(
            null,
            featureIndex,
            featureProperties,
            featureBBox,
            featureId
          ) === false
        )
          return false;
        continue;
      }
      switch (geometry.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (
            callback(
              geometry,
              featureIndex,
              featureProperties,
              featureBBox,
              featureId
            ) === false
          )
            return false;
          break;
        }
        case "GeometryCollection": {
          for (j = 0; j < geometry.geometries.length; j++) {
            if (
              callback(
                geometry.geometries[j],
                featureIndex,
                featureProperties,
                featureBBox,
                featureId
              ) === false
            )
              return false;
          }
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    // Only increase `featureIndex` per each feature
    featureIndex++;
  }
}

/**
 * Callback for geomReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback geomReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Geometry} currentGeometry The current Geometry being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {Object} featureProperties The current Feature Properties being processed.
 * @param {Array<number>} featureBBox The current Feature BBox being processed.
 * @param {number|string} featureId The current Feature Id being processed.
 */

/**
 * Reduce geometry in any GeoJSON object, similar to Array.reduce().
 *
 * @name geomReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.geomReduce(features, function (previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
 *   //=previousValue
 *   //=currentGeometry
 *   //=featureIndex
 *   //=featureProperties
 *   //=featureBBox
 *   //=featureId
 *   return currentGeometry
 * });
 */
function geomReduce(geojson, callback, initialValue) {
  var previousValue = initialValue;
  geomEach(
    geojson,
    function (
      currentGeometry,
      featureIndex,
      featureProperties,
      featureBBox,
      featureId
    ) {
      if (featureIndex === 0 && initialValue === undefined)
        previousValue = currentGeometry;
      else
        previousValue = callback(
          previousValue,
          currentGeometry,
          featureIndex,
          featureProperties,
          featureBBox,
          featureId
        );
    }
  );
  return previousValue;
}

/**
 * Callback for flattenEach
 *
 * @callback flattenEachCallback
 * @param {Feature} currentFeature The current flattened feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 */

/**
 * Iterate over flattened features in any GeoJSON object, similar to
 * Array.forEach.
 *
 * @name flattenEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentFeature, featureIndex, multiFeatureIndex)
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.multiPoint([[40, 30], [36, 53]], {hello: 'world'})
 * ]);
 *
 * turf.flattenEach(features, function (currentFeature, featureIndex, multiFeatureIndex) {
 *   //=currentFeature
 *   //=featureIndex
 *   //=multiFeatureIndex
 * });
 */
function flattenEach(geojson, callback) {
  geomEach(geojson, function (geometry, featureIndex, properties, bbox, id) {
    // Callback for single geometry
    var type = geometry === null ? null : geometry.type;
    switch (type) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        if (
          callback(
            Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["feature"])(geometry, properties, { bbox: bbox, id: id }),
            featureIndex,
            0
          ) === false
        )
          return false;
        return;
    }

    var geomType;

    // Callback for multi-geometry
    switch (type) {
      case "MultiPoint":
        geomType = "Point";
        break;
      case "MultiLineString":
        geomType = "LineString";
        break;
      case "MultiPolygon":
        geomType = "Polygon";
        break;
    }

    for (
      var multiFeatureIndex = 0;
      multiFeatureIndex < geometry.coordinates.length;
      multiFeatureIndex++
    ) {
      var coordinate = geometry.coordinates[multiFeatureIndex];
      var geom = {
        type: geomType,
        coordinates: coordinate,
      };
      if (
        callback(Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["feature"])(geom, properties), featureIndex, multiFeatureIndex) ===
        false
      )
        return false;
    }
  });
}

/**
 * Callback for flattenReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback flattenReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 */

/**
 * Reduce flattened features in any GeoJSON object, similar to Array.reduce().
 *
 * @name flattenReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentFeature, featureIndex, multiFeatureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.multiPoint([[40, 30], [36, 53]], {hello: 'world'})
 * ]);
 *
 * turf.flattenReduce(features, function (previousValue, currentFeature, featureIndex, multiFeatureIndex) {
 *   //=previousValue
 *   //=currentFeature
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   return currentFeature
 * });
 */
function flattenReduce(geojson, callback, initialValue) {
  var previousValue = initialValue;
  flattenEach(
    geojson,
    function (currentFeature, featureIndex, multiFeatureIndex) {
      if (
        featureIndex === 0 &&
        multiFeatureIndex === 0 &&
        initialValue === undefined
      )
        previousValue = currentFeature;
      else
        previousValue = callback(
          previousValue,
          currentFeature,
          featureIndex,
          multiFeatureIndex
        );
    }
  );
  return previousValue;
}

/**
 * Callback for segmentEach
 *
 * @callback segmentEachCallback
 * @param {Feature<LineString>} currentSegment The current Segment being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 * @param {number} segmentIndex The current index of the Segment being processed.
 * @returns {void}
 */

/**
 * Iterate over 2-vertex line segment in any GeoJSON object, similar to Array.forEach()
 * (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON
 * @param {Function} callback a method that takes (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex)
 * @returns {void}
 * @example
 * var polygon = turf.polygon([[[-50, 5], [-40, -10], [-50, -10], [-40, 5], [-50, 5]]]);
 *
 * // Iterate over GeoJSON by 2-vertex segments
 * turf.segmentEach(polygon, function (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
 *   //=currentSegment
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   //=segmentIndex
 * });
 *
 * // Calculate the total number of segments
 * var total = 0;
 * turf.segmentEach(polygon, function () {
 *     total++;
 * });
 */
function segmentEach(geojson, callback) {
  flattenEach(geojson, function (feature$$1, featureIndex, multiFeatureIndex) {
    var segmentIndex = 0;

    // Exclude null Geometries
    if (!feature$$1.geometry) return;
    // (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
    var type = feature$$1.geometry.type;
    if (type === "Point" || type === "MultiPoint") return;

    // Generate 2-vertex line segments
    var previousCoords;
    var previousFeatureIndex = 0;
    var previousMultiIndex = 0;
    var prevGeomIndex = 0;
    if (
      coordEach(
        feature$$1,
        function (
          currentCoord,
          coordIndex,
          featureIndexCoord,
          multiPartIndexCoord,
          geometryIndex
        ) {
          // Simulating a meta.coordReduce() since `reduce` operations cannot be stopped by returning `false`
          if (
            previousCoords === undefined ||
            featureIndex > previousFeatureIndex ||
            multiPartIndexCoord > previousMultiIndex ||
            geometryIndex > prevGeomIndex
          ) {
            previousCoords = currentCoord;
            previousFeatureIndex = featureIndex;
            previousMultiIndex = multiPartIndexCoord;
            prevGeomIndex = geometryIndex;
            segmentIndex = 0;
            return;
          }
          var currentSegment = Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["lineString"])(
            [previousCoords, currentCoord],
            feature$$1.properties
          );
          if (
            callback(
              currentSegment,
              featureIndex,
              multiFeatureIndex,
              geometryIndex,
              segmentIndex
            ) === false
          )
            return false;
          segmentIndex++;
          previousCoords = currentCoord;
        }
      ) === false
    )
      return false;
  });
}

/**
 * Callback for segmentReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback segmentReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature<LineString>} currentSegment The current Segment being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 * @param {number} segmentIndex The current index of the Segment being processed.
 */

/**
 * Reduce 2-vertex line segment in any GeoJSON object, similar to Array.reduce()
 * (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON
 * @param {Function} callback a method that takes (previousValue, currentSegment, currentIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {void}
 * @example
 * var polygon = turf.polygon([[[-50, 5], [-40, -10], [-50, -10], [-40, 5], [-50, 5]]]);
 *
 * // Iterate over GeoJSON by 2-vertex segments
 * turf.segmentReduce(polygon, function (previousSegment, currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
 *   //= previousSegment
 *   //= currentSegment
 *   //= featureIndex
 *   //= multiFeatureIndex
 *   //= geometryIndex
 *   //= segmentIndex
 *   return currentSegment
 * });
 *
 * // Calculate the total number of segments
 * var initialValue = 0
 * var total = turf.segmentReduce(polygon, function (previousValue) {
 *     previousValue++;
 *     return previousValue;
 * }, initialValue);
 */
function segmentReduce(geojson, callback, initialValue) {
  var previousValue = initialValue;
  var started = false;
  segmentEach(
    geojson,
    function (
      currentSegment,
      featureIndex,
      multiFeatureIndex,
      geometryIndex,
      segmentIndex
    ) {
      if (started === false && initialValue === undefined)
        previousValue = currentSegment;
      else
        previousValue = callback(
          previousValue,
          currentSegment,
          featureIndex,
          multiFeatureIndex,
          geometryIndex,
          segmentIndex
        );
      started = true;
    }
  );
  return previousValue;
}

/**
 * Callback for lineEach
 *
 * @callback lineEachCallback
 * @param {Feature<LineString>} currentLine The current LineString|LinearRing being processed
 * @param {number} featureIndex The current index of the Feature being processed
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed
 * @param {number} geometryIndex The current index of the Geometry being processed
 */

/**
 * Iterate over line or ring coordinates in LineString, Polygon, MultiLineString, MultiPolygon Features or Geometries,
 * similar to Array.forEach.
 *
 * @name lineEach
 * @param {Geometry|Feature<LineString|Polygon|MultiLineString|MultiPolygon>} geojson object
 * @param {Function} callback a method that takes (currentLine, featureIndex, multiFeatureIndex, geometryIndex)
 * @example
 * var multiLine = turf.multiLineString([
 *   [[26, 37], [35, 45]],
 *   [[36, 53], [38, 50], [41, 55]]
 * ]);
 *
 * turf.lineEach(multiLine, function (currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=currentLine
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 * });
 */
function lineEach(geojson, callback) {
  // validation
  if (!geojson) throw new Error("geojson is required");

  flattenEach(geojson, function (feature$$1, featureIndex, multiFeatureIndex) {
    if (feature$$1.geometry === null) return;
    var type = feature$$1.geometry.type;
    var coords = feature$$1.geometry.coordinates;
    switch (type) {
      case "LineString":
        if (callback(feature$$1, featureIndex, multiFeatureIndex, 0, 0) === false)
          return false;
        break;
      case "Polygon":
        for (
          var geometryIndex = 0;
          geometryIndex < coords.length;
          geometryIndex++
        ) {
          if (
            callback(
              Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["lineString"])(coords[geometryIndex], feature$$1.properties),
              featureIndex,
              multiFeatureIndex,
              geometryIndex
            ) === false
          )
            return false;
        }
        break;
    }
  });
}

/**
 * Callback for lineReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback lineReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature<LineString>} currentLine The current LineString|LinearRing being processed.
 * @param {number} featureIndex The current index of the Feature being processed
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed
 * @param {number} geometryIndex The current index of the Geometry being processed
 */

/**
 * Reduce features in any GeoJSON object, similar to Array.reduce().
 *
 * @name lineReduce
 * @param {Geometry|Feature<LineString|Polygon|MultiLineString|MultiPolygon>} geojson object
 * @param {Function} callback a method that takes (previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var multiPoly = turf.multiPolygon([
 *   turf.polygon([[[12,48],[2,41],[24,38],[12,48]], [[9,44],[13,41],[13,45],[9,44]]]),
 *   turf.polygon([[[5, 5], [0, 0], [2, 2], [4, 4], [5, 5]]])
 * ]);
 *
 * turf.lineReduce(multiPoly, function (previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=previousValue
 *   //=currentLine
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   return currentLine
 * });
 */
function lineReduce(geojson, callback, initialValue) {
  var previousValue = initialValue;
  lineEach(
    geojson,
    function (currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
      if (featureIndex === 0 && initialValue === undefined)
        previousValue = currentLine;
      else
        previousValue = callback(
          previousValue,
          currentLine,
          featureIndex,
          multiFeatureIndex,
          geometryIndex
        );
    }
  );
  return previousValue;
}

/**
 * Finds a particular 2-vertex LineString Segment from a GeoJSON using `@turf/meta` indexes.
 *
 * Negative indexes are permitted.
 * Point & MultiPoint will always return null.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson Any GeoJSON Feature or Geometry
 * @param {Object} [options={}] Optional parameters
 * @param {number} [options.featureIndex=0] Feature Index
 * @param {number} [options.multiFeatureIndex=0] Multi-Feature Index
 * @param {number} [options.geometryIndex=0] Geometry Index
 * @param {number} [options.segmentIndex=0] Segment Index
 * @param {Object} [options.properties={}] Translate Properties to output LineString
 * @param {BBox} [options.bbox={}] Translate BBox to output LineString
 * @param {number|string} [options.id={}] Translate Id to output LineString
 * @returns {Feature<LineString>} 2-vertex GeoJSON Feature LineString
 * @example
 * var multiLine = turf.multiLineString([
 *     [[10, 10], [50, 30], [30, 40]],
 *     [[-10, -10], [-50, -30], [-30, -40]]
 * ]);
 *
 * // First Segment (defaults are 0)
 * turf.findSegment(multiLine);
 * // => Feature<LineString<[[10, 10], [50, 30]]>>
 *
 * // First Segment of 2nd Multi Feature
 * turf.findSegment(multiLine, {multiFeatureIndex: 1});
 * // => Feature<LineString<[[-10, -10], [-50, -30]]>>
 *
 * // Last Segment of Last Multi Feature
 * turf.findSegment(multiLine, {multiFeatureIndex: -1, segmentIndex: -1});
 * // => Feature<LineString<[[-50, -30], [-30, -40]]>>
 */
function findSegment(geojson, options) {
  // Optional Parameters
  options = options || {};
  if (!Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["isObject"])(options)) throw new Error("options is invalid");
  var featureIndex = options.featureIndex || 0;
  var multiFeatureIndex = options.multiFeatureIndex || 0;
  var geometryIndex = options.geometryIndex || 0;
  var segmentIndex = options.segmentIndex || 0;

  // Find FeatureIndex
  var properties = options.properties;
  var geometry;

  switch (geojson.type) {
    case "FeatureCollection":
      if (featureIndex < 0)
        featureIndex = geojson.features.length + featureIndex;
      properties = properties || geojson.features[featureIndex].properties;
      geometry = geojson.features[featureIndex].geometry;
      break;
    case "Feature":
      properties = properties || geojson.properties;
      geometry = geojson.geometry;
      break;
    case "Point":
    case "MultiPoint":
      return null;
    case "LineString":
    case "Polygon":
    case "MultiLineString":
    case "MultiPolygon":
      geometry = geojson;
      break;
    default:
      throw new Error("geojson is invalid");
  }

  // Find SegmentIndex
  if (geometry === null) return null;
  var coords = geometry.coordinates;
  switch (geometry.type) {
    case "Point":
    case "MultiPoint":
      return null;
    case "LineString":
      if (segmentIndex < 0) segmentIndex = coords.length + segmentIndex - 1;
      return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["lineString"])(
        [coords[segmentIndex], coords[segmentIndex + 1]],
        properties,
        options
      );
    case "Polygon":
      if (geometryIndex < 0) geometryIndex = coords.length + geometryIndex;
      if (segmentIndex < 0)
        segmentIndex = coords[geometryIndex].length + segmentIndex - 1;
      return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["lineString"])(
        [
          coords[geometryIndex][segmentIndex],
          coords[geometryIndex][segmentIndex + 1],
        ],
        properties,
        options
      );
    case "MultiLineString":
      if (multiFeatureIndex < 0)
        multiFeatureIndex = coords.length + multiFeatureIndex;
      if (segmentIndex < 0)
        segmentIndex = coords[multiFeatureIndex].length + segmentIndex - 1;
      return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["lineString"])(
        [
          coords[multiFeatureIndex][segmentIndex],
          coords[multiFeatureIndex][segmentIndex + 1],
        ],
        properties,
        options
      );
    case "MultiPolygon":
      if (multiFeatureIndex < 0)
        multiFeatureIndex = coords.length + multiFeatureIndex;
      if (geometryIndex < 0)
        geometryIndex = coords[multiFeatureIndex].length + geometryIndex;
      if (segmentIndex < 0)
        segmentIndex =
          coords[multiFeatureIndex][geometryIndex].length - segmentIndex - 1;
      return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["lineString"])(
        [
          coords[multiFeatureIndex][geometryIndex][segmentIndex],
          coords[multiFeatureIndex][geometryIndex][segmentIndex + 1],
        ],
        properties,
        options
      );
  }
  throw new Error("geojson is invalid");
}

/**
 * Finds a particular Point from a GeoJSON using `@turf/meta` indexes.
 *
 * Negative indexes are permitted.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson Any GeoJSON Feature or Geometry
 * @param {Object} [options={}] Optional parameters
 * @param {number} [options.featureIndex=0] Feature Index
 * @param {number} [options.multiFeatureIndex=0] Multi-Feature Index
 * @param {number} [options.geometryIndex=0] Geometry Index
 * @param {number} [options.coordIndex=0] Coord Index
 * @param {Object} [options.properties={}] Translate Properties to output Point
 * @param {BBox} [options.bbox={}] Translate BBox to output Point
 * @param {number|string} [options.id={}] Translate Id to output Point
 * @returns {Feature<Point>} 2-vertex GeoJSON Feature Point
 * @example
 * var multiLine = turf.multiLineString([
 *     [[10, 10], [50, 30], [30, 40]],
 *     [[-10, -10], [-50, -30], [-30, -40]]
 * ]);
 *
 * // First Segment (defaults are 0)
 * turf.findPoint(multiLine);
 * // => Feature<Point<[10, 10]>>
 *
 * // First Segment of the 2nd Multi-Feature
 * turf.findPoint(multiLine, {multiFeatureIndex: 1});
 * // => Feature<Point<[-10, -10]>>
 *
 * // Last Segment of last Multi-Feature
 * turf.findPoint(multiLine, {multiFeatureIndex: -1, coordIndex: -1});
 * // => Feature<Point<[-30, -40]>>
 */
function findPoint(geojson, options) {
  // Optional Parameters
  options = options || {};
  if (!Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["isObject"])(options)) throw new Error("options is invalid");
  var featureIndex = options.featureIndex || 0;
  var multiFeatureIndex = options.multiFeatureIndex || 0;
  var geometryIndex = options.geometryIndex || 0;
  var coordIndex = options.coordIndex || 0;

  // Find FeatureIndex
  var properties = options.properties;
  var geometry;

  switch (geojson.type) {
    case "FeatureCollection":
      if (featureIndex < 0)
        featureIndex = geojson.features.length + featureIndex;
      properties = properties || geojson.features[featureIndex].properties;
      geometry = geojson.features[featureIndex].geometry;
      break;
    case "Feature":
      properties = properties || geojson.properties;
      geometry = geojson.geometry;
      break;
    case "Point":
    case "MultiPoint":
      return null;
    case "LineString":
    case "Polygon":
    case "MultiLineString":
    case "MultiPolygon":
      geometry = geojson;
      break;
    default:
      throw new Error("geojson is invalid");
  }

  // Find Coord Index
  if (geometry === null) return null;
  var coords = geometry.coordinates;
  switch (geometry.type) {
    case "Point":
      return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["point"])(coords, properties, options);
    case "MultiPoint":
      if (multiFeatureIndex < 0)
        multiFeatureIndex = coords.length + multiFeatureIndex;
      return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["point"])(coords[multiFeatureIndex], properties, options);
    case "LineString":
      if (coordIndex < 0) coordIndex = coords.length + coordIndex;
      return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["point"])(coords[coordIndex], properties, options);
    case "Polygon":
      if (geometryIndex < 0) geometryIndex = coords.length + geometryIndex;
      if (coordIndex < 0)
        coordIndex = coords[geometryIndex].length + coordIndex;
      return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["point"])(coords[geometryIndex][coordIndex], properties, options);
    case "MultiLineString":
      if (multiFeatureIndex < 0)
        multiFeatureIndex = coords.length + multiFeatureIndex;
      if (coordIndex < 0)
        coordIndex = coords[multiFeatureIndex].length + coordIndex;
      return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["point"])(coords[multiFeatureIndex][coordIndex], properties, options);
    case "MultiPolygon":
      if (multiFeatureIndex < 0)
        multiFeatureIndex = coords.length + multiFeatureIndex;
      if (geometryIndex < 0)
        geometryIndex = coords[multiFeatureIndex].length + geometryIndex;
      if (coordIndex < 0)
        coordIndex =
          coords[multiFeatureIndex][geometryIndex].length - coordIndex;
      return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["point"])(
        coords[multiFeatureIndex][geometryIndex][coordIndex],
        properties,
        options
      );
  }
  throw new Error("geojson is invalid");
}




/***/ }),

/***/ "./node_modules/@turf/point-grid/dist/es/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@turf/point-grid/dist/es/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _turf_boolean_within__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/boolean-within */ "./node_modules/@turf/boolean-within/dist/es/index.js");
/* harmony import */ var _turf_distance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/distance */ "./node_modules/@turf/distance/dist/es/index.js");
/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/dist/es/index.js");



/**
 * Creates a {@link Point} grid from a bounding box, {@link FeatureCollection} or {@link Feature}.
 *
 * @name pointGrid
 * @param {Array<number>} bbox extent in [minX, minY, maxX, maxY] order
 * @param {number} cellSide the distance between points, in units
 * @param {Object} [options={}] Optional parameters
 * @param {string} [options.units='kilometers'] used in calculating cellSide, can be degrees, radians, miles, or kilometers
 * @param {Feature<Polygon|MultiPolygon>} [options.mask] if passed a Polygon or MultiPolygon, the grid Points will be created only inside it
 * @param {Object} [options.properties={}] passed to each point of the grid
 * @returns {FeatureCollection<Point>} grid of points
 * @example
 * var extent = [-70.823364, -33.553984, -70.473175, -33.302986];
 * var cellSide = 3;
 * var options = {units: 'miles'};
 *
 * var grid = turf.pointGrid(extent, cellSide, options);
 *
 * //addToMap
 * var addToMap = [grid];
 */
function pointGrid(bbox, cellSide, options) {
    if (options === void 0) { options = {}; }
    // Default parameters
    if (options.mask && !options.units)
        options.units = "kilometers";
    // Containers
    var results = [];
    // Typescript handles the Type Validation
    // if (cellSide === null || cellSide === undefined) throw new Error('cellSide is required');
    // if (!isNumber(cellSide)) throw new Error('cellSide is invalid');
    // if (!bbox) throw new Error('bbox is required');
    // if (!Array.isArray(bbox)) throw new Error('bbox must be array');
    // if (bbox.length !== 4) throw new Error('bbox must contain 4 numbers');
    // if (mask && ['Polygon', 'MultiPolygon'].indexOf(getType(mask)) === -1) throw new Error('options.mask must be a (Multi)Polygon');
    var west = bbox[0];
    var south = bbox[1];
    var east = bbox[2];
    var north = bbox[3];
    var xFraction = cellSide / Object(_turf_distance__WEBPACK_IMPORTED_MODULE_1__["default"])([west, south], [east, south], options);
    var cellWidth = xFraction * (east - west);
    var yFraction = cellSide / Object(_turf_distance__WEBPACK_IMPORTED_MODULE_1__["default"])([west, south], [west, north], options);
    var cellHeight = yFraction * (north - south);
    var bboxWidth = east - west;
    var bboxHeight = north - south;
    var columns = Math.floor(bboxWidth / cellWidth);
    var rows = Math.floor(bboxHeight / cellHeight);
    // adjust origin of the grid
    var deltaX = (bboxWidth - columns * cellWidth) / 2;
    var deltaY = (bboxHeight - rows * cellHeight) / 2;
    var currentX = west + deltaX;
    while (currentX <= east) {
        var currentY = south + deltaY;
        while (currentY <= north) {
            var cellPt = Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_2__["point"])([currentX, currentY], options.properties);
            if (options.mask) {
                if (Object(_turf_boolean_within__WEBPACK_IMPORTED_MODULE_0__["default"])(cellPt, options.mask))
                    results.push(cellPt);
            }
            else {
                results.push(cellPt);
            }
            currentY += cellHeight;
        }
        currentX += cellWidth;
    }
    return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_2__["featureCollection"])(results);
}
/* harmony default export */ __webpack_exports__["default"] = (pointGrid);


/***/ }),

/***/ "./node_modules/drag-drop/index.js":
/*!*****************************************!*\
  !*** ./node_modules/drag-drop/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! drag-drop. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
module.exports = dragDrop

const parallel = __webpack_require__(/*! run-parallel */ "./node_modules/run-parallel/index.js")

function dragDrop (elem, listeners) {
  if (typeof elem === 'string') {
    const selector = elem
    elem = window.document.querySelector(elem)
    if (!elem) {
      throw new Error(`"${selector}" does not match any HTML elements`)
    }
  }

  if (!elem) {
    throw new Error(`"${elem}" is not a valid HTML element`)
  }

  if (typeof listeners === 'function') {
    listeners = { onDrop: listeners }
  }

  elem.addEventListener('dragenter', onDragEnter, false)
  elem.addEventListener('dragover', onDragOver, false)
  elem.addEventListener('dragleave', onDragLeave, false)
  elem.addEventListener('drop', onDrop, false)

  let isEntered = false
  let numIgnoredEnters = 0

  // Function to remove drag-drop listeners
  return function cleanup () {
    removeDragClass()
    elem.removeEventListener('dragenter', onDragEnter, false)
    elem.removeEventListener('dragover', onDragOver, false)
    elem.removeEventListener('dragleave', onDragLeave, false)
    elem.removeEventListener('drop', onDrop, false)
  }

  function isEventHandleable (event) {
    if (event.dataTransfer.items || event.dataTransfer.types) {
      // Only add "drag" class when `items` contains items that are able to be
      // handled by the registered listeners (files vs. text)
      const items = Array.from(event.dataTransfer.items)
      const types = Array.from(event.dataTransfer.types)

      let fileItems
      let textItems
      if (items.length) {
        fileItems = items.filter(item => { return item.kind === 'file' })
        textItems = items.filter(item => { return item.kind === 'string' })
      } else if (types.length) {
        // event.dataTransfer.items is empty during 'dragover' in Safari, so use
        // event.dataTransfer.types as a fallback
        fileItems = types.filter(item => item === 'Files')
        textItems = types.filter(item => item.startsWith('text/'))
      }

      if (fileItems.length === 0 && !listeners.onDropText) return false
      if (textItems.length === 0 && !listeners.onDrop) return false
      if (fileItems.length === 0 && textItems.length === 0) return false
    }
    return true
  }

  function onDragEnter (event) {
    event.stopPropagation()
    event.preventDefault()

    if (!isEventHandleable(event)) return

    if (isEntered) {
      numIgnoredEnters += 1
      return false // early return
    }

    isEntered = true

    if (listeners.onDragEnter) {
      listeners.onDragEnter(event)
    }

    addDragClass()

    return false
  }

  function onDragOver (event) {
    event.stopPropagation()
    event.preventDefault()

    if (!isEventHandleable(event)) return

    if (listeners.onDragOver) {
      listeners.onDragOver(event)
    }

    event.dataTransfer.dropEffect = 'copy'

    return false
  }

  function onDragLeave (event) {
    event.stopPropagation()
    event.preventDefault()

    if (!isEventHandleable(event)) return

    if (numIgnoredEnters > 0) {
      numIgnoredEnters -= 1
      return false
    }

    isEntered = false

    if (listeners.onDragLeave) {
      listeners.onDragLeave(event)
    }

    removeDragClass()

    return false
  }

  function onDrop (event) {
    event.stopPropagation()
    event.preventDefault()

    if (listeners.onDragLeave) {
      listeners.onDragLeave(event)
    }

    removeDragClass()

    isEntered = false
    numIgnoredEnters = 0

    const pos = {
      x: event.clientX,
      y: event.clientY
    }

    // text drop support
    const text = event.dataTransfer.getData('text')
    if (text && listeners.onDropText) {
      listeners.onDropText(text, pos)
    }

    // File drop support. The `dataTransfer.items` API supports directories, so we
    // use it instead of `dataTransfer.files`, even though it's much more
    // complicated to use.
    // See: https://github.com/feross/drag-drop/issues/39
    if (listeners.onDrop && event.dataTransfer.items) {
      const fileList = event.dataTransfer.files

      // Handle directories in Chrome using the proprietary FileSystem API
      const items = Array.from(event.dataTransfer.items).filter(item => {
        return item.kind === 'file'
      })

      if (items.length === 0) return

      parallel(items.map(item => {
        return cb => {
          processEntry(item.webkitGetAsEntry(), cb)
        }
      }), (err, results) => {
        // This catches permission errors with file:// in Chrome. This should never
        // throw in production code, so the user does not need to use try-catch.
        if (err) throw err

        const entries = results.flat(Infinity)

        const files = entries.filter(item => {
          return item.isFile
        })

        const directories = entries.filter(item => {
          return item.isDirectory
        })

        listeners.onDrop(files, pos, fileList, directories)
      })
    }

    return false
  }

  function addDragClass () {
    elem.classList.add('drag')
  }

  function removeDragClass () {
    elem.classList.remove('drag')
  }
}

function processEntry (entry, cb) {
  let entries = []

  if (entry.isFile) {
    entry.file(file => {
      file.fullPath = entry.fullPath // preserve path for consumer
      file.isFile = true
      file.isDirectory = false
      cb(null, file)
    }, err => {
      cb(err)
    })
  } else if (entry.isDirectory) {
    const reader = entry.createReader()
    readEntries(reader)
  }

  function readEntries (reader) {
    reader.readEntries(currentEntries => {
      if (currentEntries.length > 0) {
        entries = entries.concat(Array.from(currentEntries))
        readEntries(reader) // continue reading entries until `readEntries` returns no more
      } else {
        doneEntries()
      }
    })
  }

  function doneEntries () {
    parallel(entries.map(entry => {
      return cb => {
        processEntry(entry, cb)
      }
    }), (err, results) => {
      if (err) {
        cb(err)
      } else {
        results.push({
          fullPath: entry.fullPath,
          name: entry.name,
          isFile: false,
          isDirectory: true
        })
        cb(null, results)
      }
    })
  }
}


/***/ }),

/***/ "./node_modules/get-canvas-context/index.js":
/*!**************************************************!*\
  !*** ./node_modules/get-canvas-context/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = getCanvasContext
function getCanvasContext (type, opts) {
  if (typeof type !== 'string') {
    throw new TypeError('must specify type string')
  }

  opts = opts || {}

  if (typeof document === 'undefined' && !opts.canvas) {
    return null // check for Node
  }

  var canvas = opts.canvas || document.createElement('canvas')
  if (typeof opts.width === 'number') {
    canvas.width = opts.width
  }
  if (typeof opts.height === 'number') {
    canvas.height = opts.height
  }

  var attribs = opts
  var gl
  try {
    var names = [ type ]
    // prefix GL contexts
    if (type.indexOf('webgl') === 0) {
      names.push('experimental-' + type)
    }

    for (var i = 0; i < names.length; i++) {
      gl = canvas.getContext(names[i], attribs)
      if (gl) return gl
    }
  } catch (e) {
    gl = null
  }
  return (gl || null) // ensure null on fail
}


/***/ }),

/***/ "./node_modules/load-img/index.js":
/*!****************************************!*\
  !*** ./node_modules/load-img/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = loadImage;
function loadImage (src, opt, callback) {
  if (typeof opt === 'function') {
    callback = opt;
    opt = null;
  }

  var el = document.createElement('img');
  var locked;

  el.onload = function onLoaded () {
    if (locked) return;
    locked = true;

    if (callback) callback(undefined, el);
  };

  el.onerror = function onError () {
    if (locked) return;
    locked = true;

    if (callback) callback(new Error('Unable to load "' + src + '"'), el);
  };

  if (opt && opt.crossOrigin) {
    el.crossOrigin = opt.crossOrigin;
  }

  el.src = src;

  return el;
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/queue-microtask/index.js":
/*!***********************************************!*\
  !*** ./node_modules/queue-microtask/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
let promise

module.exports = typeof queueMicrotask === 'function'
  ? queueMicrotask.bind(globalThis)
  // reuse resolved promise, and allocate it lazily
  : cb => (promise || (promise = Promise.resolve()))
    .then(cb)
    .catch(err => setTimeout(() => { throw err }, 0))


/***/ }),

/***/ "./node_modules/run-parallel/index.js":
/*!********************************************!*\
  !*** ./node_modules/run-parallel/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! run-parallel. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
module.exports = runParallel

const queueMicrotask = __webpack_require__(/*! queue-microtask */ "./node_modules/queue-microtask/index.js")

function runParallel (tasks, cb) {
  let results, pending, keys
  let isSync = true

  if (Array.isArray(tasks)) {
    results = []
    pending = tasks.length
  } else {
    keys = Object.keys(tasks)
    results = {}
    pending = keys.length
  }

  function done (err) {
    function end () {
      if (cb) cb(err, results)
      cb = null
    }
    if (isSync) queueMicrotask(end)
    else end()
  }

  function each (i, err, result) {
    results[i] = result
    if (--pending === 0 || err) {
      done(err)
    }
  }

  if (!pending) {
    // empty
    done(null)
  } else if (keys) {
    // object
    keys.forEach(function (key) {
      tasks[key](function (err, result) { each(key, err, result) })
    })
  } else {
    // array
    tasks.forEach(function (task, i) {
      task(function (err, result) { each(i, err, result) })
    })
  }

  isSync = false
}


/***/ }),

/***/ "./node_modules/svg-to-image/index.js":
/*!********************************************!*\
  !*** ./node_modules/svg-to-image/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var loadImage = __webpack_require__(/*! load-img */ "./node_modules/load-img/index.js")
var noop = function () {}

module.exports = svgToImage
function svgToImage (svg, opt, cb) {
  if (typeof opt === 'function') {
    cb = opt
    opt = {}
  }
  cb = cb || noop
  opt = opt || {}

  if (typeof window === 'undefined') {
    return bail('window global is undefined; not in a browser')
  }

  var DOMURL = getURL()
  if (!DOMURL ||
    typeof DOMURL.createObjectURL !== 'function' ||
    typeof DOMURL.revokeObjectURL !== 'function') {
    return bail('browser does not support URL.createObjectURL')
  }

  if (typeof window.Blob === 'undefined') {
    return bail('browser does not support Blob constructor')
  }

  if (!Array.isArray(svg)) {
    svg = [ svg ]
  }

  var blob
  try {
    blob = new window.Blob(svg, {
      type: 'image/svg+xml;charset=utf-8'
    })
  } catch (e) {
    return bail(e)
  }

  var url = DOMURL.createObjectURL(blob)
  loadImage(url, opt, function (err, img) {
    DOMURL.revokeObjectURL(url)
    if (err) {
      // try again for Safari 8.0, using simple encodeURIComponent
      // this will fail with DOM content but at least it works with SVG
      var url2 = 'data:image/svg+xml,' + encodeURIComponent(svg.join(''))
      return loadImage(url2, opt, cb)
    }

    cb(err, img)
  })

  function bail (msg) {
    process.nextTick(function () {
      cb(new Error(msg))
    })
  }
}

function getURL () {
  return window.URL ||
  window.webkitURL ||
  window.mozURL ||
  window.msURL
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! drag-drop */ "./node_modules/drag-drop/index.js");
/* harmony import */ var drag_drop__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(drag_drop__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _turf_point_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/point-grid */ "./node_modules/@turf/point-grid/dist/es/index.js");
/* harmony import */ var _turf_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @turf/meta */ "./node_modules/@turf/meta/dist/es/index.js");
/* harmony import */ var svg_to_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! svg-to-image */ "./node_modules/svg-to-image/index.js");
/* harmony import */ var svg_to_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(svg_to_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var get_canvas_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! get-canvas-context */ "./node_modules/get-canvas-context/index.js");
/* harmony import */ var get_canvas_context__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(get_canvas_context__WEBPACK_IMPORTED_MODULE_4__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var map = new mapboxgl.Map({
  container: "map",
  style: "https://tiles.maps.elastic.co/styles/dark-matter/style.json",
  zoom: 2,
  center: [-180, 0]
});
var INF = 1e20;
var context = get_canvas_context__WEBPACK_IMPORTED_MODULE_4___default()("2d", {
  width: 200,
  height: 200,
  alpha: true
});

function makeRGBAImageData(alphaChannel, width, height) {
  var imageData = context.createImageData(width, height);
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  for (var i = 0; i < alphaChannel.length; i++) {
    imageData.data[4 * i + 0] = 0;
    imageData.data[4 * i + 1] = 0;
    imageData.data[4 * i + 2] = 0;
    imageData.data[4 * i + 3] = alphaChannel[i];
    ;
  }

  var data = new Uint8Array(imageData.data.buffer);
  return {
    width: width,
    height: height,
    data: data
  };
}

function establishDragDrop() {
  drag_drop__WEBPACK_IMPORTED_MODULE_0___default()("#dropTarget", function (files) {
    var _iterator = _createForOfIteratorHelper(files),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var file = _step.value;

        if (file.type !== "image/svg+xml") {
          throw new Error("".concat(file.name, " is not an SVG"));
        }

        file.text().then(function (svg) {
          svg_to_image__WEBPACK_IMPORTED_MODULE_3___default()(svg, function (err, image) {
            if (err) throw err;

            var _draw = draw(image, 64, 64),
                data = _draw.data,
                width = _draw.width,
                height = _draw.height;

            var img = makeRGBAImageData(data, width, height);
            map.addImage("my-custom-svg", img, {
              sdf: true
            });
            addIconLayer();
          });
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
}

var points = Object(_turf_point_grid__WEBPACK_IMPORTED_MODULE_1__["default"])([-205, -1, -136, 47], 200, {
  units: "kilometers"
});
Object(_turf_meta__WEBPACK_IMPORTED_MODULE_2__["propEach"])(points, function (cur, i) {
  cur.icon = "my-custom-svg";
  cur.color = "#" + Math.random().toString(16).substr(-6);
  cur.halo_color = "#" + Math.random().toString(16).substr(-6);
  cur.size = 1;
});

function draw(image, w, h) {
  var buffer = 3;
  var cutoff = 0.25;
  var radius = 8;
  var size = Math.max(w, h) + buffer * 4;
  var ctx = get_canvas_context__WEBPACK_IMPORTED_MODULE_4___default()("2d", {
    width: size,
    height: size,
    alpha: true
  });
  var gridOuter = new Float64Array(size * size);
  var gridInner = new Float64Array(size * size);
  var f = new Float64Array(size);
  var z = new Float64Array(size + 1);
  var v = new Int16Array(size);
  var glyphWidth = size - buffer;
  var glyphHeight = size - buffer;
  var width = glyphWidth + 2 * buffer;
  var height = glyphHeight + 2 * buffer;
  var len = width * height;
  var data = new Uint8ClampedArray(len);
  var glyph = {
    data: data,
    width: width,
    height: height,
    glyphWidth: glyphWidth,
    glyphHeight: glyphHeight
  };
  ctx.clearRect(buffer, buffer, glyphWidth, glyphHeight);
  ctx.drawImage(image, buffer, buffer, glyphWidth, glyphHeight);
  var imgData = ctx.getImageData(buffer, buffer, glyphWidth, glyphHeight);
  gridOuter.fill(INF, 0, len);
  gridInner.fill(0, 0, len);

  for (var y = 0; y < glyphHeight; y++) {
    for (var x = 0; x < glyphWidth; x++) {
      var a = imgData.data[4 * (y * glyphWidth + x) + 3] / 255; // alpha value

      if (a === 0) {
        continue;
      }

      var j = (y + buffer) * width + x + buffer;

      if (a === 1) {
        // fully drawn pixels
        gridOuter[j] = 0;
        gridInner[j] = INF;
      } else {
        // aliased pixels
        var d = 0.5 - a;
        gridOuter[j] = d > 0 ? d * d : 0;
        gridInner[j] = d < 0 ? d * d : 0;
      }
    }
  }

  edt(gridOuter, width, height, f, v, z);
  edt(gridInner, width, height, f, v, z);

  for (var i = 0; i < len; i++) {
    var _d = Math.sqrt(gridOuter[i]) - Math.sqrt(gridInner[i]);

    data[i] = Math.round(255 - 255 * (_d / radius + cutoff));
  }

  return glyph;
} // 2D Euclidean squared distance transform by Felzenszwalb & Huttenlocher https://cs.brown.edu/~pff/papers/dt-final.pdf


function edt(data, width, height, f, v, z) {
  for (var x = 0; x < width; x++) {
    edt1d(data, x, width, height, f, v, z);
  }

  for (var y = 0; y < height; y++) {
    edt1d(data, y * width, 1, width, f, v, z);
  }
} // 1D squared distance transform


function edt1d(grid, offset, stride, length, f, v, z) {
  v[0] = 0;
  z[0] = -INF;
  z[1] = INF;
  f[0] = grid[offset];

  for (var q = 1, k = 0, s = 0; q < length; q++) {
    f[q] = grid[offset + q * stride];
    var q2 = q * q;

    do {
      var r = v[k];
      s = (f[q] - f[r] + q2 - r * r) / (q - r) / 2;
    } while (s <= z[k] && --k > -1);

    k++;
    v[k] = q;
    z[k] = s;
    z[k + 1] = INF;
  }

  for (var _q = 0, _k = 0; _q < length; _q++) {
    while (z[_k + 1] < _q) {
      _k++;
    }

    var _r = v[_k];
    var qr = _q - _r;
    grid[offset + _q * stride] = f[_r] + qr * qr;
  }
}

function addIconLayer() {
  map.addLayer({
    id: "points",
    type: "symbol",
    source: {
      type: "geojson",
      data: points
    },
    layout: {
      "icon-image": ["get", "icon"],
      "icon-size": ["get", "size"],
      "icon-allow-overlap": true
    },
    paint: {
      "icon-color": ["get", "color"],
      "icon-halo-width": ["get", "size"],
      "icon-halo-color": ["get", "halo_color"]
    }
  });
}

map.on("load", function () {
  establishDragDrop();
  var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  });
  map.on("mouseenter", "points", function (e) {
    map.getCanvas().style.cursor = "pointer";
    var coords = e.features[0].geometry.coordinates.slice();
    var iconName = e.features[0].properties.icon;
    popup.setLngLat(coords).setHTML(iconName).addTo(map);
  });
  map.on("mouseleave", "points", function (e) {
    map.getCanvas().style.cursor = "";
    popup.remove();
  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0dXJmL2Jib3gvZGlzdC9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHR1cmYvYm9vbGVhbi1wb2ludC1pbi1wb2x5Z29uL2Rpc3QvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0dXJmL2Jvb2xlYW4tcG9pbnQtb24tbGluZS9kaXN0L2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdHVyZi9ib29sZWFuLXdpdGhpbi9kaXN0L2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdHVyZi9kaXN0YW5jZS9kaXN0L2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdHVyZi9oZWxwZXJzL2Rpc3QvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0dXJmL2ludmFyaWFudC9kaXN0L2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdHVyZi9tZXRhL2Rpc3QvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B0dXJmL3BvaW50LWdyaWQvZGlzdC9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZHJhZy1kcm9wL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXQtY2FudmFzLWNvbnRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvYWQtaW1nL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3F1ZXVlLW1pY3JvdGFzay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcnVuLXBhcmFsbGVsL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmctdG8taW1hZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1hcCIsIm1hcGJveGdsIiwiTWFwIiwiY29udGFpbmVyIiwic3R5bGUiLCJ6b29tIiwiY2VudGVyIiwiSU5GIiwiY29udGV4dCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImFscGhhIiwibWFrZVJHQkFJbWFnZURhdGEiLCJhbHBoYUNoYW5uZWwiLCJpbWFnZURhdGEiLCJjcmVhdGVJbWFnZURhdGEiLCJjbGVhclJlY3QiLCJjYW52YXMiLCJpIiwibGVuZ3RoIiwiZGF0YSIsIlVpbnQ4QXJyYXkiLCJidWZmZXIiLCJlc3RhYmxpc2hEcmFnRHJvcCIsImRyYWdEcm9wIiwiZmlsZXMiLCJmaWxlIiwidHlwZSIsIkVycm9yIiwibmFtZSIsInRleHQiLCJ0aGVuIiwic3ZnIiwic3ZnVG9JbWFnZSIsImVyciIsImltYWdlIiwiZHJhdyIsImltZyIsImFkZEltYWdlIiwic2RmIiwiYWRkSWNvbkxheWVyIiwicG9pbnRzIiwicG9pbnRHcmlkIiwidW5pdHMiLCJwcm9wRWFjaCIsImN1ciIsImljb24iLCJjb2xvciIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0ciIsImhhbG9fY29sb3IiLCJzaXplIiwidyIsImgiLCJjdXRvZmYiLCJyYWRpdXMiLCJtYXgiLCJjdHgiLCJncmlkT3V0ZXIiLCJGbG9hdDY0QXJyYXkiLCJncmlkSW5uZXIiLCJmIiwieiIsInYiLCJJbnQxNkFycmF5IiwiZ2x5cGhXaWR0aCIsImdseXBoSGVpZ2h0IiwibGVuIiwiVWludDhDbGFtcGVkQXJyYXkiLCJnbHlwaCIsImRyYXdJbWFnZSIsImltZ0RhdGEiLCJnZXRJbWFnZURhdGEiLCJmaWxsIiwieSIsIngiLCJhIiwiaiIsImQiLCJlZHQiLCJzcXJ0Iiwicm91bmQiLCJlZHQxZCIsImdyaWQiLCJvZmZzZXQiLCJzdHJpZGUiLCJxIiwiayIsInMiLCJxMiIsInIiLCJxciIsImFkZExheWVyIiwiaWQiLCJzb3VyY2UiLCJsYXlvdXQiLCJwYWludCIsIm9uIiwicG9wdXAiLCJQb3B1cCIsImNsb3NlQnV0dG9uIiwiY2xvc2VPbkNsaWNrIiwiZSIsImdldENhbnZhcyIsImN1cnNvciIsImNvb3JkcyIsImZlYXR1cmVzIiwiZ2VvbWV0cnkiLCJjb29yZGluYXRlcyIsInNsaWNlIiwiaWNvbk5hbWUiLCJwcm9wZXJ0aWVzIiwic2V0TG5nTGF0Iiwic2V0SFRNTCIsImFkZFRvIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztB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ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgY29vcmRFYWNoIH0gZnJvbSBcIkB0dXJmL21ldGFcIjtcbi8qKlxuICogVGFrZXMgYSBzZXQgb2YgZmVhdHVyZXMsIGNhbGN1bGF0ZXMgdGhlIGJib3ggb2YgYWxsIGlucHV0IGZlYXR1cmVzLCBhbmQgcmV0dXJucyBhIGJvdW5kaW5nIGJveC5cbiAqXG4gKiBAbmFtZSBiYm94XG4gKiBAcGFyYW0ge0dlb0pTT059IGdlb2pzb24gYW55IEdlb0pTT04gb2JqZWN0XG4gKiBAcmV0dXJucyB7QkJveH0gYmJveCBleHRlbnQgaW4gW21pblgsIG1pblksIG1heFgsIG1heFldIG9yZGVyXG4gKiBAZXhhbXBsZVxuICogdmFyIGxpbmUgPSB0dXJmLmxpbmVTdHJpbmcoW1stNzQsIDQwXSwgWy03OCwgNDJdLCBbLTgyLCAzNV1dKTtcbiAqIHZhciBiYm94ID0gdHVyZi5iYm94KGxpbmUpO1xuICogdmFyIGJib3hQb2x5Z29uID0gdHVyZi5iYm94UG9seWdvbihiYm94KTtcbiAqXG4gKiAvL2FkZFRvTWFwXG4gKiB2YXIgYWRkVG9NYXAgPSBbbGluZSwgYmJveFBvbHlnb25dXG4gKi9cbmZ1bmN0aW9uIGJib3goZ2VvanNvbikge1xuICAgIHZhciByZXN1bHQgPSBbSW5maW5pdHksIEluZmluaXR5LCAtSW5maW5pdHksIC1JbmZpbml0eV07XG4gICAgY29vcmRFYWNoKGdlb2pzb24sIGZ1bmN0aW9uIChjb29yZCkge1xuICAgICAgICBpZiAocmVzdWx0WzBdID4gY29vcmRbMF0pIHtcbiAgICAgICAgICAgIHJlc3VsdFswXSA9IGNvb3JkWzBdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHRbMV0gPiBjb29yZFsxXSkge1xuICAgICAgICAgICAgcmVzdWx0WzFdID0gY29vcmRbMV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdFsyXSA8IGNvb3JkWzBdKSB7XG4gICAgICAgICAgICByZXN1bHRbMl0gPSBjb29yZFswXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0WzNdIDwgY29vcmRbMV0pIHtcbiAgICAgICAgICAgIHJlc3VsdFszXSA9IGNvb3JkWzFdO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmJib3hbXCJkZWZhdWx0XCJdID0gYmJveDtcbmV4cG9ydCBkZWZhdWx0IGJib3g7XG4iLCJpbXBvcnQgeyBnZXRDb29yZCwgZ2V0R2VvbSB9IGZyb20gXCJAdHVyZi9pbnZhcmlhbnRcIjtcbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRXZlbiVFMiU4MCU5M29kZF9ydWxlXG4vLyBtb2RpZmllZCBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vc3Vic3RhY2svcG9pbnQtaW4tcG9seWdvbi9ibG9iL21hc3Rlci9pbmRleC5qc1xuLy8gd2hpY2ggd2FzIG1vZGlmaWVkIGZyb20gaHR0cDovL3d3dy5lY3NlLnJwaS5lZHUvSG9tZXBhZ2VzL3dyZi9SZXNlYXJjaC9TaG9ydF9Ob3Rlcy9wbnBvbHkuaHRtbFxuLyoqXG4gKiBUYWtlcyBhIHtAbGluayBQb2ludH0gYW5kIGEge0BsaW5rIFBvbHlnb259IG9yIHtAbGluayBNdWx0aVBvbHlnb259IGFuZCBkZXRlcm1pbmVzIGlmIHRoZSBwb2ludFxuICogcmVzaWRlcyBpbnNpZGUgdGhlIHBvbHlnb24uIFRoZSBwb2x5Z29uIGNhbiBiZSBjb252ZXggb3IgY29uY2F2ZS4gVGhlIGZ1bmN0aW9uIGFjY291bnRzIGZvciBob2xlcy5cbiAqXG4gKiBAbmFtZSBib29sZWFuUG9pbnRJblBvbHlnb25cbiAqIEBwYXJhbSB7Q29vcmR9IHBvaW50IGlucHV0IHBvaW50XG4gKiBAcGFyYW0ge0ZlYXR1cmU8UG9seWdvbnxNdWx0aVBvbHlnb24+fSBwb2x5Z29uIGlucHV0IHBvbHlnb24gb3IgbXVsdGlwb2x5Z29uXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIE9wdGlvbmFsIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuaWdub3JlQm91bmRhcnk9ZmFsc2VdIFRydWUgaWYgcG9seWdvbiBib3VuZGFyeSBzaG91bGQgYmUgaWdub3JlZCB3aGVuIGRldGVybWluaW5nIGlmXG4gKiB0aGUgcG9pbnQgaXMgaW5zaWRlIHRoZSBwb2x5Z29uIG90aGVyd2lzZSBmYWxzZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIFBvaW50IGlzIGluc2lkZSB0aGUgUG9seWdvbjsgYGZhbHNlYCBpZiB0aGUgUG9pbnQgaXMgbm90IGluc2lkZSB0aGUgUG9seWdvblxuICogQGV4YW1wbGVcbiAqIHZhciBwdCA9IHR1cmYucG9pbnQoWy03NywgNDRdKTtcbiAqIHZhciBwb2x5ID0gdHVyZi5wb2x5Z29uKFtbXG4gKiAgIFstODEsIDQxXSxcbiAqICAgWy04MSwgNDddLFxuICogICBbLTcyLCA0N10sXG4gKiAgIFstNzIsIDQxXSxcbiAqICAgWy04MSwgNDFdXG4gKiBdXSk7XG4gKlxuICogdHVyZi5ib29sZWFuUG9pbnRJblBvbHlnb24ocHQsIHBvbHkpO1xuICogLy89IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYm9vbGVhblBvaW50SW5Qb2x5Z29uKHBvaW50LCBwb2x5Z29uLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAvLyB2YWxpZGF0aW9uXG4gICAgaWYgKCFwb2ludCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwb2ludCBpcyByZXF1aXJlZFwiKTtcbiAgICB9XG4gICAgaWYgKCFwb2x5Z29uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInBvbHlnb24gaXMgcmVxdWlyZWRcIik7XG4gICAgfVxuICAgIHZhciBwdCA9IGdldENvb3JkKHBvaW50KTtcbiAgICB2YXIgZ2VvbSA9IGdldEdlb20ocG9seWdvbik7XG4gICAgdmFyIHR5cGUgPSBnZW9tLnR5cGU7XG4gICAgdmFyIGJib3ggPSBwb2x5Z29uLmJib3g7XG4gICAgdmFyIHBvbHlzID0gZ2VvbS5jb29yZGluYXRlcztcbiAgICAvLyBRdWljayBlbGltaW5hdGlvbiBpZiBwb2ludCBpcyBub3QgaW5zaWRlIGJib3hcbiAgICBpZiAoYmJveCAmJiBpbkJCb3gocHQsIGJib3gpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIG5vcm1hbGl6ZSB0byBtdWx0aXBvbHlnb25cbiAgICBpZiAodHlwZSA9PT0gXCJQb2x5Z29uXCIpIHtcbiAgICAgICAgcG9seXMgPSBbcG9seXNdO1xuICAgIH1cbiAgICB2YXIgaW5zaWRlUG9seSA9IGZhbHNlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9seXMubGVuZ3RoICYmICFpbnNpZGVQb2x5OyBpKyspIHtcbiAgICAgICAgLy8gY2hlY2sgaWYgaXQgaXMgaW4gdGhlIG91dGVyIHJpbmcgZmlyc3RcbiAgICAgICAgaWYgKGluUmluZyhwdCwgcG9seXNbaV1bMF0sIG9wdGlvbnMuaWdub3JlQm91bmRhcnkpKSB7XG4gICAgICAgICAgICB2YXIgaW5Ib2xlID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgayA9IDE7XG4gICAgICAgICAgICAvLyBjaGVjayBmb3IgdGhlIHBvaW50IGluIGFueSBvZiB0aGUgaG9sZXNcbiAgICAgICAgICAgIHdoaWxlIChrIDwgcG9seXNbaV0ubGVuZ3RoICYmICFpbkhvbGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5SaW5nKHB0LCBwb2x5c1tpXVtrXSwgIW9wdGlvbnMuaWdub3JlQm91bmRhcnkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluSG9sZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaW5Ib2xlKSB7XG4gICAgICAgICAgICAgICAgaW5zaWRlUG9seSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGluc2lkZVBvbHk7XG59XG4vKipcbiAqIGluUmluZ1xuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHB0IFt4LHldXG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fSByaW5nIFtbeCx5XSwgW3gseV0sLi5dXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlnbm9yZUJvdW5kYXJ5IGlnbm9yZUJvdW5kYXJ5XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gaW5SaW5nXG4gKi9cbmZ1bmN0aW9uIGluUmluZyhwdCwgcmluZywgaWdub3JlQm91bmRhcnkpIHtcbiAgICB2YXIgaXNJbnNpZGUgPSBmYWxzZTtcbiAgICBpZiAocmluZ1swXVswXSA9PT0gcmluZ1tyaW5nLmxlbmd0aCAtIDFdWzBdICYmXG4gICAgICAgIHJpbmdbMF1bMV0gPT09IHJpbmdbcmluZy5sZW5ndGggLSAxXVsxXSkge1xuICAgICAgICByaW5nID0gcmluZy5zbGljZSgwLCByaW5nLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IHJpbmcubGVuZ3RoIC0gMTsgaSA8IHJpbmcubGVuZ3RoOyBqID0gaSsrKSB7XG4gICAgICAgIHZhciB4aSA9IHJpbmdbaV1bMF07XG4gICAgICAgIHZhciB5aSA9IHJpbmdbaV1bMV07XG4gICAgICAgIHZhciB4aiA9IHJpbmdbal1bMF07XG4gICAgICAgIHZhciB5aiA9IHJpbmdbal1bMV07XG4gICAgICAgIHZhciBvbkJvdW5kYXJ5ID0gcHRbMV0gKiAoeGkgLSB4aikgKyB5aSAqICh4aiAtIHB0WzBdKSArIHlqICogKHB0WzBdIC0geGkpID09PSAwICYmXG4gICAgICAgICAgICAoeGkgLSBwdFswXSkgKiAoeGogLSBwdFswXSkgPD0gMCAmJlxuICAgICAgICAgICAgKHlpIC0gcHRbMV0pICogKHlqIC0gcHRbMV0pIDw9IDA7XG4gICAgICAgIGlmIChvbkJvdW5kYXJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gIWlnbm9yZUJvdW5kYXJ5O1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbnRlcnNlY3QgPSB5aSA+IHB0WzFdICE9PSB5aiA+IHB0WzFdICYmXG4gICAgICAgICAgICBwdFswXSA8ICgoeGogLSB4aSkgKiAocHRbMV0gLSB5aSkpIC8gKHlqIC0geWkpICsgeGk7XG4gICAgICAgIGlmIChpbnRlcnNlY3QpIHtcbiAgICAgICAgICAgIGlzSW5zaWRlID0gIWlzSW5zaWRlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc0luc2lkZTtcbn1cbi8qKlxuICogaW5CQm94XG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7UG9zaXRpb259IHB0IHBvaW50IFt4LHldXG4gKiBAcGFyYW0ge0JCb3h9IGJib3ggQkJveCBbd2VzdCwgc291dGgsIGVhc3QsIG5vcnRoXVxuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUvZmFsc2UgaWYgcG9pbnQgaXMgaW5zaWRlIEJCb3hcbiAqL1xuZnVuY3Rpb24gaW5CQm94KHB0LCBiYm94KSB7XG4gICAgcmV0dXJuIChiYm94WzBdIDw9IHB0WzBdICYmIGJib3hbMV0gPD0gcHRbMV0gJiYgYmJveFsyXSA+PSBwdFswXSAmJiBiYm94WzNdID49IHB0WzFdKTtcbn1cbiIsImltcG9ydCB7IGdldENvb3JkLCBnZXRDb29yZHMgfSBmcm9tIFwiQHR1cmYvaW52YXJpYW50XCI7XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhIHBvaW50IGlzIG9uIGEgbGluZS4gQWNjZXB0cyBhIG9wdGlvbmFsIHBhcmFtZXRlciB0byBpZ25vcmUgdGhlXG4gKiBzdGFydCBhbmQgZW5kIHZlcnRpY2VzIG9mIHRoZSBsaW5lc3RyaW5nLlxuICpcbiAqIEBuYW1lIGJvb2xlYW5Qb2ludE9uTGluZVxuICogQHBhcmFtIHtDb29yZH0gcHQgR2VvSlNPTiBQb2ludFxuICogQHBhcmFtIHtGZWF0dXJlPExpbmVTdHJpbmc+fSBsaW5lIEdlb0pTT04gTGluZVN0cmluZ1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBPcHRpb25hbCBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmlnbm9yZUVuZFZlcnRpY2VzPWZhbHNlXSB3aGV0aGVyIHRvIGlnbm9yZSB0aGUgc3RhcnQgYW5kIGVuZCB2ZXJ0aWNlcy5cbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlL2ZhbHNlXG4gKiBAZXhhbXBsZVxuICogdmFyIHB0ID0gdHVyZi5wb2ludChbMCwgMF0pO1xuICogdmFyIGxpbmUgPSB0dXJmLmxpbmVTdHJpbmcoW1stMSwgLTFdLFsxLCAxXSxbMS41LCAyLjJdXSk7XG4gKiB2YXIgaXNQb2ludE9uTGluZSA9IHR1cmYuYm9vbGVhblBvaW50T25MaW5lKHB0LCBsaW5lKTtcbiAqIC8vPXRydWVcbiAqL1xuZnVuY3Rpb24gYm9vbGVhblBvaW50T25MaW5lKHB0LCBsaW5lLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAvLyBOb3JtYWxpemUgaW5wdXRzXG4gICAgdmFyIHB0Q29vcmRzID0gZ2V0Q29vcmQocHQpO1xuICAgIHZhciBsaW5lQ29vcmRzID0gZ2V0Q29vcmRzKGxpbmUpO1xuICAgIC8vIE1haW5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVDb29yZHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIHZhciBpZ25vcmVCb3VuZGFyeSA9IGZhbHNlO1xuICAgICAgICBpZiAob3B0aW9ucy5pZ25vcmVFbmRWZXJ0aWNlcykge1xuICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZ25vcmVCb3VuZGFyeSA9IFwic3RhcnRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpID09PSBsaW5lQ29vcmRzLmxlbmd0aCAtIDIpIHtcbiAgICAgICAgICAgICAgICBpZ25vcmVCb3VuZGFyeSA9IFwiZW5kXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSA9PT0gMCAmJiBpICsgMSA9PT0gbGluZUNvb3Jkcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgaWdub3JlQm91bmRhcnkgPSBcImJvdGhcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQb2ludE9uTGluZVNlZ21lbnQobGluZUNvb3Jkc1tpXSwgbGluZUNvb3Jkc1tpICsgMV0sIHB0Q29vcmRzLCBpZ25vcmVCb3VuZGFyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbi8vIFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80ODMzODIzLzE5NzkwODVcbi8qKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7UG9zaXRpb259IGxpbmVTZWdtZW50U3RhcnQgY29vcmQgcGFpciBvZiBzdGFydCBvZiBsaW5lXG4gKiBAcGFyYW0ge1Bvc2l0aW9ufSBsaW5lU2VnbWVudEVuZCBjb29yZCBwYWlyIG9mIGVuZCBvZiBsaW5lXG4gKiBAcGFyYW0ge1Bvc2l0aW9ufSBwdCBjb29yZCBwYWlyIG9mIHBvaW50IHRvIGNoZWNrXG4gKiBAcGFyYW0ge2Jvb2xlYW58c3RyaW5nfSBleGNsdWRlQm91bmRhcnkgd2hldGhlciB0aGUgcG9pbnQgaXMgYWxsb3dlZCB0byBmYWxsIG9uIHRoZSBsaW5lIGVuZHMuXG4gKiBJZiB0cnVlIHdoaWNoIGVuZCB0byBpZ25vcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZS9mYWxzZVxuICovXG5mdW5jdGlvbiBpc1BvaW50T25MaW5lU2VnbWVudChsaW5lU2VnbWVudFN0YXJ0LCBsaW5lU2VnbWVudEVuZCwgcHQsIGV4Y2x1ZGVCb3VuZGFyeSkge1xuICAgIHZhciB4ID0gcHRbMF07XG4gICAgdmFyIHkgPSBwdFsxXTtcbiAgICB2YXIgeDEgPSBsaW5lU2VnbWVudFN0YXJ0WzBdO1xuICAgIHZhciB5MSA9IGxpbmVTZWdtZW50U3RhcnRbMV07XG4gICAgdmFyIHgyID0gbGluZVNlZ21lbnRFbmRbMF07XG4gICAgdmFyIHkyID0gbGluZVNlZ21lbnRFbmRbMV07XG4gICAgdmFyIGR4YyA9IHB0WzBdIC0geDE7XG4gICAgdmFyIGR5YyA9IHB0WzFdIC0geTE7XG4gICAgdmFyIGR4bCA9IHgyIC0geDE7XG4gICAgdmFyIGR5bCA9IHkyIC0geTE7XG4gICAgdmFyIGNyb3NzID0gZHhjICogZHlsIC0gZHljICogZHhsO1xuICAgIGlmIChjcm9zcyAhPT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghZXhjbHVkZUJvdW5kYXJ5KSB7XG4gICAgICAgIGlmIChNYXRoLmFicyhkeGwpID49IE1hdGguYWJzKGR5bCkpIHtcbiAgICAgICAgICAgIHJldHVybiBkeGwgPiAwID8geDEgPD0geCAmJiB4IDw9IHgyIDogeDIgPD0geCAmJiB4IDw9IHgxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkeWwgPiAwID8geTEgPD0geSAmJiB5IDw9IHkyIDogeTIgPD0geSAmJiB5IDw9IHkxO1xuICAgIH1cbiAgICBlbHNlIGlmIChleGNsdWRlQm91bmRhcnkgPT09IFwic3RhcnRcIikge1xuICAgICAgICBpZiAoTWF0aC5hYnMoZHhsKSA+PSBNYXRoLmFicyhkeWwpKSB7XG4gICAgICAgICAgICByZXR1cm4gZHhsID4gMCA/IHgxIDwgeCAmJiB4IDw9IHgyIDogeDIgPD0geCAmJiB4IDwgeDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGR5bCA+IDAgPyB5MSA8IHkgJiYgeSA8PSB5MiA6IHkyIDw9IHkgJiYgeSA8IHkxO1xuICAgIH1cbiAgICBlbHNlIGlmIChleGNsdWRlQm91bmRhcnkgPT09IFwiZW5kXCIpIHtcbiAgICAgICAgaWYgKE1hdGguYWJzKGR4bCkgPj0gTWF0aC5hYnMoZHlsKSkge1xuICAgICAgICAgICAgcmV0dXJuIGR4bCA+IDAgPyB4MSA8PSB4ICYmIHggPCB4MiA6IHgyIDwgeCAmJiB4IDw9IHgxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkeWwgPiAwID8geTEgPD0geSAmJiB5IDwgeTIgOiB5MiA8IHkgJiYgeSA8PSB5MTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXhjbHVkZUJvdW5kYXJ5ID09PSBcImJvdGhcIikge1xuICAgICAgICBpZiAoTWF0aC5hYnMoZHhsKSA+PSBNYXRoLmFicyhkeWwpKSB7XG4gICAgICAgICAgICByZXR1cm4gZHhsID4gMCA/IHgxIDwgeCAmJiB4IDwgeDIgOiB4MiA8IHggJiYgeCA8IHgxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkeWwgPiAwID8geTEgPCB5ICYmIHkgPCB5MiA6IHkyIDwgeSAmJiB5IDwgeTE7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBkZWZhdWx0IGJvb2xlYW5Qb2ludE9uTGluZTtcbiIsImltcG9ydCBjYWxjQmJveCBmcm9tIFwiQHR1cmYvYmJveFwiO1xuaW1wb3J0IGJvb2xlYW5Qb2ludE9uTGluZSBmcm9tIFwiQHR1cmYvYm9vbGVhbi1wb2ludC1vbi1saW5lXCI7XG5pbXBvcnQgYm9vbGVhblBvaW50SW5Qb2x5Z29uIGZyb20gXCJAdHVyZi9ib29sZWFuLXBvaW50LWluLXBvbHlnb25cIjtcbmltcG9ydCB7IGdldEdlb20gfSBmcm9tIFwiQHR1cmYvaW52YXJpYW50XCI7XG4vKipcbiAqIEJvb2xlYW4td2l0aGluIHJldHVybnMgdHJ1ZSBpZiB0aGUgZmlyc3QgZ2VvbWV0cnkgaXMgY29tcGxldGVseSB3aXRoaW4gdGhlIHNlY29uZCBnZW9tZXRyeS5cbiAqIFRoZSBpbnRlcmlvcnMgb2YgYm90aCBnZW9tZXRyaWVzIG11c3QgaW50ZXJzZWN0IGFuZCwgdGhlIGludGVyaW9yIGFuZCBib3VuZGFyeSBvZiB0aGUgcHJpbWFyeSAoZ2VvbWV0cnkgYSlcbiAqIG11c3Qgbm90IGludGVyc2VjdCB0aGUgZXh0ZXJpb3Igb2YgdGhlIHNlY29uZGFyeSAoZ2VvbWV0cnkgYikuXG4gKiBCb29sZWFuLXdpdGhpbiByZXR1cm5zIHRoZSBleGFjdCBvcHBvc2l0ZSByZXN1bHQgb2YgdGhlIGBAdHVyZi9ib29sZWFuLWNvbnRhaW5zYC5cbiAqXG4gKiBAbmFtZSBib29sZWFuV2l0aGluXG4gKiBAcGFyYW0ge0dlb21ldHJ5fEZlYXR1cmU8YW55Pn0gZmVhdHVyZTEgR2VvSlNPTiBGZWF0dXJlIG9yIEdlb21ldHJ5XG4gKiBAcGFyYW0ge0dlb21ldHJ5fEZlYXR1cmU8YW55Pn0gZmVhdHVyZTIgR2VvSlNPTiBGZWF0dXJlIG9yIEdlb21ldHJ5XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZS9mYWxzZVxuICogQGV4YW1wbGVcbiAqIHZhciBsaW5lID0gdHVyZi5saW5lU3RyaW5nKFtbMSwgMV0sIFsxLCAyXSwgWzEsIDNdLCBbMSwgNF1dKTtcbiAqIHZhciBwb2ludCA9IHR1cmYucG9pbnQoWzEsIDJdKTtcbiAqXG4gKiB0dXJmLmJvb2xlYW5XaXRoaW4ocG9pbnQsIGxpbmUpO1xuICogLy89dHJ1ZVxuICovXG5mdW5jdGlvbiBib29sZWFuV2l0aGluKGZlYXR1cmUxLCBmZWF0dXJlMikge1xuICAgIHZhciBnZW9tMSA9IGdldEdlb20oZmVhdHVyZTEpO1xuICAgIHZhciBnZW9tMiA9IGdldEdlb20oZmVhdHVyZTIpO1xuICAgIHZhciB0eXBlMSA9IGdlb20xLnR5cGU7XG4gICAgdmFyIHR5cGUyID0gZ2VvbTIudHlwZTtcbiAgICBzd2l0Y2ggKHR5cGUxKSB7XG4gICAgICAgIGNhc2UgXCJQb2ludFwiOlxuICAgICAgICAgICAgc3dpdGNoICh0eXBlMikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJNdWx0aVBvaW50XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1BvaW50SW5NdWx0aVBvaW50KGdlb20xLCBnZW9tMik7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkxpbmVTdHJpbmdcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJvb2xlYW5Qb2ludE9uTGluZShnZW9tMSwgZ2VvbTIsIHsgaWdub3JlRW5kVmVydGljZXM6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgY2FzZSBcIlBvbHlnb25cIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwiTXVsdGlQb2x5Z29uXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBib29sZWFuUG9pbnRJblBvbHlnb24oZ2VvbTEsIGdlb20yLCB7IGlnbm9yZUJvdW5kYXJ5OiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImZlYXR1cmUyIFwiICsgdHlwZTIgKyBcIiBnZW9tZXRyeSBub3Qgc3VwcG9ydGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIFwiTXVsdGlQb2ludFwiOlxuICAgICAgICAgICAgc3dpdGNoICh0eXBlMikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJNdWx0aVBvaW50XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpc011bHRpUG9pbnRJbk11bHRpUG9pbnQoZ2VvbTEsIGdlb20yKTtcbiAgICAgICAgICAgICAgICBjYXNlIFwiTGluZVN0cmluZ1wiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNNdWx0aVBvaW50T25MaW5lKGdlb20xLCBnZW9tMik7XG4gICAgICAgICAgICAgICAgY2FzZSBcIlBvbHlnb25cIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwiTXVsdGlQb2x5Z29uXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpc011bHRpUG9pbnRJblBvbHkoZ2VvbTEsIGdlb20yKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJmZWF0dXJlMiBcIiArIHR5cGUyICsgXCIgZ2VvbWV0cnkgbm90IHN1cHBvcnRlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBcIkxpbmVTdHJpbmdcIjpcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZTIpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiTGluZVN0cmluZ1wiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNMaW5lT25MaW5lKGdlb20xLCBnZW9tMik7XG4gICAgICAgICAgICAgICAgY2FzZSBcIlBvbHlnb25cIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwiTXVsdGlQb2x5Z29uXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpc0xpbmVJblBvbHkoZ2VvbTEsIGdlb20yKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJmZWF0dXJlMiBcIiArIHR5cGUyICsgXCIgZ2VvbWV0cnkgbm90IHN1cHBvcnRlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBcIlBvbHlnb25cIjpcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZTIpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiUG9seWdvblwiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJNdWx0aVBvbHlnb25cIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzUG9seUluUG9seShnZW9tMSwgZ2VvbTIpO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImZlYXR1cmUyIFwiICsgdHlwZTIgKyBcIiBnZW9tZXRyeSBub3Qgc3VwcG9ydGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZmVhdHVyZTEgXCIgKyB0eXBlMSArIFwiIGdlb21ldHJ5IG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgfVxufVxuZnVuY3Rpb24gaXNQb2ludEluTXVsdGlQb2ludChwb2ludCwgbXVsdGlQb2ludCkge1xuICAgIHZhciBpO1xuICAgIHZhciBvdXRwdXQgPSBmYWxzZTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbXVsdGlQb2ludC5jb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY29tcGFyZUNvb3JkcyhtdWx0aVBvaW50LmNvb3JkaW5hdGVzW2ldLCBwb2ludC5jb29yZGluYXRlcykpIHtcbiAgICAgICAgICAgIG91dHB1dCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuZnVuY3Rpb24gaXNNdWx0aVBvaW50SW5NdWx0aVBvaW50KG11bHRpUG9pbnQxLCBtdWx0aVBvaW50Mikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXVsdGlQb2ludDEuY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGFueU1hdGNoID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkyID0gMDsgaTIgPCBtdWx0aVBvaW50Mi5jb29yZGluYXRlcy5sZW5ndGg7IGkyKyspIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlQ29vcmRzKG11bHRpUG9pbnQxLmNvb3JkaW5hdGVzW2ldLCBtdWx0aVBvaW50Mi5jb29yZGluYXRlc1tpMl0pKSB7XG4gICAgICAgICAgICAgICAgYW55TWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghYW55TWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzTXVsdGlQb2ludE9uTGluZShtdWx0aVBvaW50LCBsaW5lU3RyaW5nKSB7XG4gICAgdmFyIGZvdW5kSW5zaWRlUG9pbnQgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG11bHRpUG9pbnQuY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFib29sZWFuUG9pbnRPbkxpbmUobXVsdGlQb2ludC5jb29yZGluYXRlc1tpXSwgbGluZVN0cmluZykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZvdW5kSW5zaWRlUG9pbnQpIHtcbiAgICAgICAgICAgIGZvdW5kSW5zaWRlUG9pbnQgPSBib29sZWFuUG9pbnRPbkxpbmUobXVsdGlQb2ludC5jb29yZGluYXRlc1tpXSwgbGluZVN0cmluZywgeyBpZ25vcmVFbmRWZXJ0aWNlczogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZm91bmRJbnNpZGVQb2ludDtcbn1cbmZ1bmN0aW9uIGlzTXVsdGlQb2ludEluUG9seShtdWx0aVBvaW50LCBwb2x5Z29uKSB7XG4gICAgdmFyIG91dHB1dCA9IHRydWU7XG4gICAgdmFyIG9uZUluc2lkZSA9IGZhbHNlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXVsdGlQb2ludC5jb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgaXNJbnNpZGUgPSBib29sZWFuUG9pbnRJblBvbHlnb24obXVsdGlQb2ludC5jb29yZGluYXRlc1sxXSwgcG9seWdvbik7XG4gICAgICAgIGlmICghaXNJbnNpZGUpIHtcbiAgICAgICAgICAgIG91dHB1dCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvbmVJbnNpZGUpIHtcbiAgICAgICAgICAgIGlzSW5zaWRlID0gYm9vbGVhblBvaW50SW5Qb2x5Z29uKG11bHRpUG9pbnQuY29vcmRpbmF0ZXNbMV0sIHBvbHlnb24sIHtcbiAgICAgICAgICAgICAgICBpZ25vcmVCb3VuZGFyeTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQgJiYgaXNJbnNpZGU7XG59XG5mdW5jdGlvbiBpc0xpbmVPbkxpbmUobGluZVN0cmluZzEsIGxpbmVTdHJpbmcyKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lU3RyaW5nMS5jb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIWJvb2xlYW5Qb2ludE9uTGluZShsaW5lU3RyaW5nMS5jb29yZGluYXRlc1tpXSwgbGluZVN0cmluZzIpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBpc0xpbmVJblBvbHkobGluZXN0cmluZywgcG9seWdvbikge1xuICAgIHZhciBwb2x5QmJveCA9IGNhbGNCYm94KHBvbHlnb24pO1xuICAgIHZhciBsaW5lQmJveCA9IGNhbGNCYm94KGxpbmVzdHJpbmcpO1xuICAgIGlmICghZG9CQm94T3ZlcmxhcChwb2x5QmJveCwgbGluZUJib3gpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGZvdW5kSW5zaWRlUG9pbnQgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzdHJpbmcuY29vcmRpbmF0ZXMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGlmICghYm9vbGVhblBvaW50SW5Qb2x5Z29uKGxpbmVzdHJpbmcuY29vcmRpbmF0ZXNbaV0sIHBvbHlnb24pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmb3VuZEluc2lkZVBvaW50KSB7XG4gICAgICAgICAgICBmb3VuZEluc2lkZVBvaW50ID0gYm9vbGVhblBvaW50SW5Qb2x5Z29uKGxpbmVzdHJpbmcuY29vcmRpbmF0ZXNbaV0sIHBvbHlnb24sIHsgaWdub3JlQm91bmRhcnk6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmb3VuZEluc2lkZVBvaW50KSB7XG4gICAgICAgICAgICB2YXIgbWlkcG9pbnQgPSBnZXRNaWRwb2ludChsaW5lc3RyaW5nLmNvb3JkaW5hdGVzW2ldLCBsaW5lc3RyaW5nLmNvb3JkaW5hdGVzW2kgKyAxXSk7XG4gICAgICAgICAgICBmb3VuZEluc2lkZVBvaW50ID0gYm9vbGVhblBvaW50SW5Qb2x5Z29uKG1pZHBvaW50LCBwb2x5Z29uLCB7XG4gICAgICAgICAgICAgICAgaWdub3JlQm91bmRhcnk6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZm91bmRJbnNpZGVQb2ludDtcbn1cbi8qKlxuICogSXMgUG9seWdvbjIgaW4gUG9seWdvbjFcbiAqIE9ubHkgdGFrZXMgaW50byBhY2NvdW50IG91dGVyIHJpbmdzXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7R2VvbWV0cnl8RmVhdHVyZTxQb2x5Z29uPn0gZmVhdHVyZTEgUG9seWdvbjFcbiAqIEBwYXJhbSB7R2VvbWV0cnl8RmVhdHVyZTxQb2x5Z29uPn0gZmVhdHVyZTIgUG9seWdvbjJcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlL2ZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzUG9seUluUG9seShmZWF0dXJlMSwgZmVhdHVyZTIpIHtcbiAgICB2YXIgcG9seTFCYm94ID0gY2FsY0Jib3goZmVhdHVyZTEpO1xuICAgIHZhciBwb2x5MkJib3ggPSBjYWxjQmJveChmZWF0dXJlMik7XG4gICAgaWYgKCFkb0JCb3hPdmVybGFwKHBvbHkyQmJveCwgcG9seTFCYm94KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmVhdHVyZTEuY29vcmRpbmF0ZXNbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFib29sZWFuUG9pbnRJblBvbHlnb24oZmVhdHVyZTEuY29vcmRpbmF0ZXNbMF1baV0sIGZlYXR1cmUyKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gZG9CQm94T3ZlcmxhcChiYm94MSwgYmJveDIpIHtcbiAgICBpZiAoYmJveDFbMF0gPiBiYm94MlswXSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChiYm94MVsyXSA8IGJib3gyWzJdKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGJib3gxWzFdID4gYmJveDJbMV0pXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZiAoYmJveDFbM10gPCBiYm94MlszXSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xufVxuLyoqXG4gKiBjb21wYXJlQ29vcmRzXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7UG9zaXRpb259IHBhaXIxIHBvaW50IFt4LHldXG4gKiBAcGFyYW0ge1Bvc2l0aW9ufSBwYWlyMiBwb2ludCBbeCx5XVxuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUvZmFsc2UgaWYgY29vcmQgcGFpcnMgbWF0Y2hcbiAqL1xuZnVuY3Rpb24gY29tcGFyZUNvb3JkcyhwYWlyMSwgcGFpcjIpIHtcbiAgICByZXR1cm4gcGFpcjFbMF0gPT09IHBhaXIyWzBdICYmIHBhaXIxWzFdID09PSBwYWlyMlsxXTtcbn1cbi8qKlxuICogZ2V0TWlkcG9pbnRcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtQb3NpdGlvbn0gcGFpcjEgcG9pbnQgW3gseV1cbiAqIEBwYXJhbSB7UG9zaXRpb259IHBhaXIyIHBvaW50IFt4LHldXG4gKiBAcmV0dXJucyB7UG9zaXRpb259IG1pZHBvaW50IG9mIHBhaXIxIGFuZCBwYWlyMlxuICovXG5mdW5jdGlvbiBnZXRNaWRwb2ludChwYWlyMSwgcGFpcjIpIHtcbiAgICByZXR1cm4gWyhwYWlyMVswXSArIHBhaXIyWzBdKSAvIDIsIChwYWlyMVsxXSArIHBhaXIyWzFdKSAvIDJdO1xufVxuZXhwb3J0IGRlZmF1bHQgYm9vbGVhbldpdGhpbjtcbiIsImltcG9ydCB7IGdldENvb3JkIH0gZnJvbSBcIkB0dXJmL2ludmFyaWFudFwiO1xuaW1wb3J0IHsgcmFkaWFuc1RvTGVuZ3RoLCBkZWdyZWVzVG9SYWRpYW5zIH0gZnJvbSBcIkB0dXJmL2hlbHBlcnNcIjtcbi8vaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IYXZlcnNpbmVfZm9ybXVsYVxuLy9odHRwOi8vd3d3Lm1vdmFibGUtdHlwZS5jby51ay9zY3JpcHRzL2xhdGxvbmcuaHRtbFxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byB7QGxpbmsgUG9pbnR8cG9pbnRzfSBpbiBkZWdyZWVzLCByYWRpYW5zLCBtaWxlcywgb3Iga2lsb21ldGVycy5cbiAqIFRoaXMgdXNlcyB0aGUgW0hhdmVyc2luZSBmb3JtdWxhXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hhdmVyc2luZV9mb3JtdWxhKSB0byBhY2NvdW50IGZvciBnbG9iYWwgY3VydmF0dXJlLlxuICpcbiAqIEBuYW1lIGRpc3RhbmNlXG4gKiBAcGFyYW0ge0Nvb3JkfSBmcm9tIG9yaWdpbiBwb2ludFxuICogQHBhcmFtIHtDb29yZH0gdG8gZGVzdGluYXRpb24gcG9pbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gT3B0aW9uYWwgcGFyYW1ldGVyc1xuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnVuaXRzPSdraWxvbWV0ZXJzJ10gY2FuIGJlIGRlZ3JlZXMsIHJhZGlhbnMsIG1pbGVzLCBvciBraWxvbWV0ZXJzXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4gKiBAZXhhbXBsZVxuICogdmFyIGZyb20gPSB0dXJmLnBvaW50KFstNzUuMzQzLCAzOS45ODRdKTtcbiAqIHZhciB0byA9IHR1cmYucG9pbnQoWy03NS41MzQsIDM5LjEyM10pO1xuICogdmFyIG9wdGlvbnMgPSB7dW5pdHM6ICdtaWxlcyd9O1xuICpcbiAqIHZhciBkaXN0YW5jZSA9IHR1cmYuZGlzdGFuY2UoZnJvbSwgdG8sIG9wdGlvbnMpO1xuICpcbiAqIC8vYWRkVG9NYXBcbiAqIHZhciBhZGRUb01hcCA9IFtmcm9tLCB0b107XG4gKiBmcm9tLnByb3BlcnRpZXMuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAqIHRvLnByb3BlcnRpZXMuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAqL1xuZnVuY3Rpb24gZGlzdGFuY2UoZnJvbSwgdG8sIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBjb29yZGluYXRlczEgPSBnZXRDb29yZChmcm9tKTtcbiAgICB2YXIgY29vcmRpbmF0ZXMyID0gZ2V0Q29vcmQodG8pO1xuICAgIHZhciBkTGF0ID0gZGVncmVlc1RvUmFkaWFucyhjb29yZGluYXRlczJbMV0gLSBjb29yZGluYXRlczFbMV0pO1xuICAgIHZhciBkTG9uID0gZGVncmVlc1RvUmFkaWFucyhjb29yZGluYXRlczJbMF0gLSBjb29yZGluYXRlczFbMF0pO1xuICAgIHZhciBsYXQxID0gZGVncmVlc1RvUmFkaWFucyhjb29yZGluYXRlczFbMV0pO1xuICAgIHZhciBsYXQyID0gZGVncmVlc1RvUmFkaWFucyhjb29yZGluYXRlczJbMV0pO1xuICAgIHZhciBhID0gTWF0aC5wb3coTWF0aC5zaW4oZExhdCAvIDIpLCAyKSArXG4gICAgICAgIE1hdGgucG93KE1hdGguc2luKGRMb24gLyAyKSwgMikgKiBNYXRoLmNvcyhsYXQxKSAqIE1hdGguY29zKGxhdDIpO1xuICAgIHJldHVybiByYWRpYW5zVG9MZW5ndGgoMiAqIE1hdGguYXRhbjIoTWF0aC5zcXJ0KGEpLCBNYXRoLnNxcnQoMSAtIGEpKSwgb3B0aW9ucy51bml0cyk7XG59XG5leHBvcnQgZGVmYXVsdCBkaXN0YW5jZTtcbiIsIi8qKlxuICogQG1vZHVsZSBoZWxwZXJzXG4gKi9cbi8qKlxuICogRWFydGggUmFkaXVzIHVzZWQgd2l0aCB0aGUgSGFydmVzaW5lIGZvcm11bGEgYW5kIGFwcHJveGltYXRlcyB1c2luZyBhIHNwaGVyaWNhbCAobm9uLWVsbGlwc29pZCkgRWFydGguXG4gKlxuICogQG1lbWJlcm9mIGhlbHBlcnNcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCB2YXIgZWFydGhSYWRpdXMgPSA2MzcxMDA4Ljg7XG4vKipcbiAqIFVuaXQgb2YgbWVhc3VyZW1lbnQgZmFjdG9ycyB1c2luZyBhIHNwaGVyaWNhbCAobm9uLWVsbGlwc29pZCkgZWFydGggcmFkaXVzLlxuICpcbiAqIEBtZW1iZXJvZiBoZWxwZXJzXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5leHBvcnQgdmFyIGZhY3RvcnMgPSB7XG4gICAgY2VudGltZXRlcnM6IGVhcnRoUmFkaXVzICogMTAwLFxuICAgIGNlbnRpbWV0cmVzOiBlYXJ0aFJhZGl1cyAqIDEwMCxcbiAgICBkZWdyZWVzOiBlYXJ0aFJhZGl1cyAvIDExMTMyNSxcbiAgICBmZWV0OiBlYXJ0aFJhZGl1cyAqIDMuMjgwODQsXG4gICAgaW5jaGVzOiBlYXJ0aFJhZGl1cyAqIDM5LjM3LFxuICAgIGtpbG9tZXRlcnM6IGVhcnRoUmFkaXVzIC8gMTAwMCxcbiAgICBraWxvbWV0cmVzOiBlYXJ0aFJhZGl1cyAvIDEwMDAsXG4gICAgbWV0ZXJzOiBlYXJ0aFJhZGl1cyxcbiAgICBtZXRyZXM6IGVhcnRoUmFkaXVzLFxuICAgIG1pbGVzOiBlYXJ0aFJhZGl1cyAvIDE2MDkuMzQ0LFxuICAgIG1pbGxpbWV0ZXJzOiBlYXJ0aFJhZGl1cyAqIDEwMDAsXG4gICAgbWlsbGltZXRyZXM6IGVhcnRoUmFkaXVzICogMTAwMCxcbiAgICBuYXV0aWNhbG1pbGVzOiBlYXJ0aFJhZGl1cyAvIDE4NTIsXG4gICAgcmFkaWFuczogMSxcbiAgICB5YXJkczogZWFydGhSYWRpdXMgLyAxLjA5MzYsXG59O1xuLyoqXG4gKiBVbml0cyBvZiBtZWFzdXJlbWVudCBmYWN0b3JzIGJhc2VkIG9uIDEgbWV0ZXIuXG4gKlxuICogQG1lbWJlcm9mIGhlbHBlcnNcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmV4cG9ydCB2YXIgdW5pdHNGYWN0b3JzID0ge1xuICAgIGNlbnRpbWV0ZXJzOiAxMDAsXG4gICAgY2VudGltZXRyZXM6IDEwMCxcbiAgICBkZWdyZWVzOiAxIC8gMTExMzI1LFxuICAgIGZlZXQ6IDMuMjgwODQsXG4gICAgaW5jaGVzOiAzOS4zNyxcbiAgICBraWxvbWV0ZXJzOiAxIC8gMTAwMCxcbiAgICBraWxvbWV0cmVzOiAxIC8gMTAwMCxcbiAgICBtZXRlcnM6IDEsXG4gICAgbWV0cmVzOiAxLFxuICAgIG1pbGVzOiAxIC8gMTYwOS4zNDQsXG4gICAgbWlsbGltZXRlcnM6IDEwMDAsXG4gICAgbWlsbGltZXRyZXM6IDEwMDAsXG4gICAgbmF1dGljYWxtaWxlczogMSAvIDE4NTIsXG4gICAgcmFkaWFuczogMSAvIGVhcnRoUmFkaXVzLFxuICAgIHlhcmRzOiAxIC8gMS4wOTM2LFxufTtcbi8qKlxuICogQXJlYSBvZiBtZWFzdXJlbWVudCBmYWN0b3JzIGJhc2VkIG9uIDEgc3F1YXJlIG1ldGVyLlxuICpcbiAqIEBtZW1iZXJvZiBoZWxwZXJzXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5leHBvcnQgdmFyIGFyZWFGYWN0b3JzID0ge1xuICAgIGFjcmVzOiAwLjAwMDI0NzEwNSxcbiAgICBjZW50aW1ldGVyczogMTAwMDAsXG4gICAgY2VudGltZXRyZXM6IDEwMDAwLFxuICAgIGZlZXQ6IDEwLjc2MzkxMDQxNyxcbiAgICBoZWN0YXJlczogMC4wMDAxLFxuICAgIGluY2hlczogMTU1MC4wMDMxMDAwMDYsXG4gICAga2lsb21ldGVyczogMC4wMDAwMDEsXG4gICAga2lsb21ldHJlczogMC4wMDAwMDEsXG4gICAgbWV0ZXJzOiAxLFxuICAgIG1ldHJlczogMSxcbiAgICBtaWxlczogMy44NmUtNyxcbiAgICBtaWxsaW1ldGVyczogMTAwMDAwMCxcbiAgICBtaWxsaW1ldHJlczogMTAwMDAwMCxcbiAgICB5YXJkczogMS4xOTU5OTAwNDYsXG59O1xuLyoqXG4gKiBXcmFwcyBhIEdlb0pTT04ge0BsaW5rIEdlb21ldHJ5fSBpbiBhIEdlb0pTT04ge0BsaW5rIEZlYXR1cmV9LlxuICpcbiAqIEBuYW1lIGZlYXR1cmVcbiAqIEBwYXJhbSB7R2VvbWV0cnl9IGdlb21ldHJ5IGlucHV0IGdlb21ldHJ5XG4gKiBAcGFyYW0ge09iamVjdH0gW3Byb3BlcnRpZXM9e31dIGFuIE9iamVjdCBvZiBrZXktdmFsdWUgcGFpcnMgdG8gYWRkIGFzIHByb3BlcnRpZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gT3B0aW9uYWwgUGFyYW1ldGVyc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbb3B0aW9ucy5iYm94XSBCb3VuZGluZyBCb3ggQXJyYXkgW3dlc3QsIHNvdXRoLCBlYXN0LCBub3J0aF0gYXNzb2NpYXRlZCB3aXRoIHRoZSBGZWF0dXJlXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtvcHRpb25zLmlkXSBJZGVudGlmaWVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgRmVhdHVyZVxuICogQHJldHVybnMge0ZlYXR1cmV9IGEgR2VvSlNPTiBGZWF0dXJlXG4gKiBAZXhhbXBsZVxuICogdmFyIGdlb21ldHJ5ID0ge1xuICogICBcInR5cGVcIjogXCJQb2ludFwiLFxuICogICBcImNvb3JkaW5hdGVzXCI6IFsxMTAsIDUwXVxuICogfTtcbiAqXG4gKiB2YXIgZmVhdHVyZSA9IHR1cmYuZmVhdHVyZShnZW9tZXRyeSk7XG4gKlxuICogLy89ZmVhdHVyZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmVhdHVyZShnZW9tLCBwcm9wZXJ0aWVzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgZmVhdCA9IHsgdHlwZTogXCJGZWF0dXJlXCIgfTtcbiAgICBpZiAob3B0aW9ucy5pZCA9PT0gMCB8fCBvcHRpb25zLmlkKSB7XG4gICAgICAgIGZlYXQuaWQgPSBvcHRpb25zLmlkO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5iYm94KSB7XG4gICAgICAgIGZlYXQuYmJveCA9IG9wdGlvbnMuYmJveDtcbiAgICB9XG4gICAgZmVhdC5wcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCB7fTtcbiAgICBmZWF0Lmdlb21ldHJ5ID0gZ2VvbTtcbiAgICByZXR1cm4gZmVhdDtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIEdlb0pTT04ge0BsaW5rIEdlb21ldHJ5fSBmcm9tIGEgR2VvbWV0cnkgc3RyaW5nIHR5cGUgJiBjb29yZGluYXRlcy5cbiAqIEZvciBHZW9tZXRyeUNvbGxlY3Rpb24gdHlwZSB1c2UgYGhlbHBlcnMuZ2VvbWV0cnlDb2xsZWN0aW9uYFxuICpcbiAqIEBuYW1lIGdlb21ldHJ5XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBHZW9tZXRyeSBUeXBlXG4gKiBAcGFyYW0ge0FycmF5PGFueT59IGNvb3JkaW5hdGVzIENvb3JkaW5hdGVzXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIE9wdGlvbmFsIFBhcmFtZXRlcnNcbiAqIEByZXR1cm5zIHtHZW9tZXRyeX0gYSBHZW9KU09OIEdlb21ldHJ5XG4gKiBAZXhhbXBsZVxuICogdmFyIHR5cGUgPSBcIlBvaW50XCI7XG4gKiB2YXIgY29vcmRpbmF0ZXMgPSBbMTEwLCA1MF07XG4gKiB2YXIgZ2VvbWV0cnkgPSB0dXJmLmdlb21ldHJ5KHR5cGUsIGNvb3JkaW5hdGVzKTtcbiAqIC8vID0+IGdlb21ldHJ5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW9tZXRyeSh0eXBlLCBjb29yZGluYXRlcywgX29wdGlvbnMpIHtcbiAgICBpZiAoX29wdGlvbnMgPT09IHZvaWQgMCkgeyBfb3B0aW9ucyA9IHt9OyB9XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJQb2ludFwiOlxuICAgICAgICAgICAgcmV0dXJuIHBvaW50KGNvb3JkaW5hdGVzKS5nZW9tZXRyeTtcbiAgICAgICAgY2FzZSBcIkxpbmVTdHJpbmdcIjpcbiAgICAgICAgICAgIHJldHVybiBsaW5lU3RyaW5nKGNvb3JkaW5hdGVzKS5nZW9tZXRyeTtcbiAgICAgICAgY2FzZSBcIlBvbHlnb25cIjpcbiAgICAgICAgICAgIHJldHVybiBwb2x5Z29uKGNvb3JkaW5hdGVzKS5nZW9tZXRyeTtcbiAgICAgICAgY2FzZSBcIk11bHRpUG9pbnRcIjpcbiAgICAgICAgICAgIHJldHVybiBtdWx0aVBvaW50KGNvb3JkaW5hdGVzKS5nZW9tZXRyeTtcbiAgICAgICAgY2FzZSBcIk11bHRpTGluZVN0cmluZ1wiOlxuICAgICAgICAgICAgcmV0dXJuIG11bHRpTGluZVN0cmluZyhjb29yZGluYXRlcykuZ2VvbWV0cnk7XG4gICAgICAgIGNhc2UgXCJNdWx0aVBvbHlnb25cIjpcbiAgICAgICAgICAgIHJldHVybiBtdWx0aVBvbHlnb24oY29vcmRpbmF0ZXMpLmdlb21ldHJ5O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHR5cGUgKyBcIiBpcyBpbnZhbGlkXCIpO1xuICAgIH1cbn1cbi8qKlxuICogQ3JlYXRlcyBhIHtAbGluayBQb2ludH0ge0BsaW5rIEZlYXR1cmV9IGZyb20gYSBQb3NpdGlvbi5cbiAqXG4gKiBAbmFtZSBwb2ludFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBjb29yZGluYXRlcyBsb25naXR1ZGUsIGxhdGl0dWRlIHBvc2l0aW9uIChlYWNoIGluIGRlY2ltYWwgZGVncmVlcylcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcHJvcGVydGllcz17fV0gYW4gT2JqZWN0IG9mIGtleS12YWx1ZSBwYWlycyB0byBhZGQgYXMgcHJvcGVydGllc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBPcHRpb25hbCBQYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtvcHRpb25zLmJib3hdIEJvdW5kaW5nIEJveCBBcnJheSBbd2VzdCwgc291dGgsIGVhc3QsIG5vcnRoXSBhc3NvY2lhdGVkIHdpdGggdGhlIEZlYXR1cmVcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW29wdGlvbnMuaWRdIElkZW50aWZpZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBGZWF0dXJlXG4gKiBAcmV0dXJucyB7RmVhdHVyZTxQb2ludD59IGEgUG9pbnQgZmVhdHVyZVxuICogQGV4YW1wbGVcbiAqIHZhciBwb2ludCA9IHR1cmYucG9pbnQoWy03NS4zNDMsIDM5Ljk4NF0pO1xuICpcbiAqIC8vPXBvaW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb2ludChjb29yZGluYXRlcywgcHJvcGVydGllcywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgaWYgKCFjb29yZGluYXRlcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjb29yZGluYXRlcyBpcyByZXF1aXJlZFwiKTtcbiAgICB9XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNvb3JkaW5hdGVzKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjb29yZGluYXRlcyBtdXN0IGJlIGFuIEFycmF5XCIpO1xuICAgIH1cbiAgICBpZiAoY29vcmRpbmF0ZXMubGVuZ3RoIDwgMikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjb29yZGluYXRlcyBtdXN0IGJlIGF0IGxlYXN0IDIgbnVtYmVycyBsb25nXCIpO1xuICAgIH1cbiAgICBpZiAoIWlzTnVtYmVyKGNvb3JkaW5hdGVzWzBdKSB8fCAhaXNOdW1iZXIoY29vcmRpbmF0ZXNbMV0pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImNvb3JkaW5hdGVzIG11c3QgY29udGFpbiBudW1iZXJzXCIpO1xuICAgIH1cbiAgICB2YXIgZ2VvbSA9IHtcbiAgICAgICAgdHlwZTogXCJQb2ludFwiLFxuICAgICAgICBjb29yZGluYXRlczogY29vcmRpbmF0ZXMsXG4gICAgfTtcbiAgICByZXR1cm4gZmVhdHVyZShnZW9tLCBwcm9wZXJ0aWVzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIHtAbGluayBQb2ludH0ge0BsaW5rIEZlYXR1cmVDb2xsZWN0aW9ufSBmcm9tIGFuIEFycmF5IG9mIFBvaW50IGNvb3JkaW5hdGVzLlxuICpcbiAqIEBuYW1lIHBvaW50c1xuICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gY29vcmRpbmF0ZXMgYW4gYXJyYXkgb2YgUG9pbnRzXG4gKiBAcGFyYW0ge09iamVjdH0gW3Byb3BlcnRpZXM9e31dIFRyYW5zbGF0ZSB0aGVzZSBwcm9wZXJ0aWVzIHRvIGVhY2ggRmVhdHVyZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBPcHRpb25hbCBQYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtvcHRpb25zLmJib3hdIEJvdW5kaW5nIEJveCBBcnJheSBbd2VzdCwgc291dGgsIGVhc3QsIG5vcnRoXVxuICogYXNzb2NpYXRlZCB3aXRoIHRoZSBGZWF0dXJlQ29sbGVjdGlvblxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbb3B0aW9ucy5pZF0gSWRlbnRpZmllciBhc3NvY2lhdGVkIHdpdGggdGhlIEZlYXR1cmVDb2xsZWN0aW9uXG4gKiBAcmV0dXJucyB7RmVhdHVyZUNvbGxlY3Rpb248UG9pbnQ+fSBQb2ludCBGZWF0dXJlXG4gKiBAZXhhbXBsZVxuICogdmFyIHBvaW50cyA9IHR1cmYucG9pbnRzKFtcbiAqICAgWy03NSwgMzldLFxuICogICBbLTgwLCA0NV0sXG4gKiAgIFstNzgsIDUwXVxuICogXSk7XG4gKlxuICogLy89cG9pbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb2ludHMoY29vcmRpbmF0ZXMsIHByb3BlcnRpZXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHJldHVybiBmZWF0dXJlQ29sbGVjdGlvbihjb29yZGluYXRlcy5tYXAoZnVuY3Rpb24gKGNvb3Jkcykge1xuICAgICAgICByZXR1cm4gcG9pbnQoY29vcmRzLCBwcm9wZXJ0aWVzKTtcbiAgICB9KSwgb3B0aW9ucyk7XG59XG4vKipcbiAqIENyZWF0ZXMgYSB7QGxpbmsgUG9seWdvbn0ge0BsaW5rIEZlYXR1cmV9IGZyb20gYW4gQXJyYXkgb2YgTGluZWFyUmluZ3MuXG4gKlxuICogQG5hbWUgcG9seWdvblxuICogQHBhcmFtIHtBcnJheTxBcnJheTxBcnJheTxudW1iZXI+Pj59IGNvb3JkaW5hdGVzIGFuIGFycmF5IG9mIExpbmVhclJpbmdzXG4gKiBAcGFyYW0ge09iamVjdH0gW3Byb3BlcnRpZXM9e31dIGFuIE9iamVjdCBvZiBrZXktdmFsdWUgcGFpcnMgdG8gYWRkIGFzIHByb3BlcnRpZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gT3B0aW9uYWwgUGFyYW1ldGVyc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbb3B0aW9ucy5iYm94XSBCb3VuZGluZyBCb3ggQXJyYXkgW3dlc3QsIHNvdXRoLCBlYXN0LCBub3J0aF0gYXNzb2NpYXRlZCB3aXRoIHRoZSBGZWF0dXJlXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtvcHRpb25zLmlkXSBJZGVudGlmaWVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgRmVhdHVyZVxuICogQHJldHVybnMge0ZlYXR1cmU8UG9seWdvbj59IFBvbHlnb24gRmVhdHVyZVxuICogQGV4YW1wbGVcbiAqIHZhciBwb2x5Z29uID0gdHVyZi5wb2x5Z29uKFtbWy01LCA1Ml0sIFstNCwgNTZdLCBbLTIsIDUxXSwgWy03LCA1NF0sIFstNSwgNTJdXV0sIHsgbmFtZTogJ3BvbHkxJyB9KTtcbiAqXG4gKiAvLz1wb2x5Z29uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb2x5Z29uKGNvb3JkaW5hdGVzLCBwcm9wZXJ0aWVzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICBmb3IgKHZhciBfaSA9IDAsIGNvb3JkaW5hdGVzXzEgPSBjb29yZGluYXRlczsgX2kgPCBjb29yZGluYXRlc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgcmluZyA9IGNvb3JkaW5hdGVzXzFbX2ldO1xuICAgICAgICBpZiAocmluZy5sZW5ndGggPCA0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFYWNoIExpbmVhclJpbmcgb2YgYSBQb2x5Z29uIG11c3QgaGF2ZSA0IG9yIG1vcmUgUG9zaXRpb25zLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJpbmdbcmluZy5sZW5ndGggLSAxXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgZmlyc3QgcG9pbnQgb2YgUG9seWdvbiBjb250YWlucyB0d28gbnVtYmVyc1xuICAgICAgICAgICAgaWYgKHJpbmdbcmluZy5sZW5ndGggLSAxXVtqXSAhPT0gcmluZ1swXVtqXSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZpcnN0IGFuZCBsYXN0IFBvc2l0aW9uIGFyZSBub3QgZXF1aXZhbGVudC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGdlb20gPSB7XG4gICAgICAgIHR5cGU6IFwiUG9seWdvblwiLFxuICAgICAgICBjb29yZGluYXRlczogY29vcmRpbmF0ZXMsXG4gICAgfTtcbiAgICByZXR1cm4gZmVhdHVyZShnZW9tLCBwcm9wZXJ0aWVzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIHtAbGluayBQb2x5Z29ufSB7QGxpbmsgRmVhdHVyZUNvbGxlY3Rpb259IGZyb20gYW4gQXJyYXkgb2YgUG9seWdvbiBjb29yZGluYXRlcy5cbiAqXG4gKiBAbmFtZSBwb2x5Z29uc1xuICogQHBhcmFtIHtBcnJheTxBcnJheTxBcnJheTxBcnJheTxudW1iZXI+Pj4+fSBjb29yZGluYXRlcyBhbiBhcnJheSBvZiBQb2x5Z29uIGNvb3JkaW5hdGVzXG4gKiBAcGFyYW0ge09iamVjdH0gW3Byb3BlcnRpZXM9e31dIGFuIE9iamVjdCBvZiBrZXktdmFsdWUgcGFpcnMgdG8gYWRkIGFzIHByb3BlcnRpZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gT3B0aW9uYWwgUGFyYW1ldGVyc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbb3B0aW9ucy5iYm94XSBCb3VuZGluZyBCb3ggQXJyYXkgW3dlc3QsIHNvdXRoLCBlYXN0LCBub3J0aF0gYXNzb2NpYXRlZCB3aXRoIHRoZSBGZWF0dXJlXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtvcHRpb25zLmlkXSBJZGVudGlmaWVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgRmVhdHVyZUNvbGxlY3Rpb25cbiAqIEByZXR1cm5zIHtGZWF0dXJlQ29sbGVjdGlvbjxQb2x5Z29uPn0gUG9seWdvbiBGZWF0dXJlQ29sbGVjdGlvblxuICogQGV4YW1wbGVcbiAqIHZhciBwb2x5Z29ucyA9IHR1cmYucG9seWdvbnMoW1xuICogICBbW1stNSwgNTJdLCBbLTQsIDU2XSwgWy0yLCA1MV0sIFstNywgNTRdLCBbLTUsIDUyXV1dLFxuICogICBbW1stMTUsIDQyXSwgWy0xNCwgNDZdLCBbLTEyLCA0MV0sIFstMTcsIDQ0XSwgWy0xNSwgNDJdXV0sXG4gKiBdKTtcbiAqXG4gKiAvLz1wb2x5Z29uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcG9seWdvbnMoY29vcmRpbmF0ZXMsIHByb3BlcnRpZXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHJldHVybiBmZWF0dXJlQ29sbGVjdGlvbihjb29yZGluYXRlcy5tYXAoZnVuY3Rpb24gKGNvb3Jkcykge1xuICAgICAgICByZXR1cm4gcG9seWdvbihjb29yZHMsIHByb3BlcnRpZXMpO1xuICAgIH0pLCBvcHRpb25zKTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIHtAbGluayBMaW5lU3RyaW5nfSB7QGxpbmsgRmVhdHVyZX0gZnJvbSBhbiBBcnJheSBvZiBQb3NpdGlvbnMuXG4gKlxuICogQG5hbWUgbGluZVN0cmluZ1xuICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gY29vcmRpbmF0ZXMgYW4gYXJyYXkgb2YgUG9zaXRpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gW3Byb3BlcnRpZXM9e31dIGFuIE9iamVjdCBvZiBrZXktdmFsdWUgcGFpcnMgdG8gYWRkIGFzIHByb3BlcnRpZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gT3B0aW9uYWwgUGFyYW1ldGVyc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbb3B0aW9ucy5iYm94XSBCb3VuZGluZyBCb3ggQXJyYXkgW3dlc3QsIHNvdXRoLCBlYXN0LCBub3J0aF0gYXNzb2NpYXRlZCB3aXRoIHRoZSBGZWF0dXJlXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtvcHRpb25zLmlkXSBJZGVudGlmaWVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgRmVhdHVyZVxuICogQHJldHVybnMge0ZlYXR1cmU8TGluZVN0cmluZz59IExpbmVTdHJpbmcgRmVhdHVyZVxuICogQGV4YW1wbGVcbiAqIHZhciBsaW5lc3RyaW5nMSA9IHR1cmYubGluZVN0cmluZyhbWy0yNCwgNjNdLCBbLTIzLCA2MF0sIFstMjUsIDY1XSwgWy0yMCwgNjldXSwge25hbWU6ICdsaW5lIDEnfSk7XG4gKiB2YXIgbGluZXN0cmluZzIgPSB0dXJmLmxpbmVTdHJpbmcoW1stMTQsIDQzXSwgWy0xMywgNDBdLCBbLTE1LCA0NV0sIFstMTAsIDQ5XV0sIHtuYW1lOiAnbGluZSAyJ30pO1xuICpcbiAqIC8vPWxpbmVzdHJpbmcxXG4gKiAvLz1saW5lc3RyaW5nMlxuICovXG5leHBvcnQgZnVuY3Rpb24gbGluZVN0cmluZyhjb29yZGluYXRlcywgcHJvcGVydGllcywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgaWYgKGNvb3JkaW5hdGVzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY29vcmRpbmF0ZXMgbXVzdCBiZSBhbiBhcnJheSBvZiB0d28gb3IgbW9yZSBwb3NpdGlvbnNcIik7XG4gICAgfVxuICAgIHZhciBnZW9tID0ge1xuICAgICAgICB0eXBlOiBcIkxpbmVTdHJpbmdcIixcbiAgICAgICAgY29vcmRpbmF0ZXM6IGNvb3JkaW5hdGVzLFxuICAgIH07XG4gICAgcmV0dXJuIGZlYXR1cmUoZ2VvbSwgcHJvcGVydGllcywgb3B0aW9ucyk7XG59XG4vKipcbiAqIENyZWF0ZXMgYSB7QGxpbmsgTGluZVN0cmluZ30ge0BsaW5rIEZlYXR1cmVDb2xsZWN0aW9ufSBmcm9tIGFuIEFycmF5IG9mIExpbmVTdHJpbmcgY29vcmRpbmF0ZXMuXG4gKlxuICogQG5hbWUgbGluZVN0cmluZ3NcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8QXJyYXk8bnVtYmVyPj4+fSBjb29yZGluYXRlcyBhbiBhcnJheSBvZiBMaW5lYXJSaW5nc1xuICogQHBhcmFtIHtPYmplY3R9IFtwcm9wZXJ0aWVzPXt9XSBhbiBPYmplY3Qgb2Yga2V5LXZhbHVlIHBhaXJzIHRvIGFkZCBhcyBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIE9wdGlvbmFsIFBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW29wdGlvbnMuYmJveF0gQm91bmRpbmcgQm94IEFycmF5IFt3ZXN0LCBzb3V0aCwgZWFzdCwgbm9ydGhdXG4gKiBhc3NvY2lhdGVkIHdpdGggdGhlIEZlYXR1cmVDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtvcHRpb25zLmlkXSBJZGVudGlmaWVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgRmVhdHVyZUNvbGxlY3Rpb25cbiAqIEByZXR1cm5zIHtGZWF0dXJlQ29sbGVjdGlvbjxMaW5lU3RyaW5nPn0gTGluZVN0cmluZyBGZWF0dXJlQ29sbGVjdGlvblxuICogQGV4YW1wbGVcbiAqIHZhciBsaW5lc3RyaW5ncyA9IHR1cmYubGluZVN0cmluZ3MoW1xuICogICBbWy0yNCwgNjNdLCBbLTIzLCA2MF0sIFstMjUsIDY1XSwgWy0yMCwgNjldXSxcbiAqICAgW1stMTQsIDQzXSwgWy0xMywgNDBdLCBbLTE1LCA0NV0sIFstMTAsIDQ5XV1cbiAqIF0pO1xuICpcbiAqIC8vPWxpbmVzdHJpbmdzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsaW5lU3RyaW5ncyhjb29yZGluYXRlcywgcHJvcGVydGllcywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgcmV0dXJuIGZlYXR1cmVDb2xsZWN0aW9uKGNvb3JkaW5hdGVzLm1hcChmdW5jdGlvbiAoY29vcmRzKSB7XG4gICAgICAgIHJldHVybiBsaW5lU3RyaW5nKGNvb3JkcywgcHJvcGVydGllcyk7XG4gICAgfSksIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBUYWtlcyBvbmUgb3IgbW9yZSB7QGxpbmsgRmVhdHVyZXxGZWF0dXJlc30gYW5kIGNyZWF0ZXMgYSB7QGxpbmsgRmVhdHVyZUNvbGxlY3Rpb259LlxuICpcbiAqIEBuYW1lIGZlYXR1cmVDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0ZlYXR1cmVbXX0gZmVhdHVyZXMgaW5wdXQgZmVhdHVyZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gT3B0aW9uYWwgUGFyYW1ldGVyc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbb3B0aW9ucy5iYm94XSBCb3VuZGluZyBCb3ggQXJyYXkgW3dlc3QsIHNvdXRoLCBlYXN0LCBub3J0aF0gYXNzb2NpYXRlZCB3aXRoIHRoZSBGZWF0dXJlXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtvcHRpb25zLmlkXSBJZGVudGlmaWVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgRmVhdHVyZVxuICogQHJldHVybnMge0ZlYXR1cmVDb2xsZWN0aW9ufSBGZWF0dXJlQ29sbGVjdGlvbiBvZiBGZWF0dXJlc1xuICogQGV4YW1wbGVcbiAqIHZhciBsb2NhdGlvbkEgPSB0dXJmLnBvaW50KFstNzUuMzQzLCAzOS45ODRdLCB7bmFtZTogJ0xvY2F0aW9uIEEnfSk7XG4gKiB2YXIgbG9jYXRpb25CID0gdHVyZi5wb2ludChbLTc1LjgzMywgMzkuMjg0XSwge25hbWU6ICdMb2NhdGlvbiBCJ30pO1xuICogdmFyIGxvY2F0aW9uQyA9IHR1cmYucG9pbnQoWy03NS41MzQsIDM5LjEyM10sIHtuYW1lOiAnTG9jYXRpb24gQyd9KTtcbiAqXG4gKiB2YXIgY29sbGVjdGlvbiA9IHR1cmYuZmVhdHVyZUNvbGxlY3Rpb24oW1xuICogICBsb2NhdGlvbkEsXG4gKiAgIGxvY2F0aW9uQixcbiAqICAgbG9jYXRpb25DXG4gKiBdKTtcbiAqXG4gKiAvLz1jb2xsZWN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmZWF0dXJlQ29sbGVjdGlvbihmZWF0dXJlcywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIGZjID0geyB0eXBlOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIgfTtcbiAgICBpZiAob3B0aW9ucy5pZCkge1xuICAgICAgICBmYy5pZCA9IG9wdGlvbnMuaWQ7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmJib3gpIHtcbiAgICAgICAgZmMuYmJveCA9IG9wdGlvbnMuYmJveDtcbiAgICB9XG4gICAgZmMuZmVhdHVyZXMgPSBmZWF0dXJlcztcbiAgICByZXR1cm4gZmM7XG59XG4vKipcbiAqIENyZWF0ZXMgYSB7QGxpbmsgRmVhdHVyZTxNdWx0aUxpbmVTdHJpbmc+fSBiYXNlZCBvbiBhXG4gKiBjb29yZGluYXRlIGFycmF5LiBQcm9wZXJ0aWVzIGNhbiBiZSBhZGRlZCBvcHRpb25hbGx5LlxuICpcbiAqIEBuYW1lIG11bHRpTGluZVN0cmluZ1xuICogQHBhcmFtIHtBcnJheTxBcnJheTxBcnJheTxudW1iZXI+Pj59IGNvb3JkaW5hdGVzIGFuIGFycmF5IG9mIExpbmVTdHJpbmdzXG4gKiBAcGFyYW0ge09iamVjdH0gW3Byb3BlcnRpZXM9e31dIGFuIE9iamVjdCBvZiBrZXktdmFsdWUgcGFpcnMgdG8gYWRkIGFzIHByb3BlcnRpZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gT3B0aW9uYWwgUGFyYW1ldGVyc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbb3B0aW9ucy5iYm94XSBCb3VuZGluZyBCb3ggQXJyYXkgW3dlc3QsIHNvdXRoLCBlYXN0LCBub3J0aF0gYXNzb2NpYXRlZCB3aXRoIHRoZSBGZWF0dXJlXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtvcHRpb25zLmlkXSBJZGVudGlmaWVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgRmVhdHVyZVxuICogQHJldHVybnMge0ZlYXR1cmU8TXVsdGlMaW5lU3RyaW5nPn0gYSBNdWx0aUxpbmVTdHJpbmcgZmVhdHVyZVxuICogQHRocm93cyB7RXJyb3J9IGlmIG5vIGNvb3JkaW5hdGVzIGFyZSBwYXNzZWRcbiAqIEBleGFtcGxlXG4gKiB2YXIgbXVsdGlMaW5lID0gdHVyZi5tdWx0aUxpbmVTdHJpbmcoW1tbMCwwXSxbMTAsMTBdXV0pO1xuICpcbiAqIC8vPW11bHRpTGluZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlMaW5lU3RyaW5nKGNvb3JkaW5hdGVzLCBwcm9wZXJ0aWVzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgZ2VvbSA9IHtcbiAgICAgICAgdHlwZTogXCJNdWx0aUxpbmVTdHJpbmdcIixcbiAgICAgICAgY29vcmRpbmF0ZXM6IGNvb3JkaW5hdGVzLFxuICAgIH07XG4gICAgcmV0dXJuIGZlYXR1cmUoZ2VvbSwgcHJvcGVydGllcywgb3B0aW9ucyk7XG59XG4vKipcbiAqIENyZWF0ZXMgYSB7QGxpbmsgRmVhdHVyZTxNdWx0aVBvaW50Pn0gYmFzZWQgb24gYVxuICogY29vcmRpbmF0ZSBhcnJheS4gUHJvcGVydGllcyBjYW4gYmUgYWRkZWQgb3B0aW9uYWxseS5cbiAqXG4gKiBAbmFtZSBtdWx0aVBvaW50XG4gKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fSBjb29yZGluYXRlcyBhbiBhcnJheSBvZiBQb3NpdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcHJvcGVydGllcz17fV0gYW4gT2JqZWN0IG9mIGtleS12YWx1ZSBwYWlycyB0byBhZGQgYXMgcHJvcGVydGllc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBPcHRpb25hbCBQYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtvcHRpb25zLmJib3hdIEJvdW5kaW5nIEJveCBBcnJheSBbd2VzdCwgc291dGgsIGVhc3QsIG5vcnRoXSBhc3NvY2lhdGVkIHdpdGggdGhlIEZlYXR1cmVcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW29wdGlvbnMuaWRdIElkZW50aWZpZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBGZWF0dXJlXG4gKiBAcmV0dXJucyB7RmVhdHVyZTxNdWx0aVBvaW50Pn0gYSBNdWx0aVBvaW50IGZlYXR1cmVcbiAqIEB0aHJvd3Mge0Vycm9yfSBpZiBubyBjb29yZGluYXRlcyBhcmUgcGFzc2VkXG4gKiBAZXhhbXBsZVxuICogdmFyIG11bHRpUHQgPSB0dXJmLm11bHRpUG9pbnQoW1swLDBdLFsxMCwxMF1dKTtcbiAqXG4gKiAvLz1tdWx0aVB0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aVBvaW50KGNvb3JkaW5hdGVzLCBwcm9wZXJ0aWVzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgZ2VvbSA9IHtcbiAgICAgICAgdHlwZTogXCJNdWx0aVBvaW50XCIsXG4gICAgICAgIGNvb3JkaW5hdGVzOiBjb29yZGluYXRlcyxcbiAgICB9O1xuICAgIHJldHVybiBmZWF0dXJlKGdlb20sIHByb3BlcnRpZXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEge0BsaW5rIEZlYXR1cmU8TXVsdGlQb2x5Z29uPn0gYmFzZWQgb24gYVxuICogY29vcmRpbmF0ZSBhcnJheS4gUHJvcGVydGllcyBjYW4gYmUgYWRkZWQgb3B0aW9uYWxseS5cbiAqXG4gKiBAbmFtZSBtdWx0aVBvbHlnb25cbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8QXJyYXk8QXJyYXk8bnVtYmVyPj4+Pn0gY29vcmRpbmF0ZXMgYW4gYXJyYXkgb2YgUG9seWdvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbcHJvcGVydGllcz17fV0gYW4gT2JqZWN0IG9mIGtleS12YWx1ZSBwYWlycyB0byBhZGQgYXMgcHJvcGVydGllc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBPcHRpb25hbCBQYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IFtvcHRpb25zLmJib3hdIEJvdW5kaW5nIEJveCBBcnJheSBbd2VzdCwgc291dGgsIGVhc3QsIG5vcnRoXSBhc3NvY2lhdGVkIHdpdGggdGhlIEZlYXR1cmVcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW29wdGlvbnMuaWRdIElkZW50aWZpZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBGZWF0dXJlXG4gKiBAcmV0dXJucyB7RmVhdHVyZTxNdWx0aVBvbHlnb24+fSBhIG11bHRpcG9seWdvbiBmZWF0dXJlXG4gKiBAdGhyb3dzIHtFcnJvcn0gaWYgbm8gY29vcmRpbmF0ZXMgYXJlIHBhc3NlZFxuICogQGV4YW1wbGVcbiAqIHZhciBtdWx0aVBvbHkgPSB0dXJmLm11bHRpUG9seWdvbihbW1tbMCwwXSxbMCwxMF0sWzEwLDEwXSxbMTAsMF0sWzAsMF1dXV0pO1xuICpcbiAqIC8vPW11bHRpUG9seVxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG11bHRpUG9seWdvbihjb29yZGluYXRlcywgcHJvcGVydGllcywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIGdlb20gPSB7XG4gICAgICAgIHR5cGU6IFwiTXVsdGlQb2x5Z29uXCIsXG4gICAgICAgIGNvb3JkaW5hdGVzOiBjb29yZGluYXRlcyxcbiAgICB9O1xuICAgIHJldHVybiBmZWF0dXJlKGdlb20sIHByb3BlcnRpZXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEge0BsaW5rIEZlYXR1cmU8R2VvbWV0cnlDb2xsZWN0aW9uPn0gYmFzZWQgb24gYVxuICogY29vcmRpbmF0ZSBhcnJheS4gUHJvcGVydGllcyBjYW4gYmUgYWRkZWQgb3B0aW9uYWxseS5cbiAqXG4gKiBAbmFtZSBnZW9tZXRyeUNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXk8R2VvbWV0cnk+fSBnZW9tZXRyaWVzIGFuIGFycmF5IG9mIEdlb0pTT04gR2VvbWV0cmllc1xuICogQHBhcmFtIHtPYmplY3R9IFtwcm9wZXJ0aWVzPXt9XSBhbiBPYmplY3Qgb2Yga2V5LXZhbHVlIHBhaXJzIHRvIGFkZCBhcyBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIE9wdGlvbmFsIFBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW29wdGlvbnMuYmJveF0gQm91bmRpbmcgQm94IEFycmF5IFt3ZXN0LCBzb3V0aCwgZWFzdCwgbm9ydGhdIGFzc29jaWF0ZWQgd2l0aCB0aGUgRmVhdHVyZVxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbb3B0aW9ucy5pZF0gSWRlbnRpZmllciBhc3NvY2lhdGVkIHdpdGggdGhlIEZlYXR1cmVcbiAqIEByZXR1cm5zIHtGZWF0dXJlPEdlb21ldHJ5Q29sbGVjdGlvbj59IGEgR2VvSlNPTiBHZW9tZXRyeUNvbGxlY3Rpb24gRmVhdHVyZVxuICogQGV4YW1wbGVcbiAqIHZhciBwdCA9IHR1cmYuZ2VvbWV0cnkoXCJQb2ludFwiLCBbMTAwLCAwXSk7XG4gKiB2YXIgbGluZSA9IHR1cmYuZ2VvbWV0cnkoXCJMaW5lU3RyaW5nXCIsIFtbMTAxLCAwXSwgWzEwMiwgMV1dKTtcbiAqIHZhciBjb2xsZWN0aW9uID0gdHVyZi5nZW9tZXRyeUNvbGxlY3Rpb24oW3B0LCBsaW5lXSk7XG4gKlxuICogLy8gPT4gY29sbGVjdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VvbWV0cnlDb2xsZWN0aW9uKGdlb21ldHJpZXMsIHByb3BlcnRpZXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBnZW9tID0ge1xuICAgICAgICB0eXBlOiBcIkdlb21ldHJ5Q29sbGVjdGlvblwiLFxuICAgICAgICBnZW9tZXRyaWVzOiBnZW9tZXRyaWVzLFxuICAgIH07XG4gICAgcmV0dXJuIGZlYXR1cmUoZ2VvbSwgcHJvcGVydGllcywgb3B0aW9ucyk7XG59XG4vKipcbiAqIFJvdW5kIG51bWJlciB0byBwcmVjaXNpb25cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtIE51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IFtwcmVjaXNpb249MF0gUHJlY2lzaW9uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSByb3VuZGVkIG51bWJlclxuICogQGV4YW1wbGVcbiAqIHR1cmYucm91bmQoMTIwLjQzMjEpXG4gKiAvLz0xMjBcbiAqXG4gKiB0dXJmLnJvdW5kKDEyMC40MzIxLCAyKVxuICogLy89MTIwLjQzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3VuZChudW0sIHByZWNpc2lvbikge1xuICAgIGlmIChwcmVjaXNpb24gPT09IHZvaWQgMCkgeyBwcmVjaXNpb24gPSAwOyB9XG4gICAgaWYgKHByZWNpc2lvbiAmJiAhKHByZWNpc2lvbiA+PSAwKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcmVjaXNpb24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlclwiKTtcbiAgICB9XG4gICAgdmFyIG11bHRpcGxpZXIgPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uIHx8IDApO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIG11bHRpcGxpZXIpIC8gbXVsdGlwbGllcjtcbn1cbi8qKlxuICogQ29udmVydCBhIGRpc3RhbmNlIG1lYXN1cmVtZW50IChhc3N1bWluZyBhIHNwaGVyaWNhbCBFYXJ0aCkgZnJvbSByYWRpYW5zIHRvIGEgbW9yZSBmcmllbmRseSB1bml0LlxuICogVmFsaWQgdW5pdHM6IG1pbGVzLCBuYXV0aWNhbG1pbGVzLCBpbmNoZXMsIHlhcmRzLCBtZXRlcnMsIG1ldHJlcywga2lsb21ldGVycywgY2VudGltZXRlcnMsIGZlZXRcbiAqXG4gKiBAbmFtZSByYWRpYW5zVG9MZW5ndGhcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYW5zIGluIHJhZGlhbnMgYWNyb3NzIHRoZSBzcGhlcmVcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdW5pdHM9XCJraWxvbWV0ZXJzXCJdIGNhbiBiZSBkZWdyZWVzLCByYWRpYW5zLCBtaWxlcywgaW5jaGVzLCB5YXJkcywgbWV0cmVzLFxuICogbWV0ZXJzLCBraWxvbWV0cmVzLCBraWxvbWV0ZXJzLlxuICogQHJldHVybnMge251bWJlcn0gZGlzdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhZGlhbnNUb0xlbmd0aChyYWRpYW5zLCB1bml0cykge1xuICAgIGlmICh1bml0cyA9PT0gdm9pZCAwKSB7IHVuaXRzID0gXCJraWxvbWV0ZXJzXCI7IH1cbiAgICB2YXIgZmFjdG9yID0gZmFjdG9yc1t1bml0c107XG4gICAgaWYgKCFmYWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHVuaXRzICsgXCIgdW5pdHMgaXMgaW52YWxpZFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJhZGlhbnMgKiBmYWN0b3I7XG59XG4vKipcbiAqIENvbnZlcnQgYSBkaXN0YW5jZSBtZWFzdXJlbWVudCAoYXNzdW1pbmcgYSBzcGhlcmljYWwgRWFydGgpIGZyb20gYSByZWFsLXdvcmxkIHVuaXQgaW50byByYWRpYW5zXG4gKiBWYWxpZCB1bml0czogbWlsZXMsIG5hdXRpY2FsbWlsZXMsIGluY2hlcywgeWFyZHMsIG1ldGVycywgbWV0cmVzLCBraWxvbWV0ZXJzLCBjZW50aW1ldGVycywgZmVldFxuICpcbiAqIEBuYW1lIGxlbmd0aFRvUmFkaWFuc1xuICogQHBhcmFtIHtudW1iZXJ9IGRpc3RhbmNlIGluIHJlYWwgdW5pdHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdW5pdHM9XCJraWxvbWV0ZXJzXCJdIGNhbiBiZSBkZWdyZWVzLCByYWRpYW5zLCBtaWxlcywgaW5jaGVzLCB5YXJkcywgbWV0cmVzLFxuICogbWV0ZXJzLCBraWxvbWV0cmVzLCBraWxvbWV0ZXJzLlxuICogQHJldHVybnMge251bWJlcn0gcmFkaWFuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoVG9SYWRpYW5zKGRpc3RhbmNlLCB1bml0cykge1xuICAgIGlmICh1bml0cyA9PT0gdm9pZCAwKSB7IHVuaXRzID0gXCJraWxvbWV0ZXJzXCI7IH1cbiAgICB2YXIgZmFjdG9yID0gZmFjdG9yc1t1bml0c107XG4gICAgaWYgKCFmYWN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHVuaXRzICsgXCIgdW5pdHMgaXMgaW52YWxpZFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpc3RhbmNlIC8gZmFjdG9yO1xufVxuLyoqXG4gKiBDb252ZXJ0IGEgZGlzdGFuY2UgbWVhc3VyZW1lbnQgKGFzc3VtaW5nIGEgc3BoZXJpY2FsIEVhcnRoKSBmcm9tIGEgcmVhbC13b3JsZCB1bml0IGludG8gZGVncmVlc1xuICogVmFsaWQgdW5pdHM6IG1pbGVzLCBuYXV0aWNhbG1pbGVzLCBpbmNoZXMsIHlhcmRzLCBtZXRlcnMsIG1ldHJlcywgY2VudGltZXRlcnMsIGtpbG9tZXRyZXMsIGZlZXRcbiAqXG4gKiBAbmFtZSBsZW5ndGhUb0RlZ3JlZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBkaXN0YW5jZSBpbiByZWFsIHVuaXRzXG4gKiBAcGFyYW0ge3N0cmluZ30gW3VuaXRzPVwia2lsb21ldGVyc1wiXSBjYW4gYmUgZGVncmVlcywgcmFkaWFucywgbWlsZXMsIGluY2hlcywgeWFyZHMsIG1ldHJlcyxcbiAqIG1ldGVycywga2lsb21ldHJlcywga2lsb21ldGVycy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IGRlZ3JlZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aFRvRGVncmVlcyhkaXN0YW5jZSwgdW5pdHMpIHtcbiAgICByZXR1cm4gcmFkaWFuc1RvRGVncmVlcyhsZW5ndGhUb1JhZGlhbnMoZGlzdGFuY2UsIHVuaXRzKSk7XG59XG4vKipcbiAqIENvbnZlcnRzIGFueSBiZWFyaW5nIGFuZ2xlIGZyb20gdGhlIG5vcnRoIGxpbmUgZGlyZWN0aW9uIChwb3NpdGl2ZSBjbG9ja3dpc2UpXG4gKiBhbmQgcmV0dXJucyBhbiBhbmdsZSBiZXR3ZWVuIDAtMzYwIGRlZ3JlZXMgKHBvc2l0aXZlIGNsb2Nrd2lzZSksIDAgYmVpbmcgdGhlIG5vcnRoIGxpbmVcbiAqXG4gKiBAbmFtZSBiZWFyaW5nVG9BemltdXRoXG4gKiBAcGFyYW0ge251bWJlcn0gYmVhcmluZyBhbmdsZSwgYmV0d2VlbiAtMTgwIGFuZCArMTgwIGRlZ3JlZXNcbiAqIEByZXR1cm5zIHtudW1iZXJ9IGFuZ2xlIGJldHdlZW4gMCBhbmQgMzYwIGRlZ3JlZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJlYXJpbmdUb0F6aW11dGgoYmVhcmluZykge1xuICAgIHZhciBhbmdsZSA9IGJlYXJpbmcgJSAzNjA7XG4gICAgaWYgKGFuZ2xlIDwgMCkge1xuICAgICAgICBhbmdsZSArPSAzNjA7XG4gICAgfVxuICAgIHJldHVybiBhbmdsZTtcbn1cbi8qKlxuICogQ29udmVydHMgYW4gYW5nbGUgaW4gcmFkaWFucyB0byBkZWdyZWVzXG4gKlxuICogQG5hbWUgcmFkaWFuc1RvRGVncmVlc1xuICogQHBhcmFtIHtudW1iZXJ9IHJhZGlhbnMgYW5nbGUgaW4gcmFkaWFuc1xuICogQHJldHVybnMge251bWJlcn0gZGVncmVlcyBiZXR3ZWVuIDAgYW5kIDM2MCBkZWdyZWVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYWRpYW5zVG9EZWdyZWVzKHJhZGlhbnMpIHtcbiAgICB2YXIgZGVncmVlcyA9IHJhZGlhbnMgJSAoMiAqIE1hdGguUEkpO1xuICAgIHJldHVybiAoZGVncmVlcyAqIDE4MCkgLyBNYXRoLlBJO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhbiBhbmdsZSBpbiBkZWdyZWVzIHRvIHJhZGlhbnNcbiAqXG4gKiBAbmFtZSBkZWdyZWVzVG9SYWRpYW5zXG4gKiBAcGFyYW0ge251bWJlcn0gZGVncmVlcyBhbmdsZSBiZXR3ZWVuIDAgYW5kIDM2MCBkZWdyZWVzXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBhbmdsZSBpbiByYWRpYW5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWdyZWVzVG9SYWRpYW5zKGRlZ3JlZXMpIHtcbiAgICB2YXIgcmFkaWFucyA9IGRlZ3JlZXMgJSAzNjA7XG4gICAgcmV0dXJuIChyYWRpYW5zICogTWF0aC5QSSkgLyAxODA7XG59XG4vKipcbiAqIENvbnZlcnRzIGEgbGVuZ3RoIHRvIHRoZSByZXF1ZXN0ZWQgdW5pdC5cbiAqIFZhbGlkIHVuaXRzOiBtaWxlcywgbmF1dGljYWxtaWxlcywgaW5jaGVzLCB5YXJkcywgbWV0ZXJzLCBtZXRyZXMsIGtpbG9tZXRlcnMsIGNlbnRpbWV0ZXJzLCBmZWV0XG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCB0byBiZSBjb252ZXJ0ZWRcbiAqIEBwYXJhbSB7VW5pdHN9IFtvcmlnaW5hbFVuaXQ9XCJraWxvbWV0ZXJzXCJdIG9mIHRoZSBsZW5ndGhcbiAqIEBwYXJhbSB7VW5pdHN9IFtmaW5hbFVuaXQ9XCJraWxvbWV0ZXJzXCJdIHJldHVybmVkIHVuaXRcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSBjb252ZXJ0ZWQgbGVuZ3RoXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0TGVuZ3RoKGxlbmd0aCwgb3JpZ2luYWxVbml0LCBmaW5hbFVuaXQpIHtcbiAgICBpZiAob3JpZ2luYWxVbml0ID09PSB2b2lkIDApIHsgb3JpZ2luYWxVbml0ID0gXCJraWxvbWV0ZXJzXCI7IH1cbiAgICBpZiAoZmluYWxVbml0ID09PSB2b2lkIDApIHsgZmluYWxVbml0ID0gXCJraWxvbWV0ZXJzXCI7IH1cbiAgICBpZiAoIShsZW5ndGggPj0gMCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibGVuZ3RoIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXJcIik7XG4gICAgfVxuICAgIHJldHVybiByYWRpYW5zVG9MZW5ndGgobGVuZ3RoVG9SYWRpYW5zKGxlbmd0aCwgb3JpZ2luYWxVbml0KSwgZmluYWxVbml0KTtcbn1cbi8qKlxuICogQ29udmVydHMgYSBhcmVhIHRvIHRoZSByZXF1ZXN0ZWQgdW5pdC5cbiAqIFZhbGlkIHVuaXRzOiBraWxvbWV0ZXJzLCBraWxvbWV0cmVzLCBtZXRlcnMsIG1ldHJlcywgY2VudGltZXRyZXMsIG1pbGxpbWV0ZXJzLCBhY3JlcywgbWlsZXMsIHlhcmRzLCBmZWV0LCBpbmNoZXMsIGhlY3RhcmVzXG4gKiBAcGFyYW0ge251bWJlcn0gYXJlYSB0byBiZSBjb252ZXJ0ZWRcbiAqIEBwYXJhbSB7VW5pdHN9IFtvcmlnaW5hbFVuaXQ9XCJtZXRlcnNcIl0gb2YgdGhlIGRpc3RhbmNlXG4gKiBAcGFyYW0ge1VuaXRzfSBbZmluYWxVbml0PVwia2lsb21ldGVyc1wiXSByZXR1cm5lZCB1bml0XG4gKiBAcmV0dXJucyB7bnVtYmVyfSB0aGUgY29udmVydGVkIGFyZWFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRBcmVhKGFyZWEsIG9yaWdpbmFsVW5pdCwgZmluYWxVbml0KSB7XG4gICAgaWYgKG9yaWdpbmFsVW5pdCA9PT0gdm9pZCAwKSB7IG9yaWdpbmFsVW5pdCA9IFwibWV0ZXJzXCI7IH1cbiAgICBpZiAoZmluYWxVbml0ID09PSB2b2lkIDApIHsgZmluYWxVbml0ID0gXCJraWxvbWV0ZXJzXCI7IH1cbiAgICBpZiAoIShhcmVhID49IDApKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImFyZWEgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlclwiKTtcbiAgICB9XG4gICAgdmFyIHN0YXJ0RmFjdG9yID0gYXJlYUZhY3RvcnNbb3JpZ2luYWxVbml0XTtcbiAgICBpZiAoIXN0YXJ0RmFjdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgb3JpZ2luYWwgdW5pdHNcIik7XG4gICAgfVxuICAgIHZhciBmaW5hbEZhY3RvciA9IGFyZWFGYWN0b3JzW2ZpbmFsVW5pdF07XG4gICAgaWYgKCFmaW5hbEZhY3Rvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGZpbmFsIHVuaXRzXCIpO1xuICAgIH1cbiAgICByZXR1cm4gKGFyZWEgLyBzdGFydEZhY3RvcikgKiBmaW5hbEZhY3Rvcjtcbn1cbi8qKlxuICogaXNOdW1iZXJcbiAqXG4gKiBAcGFyYW0geyp9IG51bSBOdW1iZXIgdG8gdmFsaWRhdGVcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlL2ZhbHNlXG4gKiBAZXhhbXBsZVxuICogdHVyZi5pc051bWJlcigxMjMpXG4gKiAvLz10cnVlXG4gKiB0dXJmLmlzTnVtYmVyKCdmb28nKVxuICogLy89ZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKG51bSkge1xuICAgIHJldHVybiAhaXNOYU4obnVtKSAmJiBudW0gIT09IG51bGwgJiYgIUFycmF5LmlzQXJyYXkobnVtKTtcbn1cbi8qKlxuICogaXNPYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IGlucHV0IHZhcmlhYmxlIHRvIHZhbGlkYXRlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZS9mYWxzZVxuICogQGV4YW1wbGVcbiAqIHR1cmYuaXNPYmplY3Qoe2VsZXZhdGlvbjogMTB9KVxuICogLy89dHJ1ZVxuICogdHVyZi5pc09iamVjdCgnZm9vJylcbiAqIC8vPWZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdChpbnB1dCkge1xuICAgIHJldHVybiAhIWlucHV0ICYmIGlucHV0LmNvbnN0cnVjdG9yID09PSBPYmplY3Q7XG59XG4vKipcbiAqIFZhbGlkYXRlIEJCb3hcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBiYm94IEJCb3ggdG8gdmFsaWRhdGVcbiAqIEByZXR1cm5zIHt2b2lkfVxuICogQHRocm93cyBFcnJvciBpZiBCQm94IGlzIG5vdCB2YWxpZFxuICogQGV4YW1wbGVcbiAqIHZhbGlkYXRlQkJveChbLTE4MCwgLTQwLCAxMTAsIDUwXSlcbiAqIC8vPU9LXG4gKiB2YWxpZGF0ZUJCb3goWy0xODAsIC00MF0pXG4gKiAvLz1FcnJvclxuICogdmFsaWRhdGVCQm94KCdGb28nKVxuICogLy89RXJyb3JcbiAqIHZhbGlkYXRlQkJveCg1KVxuICogLy89RXJyb3JcbiAqIHZhbGlkYXRlQkJveChudWxsKVxuICogLy89RXJyb3JcbiAqIHZhbGlkYXRlQkJveCh1bmRlZmluZWQpXG4gKiAvLz1FcnJvclxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVCQm94KGJib3gpIHtcbiAgICBpZiAoIWJib3gpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYmJveCBpcyByZXF1aXJlZFwiKTtcbiAgICB9XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGJib3gpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImJib3ggbXVzdCBiZSBhbiBBcnJheVwiKTtcbiAgICB9XG4gICAgaWYgKGJib3gubGVuZ3RoICE9PSA0ICYmIGJib3gubGVuZ3RoICE9PSA2KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImJib3ggbXVzdCBiZSBhbiBBcnJheSBvZiA0IG9yIDYgbnVtYmVyc1wiKTtcbiAgICB9XG4gICAgYmJveC5mb3JFYWNoKGZ1bmN0aW9uIChudW0pIHtcbiAgICAgICAgaWYgKCFpc051bWJlcihudW0pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJiYm94IG11c3Qgb25seSBjb250YWluIG51bWJlcnNcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8qKlxuICogVmFsaWRhdGUgSWRcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpZCBJZCB0byB2YWxpZGF0ZVxuICogQHJldHVybnMge3ZvaWR9XG4gKiBAdGhyb3dzIEVycm9yIGlmIElkIGlzIG5vdCB2YWxpZFxuICogQGV4YW1wbGVcbiAqIHZhbGlkYXRlSWQoWy0xODAsIC00MCwgMTEwLCA1MF0pXG4gKiAvLz1FcnJvclxuICogdmFsaWRhdGVJZChbLTE4MCwgLTQwXSlcbiAqIC8vPUVycm9yXG4gKiB2YWxpZGF0ZUlkKCdGb28nKVxuICogLy89T0tcbiAqIHZhbGlkYXRlSWQoNSlcbiAqIC8vPU9LXG4gKiB2YWxpZGF0ZUlkKG51bGwpXG4gKiAvLz1FcnJvclxuICogdmFsaWRhdGVJZCh1bmRlZmluZWQpXG4gKiAvLz1FcnJvclxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVJZChpZCkge1xuICAgIGlmICghaWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWQgaXMgcmVxdWlyZWRcIik7XG4gICAgfVxuICAgIGlmIChbXCJzdHJpbmdcIiwgXCJudW1iZXJcIl0uaW5kZXhPZih0eXBlb2YgaWQpID09PSAtMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpZCBtdXN0IGJlIGEgbnVtYmVyIG9yIGEgc3RyaW5nXCIpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGlzTnVtYmVyLCB9IGZyb20gXCJAdHVyZi9oZWxwZXJzXCI7XG4vKipcbiAqIFVud3JhcCBhIGNvb3JkaW5hdGUgZnJvbSBhIFBvaW50IEZlYXR1cmUsIEdlb21ldHJ5IG9yIGEgc2luZ2xlIGNvb3JkaW5hdGUuXG4gKlxuICogQG5hbWUgZ2V0Q29vcmRcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPnxHZW9tZXRyeTxQb2ludD58RmVhdHVyZTxQb2ludD59IGNvb3JkIEdlb0pTT04gUG9pbnQgb3IgYW4gQXJyYXkgb2YgbnVtYmVyc1xuICogQHJldHVybnMge0FycmF5PG51bWJlcj59IGNvb3JkaW5hdGVzXG4gKiBAZXhhbXBsZVxuICogdmFyIHB0ID0gdHVyZi5wb2ludChbMTAsIDEwXSk7XG4gKlxuICogdmFyIGNvb3JkID0gdHVyZi5nZXRDb29yZChwdCk7XG4gKiAvLz0gWzEwLCAxMF1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvb3JkKGNvb3JkKSB7XG4gICAgaWYgKCFjb29yZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjb29yZCBpcyByZXF1aXJlZFwiKTtcbiAgICB9XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNvb3JkKSkge1xuICAgICAgICBpZiAoY29vcmQudHlwZSA9PT0gXCJGZWF0dXJlXCIgJiZcbiAgICAgICAgICAgIGNvb3JkLmdlb21ldHJ5ICE9PSBudWxsICYmXG4gICAgICAgICAgICBjb29yZC5nZW9tZXRyeS50eXBlID09PSBcIlBvaW50XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBjb29yZC5nZW9tZXRyeS5jb29yZGluYXRlcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29vcmQudHlwZSA9PT0gXCJQb2ludFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gY29vcmQuY29vcmRpbmF0ZXM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29vcmQpICYmXG4gICAgICAgIGNvb3JkLmxlbmd0aCA+PSAyICYmXG4gICAgICAgICFBcnJheS5pc0FycmF5KGNvb3JkWzBdKSAmJlxuICAgICAgICAhQXJyYXkuaXNBcnJheShjb29yZFsxXSkpIHtcbiAgICAgICAgcmV0dXJuIGNvb3JkO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJjb29yZCBtdXN0IGJlIEdlb0pTT04gUG9pbnQgb3IgYW4gQXJyYXkgb2YgbnVtYmVyc1wiKTtcbn1cbi8qKlxuICogVW53cmFwIGNvb3JkaW5hdGVzIGZyb20gYSBGZWF0dXJlLCBHZW9tZXRyeSBPYmplY3Qgb3IgYW4gQXJyYXlcbiAqXG4gKiBAbmFtZSBnZXRDb29yZHNcbiAqIEBwYXJhbSB7QXJyYXk8YW55PnxHZW9tZXRyeXxGZWF0dXJlfSBjb29yZHMgRmVhdHVyZSwgR2VvbWV0cnkgT2JqZWN0IG9yIGFuIEFycmF5XG4gKiBAcmV0dXJucyB7QXJyYXk8YW55Pn0gY29vcmRpbmF0ZXNcbiAqIEBleGFtcGxlXG4gKiB2YXIgcG9seSA9IHR1cmYucG9seWdvbihbW1sxMTkuMzIsIC04LjddLCBbMTE5LjU1LCAtOC42OV0sIFsxMTkuNTEsIC04LjU0XSwgWzExOS4zMiwgLTguN11dXSk7XG4gKlxuICogdmFyIGNvb3JkcyA9IHR1cmYuZ2V0Q29vcmRzKHBvbHkpO1xuICogLy89IFtbWzExOS4zMiwgLTguN10sIFsxMTkuNTUsIC04LjY5XSwgWzExOS41MSwgLTguNTRdLCBbMTE5LjMyLCAtOC43XV1dXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb29yZHMoY29vcmRzKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29vcmRzKSkge1xuICAgICAgICByZXR1cm4gY29vcmRzO1xuICAgIH1cbiAgICAvLyBGZWF0dXJlXG4gICAgaWYgKGNvb3Jkcy50eXBlID09PSBcIkZlYXR1cmVcIikge1xuICAgICAgICBpZiAoY29vcmRzLmdlb21ldHJ5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gY29vcmRzLmdlb21ldHJ5LmNvb3JkaW5hdGVzO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBHZW9tZXRyeVxuICAgICAgICBpZiAoY29vcmRzLmNvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gY29vcmRzLmNvb3JkaW5hdGVzO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcImNvb3JkcyBtdXN0IGJlIEdlb0pTT04gRmVhdHVyZSwgR2VvbWV0cnkgT2JqZWN0IG9yIGFuIEFycmF5XCIpO1xufVxuLyoqXG4gKiBDaGVja3MgaWYgY29vcmRpbmF0ZXMgY29udGFpbnMgYSBudW1iZXJcbiAqXG4gKiBAbmFtZSBjb250YWluc051bWJlclxuICogQHBhcmFtIHtBcnJheTxhbnk+fSBjb29yZGluYXRlcyBHZW9KU09OIENvb3JkaW5hdGVzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiBBcnJheSBjb250YWlucyBhIG51bWJlclxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udGFpbnNOdW1iZXIoY29vcmRpbmF0ZXMpIHtcbiAgICBpZiAoY29vcmRpbmF0ZXMubGVuZ3RoID4gMSAmJlxuICAgICAgICBpc051bWJlcihjb29yZGluYXRlc1swXSkgJiZcbiAgICAgICAgaXNOdW1iZXIoY29vcmRpbmF0ZXNbMV0pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb29yZGluYXRlc1swXSkgJiYgY29vcmRpbmF0ZXNbMF0ubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBjb250YWluc051bWJlcihjb29yZGluYXRlc1swXSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcImNvb3JkaW5hdGVzIG11c3Qgb25seSBjb250YWluIG51bWJlcnNcIik7XG59XG4vKipcbiAqIEVuZm9yY2UgZXhwZWN0YXRpb25zIGFib3V0IHR5cGVzIG9mIEdlb0pTT04gb2JqZWN0cyBmb3IgVHVyZi5cbiAqXG4gKiBAbmFtZSBnZW9qc29uVHlwZVxuICogQHBhcmFtIHtHZW9KU09OfSB2YWx1ZSBhbnkgR2VvSlNPTiBvYmplY3RcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIGV4cGVjdGVkIEdlb0pTT04gdHlwZVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgbmFtZSBvZiBjYWxsaW5nIGZ1bmN0aW9uXG4gKiBAdGhyb3dzIHtFcnJvcn0gaWYgdmFsdWUgaXMgbm90IHRoZSBleHBlY3RlZCB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VvanNvblR5cGUodmFsdWUsIHR5cGUsIG5hbWUpIHtcbiAgICBpZiAoIXR5cGUgfHwgIW5hbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHlwZSBhbmQgbmFtZSByZXF1aXJlZFwiKTtcbiAgICB9XG4gICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZS50eXBlICE9PSB0eXBlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW5wdXQgdG8gXCIgK1xuICAgICAgICAgICAgbmFtZSArXG4gICAgICAgICAgICBcIjogbXVzdCBiZSBhIFwiICtcbiAgICAgICAgICAgIHR5cGUgK1xuICAgICAgICAgICAgXCIsIGdpdmVuIFwiICtcbiAgICAgICAgICAgIHZhbHVlLnR5cGUpO1xuICAgIH1cbn1cbi8qKlxuICogRW5mb3JjZSBleHBlY3RhdGlvbnMgYWJvdXQgdHlwZXMgb2Yge0BsaW5rIEZlYXR1cmV9IGlucHV0cyBmb3IgVHVyZi5cbiAqIEludGVybmFsbHkgdGhpcyB1c2VzIHtAbGluayBnZW9qc29uVHlwZX0gdG8ganVkZ2UgZ2VvbWV0cnkgdHlwZXMuXG4gKlxuICogQG5hbWUgZmVhdHVyZU9mXG4gKiBAcGFyYW0ge0ZlYXR1cmV9IGZlYXR1cmUgYSBmZWF0dXJlIHdpdGggYW4gZXhwZWN0ZWQgZ2VvbWV0cnkgdHlwZVxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgZXhwZWN0ZWQgR2VvSlNPTiB0eXBlXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBuYW1lIG9mIGNhbGxpbmcgZnVuY3Rpb25cbiAqIEB0aHJvd3Mge0Vycm9yfSBlcnJvciBpZiB2YWx1ZSBpcyBub3QgdGhlIGV4cGVjdGVkIHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmZWF0dXJlT2YoZmVhdHVyZSwgdHlwZSwgbmFtZSkge1xuICAgIGlmICghZmVhdHVyZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBmZWF0dXJlIHBhc3NlZFwiKTtcbiAgICB9XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIi5mZWF0dXJlT2YoKSByZXF1aXJlcyBhIG5hbWVcIik7XG4gICAgfVxuICAgIGlmICghZmVhdHVyZSB8fCBmZWF0dXJlLnR5cGUgIT09IFwiRmVhdHVyZVwiIHx8ICFmZWF0dXJlLmdlb21ldHJ5KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW5wdXQgdG8gXCIgKyBuYW1lICsgXCIsIEZlYXR1cmUgd2l0aCBnZW9tZXRyeSByZXF1aXJlZFwiKTtcbiAgICB9XG4gICAgaWYgKCFmZWF0dXJlLmdlb21ldHJ5IHx8IGZlYXR1cmUuZ2VvbWV0cnkudHlwZSAhPT0gdHlwZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGlucHV0IHRvIFwiICtcbiAgICAgICAgICAgIG5hbWUgK1xuICAgICAgICAgICAgXCI6IG11c3QgYmUgYSBcIiArXG4gICAgICAgICAgICB0eXBlICtcbiAgICAgICAgICAgIFwiLCBnaXZlbiBcIiArXG4gICAgICAgICAgICBmZWF0dXJlLmdlb21ldHJ5LnR5cGUpO1xuICAgIH1cbn1cbi8qKlxuICogRW5mb3JjZSBleHBlY3RhdGlvbnMgYWJvdXQgdHlwZXMgb2Yge0BsaW5rIEZlYXR1cmVDb2xsZWN0aW9ufSBpbnB1dHMgZm9yIFR1cmYuXG4gKiBJbnRlcm5hbGx5IHRoaXMgdXNlcyB7QGxpbmsgZ2VvanNvblR5cGV9IHRvIGp1ZGdlIGdlb21ldHJ5IHR5cGVzLlxuICpcbiAqIEBuYW1lIGNvbGxlY3Rpb25PZlxuICogQHBhcmFtIHtGZWF0dXJlQ29sbGVjdGlvbn0gZmVhdHVyZUNvbGxlY3Rpb24gYSBGZWF0dXJlQ29sbGVjdGlvbiBmb3Igd2hpY2ggZmVhdHVyZXMgd2lsbCBiZSBqdWRnZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIGV4cGVjdGVkIEdlb0pTT04gdHlwZVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgbmFtZSBvZiBjYWxsaW5nIGZ1bmN0aW9uXG4gKiBAdGhyb3dzIHtFcnJvcn0gaWYgdmFsdWUgaXMgbm90IHRoZSBleHBlY3RlZCB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdGlvbk9mKGZlYXR1cmVDb2xsZWN0aW9uLCB0eXBlLCBuYW1lKSB7XG4gICAgaWYgKCFmZWF0dXJlQ29sbGVjdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBmZWF0dXJlQ29sbGVjdGlvbiBwYXNzZWRcIik7XG4gICAgfVxuICAgIGlmICghbmFtZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCIuY29sbGVjdGlvbk9mKCkgcmVxdWlyZXMgYSBuYW1lXCIpO1xuICAgIH1cbiAgICBpZiAoIWZlYXR1cmVDb2xsZWN0aW9uIHx8IGZlYXR1cmVDb2xsZWN0aW9uLnR5cGUgIT09IFwiRmVhdHVyZUNvbGxlY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGlucHV0IHRvIFwiICsgbmFtZSArIFwiLCBGZWF0dXJlQ29sbGVjdGlvbiByZXF1aXJlZFwiKTtcbiAgICB9XG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IGZlYXR1cmVDb2xsZWN0aW9uLmZlYXR1cmVzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgZmVhdHVyZSA9IF9hW19pXTtcbiAgICAgICAgaWYgKCFmZWF0dXJlIHx8IGZlYXR1cmUudHlwZSAhPT0gXCJGZWF0dXJlXCIgfHwgIWZlYXR1cmUuZ2VvbWV0cnkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW5wdXQgdG8gXCIgKyBuYW1lICsgXCIsIEZlYXR1cmUgd2l0aCBnZW9tZXRyeSByZXF1aXJlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZlYXR1cmUuZ2VvbWV0cnkgfHwgZmVhdHVyZS5nZW9tZXRyeS50eXBlICE9PSB0eXBlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGlucHV0IHRvIFwiICtcbiAgICAgICAgICAgICAgICBuYW1lICtcbiAgICAgICAgICAgICAgICBcIjogbXVzdCBiZSBhIFwiICtcbiAgICAgICAgICAgICAgICB0eXBlICtcbiAgICAgICAgICAgICAgICBcIiwgZ2l2ZW4gXCIgK1xuICAgICAgICAgICAgICAgIGZlYXR1cmUuZ2VvbWV0cnkudHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIEdldCBHZW9tZXRyeSBmcm9tIEZlYXR1cmUgb3IgR2VvbWV0cnkgT2JqZWN0XG4gKlxuICogQHBhcmFtIHtGZWF0dXJlfEdlb21ldHJ5fSBnZW9qc29uIEdlb0pTT04gRmVhdHVyZSBvciBHZW9tZXRyeSBPYmplY3RcbiAqIEByZXR1cm5zIHtHZW9tZXRyeXxudWxsfSBHZW9KU09OIEdlb21ldHJ5IE9iamVjdFxuICogQHRocm93cyB7RXJyb3J9IGlmIGdlb2pzb24gaXMgbm90IGEgRmVhdHVyZSBvciBHZW9tZXRyeSBPYmplY3RcbiAqIEBleGFtcGxlXG4gKiB2YXIgcG9pbnQgPSB7XG4gKiAgIFwidHlwZVwiOiBcIkZlYXR1cmVcIixcbiAqICAgXCJwcm9wZXJ0aWVzXCI6IHt9LFxuICogICBcImdlb21ldHJ5XCI6IHtcbiAqICAgICBcInR5cGVcIjogXCJQb2ludFwiLFxuICogICAgIFwiY29vcmRpbmF0ZXNcIjogWzExMCwgNDBdXG4gKiAgIH1cbiAqIH1cbiAqIHZhciBnZW9tID0gdHVyZi5nZXRHZW9tKHBvaW50KVxuICogLy89e1widHlwZVwiOiBcIlBvaW50XCIsIFwiY29vcmRpbmF0ZXNcIjogWzExMCwgNDBdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2VvbShnZW9qc29uKSB7XG4gICAgaWYgKGdlb2pzb24udHlwZSA9PT0gXCJGZWF0dXJlXCIpIHtcbiAgICAgICAgcmV0dXJuIGdlb2pzb24uZ2VvbWV0cnk7XG4gICAgfVxuICAgIHJldHVybiBnZW9qc29uO1xufVxuLyoqXG4gKiBHZXQgR2VvSlNPTiBvYmplY3QncyB0eXBlLCBHZW9tZXRyeSB0eXBlIGlzIHByaW9yaXRpemUuXG4gKlxuICogQHBhcmFtIHtHZW9KU09OfSBnZW9qc29uIEdlb0pTT04gb2JqZWN0XG4gKiBAcGFyYW0ge3N0cmluZ30gW25hbWU9XCJnZW9qc29uXCJdIG5hbWUgb2YgdGhlIHZhcmlhYmxlIHRvIGRpc3BsYXkgaW4gZXJyb3IgbWVzc2FnZSAodW51c2VkKVxuICogQHJldHVybnMge3N0cmluZ30gR2VvSlNPTiB0eXBlXG4gKiBAZXhhbXBsZVxuICogdmFyIHBvaW50ID0ge1xuICogICBcInR5cGVcIjogXCJGZWF0dXJlXCIsXG4gKiAgIFwicHJvcGVydGllc1wiOiB7fSxcbiAqICAgXCJnZW9tZXRyeVwiOiB7XG4gKiAgICAgXCJ0eXBlXCI6IFwiUG9pbnRcIixcbiAqICAgICBcImNvb3JkaW5hdGVzXCI6IFsxMTAsIDQwXVxuICogICB9XG4gKiB9XG4gKiB2YXIgZ2VvbSA9IHR1cmYuZ2V0VHlwZShwb2ludClcbiAqIC8vPVwiUG9pbnRcIlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZShnZW9qc29uLCBfbmFtZSkge1xuICAgIGlmIChnZW9qc29uLnR5cGUgPT09IFwiRmVhdHVyZUNvbGxlY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gXCJGZWF0dXJlQ29sbGVjdGlvblwiO1xuICAgIH1cbiAgICBpZiAoZ2VvanNvbi50eXBlID09PSBcIkdlb21ldHJ5Q29sbGVjdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBcIkdlb21ldHJ5Q29sbGVjdGlvblwiO1xuICAgIH1cbiAgICBpZiAoZ2VvanNvbi50eXBlID09PSBcIkZlYXR1cmVcIiAmJiBnZW9qc29uLmdlb21ldHJ5ICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBnZW9qc29uLmdlb21ldHJ5LnR5cGU7XG4gICAgfVxuICAgIHJldHVybiBnZW9qc29uLnR5cGU7XG59XG4iLCJpbXBvcnQgeyBmZWF0dXJlLCBwb2ludCwgbGluZVN0cmluZywgaXNPYmplY3QgfSBmcm9tICdAdHVyZi9oZWxwZXJzJztcblxuLyoqXG4gKiBDYWxsYmFjayBmb3IgY29vcmRFYWNoXG4gKlxuICogQGNhbGxiYWNrIGNvb3JkRWFjaENhbGxiYWNrXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGN1cnJlbnRDb29yZCBUaGUgY3VycmVudCBjb29yZGluYXRlIGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb29yZEluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBjb29yZGluYXRlIGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmZWF0dXJlSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIEZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IG11bHRpRmVhdHVyZUluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBNdWx0aS1GZWF0dXJlIGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBnZW9tZXRyeUluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBHZW9tZXRyeSBiZWluZyBwcm9jZXNzZWQuXG4gKi9cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgY29vcmRpbmF0ZXMgaW4gYW55IEdlb0pTT04gb2JqZWN0LCBzaW1pbGFyIHRvIEFycmF5LmZvckVhY2goKVxuICpcbiAqIEBuYW1lIGNvb3JkRWFjaFxuICogQHBhcmFtIHtGZWF0dXJlQ29sbGVjdGlvbnxGZWF0dXJlfEdlb21ldHJ5fSBnZW9qc29uIGFueSBHZW9KU09OIG9iamVjdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgYSBtZXRob2QgdGhhdCB0YWtlcyAoY3VycmVudENvb3JkLCBjb29yZEluZGV4LCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4KVxuICogQHBhcmFtIHtib29sZWFufSBbZXhjbHVkZVdyYXBDb29yZD1mYWxzZV0gd2hldGhlciBvciBub3QgdG8gaW5jbHVkZSB0aGUgZmluYWwgY29vcmRpbmF0ZSBvZiBMaW5lYXJSaW5ncyB0aGF0IHdyYXBzIHRoZSByaW5nIGluIGl0cyBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqIEBleGFtcGxlXG4gKiB2YXIgZmVhdHVyZXMgPSB0dXJmLmZlYXR1cmVDb2xsZWN0aW9uKFtcbiAqICAgdHVyZi5wb2ludChbMjYsIDM3XSwge1wiZm9vXCI6IFwiYmFyXCJ9KSxcbiAqICAgdHVyZi5wb2ludChbMzYsIDUzXSwge1wiaGVsbG9cIjogXCJ3b3JsZFwifSlcbiAqIF0pO1xuICpcbiAqIHR1cmYuY29vcmRFYWNoKGZlYXR1cmVzLCBmdW5jdGlvbiAoY3VycmVudENvb3JkLCBjb29yZEluZGV4LCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4LCBnZW9tZXRyeUluZGV4KSB7XG4gKiAgIC8vPWN1cnJlbnRDb29yZFxuICogICAvLz1jb29yZEluZGV4XG4gKiAgIC8vPWZlYXR1cmVJbmRleFxuICogICAvLz1tdWx0aUZlYXR1cmVJbmRleFxuICogICAvLz1nZW9tZXRyeUluZGV4XG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gY29vcmRFYWNoKGdlb2pzb24sIGNhbGxiYWNrLCBleGNsdWRlV3JhcENvb3JkKSB7XG4gIC8vIEhhbmRsZXMgbnVsbCBHZW9tZXRyeSAtLSBTa2lwcyB0aGlzIEdlb0pTT05cbiAgaWYgKGdlb2pzb24gPT09IG51bGwpIHJldHVybjtcbiAgdmFyIGosXG4gICAgayxcbiAgICBsLFxuICAgIGdlb21ldHJ5LFxuICAgIHN0b3BHLFxuICAgIGNvb3JkcyxcbiAgICBnZW9tZXRyeU1heWJlQ29sbGVjdGlvbixcbiAgICB3cmFwU2hyaW5rID0gMCxcbiAgICBjb29yZEluZGV4ID0gMCxcbiAgICBpc0dlb21ldHJ5Q29sbGVjdGlvbixcbiAgICB0eXBlID0gZ2VvanNvbi50eXBlLFxuICAgIGlzRmVhdHVyZUNvbGxlY3Rpb24gPSB0eXBlID09PSBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXG4gICAgaXNGZWF0dXJlID0gdHlwZSA9PT0gXCJGZWF0dXJlXCIsXG4gICAgc3RvcCA9IGlzRmVhdHVyZUNvbGxlY3Rpb24gPyBnZW9qc29uLmZlYXR1cmVzLmxlbmd0aCA6IDE7XG5cbiAgLy8gVGhpcyBsb2dpYyBtYXkgbG9vayBhIGxpdHRsZSB3ZWlyZC4gVGhlIHJlYXNvbiB3aHkgaXQgaXMgdGhhdCB3YXlcbiAgLy8gaXMgYmVjYXVzZSBpdCdzIHRyeWluZyB0byBiZSBmYXN0LiBHZW9KU09OIHN1cHBvcnRzIG11bHRpcGxlIGtpbmRzXG4gIC8vIG9mIG9iamVjdHMgYXQgaXRzIHJvb3Q6IEZlYXR1cmVDb2xsZWN0aW9uLCBGZWF0dXJlcywgR2VvbWV0cmllcy5cbiAgLy8gVGhpcyBmdW5jdGlvbiBoYXMgdGhlIHJlc3BvbnNpYmlsaXR5IG9mIGhhbmRsaW5nIGFsbCBvZiB0aGVtLCBhbmQgdGhhdFxuICAvLyBtZWFucyB0aGF0IHNvbWUgb2YgdGhlIGBmb3JgIGxvb3BzIHlvdSBzZWUgYmVsb3cgYWN0dWFsbHkganVzdCBkb24ndCBhcHBseVxuICAvLyB0byBjZXJ0YWluIGlucHV0cy4gRm9yIGluc3RhbmNlLCBpZiB5b3UgZ2l2ZSB0aGlzIGp1c3QgYVxuICAvLyBQb2ludCBnZW9tZXRyeSwgdGhlbiBib3RoIGxvb3BzIGFyZSBzaG9ydC1jaXJjdWl0ZWQgYW5kIGFsbCB3ZSBkb1xuICAvLyBpcyBncmFkdWFsbHkgcmVuYW1lIHRoZSBpbnB1dCB1bnRpbCBpdCdzIGNhbGxlZCAnZ2VvbWV0cnknLlxuICAvL1xuICAvLyBUaGlzIGFsc28gYWltcyB0byBhbGxvY2F0ZSBhcyBmZXcgcmVzb3VyY2VzIGFzIHBvc3NpYmxlOiBqdXN0IGFcbiAgLy8gZmV3IG51bWJlcnMgYW5kIGJvb2xlYW5zLCByYXRoZXIgdGhhbiBhbnkgdGVtcG9yYXJ5IGFycmF5cyBhcyB3b3VsZFxuICAvLyBiZSByZXF1aXJlZCB3aXRoIHRoZSBub3JtYWxpemF0aW9uIGFwcHJvYWNoLlxuICBmb3IgKHZhciBmZWF0dXJlSW5kZXggPSAwOyBmZWF0dXJlSW5kZXggPCBzdG9wOyBmZWF0dXJlSW5kZXgrKykge1xuICAgIGdlb21ldHJ5TWF5YmVDb2xsZWN0aW9uID0gaXNGZWF0dXJlQ29sbGVjdGlvblxuICAgICAgPyBnZW9qc29uLmZlYXR1cmVzW2ZlYXR1cmVJbmRleF0uZ2VvbWV0cnlcbiAgICAgIDogaXNGZWF0dXJlXG4gICAgICA/IGdlb2pzb24uZ2VvbWV0cnlcbiAgICAgIDogZ2VvanNvbjtcbiAgICBpc0dlb21ldHJ5Q29sbGVjdGlvbiA9IGdlb21ldHJ5TWF5YmVDb2xsZWN0aW9uXG4gICAgICA/IGdlb21ldHJ5TWF5YmVDb2xsZWN0aW9uLnR5cGUgPT09IFwiR2VvbWV0cnlDb2xsZWN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gICAgc3RvcEcgPSBpc0dlb21ldHJ5Q29sbGVjdGlvblxuICAgICAgPyBnZW9tZXRyeU1heWJlQ29sbGVjdGlvbi5nZW9tZXRyaWVzLmxlbmd0aFxuICAgICAgOiAxO1xuXG4gICAgZm9yICh2YXIgZ2VvbUluZGV4ID0gMDsgZ2VvbUluZGV4IDwgc3RvcEc7IGdlb21JbmRleCsrKSB7XG4gICAgICB2YXIgbXVsdGlGZWF0dXJlSW5kZXggPSAwO1xuICAgICAgdmFyIGdlb21ldHJ5SW5kZXggPSAwO1xuICAgICAgZ2VvbWV0cnkgPSBpc0dlb21ldHJ5Q29sbGVjdGlvblxuICAgICAgICA/IGdlb21ldHJ5TWF5YmVDb2xsZWN0aW9uLmdlb21ldHJpZXNbZ2VvbUluZGV4XVxuICAgICAgICA6IGdlb21ldHJ5TWF5YmVDb2xsZWN0aW9uO1xuXG4gICAgICAvLyBIYW5kbGVzIG51bGwgR2VvbWV0cnkgLS0gU2tpcHMgdGhpcyBnZW9tZXRyeVxuICAgICAgaWYgKGdlb21ldHJ5ID09PSBudWxsKSBjb250aW51ZTtcbiAgICAgIGNvb3JkcyA9IGdlb21ldHJ5LmNvb3JkaW5hdGVzO1xuICAgICAgdmFyIGdlb21UeXBlID0gZ2VvbWV0cnkudHlwZTtcblxuICAgICAgd3JhcFNocmluayA9XG4gICAgICAgIGV4Y2x1ZGVXcmFwQ29vcmQgJiZcbiAgICAgICAgKGdlb21UeXBlID09PSBcIlBvbHlnb25cIiB8fCBnZW9tVHlwZSA9PT0gXCJNdWx0aVBvbHlnb25cIilcbiAgICAgICAgICA/IDFcbiAgICAgICAgICA6IDA7XG5cbiAgICAgIHN3aXRjaCAoZ2VvbVR5cGUpIHtcbiAgICAgICAgY2FzZSBudWxsOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiUG9pbnRcIjpcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjYWxsYmFjayhcbiAgICAgICAgICAgICAgY29vcmRzLFxuICAgICAgICAgICAgICBjb29yZEluZGV4LFxuICAgICAgICAgICAgICBmZWF0dXJlSW5kZXgsXG4gICAgICAgICAgICAgIG11bHRpRmVhdHVyZUluZGV4LFxuICAgICAgICAgICAgICBnZW9tZXRyeUluZGV4XG4gICAgICAgICAgICApID09PSBmYWxzZVxuICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICBjb29yZEluZGV4Kys7XG4gICAgICAgICAgbXVsdGlGZWF0dXJlSW5kZXgrKztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkxpbmVTdHJpbmdcIjpcbiAgICAgICAgY2FzZSBcIk11bHRpUG9pbnRcIjpcbiAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY29vcmRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGNhbGxiYWNrKFxuICAgICAgICAgICAgICAgIGNvb3Jkc1tqXSxcbiAgICAgICAgICAgICAgICBjb29yZEluZGV4LFxuICAgICAgICAgICAgICAgIGZlYXR1cmVJbmRleCxcbiAgICAgICAgICAgICAgICBtdWx0aUZlYXR1cmVJbmRleCxcbiAgICAgICAgICAgICAgICBnZW9tZXRyeUluZGV4XG4gICAgICAgICAgICAgICkgPT09IGZhbHNlXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNvb3JkSW5kZXgrKztcbiAgICAgICAgICAgIGlmIChnZW9tVHlwZSA9PT0gXCJNdWx0aVBvaW50XCIpIG11bHRpRmVhdHVyZUluZGV4Kys7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChnZW9tVHlwZSA9PT0gXCJMaW5lU3RyaW5nXCIpIG11bHRpRmVhdHVyZUluZGV4Kys7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJQb2x5Z29uXCI6XG4gICAgICAgIGNhc2UgXCJNdWx0aUxpbmVTdHJpbmdcIjpcbiAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgY29vcmRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgY29vcmRzW2pdLmxlbmd0aCAtIHdyYXBTaHJpbms7IGsrKykge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soXG4gICAgICAgICAgICAgICAgICBjb29yZHNbal1ba10sXG4gICAgICAgICAgICAgICAgICBjb29yZEluZGV4LFxuICAgICAgICAgICAgICAgICAgZmVhdHVyZUluZGV4LFxuICAgICAgICAgICAgICAgICAgbXVsdGlGZWF0dXJlSW5kZXgsXG4gICAgICAgICAgICAgICAgICBnZW9tZXRyeUluZGV4XG4gICAgICAgICAgICAgICAgKSA9PT0gZmFsc2VcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgY29vcmRJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdlb21UeXBlID09PSBcIk11bHRpTGluZVN0cmluZ1wiKSBtdWx0aUZlYXR1cmVJbmRleCsrO1xuICAgICAgICAgICAgaWYgKGdlb21UeXBlID09PSBcIlBvbHlnb25cIikgZ2VvbWV0cnlJbmRleCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZ2VvbVR5cGUgPT09IFwiUG9seWdvblwiKSBtdWx0aUZlYXR1cmVJbmRleCsrO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiTXVsdGlQb2x5Z29uXCI6XG4gICAgICAgICAgZm9yIChqID0gMDsgaiA8IGNvb3Jkcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgZ2VvbWV0cnlJbmRleCA9IDA7XG4gICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgY29vcmRzW2pdLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgIGZvciAobCA9IDA7IGwgPCBjb29yZHNbal1ba10ubGVuZ3RoIC0gd3JhcFNocmluazsgbCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2soXG4gICAgICAgICAgICAgICAgICAgIGNvb3Jkc1tqXVtrXVtsXSxcbiAgICAgICAgICAgICAgICAgICAgY29vcmRJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICBtdWx0aUZlYXR1cmVJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnlJbmRleFxuICAgICAgICAgICAgICAgICAgKSA9PT0gZmFsc2VcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29vcmRJbmRleCsrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGdlb21ldHJ5SW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG11bHRpRmVhdHVyZUluZGV4Kys7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiR2VvbWV0cnlDb2xsZWN0aW9uXCI6XG4gICAgICAgICAgZm9yIChqID0gMDsgaiA8IGdlb21ldHJ5Lmdlb21ldHJpZXMubGVuZ3RoOyBqKyspXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGNvb3JkRWFjaChnZW9tZXRyeS5nZW9tZXRyaWVzW2pdLCBjYWxsYmFjaywgZXhjbHVkZVdyYXBDb29yZCkgPT09XG4gICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIEdlb21ldHJ5IFR5cGVcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2FsbGJhY2sgZm9yIGNvb3JkUmVkdWNlXG4gKlxuICogVGhlIGZpcnN0IHRpbWUgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGlzIGNhbGxlZCwgdGhlIHZhbHVlcyBwcm92aWRlZCBhcyBhcmd1bWVudHMgZGVwZW5kXG4gKiBvbiB3aGV0aGVyIHRoZSByZWR1Y2UgbWV0aG9kIGhhcyBhbiBpbml0aWFsVmFsdWUgYXJndW1lbnQuXG4gKlxuICogSWYgYW4gaW5pdGlhbFZhbHVlIGlzIHByb3ZpZGVkIHRvIHRoZSByZWR1Y2UgbWV0aG9kOlxuICogIC0gVGhlIHByZXZpb3VzVmFsdWUgYXJndW1lbnQgaXMgaW5pdGlhbFZhbHVlLlxuICogIC0gVGhlIGN1cnJlbnRWYWx1ZSBhcmd1bWVudCBpcyB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IGVsZW1lbnQgcHJlc2VudCBpbiB0aGUgYXJyYXkuXG4gKlxuICogSWYgYW4gaW5pdGlhbFZhbHVlIGlzIG5vdCBwcm92aWRlZDpcbiAqICAtIFRoZSBwcmV2aW91c1ZhbHVlIGFyZ3VtZW50IGlzIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgZWxlbWVudCBwcmVzZW50IGluIHRoZSBhcnJheS5cbiAqICAtIFRoZSBjdXJyZW50VmFsdWUgYXJndW1lbnQgaXMgdGhlIHZhbHVlIG9mIHRoZSBzZWNvbmQgZWxlbWVudCBwcmVzZW50IGluIHRoZSBhcnJheS5cbiAqXG4gKiBAY2FsbGJhY2sgY29vcmRSZWR1Y2VDYWxsYmFja1xuICogQHBhcmFtIHsqfSBwcmV2aW91c1ZhbHVlIFRoZSBhY2N1bXVsYXRlZCB2YWx1ZSBwcmV2aW91c2x5IHJldHVybmVkIGluIHRoZSBsYXN0IGludm9jYXRpb25cbiAqIG9mIHRoZSBjYWxsYmFjaywgb3IgaW5pdGlhbFZhbHVlLCBpZiBzdXBwbGllZC5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gY3VycmVudENvb3JkIFRoZSBjdXJyZW50IGNvb3JkaW5hdGUgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IGNvb3JkSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIGNvb3JkaW5hdGUgYmVpbmcgcHJvY2Vzc2VkLlxuICogU3RhcnRzIGF0IGluZGV4IDAsIGlmIGFuIGluaXRpYWxWYWx1ZSBpcyBwcm92aWRlZCwgYW5kIGF0IGluZGV4IDEgb3RoZXJ3aXNlLlxuICogQHBhcmFtIHtudW1iZXJ9IGZlYXR1cmVJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgRmVhdHVyZSBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gbXVsdGlGZWF0dXJlSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIE11bHRpLUZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IGdlb21ldHJ5SW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIEdlb21ldHJ5IGJlaW5nIHByb2Nlc3NlZC5cbiAqL1xuXG4vKipcbiAqIFJlZHVjZSBjb29yZGluYXRlcyBpbiBhbnkgR2VvSlNPTiBvYmplY3QsIHNpbWlsYXIgdG8gQXJyYXkucmVkdWNlKClcbiAqXG4gKiBAbmFtZSBjb29yZFJlZHVjZVxuICogQHBhcmFtIHtGZWF0dXJlQ29sbGVjdGlvbnxHZW9tZXRyeXxGZWF0dXJlfSBnZW9qc29uIGFueSBHZW9KU09OIG9iamVjdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgYSBtZXRob2QgdGhhdCB0YWtlcyAocHJldmlvdXNWYWx1ZSwgY3VycmVudENvb3JkLCBjb29yZEluZGV4KVxuICogQHBhcmFtIHsqfSBbaW5pdGlhbFZhbHVlXSBWYWx1ZSB0byB1c2UgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBmaXJzdCBjYWxsIG9mIHRoZSBjYWxsYmFjay5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2V4Y2x1ZGVXcmFwQ29vcmQ9ZmFsc2VdIHdoZXRoZXIgb3Igbm90IHRvIGluY2x1ZGUgdGhlIGZpbmFsIGNvb3JkaW5hdGUgb2YgTGluZWFyUmluZ3MgdGhhdCB3cmFwcyB0aGUgcmluZyBpbiBpdHMgaXRlcmF0aW9uLlxuICogQHJldHVybnMgeyp9IFRoZSB2YWx1ZSB0aGF0IHJlc3VsdHMgZnJvbSB0aGUgcmVkdWN0aW9uLlxuICogQGV4YW1wbGVcbiAqIHZhciBmZWF0dXJlcyA9IHR1cmYuZmVhdHVyZUNvbGxlY3Rpb24oW1xuICogICB0dXJmLnBvaW50KFsyNiwgMzddLCB7XCJmb29cIjogXCJiYXJcIn0pLFxuICogICB0dXJmLnBvaW50KFszNiwgNTNdLCB7XCJoZWxsb1wiOiBcIndvcmxkXCJ9KVxuICogXSk7XG4gKlxuICogdHVyZi5jb29yZFJlZHVjZShmZWF0dXJlcywgZnVuY3Rpb24gKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRDb29yZCwgY29vcmRJbmRleCwgZmVhdHVyZUluZGV4LCBtdWx0aUZlYXR1cmVJbmRleCwgZ2VvbWV0cnlJbmRleCkge1xuICogICAvLz1wcmV2aW91c1ZhbHVlXG4gKiAgIC8vPWN1cnJlbnRDb29yZFxuICogICAvLz1jb29yZEluZGV4XG4gKiAgIC8vPWZlYXR1cmVJbmRleFxuICogICAvLz1tdWx0aUZlYXR1cmVJbmRleFxuICogICAvLz1nZW9tZXRyeUluZGV4XG4gKiAgIHJldHVybiBjdXJyZW50Q29vcmQ7XG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gY29vcmRSZWR1Y2UoZ2VvanNvbiwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSwgZXhjbHVkZVdyYXBDb29yZCkge1xuICB2YXIgcHJldmlvdXNWYWx1ZSA9IGluaXRpYWxWYWx1ZTtcbiAgY29vcmRFYWNoKFxuICAgIGdlb2pzb24sXG4gICAgZnVuY3Rpb24gKFxuICAgICAgY3VycmVudENvb3JkLFxuICAgICAgY29vcmRJbmRleCxcbiAgICAgIGZlYXR1cmVJbmRleCxcbiAgICAgIG11bHRpRmVhdHVyZUluZGV4LFxuICAgICAgZ2VvbWV0cnlJbmRleFxuICAgICkge1xuICAgICAgaWYgKGNvb3JkSW5kZXggPT09IDAgJiYgaW5pdGlhbFZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgIHByZXZpb3VzVmFsdWUgPSBjdXJyZW50Q29vcmQ7XG4gICAgICBlbHNlXG4gICAgICAgIHByZXZpb3VzVmFsdWUgPSBjYWxsYmFjayhcbiAgICAgICAgICBwcmV2aW91c1ZhbHVlLFxuICAgICAgICAgIGN1cnJlbnRDb29yZCxcbiAgICAgICAgICBjb29yZEluZGV4LFxuICAgICAgICAgIGZlYXR1cmVJbmRleCxcbiAgICAgICAgICBtdWx0aUZlYXR1cmVJbmRleCxcbiAgICAgICAgICBnZW9tZXRyeUluZGV4XG4gICAgICAgICk7XG4gICAgfSxcbiAgICBleGNsdWRlV3JhcENvb3JkXG4gICk7XG4gIHJldHVybiBwcmV2aW91c1ZhbHVlO1xufVxuXG4vKipcbiAqIENhbGxiYWNrIGZvciBwcm9wRWFjaFxuICpcbiAqIEBjYWxsYmFjayBwcm9wRWFjaENhbGxiYWNrXG4gKiBAcGFyYW0ge09iamVjdH0gY3VycmVudFByb3BlcnRpZXMgVGhlIGN1cnJlbnQgUHJvcGVydGllcyBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gZmVhdHVyZUluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBGZWF0dXJlIGJlaW5nIHByb2Nlc3NlZC5cbiAqL1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBwcm9wZXJ0aWVzIGluIGFueSBHZW9KU09OIG9iamVjdCwgc2ltaWxhciB0byBBcnJheS5mb3JFYWNoKClcbiAqXG4gKiBAbmFtZSBwcm9wRWFjaFxuICogQHBhcmFtIHtGZWF0dXJlQ29sbGVjdGlvbnxGZWF0dXJlfSBnZW9qc29uIGFueSBHZW9KU09OIG9iamVjdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgYSBtZXRob2QgdGhhdCB0YWtlcyAoY3VycmVudFByb3BlcnRpZXMsIGZlYXR1cmVJbmRleClcbiAqIEByZXR1cm5zIHt2b2lkfVxuICogQGV4YW1wbGVcbiAqIHZhciBmZWF0dXJlcyA9IHR1cmYuZmVhdHVyZUNvbGxlY3Rpb24oW1xuICogICAgIHR1cmYucG9pbnQoWzI2LCAzN10sIHtmb286ICdiYXInfSksXG4gKiAgICAgdHVyZi5wb2ludChbMzYsIDUzXSwge2hlbGxvOiAnd29ybGQnfSlcbiAqIF0pO1xuICpcbiAqIHR1cmYucHJvcEVhY2goZmVhdHVyZXMsIGZ1bmN0aW9uIChjdXJyZW50UHJvcGVydGllcywgZmVhdHVyZUluZGV4KSB7XG4gKiAgIC8vPWN1cnJlbnRQcm9wZXJ0aWVzXG4gKiAgIC8vPWZlYXR1cmVJbmRleFxuICogfSk7XG4gKi9cbmZ1bmN0aW9uIHByb3BFYWNoKGdlb2pzb24sIGNhbGxiYWNrKSB7XG4gIHZhciBpO1xuICBzd2l0Y2ggKGdlb2pzb24udHlwZSkge1xuICAgIGNhc2UgXCJGZWF0dXJlQ29sbGVjdGlvblwiOlxuICAgICAgZm9yIChpID0gMDsgaSA8IGdlb2pzb24uZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKGdlb2pzb24uZmVhdHVyZXNbaV0ucHJvcGVydGllcywgaSkgPT09IGZhbHNlKSBicmVhaztcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJGZWF0dXJlXCI6XG4gICAgICBjYWxsYmFjayhnZW9qc29uLnByb3BlcnRpZXMsIDApO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuLyoqXG4gKiBDYWxsYmFjayBmb3IgcHJvcFJlZHVjZVxuICpcbiAqIFRoZSBmaXJzdCB0aW1lIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBpcyBjYWxsZWQsIHRoZSB2YWx1ZXMgcHJvdmlkZWQgYXMgYXJndW1lbnRzIGRlcGVuZFxuICogb24gd2hldGhlciB0aGUgcmVkdWNlIG1ldGhvZCBoYXMgYW4gaW5pdGlhbFZhbHVlIGFyZ3VtZW50LlxuICpcbiAqIElmIGFuIGluaXRpYWxWYWx1ZSBpcyBwcm92aWRlZCB0byB0aGUgcmVkdWNlIG1ldGhvZDpcbiAqICAtIFRoZSBwcmV2aW91c1ZhbHVlIGFyZ3VtZW50IGlzIGluaXRpYWxWYWx1ZS5cbiAqICAtIFRoZSBjdXJyZW50VmFsdWUgYXJndW1lbnQgaXMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBlbGVtZW50IHByZXNlbnQgaW4gdGhlIGFycmF5LlxuICpcbiAqIElmIGFuIGluaXRpYWxWYWx1ZSBpcyBub3QgcHJvdmlkZWQ6XG4gKiAgLSBUaGUgcHJldmlvdXNWYWx1ZSBhcmd1bWVudCBpcyB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IGVsZW1lbnQgcHJlc2VudCBpbiB0aGUgYXJyYXkuXG4gKiAgLSBUaGUgY3VycmVudFZhbHVlIGFyZ3VtZW50IGlzIHRoZSB2YWx1ZSBvZiB0aGUgc2Vjb25kIGVsZW1lbnQgcHJlc2VudCBpbiB0aGUgYXJyYXkuXG4gKlxuICogQGNhbGxiYWNrIHByb3BSZWR1Y2VDYWxsYmFja1xuICogQHBhcmFtIHsqfSBwcmV2aW91c1ZhbHVlIFRoZSBhY2N1bXVsYXRlZCB2YWx1ZSBwcmV2aW91c2x5IHJldHVybmVkIGluIHRoZSBsYXN0IGludm9jYXRpb25cbiAqIG9mIHRoZSBjYWxsYmFjaywgb3IgaW5pdGlhbFZhbHVlLCBpZiBzdXBwbGllZC5cbiAqIEBwYXJhbSB7Kn0gY3VycmVudFByb3BlcnRpZXMgVGhlIGN1cnJlbnQgUHJvcGVydGllcyBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gZmVhdHVyZUluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBGZWF0dXJlIGJlaW5nIHByb2Nlc3NlZC5cbiAqL1xuXG4vKipcbiAqIFJlZHVjZSBwcm9wZXJ0aWVzIGluIGFueSBHZW9KU09OIG9iamVjdCBpbnRvIGEgc2luZ2xlIHZhbHVlLFxuICogc2ltaWxhciB0byBob3cgQXJyYXkucmVkdWNlIHdvcmtzLiBIb3dldmVyLCBpbiB0aGlzIGNhc2Ugd2UgbGF6aWx5IHJ1blxuICogdGhlIHJlZHVjdGlvbiwgc28gYW4gYXJyYXkgb2YgYWxsIHByb3BlcnRpZXMgaXMgdW5uZWNlc3NhcnkuXG4gKlxuICogQG5hbWUgcHJvcFJlZHVjZVxuICogQHBhcmFtIHtGZWF0dXJlQ29sbGVjdGlvbnxGZWF0dXJlfSBnZW9qc29uIGFueSBHZW9KU09OIG9iamVjdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgYSBtZXRob2QgdGhhdCB0YWtlcyAocHJldmlvdXNWYWx1ZSwgY3VycmVudFByb3BlcnRpZXMsIGZlYXR1cmVJbmRleClcbiAqIEBwYXJhbSB7Kn0gW2luaXRpYWxWYWx1ZV0gVmFsdWUgdG8gdXNlIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgZmlyc3QgY2FsbCBvZiB0aGUgY2FsbGJhY2suXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHZhbHVlIHRoYXQgcmVzdWx0cyBmcm9tIHRoZSByZWR1Y3Rpb24uXG4gKiBAZXhhbXBsZVxuICogdmFyIGZlYXR1cmVzID0gdHVyZi5mZWF0dXJlQ29sbGVjdGlvbihbXG4gKiAgICAgdHVyZi5wb2ludChbMjYsIDM3XSwge2ZvbzogJ2Jhcid9KSxcbiAqICAgICB0dXJmLnBvaW50KFszNiwgNTNdLCB7aGVsbG86ICd3b3JsZCd9KVxuICogXSk7XG4gKlxuICogdHVyZi5wcm9wUmVkdWNlKGZlYXR1cmVzLCBmdW5jdGlvbiAocHJldmlvdXNWYWx1ZSwgY3VycmVudFByb3BlcnRpZXMsIGZlYXR1cmVJbmRleCkge1xuICogICAvLz1wcmV2aW91c1ZhbHVlXG4gKiAgIC8vPWN1cnJlbnRQcm9wZXJ0aWVzXG4gKiAgIC8vPWZlYXR1cmVJbmRleFxuICogICByZXR1cm4gY3VycmVudFByb3BlcnRpZXNcbiAqIH0pO1xuICovXG5mdW5jdGlvbiBwcm9wUmVkdWNlKGdlb2pzb24sIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgdmFyIHByZXZpb3VzVmFsdWUgPSBpbml0aWFsVmFsdWU7XG4gIHByb3BFYWNoKGdlb2pzb24sIGZ1bmN0aW9uIChjdXJyZW50UHJvcGVydGllcywgZmVhdHVyZUluZGV4KSB7XG4gICAgaWYgKGZlYXR1cmVJbmRleCA9PT0gMCAmJiBpbml0aWFsVmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgIHByZXZpb3VzVmFsdWUgPSBjdXJyZW50UHJvcGVydGllcztcbiAgICBlbHNlXG4gICAgICBwcmV2aW91c1ZhbHVlID0gY2FsbGJhY2socHJldmlvdXNWYWx1ZSwgY3VycmVudFByb3BlcnRpZXMsIGZlYXR1cmVJbmRleCk7XG4gIH0pO1xuICByZXR1cm4gcHJldmlvdXNWYWx1ZTtcbn1cblxuLyoqXG4gKiBDYWxsYmFjayBmb3IgZmVhdHVyZUVhY2hcbiAqXG4gKiBAY2FsbGJhY2sgZmVhdHVyZUVhY2hDYWxsYmFja1xuICogQHBhcmFtIHtGZWF0dXJlPGFueT59IGN1cnJlbnRGZWF0dXJlIFRoZSBjdXJyZW50IEZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IGZlYXR1cmVJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgRmVhdHVyZSBiZWluZyBwcm9jZXNzZWQuXG4gKi9cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgZmVhdHVyZXMgaW4gYW55IEdlb0pTT04gb2JqZWN0LCBzaW1pbGFyIHRvXG4gKiBBcnJheS5mb3JFYWNoLlxuICpcbiAqIEBuYW1lIGZlYXR1cmVFYWNoXG4gKiBAcGFyYW0ge0ZlYXR1cmVDb2xsZWN0aW9ufEZlYXR1cmV8R2VvbWV0cnl9IGdlb2pzb24gYW55IEdlb0pTT04gb2JqZWN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBhIG1ldGhvZCB0aGF0IHRha2VzIChjdXJyZW50RmVhdHVyZSwgZmVhdHVyZUluZGV4KVxuICogQHJldHVybnMge3ZvaWR9XG4gKiBAZXhhbXBsZVxuICogdmFyIGZlYXR1cmVzID0gdHVyZi5mZWF0dXJlQ29sbGVjdGlvbihbXG4gKiAgIHR1cmYucG9pbnQoWzI2LCAzN10sIHtmb286ICdiYXInfSksXG4gKiAgIHR1cmYucG9pbnQoWzM2LCA1M10sIHtoZWxsbzogJ3dvcmxkJ30pXG4gKiBdKTtcbiAqXG4gKiB0dXJmLmZlYXR1cmVFYWNoKGZlYXR1cmVzLCBmdW5jdGlvbiAoY3VycmVudEZlYXR1cmUsIGZlYXR1cmVJbmRleCkge1xuICogICAvLz1jdXJyZW50RmVhdHVyZVxuICogICAvLz1mZWF0dXJlSW5kZXhcbiAqIH0pO1xuICovXG5mdW5jdGlvbiBmZWF0dXJlRWFjaChnZW9qc29uLCBjYWxsYmFjaykge1xuICBpZiAoZ2VvanNvbi50eXBlID09PSBcIkZlYXR1cmVcIikge1xuICAgIGNhbGxiYWNrKGdlb2pzb24sIDApO1xuICB9IGVsc2UgaWYgKGdlb2pzb24udHlwZSA9PT0gXCJGZWF0dXJlQ29sbGVjdGlvblwiKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBnZW9qc29uLmZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoY2FsbGJhY2soZ2VvanNvbi5mZWF0dXJlc1tpXSwgaSkgPT09IGZhbHNlKSBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDYWxsYmFjayBmb3IgZmVhdHVyZVJlZHVjZVxuICpcbiAqIFRoZSBmaXJzdCB0aW1lIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBpcyBjYWxsZWQsIHRoZSB2YWx1ZXMgcHJvdmlkZWQgYXMgYXJndW1lbnRzIGRlcGVuZFxuICogb24gd2hldGhlciB0aGUgcmVkdWNlIG1ldGhvZCBoYXMgYW4gaW5pdGlhbFZhbHVlIGFyZ3VtZW50LlxuICpcbiAqIElmIGFuIGluaXRpYWxWYWx1ZSBpcyBwcm92aWRlZCB0byB0aGUgcmVkdWNlIG1ldGhvZDpcbiAqICAtIFRoZSBwcmV2aW91c1ZhbHVlIGFyZ3VtZW50IGlzIGluaXRpYWxWYWx1ZS5cbiAqICAtIFRoZSBjdXJyZW50VmFsdWUgYXJndW1lbnQgaXMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBlbGVtZW50IHByZXNlbnQgaW4gdGhlIGFycmF5LlxuICpcbiAqIElmIGFuIGluaXRpYWxWYWx1ZSBpcyBub3QgcHJvdmlkZWQ6XG4gKiAgLSBUaGUgcHJldmlvdXNWYWx1ZSBhcmd1bWVudCBpcyB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IGVsZW1lbnQgcHJlc2VudCBpbiB0aGUgYXJyYXkuXG4gKiAgLSBUaGUgY3VycmVudFZhbHVlIGFyZ3VtZW50IGlzIHRoZSB2YWx1ZSBvZiB0aGUgc2Vjb25kIGVsZW1lbnQgcHJlc2VudCBpbiB0aGUgYXJyYXkuXG4gKlxuICogQGNhbGxiYWNrIGZlYXR1cmVSZWR1Y2VDYWxsYmFja1xuICogQHBhcmFtIHsqfSBwcmV2aW91c1ZhbHVlIFRoZSBhY2N1bXVsYXRlZCB2YWx1ZSBwcmV2aW91c2x5IHJldHVybmVkIGluIHRoZSBsYXN0IGludm9jYXRpb25cbiAqIG9mIHRoZSBjYWxsYmFjaywgb3IgaW5pdGlhbFZhbHVlLCBpZiBzdXBwbGllZC5cbiAqIEBwYXJhbSB7RmVhdHVyZX0gY3VycmVudEZlYXR1cmUgVGhlIGN1cnJlbnQgRmVhdHVyZSBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gZmVhdHVyZUluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBGZWF0dXJlIGJlaW5nIHByb2Nlc3NlZC5cbiAqL1xuXG4vKipcbiAqIFJlZHVjZSBmZWF0dXJlcyBpbiBhbnkgR2VvSlNPTiBvYmplY3QsIHNpbWlsYXIgdG8gQXJyYXkucmVkdWNlKCkuXG4gKlxuICogQG5hbWUgZmVhdHVyZVJlZHVjZVxuICogQHBhcmFtIHtGZWF0dXJlQ29sbGVjdGlvbnxGZWF0dXJlfEdlb21ldHJ5fSBnZW9qc29uIGFueSBHZW9KU09OIG9iamVjdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgYSBtZXRob2QgdGhhdCB0YWtlcyAocHJldmlvdXNWYWx1ZSwgY3VycmVudEZlYXR1cmUsIGZlYXR1cmVJbmRleClcbiAqIEBwYXJhbSB7Kn0gW2luaXRpYWxWYWx1ZV0gVmFsdWUgdG8gdXNlIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgZmlyc3QgY2FsbCBvZiB0aGUgY2FsbGJhY2suXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHZhbHVlIHRoYXQgcmVzdWx0cyBmcm9tIHRoZSByZWR1Y3Rpb24uXG4gKiBAZXhhbXBsZVxuICogdmFyIGZlYXR1cmVzID0gdHVyZi5mZWF0dXJlQ29sbGVjdGlvbihbXG4gKiAgIHR1cmYucG9pbnQoWzI2LCAzN10sIHtcImZvb1wiOiBcImJhclwifSksXG4gKiAgIHR1cmYucG9pbnQoWzM2LCA1M10sIHtcImhlbGxvXCI6IFwid29ybGRcIn0pXG4gKiBdKTtcbiAqXG4gKiB0dXJmLmZlYXR1cmVSZWR1Y2UoZmVhdHVyZXMsIGZ1bmN0aW9uIChwcmV2aW91c1ZhbHVlLCBjdXJyZW50RmVhdHVyZSwgZmVhdHVyZUluZGV4KSB7XG4gKiAgIC8vPXByZXZpb3VzVmFsdWVcbiAqICAgLy89Y3VycmVudEZlYXR1cmVcbiAqICAgLy89ZmVhdHVyZUluZGV4XG4gKiAgIHJldHVybiBjdXJyZW50RmVhdHVyZVxuICogfSk7XG4gKi9cbmZ1bmN0aW9uIGZlYXR1cmVSZWR1Y2UoZ2VvanNvbiwgY2FsbGJhY2ssIGluaXRpYWxWYWx1ZSkge1xuICB2YXIgcHJldmlvdXNWYWx1ZSA9IGluaXRpYWxWYWx1ZTtcbiAgZmVhdHVyZUVhY2goZ2VvanNvbiwgZnVuY3Rpb24gKGN1cnJlbnRGZWF0dXJlLCBmZWF0dXJlSW5kZXgpIHtcbiAgICBpZiAoZmVhdHVyZUluZGV4ID09PSAwICYmIGluaXRpYWxWYWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgcHJldmlvdXNWYWx1ZSA9IGN1cnJlbnRGZWF0dXJlO1xuICAgIGVsc2UgcHJldmlvdXNWYWx1ZSA9IGNhbGxiYWNrKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRGZWF0dXJlLCBmZWF0dXJlSW5kZXgpO1xuICB9KTtcbiAgcmV0dXJuIHByZXZpb3VzVmFsdWU7XG59XG5cbi8qKlxuICogR2V0IGFsbCBjb29yZGluYXRlcyBmcm9tIGFueSBHZW9KU09OIG9iamVjdC5cbiAqXG4gKiBAbmFtZSBjb29yZEFsbFxuICogQHBhcmFtIHtGZWF0dXJlQ29sbGVjdGlvbnxGZWF0dXJlfEdlb21ldHJ5fSBnZW9qc29uIGFueSBHZW9KU09OIG9iamVjdFxuICogQHJldHVybnMge0FycmF5PEFycmF5PG51bWJlcj4+fSBjb29yZGluYXRlIHBvc2l0aW9uIGFycmF5XG4gKiBAZXhhbXBsZVxuICogdmFyIGZlYXR1cmVzID0gdHVyZi5mZWF0dXJlQ29sbGVjdGlvbihbXG4gKiAgIHR1cmYucG9pbnQoWzI2LCAzN10sIHtmb286ICdiYXInfSksXG4gKiAgIHR1cmYucG9pbnQoWzM2LCA1M10sIHtoZWxsbzogJ3dvcmxkJ30pXG4gKiBdKTtcbiAqXG4gKiB2YXIgY29vcmRzID0gdHVyZi5jb29yZEFsbChmZWF0dXJlcyk7XG4gKiAvLz0gW1syNiwgMzddLCBbMzYsIDUzXV1cbiAqL1xuZnVuY3Rpb24gY29vcmRBbGwoZ2VvanNvbikge1xuICB2YXIgY29vcmRzID0gW107XG4gIGNvb3JkRWFjaChnZW9qc29uLCBmdW5jdGlvbiAoY29vcmQpIHtcbiAgICBjb29yZHMucHVzaChjb29yZCk7XG4gIH0pO1xuICByZXR1cm4gY29vcmRzO1xufVxuXG4vKipcbiAqIENhbGxiYWNrIGZvciBnZW9tRWFjaFxuICpcbiAqIEBjYWxsYmFjayBnZW9tRWFjaENhbGxiYWNrXG4gKiBAcGFyYW0ge0dlb21ldHJ5fSBjdXJyZW50R2VvbWV0cnkgVGhlIGN1cnJlbnQgR2VvbWV0cnkgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IGZlYXR1cmVJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgRmVhdHVyZSBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge09iamVjdH0gZmVhdHVyZVByb3BlcnRpZXMgVGhlIGN1cnJlbnQgRmVhdHVyZSBQcm9wZXJ0aWVzIGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZmVhdHVyZUJCb3ggVGhlIGN1cnJlbnQgRmVhdHVyZSBCQm94IGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gZmVhdHVyZUlkIFRoZSBjdXJyZW50IEZlYXR1cmUgSWQgYmVpbmcgcHJvY2Vzc2VkLlxuICovXG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGVhY2ggZ2VvbWV0cnkgaW4gYW55IEdlb0pTT04gb2JqZWN0LCBzaW1pbGFyIHRvIEFycmF5LmZvckVhY2goKVxuICpcbiAqIEBuYW1lIGdlb21FYWNoXG4gKiBAcGFyYW0ge0ZlYXR1cmVDb2xsZWN0aW9ufEZlYXR1cmV8R2VvbWV0cnl9IGdlb2pzb24gYW55IEdlb0pTT04gb2JqZWN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBhIG1ldGhvZCB0aGF0IHRha2VzIChjdXJyZW50R2VvbWV0cnksIGZlYXR1cmVJbmRleCwgZmVhdHVyZVByb3BlcnRpZXMsIGZlYXR1cmVCQm94LCBmZWF0dXJlSWQpXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqIEBleGFtcGxlXG4gKiB2YXIgZmVhdHVyZXMgPSB0dXJmLmZlYXR1cmVDb2xsZWN0aW9uKFtcbiAqICAgICB0dXJmLnBvaW50KFsyNiwgMzddLCB7Zm9vOiAnYmFyJ30pLFxuICogICAgIHR1cmYucG9pbnQoWzM2LCA1M10sIHtoZWxsbzogJ3dvcmxkJ30pXG4gKiBdKTtcbiAqXG4gKiB0dXJmLmdlb21FYWNoKGZlYXR1cmVzLCBmdW5jdGlvbiAoY3VycmVudEdlb21ldHJ5LCBmZWF0dXJlSW5kZXgsIGZlYXR1cmVQcm9wZXJ0aWVzLCBmZWF0dXJlQkJveCwgZmVhdHVyZUlkKSB7XG4gKiAgIC8vPWN1cnJlbnRHZW9tZXRyeVxuICogICAvLz1mZWF0dXJlSW5kZXhcbiAqICAgLy89ZmVhdHVyZVByb3BlcnRpZXNcbiAqICAgLy89ZmVhdHVyZUJCb3hcbiAqICAgLy89ZmVhdHVyZUlkXG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gZ2VvbUVhY2goZ2VvanNvbiwgY2FsbGJhY2spIHtcbiAgdmFyIGksXG4gICAgaixcbiAgICBnLFxuICAgIGdlb21ldHJ5LFxuICAgIHN0b3BHLFxuICAgIGdlb21ldHJ5TWF5YmVDb2xsZWN0aW9uLFxuICAgIGlzR2VvbWV0cnlDb2xsZWN0aW9uLFxuICAgIGZlYXR1cmVQcm9wZXJ0aWVzLFxuICAgIGZlYXR1cmVCQm94LFxuICAgIGZlYXR1cmVJZCxcbiAgICBmZWF0dXJlSW5kZXggPSAwLFxuICAgIGlzRmVhdHVyZUNvbGxlY3Rpb24gPSBnZW9qc29uLnR5cGUgPT09IFwiRmVhdHVyZUNvbGxlY3Rpb25cIixcbiAgICBpc0ZlYXR1cmUgPSBnZW9qc29uLnR5cGUgPT09IFwiRmVhdHVyZVwiLFxuICAgIHN0b3AgPSBpc0ZlYXR1cmVDb2xsZWN0aW9uID8gZ2VvanNvbi5mZWF0dXJlcy5sZW5ndGggOiAxO1xuXG4gIC8vIFRoaXMgbG9naWMgbWF5IGxvb2sgYSBsaXR0bGUgd2VpcmQuIFRoZSByZWFzb24gd2h5IGl0IGlzIHRoYXQgd2F5XG4gIC8vIGlzIGJlY2F1c2UgaXQncyB0cnlpbmcgdG8gYmUgZmFzdC4gR2VvSlNPTiBzdXBwb3J0cyBtdWx0aXBsZSBraW5kc1xuICAvLyBvZiBvYmplY3RzIGF0IGl0cyByb290OiBGZWF0dXJlQ29sbGVjdGlvbiwgRmVhdHVyZXMsIEdlb21ldHJpZXMuXG4gIC8vIFRoaXMgZnVuY3Rpb24gaGFzIHRoZSByZXNwb25zaWJpbGl0eSBvZiBoYW5kbGluZyBhbGwgb2YgdGhlbSwgYW5kIHRoYXRcbiAgLy8gbWVhbnMgdGhhdCBzb21lIG9mIHRoZSBgZm9yYCBsb29wcyB5b3Ugc2VlIGJlbG93IGFjdHVhbGx5IGp1c3QgZG9uJ3QgYXBwbHlcbiAgLy8gdG8gY2VydGFpbiBpbnB1dHMuIEZvciBpbnN0YW5jZSwgaWYgeW91IGdpdmUgdGhpcyBqdXN0IGFcbiAgLy8gUG9pbnQgZ2VvbWV0cnksIHRoZW4gYm90aCBsb29wcyBhcmUgc2hvcnQtY2lyY3VpdGVkIGFuZCBhbGwgd2UgZG9cbiAgLy8gaXMgZ3JhZHVhbGx5IHJlbmFtZSB0aGUgaW5wdXQgdW50aWwgaXQncyBjYWxsZWQgJ2dlb21ldHJ5Jy5cbiAgLy9cbiAgLy8gVGhpcyBhbHNvIGFpbXMgdG8gYWxsb2NhdGUgYXMgZmV3IHJlc291cmNlcyBhcyBwb3NzaWJsZToganVzdCBhXG4gIC8vIGZldyBudW1iZXJzIGFuZCBib29sZWFucywgcmF0aGVyIHRoYW4gYW55IHRlbXBvcmFyeSBhcnJheXMgYXMgd291bGRcbiAgLy8gYmUgcmVxdWlyZWQgd2l0aCB0aGUgbm9ybWFsaXphdGlvbiBhcHByb2FjaC5cbiAgZm9yIChpID0gMDsgaSA8IHN0b3A7IGkrKykge1xuICAgIGdlb21ldHJ5TWF5YmVDb2xsZWN0aW9uID0gaXNGZWF0dXJlQ29sbGVjdGlvblxuICAgICAgPyBnZW9qc29uLmZlYXR1cmVzW2ldLmdlb21ldHJ5XG4gICAgICA6IGlzRmVhdHVyZVxuICAgICAgPyBnZW9qc29uLmdlb21ldHJ5XG4gICAgICA6IGdlb2pzb247XG4gICAgZmVhdHVyZVByb3BlcnRpZXMgPSBpc0ZlYXR1cmVDb2xsZWN0aW9uXG4gICAgICA/IGdlb2pzb24uZmVhdHVyZXNbaV0ucHJvcGVydGllc1xuICAgICAgOiBpc0ZlYXR1cmVcbiAgICAgID8gZ2VvanNvbi5wcm9wZXJ0aWVzXG4gICAgICA6IHt9O1xuICAgIGZlYXR1cmVCQm94ID0gaXNGZWF0dXJlQ29sbGVjdGlvblxuICAgICAgPyBnZW9qc29uLmZlYXR1cmVzW2ldLmJib3hcbiAgICAgIDogaXNGZWF0dXJlXG4gICAgICA/IGdlb2pzb24uYmJveFxuICAgICAgOiB1bmRlZmluZWQ7XG4gICAgZmVhdHVyZUlkID0gaXNGZWF0dXJlQ29sbGVjdGlvblxuICAgICAgPyBnZW9qc29uLmZlYXR1cmVzW2ldLmlkXG4gICAgICA6IGlzRmVhdHVyZVxuICAgICAgPyBnZW9qc29uLmlkXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICBpc0dlb21ldHJ5Q29sbGVjdGlvbiA9IGdlb21ldHJ5TWF5YmVDb2xsZWN0aW9uXG4gICAgICA/IGdlb21ldHJ5TWF5YmVDb2xsZWN0aW9uLnR5cGUgPT09IFwiR2VvbWV0cnlDb2xsZWN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gICAgc3RvcEcgPSBpc0dlb21ldHJ5Q29sbGVjdGlvblxuICAgICAgPyBnZW9tZXRyeU1heWJlQ29sbGVjdGlvbi5nZW9tZXRyaWVzLmxlbmd0aFxuICAgICAgOiAxO1xuXG4gICAgZm9yIChnID0gMDsgZyA8IHN0b3BHOyBnKyspIHtcbiAgICAgIGdlb21ldHJ5ID0gaXNHZW9tZXRyeUNvbGxlY3Rpb25cbiAgICAgICAgPyBnZW9tZXRyeU1heWJlQ29sbGVjdGlvbi5nZW9tZXRyaWVzW2ddXG4gICAgICAgIDogZ2VvbWV0cnlNYXliZUNvbGxlY3Rpb247XG5cbiAgICAgIC8vIEhhbmRsZSBudWxsIEdlb21ldHJ5XG4gICAgICBpZiAoZ2VvbWV0cnkgPT09IG51bGwpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNhbGxiYWNrKFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIGZlYXR1cmVJbmRleCxcbiAgICAgICAgICAgIGZlYXR1cmVQcm9wZXJ0aWVzLFxuICAgICAgICAgICAgZmVhdHVyZUJCb3gsXG4gICAgICAgICAgICBmZWF0dXJlSWRcbiAgICAgICAgICApID09PSBmYWxzZVxuICAgICAgICApXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAoZ2VvbWV0cnkudHlwZSkge1xuICAgICAgICBjYXNlIFwiUG9pbnRcIjpcbiAgICAgICAgY2FzZSBcIkxpbmVTdHJpbmdcIjpcbiAgICAgICAgY2FzZSBcIk11bHRpUG9pbnRcIjpcbiAgICAgICAgY2FzZSBcIlBvbHlnb25cIjpcbiAgICAgICAgY2FzZSBcIk11bHRpTGluZVN0cmluZ1wiOlxuICAgICAgICBjYXNlIFwiTXVsdGlQb2x5Z29uXCI6IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjYWxsYmFjayhcbiAgICAgICAgICAgICAgZ2VvbWV0cnksXG4gICAgICAgICAgICAgIGZlYXR1cmVJbmRleCxcbiAgICAgICAgICAgICAgZmVhdHVyZVByb3BlcnRpZXMsXG4gICAgICAgICAgICAgIGZlYXR1cmVCQm94LFxuICAgICAgICAgICAgICBmZWF0dXJlSWRcbiAgICAgICAgICAgICkgPT09IGZhbHNlXG4gICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJHZW9tZXRyeUNvbGxlY3Rpb25cIjoge1xuICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBnZW9tZXRyeS5nZW9tZXRyaWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGNhbGxiYWNrKFxuICAgICAgICAgICAgICAgIGdlb21ldHJ5Lmdlb21ldHJpZXNbal0sXG4gICAgICAgICAgICAgICAgZmVhdHVyZUluZGV4LFxuICAgICAgICAgICAgICAgIGZlYXR1cmVQcm9wZXJ0aWVzLFxuICAgICAgICAgICAgICAgIGZlYXR1cmVCQm94LFxuICAgICAgICAgICAgICAgIGZlYXR1cmVJZFxuICAgICAgICAgICAgICApID09PSBmYWxzZVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBHZW9tZXRyeSBUeXBlXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBPbmx5IGluY3JlYXNlIGBmZWF0dXJlSW5kZXhgIHBlciBlYWNoIGZlYXR1cmVcbiAgICBmZWF0dXJlSW5kZXgrKztcbiAgfVxufVxuXG4vKipcbiAqIENhbGxiYWNrIGZvciBnZW9tUmVkdWNlXG4gKlxuICogVGhlIGZpcnN0IHRpbWUgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGlzIGNhbGxlZCwgdGhlIHZhbHVlcyBwcm92aWRlZCBhcyBhcmd1bWVudHMgZGVwZW5kXG4gKiBvbiB3aGV0aGVyIHRoZSByZWR1Y2UgbWV0aG9kIGhhcyBhbiBpbml0aWFsVmFsdWUgYXJndW1lbnQuXG4gKlxuICogSWYgYW4gaW5pdGlhbFZhbHVlIGlzIHByb3ZpZGVkIHRvIHRoZSByZWR1Y2UgbWV0aG9kOlxuICogIC0gVGhlIHByZXZpb3VzVmFsdWUgYXJndW1lbnQgaXMgaW5pdGlhbFZhbHVlLlxuICogIC0gVGhlIGN1cnJlbnRWYWx1ZSBhcmd1bWVudCBpcyB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IGVsZW1lbnQgcHJlc2VudCBpbiB0aGUgYXJyYXkuXG4gKlxuICogSWYgYW4gaW5pdGlhbFZhbHVlIGlzIG5vdCBwcm92aWRlZDpcbiAqICAtIFRoZSBwcmV2aW91c1ZhbHVlIGFyZ3VtZW50IGlzIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgZWxlbWVudCBwcmVzZW50IGluIHRoZSBhcnJheS5cbiAqICAtIFRoZSBjdXJyZW50VmFsdWUgYXJndW1lbnQgaXMgdGhlIHZhbHVlIG9mIHRoZSBzZWNvbmQgZWxlbWVudCBwcmVzZW50IGluIHRoZSBhcnJheS5cbiAqXG4gKiBAY2FsbGJhY2sgZ2VvbVJlZHVjZUNhbGxiYWNrXG4gKiBAcGFyYW0geyp9IHByZXZpb3VzVmFsdWUgVGhlIGFjY3VtdWxhdGVkIHZhbHVlIHByZXZpb3VzbHkgcmV0dXJuZWQgaW4gdGhlIGxhc3QgaW52b2NhdGlvblxuICogb2YgdGhlIGNhbGxiYWNrLCBvciBpbml0aWFsVmFsdWUsIGlmIHN1cHBsaWVkLlxuICogQHBhcmFtIHtHZW9tZXRyeX0gY3VycmVudEdlb21ldHJ5IFRoZSBjdXJyZW50IEdlb21ldHJ5IGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmZWF0dXJlSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIEZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtPYmplY3R9IGZlYXR1cmVQcm9wZXJ0aWVzIFRoZSBjdXJyZW50IEZlYXR1cmUgUHJvcGVydGllcyBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGZlYXR1cmVCQm94IFRoZSBjdXJyZW50IEZlYXR1cmUgQkJveCBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IGZlYXR1cmVJZCBUaGUgY3VycmVudCBGZWF0dXJlIElkIGJlaW5nIHByb2Nlc3NlZC5cbiAqL1xuXG4vKipcbiAqIFJlZHVjZSBnZW9tZXRyeSBpbiBhbnkgR2VvSlNPTiBvYmplY3QsIHNpbWlsYXIgdG8gQXJyYXkucmVkdWNlKCkuXG4gKlxuICogQG5hbWUgZ2VvbVJlZHVjZVxuICogQHBhcmFtIHtGZWF0dXJlQ29sbGVjdGlvbnxGZWF0dXJlfEdlb21ldHJ5fSBnZW9qc29uIGFueSBHZW9KU09OIG9iamVjdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgYSBtZXRob2QgdGhhdCB0YWtlcyAocHJldmlvdXNWYWx1ZSwgY3VycmVudEdlb21ldHJ5LCBmZWF0dXJlSW5kZXgsIGZlYXR1cmVQcm9wZXJ0aWVzLCBmZWF0dXJlQkJveCwgZmVhdHVyZUlkKVxuICogQHBhcmFtIHsqfSBbaW5pdGlhbFZhbHVlXSBWYWx1ZSB0byB1c2UgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBmaXJzdCBjYWxsIG9mIHRoZSBjYWxsYmFjay5cbiAqIEByZXR1cm5zIHsqfSBUaGUgdmFsdWUgdGhhdCByZXN1bHRzIGZyb20gdGhlIHJlZHVjdGlvbi5cbiAqIEBleGFtcGxlXG4gKiB2YXIgZmVhdHVyZXMgPSB0dXJmLmZlYXR1cmVDb2xsZWN0aW9uKFtcbiAqICAgICB0dXJmLnBvaW50KFsyNiwgMzddLCB7Zm9vOiAnYmFyJ30pLFxuICogICAgIHR1cmYucG9pbnQoWzM2LCA1M10sIHtoZWxsbzogJ3dvcmxkJ30pXG4gKiBdKTtcbiAqXG4gKiB0dXJmLmdlb21SZWR1Y2UoZmVhdHVyZXMsIGZ1bmN0aW9uIChwcmV2aW91c1ZhbHVlLCBjdXJyZW50R2VvbWV0cnksIGZlYXR1cmVJbmRleCwgZmVhdHVyZVByb3BlcnRpZXMsIGZlYXR1cmVCQm94LCBmZWF0dXJlSWQpIHtcbiAqICAgLy89cHJldmlvdXNWYWx1ZVxuICogICAvLz1jdXJyZW50R2VvbWV0cnlcbiAqICAgLy89ZmVhdHVyZUluZGV4XG4gKiAgIC8vPWZlYXR1cmVQcm9wZXJ0aWVzXG4gKiAgIC8vPWZlYXR1cmVCQm94XG4gKiAgIC8vPWZlYXR1cmVJZFxuICogICByZXR1cm4gY3VycmVudEdlb21ldHJ5XG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gZ2VvbVJlZHVjZShnZW9qc29uLCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBwcmV2aW91c1ZhbHVlID0gaW5pdGlhbFZhbHVlO1xuICBnZW9tRWFjaChcbiAgICBnZW9qc29uLFxuICAgIGZ1bmN0aW9uIChcbiAgICAgIGN1cnJlbnRHZW9tZXRyeSxcbiAgICAgIGZlYXR1cmVJbmRleCxcbiAgICAgIGZlYXR1cmVQcm9wZXJ0aWVzLFxuICAgICAgZmVhdHVyZUJCb3gsXG4gICAgICBmZWF0dXJlSWRcbiAgICApIHtcbiAgICAgIGlmIChmZWF0dXJlSW5kZXggPT09IDAgJiYgaW5pdGlhbFZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgIHByZXZpb3VzVmFsdWUgPSBjdXJyZW50R2VvbWV0cnk7XG4gICAgICBlbHNlXG4gICAgICAgIHByZXZpb3VzVmFsdWUgPSBjYWxsYmFjayhcbiAgICAgICAgICBwcmV2aW91c1ZhbHVlLFxuICAgICAgICAgIGN1cnJlbnRHZW9tZXRyeSxcbiAgICAgICAgICBmZWF0dXJlSW5kZXgsXG4gICAgICAgICAgZmVhdHVyZVByb3BlcnRpZXMsXG4gICAgICAgICAgZmVhdHVyZUJCb3gsXG4gICAgICAgICAgZmVhdHVyZUlkXG4gICAgICAgICk7XG4gICAgfVxuICApO1xuICByZXR1cm4gcHJldmlvdXNWYWx1ZTtcbn1cblxuLyoqXG4gKiBDYWxsYmFjayBmb3IgZmxhdHRlbkVhY2hcbiAqXG4gKiBAY2FsbGJhY2sgZmxhdHRlbkVhY2hDYWxsYmFja1xuICogQHBhcmFtIHtGZWF0dXJlfSBjdXJyZW50RmVhdHVyZSBUaGUgY3VycmVudCBmbGF0dGVuZWQgZmVhdHVyZSBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gZmVhdHVyZUluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBGZWF0dXJlIGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtdWx0aUZlYXR1cmVJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgTXVsdGktRmVhdHVyZSBiZWluZyBwcm9jZXNzZWQuXG4gKi9cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgZmxhdHRlbmVkIGZlYXR1cmVzIGluIGFueSBHZW9KU09OIG9iamVjdCwgc2ltaWxhciB0b1xuICogQXJyYXkuZm9yRWFjaC5cbiAqXG4gKiBAbmFtZSBmbGF0dGVuRWFjaFxuICogQHBhcmFtIHtGZWF0dXJlQ29sbGVjdGlvbnxGZWF0dXJlfEdlb21ldHJ5fSBnZW9qc29uIGFueSBHZW9KU09OIG9iamVjdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgYSBtZXRob2QgdGhhdCB0YWtlcyAoY3VycmVudEZlYXR1cmUsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgpXG4gKiBAZXhhbXBsZVxuICogdmFyIGZlYXR1cmVzID0gdHVyZi5mZWF0dXJlQ29sbGVjdGlvbihbXG4gKiAgICAgdHVyZi5wb2ludChbMjYsIDM3XSwge2ZvbzogJ2Jhcid9KSxcbiAqICAgICB0dXJmLm11bHRpUG9pbnQoW1s0MCwgMzBdLCBbMzYsIDUzXV0sIHtoZWxsbzogJ3dvcmxkJ30pXG4gKiBdKTtcbiAqXG4gKiB0dXJmLmZsYXR0ZW5FYWNoKGZlYXR1cmVzLCBmdW5jdGlvbiAoY3VycmVudEZlYXR1cmUsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgpIHtcbiAqICAgLy89Y3VycmVudEZlYXR1cmVcbiAqICAgLy89ZmVhdHVyZUluZGV4XG4gKiAgIC8vPW11bHRpRmVhdHVyZUluZGV4XG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gZmxhdHRlbkVhY2goZ2VvanNvbiwgY2FsbGJhY2spIHtcbiAgZ2VvbUVhY2goZ2VvanNvbiwgZnVuY3Rpb24gKGdlb21ldHJ5LCBmZWF0dXJlSW5kZXgsIHByb3BlcnRpZXMsIGJib3gsIGlkKSB7XG4gICAgLy8gQ2FsbGJhY2sgZm9yIHNpbmdsZSBnZW9tZXRyeVxuICAgIHZhciB0eXBlID0gZ2VvbWV0cnkgPT09IG51bGwgPyBudWxsIDogZ2VvbWV0cnkudHlwZTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgbnVsbDpcbiAgICAgIGNhc2UgXCJQb2ludFwiOlxuICAgICAgY2FzZSBcIkxpbmVTdHJpbmdcIjpcbiAgICAgIGNhc2UgXCJQb2x5Z29uXCI6XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjYWxsYmFjayhcbiAgICAgICAgICAgIGZlYXR1cmUoZ2VvbWV0cnksIHByb3BlcnRpZXMsIHsgYmJveDogYmJveCwgaWQ6IGlkIH0pLFxuICAgICAgICAgICAgZmVhdHVyZUluZGV4LFxuICAgICAgICAgICAgMFxuICAgICAgICAgICkgPT09IGZhbHNlXG4gICAgICAgIClcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZ2VvbVR5cGU7XG5cbiAgICAvLyBDYWxsYmFjayBmb3IgbXVsdGktZ2VvbWV0cnlcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgXCJNdWx0aVBvaW50XCI6XG4gICAgICAgIGdlb21UeXBlID0gXCJQb2ludFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJNdWx0aUxpbmVTdHJpbmdcIjpcbiAgICAgICAgZ2VvbVR5cGUgPSBcIkxpbmVTdHJpbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiTXVsdGlQb2x5Z29uXCI6XG4gICAgICAgIGdlb21UeXBlID0gXCJQb2x5Z29uXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZvciAoXG4gICAgICB2YXIgbXVsdGlGZWF0dXJlSW5kZXggPSAwO1xuICAgICAgbXVsdGlGZWF0dXJlSW5kZXggPCBnZW9tZXRyeS5jb29yZGluYXRlcy5sZW5ndGg7XG4gICAgICBtdWx0aUZlYXR1cmVJbmRleCsrXG4gICAgKSB7XG4gICAgICB2YXIgY29vcmRpbmF0ZSA9IGdlb21ldHJ5LmNvb3JkaW5hdGVzW211bHRpRmVhdHVyZUluZGV4XTtcbiAgICAgIHZhciBnZW9tID0ge1xuICAgICAgICB0eXBlOiBnZW9tVHlwZSxcbiAgICAgICAgY29vcmRpbmF0ZXM6IGNvb3JkaW5hdGUsXG4gICAgICB9O1xuICAgICAgaWYgKFxuICAgICAgICBjYWxsYmFjayhmZWF0dXJlKGdlb20sIHByb3BlcnRpZXMpLCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4KSA9PT1cbiAgICAgICAgZmFsc2VcbiAgICAgIClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQ2FsbGJhY2sgZm9yIGZsYXR0ZW5SZWR1Y2VcbiAqXG4gKiBUaGUgZmlyc3QgdGltZSB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gaXMgY2FsbGVkLCB0aGUgdmFsdWVzIHByb3ZpZGVkIGFzIGFyZ3VtZW50cyBkZXBlbmRcbiAqIG9uIHdoZXRoZXIgdGhlIHJlZHVjZSBtZXRob2QgaGFzIGFuIGluaXRpYWxWYWx1ZSBhcmd1bWVudC5cbiAqXG4gKiBJZiBhbiBpbml0aWFsVmFsdWUgaXMgcHJvdmlkZWQgdG8gdGhlIHJlZHVjZSBtZXRob2Q6XG4gKiAgLSBUaGUgcHJldmlvdXNWYWx1ZSBhcmd1bWVudCBpcyBpbml0aWFsVmFsdWUuXG4gKiAgLSBUaGUgY3VycmVudFZhbHVlIGFyZ3VtZW50IGlzIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgZWxlbWVudCBwcmVzZW50IGluIHRoZSBhcnJheS5cbiAqXG4gKiBJZiBhbiBpbml0aWFsVmFsdWUgaXMgbm90IHByb3ZpZGVkOlxuICogIC0gVGhlIHByZXZpb3VzVmFsdWUgYXJndW1lbnQgaXMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBlbGVtZW50IHByZXNlbnQgaW4gdGhlIGFycmF5LlxuICogIC0gVGhlIGN1cnJlbnRWYWx1ZSBhcmd1bWVudCBpcyB0aGUgdmFsdWUgb2YgdGhlIHNlY29uZCBlbGVtZW50IHByZXNlbnQgaW4gdGhlIGFycmF5LlxuICpcbiAqIEBjYWxsYmFjayBmbGF0dGVuUmVkdWNlQ2FsbGJhY2tcbiAqIEBwYXJhbSB7Kn0gcHJldmlvdXNWYWx1ZSBUaGUgYWNjdW11bGF0ZWQgdmFsdWUgcHJldmlvdXNseSByZXR1cm5lZCBpbiB0aGUgbGFzdCBpbnZvY2F0aW9uXG4gKiBvZiB0aGUgY2FsbGJhY2ssIG9yIGluaXRpYWxWYWx1ZSwgaWYgc3VwcGxpZWQuXG4gKiBAcGFyYW0ge0ZlYXR1cmV9IGN1cnJlbnRGZWF0dXJlIFRoZSBjdXJyZW50IEZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IGZlYXR1cmVJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgRmVhdHVyZSBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gbXVsdGlGZWF0dXJlSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIE11bHRpLUZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkLlxuICovXG5cbi8qKlxuICogUmVkdWNlIGZsYXR0ZW5lZCBmZWF0dXJlcyBpbiBhbnkgR2VvSlNPTiBvYmplY3QsIHNpbWlsYXIgdG8gQXJyYXkucmVkdWNlKCkuXG4gKlxuICogQG5hbWUgZmxhdHRlblJlZHVjZVxuICogQHBhcmFtIHtGZWF0dXJlQ29sbGVjdGlvbnxGZWF0dXJlfEdlb21ldHJ5fSBnZW9qc29uIGFueSBHZW9KU09OIG9iamVjdFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgYSBtZXRob2QgdGhhdCB0YWtlcyAocHJldmlvdXNWYWx1ZSwgY3VycmVudEZlYXR1cmUsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgpXG4gKiBAcGFyYW0geyp9IFtpbml0aWFsVmFsdWVdIFZhbHVlIHRvIHVzZSBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIGZpcnN0IGNhbGwgb2YgdGhlIGNhbGxiYWNrLlxuICogQHJldHVybnMgeyp9IFRoZSB2YWx1ZSB0aGF0IHJlc3VsdHMgZnJvbSB0aGUgcmVkdWN0aW9uLlxuICogQGV4YW1wbGVcbiAqIHZhciBmZWF0dXJlcyA9IHR1cmYuZmVhdHVyZUNvbGxlY3Rpb24oW1xuICogICAgIHR1cmYucG9pbnQoWzI2LCAzN10sIHtmb286ICdiYXInfSksXG4gKiAgICAgdHVyZi5tdWx0aVBvaW50KFtbNDAsIDMwXSwgWzM2LCA1M11dLCB7aGVsbG86ICd3b3JsZCd9KVxuICogXSk7XG4gKlxuICogdHVyZi5mbGF0dGVuUmVkdWNlKGZlYXR1cmVzLCBmdW5jdGlvbiAocHJldmlvdXNWYWx1ZSwgY3VycmVudEZlYXR1cmUsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgpIHtcbiAqICAgLy89cHJldmlvdXNWYWx1ZVxuICogICAvLz1jdXJyZW50RmVhdHVyZVxuICogICAvLz1mZWF0dXJlSW5kZXhcbiAqICAgLy89bXVsdGlGZWF0dXJlSW5kZXhcbiAqICAgcmV0dXJuIGN1cnJlbnRGZWF0dXJlXG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gZmxhdHRlblJlZHVjZShnZW9qc29uLCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBwcmV2aW91c1ZhbHVlID0gaW5pdGlhbFZhbHVlO1xuICBmbGF0dGVuRWFjaChcbiAgICBnZW9qc29uLFxuICAgIGZ1bmN0aW9uIChjdXJyZW50RmVhdHVyZSwgZmVhdHVyZUluZGV4LCBtdWx0aUZlYXR1cmVJbmRleCkge1xuICAgICAgaWYgKFxuICAgICAgICBmZWF0dXJlSW5kZXggPT09IDAgJiZcbiAgICAgICAgbXVsdGlGZWF0dXJlSW5kZXggPT09IDAgJiZcbiAgICAgICAgaW5pdGlhbFZhbHVlID09PSB1bmRlZmluZWRcbiAgICAgIClcbiAgICAgICAgcHJldmlvdXNWYWx1ZSA9IGN1cnJlbnRGZWF0dXJlO1xuICAgICAgZWxzZVxuICAgICAgICBwcmV2aW91c1ZhbHVlID0gY2FsbGJhY2soXG4gICAgICAgICAgcHJldmlvdXNWYWx1ZSxcbiAgICAgICAgICBjdXJyZW50RmVhdHVyZSxcbiAgICAgICAgICBmZWF0dXJlSW5kZXgsXG4gICAgICAgICAgbXVsdGlGZWF0dXJlSW5kZXhcbiAgICAgICAgKTtcbiAgICB9XG4gICk7XG4gIHJldHVybiBwcmV2aW91c1ZhbHVlO1xufVxuXG4vKipcbiAqIENhbGxiYWNrIGZvciBzZWdtZW50RWFjaFxuICpcbiAqIEBjYWxsYmFjayBzZWdtZW50RWFjaENhbGxiYWNrXG4gKiBAcGFyYW0ge0ZlYXR1cmU8TGluZVN0cmluZz59IGN1cnJlbnRTZWdtZW50IFRoZSBjdXJyZW50IFNlZ21lbnQgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IGZlYXR1cmVJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgRmVhdHVyZSBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gbXVsdGlGZWF0dXJlSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIE11bHRpLUZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IGdlb21ldHJ5SW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIEdlb21ldHJ5IGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzZWdtZW50SW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIFNlZ21lbnQgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgMi12ZXJ0ZXggbGluZSBzZWdtZW50IGluIGFueSBHZW9KU09OIG9iamVjdCwgc2ltaWxhciB0byBBcnJheS5mb3JFYWNoKClcbiAqIChNdWx0aSlQb2ludCBnZW9tZXRyaWVzIGRvIG5vdCBjb250YWluIHNlZ21lbnRzIHRoZXJlZm9yZSB0aGV5IGFyZSBpZ25vcmVkIGR1cmluZyB0aGlzIG9wZXJhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0ZlYXR1cmVDb2xsZWN0aW9ufEZlYXR1cmV8R2VvbWV0cnl9IGdlb2pzb24gYW55IEdlb0pTT05cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGEgbWV0aG9kIHRoYXQgdGFrZXMgKGN1cnJlbnRTZWdtZW50LCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4LCBnZW9tZXRyeUluZGV4LCBzZWdtZW50SW5kZXgpXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqIEBleGFtcGxlXG4gKiB2YXIgcG9seWdvbiA9IHR1cmYucG9seWdvbihbW1stNTAsIDVdLCBbLTQwLCAtMTBdLCBbLTUwLCAtMTBdLCBbLTQwLCA1XSwgWy01MCwgNV1dXSk7XG4gKlxuICogLy8gSXRlcmF0ZSBvdmVyIEdlb0pTT04gYnkgMi12ZXJ0ZXggc2VnbWVudHNcbiAqIHR1cmYuc2VnbWVudEVhY2gocG9seWdvbiwgZnVuY3Rpb24gKGN1cnJlbnRTZWdtZW50LCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4LCBnZW9tZXRyeUluZGV4LCBzZWdtZW50SW5kZXgpIHtcbiAqICAgLy89Y3VycmVudFNlZ21lbnRcbiAqICAgLy89ZmVhdHVyZUluZGV4XG4gKiAgIC8vPW11bHRpRmVhdHVyZUluZGV4XG4gKiAgIC8vPWdlb21ldHJ5SW5kZXhcbiAqICAgLy89c2VnbWVudEluZGV4XG4gKiB9KTtcbiAqXG4gKiAvLyBDYWxjdWxhdGUgdGhlIHRvdGFsIG51bWJlciBvZiBzZWdtZW50c1xuICogdmFyIHRvdGFsID0gMDtcbiAqIHR1cmYuc2VnbWVudEVhY2gocG9seWdvbiwgZnVuY3Rpb24gKCkge1xuICogICAgIHRvdGFsKys7XG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gc2VnbWVudEVhY2goZ2VvanNvbiwgY2FsbGJhY2spIHtcbiAgZmxhdHRlbkVhY2goZ2VvanNvbiwgZnVuY3Rpb24gKGZlYXR1cmUkJDEsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgpIHtcbiAgICB2YXIgc2VnbWVudEluZGV4ID0gMDtcblxuICAgIC8vIEV4Y2x1ZGUgbnVsbCBHZW9tZXRyaWVzXG4gICAgaWYgKCFmZWF0dXJlJCQxLmdlb21ldHJ5KSByZXR1cm47XG4gICAgLy8gKE11bHRpKVBvaW50IGdlb21ldHJpZXMgZG8gbm90IGNvbnRhaW4gc2VnbWVudHMgdGhlcmVmb3JlIHRoZXkgYXJlIGlnbm9yZWQgZHVyaW5nIHRoaXMgb3BlcmF0aW9uLlxuICAgIHZhciB0eXBlID0gZmVhdHVyZSQkMS5nZW9tZXRyeS50eXBlO1xuICAgIGlmICh0eXBlID09PSBcIlBvaW50XCIgfHwgdHlwZSA9PT0gXCJNdWx0aVBvaW50XCIpIHJldHVybjtcblxuICAgIC8vIEdlbmVyYXRlIDItdmVydGV4IGxpbmUgc2VnbWVudHNcbiAgICB2YXIgcHJldmlvdXNDb29yZHM7XG4gICAgdmFyIHByZXZpb3VzRmVhdHVyZUluZGV4ID0gMDtcbiAgICB2YXIgcHJldmlvdXNNdWx0aUluZGV4ID0gMDtcbiAgICB2YXIgcHJldkdlb21JbmRleCA9IDA7XG4gICAgaWYgKFxuICAgICAgY29vcmRFYWNoKFxuICAgICAgICBmZWF0dXJlJCQxLFxuICAgICAgICBmdW5jdGlvbiAoXG4gICAgICAgICAgY3VycmVudENvb3JkLFxuICAgICAgICAgIGNvb3JkSW5kZXgsXG4gICAgICAgICAgZmVhdHVyZUluZGV4Q29vcmQsXG4gICAgICAgICAgbXVsdGlQYXJ0SW5kZXhDb29yZCxcbiAgICAgICAgICBnZW9tZXRyeUluZGV4XG4gICAgICAgICkge1xuICAgICAgICAgIC8vIFNpbXVsYXRpbmcgYSBtZXRhLmNvb3JkUmVkdWNlKCkgc2luY2UgYHJlZHVjZWAgb3BlcmF0aW9ucyBjYW5ub3QgYmUgc3RvcHBlZCBieSByZXR1cm5pbmcgYGZhbHNlYFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHByZXZpb3VzQ29vcmRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIGZlYXR1cmVJbmRleCA+IHByZXZpb3VzRmVhdHVyZUluZGV4IHx8XG4gICAgICAgICAgICBtdWx0aVBhcnRJbmRleENvb3JkID4gcHJldmlvdXNNdWx0aUluZGV4IHx8XG4gICAgICAgICAgICBnZW9tZXRyeUluZGV4ID4gcHJldkdlb21JbmRleFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJldmlvdXNDb29yZHMgPSBjdXJyZW50Q29vcmQ7XG4gICAgICAgICAgICBwcmV2aW91c0ZlYXR1cmVJbmRleCA9IGZlYXR1cmVJbmRleDtcbiAgICAgICAgICAgIHByZXZpb3VzTXVsdGlJbmRleCA9IG11bHRpUGFydEluZGV4Q29vcmQ7XG4gICAgICAgICAgICBwcmV2R2VvbUluZGV4ID0gZ2VvbWV0cnlJbmRleDtcbiAgICAgICAgICAgIHNlZ21lbnRJbmRleCA9IDA7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBjdXJyZW50U2VnbWVudCA9IGxpbmVTdHJpbmcoXG4gICAgICAgICAgICBbcHJldmlvdXNDb29yZHMsIGN1cnJlbnRDb29yZF0sXG4gICAgICAgICAgICBmZWF0dXJlJCQxLnByb3BlcnRpZXNcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGNhbGxiYWNrKFxuICAgICAgICAgICAgICBjdXJyZW50U2VnbWVudCxcbiAgICAgICAgICAgICAgZmVhdHVyZUluZGV4LFxuICAgICAgICAgICAgICBtdWx0aUZlYXR1cmVJbmRleCxcbiAgICAgICAgICAgICAgZ2VvbWV0cnlJbmRleCxcbiAgICAgICAgICAgICAgc2VnbWVudEluZGV4XG4gICAgICAgICAgICApID09PSBmYWxzZVxuICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICBzZWdtZW50SW5kZXgrKztcbiAgICAgICAgICBwcmV2aW91c0Nvb3JkcyA9IGN1cnJlbnRDb29yZDtcbiAgICAgICAgfVxuICAgICAgKSA9PT0gZmFsc2VcbiAgICApXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufVxuXG4vKipcbiAqIENhbGxiYWNrIGZvciBzZWdtZW50UmVkdWNlXG4gKlxuICogVGhlIGZpcnN0IHRpbWUgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGlzIGNhbGxlZCwgdGhlIHZhbHVlcyBwcm92aWRlZCBhcyBhcmd1bWVudHMgZGVwZW5kXG4gKiBvbiB3aGV0aGVyIHRoZSByZWR1Y2UgbWV0aG9kIGhhcyBhbiBpbml0aWFsVmFsdWUgYXJndW1lbnQuXG4gKlxuICogSWYgYW4gaW5pdGlhbFZhbHVlIGlzIHByb3ZpZGVkIHRvIHRoZSByZWR1Y2UgbWV0aG9kOlxuICogIC0gVGhlIHByZXZpb3VzVmFsdWUgYXJndW1lbnQgaXMgaW5pdGlhbFZhbHVlLlxuICogIC0gVGhlIGN1cnJlbnRWYWx1ZSBhcmd1bWVudCBpcyB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IGVsZW1lbnQgcHJlc2VudCBpbiB0aGUgYXJyYXkuXG4gKlxuICogSWYgYW4gaW5pdGlhbFZhbHVlIGlzIG5vdCBwcm92aWRlZDpcbiAqICAtIFRoZSBwcmV2aW91c1ZhbHVlIGFyZ3VtZW50IGlzIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgZWxlbWVudCBwcmVzZW50IGluIHRoZSBhcnJheS5cbiAqICAtIFRoZSBjdXJyZW50VmFsdWUgYXJndW1lbnQgaXMgdGhlIHZhbHVlIG9mIHRoZSBzZWNvbmQgZWxlbWVudCBwcmVzZW50IGluIHRoZSBhcnJheS5cbiAqXG4gKiBAY2FsbGJhY2sgc2VnbWVudFJlZHVjZUNhbGxiYWNrXG4gKiBAcGFyYW0geyp9IHByZXZpb3VzVmFsdWUgVGhlIGFjY3VtdWxhdGVkIHZhbHVlIHByZXZpb3VzbHkgcmV0dXJuZWQgaW4gdGhlIGxhc3QgaW52b2NhdGlvblxuICogb2YgdGhlIGNhbGxiYWNrLCBvciBpbml0aWFsVmFsdWUsIGlmIHN1cHBsaWVkLlxuICogQHBhcmFtIHtGZWF0dXJlPExpbmVTdHJpbmc+fSBjdXJyZW50U2VnbWVudCBUaGUgY3VycmVudCBTZWdtZW50IGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmZWF0dXJlSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIEZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkLlxuICogQHBhcmFtIHtudW1iZXJ9IG11bHRpRmVhdHVyZUluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBNdWx0aS1GZWF0dXJlIGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBnZW9tZXRyeUluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBHZW9tZXRyeSBiZWluZyBwcm9jZXNzZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gc2VnbWVudEluZGV4IFRoZSBjdXJyZW50IGluZGV4IG9mIHRoZSBTZWdtZW50IGJlaW5nIHByb2Nlc3NlZC5cbiAqL1xuXG4vKipcbiAqIFJlZHVjZSAyLXZlcnRleCBsaW5lIHNlZ21lbnQgaW4gYW55IEdlb0pTT04gb2JqZWN0LCBzaW1pbGFyIHRvIEFycmF5LnJlZHVjZSgpXG4gKiAoTXVsdGkpUG9pbnQgZ2VvbWV0cmllcyBkbyBub3QgY29udGFpbiBzZWdtZW50cyB0aGVyZWZvcmUgdGhleSBhcmUgaWdub3JlZCBkdXJpbmcgdGhpcyBvcGVyYXRpb24uXG4gKlxuICogQHBhcmFtIHtGZWF0dXJlQ29sbGVjdGlvbnxGZWF0dXJlfEdlb21ldHJ5fSBnZW9qc29uIGFueSBHZW9KU09OXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBhIG1ldGhvZCB0aGF0IHRha2VzIChwcmV2aW91c1ZhbHVlLCBjdXJyZW50U2VnbWVudCwgY3VycmVudEluZGV4KVxuICogQHBhcmFtIHsqfSBbaW5pdGlhbFZhbHVlXSBWYWx1ZSB0byB1c2UgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBmaXJzdCBjYWxsIG9mIHRoZSBjYWxsYmFjay5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICogQGV4YW1wbGVcbiAqIHZhciBwb2x5Z29uID0gdHVyZi5wb2x5Z29uKFtbWy01MCwgNV0sIFstNDAsIC0xMF0sIFstNTAsIC0xMF0sIFstNDAsIDVdLCBbLTUwLCA1XV1dKTtcbiAqXG4gKiAvLyBJdGVyYXRlIG92ZXIgR2VvSlNPTiBieSAyLXZlcnRleCBzZWdtZW50c1xuICogdHVyZi5zZWdtZW50UmVkdWNlKHBvbHlnb24sIGZ1bmN0aW9uIChwcmV2aW91c1NlZ21lbnQsIGN1cnJlbnRTZWdtZW50LCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4LCBnZW9tZXRyeUluZGV4LCBzZWdtZW50SW5kZXgpIHtcbiAqICAgLy89IHByZXZpb3VzU2VnbWVudFxuICogICAvLz0gY3VycmVudFNlZ21lbnRcbiAqICAgLy89IGZlYXR1cmVJbmRleFxuICogICAvLz0gbXVsdGlGZWF0dXJlSW5kZXhcbiAqICAgLy89IGdlb21ldHJ5SW5kZXhcbiAqICAgLy89IHNlZ21lbnRJbmRleFxuICogICByZXR1cm4gY3VycmVudFNlZ21lbnRcbiAqIH0pO1xuICpcbiAqIC8vIENhbGN1bGF0ZSB0aGUgdG90YWwgbnVtYmVyIG9mIHNlZ21lbnRzXG4gKiB2YXIgaW5pdGlhbFZhbHVlID0gMFxuICogdmFyIHRvdGFsID0gdHVyZi5zZWdtZW50UmVkdWNlKHBvbHlnb24sIGZ1bmN0aW9uIChwcmV2aW91c1ZhbHVlKSB7XG4gKiAgICAgcHJldmlvdXNWYWx1ZSsrO1xuICogICAgIHJldHVybiBwcmV2aW91c1ZhbHVlO1xuICogfSwgaW5pdGlhbFZhbHVlKTtcbiAqL1xuZnVuY3Rpb24gc2VnbWVudFJlZHVjZShnZW9qc29uLCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBwcmV2aW91c1ZhbHVlID0gaW5pdGlhbFZhbHVlO1xuICB2YXIgc3RhcnRlZCA9IGZhbHNlO1xuICBzZWdtZW50RWFjaChcbiAgICBnZW9qc29uLFxuICAgIGZ1bmN0aW9uIChcbiAgICAgIGN1cnJlbnRTZWdtZW50LFxuICAgICAgZmVhdHVyZUluZGV4LFxuICAgICAgbXVsdGlGZWF0dXJlSW5kZXgsXG4gICAgICBnZW9tZXRyeUluZGV4LFxuICAgICAgc2VnbWVudEluZGV4XG4gICAgKSB7XG4gICAgICBpZiAoc3RhcnRlZCA9PT0gZmFsc2UgJiYgaW5pdGlhbFZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgIHByZXZpb3VzVmFsdWUgPSBjdXJyZW50U2VnbWVudDtcbiAgICAgIGVsc2VcbiAgICAgICAgcHJldmlvdXNWYWx1ZSA9IGNhbGxiYWNrKFxuICAgICAgICAgIHByZXZpb3VzVmFsdWUsXG4gICAgICAgICAgY3VycmVudFNlZ21lbnQsXG4gICAgICAgICAgZmVhdHVyZUluZGV4LFxuICAgICAgICAgIG11bHRpRmVhdHVyZUluZGV4LFxuICAgICAgICAgIGdlb21ldHJ5SW5kZXgsXG4gICAgICAgICAgc2VnbWVudEluZGV4XG4gICAgICAgICk7XG4gICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICB9XG4gICk7XG4gIHJldHVybiBwcmV2aW91c1ZhbHVlO1xufVxuXG4vKipcbiAqIENhbGxiYWNrIGZvciBsaW5lRWFjaFxuICpcbiAqIEBjYWxsYmFjayBsaW5lRWFjaENhbGxiYWNrXG4gKiBAcGFyYW0ge0ZlYXR1cmU8TGluZVN0cmluZz59IGN1cnJlbnRMaW5lIFRoZSBjdXJyZW50IExpbmVTdHJpbmd8TGluZWFyUmluZyBiZWluZyBwcm9jZXNzZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBmZWF0dXJlSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIEZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkXG4gKiBAcGFyYW0ge251bWJlcn0gbXVsdGlGZWF0dXJlSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIE11bHRpLUZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkXG4gKiBAcGFyYW0ge251bWJlcn0gZ2VvbWV0cnlJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgR2VvbWV0cnkgYmVpbmcgcHJvY2Vzc2VkXG4gKi9cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgbGluZSBvciByaW5nIGNvb3JkaW5hdGVzIGluIExpbmVTdHJpbmcsIFBvbHlnb24sIE11bHRpTGluZVN0cmluZywgTXVsdGlQb2x5Z29uIEZlYXR1cmVzIG9yIEdlb21ldHJpZXMsXG4gKiBzaW1pbGFyIHRvIEFycmF5LmZvckVhY2guXG4gKlxuICogQG5hbWUgbGluZUVhY2hcbiAqIEBwYXJhbSB7R2VvbWV0cnl8RmVhdHVyZTxMaW5lU3RyaW5nfFBvbHlnb258TXVsdGlMaW5lU3RyaW5nfE11bHRpUG9seWdvbj59IGdlb2pzb24gb2JqZWN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBhIG1ldGhvZCB0aGF0IHRha2VzIChjdXJyZW50TGluZSwgZmVhdHVyZUluZGV4LCBtdWx0aUZlYXR1cmVJbmRleCwgZ2VvbWV0cnlJbmRleClcbiAqIEBleGFtcGxlXG4gKiB2YXIgbXVsdGlMaW5lID0gdHVyZi5tdWx0aUxpbmVTdHJpbmcoW1xuICogICBbWzI2LCAzN10sIFszNSwgNDVdXSxcbiAqICAgW1szNiwgNTNdLCBbMzgsIDUwXSwgWzQxLCA1NV1dXG4gKiBdKTtcbiAqXG4gKiB0dXJmLmxpbmVFYWNoKG11bHRpTGluZSwgZnVuY3Rpb24gKGN1cnJlbnRMaW5lLCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4LCBnZW9tZXRyeUluZGV4KSB7XG4gKiAgIC8vPWN1cnJlbnRMaW5lXG4gKiAgIC8vPWZlYXR1cmVJbmRleFxuICogICAvLz1tdWx0aUZlYXR1cmVJbmRleFxuICogICAvLz1nZW9tZXRyeUluZGV4XG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gbGluZUVhY2goZ2VvanNvbiwgY2FsbGJhY2spIHtcbiAgLy8gdmFsaWRhdGlvblxuICBpZiAoIWdlb2pzb24pIHRocm93IG5ldyBFcnJvcihcImdlb2pzb24gaXMgcmVxdWlyZWRcIik7XG5cbiAgZmxhdHRlbkVhY2goZ2VvanNvbiwgZnVuY3Rpb24gKGZlYXR1cmUkJDEsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgpIHtcbiAgICBpZiAoZmVhdHVyZSQkMS5nZW9tZXRyeSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIHZhciB0eXBlID0gZmVhdHVyZSQkMS5nZW9tZXRyeS50eXBlO1xuICAgIHZhciBjb29yZHMgPSBmZWF0dXJlJCQxLmdlb21ldHJ5LmNvb3JkaW5hdGVzO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcIkxpbmVTdHJpbmdcIjpcbiAgICAgICAgaWYgKGNhbGxiYWNrKGZlYXR1cmUkJDEsIGZlYXR1cmVJbmRleCwgbXVsdGlGZWF0dXJlSW5kZXgsIDAsIDApID09PSBmYWxzZSlcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIlBvbHlnb25cIjpcbiAgICAgICAgZm9yIChcbiAgICAgICAgICB2YXIgZ2VvbWV0cnlJbmRleCA9IDA7XG4gICAgICAgICAgZ2VvbWV0cnlJbmRleCA8IGNvb3Jkcy5sZW5ndGg7XG4gICAgICAgICAgZ2VvbWV0cnlJbmRleCsrXG4gICAgICAgICkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGNhbGxiYWNrKFxuICAgICAgICAgICAgICBsaW5lU3RyaW5nKGNvb3Jkc1tnZW9tZXRyeUluZGV4XSwgZmVhdHVyZSQkMS5wcm9wZXJ0aWVzKSxcbiAgICAgICAgICAgICAgZmVhdHVyZUluZGV4LFxuICAgICAgICAgICAgICBtdWx0aUZlYXR1cmVJbmRleCxcbiAgICAgICAgICAgICAgZ2VvbWV0cnlJbmRleFxuICAgICAgICAgICAgKSA9PT0gZmFsc2VcbiAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBDYWxsYmFjayBmb3IgbGluZVJlZHVjZVxuICpcbiAqIFRoZSBmaXJzdCB0aW1lIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBpcyBjYWxsZWQsIHRoZSB2YWx1ZXMgcHJvdmlkZWQgYXMgYXJndW1lbnRzIGRlcGVuZFxuICogb24gd2hldGhlciB0aGUgcmVkdWNlIG1ldGhvZCBoYXMgYW4gaW5pdGlhbFZhbHVlIGFyZ3VtZW50LlxuICpcbiAqIElmIGFuIGluaXRpYWxWYWx1ZSBpcyBwcm92aWRlZCB0byB0aGUgcmVkdWNlIG1ldGhvZDpcbiAqICAtIFRoZSBwcmV2aW91c1ZhbHVlIGFyZ3VtZW50IGlzIGluaXRpYWxWYWx1ZS5cbiAqICAtIFRoZSBjdXJyZW50VmFsdWUgYXJndW1lbnQgaXMgdGhlIHZhbHVlIG9mIHRoZSBmaXJzdCBlbGVtZW50IHByZXNlbnQgaW4gdGhlIGFycmF5LlxuICpcbiAqIElmIGFuIGluaXRpYWxWYWx1ZSBpcyBub3QgcHJvdmlkZWQ6XG4gKiAgLSBUaGUgcHJldmlvdXNWYWx1ZSBhcmd1bWVudCBpcyB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IGVsZW1lbnQgcHJlc2VudCBpbiB0aGUgYXJyYXkuXG4gKiAgLSBUaGUgY3VycmVudFZhbHVlIGFyZ3VtZW50IGlzIHRoZSB2YWx1ZSBvZiB0aGUgc2Vjb25kIGVsZW1lbnQgcHJlc2VudCBpbiB0aGUgYXJyYXkuXG4gKlxuICogQGNhbGxiYWNrIGxpbmVSZWR1Y2VDYWxsYmFja1xuICogQHBhcmFtIHsqfSBwcmV2aW91c1ZhbHVlIFRoZSBhY2N1bXVsYXRlZCB2YWx1ZSBwcmV2aW91c2x5IHJldHVybmVkIGluIHRoZSBsYXN0IGludm9jYXRpb25cbiAqIG9mIHRoZSBjYWxsYmFjaywgb3IgaW5pdGlhbFZhbHVlLCBpZiBzdXBwbGllZC5cbiAqIEBwYXJhbSB7RmVhdHVyZTxMaW5lU3RyaW5nPn0gY3VycmVudExpbmUgVGhlIGN1cnJlbnQgTGluZVN0cmluZ3xMaW5lYXJSaW5nIGJlaW5nIHByb2Nlc3NlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmZWF0dXJlSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIEZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkXG4gKiBAcGFyYW0ge251bWJlcn0gbXVsdGlGZWF0dXJlSW5kZXggVGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIE11bHRpLUZlYXR1cmUgYmVpbmcgcHJvY2Vzc2VkXG4gKiBAcGFyYW0ge251bWJlcn0gZ2VvbWV0cnlJbmRleCBUaGUgY3VycmVudCBpbmRleCBvZiB0aGUgR2VvbWV0cnkgYmVpbmcgcHJvY2Vzc2VkXG4gKi9cblxuLyoqXG4gKiBSZWR1Y2UgZmVhdHVyZXMgaW4gYW55IEdlb0pTT04gb2JqZWN0LCBzaW1pbGFyIHRvIEFycmF5LnJlZHVjZSgpLlxuICpcbiAqIEBuYW1lIGxpbmVSZWR1Y2VcbiAqIEBwYXJhbSB7R2VvbWV0cnl8RmVhdHVyZTxMaW5lU3RyaW5nfFBvbHlnb258TXVsdGlMaW5lU3RyaW5nfE11bHRpUG9seWdvbj59IGdlb2pzb24gb2JqZWN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBhIG1ldGhvZCB0aGF0IHRha2VzIChwcmV2aW91c1ZhbHVlLCBjdXJyZW50TGluZSwgZmVhdHVyZUluZGV4LCBtdWx0aUZlYXR1cmVJbmRleCwgZ2VvbWV0cnlJbmRleClcbiAqIEBwYXJhbSB7Kn0gW2luaXRpYWxWYWx1ZV0gVmFsdWUgdG8gdXNlIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgZmlyc3QgY2FsbCBvZiB0aGUgY2FsbGJhY2suXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHZhbHVlIHRoYXQgcmVzdWx0cyBmcm9tIHRoZSByZWR1Y3Rpb24uXG4gKiBAZXhhbXBsZVxuICogdmFyIG11bHRpUG9seSA9IHR1cmYubXVsdGlQb2x5Z29uKFtcbiAqICAgdHVyZi5wb2x5Z29uKFtbWzEyLDQ4XSxbMiw0MV0sWzI0LDM4XSxbMTIsNDhdXSwgW1s5LDQ0XSxbMTMsNDFdLFsxMyw0NV0sWzksNDRdXV0pLFxuICogICB0dXJmLnBvbHlnb24oW1tbNSwgNV0sIFswLCAwXSwgWzIsIDJdLCBbNCwgNF0sIFs1LCA1XV1dKVxuICogXSk7XG4gKlxuICogdHVyZi5saW5lUmVkdWNlKG11bHRpUG9seSwgZnVuY3Rpb24gKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRMaW5lLCBmZWF0dXJlSW5kZXgsIG11bHRpRmVhdHVyZUluZGV4LCBnZW9tZXRyeUluZGV4KSB7XG4gKiAgIC8vPXByZXZpb3VzVmFsdWVcbiAqICAgLy89Y3VycmVudExpbmVcbiAqICAgLy89ZmVhdHVyZUluZGV4XG4gKiAgIC8vPW11bHRpRmVhdHVyZUluZGV4XG4gKiAgIC8vPWdlb21ldHJ5SW5kZXhcbiAqICAgcmV0dXJuIGN1cnJlbnRMaW5lXG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gbGluZVJlZHVjZShnZW9qc29uLCBjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBwcmV2aW91c1ZhbHVlID0gaW5pdGlhbFZhbHVlO1xuICBsaW5lRWFjaChcbiAgICBnZW9qc29uLFxuICAgIGZ1bmN0aW9uIChjdXJyZW50TGluZSwgZmVhdHVyZUluZGV4LCBtdWx0aUZlYXR1cmVJbmRleCwgZ2VvbWV0cnlJbmRleCkge1xuICAgICAgaWYgKGZlYXR1cmVJbmRleCA9PT0gMCAmJiBpbml0aWFsVmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcHJldmlvdXNWYWx1ZSA9IGN1cnJlbnRMaW5lO1xuICAgICAgZWxzZVxuICAgICAgICBwcmV2aW91c1ZhbHVlID0gY2FsbGJhY2soXG4gICAgICAgICAgcHJldmlvdXNWYWx1ZSxcbiAgICAgICAgICBjdXJyZW50TGluZSxcbiAgICAgICAgICBmZWF0dXJlSW5kZXgsXG4gICAgICAgICAgbXVsdGlGZWF0dXJlSW5kZXgsXG4gICAgICAgICAgZ2VvbWV0cnlJbmRleFxuICAgICAgICApO1xuICAgIH1cbiAgKTtcbiAgcmV0dXJuIHByZXZpb3VzVmFsdWU7XG59XG5cbi8qKlxuICogRmluZHMgYSBwYXJ0aWN1bGFyIDItdmVydGV4IExpbmVTdHJpbmcgU2VnbWVudCBmcm9tIGEgR2VvSlNPTiB1c2luZyBgQHR1cmYvbWV0YWAgaW5kZXhlcy5cbiAqXG4gKiBOZWdhdGl2ZSBpbmRleGVzIGFyZSBwZXJtaXR0ZWQuXG4gKiBQb2ludCAmIE11bHRpUG9pbnQgd2lsbCBhbHdheXMgcmV0dXJuIG51bGwuXG4gKlxuICogQHBhcmFtIHtGZWF0dXJlQ29sbGVjdGlvbnxGZWF0dXJlfEdlb21ldHJ5fSBnZW9qc29uIEFueSBHZW9KU09OIEZlYXR1cmUgb3IgR2VvbWV0cnlcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gT3B0aW9uYWwgcGFyYW1ldGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmZlYXR1cmVJbmRleD0wXSBGZWF0dXJlIEluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubXVsdGlGZWF0dXJlSW5kZXg9MF0gTXVsdGktRmVhdHVyZSBJbmRleFxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmdlb21ldHJ5SW5kZXg9MF0gR2VvbWV0cnkgSW5kZXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5zZWdtZW50SW5kZXg9MF0gU2VnbWVudCBJbmRleFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnByb3BlcnRpZXM9e31dIFRyYW5zbGF0ZSBQcm9wZXJ0aWVzIHRvIG91dHB1dCBMaW5lU3RyaW5nXG4gKiBAcGFyYW0ge0JCb3h9IFtvcHRpb25zLmJib3g9e31dIFRyYW5zbGF0ZSBCQm94IHRvIG91dHB1dCBMaW5lU3RyaW5nXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IFtvcHRpb25zLmlkPXt9XSBUcmFuc2xhdGUgSWQgdG8gb3V0cHV0IExpbmVTdHJpbmdcbiAqIEByZXR1cm5zIHtGZWF0dXJlPExpbmVTdHJpbmc+fSAyLXZlcnRleCBHZW9KU09OIEZlYXR1cmUgTGluZVN0cmluZ1xuICogQGV4YW1wbGVcbiAqIHZhciBtdWx0aUxpbmUgPSB0dXJmLm11bHRpTGluZVN0cmluZyhbXG4gKiAgICAgW1sxMCwgMTBdLCBbNTAsIDMwXSwgWzMwLCA0MF1dLFxuICogICAgIFtbLTEwLCAtMTBdLCBbLTUwLCAtMzBdLCBbLTMwLCAtNDBdXVxuICogXSk7XG4gKlxuICogLy8gRmlyc3QgU2VnbWVudCAoZGVmYXVsdHMgYXJlIDApXG4gKiB0dXJmLmZpbmRTZWdtZW50KG11bHRpTGluZSk7XG4gKiAvLyA9PiBGZWF0dXJlPExpbmVTdHJpbmc8W1sxMCwgMTBdLCBbNTAsIDMwXV0+PlxuICpcbiAqIC8vIEZpcnN0IFNlZ21lbnQgb2YgMm5kIE11bHRpIEZlYXR1cmVcbiAqIHR1cmYuZmluZFNlZ21lbnQobXVsdGlMaW5lLCB7bXVsdGlGZWF0dXJlSW5kZXg6IDF9KTtcbiAqIC8vID0+IEZlYXR1cmU8TGluZVN0cmluZzxbWy0xMCwgLTEwXSwgWy01MCwgLTMwXV0+PlxuICpcbiAqIC8vIExhc3QgU2VnbWVudCBvZiBMYXN0IE11bHRpIEZlYXR1cmVcbiAqIHR1cmYuZmluZFNlZ21lbnQobXVsdGlMaW5lLCB7bXVsdGlGZWF0dXJlSW5kZXg6IC0xLCBzZWdtZW50SW5kZXg6IC0xfSk7XG4gKiAvLyA9PiBGZWF0dXJlPExpbmVTdHJpbmc8W1stNTAsIC0zMF0sIFstMzAsIC00MF1dPj5cbiAqL1xuZnVuY3Rpb24gZmluZFNlZ21lbnQoZ2VvanNvbiwgb3B0aW9ucykge1xuICAvLyBPcHRpb25hbCBQYXJhbWV0ZXJzXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBpZiAoIWlzT2JqZWN0KG9wdGlvbnMpKSB0aHJvdyBuZXcgRXJyb3IoXCJvcHRpb25zIGlzIGludmFsaWRcIik7XG4gIHZhciBmZWF0dXJlSW5kZXggPSBvcHRpb25zLmZlYXR1cmVJbmRleCB8fCAwO1xuICB2YXIgbXVsdGlGZWF0dXJlSW5kZXggPSBvcHRpb25zLm11bHRpRmVhdHVyZUluZGV4IHx8IDA7XG4gIHZhciBnZW9tZXRyeUluZGV4ID0gb3B0aW9ucy5nZW9tZXRyeUluZGV4IHx8IDA7XG4gIHZhciBzZWdtZW50SW5kZXggPSBvcHRpb25zLnNlZ21lbnRJbmRleCB8fCAwO1xuXG4gIC8vIEZpbmQgRmVhdHVyZUluZGV4XG4gIHZhciBwcm9wZXJ0aWVzID0gb3B0aW9ucy5wcm9wZXJ0aWVzO1xuICB2YXIgZ2VvbWV0cnk7XG5cbiAgc3dpdGNoIChnZW9qc29uLnR5cGUpIHtcbiAgICBjYXNlIFwiRmVhdHVyZUNvbGxlY3Rpb25cIjpcbiAgICAgIGlmIChmZWF0dXJlSW5kZXggPCAwKVxuICAgICAgICBmZWF0dXJlSW5kZXggPSBnZW9qc29uLmZlYXR1cmVzLmxlbmd0aCArIGZlYXR1cmVJbmRleDtcbiAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IGdlb2pzb24uZmVhdHVyZXNbZmVhdHVyZUluZGV4XS5wcm9wZXJ0aWVzO1xuICAgICAgZ2VvbWV0cnkgPSBnZW9qc29uLmZlYXR1cmVzW2ZlYXR1cmVJbmRleF0uZ2VvbWV0cnk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiRmVhdHVyZVwiOlxuICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwgZ2VvanNvbi5wcm9wZXJ0aWVzO1xuICAgICAgZ2VvbWV0cnkgPSBnZW9qc29uLmdlb21ldHJ5O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBvaW50XCI6XG4gICAgY2FzZSBcIk11bHRpUG9pbnRcIjpcbiAgICAgIHJldHVybiBudWxsO1xuICAgIGNhc2UgXCJMaW5lU3RyaW5nXCI6XG4gICAgY2FzZSBcIlBvbHlnb25cIjpcbiAgICBjYXNlIFwiTXVsdGlMaW5lU3RyaW5nXCI6XG4gICAgY2FzZSBcIk11bHRpUG9seWdvblwiOlxuICAgICAgZ2VvbWV0cnkgPSBnZW9qc29uO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImdlb2pzb24gaXMgaW52YWxpZFwiKTtcbiAgfVxuXG4gIC8vIEZpbmQgU2VnbWVudEluZGV4XG4gIGlmIChnZW9tZXRyeSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gIHZhciBjb29yZHMgPSBnZW9tZXRyeS5jb29yZGluYXRlcztcbiAgc3dpdGNoIChnZW9tZXRyeS50eXBlKSB7XG4gICAgY2FzZSBcIlBvaW50XCI6XG4gICAgY2FzZSBcIk11bHRpUG9pbnRcIjpcbiAgICAgIHJldHVybiBudWxsO1xuICAgIGNhc2UgXCJMaW5lU3RyaW5nXCI6XG4gICAgICBpZiAoc2VnbWVudEluZGV4IDwgMCkgc2VnbWVudEluZGV4ID0gY29vcmRzLmxlbmd0aCArIHNlZ21lbnRJbmRleCAtIDE7XG4gICAgICByZXR1cm4gbGluZVN0cmluZyhcbiAgICAgICAgW2Nvb3Jkc1tzZWdtZW50SW5kZXhdLCBjb29yZHNbc2VnbWVudEluZGV4ICsgMV1dLFxuICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgIGNhc2UgXCJQb2x5Z29uXCI6XG4gICAgICBpZiAoZ2VvbWV0cnlJbmRleCA8IDApIGdlb21ldHJ5SW5kZXggPSBjb29yZHMubGVuZ3RoICsgZ2VvbWV0cnlJbmRleDtcbiAgICAgIGlmIChzZWdtZW50SW5kZXggPCAwKVxuICAgICAgICBzZWdtZW50SW5kZXggPSBjb29yZHNbZ2VvbWV0cnlJbmRleF0ubGVuZ3RoICsgc2VnbWVudEluZGV4IC0gMTtcbiAgICAgIHJldHVybiBsaW5lU3RyaW5nKFxuICAgICAgICBbXG4gICAgICAgICAgY29vcmRzW2dlb21ldHJ5SW5kZXhdW3NlZ21lbnRJbmRleF0sXG4gICAgICAgICAgY29vcmRzW2dlb21ldHJ5SW5kZXhdW3NlZ21lbnRJbmRleCArIDFdLFxuICAgICAgICBdLFxuICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgIGNhc2UgXCJNdWx0aUxpbmVTdHJpbmdcIjpcbiAgICAgIGlmIChtdWx0aUZlYXR1cmVJbmRleCA8IDApXG4gICAgICAgIG11bHRpRmVhdHVyZUluZGV4ID0gY29vcmRzLmxlbmd0aCArIG11bHRpRmVhdHVyZUluZGV4O1xuICAgICAgaWYgKHNlZ21lbnRJbmRleCA8IDApXG4gICAgICAgIHNlZ21lbnRJbmRleCA9IGNvb3Jkc1ttdWx0aUZlYXR1cmVJbmRleF0ubGVuZ3RoICsgc2VnbWVudEluZGV4IC0gMTtcbiAgICAgIHJldHVybiBsaW5lU3RyaW5nKFxuICAgICAgICBbXG4gICAgICAgICAgY29vcmRzW211bHRpRmVhdHVyZUluZGV4XVtzZWdtZW50SW5kZXhdLFxuICAgICAgICAgIGNvb3Jkc1ttdWx0aUZlYXR1cmVJbmRleF1bc2VnbWVudEluZGV4ICsgMV0sXG4gICAgICAgIF0sXG4gICAgICAgIHByb3BlcnRpZXMsXG4gICAgICAgIG9wdGlvbnNcbiAgICAgICk7XG4gICAgY2FzZSBcIk11bHRpUG9seWdvblwiOlxuICAgICAgaWYgKG11bHRpRmVhdHVyZUluZGV4IDwgMClcbiAgICAgICAgbXVsdGlGZWF0dXJlSW5kZXggPSBjb29yZHMubGVuZ3RoICsgbXVsdGlGZWF0dXJlSW5kZXg7XG4gICAgICBpZiAoZ2VvbWV0cnlJbmRleCA8IDApXG4gICAgICAgIGdlb21ldHJ5SW5kZXggPSBjb29yZHNbbXVsdGlGZWF0dXJlSW5kZXhdLmxlbmd0aCArIGdlb21ldHJ5SW5kZXg7XG4gICAgICBpZiAoc2VnbWVudEluZGV4IDwgMClcbiAgICAgICAgc2VnbWVudEluZGV4ID1cbiAgICAgICAgICBjb29yZHNbbXVsdGlGZWF0dXJlSW5kZXhdW2dlb21ldHJ5SW5kZXhdLmxlbmd0aCAtIHNlZ21lbnRJbmRleCAtIDE7XG4gICAgICByZXR1cm4gbGluZVN0cmluZyhcbiAgICAgICAgW1xuICAgICAgICAgIGNvb3Jkc1ttdWx0aUZlYXR1cmVJbmRleF1bZ2VvbWV0cnlJbmRleF1bc2VnbWVudEluZGV4XSxcbiAgICAgICAgICBjb29yZHNbbXVsdGlGZWF0dXJlSW5kZXhdW2dlb21ldHJ5SW5kZXhdW3NlZ21lbnRJbmRleCArIDFdLFxuICAgICAgICBdLFxuICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcImdlb2pzb24gaXMgaW52YWxpZFwiKTtcbn1cblxuLyoqXG4gKiBGaW5kcyBhIHBhcnRpY3VsYXIgUG9pbnQgZnJvbSBhIEdlb0pTT04gdXNpbmcgYEB0dXJmL21ldGFgIGluZGV4ZXMuXG4gKlxuICogTmVnYXRpdmUgaW5kZXhlcyBhcmUgcGVybWl0dGVkLlxuICpcbiAqIEBwYXJhbSB7RmVhdHVyZUNvbGxlY3Rpb258RmVhdHVyZXxHZW9tZXRyeX0gZ2VvanNvbiBBbnkgR2VvSlNPTiBGZWF0dXJlIG9yIEdlb21ldHJ5XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIE9wdGlvbmFsIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5mZWF0dXJlSW5kZXg9MF0gRmVhdHVyZSBJbmRleFxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm11bHRpRmVhdHVyZUluZGV4PTBdIE11bHRpLUZlYXR1cmUgSW5kZXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5nZW9tZXRyeUluZGV4PTBdIEdlb21ldHJ5IEluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuY29vcmRJbmRleD0wXSBDb29yZCBJbmRleFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnByb3BlcnRpZXM9e31dIFRyYW5zbGF0ZSBQcm9wZXJ0aWVzIHRvIG91dHB1dCBQb2ludFxuICogQHBhcmFtIHtCQm94fSBbb3B0aW9ucy5iYm94PXt9XSBUcmFuc2xhdGUgQkJveCB0byBvdXRwdXQgUG9pbnRcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gW29wdGlvbnMuaWQ9e31dIFRyYW5zbGF0ZSBJZCB0byBvdXRwdXQgUG9pbnRcbiAqIEByZXR1cm5zIHtGZWF0dXJlPFBvaW50Pn0gMi12ZXJ0ZXggR2VvSlNPTiBGZWF0dXJlIFBvaW50XG4gKiBAZXhhbXBsZVxuICogdmFyIG11bHRpTGluZSA9IHR1cmYubXVsdGlMaW5lU3RyaW5nKFtcbiAqICAgICBbWzEwLCAxMF0sIFs1MCwgMzBdLCBbMzAsIDQwXV0sXG4gKiAgICAgW1stMTAsIC0xMF0sIFstNTAsIC0zMF0sIFstMzAsIC00MF1dXG4gKiBdKTtcbiAqXG4gKiAvLyBGaXJzdCBTZWdtZW50IChkZWZhdWx0cyBhcmUgMClcbiAqIHR1cmYuZmluZFBvaW50KG11bHRpTGluZSk7XG4gKiAvLyA9PiBGZWF0dXJlPFBvaW50PFsxMCwgMTBdPj5cbiAqXG4gKiAvLyBGaXJzdCBTZWdtZW50IG9mIHRoZSAybmQgTXVsdGktRmVhdHVyZVxuICogdHVyZi5maW5kUG9pbnQobXVsdGlMaW5lLCB7bXVsdGlGZWF0dXJlSW5kZXg6IDF9KTtcbiAqIC8vID0+IEZlYXR1cmU8UG9pbnQ8Wy0xMCwgLTEwXT4+XG4gKlxuICogLy8gTGFzdCBTZWdtZW50IG9mIGxhc3QgTXVsdGktRmVhdHVyZVxuICogdHVyZi5maW5kUG9pbnQobXVsdGlMaW5lLCB7bXVsdGlGZWF0dXJlSW5kZXg6IC0xLCBjb29yZEluZGV4OiAtMX0pO1xuICogLy8gPT4gRmVhdHVyZTxQb2ludDxbLTMwLCAtNDBdPj5cbiAqL1xuZnVuY3Rpb24gZmluZFBvaW50KGdlb2pzb24sIG9wdGlvbnMpIHtcbiAgLy8gT3B0aW9uYWwgUGFyYW1ldGVyc1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgaWYgKCFpc09iamVjdChvcHRpb25zKSkgdGhyb3cgbmV3IEVycm9yKFwib3B0aW9ucyBpcyBpbnZhbGlkXCIpO1xuICB2YXIgZmVhdHVyZUluZGV4ID0gb3B0aW9ucy5mZWF0dXJlSW5kZXggfHwgMDtcbiAgdmFyIG11bHRpRmVhdHVyZUluZGV4ID0gb3B0aW9ucy5tdWx0aUZlYXR1cmVJbmRleCB8fCAwO1xuICB2YXIgZ2VvbWV0cnlJbmRleCA9IG9wdGlvbnMuZ2VvbWV0cnlJbmRleCB8fCAwO1xuICB2YXIgY29vcmRJbmRleCA9IG9wdGlvbnMuY29vcmRJbmRleCB8fCAwO1xuXG4gIC8vIEZpbmQgRmVhdHVyZUluZGV4XG4gIHZhciBwcm9wZXJ0aWVzID0gb3B0aW9ucy5wcm9wZXJ0aWVzO1xuICB2YXIgZ2VvbWV0cnk7XG5cbiAgc3dpdGNoIChnZW9qc29uLnR5cGUpIHtcbiAgICBjYXNlIFwiRmVhdHVyZUNvbGxlY3Rpb25cIjpcbiAgICAgIGlmIChmZWF0dXJlSW5kZXggPCAwKVxuICAgICAgICBmZWF0dXJlSW5kZXggPSBnZW9qc29uLmZlYXR1cmVzLmxlbmd0aCArIGZlYXR1cmVJbmRleDtcbiAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IGdlb2pzb24uZmVhdHVyZXNbZmVhdHVyZUluZGV4XS5wcm9wZXJ0aWVzO1xuICAgICAgZ2VvbWV0cnkgPSBnZW9qc29uLmZlYXR1cmVzW2ZlYXR1cmVJbmRleF0uZ2VvbWV0cnk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiRmVhdHVyZVwiOlxuICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwgZ2VvanNvbi5wcm9wZXJ0aWVzO1xuICAgICAgZ2VvbWV0cnkgPSBnZW9qc29uLmdlb21ldHJ5O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBvaW50XCI6XG4gICAgY2FzZSBcIk11bHRpUG9pbnRcIjpcbiAgICAgIHJldHVybiBudWxsO1xuICAgIGNhc2UgXCJMaW5lU3RyaW5nXCI6XG4gICAgY2FzZSBcIlBvbHlnb25cIjpcbiAgICBjYXNlIFwiTXVsdGlMaW5lU3RyaW5nXCI6XG4gICAgY2FzZSBcIk11bHRpUG9seWdvblwiOlxuICAgICAgZ2VvbWV0cnkgPSBnZW9qc29uO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImdlb2pzb24gaXMgaW52YWxpZFwiKTtcbiAgfVxuXG4gIC8vIEZpbmQgQ29vcmQgSW5kZXhcbiAgaWYgKGdlb21ldHJ5ID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNvb3JkcyA9IGdlb21ldHJ5LmNvb3JkaW5hdGVzO1xuICBzd2l0Y2ggKGdlb21ldHJ5LnR5cGUpIHtcbiAgICBjYXNlIFwiUG9pbnRcIjpcbiAgICAgIHJldHVybiBwb2ludChjb29yZHMsIHByb3BlcnRpZXMsIG9wdGlvbnMpO1xuICAgIGNhc2UgXCJNdWx0aVBvaW50XCI6XG4gICAgICBpZiAobXVsdGlGZWF0dXJlSW5kZXggPCAwKVxuICAgICAgICBtdWx0aUZlYXR1cmVJbmRleCA9IGNvb3Jkcy5sZW5ndGggKyBtdWx0aUZlYXR1cmVJbmRleDtcbiAgICAgIHJldHVybiBwb2ludChjb29yZHNbbXVsdGlGZWF0dXJlSW5kZXhdLCBwcm9wZXJ0aWVzLCBvcHRpb25zKTtcbiAgICBjYXNlIFwiTGluZVN0cmluZ1wiOlxuICAgICAgaWYgKGNvb3JkSW5kZXggPCAwKSBjb29yZEluZGV4ID0gY29vcmRzLmxlbmd0aCArIGNvb3JkSW5kZXg7XG4gICAgICByZXR1cm4gcG9pbnQoY29vcmRzW2Nvb3JkSW5kZXhdLCBwcm9wZXJ0aWVzLCBvcHRpb25zKTtcbiAgICBjYXNlIFwiUG9seWdvblwiOlxuICAgICAgaWYgKGdlb21ldHJ5SW5kZXggPCAwKSBnZW9tZXRyeUluZGV4ID0gY29vcmRzLmxlbmd0aCArIGdlb21ldHJ5SW5kZXg7XG4gICAgICBpZiAoY29vcmRJbmRleCA8IDApXG4gICAgICAgIGNvb3JkSW5kZXggPSBjb29yZHNbZ2VvbWV0cnlJbmRleF0ubGVuZ3RoICsgY29vcmRJbmRleDtcbiAgICAgIHJldHVybiBwb2ludChjb29yZHNbZ2VvbWV0cnlJbmRleF1bY29vcmRJbmRleF0sIHByb3BlcnRpZXMsIG9wdGlvbnMpO1xuICAgIGNhc2UgXCJNdWx0aUxpbmVTdHJpbmdcIjpcbiAgICAgIGlmIChtdWx0aUZlYXR1cmVJbmRleCA8IDApXG4gICAgICAgIG11bHRpRmVhdHVyZUluZGV4ID0gY29vcmRzLmxlbmd0aCArIG11bHRpRmVhdHVyZUluZGV4O1xuICAgICAgaWYgKGNvb3JkSW5kZXggPCAwKVxuICAgICAgICBjb29yZEluZGV4ID0gY29vcmRzW211bHRpRmVhdHVyZUluZGV4XS5sZW5ndGggKyBjb29yZEluZGV4O1xuICAgICAgcmV0dXJuIHBvaW50KGNvb3Jkc1ttdWx0aUZlYXR1cmVJbmRleF1bY29vcmRJbmRleF0sIHByb3BlcnRpZXMsIG9wdGlvbnMpO1xuICAgIGNhc2UgXCJNdWx0aVBvbHlnb25cIjpcbiAgICAgIGlmIChtdWx0aUZlYXR1cmVJbmRleCA8IDApXG4gICAgICAgIG11bHRpRmVhdHVyZUluZGV4ID0gY29vcmRzLmxlbmd0aCArIG11bHRpRmVhdHVyZUluZGV4O1xuICAgICAgaWYgKGdlb21ldHJ5SW5kZXggPCAwKVxuICAgICAgICBnZW9tZXRyeUluZGV4ID0gY29vcmRzW211bHRpRmVhdHVyZUluZGV4XS5sZW5ndGggKyBnZW9tZXRyeUluZGV4O1xuICAgICAgaWYgKGNvb3JkSW5kZXggPCAwKVxuICAgICAgICBjb29yZEluZGV4ID1cbiAgICAgICAgICBjb29yZHNbbXVsdGlGZWF0dXJlSW5kZXhdW2dlb21ldHJ5SW5kZXhdLmxlbmd0aCAtIGNvb3JkSW5kZXg7XG4gICAgICByZXR1cm4gcG9pbnQoXG4gICAgICAgIGNvb3Jkc1ttdWx0aUZlYXR1cmVJbmRleF1bZ2VvbWV0cnlJbmRleF1bY29vcmRJbmRleF0sXG4gICAgICAgIHByb3BlcnRpZXMsXG4gICAgICAgIG9wdGlvbnNcbiAgICAgICk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFwiZ2VvanNvbiBpcyBpbnZhbGlkXCIpO1xufVxuXG5leHBvcnQgeyBjb29yZEVhY2gsIGNvb3JkUmVkdWNlLCBwcm9wRWFjaCwgcHJvcFJlZHVjZSwgZmVhdHVyZUVhY2gsIGZlYXR1cmVSZWR1Y2UsIGNvb3JkQWxsLCBnZW9tRWFjaCwgZ2VvbVJlZHVjZSwgZmxhdHRlbkVhY2gsIGZsYXR0ZW5SZWR1Y2UsIHNlZ21lbnRFYWNoLCBzZWdtZW50UmVkdWNlLCBsaW5lRWFjaCwgbGluZVJlZHVjZSwgZmluZFNlZ21lbnQsIGZpbmRQb2ludCB9O1xuIiwiaW1wb3J0IHdpdGhpbiBmcm9tIFwiQHR1cmYvYm9vbGVhbi13aXRoaW5cIjtcbmltcG9ydCBkaXN0YW5jZSBmcm9tIFwiQHR1cmYvZGlzdGFuY2VcIjtcbmltcG9ydCB7IHBvaW50LCBmZWF0dXJlQ29sbGVjdGlvbiwgfSBmcm9tIFwiQHR1cmYvaGVscGVyc1wiO1xuLyoqXG4gKiBDcmVhdGVzIGEge0BsaW5rIFBvaW50fSBncmlkIGZyb20gYSBib3VuZGluZyBib3gsIHtAbGluayBGZWF0dXJlQ29sbGVjdGlvbn0gb3Ige0BsaW5rIEZlYXR1cmV9LlxuICpcbiAqIEBuYW1lIHBvaW50R3JpZFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBiYm94IGV4dGVudCBpbiBbbWluWCwgbWluWSwgbWF4WCwgbWF4WV0gb3JkZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBjZWxsU2lkZSB0aGUgZGlzdGFuY2UgYmV0d2VlbiBwb2ludHMsIGluIHVuaXRzXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIE9wdGlvbmFsIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy51bml0cz0na2lsb21ldGVycyddIHVzZWQgaW4gY2FsY3VsYXRpbmcgY2VsbFNpZGUsIGNhbiBiZSBkZWdyZWVzLCByYWRpYW5zLCBtaWxlcywgb3Iga2lsb21ldGVyc1xuICogQHBhcmFtIHtGZWF0dXJlPFBvbHlnb258TXVsdGlQb2x5Z29uPn0gW29wdGlvbnMubWFza10gaWYgcGFzc2VkIGEgUG9seWdvbiBvciBNdWx0aVBvbHlnb24sIHRoZSBncmlkIFBvaW50cyB3aWxsIGJlIGNyZWF0ZWQgb25seSBpbnNpZGUgaXRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5wcm9wZXJ0aWVzPXt9XSBwYXNzZWQgdG8gZWFjaCBwb2ludCBvZiB0aGUgZ3JpZFxuICogQHJldHVybnMge0ZlYXR1cmVDb2xsZWN0aW9uPFBvaW50Pn0gZ3JpZCBvZiBwb2ludHNcbiAqIEBleGFtcGxlXG4gKiB2YXIgZXh0ZW50ID0gWy03MC44MjMzNjQsIC0zMy41NTM5ODQsIC03MC40NzMxNzUsIC0zMy4zMDI5ODZdO1xuICogdmFyIGNlbGxTaWRlID0gMztcbiAqIHZhciBvcHRpb25zID0ge3VuaXRzOiAnbWlsZXMnfTtcbiAqXG4gKiB2YXIgZ3JpZCA9IHR1cmYucG9pbnRHcmlkKGV4dGVudCwgY2VsbFNpZGUsIG9wdGlvbnMpO1xuICpcbiAqIC8vYWRkVG9NYXBcbiAqIHZhciBhZGRUb01hcCA9IFtncmlkXTtcbiAqL1xuZnVuY3Rpb24gcG9pbnRHcmlkKGJib3gsIGNlbGxTaWRlLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAvLyBEZWZhdWx0IHBhcmFtZXRlcnNcbiAgICBpZiAob3B0aW9ucy5tYXNrICYmICFvcHRpb25zLnVuaXRzKVxuICAgICAgICBvcHRpb25zLnVuaXRzID0gXCJraWxvbWV0ZXJzXCI7XG4gICAgLy8gQ29udGFpbmVyc1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgLy8gVHlwZXNjcmlwdCBoYW5kbGVzIHRoZSBUeXBlIFZhbGlkYXRpb25cbiAgICAvLyBpZiAoY2VsbFNpZGUgPT09IG51bGwgfHwgY2VsbFNpZGUgPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IEVycm9yKCdjZWxsU2lkZSBpcyByZXF1aXJlZCcpO1xuICAgIC8vIGlmICghaXNOdW1iZXIoY2VsbFNpZGUpKSB0aHJvdyBuZXcgRXJyb3IoJ2NlbGxTaWRlIGlzIGludmFsaWQnKTtcbiAgICAvLyBpZiAoIWJib3gpIHRocm93IG5ldyBFcnJvcignYmJveCBpcyByZXF1aXJlZCcpO1xuICAgIC8vIGlmICghQXJyYXkuaXNBcnJheShiYm94KSkgdGhyb3cgbmV3IEVycm9yKCdiYm94IG11c3QgYmUgYXJyYXknKTtcbiAgICAvLyBpZiAoYmJveC5sZW5ndGggIT09IDQpIHRocm93IG5ldyBFcnJvcignYmJveCBtdXN0IGNvbnRhaW4gNCBudW1iZXJzJyk7XG4gICAgLy8gaWYgKG1hc2sgJiYgWydQb2x5Z29uJywgJ011bHRpUG9seWdvbiddLmluZGV4T2YoZ2V0VHlwZShtYXNrKSkgPT09IC0xKSB0aHJvdyBuZXcgRXJyb3IoJ29wdGlvbnMubWFzayBtdXN0IGJlIGEgKE11bHRpKVBvbHlnb24nKTtcbiAgICB2YXIgd2VzdCA9IGJib3hbMF07XG4gICAgdmFyIHNvdXRoID0gYmJveFsxXTtcbiAgICB2YXIgZWFzdCA9IGJib3hbMl07XG4gICAgdmFyIG5vcnRoID0gYmJveFszXTtcbiAgICB2YXIgeEZyYWN0aW9uID0gY2VsbFNpZGUgLyBkaXN0YW5jZShbd2VzdCwgc291dGhdLCBbZWFzdCwgc291dGhdLCBvcHRpb25zKTtcbiAgICB2YXIgY2VsbFdpZHRoID0geEZyYWN0aW9uICogKGVhc3QgLSB3ZXN0KTtcbiAgICB2YXIgeUZyYWN0aW9uID0gY2VsbFNpZGUgLyBkaXN0YW5jZShbd2VzdCwgc291dGhdLCBbd2VzdCwgbm9ydGhdLCBvcHRpb25zKTtcbiAgICB2YXIgY2VsbEhlaWdodCA9IHlGcmFjdGlvbiAqIChub3J0aCAtIHNvdXRoKTtcbiAgICB2YXIgYmJveFdpZHRoID0gZWFzdCAtIHdlc3Q7XG4gICAgdmFyIGJib3hIZWlnaHQgPSBub3J0aCAtIHNvdXRoO1xuICAgIHZhciBjb2x1bW5zID0gTWF0aC5mbG9vcihiYm94V2lkdGggLyBjZWxsV2lkdGgpO1xuICAgIHZhciByb3dzID0gTWF0aC5mbG9vcihiYm94SGVpZ2h0IC8gY2VsbEhlaWdodCk7XG4gICAgLy8gYWRqdXN0IG9yaWdpbiBvZiB0aGUgZ3JpZFxuICAgIHZhciBkZWx0YVggPSAoYmJveFdpZHRoIC0gY29sdW1ucyAqIGNlbGxXaWR0aCkgLyAyO1xuICAgIHZhciBkZWx0YVkgPSAoYmJveEhlaWdodCAtIHJvd3MgKiBjZWxsSGVpZ2h0KSAvIDI7XG4gICAgdmFyIGN1cnJlbnRYID0gd2VzdCArIGRlbHRhWDtcbiAgICB3aGlsZSAoY3VycmVudFggPD0gZWFzdCkge1xuICAgICAgICB2YXIgY3VycmVudFkgPSBzb3V0aCArIGRlbHRhWTtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnRZIDw9IG5vcnRoKSB7XG4gICAgICAgICAgICB2YXIgY2VsbFB0ID0gcG9pbnQoW2N1cnJlbnRYLCBjdXJyZW50WV0sIG9wdGlvbnMucHJvcGVydGllcyk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5tYXNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdpdGhpbihjZWxsUHQsIG9wdGlvbnMubWFzaykpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChjZWxsUHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGNlbGxQdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50WSArPSBjZWxsSGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRYICs9IGNlbGxXaWR0aDtcbiAgICB9XG4gICAgcmV0dXJuIGZlYXR1cmVDb2xsZWN0aW9uKHJlc3VsdHMpO1xufVxuZXhwb3J0IGRlZmF1bHQgcG9pbnRHcmlkO1xuIiwiLyohIGRyYWctZHJvcC4gTUlUIExpY2Vuc2UuIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZy9vcGVuc291cmNlPiAqL1xubW9kdWxlLmV4cG9ydHMgPSBkcmFnRHJvcFxuXG5jb25zdCBwYXJhbGxlbCA9IHJlcXVpcmUoJ3J1bi1wYXJhbGxlbCcpXG5cbmZ1bmN0aW9uIGRyYWdEcm9wIChlbGVtLCBsaXN0ZW5lcnMpIHtcbiAgaWYgKHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZWxlbVxuICAgIGVsZW0gPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKVxuICAgIGlmICghZWxlbSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcIiR7c2VsZWN0b3J9XCIgZG9lcyBub3QgbWF0Y2ggYW55IEhUTUwgZWxlbWVudHNgKVxuICAgIH1cbiAgfVxuXG4gIGlmICghZWxlbSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgXCIke2VsZW19XCIgaXMgbm90IGEgdmFsaWQgSFRNTCBlbGVtZW50YClcbiAgfVxuXG4gIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbGlzdGVuZXJzID0geyBvbkRyb3A6IGxpc3RlbmVycyB9XG4gIH1cblxuICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIG9uRHJhZ0VudGVyLCBmYWxzZSlcbiAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIG9uRHJhZ092ZXIsIGZhbHNlKVxuICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIG9uRHJhZ0xlYXZlLCBmYWxzZSlcbiAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgb25Ecm9wLCBmYWxzZSlcblxuICBsZXQgaXNFbnRlcmVkID0gZmFsc2VcbiAgbGV0IG51bUlnbm9yZWRFbnRlcnMgPSAwXG5cbiAgLy8gRnVuY3Rpb24gdG8gcmVtb3ZlIGRyYWctZHJvcCBsaXN0ZW5lcnNcbiAgcmV0dXJuIGZ1bmN0aW9uIGNsZWFudXAgKCkge1xuICAgIHJlbW92ZURyYWdDbGFzcygpXG4gICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBvbkRyYWdFbnRlciwgZmFsc2UpXG4gICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIG9uRHJhZ092ZXIsIGZhbHNlKVxuICAgIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgb25EcmFnTGVhdmUsIGZhbHNlKVxuICAgIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIG9uRHJvcCwgZmFsc2UpXG4gIH1cblxuICBmdW5jdGlvbiBpc0V2ZW50SGFuZGxlYWJsZSAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyLml0ZW1zIHx8IGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlcykge1xuICAgICAgLy8gT25seSBhZGQgXCJkcmFnXCIgY2xhc3Mgd2hlbiBgaXRlbXNgIGNvbnRhaW5zIGl0ZW1zIHRoYXQgYXJlIGFibGUgdG8gYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgdGhlIHJlZ2lzdGVyZWQgbGlzdGVuZXJzIChmaWxlcyB2cy4gdGV4dClcbiAgICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShldmVudC5kYXRhVHJhbnNmZXIuaXRlbXMpXG4gICAgICBjb25zdCB0eXBlcyA9IEFycmF5LmZyb20oZXZlbnQuZGF0YVRyYW5zZmVyLnR5cGVzKVxuXG4gICAgICBsZXQgZmlsZUl0ZW1zXG4gICAgICBsZXQgdGV4dEl0ZW1zXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgIGZpbGVJdGVtcyA9IGl0ZW1zLmZpbHRlcihpdGVtID0+IHsgcmV0dXJuIGl0ZW0ua2luZCA9PT0gJ2ZpbGUnIH0pXG4gICAgICAgIHRleHRJdGVtcyA9IGl0ZW1zLmZpbHRlcihpdGVtID0+IHsgcmV0dXJuIGl0ZW0ua2luZCA9PT0gJ3N0cmluZycgfSlcbiAgICAgIH0gZWxzZSBpZiAodHlwZXMubGVuZ3RoKSB7XG4gICAgICAgIC8vIGV2ZW50LmRhdGFUcmFuc2Zlci5pdGVtcyBpcyBlbXB0eSBkdXJpbmcgJ2RyYWdvdmVyJyBpbiBTYWZhcmksIHNvIHVzZVxuICAgICAgICAvLyBldmVudC5kYXRhVHJhbnNmZXIudHlwZXMgYXMgYSBmYWxsYmFja1xuICAgICAgICBmaWxlSXRlbXMgPSB0eXBlcy5maWx0ZXIoaXRlbSA9PiBpdGVtID09PSAnRmlsZXMnKVxuICAgICAgICB0ZXh0SXRlbXMgPSB0eXBlcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnN0YXJ0c1dpdGgoJ3RleHQvJykpXG4gICAgICB9XG5cbiAgICAgIGlmIChmaWxlSXRlbXMubGVuZ3RoID09PSAwICYmICFsaXN0ZW5lcnMub25Ecm9wVGV4dCkgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAodGV4dEl0ZW1zLmxlbmd0aCA9PT0gMCAmJiAhbGlzdGVuZXJzLm9uRHJvcCkgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAoZmlsZUl0ZW1zLmxlbmd0aCA9PT0gMCAmJiB0ZXh0SXRlbXMubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZ0VudGVyIChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgaWYgKCFpc0V2ZW50SGFuZGxlYWJsZShldmVudCkpIHJldHVyblxuXG4gICAgaWYgKGlzRW50ZXJlZCkge1xuICAgICAgbnVtSWdub3JlZEVudGVycyArPSAxXG4gICAgICByZXR1cm4gZmFsc2UgLy8gZWFybHkgcmV0dXJuXG4gICAgfVxuXG4gICAgaXNFbnRlcmVkID0gdHJ1ZVxuXG4gICAgaWYgKGxpc3RlbmVycy5vbkRyYWdFbnRlcikge1xuICAgICAgbGlzdGVuZXJzLm9uRHJhZ0VudGVyKGV2ZW50KVxuICAgIH1cblxuICAgIGFkZERyYWdDbGFzcygpXG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZ092ZXIgKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBpZiAoIWlzRXZlbnRIYW5kbGVhYmxlKGV2ZW50KSkgcmV0dXJuXG5cbiAgICBpZiAobGlzdGVuZXJzLm9uRHJhZ092ZXIpIHtcbiAgICAgIGxpc3RlbmVycy5vbkRyYWdPdmVyKGV2ZW50KVxuICAgIH1cblxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknXG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZ0xlYXZlIChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgaWYgKCFpc0V2ZW50SGFuZGxlYWJsZShldmVudCkpIHJldHVyblxuXG4gICAgaWYgKG51bUlnbm9yZWRFbnRlcnMgPiAwKSB7XG4gICAgICBudW1JZ25vcmVkRW50ZXJzIC09IDFcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlzRW50ZXJlZCA9IGZhbHNlXG5cbiAgICBpZiAobGlzdGVuZXJzLm9uRHJhZ0xlYXZlKSB7XG4gICAgICBsaXN0ZW5lcnMub25EcmFnTGVhdmUoZXZlbnQpXG4gICAgfVxuXG4gICAgcmVtb3ZlRHJhZ0NsYXNzKClcblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZnVuY3Rpb24gb25Ecm9wIChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgaWYgKGxpc3RlbmVycy5vbkRyYWdMZWF2ZSkge1xuICAgICAgbGlzdGVuZXJzLm9uRHJhZ0xlYXZlKGV2ZW50KVxuICAgIH1cblxuICAgIHJlbW92ZURyYWdDbGFzcygpXG5cbiAgICBpc0VudGVyZWQgPSBmYWxzZVxuICAgIG51bUlnbm9yZWRFbnRlcnMgPSAwXG5cbiAgICBjb25zdCBwb3MgPSB7XG4gICAgICB4OiBldmVudC5jbGllbnRYLFxuICAgICAgeTogZXZlbnQuY2xpZW50WVxuICAgIH1cblxuICAgIC8vIHRleHQgZHJvcCBzdXBwb3J0XG4gICAgY29uc3QgdGV4dCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0JylcbiAgICBpZiAodGV4dCAmJiBsaXN0ZW5lcnMub25Ecm9wVGV4dCkge1xuICAgICAgbGlzdGVuZXJzLm9uRHJvcFRleHQodGV4dCwgcG9zKVxuICAgIH1cblxuICAgIC8vIEZpbGUgZHJvcCBzdXBwb3J0LiBUaGUgYGRhdGFUcmFuc2Zlci5pdGVtc2AgQVBJIHN1cHBvcnRzIGRpcmVjdG9yaWVzLCBzbyB3ZVxuICAgIC8vIHVzZSBpdCBpbnN0ZWFkIG9mIGBkYXRhVHJhbnNmZXIuZmlsZXNgLCBldmVuIHRob3VnaCBpdCdzIG11Y2ggbW9yZVxuICAgIC8vIGNvbXBsaWNhdGVkIHRvIHVzZS5cbiAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvZHJhZy1kcm9wL2lzc3Vlcy8zOVxuICAgIGlmIChsaXN0ZW5lcnMub25Ecm9wICYmIGV2ZW50LmRhdGFUcmFuc2Zlci5pdGVtcykge1xuICAgICAgY29uc3QgZmlsZUxpc3QgPSBldmVudC5kYXRhVHJhbnNmZXIuZmlsZXNcblxuICAgICAgLy8gSGFuZGxlIGRpcmVjdG9yaWVzIGluIENocm9tZSB1c2luZyB0aGUgcHJvcHJpZXRhcnkgRmlsZVN5c3RlbSBBUElcbiAgICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShldmVudC5kYXRhVHJhbnNmZXIuaXRlbXMpLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0ua2luZCA9PT0gJ2ZpbGUnXG4gICAgICB9KVxuXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAgICAgcGFyYWxsZWwoaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gY2IgPT4ge1xuICAgICAgICAgIHByb2Nlc3NFbnRyeShpdGVtLndlYmtpdEdldEFzRW50cnkoKSwgY2IpXG4gICAgICAgIH1cbiAgICAgIH0pLCAoZXJyLCByZXN1bHRzKSA9PiB7XG4gICAgICAgIC8vIFRoaXMgY2F0Y2hlcyBwZXJtaXNzaW9uIGVycm9ycyB3aXRoIGZpbGU6Ly8gaW4gQ2hyb21lLiBUaGlzIHNob3VsZCBuZXZlclxuICAgICAgICAvLyB0aHJvdyBpbiBwcm9kdWN0aW9uIGNvZGUsIHNvIHRoZSB1c2VyIGRvZXMgbm90IG5lZWQgdG8gdXNlIHRyeS1jYXRjaC5cbiAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyXG5cbiAgICAgICAgY29uc3QgZW50cmllcyA9IHJlc3VsdHMuZmxhdChJbmZpbml0eSlcblxuICAgICAgICBjb25zdCBmaWxlcyA9IGVudHJpZXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgIHJldHVybiBpdGVtLmlzRmlsZVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGRpcmVjdG9yaWVzID0gZW50cmllcy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW0uaXNEaXJlY3RvcnlcbiAgICAgICAgfSlcblxuICAgICAgICBsaXN0ZW5lcnMub25Ecm9wKGZpbGVzLCBwb3MsIGZpbGVMaXN0LCBkaXJlY3RvcmllcylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBhZGREcmFnQ2xhc3MgKCkge1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnZHJhZycpXG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVEcmFnQ2xhc3MgKCkge1xuICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnZHJhZycpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0VudHJ5IChlbnRyeSwgY2IpIHtcbiAgbGV0IGVudHJpZXMgPSBbXVxuXG4gIGlmIChlbnRyeS5pc0ZpbGUpIHtcbiAgICBlbnRyeS5maWxlKGZpbGUgPT4ge1xuICAgICAgZmlsZS5mdWxsUGF0aCA9IGVudHJ5LmZ1bGxQYXRoIC8vIHByZXNlcnZlIHBhdGggZm9yIGNvbnN1bWVyXG4gICAgICBmaWxlLmlzRmlsZSA9IHRydWVcbiAgICAgIGZpbGUuaXNEaXJlY3RvcnkgPSBmYWxzZVxuICAgICAgY2IobnVsbCwgZmlsZSlcbiAgICB9LCBlcnIgPT4ge1xuICAgICAgY2IoZXJyKVxuICAgIH0pXG4gIH0gZWxzZSBpZiAoZW50cnkuaXNEaXJlY3RvcnkpIHtcbiAgICBjb25zdCByZWFkZXIgPSBlbnRyeS5jcmVhdGVSZWFkZXIoKVxuICAgIHJlYWRFbnRyaWVzKHJlYWRlcilcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRFbnRyaWVzIChyZWFkZXIpIHtcbiAgICByZWFkZXIucmVhZEVudHJpZXMoY3VycmVudEVudHJpZXMgPT4ge1xuICAgICAgaWYgKGN1cnJlbnRFbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZW50cmllcyA9IGVudHJpZXMuY29uY2F0KEFycmF5LmZyb20oY3VycmVudEVudHJpZXMpKVxuICAgICAgICByZWFkRW50cmllcyhyZWFkZXIpIC8vIGNvbnRpbnVlIHJlYWRpbmcgZW50cmllcyB1bnRpbCBgcmVhZEVudHJpZXNgIHJldHVybnMgbm8gbW9yZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9uZUVudHJpZXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBkb25lRW50cmllcyAoKSB7XG4gICAgcGFyYWxsZWwoZW50cmllcy5tYXAoZW50cnkgPT4ge1xuICAgICAgcmV0dXJuIGNiID0+IHtcbiAgICAgICAgcHJvY2Vzc0VudHJ5KGVudHJ5LCBjYilcbiAgICAgIH1cbiAgICB9KSwgKGVyciwgcmVzdWx0cykgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBjYihlcnIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgIGZ1bGxQYXRoOiBlbnRyeS5mdWxsUGF0aCxcbiAgICAgICAgICBuYW1lOiBlbnRyeS5uYW1lLFxuICAgICAgICAgIGlzRmlsZTogZmFsc2UsXG4gICAgICAgICAgaXNEaXJlY3Rvcnk6IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgY2IobnVsbCwgcmVzdWx0cylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGdldENhbnZhc0NvbnRleHRcbmZ1bmN0aW9uIGdldENhbnZhc0NvbnRleHQgKHR5cGUsIG9wdHMpIHtcbiAgaWYgKHR5cGVvZiB0eXBlICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ211c3Qgc3BlY2lmeSB0eXBlIHN0cmluZycpXG4gIH1cblxuICBvcHRzID0gb3B0cyB8fCB7fVxuXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnICYmICFvcHRzLmNhbnZhcykge1xuICAgIHJldHVybiBudWxsIC8vIGNoZWNrIGZvciBOb2RlXG4gIH1cblxuICB2YXIgY2FudmFzID0gb3B0cy5jYW52YXMgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgaWYgKHR5cGVvZiBvcHRzLndpZHRoID09PSAnbnVtYmVyJykge1xuICAgIGNhbnZhcy53aWR0aCA9IG9wdHMud2lkdGhcbiAgfVxuICBpZiAodHlwZW9mIG9wdHMuaGVpZ2h0ID09PSAnbnVtYmVyJykge1xuICAgIGNhbnZhcy5oZWlnaHQgPSBvcHRzLmhlaWdodFxuICB9XG5cbiAgdmFyIGF0dHJpYnMgPSBvcHRzXG4gIHZhciBnbFxuICB0cnkge1xuICAgIHZhciBuYW1lcyA9IFsgdHlwZSBdXG4gICAgLy8gcHJlZml4IEdMIGNvbnRleHRzXG4gICAgaWYgKHR5cGUuaW5kZXhPZignd2ViZ2wnKSA9PT0gMCkge1xuICAgICAgbmFtZXMucHVzaCgnZXhwZXJpbWVudGFsLScgKyB0eXBlKVxuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGdsID0gY2FudmFzLmdldENvbnRleHQobmFtZXNbaV0sIGF0dHJpYnMpXG4gICAgICBpZiAoZ2wpIHJldHVybiBnbFxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGdsID0gbnVsbFxuICB9XG4gIHJldHVybiAoZ2wgfHwgbnVsbCkgLy8gZW5zdXJlIG51bGwgb24gZmFpbFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBsb2FkSW1hZ2U7XG5mdW5jdGlvbiBsb2FkSW1hZ2UgKHNyYywgb3B0LCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIG9wdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gb3B0O1xuICAgIG9wdCA9IG51bGw7XG4gIH1cblxuICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgdmFyIGxvY2tlZDtcblxuICBlbC5vbmxvYWQgPSBmdW5jdGlvbiBvbkxvYWRlZCAoKSB7XG4gICAgaWYgKGxvY2tlZCkgcmV0dXJuO1xuICAgIGxvY2tlZCA9IHRydWU7XG5cbiAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHVuZGVmaW5lZCwgZWwpO1xuICB9O1xuXG4gIGVsLm9uZXJyb3IgPSBmdW5jdGlvbiBvbkVycm9yICgpIHtcbiAgICBpZiAobG9ja2VkKSByZXR1cm47XG4gICAgbG9ja2VkID0gdHJ1ZTtcblxuICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2sobmV3IEVycm9yKCdVbmFibGUgdG8gbG9hZCBcIicgKyBzcmMgKyAnXCInKSwgZWwpO1xuICB9O1xuXG4gIGlmIChvcHQgJiYgb3B0LmNyb3NzT3JpZ2luKSB7XG4gICAgZWwuY3Jvc3NPcmlnaW4gPSBvcHQuY3Jvc3NPcmlnaW47XG4gIH1cblxuICBlbC5zcmMgPSBzcmM7XG5cbiAgcmV0dXJuIGVsO1xufVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qISBxdWV1ZS1taWNyb3Rhc2suIE1JVCBMaWNlbnNlLiBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmcvb3BlbnNvdXJjZT4gKi9cbmxldCBwcm9taXNlXG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHF1ZXVlTWljcm90YXNrID09PSAnZnVuY3Rpb24nXG4gID8gcXVldWVNaWNyb3Rhc2suYmluZChnbG9iYWxUaGlzKVxuICAvLyByZXVzZSByZXNvbHZlZCBwcm9taXNlLCBhbmQgYWxsb2NhdGUgaXQgbGF6aWx5XG4gIDogY2IgPT4gKHByb21pc2UgfHwgKHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKSkpXG4gICAgLnRoZW4oY2IpXG4gICAgLmNhdGNoKGVyciA9PiBzZXRUaW1lb3V0KCgpID0+IHsgdGhyb3cgZXJyIH0sIDApKVxuIiwiLyohIHJ1bi1wYXJhbGxlbC4gTUlUIExpY2Vuc2UuIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZy9vcGVuc291cmNlPiAqL1xubW9kdWxlLmV4cG9ydHMgPSBydW5QYXJhbGxlbFxuXG5jb25zdCBxdWV1ZU1pY3JvdGFzayA9IHJlcXVpcmUoJ3F1ZXVlLW1pY3JvdGFzaycpXG5cbmZ1bmN0aW9uIHJ1blBhcmFsbGVsICh0YXNrcywgY2IpIHtcbiAgbGV0IHJlc3VsdHMsIHBlbmRpbmcsIGtleXNcbiAgbGV0IGlzU3luYyA9IHRydWVcblxuICBpZiAoQXJyYXkuaXNBcnJheSh0YXNrcykpIHtcbiAgICByZXN1bHRzID0gW11cbiAgICBwZW5kaW5nID0gdGFza3MubGVuZ3RoXG4gIH0gZWxzZSB7XG4gICAga2V5cyA9IE9iamVjdC5rZXlzKHRhc2tzKVxuICAgIHJlc3VsdHMgPSB7fVxuICAgIHBlbmRpbmcgPSBrZXlzLmxlbmd0aFxuICB9XG5cbiAgZnVuY3Rpb24gZG9uZSAoZXJyKSB7XG4gICAgZnVuY3Rpb24gZW5kICgpIHtcbiAgICAgIGlmIChjYikgY2IoZXJyLCByZXN1bHRzKVxuICAgICAgY2IgPSBudWxsXG4gICAgfVxuICAgIGlmIChpc1N5bmMpIHF1ZXVlTWljcm90YXNrKGVuZClcbiAgICBlbHNlIGVuZCgpXG4gIH1cblxuICBmdW5jdGlvbiBlYWNoIChpLCBlcnIsIHJlc3VsdCkge1xuICAgIHJlc3VsdHNbaV0gPSByZXN1bHRcbiAgICBpZiAoLS1wZW5kaW5nID09PSAwIHx8IGVycikge1xuICAgICAgZG9uZShlcnIpXG4gICAgfVxuICB9XG5cbiAgaWYgKCFwZW5kaW5nKSB7XG4gICAgLy8gZW1wdHlcbiAgICBkb25lKG51bGwpXG4gIH0gZWxzZSBpZiAoa2V5cykge1xuICAgIC8vIG9iamVjdFxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB0YXNrc1trZXldKGZ1bmN0aW9uIChlcnIsIHJlc3VsdCkgeyBlYWNoKGtleSwgZXJyLCByZXN1bHQpIH0pXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICAvLyBhcnJheVxuICAgIHRhc2tzLmZvckVhY2goZnVuY3Rpb24gKHRhc2ssIGkpIHtcbiAgICAgIHRhc2soZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7IGVhY2goaSwgZXJyLCByZXN1bHQpIH0pXG4gICAgfSlcbiAgfVxuXG4gIGlzU3luYyA9IGZhbHNlXG59XG4iLCJ2YXIgbG9hZEltYWdlID0gcmVxdWlyZSgnbG9hZC1pbWcnKVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN2Z1RvSW1hZ2VcbmZ1bmN0aW9uIHN2Z1RvSW1hZ2UgKHN2Zywgb3B0LCBjYikge1xuICBpZiAodHlwZW9mIG9wdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNiID0gb3B0XG4gICAgb3B0ID0ge31cbiAgfVxuICBjYiA9IGNiIHx8IG5vb3BcbiAgb3B0ID0gb3B0IHx8IHt9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGJhaWwoJ3dpbmRvdyBnbG9iYWwgaXMgdW5kZWZpbmVkOyBub3QgaW4gYSBicm93c2VyJylcbiAgfVxuXG4gIHZhciBET01VUkwgPSBnZXRVUkwoKVxuICBpZiAoIURPTVVSTCB8fFxuICAgIHR5cGVvZiBET01VUkwuY3JlYXRlT2JqZWN0VVJMICE9PSAnZnVuY3Rpb24nIHx8XG4gICAgdHlwZW9mIERPTVVSTC5yZXZva2VPYmplY3RVUkwgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYmFpbCgnYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IFVSTC5jcmVhdGVPYmplY3RVUkwnKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cuQmxvYiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gYmFpbCgnYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IEJsb2IgY29uc3RydWN0b3InKVxuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KHN2ZykpIHtcbiAgICBzdmcgPSBbIHN2ZyBdXG4gIH1cblxuICB2YXIgYmxvYlxuICB0cnkge1xuICAgIGJsb2IgPSBuZXcgd2luZG93LkJsb2Ioc3ZnLCB7XG4gICAgICB0eXBlOiAnaW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04J1xuICAgIH0pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gYmFpbChlKVxuICB9XG5cbiAgdmFyIHVybCA9IERPTVVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcbiAgbG9hZEltYWdlKHVybCwgb3B0LCBmdW5jdGlvbiAoZXJyLCBpbWcpIHtcbiAgICBET01VUkwucmV2b2tlT2JqZWN0VVJMKHVybClcbiAgICBpZiAoZXJyKSB7XG4gICAgICAvLyB0cnkgYWdhaW4gZm9yIFNhZmFyaSA4LjAsIHVzaW5nIHNpbXBsZSBlbmNvZGVVUklDb21wb25lbnRcbiAgICAgIC8vIHRoaXMgd2lsbCBmYWlsIHdpdGggRE9NIGNvbnRlbnQgYnV0IGF0IGxlYXN0IGl0IHdvcmtzIHdpdGggU1ZHXG4gICAgICB2YXIgdXJsMiA9ICdkYXRhOmltYWdlL3N2Zyt4bWwsJyArIGVuY29kZVVSSUNvbXBvbmVudChzdmcuam9pbignJykpXG4gICAgICByZXR1cm4gbG9hZEltYWdlKHVybDIsIG9wdCwgY2IpXG4gICAgfVxuXG4gICAgY2IoZXJyLCBpbWcpXG4gIH0pXG5cbiAgZnVuY3Rpb24gYmFpbCAobXNnKSB7XG4gICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBjYihuZXcgRXJyb3IobXNnKSlcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFVSTCAoKSB7XG4gIHJldHVybiB3aW5kb3cuVVJMIHx8XG4gIHdpbmRvdy53ZWJraXRVUkwgfHxcbiAgd2luZG93Lm1velVSTCB8fFxuICB3aW5kb3cubXNVUkxcbn1cbiIsImltcG9ydCBkcmFnRHJvcCBmcm9tIFwiZHJhZy1kcm9wXCI7XG5pbXBvcnQgcG9pbnRHcmlkIGZyb20gXCJAdHVyZi9wb2ludC1ncmlkXCI7XG5pbXBvcnQgeyBwcm9wRWFjaCB9IGZyb20gXCJAdHVyZi9tZXRhXCI7XG5pbXBvcnQgc3ZnVG9JbWFnZSBmcm9tIFwic3ZnLXRvLWltYWdlXCI7XG5pbXBvcnQgZ2V0Q29udGV4dCBmcm9tIFwiZ2V0LWNhbnZhcy1jb250ZXh0XCI7XG5cbmNvbnN0IG1hcCA9IG5ldyBtYXBib3hnbC5NYXAoe1xuICBjb250YWluZXI6IFwibWFwXCIsXG4gIHN0eWxlOiBcImh0dHBzOi8vdGlsZXMubWFwcy5lbGFzdGljLmNvL3N0eWxlcy9kYXJrLW1hdHRlci9zdHlsZS5qc29uXCIsXG4gIHpvb206IDIsXG4gIGNlbnRlcjogWy0xODAsIDBdXG59KTtcblxuY29uc3QgSU5GID0gMWUyMDtcblxuY29uc3QgY29udGV4dCA9IGdldENvbnRleHQoXCIyZFwiLCB7XG4gIHdpZHRoOiAyMDAsXG4gIGhlaWdodDogMjAwLFxuICBhbHBoYTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIG1ha2VSR0JBSW1hZ2VEYXRhKGFscGhhQ2hhbm5lbCwgd2lkdGgsIGhlaWdodCkge1xuICBjb25zdCBpbWFnZURhdGEgPSBjb250ZXh0LmNyZWF0ZUltYWdlRGF0YSh3aWR0aCwgaGVpZ2h0KTtcbiAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY29udGV4dC5jYW52YXMud2lkdGgsIGNvbnRleHQuY2FudmFzLmhlaWdodCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWxwaGFDaGFubmVsLmxlbmd0aDsgaSsrKSB7XG4gICAgaW1hZ2VEYXRhLmRhdGFbNCAqIGkgKyAwXSA9IDA7XG4gICAgaW1hZ2VEYXRhLmRhdGFbNCAqIGkgKyAxXSA9IDA7XG4gICAgaW1hZ2VEYXRhLmRhdGFbNCAqIGkgKyAyXSA9IDA7XG4gICAgaW1hZ2VEYXRhLmRhdGFbNCAqIGkgKyAzXSA9IGFscGhhQ2hhbm5lbFtpXTs7XG4gIH1cbiAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KGltYWdlRGF0YS5kYXRhLmJ1ZmZlcik7XG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGRhdGFcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXN0YWJsaXNoRHJhZ0Ryb3AoKSB7XG4gIGRyYWdEcm9wKFwiI2Ryb3BUYXJnZXRcIiwgKGZpbGVzKSA9PiB7XG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICBpZiAoZmlsZS50eXBlICE9PSBcImltYWdlL3N2Zyt4bWxcIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZmlsZS5uYW1lfSBpcyBub3QgYW4gU1ZHYCk7XG4gICAgICB9XG4gICAgICBmaWxlLnRleHQoKS50aGVuKChzdmcpID0+IHtcbiAgICAgICAgc3ZnVG9JbWFnZShzdmcsIChlcnIsIGltYWdlKSA9PiB7XG4gICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgIGNvbnN0IHsgZGF0YSwgd2lkdGgsIGhlaWdodCB9ID0gZHJhdyhpbWFnZSwgNjQsIDY0KTtcbiAgICAgICAgICBjb25zdCBpbWcgPSBtYWtlUkdCQUltYWdlRGF0YShkYXRhLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICBtYXAuYWRkSW1hZ2UoXCJteS1jdXN0b20tc3ZnXCIsIGltZywgeyBzZGY6IHRydWUgfSk7XG4gICAgICAgICAgYWRkSWNvbkxheWVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuY29uc3QgcG9pbnRzID0gcG9pbnRHcmlkKFstMjA1LCAtMSwgLTEzNiwgNDddLCAyMDAsIHtcbiAgdW5pdHM6IFwia2lsb21ldGVyc1wiLFxufSk7XG5wcm9wRWFjaChwb2ludHMsIChjdXIsIGkpID0+IHtcbiAgY3VyLmljb24gPSBcIm15LWN1c3RvbS1zdmdcIjtcbiAgY3VyLmNvbG9yID0gXCIjXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zdWJzdHIoLTYpO1xuICBjdXIuaGFsb19jb2xvciA9IFwiI1wiICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc3Vic3RyKC02KTtcbiAgY3VyLnNpemUgPSAxO1xufSk7XG5cbmZ1bmN0aW9uIGRyYXcoaW1hZ2UsIHcsIGgpIHtcbiAgY29uc3QgYnVmZmVyID0gMztcbiAgY29uc3QgY3V0b2ZmID0gMC4yNTtcbiAgY29uc3QgcmFkaXVzID0gODtcbiAgY29uc3Qgc2l6ZSA9IE1hdGgubWF4KHcsIGgpICsgYnVmZmVyICogNDtcbiAgY29uc3QgY3R4ID0gZ2V0Q29udGV4dChcIjJkXCIsIHtcbiAgICB3aWR0aDogc2l6ZSxcbiAgICBoZWlnaHQ6IHNpemUsXG4gICAgYWxwaGE6IHRydWUsXG4gIH0pO1xuICBjb25zdCBncmlkT3V0ZXIgPSBuZXcgRmxvYXQ2NEFycmF5KHNpemUgKiBzaXplKTtcbiAgY29uc3QgZ3JpZElubmVyID0gbmV3IEZsb2F0NjRBcnJheShzaXplICogc2l6ZSk7XG4gIGNvbnN0IGYgPSBuZXcgRmxvYXQ2NEFycmF5KHNpemUpO1xuICBjb25zdCB6ID0gbmV3IEZsb2F0NjRBcnJheShzaXplICsgMSk7XG4gIGNvbnN0IHYgPSBuZXcgSW50MTZBcnJheShzaXplKTtcblxuICBjb25zdCBnbHlwaFdpZHRoID0gc2l6ZSAtIGJ1ZmZlcjtcbiAgY29uc3QgZ2x5cGhIZWlnaHQgPSBzaXplIC0gYnVmZmVyO1xuXG4gIGNvbnN0IHdpZHRoID0gZ2x5cGhXaWR0aCArIDIgKiBidWZmZXI7XG4gIGNvbnN0IGhlaWdodCA9IGdseXBoSGVpZ2h0ICsgMiAqIGJ1ZmZlcjtcblxuICBjb25zdCBsZW4gPSB3aWR0aCAqIGhlaWdodDtcbiAgY29uc3QgZGF0YSA9IG5ldyBVaW50OENsYW1wZWRBcnJheShsZW4pO1xuICBjb25zdCBnbHlwaCA9IHsgZGF0YSwgd2lkdGgsIGhlaWdodCwgZ2x5cGhXaWR0aCwgZ2x5cGhIZWlnaHQgfTtcblxuICBjdHguY2xlYXJSZWN0KGJ1ZmZlciwgYnVmZmVyLCBnbHlwaFdpZHRoLCBnbHlwaEhlaWdodCk7XG4gIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIGJ1ZmZlciwgYnVmZmVyLCBnbHlwaFdpZHRoLCBnbHlwaEhlaWdodCk7XG4gIGNvbnN0IGltZ0RhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKGJ1ZmZlciwgYnVmZmVyLCBnbHlwaFdpZHRoLCBnbHlwaEhlaWdodCk7XG5cbiAgZ3JpZE91dGVyLmZpbGwoSU5GLCAwLCBsZW4pO1xuICBncmlkSW5uZXIuZmlsbCgwLCAwLCBsZW4pO1xuXG4gIGZvciAobGV0IHkgPSAwOyB5IDwgZ2x5cGhIZWlnaHQ7IHkrKykge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgZ2x5cGhXaWR0aDsgeCsrKSB7XG4gICAgICBjb25zdCBhID0gaW1nRGF0YS5kYXRhWzQgKiAoeSAqIGdseXBoV2lkdGggKyB4KSArIDNdIC8gMjU1OyAvLyBhbHBoYSB2YWx1ZVxuICAgICAgaWYgKGEgPT09IDApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGogPSAoeSArIGJ1ZmZlcikgKiB3aWR0aCArIHggKyBidWZmZXI7XG5cbiAgICAgIGlmIChhID09PSAxKSB7XG4gICAgICAgIC8vIGZ1bGx5IGRyYXduIHBpeGVsc1xuICAgICAgICBncmlkT3V0ZXJbal0gPSAwO1xuICAgICAgICBncmlkSW5uZXJbal0gPSBJTkY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBhbGlhc2VkIHBpeGVsc1xuICAgICAgICBjb25zdCBkID0gMC41IC0gYTtcbiAgICAgICAgZ3JpZE91dGVyW2pdID0gZCA+IDAgPyBkICogZCA6IDA7XG4gICAgICAgIGdyaWRJbm5lcltqXSA9IGQgPCAwID8gZCAqIGQgOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVkdChncmlkT3V0ZXIsIHdpZHRoLCBoZWlnaHQsIGYsIHYsIHopO1xuICBlZHQoZ3JpZElubmVyLCB3aWR0aCwgaGVpZ2h0LCBmLCB2LCB6KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgZCA9IE1hdGguc3FydChncmlkT3V0ZXJbaV0pIC0gTWF0aC5zcXJ0KGdyaWRJbm5lcltpXSk7XG4gICAgZGF0YVtpXSA9IE1hdGgucm91bmQoMjU1IC0gMjU1ICogKGQgLyByYWRpdXMgKyBjdXRvZmYpKTtcbiAgfVxuXG4gIHJldHVybiBnbHlwaDtcbn1cblxuLy8gMkQgRXVjbGlkZWFuIHNxdWFyZWQgZGlzdGFuY2UgdHJhbnNmb3JtIGJ5IEZlbHplbnN6d2FsYiAmIEh1dHRlbmxvY2hlciBodHRwczovL2NzLmJyb3duLmVkdS9+cGZmL3BhcGVycy9kdC1maW5hbC5wZGZcbmZ1bmN0aW9uIGVkdChkYXRhLCB3aWR0aCwgaGVpZ2h0LCBmLCB2LCB6KSB7XG4gIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHgrKykgZWR0MWQoZGF0YSwgeCwgd2lkdGgsIGhlaWdodCwgZiwgdiwgeik7XG4gIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIGVkdDFkKGRhdGEsIHkgKiB3aWR0aCwgMSwgd2lkdGgsIGYsIHYsIHopO1xufVxuXG4vLyAxRCBzcXVhcmVkIGRpc3RhbmNlIHRyYW5zZm9ybVxuZnVuY3Rpb24gZWR0MWQoZ3JpZCwgb2Zmc2V0LCBzdHJpZGUsIGxlbmd0aCwgZiwgdiwgeikge1xuICB2WzBdID0gMDtcbiAgelswXSA9IC1JTkY7XG4gIHpbMV0gPSBJTkY7XG4gIGZbMF0gPSBncmlkW29mZnNldF07XG5cbiAgZm9yIChsZXQgcSA9IDEsIGsgPSAwLCBzID0gMDsgcSA8IGxlbmd0aDsgcSsrKSB7XG4gICAgZltxXSA9IGdyaWRbb2Zmc2V0ICsgcSAqIHN0cmlkZV07XG4gICAgY29uc3QgcTIgPSBxICogcTtcbiAgICBkbyB7XG4gICAgICBjb25zdCByID0gdltrXTtcbiAgICAgIHMgPSAoZltxXSAtIGZbcl0gKyBxMiAtIHIgKiByKSAvIChxIC0gcikgLyAyO1xuICAgIH0gd2hpbGUgKHMgPD0geltrXSAmJiAtLWsgPiAtMSk7XG5cbiAgICBrKys7XG4gICAgdltrXSA9IHE7XG4gICAgeltrXSA9IHM7XG4gICAgeltrICsgMV0gPSBJTkY7XG4gIH1cblxuICBmb3IgKGxldCBxID0gMCwgayA9IDA7IHEgPCBsZW5ndGg7IHErKykge1xuICAgIHdoaWxlICh6W2sgKyAxXSA8IHEpIGsrKztcbiAgICBjb25zdCByID0gdltrXTtcbiAgICBjb25zdCBxciA9IHEgLSByO1xuICAgIGdyaWRbb2Zmc2V0ICsgcSAqIHN0cmlkZV0gPSBmW3JdICsgcXIgKiBxcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRJY29uTGF5ZXIgKCkge1xuICBtYXAuYWRkTGF5ZXIoe1xuICAgIGlkOiBcInBvaW50c1wiLFxuICAgIHR5cGU6IFwic3ltYm9sXCIsXG4gICAgc291cmNlOiB7XG4gICAgICB0eXBlOiBcImdlb2pzb25cIixcbiAgICAgIGRhdGE6IHBvaW50cyxcbiAgICB9LFxuICAgIGxheW91dDoge1xuICAgICAgXCJpY29uLWltYWdlXCI6IFtcImdldFwiLCBcImljb25cIl0sXG4gICAgICBcImljb24tc2l6ZVwiOiBbXCJnZXRcIiwgXCJzaXplXCJdLFxuICAgICAgXCJpY29uLWFsbG93LW92ZXJsYXBcIjogdHJ1ZSxcbiAgICB9LFxuICAgIHBhaW50OiB7XG4gICAgICBcImljb24tY29sb3JcIjogW1wiZ2V0XCIsIFwiY29sb3JcIl0sXG4gICAgICBcImljb24taGFsby13aWR0aFwiOiBbXCJnZXRcIiwgXCJzaXplXCJdLFxuICAgICAgXCJpY29uLWhhbG8tY29sb3JcIjogW1wiZ2V0XCIsIFwiaGFsb19jb2xvclwiXSxcbiAgICB9LFxuICB9KTtcbn1cblxubWFwLm9uKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGVzdGFibGlzaERyYWdEcm9wKCk7XG5cbiAgdmFyIHBvcHVwID0gbmV3IG1hcGJveGdsLlBvcHVwKHtcbiAgICBjbG9zZUJ1dHRvbjogZmFsc2UsXG4gICAgY2xvc2VPbkNsaWNrOiBmYWxzZSxcbiAgfSk7XG5cbiAgbWFwLm9uKFwibW91c2VlbnRlclwiLCBcInBvaW50c1wiLCAoZSkgPT4ge1xuICAgIG1hcC5nZXRDYW52YXMoKS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICB2YXIgY29vcmRzID0gZS5mZWF0dXJlc1swXS5nZW9tZXRyeS5jb29yZGluYXRlcy5zbGljZSgpO1xuICAgIHZhciBpY29uTmFtZSA9IGUuZmVhdHVyZXNbMF0ucHJvcGVydGllcy5pY29uO1xuICAgIHBvcHVwLnNldExuZ0xhdChjb29yZHMpLnNldEhUTUwoaWNvbk5hbWUpLmFkZFRvKG1hcCk7XG4gIH0pO1xuXG4gIG1hcC5vbihcIm1vdXNlbGVhdmVcIiwgXCJwb2ludHNcIiwgKGUpID0+IHtcbiAgICBtYXAuZ2V0Q2FudmFzKCkuc3R5bGUuY3Vyc29yID0gXCJcIjtcbiAgICBwb3B1cC5yZW1vdmUoKTtcbiAgfSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=