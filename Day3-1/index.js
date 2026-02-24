const nums = [11, 22, 33, 44, 55];
//it returns keys(indexs)
for (let x in nums) {
  console.log(x + "->" + nums[x]);
}
//it returns values
for (let x of nums.values()) {
  console.log(x);
}
//it returns values
for (let x of nums) {
  console.log(x);
}

//reduce

// const sum=nums.reduce((acc,currentValue)=>acc+currentValue);
// console.log(sum);
function sum(acc, currentValue) {
  return acc + currentValue;
}
const sunofNums = nums.reduce(sum);
console.log(sunofNums);
