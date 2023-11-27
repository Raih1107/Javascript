// // Example 1: if-else statement
// let temperature = 15;

// if (temperature > 30) {
//     console.log("It's a hot day!");
// } else if (temperature > 20) {
//     console.log("It's a pleasant day.");
// } else {
//     console.log("It's a cold day.");
// }

// // Example 2: switch statement
// let dayOfWeek = "Monday";

// switch (dayOfWeek) {
//     case "Monday":
//         console.log("It's the start of the week.");
//         break;
//     case "Friday":
//         console.log("It's almost the weekend!");
//         break;
//     default:
//         console.log("It's a regular day.");
// }

// // Example 3: for loop
// for (let i = 1; i <= 5; i++) {
//     console.log(`Iteration ${i}`);
// }

// // Example 4: while loop
// let count = 0;
// while (count < 3) {
//     console.log(`While loop iteration ${count}`);
//     count++;
// }

// // Example 5: do-while loop
// let x = 5;
// do {
//     console.log(`Do-while loop iteration ${x}`);
//     x--;
// } while (x > 0);
// let text = "";
// for (let i = 0; i < 10 ; i++) {
//     if(i===3) {
        
//         continue;
//     }
//     console.log(i);
    
// }


// var age = 12;
// if(age<10){
//     console.log("kid")
// }else if(age<18){
//     console.log("teen")
// }else{
//     console.log("adult")
// }



// let code = "US" ;
// switch(code){
//     case "IN":
//         console.log("India");
//         break;
//     case "US":
//         console.log("United States");
//         break;
// }


// let age = 62;
// let ageGroup = age < 10? "Kid" :
// age < 18 ? "teen" :
// age < 65 ? "adult" :
// "Senior";
// console.log(`This person is classified as a ${ageGroup}.`);



// let sum = (a,b,c) => {return a+b+c;}

// let result = sum(2, 3, 4);
// console.log("The sum is:", result);

// setTimeout(function() {
//     console.log("Yo");
// }, 5000);
// function x(y){
//     console.log("x");
//     y();
// }
// x(function y(){
//     console.log("y");
// })




//Arrays

// let dishes = ["Dosa" , "Parathey" , "Dahi" , "Rice"];
// console.log(dishes[0])
// console.log(dishes)
// dishes[0] = "Chhole"
// console.log(dishes.join(' '))
// console.log(dishes.indexOf("Chhole"))

// let newDishes = ["sweets" , " fruits"];
// console.log(dishes.concat(newDishes))

// let updatedDishes = dishes.concat(newDishes)
// console.log(updatedDishes.length);

// console.log(updatedDishes.push("Eggs"))
// console.log(updatedDishes.pop())
// console.log(updatedDishes)


// function isValidEmail(email) {
//     // Regular expression for a basic email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
//     return emailRegex.test(email);
// }

// // Example usage
// let userEmail = "random@gmail.com";

// if (isValidEmail(userEmail)) {
//     console.log("Email is in a valid format");
//     // You would typically submit the email to the server for further validation
// } else {
//     console.log("Invalid email format");
// }


































