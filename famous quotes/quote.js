const url = "https://dummyjson.com/quotes";

async function quoteApi() {
  const response = await fetch(url);
  const jsonData = await response.json();

  quoteGenerator(jsonData);
}
/* const quoteBox = document.querySelector(".quote-Box");
const quot = document.querySelector(".quot");
const namee = document.querySelector(".name"); */
const quotes = document.querySelector(".quotes");

function quoteGenerator(jsonData) {
  const quoteArray = jsonData.quotes;
  const n = quoteArray.length;

  for (let i = 0; i < n; i++) {
    let { quote, author } = quoteArray[i];
    const quoteBox = document.createElement("section");
    const quot = document.createElement("p");
    quot.innerHTML = `" ${quote} "`;
    const namee = document.createElement("h4");
    namee.innerHTML = "- " + author;
    quot.classList.add("quot");
    namee.classList.add("name");
    quoteBox.classList.add("quote-Box");
    quoteBox.appendChild(quot);
    quoteBox.appendChild(namee);
    quotes.appendChild(quoteBox);
  }
}
quoteApi();
