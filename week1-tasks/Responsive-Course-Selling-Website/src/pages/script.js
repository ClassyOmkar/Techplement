const checkbox = document.querySelector("#hide_checkbox");
let gitLogo = document.getElementById("gitlogo");
let footerLogo = document.getElementById("footerLogo");
let topLogo = document.getElementById("topLogo");

document.body.classList.remove("dark");
document.body.classList.add("light"); 


gitLogo.src = "images/github-light.webp";
footerLogo.src = "images/logo.webp";
topLogo.src = "images/logo.webp";
hide_checkbox.addEventListener("click", () => {
  const body = document.body;

  if (checkbox.checked) {
    body.classList.add("dark");
    body.classList.remove("light");
    footerLogo.src = "../../images/logo.webp";
    topLogo.src = "../../images/logo.webp";
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    footerLogo.src = "../../images/logo_dark.webp";
    topLogo.src = "../../images/logo_dark.webp";
  }
});
