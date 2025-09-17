const images = [
  "assets/image1.png",
  "assets/image2.jpg",
  "assets/image3.jpg"
];

let index = 0;
const mainImage = document.getElementById("mainImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showImage(i) {
  index = (i + images.length) % images.length;
  mainImage.src = images[index];
}

prevBtn.addEventListener("click", () => {
  showImage(index - 1);
});

nextBtn.addEventListener("click", () => {
  showImage(index + 1);
});

// script.js

// Scroll reveal animation
window.addEventListener("scroll", function() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 100; // kitna scroll pe visible ho

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
});
// script.js

// Scroll reveal animation
window.addEventListener("scroll", function() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 100; // kitna scroll pe visible ho

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
});
// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// ===== Scroll Reveal Animation =====
window.addEventListener("scroll", function () {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 100; // kitna scroll pe visible ho

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
});
// 🎉 Confetti Effect
function launchConfetti() {
  const confetti = document.getElementById("confetti");
  for (let i = 0; i < 50; i++) {
    let piece = document.createElement("div");
    piece.style.position = "absolute";
    piece.style.width = "10px";
    piece.style.height = "20px";
    piece.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    piece.style.left = Math.random() * window.innerWidth + "px";
    piece.style.top = "-20px";
    piece.style.opacity = 1;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    confetti.appendChild(piece);

    let fall = setInterval(() => {
      piece.style.top = parseFloat(piece.style.top) + 5 + "px";
      if (parseFloat(piece.style.top) > window.innerHeight) {
        confetti.removeChild(piece);
        clearInterval(fall);
      }
    }, 20);
  }
}
window.onload = () => {
  launchConfetti(); // page load pe confetti
};

// ❤️ Floating Emojis
function floatEmoji() {
  const emojis = ["❤️", "⭐", "🔥", "🎉", "⚡"];
  const container = document.getElementById("floating-emojis");
  let emoji = document.createElement("div");
  emoji.className = "emoji";
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + "px";
  container.appendChild(emoji);

  setTimeout(() => emoji.remove(), 4000);
}
setInterval(floatEmoji, 1500);

// 📊 Scroll Progress Bar
let progressBar = document.createElement("div");
progressBar.id = "progressBar";
document.body.appendChild(progressBar);

window.onscroll = () => {
  let scrollTop = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (scrollTop / height) * 100;
  progressBar.style.width = scrolled + "%";
};
