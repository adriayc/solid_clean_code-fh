import {
  Tesla,
  Audi,
  Toyota,
  Honda,
  Volvo,
  Vehiculo,
  Ford,
} from './03-lsp-final-b';

(() => {
  const printCarSeats = (cars: Vehiculo[]) => {
    // for (const car of cars) {
    //   if (car instanceof Tesla) {
    //     console.log('Tesla', car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Audi) {
    //     console.log('Audi', car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Toyota) {
    //     console.log('Toyota', car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Honda) {
    //     console.log('Honda', car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Volvo) {
    //     console.log('Volvo', car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Ford) {
    //     console.log('Ford', car.getNumberOfSeats());
    //     continue;
    //   }
    // }

    cars.forEach((car) => {
      // car.constructor.name - is used to retrieve the name of the constructor function that created the object
      console.log(car.constructor.name, car.getNumberOfSeats());
    });
  };

  const cars = [
    new Tesla(7),
    new Audi(2),
    new Toyota(5),
    new Honda(5),
    new Volvo(2),
    new Ford(2),
  ];

  printCarSeats(cars);
})();
