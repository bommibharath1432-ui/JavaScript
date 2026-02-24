const nums=[1,2,3,4,5,6];

//it returns after find first element
const result=nums.find((element)=>element>3);
console.log(result);

function checkValue(element)
{
    return element>4;
}
result=nums.find(checkValue);
console.log(result);

result=nums.every((element)=>element>0)
function checkEvery(element)
{
    return element>0;
}
result=nums.every(checkEvery)
console.log(result);