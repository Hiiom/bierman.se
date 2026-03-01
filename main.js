// main.js

// Kontrollerwindow.addEventListener("scroll", () => {
  const images = document.querySelectorAll(".parallax");
  let scrollY = window.scrollY;

  images.forEach(img => {
    img.style.transform = `translateY(${scrollY * 0.2}px)`;
  });
});
const form = document.getElementById("postForm");
const gallery = document.getElementById("gallery");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const text = document.getElementById("textInput").value;
  const file = document.getElementById("imageInput").files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = function(event) {
    const post = document.createElement("div");
    post.classList.add("post");

    post.innerHTML = `
      <img src="${event.target.result}">
      <p>${text}</p>
    `;

    gallery.prepend(post);
  };

  reader.readAsDataURL(file);

  form.reset();
});


