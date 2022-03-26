/* eslint-disable no-plusplus */
const navButton = document.getElementById("navButton");
const navMenu = document.getElementById("navMenu");
const themeButton = document.getElementById("themeButton");
const themeButtonDesktop = document.getElementById("themeButtonDesktop");
const header = document.getElementById("header");
const headerAbove = document.getElementById("headerAbove");
const headerDesktop = document.getElementById("headerDesktop");
const footer = document.getElementById("footer");
const logoBarOne = document.getElementById("logoBarOne");
const logoBarTwo = document.getElementById("logoBarTwo");
const logoBarThree = document.getElementById("logoBarThree");
const mainPage = document.getElementById("mainPage");
const desktopNavButtons = [
  document.getElementById("dekstopNavButtonOne"),
  document.getElementById("dekstopNavButtonTwo"),
  document.getElementById("dekstopNavButtonThree"),
  document.getElementById("dekstopNavButtonFour"),
];
const cards = document.getElementsByClassName("activityCard");
const cardRows = document.getElementsByClassName("cardRow");
const cardText = document.getElementsByClassName("cardText");
const serviceDesc = document.getElementsByClassName("serviceDesc");
const inputForm = document.getElementsByClassName("inputForm");
// TYMOTHEE
const background = [
  document.getElementsByClassName("contTwo-backStyle"),
  document.getElementsByClassName("contTree-backStyle"),
  document.getElementsByClassName("contFoor-backStyle"),
];
const backgroundTitle = [
  document.getElementsByClassName("contTwo-title"),
  document.getElementsByClassName("contTree-title"),
  document.getElementsByClassName("contFoor-title"),
];
const homePageMobileText = document.querySelectorAll(".contFoorRow p");
// DARK THEME
function switchDarkTheme() {
  themeButton.classList.toggle("sliderSwitch");
  themeButton.classList.toggle("darkThemeButton");
  themeButtonDesktop.classList.toggle("sliderSwitch");
  themeButtonDesktop.classList.toggle("darkThemeButton");
  headerAbove.classList.toggle("dark");
  headerDesktop.classList.toggle("dark");
  navMenu.classList.toggle("darkNavMenu");
  footer.classList.toggle("dark");
  mainPage.classList.toggle("dark");
  desktopNavButtons.forEach((item) => {
    item.classList.toggle("desktopNavDark");
  });
  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.toggle("dark");
  }
  for (let i = 0; i < cardRows.length; i++) {
    cardRows[i].classList.toggle("darkText");
  }
  for (let i = 0; i < cardText.length; i++) {
    cardText[i].classList.toggle("darkText");
  }
  for (let i = 0; i < serviceDesc.length; i++) {
    serviceDesc[i].classList.toggle("dark");
  }
  for (let i = 0; i < inputForm.length; i++) {
    inputForm[i].classList.toggle("darkForm");
  }
  for (let i = 0; i < homePageMobileText.length; i++) {
    homePageMobileText[i].classList.toggle("darkText");
  }
  background.forEach((item) => {
    for (let i = 0; i < item.length; i++) {
      item[i].classList.toggle("dark");
    }
  });
  backgroundTitle.forEach((item) => {
    for (let i = 0; i < item.length; i++) {
      item[i].classList.toggle("dark");
    }
  });
}
themeButton.addEventListener("click", () => {
  if (!navMenu.classList.contains("darkNavMenu")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
  switchDarkTheme();
});
themeButtonDesktop.addEventListener("click", () => {
  if (!navMenu.classList.contains("darkNavMenu")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
  switchDarkTheme();
});
if (localStorage.getItem("darkMode") === "enabled") {
  switchDarkTheme();
}
// MENU BUTTON LOGIC
let isMenuOpen = false;
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
    isMenuOpen = false;
  } else if (isMenuOpen === true && fromScroll === true) {
    navButton.classList.remove("rotate90");
    navMenu.classList.remove("deployMenu");
    logoBarOne.classList.remove("cross");
    logoBarTwo.classList.remove("crossInverted");
    logoBarThree.classList.remove("hide");
    isMenuOpen = false;
  }
  navButton.addEventListener("click", () => {
    menuInteract(false);
  });
}
// // MAKES HEADER SCROLL WHEN ON MOBILE
let { innerWidth } = window;
if (this.window.innerWidth < 950) {
  let lastScrollTop = 0;
  document.addEventListener(
    "scroll",
    () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop && innerWidth < 950) {
        header.style.top = "-65px";
        menuInteract(true);
      } else {
        header.style.top = "0px";
      }
      lastScrollTop = st <= 0 ? 0 : st;
    },
    false
  );
}
window.addEventListener("resize", () => {
  innerWidth = this.window.innerWidth;
  if (innerWidth < 950) {
    let lastScrollTop = 0;
    document.addEventListener(
      "scroll",
      () => {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop && innerWidth < 950) {
          header.style.top = "-65px";
          menuInteract(true);
        } else {
          header.style.top = "0px";
        }
        lastScrollTop = st <= 0 ? 0 : st;
      },
      false
    );
  }
});
// CONTACT PAGE
// Button Submit
const message = "Thank you for your email, the team will answer you quickly";
document.addEventListener("submit", (event) => {
  event.preventDefault();
  alert(message);
});
