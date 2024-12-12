// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Dynamic hero text update (example functionality)
const heroText = document.querySelector(".hero h2");
setInterval(() => {
  const phrases = [
    "Your Style, Our Expertise",
    "Sharp Looks, Sharp Minds",
    "Be Bold, Be Unique",
  ];
  heroText.textContent = phrases[Math.floor(Math.random() * phrases.length)];
}, 3000);
