let guessno = Math.ceil(Math.random() * 100);
let guessnumberElement = document.getElementById("guessnumber");
let resultElement = document.getElementById("result");
let count = 0;
resultElement.style.fontSize = "2rem";
function checkResult() {
  count++;
  let guessnumber = parseInt(guessnumberElement.value);
  if (guessnumber > guessno) {
    resultElement.innerHTML = "To High";
    resultElement.style.color = "red";
  } else if (guessnumber < guessno) {
    resultElement.innerHTML = "To Low";
    resultElement.style.color = "blue";
  } else if (guessnumber == guessno) {
    resultElement.innerHTML =
      "Your Guess is Correct and Your Attempts is " + count;
    resultElement.style.color = "green";
  } else {
    resultElement.innerHTML = "Something Going Wrong !";
    resultElement.style.color = "red";
  }
}
