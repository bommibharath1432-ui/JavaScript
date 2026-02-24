//array destructring
const nums=[45,67,78];
const [a,,c]=nums;
console.log(a);
// console.log(b);
console.log(c);

//object destructuring
const person={
    id:1,
    name:"Ramesh",
    desig:"engg",
    city:"ongole"
}
const {name,city,id}=person;
console.log(name);
console.log(id);
console.log(city)