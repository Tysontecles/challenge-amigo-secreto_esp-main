// --------------------
// Estado y referencias
// --------------------
let amigos = [];                   // participantes
let resultado = [];                // parejas del sorteo

const $ = (sel) => document.querySelector(sel);

const input = $('#amigo');
const lista = $('#listaAmigos');
const resultadoBox = $('#resultado');

const btnAdd = document.querySelector('.button-add');
const btnSortear = document.getElementById('btnSortear');
const btnLabel = btnSortear.querySelector('.btn-label');

// --------------------
// Utilidades de botón
// --------------------
function setSortButtonText(texto) {
  btnLabel.textContent = texto;           // el <img> se mantiene, no desaparece
}

function setSortButtonState({ enabled, modo = 'sortear' }) {
  btnSortear.disabled = !enabled;         // gris si está deshabilitado
  btnSortear.dataset.mode = modo;         // 'sortear' | 'nuevo'
  setSortButtonText(modo === 'sortear' ? 'Sortear amigo' : 'Nuevo sorteo');
}

// --------------------
// Render de listas
// --------------------
function renderListaAmigos() {
  if (!amigos.length) {
    lista.innerHTML = '';
    return;
  }
  lista.innerHTML = amigos
    .map((n, i) => `<li class="name-item">${i + 1}. ${n}</li>`)
    .join('');
}

function renderParejas(pairs) {
  if (!pairs.length) {
    resultadoBox.innerHTML = '';
    return;
  }

  const head = `
    <div class="head">
      <span>Regala</span><span></span><span>Recibe</span>
    </div>
  `;

  const rows = pairs
    .map(p => `
      <div class="row">
        <span>${p.giver}</span>
        <span>➜</span>
        <span>${p.receiver}</span>
      </div>
    `)
    .join('');

  resultadoBox.innerHTML = `<div class="pairs">${head}${rows}</div>`;
}

// Mensaje corto (debajo del input)
function feedback(msg) {
  resultadoBox.innerHTML = `<div class="feedback">${msg}</div>`;
}

// --------------------
// Lógica principal
// --------------------
const normaliza = (s) => s.trim().toLowerCase();

function agregarAmigo() {
  const nombre = input.value.trim();
  if (!nombre) return;

  const existe = amigos.some(n => normaliza(n) === normaliza(nombre));
  if (existe) {
    feedback('Ese nombre ya está en la lista.');
    input.value = '';
    input.focus();
    return;
  }

  amigos.push(nombre);
  renderListaAmigos();
  feedback('Participante agregado.');
  input.value = '';
  input.focus();

  // habilita sorteo si hay 2+
  setSortButtonState({ enabled: amigos.length >= 2, modo: 'sortear' });
}

function generarParejas(listaNombres) {
  // corrida circular: a->b, b->c, ..., último->primero
  if (listaNombres.length < 2) return [];
  const receptores = listaNombres.slice(1).concat(listaNombres[0]);
  return listaNombres.map((giver, i) => ({ giver, receiver: receptores[i] }));
}

function sortearAmigo() {
  const modo = btnSortear.dataset.mode || 'sortear';

  if (modo === 'nuevo') {
    // ✅ v6: “Nuevo sorteo” limpia TODO (nombres + resultado) y deshabilita el botón
    amigos = [];
    resultado = [];
    renderListaAmigos();
    renderParejas(resultado);
    setSortButtonState({ enabled: false, modo: 'sortear' });
    feedback('Lista reiniciada. Agrega participantes para un nuevo sorteo.');
    return;
  }

  // modo "sortear"
  if (amigos.length < 2) {
    feedback('Debes agregar al menos 2 participantes.');
    return;
  }

  resultado = generarParejas(amigos);
  renderParejas(resultado);
  setSortButtonState({ enabled: true, modo: 'nuevo' });  // cambia a “Nuevo sorteo”
}

// --------------------
// Eventos
// --------------------
btnAdd.addEventListener('click', agregarAmigo);
input.addEventListener('keydown', (e) => { if (e.key === 'Enter') agregarAmigo(); });

// estado inicial del botón de sorteo
setSortButtonState({ enabled: false, modo: 'sortear' });
