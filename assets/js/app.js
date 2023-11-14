// mobile + tablet navigation
// JavaScript
const navMenu = document.getElementById("navMenu");
const mobileMenu = document.querySelector(".mobileMenu");
const ionIcon = navMenu.querySelector("ion-icon");

function handleNavMenuClick() {
    mobileMenu.classList.toggle("active");
    updateNavMenuStyles();
}

function updateNavMenuStyles() {
    if (window.innerWidth <= 549) {
        if (mobileMenu.classList.contains("active")) {
            navMenu.innerHTML = '<ion-icon name="close-outline"></ion-icon>';
        } else {
            navMenu.innerHTML = '<ion-icon name="open-outline"></ion-icon>';
        }
    } else {
        if (mobileMenu.classList.contains("active")) {
            navMenu.innerHTML =
                'Close<ion-icon name="close-outline"></ion-icon>';
        } else {
            navMenu.innerHTML = 'Menu<ion-icon name="open-outline"></ion-icon>';
        }
    }
}

navMenu.addEventListener("click", handleNavMenuClick);

function handleResize() {
    updateNavMenuStyles();
}

window.addEventListener("resize", handleResize);

handleResize();
