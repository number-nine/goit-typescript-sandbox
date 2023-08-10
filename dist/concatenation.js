function concatenation(firstWord, secondWord) {
    console.log(`${firstWord} ${secondWord}`);
}
export { concatenation };
const a = [10, 20, 30];
// console.log(a.keys()[1]);
// const i:b = 24
// console.log(i);
class Car {
    constructor() {
        this.driver = null;
    }
    setDriver(driver) {
        this.driver = driver;
    }
    startJourney() {
        if (this.driver) {
            this.driver.drive();
        }
    }
}
class Driver {
    drive() {
        console.log("Driving...");
    }
}
const driver = new Driver();
const car = new Car();
car.setDriver(driver);
car.startJourney();
//# sourceMappingURL=concatenation.js.map