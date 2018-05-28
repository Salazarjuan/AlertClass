export class Car {
    //Propieties
    yearModel: number;
    make: string;
    engineOn: boolean;

    //constructor
    constructor(yearModelImput: number, makeImput:string){
        this.yearModel = yearModelImput;
        this.make = makeImput;
        this.engineOn = false;
    }

    //methods
    StartEngine(){
        this.engineOn = true;
        console.log("engine started");
    }

    StopEngine(){
        this.engineOn = false;
        console.log("engine stopped");
    }



}