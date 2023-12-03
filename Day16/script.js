// // Date and Time
// // Date object always carry both "Date" and "Time"

// //Using Date method
// let currentDate = new Date(2024,1,29);  // 0 to 11(month)
// console.log(currentDate);

// //using time stamp 
// let currentDate = new Date(0);
// console.log(currentDate);

// //1 day = 24 * 60 * 60 = 86400000ms



// // to get in "ms"
// let currentDate = new Date().getTime();
// console.log(currentDate); 



// //Using Date method
// let currentDate = new Date(2024,1,29,11,54,32);  // 0 to 11(month)
// console.log(currentDate);



// let completeDateAndTime = new Date();
// console.log(completeDateAndTime);

// console.log(completeDateAndTime.getFullYear());

// console.log(completeDateAndTime.getMonth()); 

// console.log(completeDateAndTime.getDay());

// console.log(completeDateAndTime.getDate());

// console.log(completeDateAndTime.getHours());

// console.log(completeDateAndTime.getMinutes());  


// //Local Storage

// //set item
// //get item
// //update item

// //set the item in local storage

// localStorage.setItem('passion',"programming");
// localStorage.setItem('age',19);
// console.log(localStorage);



// //get item from the local storage

// console.log(localStorage.getItem('age'));

// //update

// localStorage.setItem('age',21);
// console.log(localStorage);  

// // remove item
// localStorage.removeItem('age'); 


// // how to store complex data structure like
// //array of objects

// let vehicles =[
//     {company:"Honda" , model:"2009"},
//     {company:"Toyota" , model:"2010"}
// ]
// console.log(vehicles);

// let stringOfVehicles = JSON.stringify(vehicles);
// console.log(typeof stringOfVehicles);

// localStorage.setItem("vehicles",stringOfVehicles);

// console.log(localStorage);


// //get stored item again in object format

// let storedData = localStorage.getItem("vehicles");
// let objectFormat = JSON.parse(storedData);
// console.log( typeof objectFormat);



// OOPS in JS



