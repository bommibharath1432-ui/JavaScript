const array = [-1, null, undefined, "a", 2, 3, 5];

console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}

console.log(null && "True")