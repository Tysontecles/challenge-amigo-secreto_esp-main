- **JS (app.js)** — funciones clave:
- `agregarAmigo()`: valida y agrega nombres.
- `renderLista()`: sincroniza `<ul id="listaAmigos">`.
- `puedeSortear()`: reglas para habilitar el sorteo.
- `generarAsignaciones()`: crea parejas **Regala→Recibe** evitando auto-asignación (ajuste sobre mezcla aleatoria).
- `sortearAmigo()`: orquesta el sorteo y renderiza la tabla.
- `renderResultado(parejas)`: muestra resultados en `<ul id="resultado">`.
- `actualizarEstadoBoton()`: gestiona habilitado/estilos/texto del botón.
- `reiniciarSorteo()`: limpia resultados y restaura estados.

---

## 🛠️ Cómo ejecutar localmente
1. **Clonar** el repositorio o descargar ZIP.  
2. Abrir `index.html` en tu navegador (no requiere servidor).
3. Escribir un nombre y pulsar **Añadir**.
4. Cuando el botón **Sortear amigo** esté activo, presionarlo para ver la tabla **Regala / Recibe**.
5. Para reiniciar, usar **Nuevo sorteo**.

---

## ♿ Accesibilidad & UX
- `aria-live="polite"` en resultados para lectores de pantalla.
- Estados **habilitado/deshabilitado** visibles (color y cursor).
- Tipografía y peso mayor en la acción principal (CTA).
- Ícono persistente y alineación estable del botón para evitar “saltos” de layout.

---

## ✅ Pruebas manuales sugeridas
- Intentar agregar vacío/espacios → **rechazado**.
- Intentar duplicados → **rechazado**.
- Agregar 2, 3 y 4+ participantes → sorteo **válido** (nadie se asigna a sí mismo).
- Tras sortear, botón cambia a **Nuevo sorteo** → limpiar y re-habilitar flujo.
- Verificar tabla **Regala/Recibe** con asignaciones correctas.

---

## 🔭 Roadmap
- Eliminar participante individual desde la lista.
- Exportar resultado a PDF/CSV.
- Persistencia en `localStorage`.
- Modo “anónimo” (ocultar asignaciones, mostrar una por participante bajo demanda).

---

## 🧾 Changelog
- **v0**: HTML/CSS base del challenge.
- **v1**: Esqueleto JS y enlace DOM (inputs, botones, listas).
- **v2**: Validaciones (vacío, espacios, duplicados) y habilitado del botón según reglas.
- **v3**: Sorteo completo para N participantes (pares/impares) con algoritmo sin auto-asignación y **tabla Regala/Recibe**.
- **v4**: UX/UI — deshabilitado visible, CTA naranja, texto cambia a **“Nuevo sorteo”**, limpieza visual post-sorteo.
- **v5**: Ajustes visuales — centrado perfecto del texto del botón, tipografía/weight del CTA, icono persistente, espaciados de listas y correcciones menores.

---

## 🤝 Contribución
Sugerencias y PRs son bienvenidos:
1. Crea una rama: `git checkout -b feature/mi-mejora`
2. Commit: `git commit -m "feat: mi mejora"`
3. Push: `git push origin feature/mi-mejora`
4. Abre un Pull Request

---

## 👤 Autor
**Patricio Moreno** — *Programa Oracle Next Education*  
Portafolio GitHub: [@tysontecles](https://github.com/tysontecles)