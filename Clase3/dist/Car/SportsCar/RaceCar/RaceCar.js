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
var RaceCar = /** @class */ (function (_super) {
    __extends(RaceCar, _super);
    function RaceCar(yearModelImput, makeImput, maxSpeedImput, horsepowerImput, revsPerSecondImput) {
        var _this = _super.call(this, yearModelImput, makeImput, maxSpeedImput, horsepowerImput) || this;
        _this.revsPerSecond = revsPerSecondImput;
        return _this;
    }
    return RaceCar;
}(SportsCar));
export { RaceCar };
