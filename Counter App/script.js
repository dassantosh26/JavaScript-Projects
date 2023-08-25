const count = document.querySelector(".count");
const addBtn = document.querySelector("#add");
const resetBtn = document.querySelector("#reset");
const subtractBtn = document.querySelector("#subtract");
addBtn.addEventListener("click", () => {
  count.innerHTML++;
  setColor();
});
resetBtn.addEventListener("click", () => {
  count.innerHTML = 0;
  setColor();
});
subtractBtn.addEventListener("click", () => {
  count.innerHTML--;
  setColor();
});
function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = "green";
  } else if (count.innerHTML < 0) {
    count.style.color = "red";
  } else {
    count.style.color = "white";
  }
}
