const inputBox = document.querySelector(".input");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", vowelCounter);

function vowelCounter() {
  let wordVal = inputBox.value.toLowerCase();
  let vowelCount = 0;
  for (let i = 0; i < wordVal.length; i++) {
    let resultVal = wordVal[i];
    if (resultVal.match(/[a,e,i,o,u]/)) {
      vowelCount++;
    }
  }
  result.innerHTML = `The Word ${inputBox.value.toUpperCase()} contains ${vowelCount} Vowels.`;
}
