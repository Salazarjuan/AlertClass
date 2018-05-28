"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = require("../Car");
class EconomyCar extends Car_1.Car {
    constructor(yearModelImput, makeImput, kilometresPerGalonImput) {
        super(yearModelImput, makeImput);
        this.kilometresPerGalon = kilometresPerGalonImput;
    }
}
exports.EconomyCar = EconomyCar;
