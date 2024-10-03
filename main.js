import { characters } from "./data.js";

const generatorBtn = document.getElementById("generator-btn");
const passwordOne = document.getElementById("passwordOne");
const passwordTwo = document.getElementById("passwordTwo");

const passwordLength = 16;

function getRandomCharacter() {
  const randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomChar];
}

function getRandomPassword() {
  let randomPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    randomPassword += getRandomCharacter();
  }
  return randomPassword;
}

generatorBtn.addEventListener("click", function () {
  passwordOne.textContent = getRandomPassword();
  passwordTwo.textContent = getRandomPassword();
});
