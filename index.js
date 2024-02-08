import card from "./card.js";

const root = document.getElementById("root");

const fetchData = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();
  users.map((user) => {
    root.innerHTML += `${card(user.name, user.email, user.address)}`;
  });
};

fetchData();
