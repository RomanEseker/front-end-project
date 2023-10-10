const bars = document.querySelector("#bars");
const navmenu = document.querySelector("#navmenu");

document.addEventListener("click", (e) => {
  const targetElement = e.target.classList.value;
  targetElement === "fa-solid fa-bars"
    ? navmenu.classList.toggle("visible")
    : navmenu.classList.remove("visible");
});

let moon_icon = document.getElementById("moon_icon");

moon_icon.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    moon_icon.src = "../images/sunny-outline.png";
  } else {
    moon_icon.src = "../images/moon-outline.svg";
  }
};
