import {SportsCar} from "../SportsCar";

export class MuscleCar extends SportsCar{
    color:string
    isAwsome: boolean
    constructor(yearModelImput: number, makeImput:string, maxSpeedImput: number, horsepowerImput: number, colorImput:string) {
        super(yearModelImput, makeImput,maxSpeedImput,horsepowerImput);
        this.color = colorImput;

    }

    BeingAwesome(){
        this.isAwsome = true;
        console.log("fuck yhea this car is awesome");
    }

    StopBeingAwesome(){
        this.isAwsome = true;
        console.log("no mind, this car is always awesome");
    }

}