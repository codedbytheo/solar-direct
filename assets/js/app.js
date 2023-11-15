const navMenu = document.getElementById("navMenu");
const mobileMenu = document.querySelector(".mobileMenu");
const ionIcon = navMenu.querySelector("ion-icon");

function handleNavMenuClick() {
    mobileMenu.classList.toggle("active");
    updateNavMenuStyles();
}

function updateNavMenuStyles() {
    if (window.innerWidth <= 374) {
        if (mobileMenu.classList.contains("active")) {
            if (window.location.href.includes("form.html")) {
                navMenu.innerHTML =
                    '<ion-icon name="close-outline"></ion-icon>';
            } else {
                navMenu.innerHTML =
                    '<ion-icon name="close-outline"></ion-icon>';
            }
        } else {
            if (window.location.href.includes("form.html")) {
                navMenu.innerHTML = '<ion-icon name="menu-outline"></ion-icon>';
            } else {
                navMenu.innerHTML = '<ion-icon name="open-outline"></ion-icon>';
            }
        }
    } else {
        if (mobileMenu.classList.contains("active")) {
            if (window.location.href.includes("form.html")) {
                navMenu.innerHTML =
                    'Close<ion-icon name="close-outline"></ion-icon>';
            } else {
                navMenu.innerHTML =
                    'Close<ion-icon name="close-outline"></ion-icon>';
            }
        } else {
            if (window.location.href.includes("form.html")) {
                navMenu.innerHTML =
                    'Menu<ion-icon name="menu-outline"></ion-icon>';
            } else {
                navMenu.innerHTML =
                    'Contact<ion-icon name="open-outline"></ion-icon>';
            }
        }
    }
}

navMenu.addEventListener("click", handleNavMenuClick);

function handleResize() {
    updateNavMenuStyles();
}

window.addEventListener("resize", handleResize);

handleResize();
