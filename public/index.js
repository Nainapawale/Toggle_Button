document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  if (!toggleButton) {
    console.error("Button not found!");
    return;
  }

  // Load the saved theme from localStorage
  const savedTheme = localStorage.getItem("theme") || "light-mode";
  body.classList.add(savedTheme);

  // Toggle theme on button click
  toggleButton.addEventListener("click", function () {
    if (body.classList.contains("light-mode")) {
      body.classList.replace("light-mode", "dark-mode");
      localStorage.setItem("theme", "dark-mode");
      // heading.textContent = "Dark";
    } else {
      body.classList.replace("dark-mode", "light-mode");
      localStorage.setItem("theme", "light-mode");
      // heading.textContent = "Light";
    }
  });
});
