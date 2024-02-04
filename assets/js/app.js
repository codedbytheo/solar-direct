//navbar js
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

// floating whatsapp js

document.addEventListener("DOMContentLoaded", function () {
    const whatsappBtn = document.querySelector(".floatingWhatsapp");

    function checkScroll() {
        const scrollDown = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;

        if (window.innerWidth >= 850) {
            whatsappBtn.style.display = "none";
        } else {
            if (
                scrollDown > 100 &&
                scrollDown + windowHeight < documentHeight - 275
            ) {
                whatsappBtn.style.display = "block";
            } else {
                whatsappBtn.style.display = "none";
            }
        }
    }

    checkScroll();

    window.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
});

// client side  form authentication
function setupFormValidation() {
    var submitButton = document.querySelector(".submitBtn button");

    submitButton.disabled = true;
    submitButton.style.backgroundColor = "rgba(12, 212, 223, 0.4)";

    var isNameValid = false;
    var isEmailValid = false;
    var isCellphoneNumberValid = false;
    var isLotTypeValid = false;
    var isAddressValid = false;
    var isRoofDirectionValid = false;
    var isRoofAngleValid = false;
    var isTotalResidentsValid = false;
    var isUsageScheduleValid = false;

    // Validation logic for Name & Surname
    var clientNameSurnameInput = document.getElementById("clientNameSurname");
    clientNameSurnameInput.addEventListener("input", function () {
        var inputValue = clientNameSurnameInput.value;
        var allowedPattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
        isNameValid = allowedPattern.test(inputValue);
        updateValidationState(clientNameSurnameInput, isNameValid);
        updateButtonState();
    });

    // Validation logic for Email
    var clientEmailInput = document.getElementById("clientEmail");
    clientEmailInput.addEventListener("input", function () {
        var inputValue = clientEmailInput.value;
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isEmailValid =
            inputValue.trim() !== "" && emailPattern.test(inputValue);
        updateValidationState(clientEmailInput, isEmailValid);
        updateButtonState();
    });

    // Validation logic for Cellphone Number
    var clientCellphoneNumberInput = document.getElementById(
        "clientCellphoneNumber"
    );
    clientCellphoneNumberInput.addEventListener("input", function () {
        var inputValue = clientCellphoneNumberInput.value;
        var phoneNumberPattern = /^\d{10}$/;
        isCellphoneNumberValid = phoneNumberPattern.test(inputValue);
        updateValidationState(
            clientCellphoneNumberInput,
            isCellphoneNumberValid
        );
        updateButtonState();
    });

    // Validation logic for Lot Type
    var clientLotTypeSelect = document.getElementById("clientLotType");
    clientLotTypeSelect.addEventListener("change", function () {
        var selectedValue = clientLotTypeSelect.value;
        isLotTypeValid =
            selectedValue === "freestandingLot" ||
            selectedValue === "complexLot";
        updateValidationState(clientLotTypeSelect, isLotTypeValid);
        updateButtonState();
    });

    // Validation logic for Address
    var clientAddressInput = document.getElementById("clientAddress");
    clientAddressInput.addEventListener("input", function () {
        var inputValue = clientAddressInput.value;
        var addressPattern = /^(?=.*[^\s])[A-Za-z0-9\s]{1,35}$/;
        isAddressValid = addressPattern.test(inputValue);
        updateValidationState(clientAddressInput, isAddressValid);
        updateButtonState();
    });

    // Validation logic for Roof Direction
    var roofDirectionSelect = document.getElementById("roofDirection");
    roofDirectionSelect.addEventListener("change", function () {
        var selectedValue = roofDirectionSelect.value;
        var validOptions = ["North", "East", "South", "West", "Uncertain"];
        isRoofDirectionValid =
            selectedValue && validOptions.includes(selectedValue);
        updateValidationState(roofDirectionSelect, isRoofDirectionValid);
        updateButtonState();
    });

    // Validation logic for Roof Angle
    var roofAngleInput = document.getElementById("roofAngle");
    roofAngleInput.addEventListener("input", function () {
        var inputValue = parseFloat(roofAngleInput.value);
        isRoofAngleValid =
            !isNaN(inputValue) && inputValue > 0 && inputValue <= 50;
        updateValidationState(roofAngleInput, isRoofAngleValid);
        updateButtonState();
    });

    // Validation logic for Total Residents
    var totalResidentsInput = document.getElementById("totalResidents");
    totalResidentsInput.addEventListener("input", function () {
        var inputValue = parseInt(totalResidentsInput.value, 10);
        isTotalResidentsValid =
            !isNaN(inputValue) && inputValue > 0 && inputValue <= 100;
        updateValidationState(totalResidentsInput, isTotalResidentsValid);
        updateButtonState();
    });

    // Validation logic for Usage Schedule
    var usageScheduleSelect = document.getElementById("usageSchedule");
    usageScheduleSelect.addEventListener("change", function () {
        var selectedValue = usageScheduleSelect.value;
        var validOptions = [
            "Day Time Usage",
            "Night Time Usage",
            "Balanced Usage",
        ];
        isUsageScheduleValid =
            selectedValue && validOptions.includes(selectedValue);
        updateValidationState(usageScheduleSelect, isUsageScheduleValid);
        updateButtonState();
    });

    function updateValidationState(element, isValid) {
        if (isValid) {
            element.style.borderBottom = "1.5px solid #009900";
        } else {
            element.style.borderBottom = "1.5px solid #FF3D3D";
        }
    }

    function updateButtonState() {
        var allValidationsPassed =
            isNameValid &&
            isEmailValid &&
            isCellphoneNumberValid &&
            isLotTypeValid &&
            isAddressValid &&
            isRoofDirectionValid &&
            isRoofAngleValid &&
            isTotalResidentsValid &&
            isUsageScheduleValid;

        if (allValidationsPassed) {
            submitButton.disabled = false;
            submitButton.style.backgroundColor = "rgba(12, 212, 223, 1)";
        } else {
            submitButton.disabled = true;
            submitButton.style.backgroundColor = "rgba(12, 212, 223, 0.4)";
        }
    }

    updateButtonState();
}

setupFormValidation();
