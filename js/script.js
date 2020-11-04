var linkCatalog = document.querySelectorAll(".buy");
var linkBookmark = document.querySelectorAll(".bookmark")
var popupCatalog = document.querySelector(".modal-buy");
var close = popupCatalog.querySelector(".modal-close");
var addCart = document.querySelector(".basket-head-box");
var amountBascet = document.querySelector(".amount-basket");
var amountBookmarks = document.querySelector(".amount-bookmarks");
var myVar = 0;
var myVarBook = 0;
const come = document.querySelector(".button-address");
const loginPopup = document.querySelector(".modal-login");
const loginClose = loginPopup.querySelector(".modal-close");
const perf = document.querySelector(".perf");
const slidebtn1 = document.querySelector(".catalog-prev");
const slidebtn2 = document.querySelector(".catalog-next");
const dot1 = document.querySelector(".disabled");
const dot2 = document.querySelector(".active");
const mapLink = document.querySelector(".map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");
const servicebtn1 = document.querySelector(".delivery-btn");
const servicebtn2 = document.querySelector(".warranty-btn");
const servicebtn3 = document.querySelector(".credit-btn");
const slide1 = document.querySelector(".delivery");
const slide2 = document.querySelector(".warranty");
const slide3 = document.querySelector(".credit");

if(come) {
  come.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.add("modal-show");
  });
}
loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
});
if (slidebtn1) {
  slidebtn1.addEventListener("click", function (evt) {
    evt.preventDefault();
    perf.classList.add("perf-slide");
    dot1.classList.add("active-btn");
    dot2.classList.remove("active-btn");
  });
}
if (slidebtn2) {
  slidebtn2.addEventListener("click", function (evt) {
    evt.preventDefault();
    perf.classList.remove("perf-slide");
    dot2.classList.add("active-btn");
    dot1.classList.remove("active-btn");
  });
}
if (dot1) {
  dot1.addEventListener("click", function (evt) {
    evt.preventDefault();
    perf.classList.add("perf-slide");
    dot1.classList.add("active-btn");
    dot2.classList.remove("active-btn");
  });
}
if (dot2) {
  dot2.addEventListener("click", function (evt) {
    evt.preventDefault();
    perf.classList.remove("perf-slide");
    dot2.classList.add("active-btn");
    dot1.classList.remove("active-btn");
  });
}

if (mapLink) {
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });
}

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});



if (linkCatalog) {
  linkCatalog.forEach(function (item) {
     	item.addEventListener("click", function (evt) {
  		evt.preventDefault();
  		popupCatalog.classList.add("modal-show");
  		addCart.classList.add("header-basket-catalog");
  		myVar++;
  		amountBascet.textContent = myVar;
  	});
  	close.addEventListener("click", function (evt) {
  		evt.preventDefault();
  		popupCatalog.classList.remove("modal-show");

  	});
  	window.addEventListener("keydown", function (evt) {
  		if (evt.keyCode === 27) {
  			evt.preventDefault();
  			if (popupCatalog.classList.add("visually-hidden")) {
  				popupCatalog.classList.remove("visually-hidden");
  			}
  		}
  	});
  });
}
  linkBookmark.forEach (function (item) {
  item.addEventListener("click", function (evt) {
  evt.preventDefault();
  myVarBook++;
  amountBookmarks.textContent = myVarBook;
})});


if (servicebtn2) {
  servicebtn2.addEventListener("click", function (evt) {
    evt.preventDefault();
    slide2.classList.add("slide-show");
    slide1.classList.remove ("slide-show");
    slide3.classList.remove("slide-show");
    servicebtn1.classList.remove("nav-section-active");
    servicebtn2.classList.add("nav-section-active");
    servicebtn3.classList.remove("nav-section-active");
    });
}
if (servicebtn1) {
  servicebtn1.addEventListener("click", function (evt) {
      evt.preventDefault();
      slide2.classList.remove("slide-show");
      slide1.classList.add ("slide-show");
      slide3.classList.remove("slide-show");
      servicebtn1.classList.add("nav-section-active");
      servicebtn2.classList.remove("nav-section-active");
      servicebtn3.classList.remove("nav-section-active");
  });
}
if (servicebtn3) {
  servicebtn3.addEventListener("click", function (evt) {
      evt.preventDefault();
      slide3.classList.add("slide-show");
      slide1.classList.remove("slide-show");
      slide2.classList.remove("slide-show");
      servicebtn1.classList.remove("nav-section-active");
      servicebtn2.classList.remove("nav-section-active");
      servicebtn3.classList.add("nav-section-active");
  });
}
