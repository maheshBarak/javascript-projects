const sec = document.querySelector(".secHand");
const min = document.querySelector(".minHand");
const hr = document.querySelector(".hrHand");

function setTime() {
  const time = new Date();
  // console.log(time.getMinutes());
  //console.log(time.getSeconds());
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secDeg = (seconds / 60) * 360 + 270;
  sec.style.transform = `rotate(${secDeg}deg)`;

  const minDeg = (minutes / 60) * 360 + 270;
  min.style.transform = `rotate(${minDeg}deg)`;

  const hrDeg = (hours / 12) * 360 + 270;
  hr.style.transform = `rotate(${hrDeg}deg)`;
}
setInterval(setTime, 1000);
