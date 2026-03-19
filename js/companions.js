const klikId = new URLSearchParams(window.location.search).get("users");
console.log(klikId);

const endpoint = `https://dummyjson.com/users?limit=208`;

const userContainer = document.querySelector("#user");

const idContainer = [
  1, 8, 10, 16, 20, 25, 29, 32, 33, 51, 56, 58, 59, 60, 65, 77, 78, 83, 85, 99,
  101, 102, 105, 120, 121, 123, 129, 131, 135, 143, 151, 156, 158, 159, 162,
  180, 181, 188, 198, 206,
];

let ageData = true;
let genderData = true;
let cityData = true;
let nameData = true;
let udsnit;
let allData;

document
  .querySelectorAll("#sorter button")
  .forEach((knap) => knap.addEventListener("click", sorter));

document
  .querySelectorAll("#filter button")
  .forEach((knap) => knap.addEventListener("click", filter));

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      allData = udsnit = data.users;
      showId();
    });
}

function sorter(event) {
  const type = event.target.dataset.text;

  if (type == "age") {
    if (ageData) {
      udsnit.sort((a, b) => a.age - b.age);
    } else {
      udsnit.sort((a, b) => b.age - a.age);
    }
    ageData = !ageData;
  }

  if (type == "city") {
    if (cityData) {
      udsnit.sort((a, b) => a.address.city.localeCompare(b.address.city));
    } else {
      udsnit.sort((a, b) => b.address.city.localeCompare(a.address.city));
    }
    cityData = !cityData;
  }

  if (type == "name") {
    if (nameData) {
      udsnit.sort((a, b) => a.firstName.localeCompare(b.firstName));
    } else {
      udsnit.sort((a, b) => b.firstName.localeCompare(a.firstName));
    }
    nameData = !nameData;
  }
  showId();
}

function filter(e) {
  const valgt = e.target.textContent;
  if (valgt == "all") {
    udsnit = allData;
  } else {
    udsnit = allData.filter((user) => user.gender == valgt);
  }
  showId(udsnit);
}

function showId() {
  userContainer.innerHTML = "";
  udsnit
    .filter((user) => idContainer.includes(user.id))
    .forEach((user) => {
      userContainer.innerHTML += `<article class="card">
           <h2>${user.firstName}, ${user.age}</h2>
           <a href="profile.html">
  <img src="assets/img/${user.id}.webp" alt="${user.firstName}"></a>
  <div class=map>
  <svg class="city" xmlns="http://www.w3.org/2000/svg" width="9" height="11" viewBox="0 0 18 22" fill="none">
  <path d="M9 0C14.0001 1.29302e-07 17.9997 4.06755 18 9.01953C18 11.5456 16.859 13.7574 15.3145 15.7744C13.7817 17.776 11.7387 19.7238 9.80664 21.667C9.59483 21.88 9.30382 22 9 22C8.69618 22 8.40517 21.88 8.19336 21.667C6.26126 19.7238 4.21828 17.776 2.68555 15.7744C1.14103 13.7574 0 11.5456 0 9.01953C0.000252364 4.06755 3.99993 0 9 0ZM9 4C7.34315 4 6 5.34315 6 7C6 8.65685 7.34315 10 9 10C10.6569 10 12 8.65685 12 7C12 5.34315 10.6569 4 9 4Z" fill="#4F4D4D"/>
  <path d="M9 0C14.0001 1.29302e-07 17.9997 4.06755 18 9.01953C18 11.5456 16.859 13.7574 15.3145 15.7744C13.7817 17.776 11.7387 19.7238 9.80664 21.667C9.59483 21.88 9.30382 22 9 22C8.69618 22 8.40517 21.88 8.19336 21.667C6.26126 19.7238 4.21828 17.776 2.68555 15.7744C1.14103 13.7574 0 11.5456 0 9.01953C0.000252364 4.06755 3.99993 0 9 0ZM9 4C7.34315 4 6 5.34315 6 7C6 8.65685 7.34315 10 9 10C10.6569 10 12 8.65685 12 7C12 5.34315 10.6569 4 9 4Z" fill="black" fill-opacity="0.2"/>
</svg><h3>${user.address.city}</h3></div><div class=rating><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 22 21" fill="none">
  <path d="M10.9375 0L13.5194 7.9463H21.8746L15.1151 12.8574L17.697 20.8037L10.9375 15.8926L4.17797 20.8037L6.75988 12.8574L0.000349998 7.9463H8.35559L10.9375 0Z" fill="#FCBA34"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 22 21" fill="none">
  <path d="M10.9375 0L13.5194 7.9463H21.8746L15.1151 12.8574L17.697 20.8037L10.9375 15.8926L4.17797 20.8037L6.75988 12.8574L0.000349998 7.9463H8.35559L10.9375 0Z" fill="#FCBA34"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 22 21" fill="none">
  <path d="M10.9375 0L13.5194 7.9463H21.8746L15.1151 12.8574L17.697 20.8037L10.9375 15.8926L4.17797 20.8037L6.75988 12.8574L0.000349998 7.9463H8.35559L10.9375 0Z" fill="#FCBA34"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 22 21" fill="none">
  <path d="M10.9375 0L13.5194 7.9463H21.8746L15.1151 12.8574L17.697 20.8037L10.9375 15.8926L4.17797 20.8037L6.75988 12.8574L0.000349998 7.9463H8.35559L10.9375 0Z" fill="#FCBA34"/>
</svg><p>(46 reviews)</p>
</div>
<a href="profile.html">
   <button class=seemore>see more</button>
   </a>
   </article>`;
    });
}

getData();
