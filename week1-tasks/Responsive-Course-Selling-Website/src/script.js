function countAnimation(targetNumber, elementId) {
  var currentNumber = 0;
  var increment = Math.ceil(targetNumber / 250); 
  var intervalTime = 20; 

  var interval = setInterval(function() {
    currentNumber += increment;
    if (currentNumber >= targetNumber) {
      clearInterval(interval);
      currentNumber = targetNumber; 
    }
    document.getElementById(elementId).textContent = currentNumber.toLocaleString() + '+';
  }, intervalTime);

}


countAnimation(500000, 'count1'); 
countAnimation(1000, 'count2'); 

const checkbox = document.querySelector("#hide_checkbox");
let gitLogo = document.getElementById("gitlogo");
let footerLogo = document.getElementById("footerLogo");
let topLogo = document.getElementById("topLogo");


document.body.classList.remove("dark");
document.body.classList.add("light"); 

hide_checkbox.addEventListener("click", () => {
  const body = document.body;

  if (checkbox.checked) {
    body.classList.add("dark");
    body.classList.remove("light");
    gitLogo.src = "images/github-dark.webp";
    footerLogo.src = "images/logo.webp";
    topLogo.src = "images/logo.webp";
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    gitLogo.src = "images/github-light.webp";
    footerLogo.src = "images/logo_dark.webp";
    topLogo.src = "images/logo_dark.webp";
  }
});
