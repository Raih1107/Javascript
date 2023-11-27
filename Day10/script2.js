const score = 90 ;
if(true){
    const score = 50;
    console.log(score);
}
console.log(score);

console.log(sum(2, 3, 4));
function sum(a,b,c){
    return a+b+c;
}

// Default parameters

let weight = function(m, g = 9.8){
    return m * g;
}

console.log(weight(10,11));
console.log(weight(10));


