let currentAudio = null;

const audios = [
  { ruta: "audios/1_en.mp3", id: "segura" },
  { ruta: "audios/2_en.mp3", id: "plomo" },
  { ruta: "audios/3_en.mp3", id: "sabor" },
  { ruta: "audios/4_en.mp3", id: "salud" },
  { ruta: "audios/5_en.mp3", id: "piel" },
  { ruta: "audios/6_en.mp3", id: "dinero" }
];

audios.forEach((audio) => {
  const miAudio = new Audio(audio.ruta);
  document.getElementById(audio.id).addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = miAudio;
    miAudio.play();
  });
});







// Seleccionamos los elementos de la barra de navegación y las secciones de la página
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

// Agregamos un evento de clic a cada enlace de la barra de navegación
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Prevenimos el comportamiento predeterminado del enlace
    e.preventDefault();

    // Seleccionamos la sección correspondiente al enlace clickeado
    const sectionId = link.getAttribute('href');
    const section = document.querySelector(sectionId);

    // Agregamos la clase active a la sección correspondiente
    sections.forEach((section) => {
      section.classList.remove('active');
      section.classList.add('inactive');
    });
    section.classList.add('active');
    section.classList.remove('inactive');

    // Desplazamos la sección correspondiente
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  });
});


// whatsapp scroll animacion 

const whatsappButton = document.querySelector('.float');

let isScrolling = false;

window.addEventListener('scroll', () => {
isScrolling = true;
whatsappButton.classList.add('scrolling');
});

window.addEventListener('scrollend', () => {
isScrolling = false;
whatsappButton.classList.remove('scrolling');
});

setInterval(() => {
if (!isScrolling) {
  whatsappButton.classList.remove('scrolling');
}
}, 100);


let scrollTimeout;

window.addEventListener('scroll', () => {
isScrolling = true;
whatsappButton.classList.add('scrolling');
clearTimeout(scrollTimeout);
scrollTimeout = setTimeout(() => {
  isScrolling = false;
  whatsappButton.classList.remove('scrolling');
}, 200);
});


// script para barra de navegacion 


const btnMenu = document.querySelector('.navegacion__boton');
	const menu = document.querySelector('.navegacion__lista');

	btnMenu.addEventListener('click', () => {
		menu.classList.toggle('abierto');
	});

	document.addEventListener('click', (event) => {
		if (!event.target.matches('.navegacion__boton') &&!event.target.matches('.navegacion__lista') &&!event.target.matches('.navegacion__enlace')) {
			menu.classList.remove('abierto');
		}
	});

	


	const logo = document.querySelector('.logo__img');
  	logo.style.display = 'block';





	const enlacesActivo = document.querySelectorAll('.navegacion__enlace a');

window.addEventListener('scroll', () => {
  enlacesActivo.forEach((enlace) => {
    const seccion = document.querySelector(enlace.getAttribute('href'));
    if (isElementInViewport(seccion)) {
      enlace.classList.add('active');
    } else {
      enlace.classList.remove('active');
    }
  });
});

function esElementoVisible(elemento, porcentajeVisible) {
  const rect = elemento.getBoundingClientRect();
  const alturaVisible = rect.height * porcentajeVisible;
  const anchoVisible = rect.width * porcentajeVisible;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom - alturaVisible <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right - anchoVisible <= (window.innerWidth || document.documentElement.clientWidth)
  );

  if (esElementoVisible(seccion, 0.5)) {
  enlace.classList.add('active');
} else {
  enlace.classList.remove('active');
}

		const logo = document.querySelector('.logo__img');

	logo.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});
	}

	window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
      document.querySelector('.header').style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    } else {
      document.querySelector('.header').style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
    });





// Agregamos un evento click a cada enlace
menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Prevenimos el comportamiento por defecto del enlace
    e.preventDefault();

    // Seleccionamos la sección correspondiente
    const sectionId = link.getAttribute('href').replace('#', '');
    const section = document.getElementById(sectionId);

    // Scrollamos a la sección correspondiente
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

    // Seleccionamos todos los enlaces del menú
    const menuLinks = document.querySelectorAll('.nav-link');
    
// Seleccionamos la barra de navegación fija
const navbar = document.querySelector('.nav-bar');

// Agregamos un evento click a cada enlace
menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Prevenimos el comportamiento por defecto del enlace
    e.preventDefault();

    // Seleccionamos la sección correspondiente
    const sectionId = link.getAttribute('href').replace('#', '');
    const section = document.getElementById(sectionId);

    // Obtenemos la posición y tamaño de la barra de navegación fija
    const navbarRect = navbar.getBoundingClientRect();
    const navbarHeight = navbarRect.height;

    // Scrollamos a la sección correspondiente, ajustando la posición para que se muestre justo debajo de la barra de navegación fija
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      offsetTop: navbarHeight,
    });
  });
});


// Obtener la configuración regional del navegador
var lang = navigator.language || navigator.userLanguage;

// Redirigir a la página correspondiente
if (lang.toLowerCase().indexOf("es") > -1) {
  // Redirigir a la página en español
  window.location.href = "index.html";
} else {
  // Redirigir a la página en inglés
  window.location.href = "index_en.html";
}




// alert        
function submitForm() {
  var alertBox = document.querySelector('.custom-alert');
  alertBox.style.display = 'block';
  setTimeout(function() {
      closeAlert();
  }, 5000); // mostrar el alert durante 5 segundos
  return true; // permitir que el formulario se envíe
  }

  function closeAlert() {
  var alertBox = document.querySelector('.custom-alert');
  alertBox.style.display = 'none';
  window.location.href = "#"; // llevar al top de la página
  }

