// document.querySelector('#Football').addEventListener
// ('click', function(e) {
//     console.log('football is clicked');
//     const target = e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor = "gray"
//     }
// })

// document.querySelector('#Cricket').addEventListener
// ('click', function(e) {
//     console.log('Cricket is clicked');
//     const target = e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor = "gray"
//     }
// })
// document.querySelector('#Kabaddi').addEventListener
// ('click', function(e) {
//     console.log('Kabaddi is clicked');
//     const target = e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor = "gray"
//     }
// })
// document.querySelector('#Hockey').addEventListener
// ('click', function(e) {
//     console.log('Hockey is clicked');
//     const target = e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor = "gray"
//     }
// })
// document.querySelector('#Golf').addEventListener
// ('click', function(e) {
//     console.log('Golf is clicked');
//     const target = e.target;
//     if(target.matches('li')){
//         target.style.backgroundColor = "gray"
//     }
// })

// Event Delegation🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹
// Follow DRY principle to code as you can see above things aare getting repeates a lot of times 
// Here comes Event Delegation
//It allows us to append a single event listener to a parent element thet adds
//it to all of its present descendents as well as future
// descendants that match a selector

document.querySelector('#sports').addEventListener
('click', function(e){
    console.log(e.target.id + "is clicked");

    const target = e.target;

    if(target.matches('li')){
        target.style.backgroundColor = 'gray';
    }
})



// adding a future descendant

const sports = document.querySelector('#sports');

const newSport = document.createElement('li');

newSport.innerText = 'boxing' ;
newSport.setAttribute('id' , 'boxing');
sports.appendChild(newSport);