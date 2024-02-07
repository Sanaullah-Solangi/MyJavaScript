let header = document.querySelector(".header");
let anchors = document.querySelectorAll(".navbar a");
let toggleBtns = document.querySelector(".toggle-btns");
let linkCover = document.querySelector(".link-cover");
let toggleMenu = document.querySelector(".toggle-menu");
let navbar = document.querySelector(".navbar");

toggleBtns.addEventListener("click", () => {
  header.classList.toggle("show");
});

anchors.forEach((val) => {
  val.addEventListener("click", () => {
    header.classList.remove("show");
  });
});

toggleMenu.addEventListener("click", () => {
  linkCover.classList.toggle("showMenu");
  navbar.classList.toggle("showMenu");
});

var students = ["sani", "sami", "paro", "farooque", "zain"];

// console.log("checing", students.length);

// var newData = students.slice(0,3)
// console.log("ab men students.slice(0,3) krdya hai",newData)
// console.log("jab slice kya uske baad jo original tha",students)

// var newData2 = students.splice(0,2, "sanaullah")
// console.log("jab splice kya or uske variable ko print kya to aya",newData2)

// console.log("jo original tha splice k baad bhi hai",students)

// var table = 2;
// for (var i = 1; i <= 10; i++) {
//   console.log(`${table} x ${i} = ${table * i}`);
// }

var greet = (a, b) => a + b;
console.log(greet(25, 25));
