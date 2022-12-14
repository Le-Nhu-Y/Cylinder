"use strict";
exports.__esModule = true;
exports.Cylinder = void 0;
var Cylinder = /** @class */ (function () {
    function Cylinder() {
    }
    Cylinder.getBaseArea = function (radius) {
        return Math.PI * radius * radius;
    };
    Cylinder.getPerimeter = function (radius) {
        return 2 * Math.PI * radius;
    };
    Cylinder.getVolume = function (radius, height) {
        var baseArea = this.getBaseArea(radius);
        var perimeter = this.getPerimeter(radius);
        var volume = perimeter * height + 2 * baseArea;
        return volume;
    };
    return Cylinder;
}());
exports.Cylinder = Cylinder;
