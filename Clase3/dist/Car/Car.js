var Car = /** @class */ (function () {
    //constructor
    function Car(yearModelImput, makeImput) {
        this.yearModel = yearModelImput;
        this.make = makeImput;
        this.engineOn = false;
    }
    //methods
    Car.prototype.startEngine = function () {
        this.engineOn = true;
        console.log("engine started");
    };
    Car.prototype.stopEngine = function () {
        this.engineOn = false;
        console.log("engine stoped");
    };
    return Car;
}());
export { Car };
