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
import { EconomyCar } from "../EconomyCar";
var Hatchback = /** @class */ (function (_super) {
    __extends(Hatchback, _super);
    function Hatchback(yearModelImput, makeImput, kilometresPerGalonImput, hatchbackVolumenImput) {
        var _this = _super.call(this, yearModelImput, makeImput, kilometresPerGalonImput) || this;
        _this.hatchbackVolumen = hatchbackVolumenImput;
        return _this;
    }
    return Hatchback;
}(EconomyCar));
export { Hatchback };
