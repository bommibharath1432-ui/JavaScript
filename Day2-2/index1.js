let nums=[5,2,3,1,4,10,6,14,22,32,45,101];
console.log(nums);
console.log(nums.sort());
console.log(nums.reverse());
let nums1=[5,55,66,77];
//combine two arrays using concat
let total=nums.concat(nums1);
console.log(nums);
console.log(nums1);
console.log(total);

//spread operator
//combine two arrays using spread operator
let totalnums=[...nums,...nums1];
console.log(totalnums);

//de-structure

let values=[44,55,66];
// let [a,b,c]=values;
// console.log(a);
// console.log(b);
// console.log(c);
let [a,,c]=values;
console.log(a);
console.log(c);