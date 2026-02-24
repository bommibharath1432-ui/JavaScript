let nums=[4,3,4,2,1,6,8,7,1];
let x=nums.toString();
console.log(x)
console.log(nums.join("_"));
//find the index of specified element
console.log(nums.indexOf(1));
//find the Last index of specified element
console.log(nums.lastIndexOf(1));

let names="suresh,ganesh,rajesh,lokesh";
let namesarray=names.split(",");
console.log(namesarray);

let polyndrome="malayalam";
if(polyndrome===polyndrome.split('').reverse().join(''))
{
    console.log("Polyndrome");
}
else
{
    console.log("Not Polyndrome");
}

