// // OOPS
// // Constructor function and the "new" operator
// // 


// let Car = function(color,model){
// // instance properties
// this.color = color;
// this.model = model;
// }

// Car.prototype.startEngine = function(){
//     console.log("This is start engine method.");
// }

// let instanceOfCar = new Car("Black",2023);
// let instance = new Car("Blue",2019);
// console.log(instanceOfCar,instance);
// instanceOfCar.startEngine();

//Object
let car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
    start: function() {
      console.log('Engine started!');
    }
  };

console.log(car);

//property
console.log(car.brand); // Output: Toyota

//method
car.start(); // Output: Engine started!


//Constructor Function

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.start = function() {
      console.log('Engine started!');
    };
  }
  
  let myCar = new Car('Honda', 'Civic', 2023);
  
console.log(myCar);

//Prototype
Car.prototype.drive = function() {
    console.log('Vroom!');
  };
  
  myCar.drive(); // Output: Vroom!
  
//Inheritence

function ElectricCar(brand, model, year) {
    // Call the Car constructor to inherit its properties
    Car.call(this, brand, model, year);
    // Additional properties/methods for ElectricCar
    this.charge = function() {
      console.log('Charging...');
    };
  }
  
  // Inherit methods from Car's prototype
  ElectricCar.prototype = Object.create(Car.prototype);
  
  let myElectricCar = new ElectricCar('Tesla', 'Model S', 2023);
 
console.log(myElectricCar);