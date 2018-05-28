"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SportsCar_1 = require("../SportsCar");
class Convertible extends SportsCar_1.SportsCar {
    constructor(yearModelImput, makeImput, maxSpeedImput, horsepowerImput, roofColorImput) {
        super(yearModelImput, makeImput, maxSpeedImput, horsepowerImput);
        this.roofColor = roofColorImput;
    }
    RaiseRoof() {
        this.roofOpen = true;
        console.log("roof raised");
    }
    DropRoof() {
        this.roofOpen = false;
        console.log("roof dropped");
    }
}
exports.Convertible = Convertible;
