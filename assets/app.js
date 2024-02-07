//!=== getting elements ===

let header = document.querySelector(".header");
let anchors = document.querySelectorAll(".navbar a");
let toggleBtns = document.querySelector(".toggle-btns");
let linkCover = document.querySelector(".link-cover");
let toggleMenu = document.querySelector(".toggle-menu");
let navbar = document.querySelector(".navbar");
let subMenuBtns = document.querySelectorAll(".subMenu-toggle-btns");
let subMenuWrapper = document.querySelector(".subMenu-cover");

//!=== header functionality ===

toggleBtns.addEventListener("click", () => {
  header.classList.toggle("show");
});

anchors.forEach((val) => {
  val.addEventListener("click", () => {
    header.classList.remove("show");
  });
});

//!=== subMenu & mob-navbar functionality ===

toggleMenu.addEventListener("click", () => {
  linkCover.classList.toggle("showMenu");
  navbar.classList.toggle("showMenu");
});

subMenuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let subMenuCover = btn.parentElement;
    subMenuCover.classList.toggle("showSubMenu");
  });
});
