let inputaElement = document.getElementById("inputa");
let inputbElement = document.getElementById("inputb");
let resultElement = document.getElementById("result");

function calcMath(params) {
  let a = parseInt(inputaElement.value);
  let b = parseInt(inputbElement.value);

  switch (params) {
    case "+":
      resultElement.innerHTML = "<b>" + (a + b) + "</b>";
      break;
    case "-":
      resultElement.innerText = a - b;
      break;
    case "*":
      resultElement.innerText = a * b;
      break;
    case "/":
      resultElement.innerText = a / b;
      break;
    case "%":
      resultElement.innerText = a % b;
      break;
    default:
      inputaElement.value = "";
      inputbElement.value = "";
      resultElement.innerText = "";
      inputaElement.focus();
  }
}
