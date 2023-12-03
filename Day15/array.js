// // Map method

// //create a new array from original array by applying 
// //transformation function

// let salaries = [3000, 5000, 8000, 6000, 9000];

// let newSalaries = salaries.map(salary =>{
//     let increasedSalary = salary/2;
//     return salary+increasedSalary;
// })

// console.log("After 50% bonus " , newSalaries);

// let numbers = [1,2,3,4,5];
// console.log(numbers.map(item => item * 2));

// const cities = ["NY","LA","LV","TX"];
// console.log(cities.map((city) => city.toLowerCase()))



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



// // findIndex method
// // executes function for each array element 
// // it returns "index" of that array element which "first" passes the
// // test otherwise -1 
// let ages = [210,22,423,42,76];

// let result = ages.findIndex(age=>{
//     return age < 30;    
// })

// console.log(result);




// // "some" and  "every" method
// // some method returns "true" if any array element passes the test
// // "every" method returns "true" if all every array element pass the test

// let scores = [25,345,32,64,18,97];

// let result = scores.some(score =>{
//     return score>50;
// })

// console.log(result);


// let newScores = [25,345,32,64,18,97];

// let newResult = newScores.every(score =>{
//     return score>50;
// })

// console.log(newResult);




// // flat method
// // it creates a new array with the elements of the subarrays
// // "concated" into it.

// let array = [1,2,3,4,[5,6,[7,8,[9,10]]]];
// console.log("before flat ",array);

// let results = array.flat(3);   // default argument in flat is 1

// console.log("after flat ", results);



// //flatmap method

// let cart = [{
//     name:"mobile phone",
//     qty:2,
//     price:500,
// },
// {
//     name:"tablet",
//     qty:1,
//     price:1000
// }]

// let newCart = cart.flatMap(item =>{           //try map or flat here
//     if(item.name === "mobile phone"){
//         return [item,{
//             name:"screen gaurd",
//             qty:1,
//             price:0
//         }]
//     }else{
//         return [item]
//     } 
// })

// console.log(newCart);



// // working with arrays(simple methods)

// // sorting array using sort method
// // by default sort method is used to sort strings
// // it fristly convert everything into strings and then

// let letters = ["d","e","f","a","b"];

// console.log(letters.sort());

// let nums = [2,3,5,56,64 ,-42, -32,-1];

// console.log(nums.sort())

// nums.sort((a,b)=>{
//     if(a<b){
//         return -1;
//     }
//     if(a>b){
//         return 1;
//     }
// })

// console.log(nums); 

// //OR

// nums.sort((a,b)=>{
//     return a-b;         // a-b for ascending order
// })

// console.log(nums); 

// nums.sort((a,b)=>{
//     return b-a;         // b-a for descending order
// })

// console.log(nums);




// // chain of methods

// let num = [1,2,3,4,5,6];

// let result = num.slice(0,3).splice(2,1,7).push(8);
// console.log(result); 
























