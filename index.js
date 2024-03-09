function search(event) {
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
  time.innerHTML = `${day} ${hours}:${minutes},`;
  function displayTemperature(response) {
    let temperature = Math.round(response.data.temperature.current);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = `☀️ ${temperature}°C`;
  }