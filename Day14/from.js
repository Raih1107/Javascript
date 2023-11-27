//Form events

// //  e.preventDefault() :prevents automatic reload when form is sumitted if input field does not have required
// let form = document.querySelector('.sign-up-Form')
// // console.log(form)
// // let email = document.querySelector('#email');
// // let password = document.querySelector('#password');


// form.addEventListener('submit', (e)=>{
//     e.preventDefault();  
//     // console.log(email.value, password.value);       //1st method
//     console.log(form.email.value , form.password.value);  //2nd method
//     console.log(form.userEmail.value , form.userPassword.value);  
//                                                           //3rd method

//     console.log("Form submitted succesfully");
// })





// // Regular Expression (Regex)

// // It is a pattern of characters used to do pattern matching 
// // or we can say for "Data Validation"

// //Implementation of password validation
// //length at least = 8
// // atleast one upper case letter
// // atleast one lower case letter
// // atleast one digit from 0 to 9
// // atleast one special character


// let form = document.querySelector('.sign-up-Form')
// let email = document.querySelector('#email');
// let password = document.querySelector('#password');
// let passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;

// form.addEventListener('submit' ,(e)=>{
//     e.preventDefault();
//     let passwordValue = password.value;
//     console.log(passwordValue);
//     let result = passwordValue.match(passwordPattern);
// console.log(result);
//     if(result){
//     console.log("Your password is strong");
        
//     }else{
//         console.log("Inavlid password");
//     }
// })



//Regex 2
// username validation
// username can only consist of A-Z or a-z
// length of username should be 6-12


let form = document.querySelector('.sign-up-Form')
let email = document.querySelector('#email');
let user = document.querySelector('#user')
let password = document.querySelector('#password');
let userNamePattern = /^[A-Za-z]{6,12}$/

form.addEventListener('submit' ,(e)=>{
    e.preventDefault();
    let username = user.value;
    //"test" method returns boolean values

    let result2 = userNamePattern.test(username)
    if(result2 == true){
        console.log("Username is valid");
    }else{
        console.log("Invalid user name");
    }
})


//Live Feedback

user.addEventListener('keyup' ,(e)=>{
    if(userNamePattern.test(e.target.value)){
        user.setAttribute('class' , 'success')
        console.log("Passed");
    }else{
        user.setAttribute('class' , 'error')
        console.log("Failed")
    }
})









