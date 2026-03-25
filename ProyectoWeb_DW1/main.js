/* ============================
   RELOJ Y FECHA
============================ */
function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;

  const timeString = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${ampm}`;
  document.getElementById('time').textContent = timeString;

  const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  const dayName = days[now.getDay()];
  const dayNumber = now.getDate();
  const monthName = months[now.getMonth()];
  const year = now.getFullYear();

  const dateString = `${dayName}, ${dayNumber} de ${monthName} de ${year}`;
  document.getElementById('date').textContent = dateString;
}

function padZero(num) {
  return num < 10 ? '0' + num : num;
}

setInterval(updateClock, 1000);
updateClock();

/* ============================
   MENÚ RESPONSIVE
============================ */
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('show');
  toggle.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
const navLinks = document.querySelectorAll('.nav-menu .nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('show');
    toggle.classList.remove('active');
  });
});

/* ============================
   ANIMACIONES AL SCROLL
============================ */
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observar todas las tarjetas
document.querySelectorAll('.glass-card').forEach(card => {
  observer.observe(card);
});

/* ============================
   EFECTO PARALLAX MEJORADO
============================ */
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrolled = window.pageYOffset;
      const orbs = document.querySelectorAll('.gradient-orb');

      orbs.forEach((orb, index) => {
        const factor = (index + 1) * 0.05;
        orb.style.transform = `translateY(${scrolled * factor}px)`;
      });

      ticking = false;
    });

    ticking = true;
  }
});

/* ============================
   SMOOTH SCROLL LINKS
============================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/* ============================
   DETECCIÓN DE SECCIÓN ACTIVA
============================ */
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href').slice(1) === current) {
      item.classList.add('active');
    }
  });
});

/* ============================
   CARGA INICIAL
============================ */
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});
