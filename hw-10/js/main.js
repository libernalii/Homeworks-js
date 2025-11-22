// === Task 1 === //
function isValidURL(url) {
  const pattern = /^(http|https|ftp):\/\/.+/;
  return pattern.test(url);
}
let url1 = "https://www.example.com";
let url2 = "ftp://fileserver/documents";
let url3 = "invalid-url";
let url4 = "http://example.com";
console.log(isValidURL(url1)); // true
console.log(isValidURL(url2)); // true
console.log(isValidURL(url3)); // false
console.log(isValidURL(url4)); // true

// === Task 2 === //
// --- ЕЛЕМЕНТИ ---
const openModalBtn = document.getElementById("openModalBtn");
const modalOverlay = document.getElementById("modalOverlay");
const closeModalBtn = document.getElementById("closeModalBtn");

const registerForm = document.getElementById("registerForm");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");


// --- ВІДКРИТТЯ МОДАЛКИ ---
openModalBtn.addEventListener("click", () => {
    modalOverlay.classList.add("open");
});

// --- ЗАКРИТТЯ МОДАЛКИ ---
closeModalBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("open");
});

modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove("open");
    }
});


// --- ФУНКЦІЯ ВИВЕДЕННЯ ПОМИЛОК ---
function showError(field, messageContainer) {
    let message = "";

    if (field.validity.valueMissing) {
        message = "Поле не може бути порожнім";
    } 
    else if (field.validity.typeMismatch) {
        message = "Невірний формат";
    }
    else if (field.validity.tooShort) {
        message = `Мінімальна кількість символів: ${field.minLength}`;
    }
    else if (field.validity.customError) {
        message = field.validationMessage; // з setCustomValidity()
    }

    messageContainer.textContent = message;
}

function validatePasswords() {
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Паролі не співпадають");
    } else {
        confirmPassword.setCustomValidity(""); // обов’язково очистити!
    }
}


// --- LIVE-ВАЛІДАЦІЯ ПРИ ВВЕДЕННІ ---
registerForm.addEventListener("input", (e) => {
    const field = e.target;

    if (field === password || field === confirmPassword) {
        validatePasswords();
    }

    switch (field.id) {
        case "username":
            showError(field, usernameError);
            break;
        case "email":
            showError(field, emailError);
            break;
        case "password":
            showError(field, passwordError);
            break;
        case "confirmPassword":
            showError(field, confirmPasswordError);
            break;
    }
});


// --- ОБРОБКА САБМІТУ ФОРМИ ---
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    validatePasswords();

    if (!registerForm.checkValidity()) {
        showError(username, usernameError);
        showError(email, emailError);
        showError(password, passwordError);
        showError(confirmPassword, confirmPasswordError);
        return; // НЕ відправляємо форму
    }

    alert("Реєстрація успішна!");

    registerForm.reset();
    modalOverlay.classList.remove("open");

    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
});
