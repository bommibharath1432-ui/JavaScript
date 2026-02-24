//api calling
//https://jsonplaceholder.typicode.com/
const URL = "https://jsonplaceholder.typicode.com/users";

// fetch(URL)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const getData = async () => {
  const data = await fetch(URL).then((response) => response.json());
  data.map((user) => {
    console.log(
      user.id + " - " + user.name + " - " + user.username + " - " + user.email
    );
  });
};

getData();
