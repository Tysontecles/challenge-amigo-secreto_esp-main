// ===========================
// Challenge: Amigo Secreto 🎁
// Versión funcional v1
// ===========================

// Estado de la app
let amigos = [];

// ---- Utilidades ----
function obtenerInput() {
  return document.getElementById('amigo');
}

function limpiarInput() {
  const input = obtenerInput();
  if (input) input.value = '';
  input?.focus();
}

function renderListaAmigos() {
  const ul = document.getElementById('listaAmigos');
  if (!ul) return;

  // Limpia la lista y vuelve a dibujar
  ul.innerHTML = '';
  amigos.forEach((nombre) => {
    const li = document.createElement('li');
    li.textContent = nombre;
    ul.appendChild(li);
  });
}

function renderResultado(texto) {
  const ul = document.getElementById('resultado');
  if (!ul) return;
  ul.innerHTML = ''; // muestra un solo resultado a la vez

  const li = document.createElement('li');
  li.textContent = texto;
  ul.appendChild(li);
}

// ---- Lógica principal ----
function agregarAmigo() {
  const input = obtenerInput();
  if (!input) return;

  const nombre = input.value.trim();

  // Validaciones básicas
  if (nombre === '') {
    renderResultado('⚠️ Ingresa un nombre válido.');
    return;
  }
  // Evitar duplicados (case-insensitive)
  const existe = amigos.some((n) => n.toLowerCase() === nombre.toLowerCase());
  if (existe) {
    renderResultado('⚠️ Ese nombre ya está en la lista.');
    limpiarInput();
    return;
  }

  amigos.push(nombre);
  renderListaAmigos();
  renderResultado('✅ Nombre agregado.');
  limpiarInput();
}

function sortearAmigo() {
  if (amigos.length === 0) {
    renderResultado('⚠️ Primero agrega al menos un nombre.');
    return;
  }

  // Índice aleatorio y selección
  const indice = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[indice];

  // (Opcional) remover el elegido para no repetirlo en futuros sorteos
  // Si prefieres que NO se elimine, comenta las dos líneas siguientes.
  amigos.splice(indice, 1);
  renderListaAmigos();

  renderResultado(`🎉 El amigo secreto es: ${elegido}`);
}

// ---- Mejora UX: Enter para agregar ----
// Permite presionar Enter en el input para agregar el nombre
document.addEventListener('DOMContentLoaded', () => {
  const input = obtenerInput();
  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        agregarAmigo();
      }
    });
  }
});
