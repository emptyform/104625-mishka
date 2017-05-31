var mainNav = document.querySelector(".main-navigation");
var toggleNav = document.querySelector(".main-navigation__toggle");

mainNav.classList.remove("main-navigation--nojs");

toggleNav.addEventListener("click", function() {
  if (mainNav.classList.contains("main-navigation--close")) {
    mainNav.classList.remove("main-navigation--close");
    mainNav.classList.add("main-navigation--opened");
  } else {
    mainNav.classList.add("main-navigation--close");
    mainNav.classList.remove("main-navigation--opened");
  }
})
