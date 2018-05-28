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
import { Car } from "../Car";
var EconomyCar = /** @class */ (function (_super) {
    __extends(EconomyCar, _super);
    function EconomyCar(yearModelImput, makeImput, kilometresPerGalonImput) {
        var _this = _super.call(this, yearModelImput, makeImput) || this;
        _this.kilometresPerGalon = kilometresPerGalonImput;
        return _this;
    }
    return EconomyCar;
}(Car));
export { EconomyCar };
