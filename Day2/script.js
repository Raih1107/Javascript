// const itemList = document.getElementsByClassName('list-items');
// console.log(itemList);
// const mainHeading = document.getElementById('heading');
// console.log(mainHeading);

// const list = document.getElementsByTagName('li')
// console.log(list);

// const random1 = document.querySelector('div');
// console.log(random1);

// const random = document.querySelectorAll('div');
// console.log(random);

// const listItems = document.querySelectorAll('li');

// for(i = 0 ; i<listItems.length ; i++){
//     listItems[i].style.fontSize = '4rem';
// }

// console.log(listItems);

//  Creating Elements 🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹

// const ul = document.querySelector('ul');
// const list = document.createElement('li');

// Adding an element  🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹

// ul.append(list);


// Modifying the text 🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹

// list.innerText = 'X-men';

// const firstListItem = document.querySelector('.list-items');
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);   // Do not use innnerHTML as it gives access to the user to manipulate the webpage

// Modifying attributes & classes  🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹

// list.setAttribute('id', 'heading');

// list.removeAttribute('id');

// const title = document.querySelector('#heading');
// console.log(title.getAttribute('id'));

// list.classList.add('list-items');
// console.log(list.classList.contains('list-items'));


// Remove elements   🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹

// list.remove();






// Parent Node Traversal   🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹

// let ul = document.querySelector('ul');

// const html = document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement);
// // Parents
// console.log(ul.parentNode);
// console.log(ul.parentElement);
// // Grand parents
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// Child Node Traversal  🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹

// let ul = document.querySelector('ul');
// console.log(ul.childNodes);
// ul.childNodes[1].style.backgroundColor = "blue";

// console.log(ul.children);


// Sibling Node Traversal  🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹

// let ul = document.querySelector('ul');
// const div = document.querySelector('div');
// console.log(div.childNodes);
// console.log(ul.previousSibling);
// console.log(ul.nextSibling);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);






// 🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹
// Event Listeners