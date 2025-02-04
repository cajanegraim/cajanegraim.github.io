const menuIcon = document.getElementById("menu-icon");
const sidebar = document.getElementById("sidebar");
const content = document.querySelector("main");
const header = document.querySelector("header");

menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  content.classList.toggle("active");
  header.classList.toggle("active");  // Añadimos la clase active al header
});