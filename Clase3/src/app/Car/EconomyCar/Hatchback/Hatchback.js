"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EconomyCar_1 = require("../EconomyCar");
class Hatchback extends EconomyCar_1.EconomyCar {
    constructor(yearModelImput, makeImput, kilometresPerGalonImput, hatchbackVolumenImput) {
        super(yearModelImput, makeImput, kilometresPerGalonImput);
        this.hatchbackVolumen = hatchbackVolumenImput;
    }
}
exports.Hatchback = Hatchback;
