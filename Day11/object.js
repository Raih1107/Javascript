// // Intro to objects in js

// let car = {
//     color:"black",
//     model:"2023",
//     company:"Honda"
// }

// console.log(car);

// // accessing the js object properties
// console.log(car["color"]);
// console.log(car.company);               //best method


// let propertyName = "color";
// console.log(car[propertyName]);


// // modifying the object
// car.color="red";
// console.log(car.color);

// car["model"] = "2024"
// console.log(car.model);

// // delete property

// let obj = {
//     prop1 : "1",
//     prop2 : "2",
//     prop3 : "3"
// }

// delete obj.prop1;
// console.log(obj);


// // Function vs object

// let birthY = prompt("enter your birthyear : ") ;
// let person = {
//     age : function(){
//         let age = 2023 - birthY;
//         return age;
//     }
// }
// console.log(`Current age is ${person.age()}`)



// // One can always access values in function stored in an object by using "this" keyword

// let man = {
//     firstName:"Harry",
//     lastName:"Brooks",
//     city:"Banglore",
//     birthYear:1989,
//     job:"Software Engineer",
//     getSummary:function(){
//     return `${this.firstName} ${this.lastName} is a ${this.job} who lives in ${this.city} and his birthyear is ${this.birthYear}.`;
//     }
// }
// console.log(man.getSummary());


// // forEach method of array is another type of loop which can be used over the array

// let rollNo = [1,2,3,4,5,6,7,8,9]

// //using loop
// for(let i = 0 ; i<rollNo.length; i++){
//     console.log(rollNo[i]);
// }

// console.log("*************************");

// //using forEach method

// rollNo.forEach(function(element){
//     console.log(element);
// })


// //Objects inside an array

// let blockList = [{userName:"John" ,reason:"Harmful Content"},{userName:"Paul" ,reason:"Copyright Issue"}];

// for(let i = 0; i<blockList.length; i++){
// console.log(`User is ${blockList[i].userName} blocked due to this ${blockList[i].reason} as reason`);  
// } 

