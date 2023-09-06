const generateBtn = document.querySelector(".reset-btn");
const hexCode = document.querySelector(".color-code");

const randomHexColor = () => {
  const randomColor = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = `#${randomColor}`;
  hexCode.innerText = `#${randomColor}`;
};
generateBtn.addEventListener("click", randomHexColor);
// randomHexColor();//on page reload
