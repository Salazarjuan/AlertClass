"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(yearModelImput, makeImput) {
        this.yearModel = yearModelImput;
        this.make = makeImput;
        this.engineOn = false;
    }
    StartEngine() {
        this.engineOn = true;
        console.log("engine started");
    }
    StopEngine() {
        this.engineOn = false;
        console.log("engine stopped");
    }
}
exports.Car = Car;
