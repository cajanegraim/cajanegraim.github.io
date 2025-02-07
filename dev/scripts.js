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
//HEADER
window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    header.classList.add('shrunk');
  } else {
    header.classList.remove('shrunk');
  }
});
//FADE-IN INICIAL
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
//FADE-IN
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
//WHATSAPP BUTTON
window.onscroll = function() {
  mostrarBoton();
  cambiarIconoSobreFooter();
};
function mostrarBoton() {
    var boton = document.getElementById("whatsapp-button");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        boton.style.bottom = "20px";  // El botón estará visible
    } else {
        boton.style.bottom = "-100px";  // El botón se oculta cuando está al principio
    }
}
function cambiarIconoSobreFooter() {
  var boton = document.getElementById("whatsapp-button");
  var footer = document.querySelector("footer");
  var icono = document.getElementById("whatsapp-icon");
  var text = document.getElementById("whatsapp-text");

  // Obtenemos la posición del footer y la posición del botón de WhatsApp
  var botonRect = boton.getBoundingClientRect();
  var footerRect = footer.getBoundingClientRect();

  // Si el botón está sobre el footer (es decir, la parte inferior del botón está dentro del footer)
  if (botonRect.bottom > footerRect.top && botonRect.top < footerRect.bottom) {
      // Cambiar el ícono (puedes cambiar la imagen o el color, aquí cambiamos la imagen)
      icono.src = "/dev/img/whatsapp-inv.svg";
      text.style.color = "#f2f2f2";
  } else {
      // Volver al ícono original
      icono.src = "/dev/img/whatsapp.svg";
      text.style.color = "#2b7b8c";
  }
}
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