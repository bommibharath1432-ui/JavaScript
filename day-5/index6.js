//6. Higher-Order Function

//A function that takes another function as an argument or returns a function.
function  sum(a,b)
{
    return(a+b)
}
function operate(a, b, sum) {
  return sum(a, b);
}

//const result=operate(6, 4, (x, y) => x + y);
const result=operate(6, 4, sum);
console.log(result)