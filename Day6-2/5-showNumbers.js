
//showNumbers(15);

// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
//     console.log(i, message);
//   }
// }

let min=1,max=100;
function printPrimeNumbers(min,max)
{
  for(let i=min;i<=max;i++)
  {
    count=0;
    for(let j=2;j<i;j++)
    {
      if(i%j===0)
      {
        count++;
      }
    }
    if(count==0) console.log(i + " ");
  }
}
printPrimeNumbers(1,100);