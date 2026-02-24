const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "string") 
      console.log(key, ":", obj[key]);
  }
}

let values=Object.keys(movie);
console.log(values);
values.forEach((element)=>console.log(element));

values=Object.values(movie);
console.log(values);
values.forEach((element)=>console.log(element));
values=Object.entries(movie);

