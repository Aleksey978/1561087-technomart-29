const come = document.querySelector(".user-button");
const loginPopup = document.querySelector(".modal-login");
const loginClose = loginPopup.querySelector(".modal-close");
const perf = document.querySelector(".perf");
const slidebtn1 = document.querySelector(".catalog-prev");
const slidebtn2 = document.querySelector(".catalog-next");
const dot1 = document.querySelector(".disabled");
const dot2 = document.querySelector(".active");

come.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");
});
loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
});
slidebtn1.addEventListener("click", function (evt) {
  evt.preventDefault();
  perf.classList.add("perf-slide");
  dot1.classList.add("active-btn");
  dot2.classList.remove("active-btn");
});
slidebtn2.addEventListener("click", function (evt) {
  evt.preventDefault();
  perf.classList.remove("perf-slide");
  dot2.classList.add("active-btn");
  dot1.classList.remove("active-btn");
});
dot1.addEventListener("click", function (evt) {
  evt.preventDefault();
  perf.classList.add("perf-slide");
  dot1.classList.add("active-btn");
  dot2.classList.remove("active-btn");
});
dot2.addEventListener("click", function (evt) {
  evt.preventDefault();
  perf.classList.remove("perf-slide");
  dot2.classList.add("active-btn");
  dot1.classList.remove("active-btn");
});
