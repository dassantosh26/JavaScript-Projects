const countDown = document.querySelector(".countdown");
const countTo = "1 Jan 2024";
const count = setInterval(() => {
  const endDate = new Date(countTo);
  //   console.log(endDate);
  const currentDate = new Date();
  //   console.log(currentDate);
  const totalSeconds = (endDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  countDown.textContent = `${format(days)}Days &&  ${format(
    hours
  )}Hrs : ${format(minutes)}Min : ${format(seconds)}s`;
  if (totalSeconds < 0) {
    clearInterval(count);
    countDown.textContent = `Happy New Year`;
  }
}, 1000);

function format(t) {
  return t < 10 ? `0${t}` : t;
}
