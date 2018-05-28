"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = require("../Car");
class SportsCar extends Car_1.Car {
    constructor(yearModelImput, makeImput, maxSpeedImput, horsepowerImput) {
        super(yearModelImput, makeImput);
        this.maxSpeed = maxSpeedImput;
        this.horsepower = horsepowerImput;
    }
    ShowMaxSpeed() {
        console.log("the max speed of this car is: " + this.maxSpeed);
    }
}
exports.SportsCar = SportsCar;
