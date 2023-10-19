const bars = document.querySelector("#bars");
const navmenu = document.querySelector("#navmenu");

document.addEventListener("click", (e) => {
  const targetElement = e.target.classList.value;
  targetElement === "fa-solid fa-bars"
    ? navmenu.classList.toggle("visible")
    : navmenu.classList.remove("visible");
});

let moon_icon = document.getElementById("moon_icon");
let cib_icon = document.getElementById("cib_greensock-icon");
let github_icon = document.getElementById("github-icon");
let github_footer_icon = document.getElementById("github-footer-icon");
let twitter_footer_icon = document.getElementById("twitter-footer-icon");
let linkedin_footer_icon = document.getElementById("linkedin-footer-icon");
let logo_footer_icon = document.getElementById("logo-footer-icon");
let akar_clip_icon = document.getElementsByClassName("akar-clip-icon");
let akar_github_icon = document.getElementsByClassName("akar-github-icon");

moon_icon.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    moon_icon.src = "../images/sunny-outline.png";
    cib_icon.src = "../images/cib_greensock-stack-dark.svg";
    github_icon.src = "../images/github-statck-dark.svg";
    github_footer_icon.src = "../images/github-top.svg";
    twitter_footer_icon.src = "../images/twitter-top.svg";
    linkedin_footer_icon.src = "../images/linkedin-top.svg";
    logo_footer_icon.src = "../images/logo-footer-dark.svg";

    for (key in akar_clip_icon) {
      akar_clip_icon[key].src = "../images/akar-icons_link-chain-dark.svg";
      akar_github_icon[key].src = "../images/akar-icons_github-fill-dark.svg";
    }

    for (key in akar_clip_icon) {
      akar_clip_icon[key].src = "../images/akar-icons_link-chain-dark.svg";
      akar_github_icon[key].src = "../images/akar-icons_github-fill-dark.svg";
    }
  } else {
    moon_icon.src = "../images/moon-outline.svg";
    cib_icon.src = "../images/cib_greensock-stack-light.svg";
    github_icon.src = "../images/github-statck-light.svg";
    github_footer_icon.src = "../images/github-footer.svg";
    twitter_footer_icon.src = "../images/twitter-footer.svg";
    linkedin_footer_icon.src = "../images/linkedin-footer.svg";
    logo_footer_icon.src = "../images/logo-footer-light.svg";

    for (key in akar_clip_icon) {
      akar_clip_icon[key].src = "../images/akar-icons_link-chain-light.svg";
      akar_github_icon[key].src = "../images/akar-icons_github-fill-light.svg";
    }
  }
};
