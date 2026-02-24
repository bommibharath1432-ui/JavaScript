//7. Callback Function

//A function passed into another function to be executed later.

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("Srinivas", function () {
  console.log("Welcome to JavaScript!");
});
console.log("--------------");
function fun(msg) {
  console.log("This Message Came from First Funciton " + msg);
}
const showMessage = (msg, fun) => {
  console.log("First Function Execution completed");
  fun(msg);
};

showMessage("Hi Call Back Function", fun);
