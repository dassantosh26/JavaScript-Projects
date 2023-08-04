const counterEls = document.querySelectorAll(".counter");

counterEls.forEach((counterEl) => {
  counterEl.innerText = "0";
  const updateCounter = () => {
    const target = +counterEl.getAttribute("data-target");
    const count = +counterEl.innerText;
    const increment = target / 200;
    if (count < target) {
      counterEl.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counterEl.innerText = target;
    }
  };
  updateCounter();
});
