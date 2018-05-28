"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EconomyCar_1 = require("../EconomyCar");
class MicroCar extends EconomyCar_1.EconomyCar {
    constructor(yearModelImput, makeImput, kilometresPerGalonImput, volumenImput) {
        super(yearModelImput, makeImput, kilometresPerGalonImput);
        this.volumen = volumenImput;
    }
}
exports.MicroCar = MicroCar;
