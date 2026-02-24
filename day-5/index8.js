//8. Constructor Function

//Used to create objects (before ES6 class).

function Person(name=null, age=null) {
  this.name = name;
  this.age = age; 
}
//like deep copy
const p1 = new Person("Ravi", 25);
const p2 = new Person("Sree", "44");
const p3 = new Person();
console.log(p1.name);
console.log(p1.age);
p1.age = 60;
console.log(p1.age);
console.log(p2.name);
console.log(p2.age);

console.log(p3.name);
console.log(p3.age);
p3.name="SrinivasaRao";
p3.age=54;
console.log(p3.name);
console.log(p3.age);
