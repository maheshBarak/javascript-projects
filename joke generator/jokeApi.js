const URL = "https://icanhazdadjoke.com/slack";

const newJoke = document.querySelector(".newJoke");
const btn = document.querySelector(".btn");

async function JokeGeneratorAPI() {
  const response = await fetch(URL);
  // console.log(response);
  const jsonData = await response.json();
  // console.log(jsonData);
  JokeGenerator(jsonData);
}
function JokeGenerator(jsonData) {
  const { attachments, response_type, username } = jsonData;
  const jokeArray = attachments[0];
  const { text } = jokeArray;
  // console.log(text);
  newJoke.innerHTML = text;
}

btn.addEventListener("click", () => {
  JokeGeneratorAPI();
});
JokeGeneratorAPI();
