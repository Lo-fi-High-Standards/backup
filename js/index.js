const landingContainer = document.querySelector("#users");
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

if (landingContainer) {
  const landingId = new URLSearchParams(window.location.search).get("id");

  const endpointLanding = `https://dummyjson.com/users?limit=208`;

  const idContainer = [1, 151, 10, 65];

  let udsnit;
  let allData;

  function getData() {
    fetch(endpointLanding)
      .then((res) => res.json())
      .then((data) => {
        allData = udsnit = data.users;
        showId();
      });
  }

  function showId() {
    landingContainer.innerHTML = "";
    udsnit
      .filter((user) => idContainer.includes(user.id))
      .forEach((user) => {
        landingContainer.innerHTML += `<article class="card">
           <h2>${user.firstName}, ${user.age}</h2>
           <a href="profile.html?id=${user.id}">
  <img src="assets/img/${user.id}.webp" loading="lazy" alt="${user.firstName}"></a>
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
</svg><p class=rate>(46 reviews)</p>
</div>
<a href="profile.html?id=${user.id}">
   <button class=seemore>see more</button>
   </a>
   </article>`;
      });
  }

  getData();
}
