// main.js

// Kontrollerwindow.addEventListener("scroll", () => {
  const images = document.querySelectorAll(".parallax");
  let scrollY = window.scrollY;

  images.forEach(img => {
    img.style.transform = `translateY(${scrollY * 0.2}px)`;
  });
});


