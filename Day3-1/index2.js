const months=["jan","Feb","Mar","Apr"];
console.log(months[0]);
console.log(months.at(0));


//it return array values
const reulst=months.values();
for(x of months)
{
    console.log(x)
}
//it returns array keys
for(x of months.keys())
{
    console.log(x)
}

//it fills upt  to 3 elements
const nums=[1,2,3,4,5,6];
console.log(nums);
console.log(nums.fill('x',nums.length-5,nums.length-2))

