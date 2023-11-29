// // Map method

// //create a new array from original array by applying 
// //transformation function

// let salaries = [3000, 5000, 8000, 6000, 9000];

// let newSalaries = salaries.map(salary =>{
//     let increasedSalary = salary/2;
//     return salary+increasedSalary;
// })

// console.log("After 50% bonus " , newSalaries);



// //filter method

// let gifts =["watch", "ring", "chocolates", "teddy-bear", "watch" ,"ring"];

// // now we want to filter only "watch and ring" gifts

// let filteredArray = gifts.filter(gift=>{
//     if(gift == "watch" || gift == "ring"){
//         return gift;
//     }

// })
// console.log(filteredArray);
// console.log(gifts);



// //reduce method
// //run reducer function for each array element
// //array.reduce(function(total, currentValue), initialValue)
// //it returns single value

// let num = [1,4,6,10,33];
// let sum = num.reduce(function(total,currentValue){
//     return total + currentValue;
// }, 0);

// console.log(sum);


// //find method
// //it returns the "first" element we are looking for...

// let students = [{id:3, name:"Alex"},{id:1, name:"Jake"}];

// let result = students.find(student =>{
//     return student.id ==3;
// })

// console.log(result);



// findIndex method
// executes function for each array element 
// it returns "index" of that array element which "first" passes the
// test otherwise -1 
let ages = [210,22,423,42,76];

let result = ages.findIndex(age=>{
    return age < 30;    
})

console.log(result);













