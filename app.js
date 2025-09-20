// ===== Estado =====
const amigos = [];

// ===== Shortcuts DOM =====
const $ = (s) => document.querySelector(s);
const inputNombre = $('#amigo');
const btnSortear = $('.button-draw');

// ===== UI helpers =====
function renderLista() {
  const ul = $('#listaAmigos');
  ul.innerHTML = '';
  amigos.forEach((n, i) => {
    const li = document.createElement('li');
    li.textContent = `${i + 1}. ${n}`;
    ul.appendChild(li);
  });
}

function mostrarMensaje(texto) {
  const cont = $('#resultado');
  cont.innerHTML = `<li>${texto}</li>`;
}

function setSortButtonToSortMode() {
  btnSortear.textContent = 'Sortear amigo';
  btnSortear.removeAttribute('data-mode'); // modo normal (sorteo)
  updateSortButtonState();
}

function setSortButtonToResetMode() {
  btnSortear.textContent = 'Nuevo sorteo';
  btnSortear.setAttribute('data-mode', 'reset');
  // En modo reset el botón siempre debe estar habilitado
  btnSortear.disabled = false;
  btnSortear.setAttribute('aria-disabled', 'false');
  btnSortear.title = 'Iniciar un nuevo sorteo (limpia la lista y resultados)';
}

/**
 * Habilita/deshabilita el botón "Sortear amigo".
 * - En modo reset, nunca se deshabilita (para permitir limpiar).
 * - En modo sorteo, requiere al menos 2 participantes.
 */
function updateSortButtonState() {
  if (!btnSortear) return;

  const enReset = btnSortear.dataset.mode === 'reset';
  if (enReset) {
    btnSortear.disabled = false;
    btnSortear.setAttribute('aria-disabled', 'false');
    btnSortear.title = 'Iniciar un nuevo sorteo (limpia la lista y resultados)';
    return;
  }

  const habilitado = amigos.length >= 2;
  btnSortear.disabled = !habilitado;
  btnSortear.setAttribute('aria-disabled', String(!habilitado));
  btnSortear.title = habilitado
    ? 'Sortear amigo'
    : 'Agrega al menos 2 participantes';
}

function normalizarNombre(txt) {
  return txt.trim();
}

// ===== Acciones =====
function agregarAmigo() {
  const nombre = normalizarNombre(inputNombre.value);

  if (!nombre) {
    mostrarMensaje('Ingresa un nombre válido.');
    return;
  }
  const existe = amigos.some((n) => n.toLowerCase() === nombre.toLowerCase());
  if (existe) {
    mostrarMensaje('Ese nombre ya está en la lista.');
    return;
  }

  // Si estábamos en modo reset (después de un sorteo), volver a modo sorteo
  if (btnSortear.dataset.mode === 'reset') {
    $('#resultado').innerHTML = '';
    setSortButtonToSortMode();
  }

  amigos.push(nombre);
  renderLista();
  updateSortButtonState();
  mostrarMensaje('Participante agregado.');
  inputNombre.value = '';
  inputNombre.focus();
}

/**
 * Limpiar todo para un nuevo sorteo
 */
function nuevoSorteo() {
  amigos.length = 0;            // vacía la lista
  renderLista();
  $('#resultado').innerHTML = '';
  setSortButtonToSortMode();    // vuelve a "Sortear amigo" y valida el estado
  inputNombre.focus();
}

/**
 * Sorteo general (N >= 2):
 * 1) Baraja con Fisher–Yates.
 * 2) Asigna en ciclo: s[i] -> s[(i+1) % N]
 */
function ejecutarSorteo() {
  if (amigos.length < 2) {
    mostrarMensaje('Agrega al menos 2 participantes.');
    return;
  }

  const s = [...amigos];
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }

  const asignaciones = s.map((regala, i) => ({
    regala,
    recibe: s[(i + 1) % s.length],
  }));

  const filas = asignaciones
    .map(a => `<tr><td>${a.regala}</td><td>→</td><td>${a.recibe}</td></tr>`)
    .join('');
  $('#resultado').innerHTML = `
    <li style="list-style:none; width:100%">
      <table style="margin:auto; border-collapse:collapse; font-family:Inter, sans-serif;">
        <thead>
          <tr>
            <th style="padding:8px 16px; border-bottom:2px solid #ccc; text-align:left;">Regala</th>
            <th style="padding:8px 16px; border-bottom:2px solid #ccc;"></th>
            <th style="padding:8px 16px; border-bottom:2px solid #ccc; text-align:left;">Recibe</th>
          </tr>
        </thead>
        <tbody>${filas}</tbody>
      </table>
    </li>
  `;

  // Al terminar el sorteo, pasamos el botón a "Nuevo sorteo"
  setSortButtonToResetMode();
}

function sortearAmigo() {
  // Si está en modo "reset", limpia todo
  if (btnSortear.dataset.mode === 'reset') {
    nuevoSorteo();
  } else {
    ejecutarSorteo();
  }
}

// Accesibilidad: Enter agrega rápido
if (inputNombre) {
  inputNombre.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') agregarAmigo();
  });
}

// Estado inicial del botón
updateSortButtonState();

// Exponer al HTML
window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;
