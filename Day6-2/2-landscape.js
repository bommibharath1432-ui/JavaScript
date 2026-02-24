const result=isLandscape(600, 300)
// if(result)
// {
//   console.log("Landscape");
// }
// else{
//   console.log("Portrait");
// }
console.log(result ? "Landscape": "Portrait");

function isLandscape(width, height) {
  return (width > height);
}