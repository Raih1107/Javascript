//



const buttonTwo = document.querySelector('.btn2');

function alertBtn(){
    alert("I love Javacript");
};

buttonTwo.addEventListener("click", alertBtn);


// Mouseover

const newBackgroundColor = document.querySelector('.container3');
function changeBgColor(){
    newBackgroundColor.style.backgroundColor = "aqua";
};

newBackgroundColor.addEventListener("mouseover", changeBgColor);