const endpoint = `https://dummyjson.com/users?limit=208`;

const userContainer = document.querySelector("#user");

const idContainer = [
  1, 8, 10, 16, 20, 25, 29, 32, 33, 51, 56, 58, 59, 60, 65, 77, 78, 83, 85, 99,
  101, 102, 105, 120, 121, 123, 129, 131, 135, 143, 151, 156, 158, 159, 162,
  180, 181, 188, 198, 206,
];

document
  .querySelectorAll("#filter button")
  .forEach((knap) => knap.addEventListener("click", filter));

function getData() {
  let markup = "";
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.users);
      data.users
        .filter((user) => idContainer.includes(user.id)) //*includes = check if value exists//*
        .forEach((user) => {
          userContainer.innerHTML += `<article class="card">
           <h3>${user.firstName}, ${user.age}</h3>
  <img src="assets/img/${user.id}.webp" alt="${user.firstName}">
  <h2>${user.address.city}</h2>
   </article>`;
        });
    });
  idContainer.innerHTML = markup;
}

getData();
