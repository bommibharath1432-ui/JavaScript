let inputnumElement=document.getElementById("inputnum");
let resultElement=document.getElementById("result");

function showTable()
{
    
    let x=parseInt(inputnumElement.value);
    let result="<b>";
    let i=1;
    while(i<=10)
    {
        result+=x + "X" + i + "=" + (x*i) + "<br>";
        i++;
    }
    resultElement.innerHTML=result+"</b>";
    // resultElement.style.color="red";
    // resultElement.style.backgroundColor="skyblue";
    // resultElement.style.fontSize="1.5rem";
}