
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
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});
