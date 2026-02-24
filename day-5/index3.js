//3.Arrow functions nothing but expression functions
//this will not apply the hoisting because arrow functions can works  es6 onwards
const sum = (arg1, arg2) => arg1 + arg2;

console.log(sum(34, 45));

const big = (arg1, arg2) => {
  if (arg1 > arg2) {
    return arg1;
  } else {
    return arg2;
  }
};
console.log(big(45, 77));
