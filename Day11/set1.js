// //Math Objects

// // console.log(Math)

// let number = 8.7;

// console.log(Math.round(number));
// console.log(Math.floor(number));
// console.log(Math.ceil(number));
// console.log(Math.trunc(number));

// let random = Math.random();
// console.log(Math.round(random*1000));

// // Function 
// // call and apply method
// // we can , manually set the value of "this" keyword using "call" and "apply method"
// "use strict"
// let mainPlane = {
//     airline:"Indigo",
//     iatacode:"FI",
//     bookings: [],
//     book:function(flightNum,name){
//         console.log(`${name} booked a flight on ${this.airline} airlines with flight number ${this.iatacode}${flightNum}`);
//         this.bookings.push({flightName:`${this.airline}`, name:name, flightNum:`${this.iatacode}${flightNum}` });
//     }
// }

// mainPlane.book(553,"Jack");
// mainPlane.book(435,"Harris");
// console.log(mainPlane);


// let anotherPlain = {
//     airline:"Air India",
//     iatacode:"AI",
//     bookings:[],
// }

// let book = mainPlane.book;

// // book(464,"Lary");   book is a regular function
// //"this" value is undefined at least in strict mode
// //Solution⬇️ : Use call method


// book.call(anotherPlain,675,"Lary");
// console.log(anotherPlain);
// book.call(mainPlane,672,"Josh");


// //apply method

// book.apply(anotherPlain,[365, "Rambo"]);

// console.log(anotherPlain);
// console.log(mainPlane);




// //"bind" method : It is used a lot in reactjs

// function greet(){
//     console.log(`Welcome ${this.firstName} ${this.lastName} in our developer community`);
// }

// let user = {
//     firstName:"Krishna",
//     lastName:"Verma"
// }

// let greets = greet.bind(user);

// greets();


// //"objects/arrays" how "reference" is passed to variable

// //1st approach

// let arr = [1,2,3,4,5,6];

// let getRef = arr;

// getRef[5] = 7;
// // getRef.shift();

// console.log("Orginal Array" , arr);
// console.log("getRef Array" , getRef);

// console.log("||||||||||||||||||||||||||||||||||||||||");


// //2nd approach(correct one)

// let getValue = [...arr];
// getValue[4] = 10;
// console.log("Original array" , arr);
// console.log("getValue Array" , getValue);


// //for-in loop (Each iteration returns a "Key" of object)

// let car = {
//     model:2022,
//     color:"black",
//     company:"Toyota"
// }

// console.log(car);

// let x = "" ;

// for(let key in car){
//     // console.log(Key); 
//     x = x + car[key];
// }

// console.log(x);










