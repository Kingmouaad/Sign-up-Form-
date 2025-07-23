const veri = document.querySelector("#emptypassword");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const form = document.querySelector("#signup-form"); // Fix form selector
password.addEventListener("keyup", () => {
  let numbers = 0;
  let letters = 0;
  if (password.value.length === 0) {
    veri.setAttribute("id", "emptypassword");
    return;
  }
  for (let char of password.value) {
    if (char.match(/[0-9]/)) {
      numbers++;
    }
    if (char.match(/[a-zA-Z]/)) {
      letters++;
    }
  }
  if (password.value.length >= 8 && numbers >= 2 && letters >= 5) {
    veri.setAttribute("id", "strongpassword");
  } else if (password.value.length >= 6 && (numbers >= 1 || letters >= 4)) {
    veri.setAttribute("id", "mediumpassword");
  } else {
    veri.setAttribute("id", "weakpassword");
  }
});
const email = document.querySelector("#email");
email.addEventListener("blur", () => {
  const emailRegex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email.value.match(emailRegex)) {
    email.style.borderColor = "red";

    password2.setCustomValidity("email is false ");
  } else {
    email.style.borderColor = "green";

    password2.setCustomValidity("");
  }
});

// Fix password comparison
password2.addEventListener("input", () => {
  if (password2.value.length === 0) {
    password2.style.borderColor = "";
    password.style.borderColor = "";
    return;
  }

  if (password2.value === password.value) {
    password2.style.borderColor = "green";
    password.style.borderColor = "green";
    password2.setCustomValidity("");
  } else {
    password2.style.borderColor = "red";
    password.style.borderColor = "red";
    password2.setCustomValidity("Passwords don't match");
  }
});

// Form submission handler
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (password.value !== password2.value) {
    password2.setCustomValidity("Passwords don't match");
    return;
  }

  if (form.checkValidity()) {
    console.log("Form is valid, ready to submit");
    // Add your form submission logic here
  }
});
