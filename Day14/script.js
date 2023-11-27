// More events

//Copy events

let copyRightElement = document.querySelector('.copy');
copyRightElement.addEventListener('copy' , ()=>{
    console.log("OOOI You cannot copy this content because its copy right content.")
})

//Mouse move event

let box = document.querySelector('.box');
box.addEventListener('mousemove' ,(e)=>{
    console.log(e.offsetX, e.offsetY)
})