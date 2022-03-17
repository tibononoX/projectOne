const navButton = document.getElementById("navButton");
const navMenu = document.getElementById("navMenu");
const themeButton = document.getElementById("themeButton");
const header = document.getElementById("header");
const headerAbove = document.getElementById("headerAbove");
const footer = document.getElementById("footer");
const logoBarOne = document.getElementById("logoBarOne");
const logoBarTwo = document.getElementById("logoBarTwo");
const logoBarThree = document.getElementById("logoBarThree")

let innerWidth = window.innerWidth;

// DARK THEME
themeButton.addEventListener("click", (event) => {
	themeButton.classList.toggle("sliderSwitch");
	themeButton.classList.toggle("darkThemeButton");
	headerAbove.classList.toggle("dark");
	navMenu.classList.toggle("darkNavMenu");
	footer.classList.toggle("dark");
});

// MAKES HEADER SCROLL WHEN ON MOBILE
window.addEventListener('resize', function(event){
  innerWidth = this.window.innerWidth;
  if (innerWidth < 900) {
    let lastScrollTop = 0;
    document.addEventListener("scroll", function(){
       let st = window.pageYOffset || document.documentElement.scrollTop;
       if (st > lastScrollTop && innerWidth < 900){
        header.style.top = "-65px";
        menuInteract(true);
       } else {
        header.style.top = "0px";
       }
       lastScrollTop = st <= 0 ? 0 : st;
    }, false);
  }
});

// MENU BUTTON LOGIC
let isMenuOpen = false;
navButton.addEventListener("click", (event) => {
	menuInteract(false);
});
function menuInteract(fromScroll) {
	if (isMenuOpen === false && fromScroll === false) {
		navButton.classList.add("rotate90");
		navMenu.classList.add("deployMenu");

    logoBarOne.classList.add("cross");
    logoBarTwo.classList.add("crossInverted");
    logoBarThree.classList.add("hide");

		isMenuOpen = true;
	} else if (isMenuOpen === true && fromScroll === false) {
		navButton.classList.remove("rotate90");
		navMenu.classList.remove("deployMenu");

    logoBarOne.classList.remove("cross");
    logoBarTwo.classList.remove("crossInverted");
    logoBarThree.classList.remove("hide");

    logoBarOne.classList
		isMenuOpen = false;
	} else if (isMenuOpen === true && fromScroll === true) {
		navButton.classList.remove("rotate90");
		navMenu.classList.remove("deployMenu");

    logoBarOne.classList.remove("cross");
    logoBarTwo.classList.remove("crossInverted");
    logoBarThree.classList.remove("hide");

    logoBarOne.classList
		isMenuOpen = false;
	}
}
