// Arrow Functions

// let invitation = name => `Welcome ${name} to this event`
// console.log(invitation("folks"));


// Passing function as an argument which is callback

// let upperCase = function(str){
//     return str.toUpperCase();
// }

// let lowerCase = function(str){
//     return str.toLowerCase();
// }


// let transformer = function(str,fun){
//     return fun(str)
// }

// console.log(transformer("HEllo", lowerCase))


// // Function returning another function

// let compliment = function(msg){
//     return function(name){
//         console.log(`${msg} ${name}`);
//     }
// }

// // 1st method

// compliment("You are a good coder")("Harry");

// // 2nd method 

// let complimented = compliment("You are a good coder");

// complimented("Harry");

// function x(){
//     let a = 10;
//     function y(){
//         console.log(a);
//     } 
//     y();
// }
// x();

// function outer(){
//     let outerVar = 10;
//     function inner(){
//         console.log(outerVar);
//     }
//     return inner;
// }

// const innerFn = outer();
// innerFn();


// // setTimeout()

// setTimeout(function(name){
//     console.log(`Hello ${name}`);
// }, 1000, "John")

// // setInterval also has same syntax

//  // hoisting

// test =100
// console.log(test)
// var test = 10;

// test()
// function test(){
//     console.log("what are you doing?");
// }

// // hoisting will not occur in arrow function and others


// // naming();          // error
// let naming = function(){
//     console.log("what are you doing here?")
// }
// naming();


// //random();                          //error
// let random = ()=>{
//     console.log("why are you doing here?")
    
// }

// random();

// console.log(add(10,10,10));
// function add(a,b,c){
//     return a+b+c;
// }

// let sum = function(a,b,c){
//     return a+b+c;
// }

// console.log(sum(2,4,5));           

// // Call back example

// let talk = function(fx){
//     fx();
// }

// let sayHi = function(){
//     console.log("Hi");
// }

// talk(sayHi)

// //Or

// function speak(fx){
//     fx();
// }

// function sayHello(){
//     console.log("Hello");
// }


// speak(sayHello);



// another example

let calc = function(fx, a, b){
    return fx(a,b);
}


let addition = function(a,b){
    return a+b;
}


let subtraction = function(a,b){
    if(a>b){
        return a-b;
    }
    else{
        return b-a;
    }
}

let multiplication = function(a,b){
    return a*b;
}

let division = function(a,b){
    if(a==0 || b== 0){
        console.log("0 or not defined");
    }
    else if(a>b){
        return a/b;
    }
    else{
        return b/a;
    }
}

console.log(calc(subtraction,17,5));
console.log(calc(division,15,5));
console.log(calc(multiplication,17,5));
console.log(calc(addition,17,5));





















































