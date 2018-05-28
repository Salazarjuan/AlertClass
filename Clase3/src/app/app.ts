/*import {Hatchback} from "./Car/EconomyCar/Hatchback/Hatchback";
import {MicroCar} from "./Car/EconomyCar/MicroCar/MicroCar";
import {FamilyCar} from "./Car/FamilyCar/FamilyCar";*/
import {MuscleCar} from "./Car/SportsCar/MuscleCar/MuscleCar";
import {Convertible} from "./Car/SportsCar/Convertible/Convertible";
import {RaceCar} from "./Car/SportsCar/RaceCar/RaceCar";


let myMuscleCar = new MuscleCar(2015,"toyot", 300, 500, "red");
let myRaceCar = new RaceCar(2016,"chevrolet",350,400,9000);
let myConvetivleCar = new Convertible(2017,"BMW",250,400,"coffe");

console.log(myMuscleCar.constructor.name);
myMuscleCar.StartEngine();

myMuscleCar.BeingAwesome();
myMuscleCar.StopBeingAwesome();

myMuscleCar.ShowMaxSpeed();
