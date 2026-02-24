//functions with rest operator
function sum(a, b, ...d) {
  let total = a + b;
  for (let i = 0; i < d.length; i++) {
    total += d[i];
  }
  return total;
}

console.log(sum(34, 45));
console.log(sum(34, 45, 88));
console.log(sum(34, 45, 88, 99));
console.log(sum(34, 45, 88, 100, 78));
