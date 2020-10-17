let buttonUp = document.querySelector(".bttn-up");
buttonUp.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

let buttonMoon = document.querySelector(".bttn-moon");
buttonMoon.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark");
});

// Saving theme in browser cache
localStorage.setItem("bodyClass", document.body.classList);
if (localStorage.getItem("bodyClass") === "dark") {
  document.body.classList.toggle(localStorage.getItem("bodyClass"));
}

// Hide button if user in the top of the page
window.onscroll = function () {
  if (window.scrollY >= window.screen.height) {
    // console.log(window.screen.height);
    buttonUp.style.display = "block";
  } else {
    buttonUp.style.display = "none";
  }
};
