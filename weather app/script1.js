const api_key = "3c70c527eemshcdb2e55974c39e6p1a8585jsnd97a0073dbd4";

let city = "delhi";
const api_url = `https://weatherapi-com.p.rapidapi.com/forecast.json?rapidapi-key=${api_key}&q=${city}`;

const inputCity = document.querySelector(".city");
const btn = document.querySelector(".btn");

async function fetchApi() {
  const response = await fetch(api_url);
  const jsonData = await response.json();
  console.log(jsonData);
}

btn.addEventListener("click", () => {
  city = inputCity.value;
  fetchApi();
});
