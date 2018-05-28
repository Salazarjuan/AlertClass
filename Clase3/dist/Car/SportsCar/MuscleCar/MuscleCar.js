var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { SportsCar } from "../SportsCar";
var MuscleCar = /** @class */ (function (_super) {
    __extends(MuscleCar, _super);
    function MuscleCar(yearModelImput, makeImput, maxSpeedImput, horsepowerImput, colorImput) {
        var _this = _super.call(this, yearModelImput, makeImput, maxSpeedImput, horsepowerImput) || this;
        _this.color = colorImput;
        return _this;
    }
    return MuscleCar;
}(SportsCar));
export { MuscleCar };
