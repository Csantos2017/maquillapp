
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("main > section");
  sections.forEach(s => s.classList.remove("active"));
  document.getElementById("dashboard").classList.add("active");
});
