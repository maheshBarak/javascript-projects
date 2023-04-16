let result = document.getElementById("inputtext");

let calculate = (number) => {
  /*  console.log(typeof number); */
  result.value += number;
  /*   console.log(result.value); */
};

let Result = () => {
  try {
    result.value = eval(result.value);
    /* console.log(result.value); */
  } catch (err) {
    alert("invalid entry");
  }
};

function clr() {
  result.value = "";
}

function del() {
  result.value = result.value.slice(0, -1);
}
