let nums=[1,2,3,4,5,6,7,8];
//syntax array.splice(startindex,noofelement,addingelements)
nums.splice(2,0,"a","b","c");
console.log(nums);

//syntax array.slice(startindex,endindex)
let ornums=nums.slice(2,5);
console.log(ornums)

//remove the specified index value
console.log(nums);
delete nums[0];
console.log(nums);

nums="Hello How are you".split('');
if(Array.isArray(nums))
{
    console.log("its Array");
}
else
{
    console.log("its not Array");
}

//includes

let names=["Ramesh","Kishore","Ram","Sita","Krihsna"];
console.log(names.includes("Kishore"));