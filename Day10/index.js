//call, apply, bind
//immedialy execute fucntion call,apply
//call can accept individual arguments
//apply can accept array of elements
//bind it create a new function later we can call any where
const person = {
  id: 1,
  firstName: "SrinivsaRao",
  lastName: "Kunchala ",
  city: "ongole",
  fullName: function (designation = "Engg",city="") {
    // console.log(`Full Name:${this.firstName + "." + this.lastName}`);
    console.log("Full Name:" + this.firstName + "." + this.lastName + this.city);
    console.log("Deisgnation:" + designation);
  },
};

const person1 = {
  id: 1,
  firstName: "Ramesh",
  lastName: "Dande ",
  city: "Hyderabad",
};
person.fullName();

person.fullName.call( person,"UI Developer","Ongole");
person.fullName.apply(person1, ["UI Developer","Nellore"]);

const getPersonDetails = person.fullName.bind(person1, "UIDeveloper");
getPersonDetails();