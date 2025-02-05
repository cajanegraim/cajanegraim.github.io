const menuIcon = document.getElementById("menu-icon");
const sidebar = document.getElementById("sidebar");
const content = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  content.classList.toggle("active");
  header.classList.toggle("active");
  footer.classList.toggle("active");
  if (window.location.pathname != '/dev/index.html' && window.location.pathname != '/dev/') {
    sidebarLinks = document.querySelector(".sidebar-links");
    sidebarLinks.innerHTML = "<li><a href='/dev/index.html'>INICIO</a></li><li><a href='/dev/nosotros.html'>NOSOTROS</a></li><li><a href='/dev/servicios.html'>SERVICIOS</a></li><li><a href='/dev/areas.html'>ÁREAS DE INVESTIGACIÓN</a></li><li><a href='/dev/contacto.html'>CONTACTO</a></li>";
    console.log(sidebarLinks.innerHTML);
  }
});

/* ANIMACIONES */
window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    header.classList.add('shrunk');
  } else {
    header.classList.remove('shrunk');
  }
});
window.addEventListener('DOMContentLoaded', () => {
  const contents = document.querySelectorAll('.initial-fade-in');
  
  contents.forEach(content => {
    const contentPosition = content.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (contentPosition < windowHeight * 0.8) {
      content.classList.add('visible');
    }
  });
});
window.addEventListener('scroll', () => {
  const contents = document.querySelectorAll('.fade-in');
  
  contents.forEach(content => {
    const contentPosition = content.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (contentPosition < windowHeight * 0.8) {
      content.classList.add('visible');
    }
  });
});

/* CONTACTO */
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('nombre').value;
  var number = document.getElementById('telefono').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('comentario').value;

  if (name && number && email && message) {
    alert('Formulario enviado con éxito.');
  } else {
    document.querySelector('.form-message').style.display = 'block';
  }
});