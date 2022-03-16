const navButton = document.getElementById("navButton");
const navMenu =  document.getElementById("navMenu");
const themeButton = document.getElementById("themeButton");
const header  = document.getElementById("header");
const footer = document.getElementById("footer");

navButton.addEventListener('click', (event) => {
  navButton.classList.toggle('rotate90');
  navMenu.classList.toggle('deployMenu');
})

themeButton.addEventListener('click', (event) => {
  themeButton.classList.toggle('sliderSwitch');
  themeButton.classList.toggle('darkThemeButton');
  header.classList.toggle('dark');
  navMenu.classList.toggle('darkNavMenu');
  footer.classList.toggle('dark');
})