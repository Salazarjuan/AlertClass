"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = require("../Car");
class FamilyCar extends Car_1.Car {
    constructor(yearModelImput, makeImput, doorsImput) {
        super(yearModelImput, makeImput);
        this.doors = doorsImput;
    }
}
exports.FamilyCar = FamilyCar;
