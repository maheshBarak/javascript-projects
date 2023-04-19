const api_key = "3c70c527eemshcdb2e55974c39e6p1a8585jsnd97a0073dbd40";

let city = "new-delhi";
const api_url = `https://weatherapi-com.p.rapidapi.com/forecast.json?rapidapi-key=${api_key}&q=${city}`;

const all = document.querySelector(".all");

const inputCity = document.querySelector(".inputCity");
const btn = document.querySelector(".btn");

const errorFOund = document.querySelector(".errorFOund");
const invalidCity = document.querySelector(".invalidCity");

async function fetchApi(city) {
  const response = await fetch(
    `https://weatherapi-com.p.rapidapi.com/forecast.json?rapidapi-key=${api_key}&q=${city}`
  );

  const jsonData = await response.json();
  // console.log(jsonData);
  //  console.log(typeof response.status);

  if (response.status === 400) {
    //  console.log(jsonData.error.message);
    //  console.log(all);
    errorFOund.style.display = "block";
    all.style.display = "none";
    invalidCity.innerHTML = jsonData.error.message;
  } else {
    errorFOund.style.display = "none";
    all.style.display = "block";

    document.querySelector(".temp").innerHTML =
      Math.round(jsonData.current.temp_c) + "°C";
    document.querySelector(".city").innerHTML = jsonData.location.name;
    document.querySelector(".text").innerHTML = jsonData.current.condition.text;
    document.querySelector(".icon").src = jsonData.current.condition.icon;
    document.querySelector(".date").innerHTML = jsonData.location.localtime;
    document.querySelector(".humidity").innerHTML =
      jsonData.current.humidity + "%";
    document.querySelector(".cloud").innerHTML = jsonData.current.cloud;
    document.querySelector(".uv").innerHTML = jsonData.current.uv;
    document.querySelector(".wind").innerHTML =
      jsonData.current.wind_kph + "km/h";
  }
}

btn.addEventListener("click", () => {
  //  console.log(inputCity.value);
  fetchApi(inputCity.value);
});
