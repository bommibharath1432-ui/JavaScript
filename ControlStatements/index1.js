//terinary operator

let age = 17;
const result = age > 18 ? "Eligible" : "Not Eligible";
console.log(result);

//if...else

let studentage = 21;
if (studentage > 18) console.log("Eligible");
else console.log("Not Eligible");

//while

let n = 9,
  i = 1;
while (i <= 10) {
  console.log(n + "X" + i + "=" + n * i);
  i++;
}

//for loop

for (let i = 1; i <= n; i++) {
  let strString = "";
  for (let j = 1; j <= i; j++) {
    strString += j + " ";
  }
  console.log(strString);
}
