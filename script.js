document.addEventListener("DOMContentLoaded", () => {
  // Loader fade
  const loader = document.getElementById("loader");
  if (loader) setTimeout(() => loader.style.display = "none", 1200);

  // Toggle theme mode
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
      document.body.style.transition = "background 0.6s, color 0.6s";
    });
  } // ← This was missing!

  // Ripple click animation
  document.querySelectorAll(".ripple").forEach(el => {
    el.addEventListener("click", function (e) {
      const circle = document.createElement("span");
      circle.classList.add("ripple-circle");
      this.appendChild(circle);

      const d = Math.max(this.clientWidth, this.clientHeight);
      circle.style.width = circle.style.height = `${d}px`;
      circle.style.left = `${e.clientX - this.offsetLeft - d / 2}px`;
      circle.style.top = `${e.clientY - this.offsetTop - d / 2}px`;

      setTimeout(() => circle.remove(), 600);
    });
  });
});