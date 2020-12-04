/* *****variables******/
// mobile navigation
const bodyEl = document.querySelector("body");
const mainNav = document.querySelector(".main-nav");
const path1 = document.getElementById("path1");
const circle1 = document.getElementById("circle1");
const path2 = document.getElementById("path2");
const mobileNavToggle = document.getElementById("mobile-nav-toggle");
const mobileNav = document.querySelector(".nav-links");
const mainNavSocialMedia = document.getElementById("main-nav-social-media");

// features
const tabsContainer = document.querySelector(".tab-headings");
const featureImg = document.querySelector(".feature-img");
const featureHeading = document.querySelector(".feature-heading");
const featureInfo = document.querySelector(".feature-info");
const tabTitles = Array.from(document.querySelectorAll(".tab-title"));
const tabTitlesAfter = Array.from(
  document.querySelectorAll(".tab-title-after")
);

// faqs
const questions = document.querySelector(".questions");

/* *****onload***** */
displayFeatureDetails("tab1");

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

// display feature details
function displayFeatureDetails(id) {
  // reset tab title color & hide line underneath tab title
  tabTitles.forEach((tabTitle) => {
    tabTitle.style.color = "hsl(229, 8%, 60%)";
  });
  tabTitlesAfter.forEach((tabTitleAfter) => {
    tabTitleAfter.style.display = "none";
  });

  //change tab title color
  document.getElementById(id).style.color = "hsl(229, 31%, 21%)";
  //display red line underneath tab title
  document.querySelector(`.${id}-after`).style.display = "block";
  // display feature image, title & details
  featureImg.src = `./images/illustration-features-${id}.svg`;
  if (id === "tab1") {
    featureHeading.innerHTML = "Bookmark in one click";
    featureInfo.innerHTML =
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites. ";
  } else if (id === "tab2") {
    featureHeading.innerHTML = "Intelligent search";
    featureInfo.innerHTML =
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
  } else {
    featureHeading.innerHTML = "Share your bookmarks";
    featureInfo.innerHTML =
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
  }
}

// expand faqs on click
function displayFaqAnswer(id) {
  // collapse all faqs
  let expandedFaqs = Array.from(document.querySelectorAll(".expanded"));

  expandedFaqs.forEach((expandedFaq) => {
    if (
      expandedFaq.id === "icon-expand1" ||
      expandedFaq.id === "icon-expand2" ||
      expandedFaq.id === "icon-expand3" ||
      expandedFaq.id === "icon-expand4"
    ) {
      // change icon type & icon color
      expandedFaq.style.color = "hsl(231, 69%, 60%)";
      expandedFaq.className = `fas fa-chevron-down ${id}`;
    }

    if (
      expandedFaq.id === "expand1" ||
      expandedFaq.id === "expand2" ||
      expandedFaq.id === "expand3" ||
      expandedFaq.id === "expand4"
    ) {
      // hide answer
      expandedFaq.style.display = "none";
    }
  });

  // display answer
  document.getElementById(id).style.display = "block";

  // change icon type & icon color
  document.getElementById(`icon-${id}`).style.color = "hsl(0, 94%, 66%)";
  document.getElementById(`icon-${id}`).className = `fas fa-chevron-up ${id}`;

  // add class expanded to answer & icon
  document.getElementById(id).classList.add("expanded");
  document.getElementById(`icon-${id}`).classList.add("expanded");
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

// display feature details
tabsContainer.addEventListener("click", (e) => {
  let tabID = e.target.id;
  displayFeatureDetails(tabID);
});

// display faqs answers
questions.addEventListener("click", (e) => {
  // expand clicked faq
  let targetEl = e.target;
  let qsnClass = targetEl.className;
  let qsnId = targetEl.id;

  if (qsnClass.length === 7) {
    displayFaqAnswer(qsnClass);
  }

  if (qsnId.length === 12) {
    let qsnClass1 = qsnId.slice(5, 12);
    displayFaqAnswer(qsnClass1);
  }

  if (qsnClass.length === 16) {
    let qsnClass2 = qsnClass.slice(9, 16);
    displayFaqAnswer(qsnClass2);
  }
});
