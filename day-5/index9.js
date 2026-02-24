//9. Generator Function
function* numbers() {
  yield showMessage();
  yield 2;
  yield 3;
}

function showMessage()
{
    return(1);
}
const gen = numbers();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
