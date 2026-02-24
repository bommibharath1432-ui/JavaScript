const employees = [
  { id: 1, name: "abc", desig: "hr" },
  { id: 2, name: "ram", desig: "clerk" },
  { id: 3, name: "sita", desig: "hr" },
   { id: 4, name: "Mohan", desig: "clerk" },
];

const groupedNamesByDesig = employees.reduce((acc, emp) => {
  if (!acc[emp.desig]) {
    acc[emp.desig] = [];
  }
  acc[emp.desig].push(emp.name);
  return acc;
}, {});

console.log(groupedNamesByDesig);