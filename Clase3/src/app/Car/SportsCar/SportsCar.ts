import {Car} from "../Car";

export class SportsCar extends Car{
    //Properties
    maxSpeed: number;
    horsepower: number;

    constructor(yearModelImput: number, makeImput:string, maxSpeedImput: number, horsepowerImput: number) {
        super(yearModelImput, makeImput);
        this.maxSpeed = maxSpeedImput;
        this.horsepower = horsepowerImput;
    }

    ShowMaxSpeed(){
        console.log("the max speed of this car is: " + this.maxSpeed);
    }

}
