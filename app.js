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

function updateSortButtonState() {
  if (!btnSortear) return;
  const habilitado = amigos.length >= 2;
  btnSortear.disabled = !habilitado;
  // accesibilidad extra (screen readers)
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

  amigos.push(nombre);
  renderLista();
  updateSortButtonState();
  mostrarMensaje('Participante agregado.');
  inputNombre.value = '';
  inputNombre.focus();
}

/**
 * Sorteo general (N >= 2):
 * 1) Baraja con Fisher–Yates.
 * 2) Asigna en ciclo: s[i] -> s[(i+1) % N]
 *    — sin auto-asignaciones; todos dan y todos reciben.
 */
function sortearAmigo() {
  if (amigos.length < 2) {
    mostrarMensaje('Debes ingresar al menos 2 participantes.');
    return;
  }

  // barajar
  const s = [...amigos];
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }

  // asignaciones
  const asignaciones = s.map((regala, i) => ({
    regala,
    recibe: s[(i + 1) % s.length],
  }));

  // render tabla dos columnas
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
