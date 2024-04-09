// function that validate two passwords textfields are the same
const passwordField = document.querySelector("#password");
const passwordConfirm = document.querySelector("#pass-confirm");
const submitBtn = document.querySelector("button");
const form = document.querySelector("form");
const errorDiv = document.querySelector(".error");

function matchingPassword() {
  let result = false;
  let msg = "";

  if (passwordField.value !== passwordConfirm.value) {
    msg = "* Password missmatch";
  } else {
    result = true;
  }
  passwordField.setCustomValidity(msg);
  passwordConfirm.setCustomValidity(msg);

  return result;
}

passwordConfirm.addEventListener("blur", () => matchingPassword());
