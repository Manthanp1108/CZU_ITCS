const previous_button = document.getElementById("previousSlide");
const next_button = document.getElementById("nextSlide");
const chv = document.querySelector(".presentation .chapter:first-child")
var count_init = 0;

next_button.addEventListener("click", (e) => {
  ++count_init;
  chv.style.transform = "translateX(" + (-100 * count_init) + "vw)";
})

previous_button.addEventListener("click", (e) => {
  if (count_init != 0) --count_init;
  chv.style.transform = "translateX(" + (-100 * count_init) + "vw)";
})