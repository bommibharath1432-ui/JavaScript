let titleElement = document.getElementById("title");
let inputaElement = document.getElementById("inputa");
let inputbElement = document.getElementById("inputb");
let resultElement = document.getElementById("result");
titleElement.innerText = "Math Calculation";

function add() {
  resultElement.innerHTML =
    "<h1>" +
    (parseInt(inputaElement.value) + parseInt(inputbElement.value)) +
    "</h1>";
}
function sub() {
  resultElement.innerHTML =
    "<h1>" +
    (parseInt(inputaElement.value) - parseInt(inputbElement.value)) +
    "</h1>";
}
function mul() {
  resultElement.innerHTML =
    "<h1>" +
    parseInt(inputaElement.value) * parseInt(inputbElement.value) +
    "</h1>";
}
function div() {
  resultElement.innerHTML =
    "<h1>" +
    parseInt(inputaElement.value) / parseInt(inputbElement.value) +
    "</h1>";
}
function rem() {
  resultElement.innerHTML =
    "<h1>" +
    (parseInt(inputaElement.value) % parseInt(inputbElement.value)) +
    "</h1>";
}
