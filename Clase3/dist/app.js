/*import {Hatchback} from "./Car/EconomyCar/Hatchback/Hatchback";
import {MicroCar} from "./Car/EconomyCar/MicroCar/MicroCar";
import {FamilyCar} from "./Car/FamilyCar/FamilyCar";*/
import { MuscleCar } from "./Car/SportsCar/MuscleCar/MuscleCar";
import { Convertible } from "./Car/SportsCar/Convertible/Convertible";
import { RaceCar } from "./Car/SportsCar/RaceCar/RaceCar";
var myMuscleCar = new MuscleCar(2015, "toyot", 300, 500, "red");
var myRaceCar = new RaceCar(2016, "chevrolet", 350, 400, 9000);
var myConvetivleCar = new Convertible(2017, "BMW", 250, 400, "coffe");
console.log(myMuscleCar.startEngine());
console.log(myConvetivleCar.startEngine());
console.log(myRaceCar.startEngine());
