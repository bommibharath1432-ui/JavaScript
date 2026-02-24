
let n=10;
pyrmidTop(n);
pyramidBottom(n-1)
function pyrmidTop(rows) { 
  for (let row = 1; row <= rows; row++) {
    let pattern = ''; 
    for (let i = 0; i < row; i++)
      pattern += '*';
    console.log(pattern);
  }
}
function pyramidBottom(rows) { 
  for (let row = rows; row >=1; row--) {
    let pattern = ''; 
    for (let i = 0; i < row; i++)
      pattern += '*';
    console.log(pattern);
  }
}