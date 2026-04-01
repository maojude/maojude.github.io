const text = "JUDE VICRIS E. ESTOSE";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("name").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80); // speed (lower = faster)
  }
}

window.onload = typeEffect;

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".timeline-item");

  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.backgroundColor = "#d0e7ff";
      item.style.transform = "scale(1.02)";
      item.style.transition = "0.2s";
    });

    item.addEventListener("mouseleave", () => {
      item.style.backgroundColor = "transparent";
      item.style.transform = "scale(1)";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const topBtn = document.getElementById("topBtn");

  // Show button when scrolling
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });

  // Scroll to top when clicked
  topBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
