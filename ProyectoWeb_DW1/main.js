
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

// --- Menú responsive ---




// --- Menú responsive ---
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Abrir / cerrar menú al tocar el ícono ☰
toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace y marcarlo como activo
const links = document.querySelectorAll('.navbar a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    // Cerrar menú en móvil
    menu.classList.remove('active');

    // Quitar estado activo de todos los enlaces
    links.forEach(l => l.classList.remove('activo'));

    // Agregar estado activo al enlace seleccionado
    e.target.classList.add('activo');
  });
});

// --- Reloj dinámico ---
function actualizarReloj() {
  const ahora = new Date();
  const horas = ahora.getHours().toString().padStart(2, '0');
  const minutos = ahora.getMinutes().toString().padStart(2, '0');
  const segundos = ahora.getSeconds().toString().padStart(2, '0');
  const fecha = ahora.toLocaleDateString();

  document.getElementById('time').textContent = `${horas}:${minutos}:${segundos}`;
  document.getElementById('date').textContent = fecha;
}
setInterval(actualizarReloj, 1000);
actualizarReloj();
