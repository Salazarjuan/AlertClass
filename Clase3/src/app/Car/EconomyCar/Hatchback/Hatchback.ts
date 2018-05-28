import {EconomyCar} from "../EconomyCar";

export class Hatchback extends EconomyCar{
    hatchbackVolumen: number;
    constructor(yearModelImput:number, makeImput:string, kilometresPerGalonImput:number, hatchbackVolumenImput:number){
        super(yearModelImput, makeImput, kilometresPerGalonImput);
        this.hatchbackVolumen = hatchbackVolumenImput;
    }
}