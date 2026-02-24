const person={
    id:1,
    name:"SrinivasaRao",
    designation:"Engg"
};
const address={
    area:"MMRoad",
    city:"Ongole",
    state:"AP",
    country:"India"
}
//object spreading
const fullDetails={...person,...address};
console.log(person);
console.log(address);
console.log(fullDetails);

//object destructuring
const {id,name,designation}=person;
console.log(id);
console.log(name);
console.log(designation);