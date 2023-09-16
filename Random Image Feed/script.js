const unsplashURL = "https://source.unsplash.com/random/";
const container = document.querySelector(".container");
const rows = 50;

for (let i = 0; i < rows; i++) {
  const img = document.createElement("img");
  img.src = `${unsplashURL} ${getRandomSize()}`;
  container.appendChild(img);
}
function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}
function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}
