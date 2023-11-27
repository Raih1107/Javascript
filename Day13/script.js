// // DOM

// //inner text

// let heading = document.querySelector('h1');
// console.log(heading.innerText);


// //inner html

// console.log(heading.innerHTML)


// // attributes

// let link = document.querySelector('a');
// link.innerText = "Learn JS";
// console.log(link.getAttribute('href'));

// //set the attribute

// link.setAttribute('href', "https://chat.openai.com/")
// console.log(link.getAttribute('href'));
// link.innerText = "Use this AI tool";



// // Adding the style

// let heading = document.querySelector('h1');
// heading.style.color = "red";
// heading.style.backgroundColor = "yellow";



// //add , remove and replace class of element

// let heading = document.querySelector('h1');

// //adding the class

// heading.classList.add('newClass');

// // remove the class

// heading.classList.remove("newClass");

// //replace the classs

// heading.classList.replace("main", "newClass");


// // parent , children , sibling

// let parentElement = document.querySelector('.content');
// console.log(parentElement);

// //all children of parent
// console.log(parentElement.children);

// // we cannot run foreach on html collection so
// // first convert it into array

// console.log(Array.from(parentElement.children));



// Array.from(parentElement.children).forEach(function(element){
//     element.classList.add("coding");
// })


// // accessing parent element of a child element

// let childElement = document.querySelector('h2');
// // find the parent of specific child
// console.log(childElement.parentElement);

// // find siblings

// console.log(childElement.previousElementSibling);
// console.log(childElement.nextElementSibling);




