// Met automatiquement l'année dans le footer
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("y");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
