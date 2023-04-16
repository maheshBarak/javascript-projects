/* const key = document.querySelectorAll(".key");
//console.log(key);

for (var i = 0; i < key.length; i++) {
  key[i].addEventListener("click", (e) => {
    //console.log(e.target);
    const audio = document.querySelector(`audio[data-key="${}"]`);
    //  console.log(audio);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  });
} */

window.addEventListener("keydown", function (e) {
  // console.log(e);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //console.log(key);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //console.log(audio);
  if (!audio) return;
  audio.currentTime = 0; //rewind to the start
  audio.play();
  key.classList.add("playing");
});

function removeTransition(e) {
  //console.log(e);
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
