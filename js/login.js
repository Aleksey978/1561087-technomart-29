const come = document.querySelector(".user-button");
const loginPopup = document.querySelector(".modal-login");
const loginClose = loginPopup.querySelector(".modal-close");
come.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");
});
loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
});
