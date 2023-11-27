
// Event Propagation  🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹🏹

// It consists of three phases
// 1. Event Capturing (when condition is true)
// 2. Target
// 3. Event Bubbling (when condition is false)

window.addEventListener("click", function(){
    console.log("Window");
},true);

document.addEventListener("click", function(){
    console.log("Document");
},true);

document.querySelector(".div2").addEventListener
("click", function(e){
    // e.stopPropagation()
    console.log("DIV 2");
},{once:true});                                  // once : true prints DIV 2 only one time

document.querySelector(".div1").addEventListener
("click", function(){
    console.log("DIV 1");
},true);

document.querySelector("button").addEventListener
("click", function(e){
    // console.log(e.target);                           // it displays the name of element being targetted
    console.log(e.target.innerText = "Clicked!");                            // target method
},true);








