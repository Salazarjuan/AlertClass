import {EconomyCar} from "../EconomyCar";

export class MicroCar extends EconomyCar{
    volumen: number;
    constructor(yearModelImput:number, makeImput:string, kilometresPerGalonImput:number, volumenImput:number){
        super(yearModelImput, makeImput, kilometresPerGalonImput);
        this.volumen = volumenImput;
    }
}