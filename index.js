function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector(".enter-city");
    let h1 = document.querySelector("#city-name");
    h1.innerHTML = searchInput.value;
}
let form = document.querySelector("#search-form");
  form.addEventListener("submit", search);
  
  let now = new Date();
  let time = document.querySelector("#date");
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    minutes = `0${hours}`;
  }
  time.innerHTML = `${day} ${hours}:${minutes},`;