// // event basics (click event)

// let eventElement = document.querySelector('.clickMe')
// eventElement.addEventListener('click', function(){
//     console.log("Clicked");
// })

// let elements = document.querySelectorAll('li');

// elements.forEach(function(elements){
//     elements.addEventListener('click', function(e){
//         // console.log("Item clicked");
//         console.log(e.target);
//         e.target.style.textDecoration = "line-through";
//     })
// })





// // removing


let elements = document.querySelectorAll('li');

elements.forEach(function(elements){
    elements.addEventListener('click', function(e){
        // console.log("Item clicked");
        // console.log(e.target);
        // e.target.style.textDecoration = "line-through";
        console.log("Inside LI")
        e.target.remove();
    })
})


// // create and remove the element


// const ul = document.querySelector('ul');
// let eventElement = document.querySelector('.clickMe')
// eventElement.addEventListener('click', function(){
//     let li = document.createElement('li');
//     li.textContent = "Gym";
//     ul.append(li);
//     // ul.prepend(li);
// })



// bubbling and delegetion

// const ul = document.querySelector('ul');
// ul.addEventListener("click" ,()=>{
//     console.log("Inside UL")
// })

let button = document.querySelector('.clickMe');

button.addEventListener('click' ,function(){
    let li = document.createElement('li')
    li.textContent= "Something New Added";
    ul.prepend(li);
})



//delegation

const ul = document.querySelector('ul');
ul.addEventListener("click" , (e)=>{
    if(e.target.nodeName=="li"){
        e.target.remove()
    }
})



































