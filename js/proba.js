const servicebtn1 = document.querySelector(".delivery-btn");
const servicebtn2 = document.querySelector(".Warranty-btn");
const servicebtn3 = document.querySelector(".credit-btn");
const slide1 = document.querySelector(".delivery");
const slide2 = document.querySelector(".Warranty");
const slide3 = document.querySelector(".credit");

servicebtn2.addEventListener("click", function (evt) {
  evt.preventDefault();
  slide2.classList.add("slide-show");
  slide1.classList.remove ("slide-show");
  slide3.classList.remove("slide-show");
  servicebtn1.classList.remove("nav-section-active");
  servicebtn2.classList.add("nav-section-active");
  servicebtn3.classList.remove("nav-section-active");
  });
servicebtn1.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide2.classList.remove("slide-show");
    slide1.classList.add ("slide-show");
    slide3.classList.remove("slide-show");
    servicebtn1.classList.add("nav-section-active");
    servicebtn2.classList.remove("nav-section-active");
    servicebtn3.classList.remove("nav-section-active");
});
servicebtn3.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide3.classList.add("slide-show");
    slide1.classList.remove("slide-show");
    slide2.classList.remove("slide-show");
    servicebtn1.classList.remove("nav-section-active");
    servicebtn2.classList.remove("nav-section-active");
    servicebtn3.classList.add("nav-section-active");
});
