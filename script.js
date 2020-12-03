/* *****variables******/
const bodyEl = document.querySelector("body");
const mainNav = document.querySelector(".main-nav");
const path1 = document.getElementById("path1");
const circle1 = document.getElementById("circle1");
const path2 = document.getElementById("path2");
const mobileNavToggle = document.getElementById("mobile-nav-toggle");
const mobileNav = document.querySelector(".nav-links");
const mainNavSocialMedia = document.getElementById("main-nav-social-media");

/* *****functions******/
// show mobile navigation
function openMobileNav() {
  // change toggle icon to close & color to white
  mobileNavToggle.className = "fas fa-times mobile-nav-toggle";
  mobileNavToggle.style.color = "white";
  // change nav background color & change logo color to white
  mainNav.classList.add("main-nav-expanded");
  path1.style.fill = "white";
  circle1.style.fill = "white";
  path2.style.fill = "#3a3f58";
  // show mobile nav links & social media links & disable scroll on body
  mobileNav.classList.remove("hidden");
  mainNavSocialMedia.classList.remove("hidden");
  bodyEl.classList.add("scroll");
}

// hide mobile navigation
function closeMobileNav() {
  // change toggle icon to close & color to white
  mobileNavToggle.className = "fas fa-bars mobile-nav-toggle";
  mobileNavToggle.style.color = "hsl(229, 31%, 21%)";
  // change nav background color & change logo color to white
  mainNav.classList.remove("main-nav-expanded");
  path1.style.fill = "#242A45";
  circle1.style.fill = "#5267DF";
  path2.style.fill = "#fff";
  // hide mobile nav links & social media links & enable scroll on body
  mobileNav.classList.add("hidden");
  mainNavSocialMedia.classList.add("hidden");
  bodyEl.classList.remove("scroll");
}

/* *****event listeners******/
// toggle mobile navigation
mobileNavToggle.addEventListener("click", () => {
  if (mobileNavToggle.className === "fas fa-bars mobile-nav-toggle") {
    openMobileNav();
  } else {
    closeMobileNav();
  }
});

// navigate to clicked link
mobileNav.addEventListener("click", (e) => {
  let navLink = e.target;

  if (navLink.className === "nav-link-anchor") {
    closeMobileNav();
  }
});

mainNavSocialMedia.addEventListener("click", (e) => {
  let navLink = e.target;

  if (navLink.classList.contains("main-nav-icon")) {
    closeMobileNav();
  }
});
