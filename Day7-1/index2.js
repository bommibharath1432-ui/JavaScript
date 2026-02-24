//class
class Student {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }
  getCode() {
    return this.code;
  }
  setCode(code) {
    this.code = code;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}
code = 100;
name = "Prasanth";
const ramesh = new Student(code, name);
console.log(ramesh.getCode());
console.log(ramesh.getName());
ramesh.setCode(200);
ramesh.setName("Kishore");
console.log(ramesh.getCode());
console.log(ramesh.getName());
