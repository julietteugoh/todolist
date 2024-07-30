// function myFunction() {
//   var x = document.getElementById("myTop");
//   if (x.className === "topnav") {
//     x.className += "responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".navItem").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
