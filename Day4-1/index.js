//objects
const person={
    id:1,
    name:"SrinivasaRao",
    course:"java",
    place:"ongole"
};
//shallow copy ( it copies the reference)
const student=person;
//Deep copy (it copies the data to new reference)
//const student={...person}
console.log(person);
console.log(student);
console.log(person["id"])
console.log(person["name"])
console.log(person.id);
console.log(person.name)
person.name="Kunchala SrinivasaRao";
console.log(person.name)
console.log(person);
console.log(student);
person.state="AP";
console.log(person);
console.log(student);
