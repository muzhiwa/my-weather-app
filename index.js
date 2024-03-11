function searchCity(event) {
    event.preventDefault();
    let searchInput = document.querySelector(".enter-city");
    let h1 = document.querySelector("#city-name");
    h1.innerHTML = searchInput.value;
    let key = "71260f74c15bct2a0o7b939feaa3813b";
    let city = searchInput.value;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
}

let form = document.querySelector("#search-form");
  form.addEventListener("submit", searchCity);
  
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `${day} ${hours}:${minutes},`;
}
function displayTemperature(response) {
    console.log(response.data); 
    let temperature = Math.round(response.data.temperature.current);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = `${temperature}`;
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.condition.description;
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    let windSpeedElement = document.querySelector("#wind-speed");
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    let timeElement = document.querySelector("#date");
    let date = new Date(response.data.time * 1000);
    timeElement.innerHTML = formatDate(date);
    let iconElement = document.querySelector("#icon");
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
    let cityElement = document.querySelector("#city-name");
    cityElement.innerHTML = response.data.city;
}
  document.querySelector(".enter-city").value = "Kabul";
searchCity(new Event("submit"));