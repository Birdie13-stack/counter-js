let count = 0;

let countValue = document.getElementById("value");

countValue.innerHTML = count;

const btns = document.querySelectorAll(".btn");

let decrease = document.getElementById("decrease");

decrease.addEventListener("click", function () {
  count--;
  countValue.innerHTML = count;
  updateColor();
});

let reset = document.getElementById("reset");

reset.addEventListener("click", function () {
  count = 0;
  countValue.innerHTML = count;
  updateColor();
});

let increase = document.getElementById("increase");

increase.addEventListener("click", function () {
  count++;
  countValue.innerHTML = count;
  updateColor();
});

function updateColor() {
  if (count < 0) {
    countValue.style.color = "red";
  } else if (count > 0) {
    countValue.style.color = "green";
  } else if (count === 0) {
    countValue.style.color = "black";
  }
}
