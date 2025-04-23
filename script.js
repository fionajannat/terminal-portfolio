window.onload = function () {
  typeLogin();
};

const loginStr = "viewer";
const passStr = "********";
const introText =
  "Hi, I'm Atique Ahmed Ziad — Full Stack Developer with 8+ years of experience. Welcome to my terminal.";

let loginIndex = 0;
let passIndex = 0;
let introIndex = 0;

function typeLogin() {
  const loginText = document.getElementById("login-text");

  if (loginIndex < loginStr.length) {
    loginText.innerHTML += loginStr.charAt(loginIndex);
    loginIndex++;
    setTimeout(typeLogin, 100);
  } else {
    setTimeout(typePassword, 500);
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
      setTimeout(showTerminal, 1000);
    }, 500);
  }
}

function showTerminal() {
  document.getElementById("login-screen").style.display = "none";
  document.querySelector(".terminal").style.display = "block";
  typeIntro();
}

function typeIntro() {
  const typedText = document.getElementById("typed-text");

  if (introIndex < introText.length) {
    typedText.innerHTML += introText.charAt(introIndex);
    introIndex++;
    setTimeout(typeIntro, 50);
  } else {
    // document.getElementById("main-content").style.display = "block";
    // setTimeout(() => {
    //     document.getElementById("main-content").style.display = "block";
    //   }, 1000);

    gsap.to("#main-content", {
      duration: 2.5,
      display: "block",
      opacity: 1,
      ease: "power1.in",
    });
    gsap.from(".slide-left", {
      x: -500,
      opacity: 0,
      duration: 3.5,
      ease: "power2.out",
    });
    gsap.from(".slide-right", {
      x: 500,
      opacity: 0,
      duration: 3.5,
      ease: "power2.out",
    });
  }
}
