const come = document.querySelector(".user-button");
const loginPopup = document.querySelector(".modal-login");
const loginClose = loginPopup.querySelector(".modal-close");
const perf = document.querySelector(".perf");
const slidebtn1 = document.querySelector(".catalog-prev");
const dot1 = document.querySelector(".disabled");
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
  dot1.classlist.add("active-btn");
});
