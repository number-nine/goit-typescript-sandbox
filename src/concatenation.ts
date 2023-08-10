function concatenation(firstWord: string, secondWord: string) {
  console.log(`${firstWord} ${secondWord}`);
}

export { concatenation };

type User = {
  name: string;
  age: number;
};

const a = [10, 20, 30];

// console.log(a.keys()[1]);

// const i:b = 24

// console.log(i);

class Car {
  driver: Driver | null = null;

  setDriver(driver: Driver) {
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