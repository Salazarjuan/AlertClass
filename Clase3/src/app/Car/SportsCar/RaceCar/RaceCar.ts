import {SportsCar} from "../SportsCar";

export class RaceCar extends SportsCar{
    revsPerSecond: number;
    inRaceMode: boolean;
    constructor(yearModelImput: number, makeImput:string, maxSpeedImput: number, horsepowerImput: number, revsPerSecondImput:number) {
        super(yearModelImput, makeImput,maxSpeedImput,horsepowerImput);
        this.revsPerSecond = revsPerSecondImput;

    }

    StarRaceMode(){
        this.inRaceMode = true;
        console.log("race mode started");
    }

    ExitRaceMode(){
        this.inRaceMode = true;
        console.log("race mode stopped");
    }

}