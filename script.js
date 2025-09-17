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
