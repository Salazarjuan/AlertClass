import {Car} from "../Car";

export class EconomyCar extends Car{
    //Proprieties
    kilometresPerGalon: number;
    constructor(yearModelImput: number, makeImput:string, kilometresPerGalonImput: number) {
        super(yearModelImput, makeImput);
        this.kilometresPerGalon = kilometresPerGalonImput;
    }
}