const nums=[1,2,3,4,5,6];
nums.forEach((element)=>console.log(element));

var result=nums.map((element)=>{
    if(element>3)
    {
        return(element);
    }
    else
    {
        return null;
    }
});
console.log(result)

var result=nums.filter((element)=>element>2 && element<4);
console.log(result)
