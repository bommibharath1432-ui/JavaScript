//Hoisting
//in hosting it supports only below es6 commands
//Hoisting is a mechanisam, it moves the all declrations(not values)
//and ordinary functions (es6 below ) at the top of the program
//whiel executing of java script

//ReferenceError is nothing but not declared that variable
//Undefined the variable is declared but not assign anything 
//some time the variable is declared after using(console.log)


console.log("A=" + a);
var a=10;

showMessage();

//es6 below it supports hosting
function showMessage()
{
    console.log("Hai Students");
}

//es6 or above
//const showMessage=()=>console.log("Hai Students")
