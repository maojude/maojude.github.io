document.addEventListener("DOMContentLoaded", function () {
  // ✅ TYPING EFFECT (SAFE)
  const nameElement = document.getElementById("name");

  if (nameElement) {
    const text = "JUDE VICRIS E. ESTOSE";
    let index = 0;

    function typeEffect() {
      if (index < text.length) {
        nameElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
      }
    }

    typeEffect();
  }

  // ✅ TIMELINE HOVER (SAFE)
  const items = document.querySelectorAll(".timeline-item");

  if (items.length > 0) {
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
  }

  // ✅ BACK TO TOP (SAFE)
  const topBtn = document.getElementById("topBtn");

  if (topBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
    });

    topBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
