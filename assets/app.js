//!=== getting elements ===

let header = document.querySelector(".header");
let anchors = document.querySelectorAll(".navbar > a");
let toggleBtns = document.querySelector(".toggle-btns");
let linkCover = document.querySelector(".link-cover");
let toggleMenu = document.querySelector(".toggle-menu");
let navbar = document.querySelector(".navbar");
let subMenuBtns = document.querySelectorAll(".subMenu-toggle-btns");
let subMenu;
let subMenuWrapper = document.querySelector(".subMenu-cover");
let subMenuAnchors = document.querySelectorAll(".subMenu-item > a");

//!=== header functionality ===

toggleBtns.addEventListener("click", () => {
  header.classList.toggle("show");
});

anchors.forEach((val) => {
  val.addEventListener("click", () => {
    header.classList.remove("show");
  });
});

//!=== removing navbar and subMenu with on click

subMenuAnchors.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    header.classList.remove("show");
    let subMenuAnchorParent = anchor.parentElement.parentElement;
    subMenuAnchorParent.classList.remove("showSubMenu");
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
