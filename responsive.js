function hide() {
  let icon = document.getElementById("search-icon");
  icon.style.display = "none";
}

function toggleMenu() {
  let ham = document.getElementById("ham");
  let x = document.getElementById("x");
  document.getElementById("second-child").style.display = "block";
  ham.style.display = "none";

  x.style.display = "block";
}

function toggleX() {
  let ham = document.getElementById("ham");
  let x = document.getElementById("x");
  document.getElementById("second-child").style.display = "none";
  x.style.display = "none";
  ham.style.display = "block";
}

let secondChild = document.getElementById("second-child");
let x = document.getElementById("x");
window.addEventListener("scroll", () => {
  secondChild.style.display = "none";
  x.style.display = "none";
  ham.style.display = "block";
});
