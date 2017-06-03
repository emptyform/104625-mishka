var links = document.querySelectorAll(".products-feature__btn, .item__btn");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");

links.forEach(function(element) {
  element.addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.add("modal--show");
    overlay.classList.add("overlay--show");
  });
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (modal.classList.contains("modal--show")) {
      modal.classList.remove("modal--show");
      overlay.classList.remove("overlay--show");
    }
  }
});
