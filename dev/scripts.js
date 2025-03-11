const sidebar = document.getElementById("sidebar");
const content = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
/* FUNCIONALIDADES */
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
//HEADER
function verificarAnchoPantalla() {
  const header = document.querySelector('header');
  const anchoPantalla = window.innerWidth;

  if (anchoPantalla <= 768) {
    header.innerHTML = "<div class='menu-icon' id='menu-icon'><span></span><span></span><span></span></div><div id='header-logo-container'><a href='/dev/index.html'><img src='/dev/img/logo.png' alt=''></a></div><nav><ul class='nav-links'><li><a href='/dev/nosotros.html'>NOSOTROS</a></li><li><a href='/dev/servicios.html'>SERVICIOS</a></li><li class='contacto-link'>CONTACTO</li></ul></nav>";
    const menuIcon = document.getElementById("menu-icon");
    //SIDE-BAR
    menuIcon.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      content.classList.toggle("active");
      header.classList.toggle("active");
      footer.classList.toggle("active");
      if (window.location.pathname != '/dev/index.html' && window.location.pathname != '/dev/') {
        sidebarLinks = document.querySelector(".sidebar-links");
        sidebarLinks.innerHTML = "<li><a href='/dev/index.html'>INICIO</a></li><li><a href='/dev/nosotros.html'>NOSOTROS</a></li><li><a href='/dev/servicios.html'>SERVICIOS</a></li><li class='contacto-link'>CONTACTO</li>";
      }
    });
  }else{
    header.innerHTML = "<div id='header-logo-container'><a href='/dev/index.html'><img src='/dev/img/logo.png' alt=''></a></div><nav><ul class='nav-links'><li><a href='/dev/index.html'>INICIO</a></li><li><a href='/dev/nosotros.html'>NOSOTROS</a></li><li><a href='/dev/servicios.html'>SERVICIOS</a></li><li class='contacto-link'>CONTACTO</li></ul></nav>";
  }
}
window.addEventListener('resize', verificarAnchoPantalla);
verificarAnchoPantalla();
//TEXTO DESPLEGABLE (SECCIÓN MÉTODOS)
document.querySelectorAll('.line-text').forEach(item => {
  item.addEventListener('click', function () {
    const textLine = this.closest('.text-line');
    document.querySelectorAll('.text-line').forEach(line => {
      if (line !== textLine) {
        line.classList.remove('active');
      }
    });
    textLine.classList.add('active');
  });
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
document.querySelectorAll('.contacto-link').forEach(function(elemento) {
  // Añade el event listener a cada uno de ellos
  elemento.addEventListener('click', async function() {
    console.log("AQUI");
    var destino = document.querySelector('footer');
    const contents = document.querySelectorAll('.fade-in');
    destino.scrollIntoView({
      behavior: 'smooth'
    });
    contents.forEach(content => {
      content.classList.add('visible');
    });
    await sleep(200);
    sidebar.classList.toggle("active");
    content.classList.toggle("active");
    header.classList.toggle("active");
    footer.classList.toggle("active");
  });
});

/* NOSOTROS: ENFOQUE Y COMPROMISO */
if (window.location.pathname === '/dev/nosotros.html') {
  const enfoqueRadio = document.getElementById('enfoque');
  const compromisoRadio = document.getElementById('compromiso');
  const enfoqueSection = document.getElementById('nosotros-enfoque');
  const compromisoSection = document.getElementById('nosotros-compromiso');

  function actualizarSecciones() {
    if (enfoqueRadio.checked) {
      enfoqueSection.style.display = 'flex';
      compromisoSection.style.display = 'none';
    } else if (compromisoRadio.checked) {
      enfoqueSection.style.display = 'none';
      compromisoSection.style.display = 'flex';
    }
  }
  enfoqueRadio.addEventListener('change', actualizarSecciones);
  compromisoRadio.addEventListener('change', actualizarSecciones);
  window.addEventListener('load', actualizarSecciones);
}