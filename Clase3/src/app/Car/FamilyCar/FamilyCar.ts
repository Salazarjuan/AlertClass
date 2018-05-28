import {Car} from "../Car";

export class FamilyCar extends Car{
    //properties
    doors: number;
    constructor(yearModelImput: number, makeImput:string, doorsImput: number) {
        super(yearModelImput, makeImput);
        this.doors = doorsImput;
    }


}