console.log("Hello Javascript!");

let variable1 = "string Value";
let variable2 = 10;
let variable3 = 13;
let variableBoolean = true;

console.log(variable1);
//do same for other variables

console.log(variable2 + variable3);
//Do same for other variables...

//arrays
let myarray = [1, 2, 3];
let mystringarray = ["Hello World!"];

console.log(myarray[0]);
console.log(mystringarray[0]);

//array methods
console.log(myarray.length);
//try exploring more...
//function

function addFunction(value1, value2){
    let sum = value1 + value2;
    return sum;
}
 console.log(addFunction(3,4));
 //create more functions for subtraction and multiplication

 function subtract(value1, value2){
    let subtract = value1 - value2;
    return subtract;
 }

 function multiply(value1, value2){
    let multiply = value1 * value2;
    return multiply;
 }

 console.log(subtract(10,2));
 console.log("Multiplication:");
 console.log(multiply(20,10));

 let university = "Deakin University";

 if(university === "Deakin University"){
    console.log("That's right")

 }
 else {
    console.log("That's wrong");
 }