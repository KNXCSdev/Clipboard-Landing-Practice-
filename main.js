const btnOpen = document.querySelector(".btn-left");
const btnClose = document.querySelector(".close-modal");
const blue = document.querySelector(".overlay");
const block = document.querySelector("#block");
const pageHeight = document.documentElement.scrollHeight;
const targetScrollPosition1 = pageHeight * 0.4;
const targetScrollPosition2 = pageHeight * 0;
btnOpen.addEventListener("click", function () {
  block.classList.toggle("hidden");
  blue.classList.toggle("hidden");
  window.scrollTo({
    top: targetScrollPosition1,
    behavior: "smooth",
  });
});
btnClose.addEventListener("click", function () {
  block.classList.toggle("hidden");
  blue.classList.toggle("hidden");
  window.scrollTo({
    top: targetScrollPosition2,
    behavior: "smooth",
  });
});
