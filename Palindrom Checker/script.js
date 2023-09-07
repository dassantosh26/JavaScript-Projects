const inputText = document.querySelector(".input-text");
const checkBtn = document.querySelector(".btn");
const result = document.querySelector(".result");
checkBtn.addEventListener("click", checkPalindrome);

function checkPalindrome() {
  const word = inputText.value;
  const len = word.length;
  let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
  let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
  //   let flip = end.split("").reverse().join("");
  let flip = [...end].reverse().join("");
  if (start == flip) {
    result.innerHTML = `${word} is a Palindrom`;
  } else {
    result.innerHTML = `${word} is not a Palindrom`;
  }
}
