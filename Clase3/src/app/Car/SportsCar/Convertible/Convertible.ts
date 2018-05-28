import {SportsCar} from "../SportsCar";

export class Convertible extends SportsCar{
    roofColor: string
    roofOpen: boolean
    constructor(yearModelImput: number, makeImput:string, maxSpeedImput: number, horsepowerImput: number, roofColorImput:string) {
        super(yearModelImput, makeImput,maxSpeedImput,horsepowerImput);
        this.roofColor=roofColorImput;

    }

    RaiseRoof(){
        this.roofOpen = true;
        console.log("roof raised");
    }

    DropRoof(){
        this.roofOpen = false;
        console.log("roof dropped");
    }

}