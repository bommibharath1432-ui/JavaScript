//Let vs Var vs Constant
//constans can allow the initialization only declaration time
//it can't support re-initialization
//constants are block scoped variables
//let also block scope
//var global scope and block scope
const a=10;
var b = 20;
console.log(a);

{
  console.log("First Block");
  var b = 0;
  const a = 20;
  console.log(a);
  console.log("B=",b);
  b = b + 20;
  console.log("B=",b);
}
{
  console.log("Second Block");
  const a = 30;
  console.log(a);
  b = b + 20;
  console.log(b);
}
b = b + 20;
console.log(b);

const c = 10;
let d = 20;
console.log("C=", c);
console.log("D=", d);
{
  console.log("Third Block");
  console.log("C=", c);
  console.log("D=", d);
  const e =20;
  let f = 40;
  console.log("E=", e);
  console.log("F=", f);
  {
    // e=e+20;
    f = f + 40;
    console.log("E=", e);
    console.log("F=", f);
  }
}
