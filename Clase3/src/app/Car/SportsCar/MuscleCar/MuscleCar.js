"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SportsCar_1 = require("../SportsCar");
class MuscleCar extends SportsCar_1.SportsCar {
    constructor(yearModelImput, makeImput, maxSpeedImput, horsepowerImput, colorImput) {
        super(yearModelImput, makeImput, maxSpeedImput, horsepowerImput);
        this.color = colorImput;
    }
    BeingAwesome() {
        this.isAwsome = true;
        console.log("fuck yhea this car is awesome");
    }
    StopBeingAwesome() {
        this.isAwsome = true;
        console.log("no mind, this car is always awesome");
    }
}
exports.MuscleCar = MuscleCar;
