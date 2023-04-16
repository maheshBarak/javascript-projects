const imageArray = [
  "https://images.unsplash.com/photo-1677760657537-246471ca7820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
  "https://images.unsplash.com/photo-1674728358560-0ec7864a9372?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1574782170733-ad4d3c7ae09d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1675055779812-fad3edd4cf26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];
const images = document.querySelector(".images");
const sliderBox = document.querySelector(".image-sliderbox");
const carouselNav = document.querySelector(".carousel-nav");

let curPosition = 0;
const n = imageArray.length;
for (let i = 0; i < n; i++) {
  const photo = document.createElement("img");
  photo.src = imageArray[i];
  images.appendChild(photo);

  const dotDiv = document.createElement("div");
  dotDiv.classList.add("carousel-dot");
  carouselNav.appendChild(dotDiv);
  dotDiv.addEventListener("click", (event) => {
    //  console.log(event.target);
    const carouselNavChildrenArray = [...carouselNav.children];
    const index = carouselNavChildrenArray.indexOf(event.target); // ---> [...carouselNav.children] ye array bn gya h dots ka
    //  console.log(index); index print karega dots kaa

    showImg(index);
  });

  //  console.log(index);   ye for loop me h tabhi console har iteration k baad array print hoga
}
//console.log(carouselNav.children);

function showImg(index) {
  //  console.log(curPosition);
  const preDot = carouselNav.children[curPosition];
  preDot.classList.remove("active");

  curPosition = index;

  const curDot = carouselNav.children[curPosition];
  curDot.classList.add("active");
  // console.log(curPosition);
  /*   curPosition = position;
  const curDot = carouselNav.children[curPosition];
  curDot.classList.add("active");
 */
  let translateImageDistance = -curPosition * 100;
  images.style.transform = `translateX(${translateImageDistance}%)`;
}
