let titleElement = document.getElementById("title");
let inputaElement = document.getElementById("inputa");
let inputbElement = document.getElementById("inputb");
let resultElement = document.getElementById("result");
titleElement.innerText = "Math Calculation";

function calculate(opt) {
  let res;
  // if (id == "+") {
  //   res = parseInt(inputaElement.value) + parseInt(inputbElement.value);
  // } else if (id == "-") {
  //   res = parseInt(inputaElement.value) - parseInt(inputbElement.value);
  // }
  // else if (id == "x") {
  //   res = parseInt(inputaElement.value) * parseInt(inputbElement.value);
  // }
  // else if (id == "/") {
  //   res = parseInt(inputaElement.value) / parseInt(inputbElement.value);
  // }
  // else if (id == "%") {
  //   res = parseInt(inputaElement.value) % parseInt(inputbElement.value);
  // }
switch(opt)
{
  case "+":
    res = parseInt(inputaElement.value) + parseInt(inputbElement.value);
    break;
  case "-":
    res = parseInt(inputaElement.value) - parseInt(inputbElement.value);
     break;
  case "x":
    res = parseInt(inputaElement.value) * parseInt(inputbElement.value);
     break;
  case "/":
    res = parseInt(inputaElement.value) / parseInt(inputbElement.value);
     break;
  case "%":
    res = parseInt(inputaElement.value) % parseInt(inputbElement.value);
     break;
  default:
    res="Somethis is Wrong!";

}
  resultElement.innerHTML = "<h1>" + res + "</h1>";
}
