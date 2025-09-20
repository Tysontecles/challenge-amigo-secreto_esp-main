// Estado
const amigos = [];

// Utilidades de UI
const $ = (sel) => document.querySelector(sel);

function renderLista() {
  const ul = $('#listaAmigos');
  ul.innerHTML = '';
  amigos.forEach((nombre, i) => {
    const li = document.createElement('li');
    li.textContent = `${i + 1}. ${nombre}`;
    ul.appendChild(li);
  });
}

function mostrarResultado(mensajeLineas) {
  const ul = $('#resultado');
  ul.innerHTML = '';
  const lineas = Array.isArray(mensajeLineas) ? mensajeLineas : [mensajeLineas];
  lineas.forEach((txt) => {
    const li = document.createElement('li');
    li.textContent = txt;
    ul.appendChild(li);
  });
}

// Reglas de negocio
function normalizarNombre(txt) {
  return txt.trim();
}

function agregarAmigo() {
  const input = $('#amigo');
  const nombre = normalizarNombre(input.value);

  // Validaciones básicas
  if (!nombre) {
    mostrarResultado('Ingresa un nombre válido.');
    return;
  }
  const existe = amigos.some((n) => n.toLowerCase() === nombre.toLowerCase());
  if (existe) {
    mostrarResultado('Ese nombre ya está en la lista.');
    return;
  }

  amigos.push(nombre);
  renderLista();
  mostrarResultado('Participante agregado.');
  input.value = '';
  input.focus();
}

/**
 * Sorteo por parejas sin repetición
 * – Solo se ejecuta si la cantidad es par (>= 2)
 * – Empareja aleatoriamente en pares A ↔ B
 */
function sortearAmigo() {
  if (amigos.length < 2 || amigos.length % 2 !== 0) {
    mostrarResultado('Debes ingresar un número par de participantes');
    return;
  }

  // 1) Copia y desordena la lista (Fisher–Yates)
  const baraja = [...amigos];
  for (let i = baraja.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [baraja[i], baraja[j]] = [baraja[j], baraja[i]];
  }

  // 2) Arma parejas consecutivas
  const parejas = [];
  for (let i = 0; i < baraja.length; i += 2) {
    const a = baraja[i];
    const b = baraja[i + 1];
    parejas.push(`${a} 🎁 ${b}`);
  }

  // 3) Muestra resultado
  mostrarResultado([
    'Resultado del sorteo (parejas):',
    ...parejas
  ]);
}

// Accesibilidad: Enter en el input = clic en “Añadir”
const input = $('#amigo');
if (input) {
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') agregarAmigo();
  });
}

// Exponer funciones al HTML
window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;
