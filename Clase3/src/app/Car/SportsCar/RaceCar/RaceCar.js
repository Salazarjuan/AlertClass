"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SportsCar_1 = require("../SportsCar");
class RaceCar extends SportsCar_1.SportsCar {
    constructor(yearModelImput, makeImput, maxSpeedImput, horsepowerImput, revsPerSecondImput) {
        super(yearModelImput, makeImput, maxSpeedImput, horsepowerImput);
        this.revsPerSecond = revsPerSecondImput;
    }
    StarRaceMode() {
        this.inRaceMode = true;
        console.log("race mode started");
    }
    ExitRaceMode() {
        this.inRaceMode = true;
        console.log("race mode stopped");
    }
}
exports.RaceCar = RaceCar;
