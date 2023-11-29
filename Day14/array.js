// //working with arrays
// let letters = ["a", "b", "c", "d"];

// // //reverse (mutate the orignal array)

// // let reverse = letters.reverse();
// // console.log(reverse);
// // console.log(letters);


// //concat

// let nums = [1,2,3,4,5];
// let concated = nums.concat(letters);
// console.log(concated);


// // join

// let joined = letters.join(' ');
// console.log(joined);



// //slice method
// // non-mutating
// //used to extract the part of an array

// let num = [3,5,7,9,2];
// let extractedArray = num.slice(1,4);
// console.log("Original array = ", num);
// console.log("Extracted array = ", extractedArray);


// //splice method
// // mutating method
// //used to add and delete elements
// //array.splice(index, delete, valueToBeAdded, valueToBeAdded,.....)

// let num = [3,5,7,9,2];
// let updated = num.splice(1,0,1,4,95);
// console.log("Original array =",num);
// console.log("Returned element array =" ,updated);


// //at method

// let numbers = [23,432,56,32,54, 5212, 75, 567,967, 5211, 56532,411];
// // console.log(numbers[1]);
// // console.log(numbers.at(1));

// //getting the last element of the array
// console.log(numbers[numbers.length-1]);
// console.log(numbers.slice(-1)[0]);
// console.log(numbers.at(-1));                 //best method

// // at method also works on strings
// let name = "Harry";
// console.log(name.at(-3));
















