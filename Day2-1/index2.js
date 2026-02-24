//Arrays
let nums=[1,2,3,4,5,6];
console.log(nums);
console.log("Length of Array:",nums.length);
nums.push(7);//push always add the element at the end of the array
nums.push(8);
console.log(nums);
nums.pop()//it remove last added element
console.log(nums);
nums.pop()
console.log(nums);
nums.shift()//it removes the first element of the array
console.log(nums);
nums.unshift(1);//it adds the element begining of the array
console.log(nums);
nums=nums.splice(2,5);//extracts the speicified data
console.log("After Delete:",nums);