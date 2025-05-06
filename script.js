window.onload = function () {
  typeLogin();
};

const loginStr = "viewer";
const passStr = "********";
const introText =
  "Hi, I'm Atique Ahmed Ziad — Full Stack Developer with 8+ years of experience. Welcome to my terminal.";

const commandText = "cd contact";
let loginIndex = 0;
let passIndex = 0;
let introIndex = 0;
let commandIndex = 0;

function typeLogin() {
  const loginText = document.getElementById("login-text");

  if (loginIndex < loginStr.length) {
    loginText.innerHTML += loginStr.charAt(loginIndex);
    loginIndex++;
    setTimeout(typeLogin, 100);
  } else {
    setTimeout(typePassword, 700);
  }
}

function typePassword() {
  const passText = document.getElementById("password-text");

  if (passIndex < passStr.length) {
    passText.innerHTML += passStr.charAt(passIndex);
    passIndex++;
    setTimeout(typePassword, 100);
  } else {
    setTimeout(() => {
      document.getElementById("access-text").textContent = "Access granted...";
      setTimeout(showTerminal, 1500);
    }, 500);
  }
}
function showTerminal() {
  document.getElementById("login-screen").style.display = "none";
  document.querySelector(".terminal").style.display = "block";

  document.getElementById("typed-text").textContent =
    "Hi, I'm Atique Ahmed Ziad — Full Stack Developer with 8+ years of experience. Welcome to my terminal.";

  document.getElementById("main-content").style.display = "block";
  document.getElementById("main-content").style.opacity = 1;
}
