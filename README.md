# 🎁 Challenge Amigo Secreto

Aplicación desarrollada en **JavaScript, HTML y CSS** como parte del programa **ONE – Oracle Next Education**.  
El objetivo fue practicar **lógica de programación** en un flujo que simula trabajo real con **Git/GitHub**, versiones y *pull requests*, incorporando mejoras iterativas de **UX/UI**.

---

## 🚀 Funcionalidades principales
- **Agregar participantes** a una lista dinámica.
- **Listar participantes** en orden de ingreso (formato enumerado).
- **Sorteo de Amigo Secreto** en **una sola acción**: se generan automáticamente las parejas **“Regala → Recibe”**.
  - Se garantiza que **nadie se asigne a sí mismo** y que todos **den y reciban** un regalo (maneja **pares e impares**).
- **Botón de acción con estados**:
  - **Deshabilitado** al inicio (gris, sin hover).
  - **Habilitado** al tener ≥ 2 participantes (naranja, énfasis tipográfico).
  - Cambia de **“Sortear amigo” → “Nuevo sorteo”** tras ejecutar el sorteo.
- **Resultados claros** en **dos columnas** (“Regala” / “Recibe”) con alineación y legibilidad mejoradas.
- **Mensajería de feedback** (positivo/errores) para una experiencia guiada.
- **Accesibilidad**: etiquetas ARIA, foco controlado y jerarquía visual.

---

## 🧠 Lógica del sorteo (visión técnica)
- Se construye una **permutación** del arreglo `amigos` y se corrige si aparece algún **punto fijo** (caso autoasignado), garantizando un **derangement** práctico para la lista.
- Para listas **impares**, la permutación sigue siendo válida: todos quedarán asignados **a otra persona** (se forma un ciclo).

---

## 🛠️ Tecnologías
- **HTML5** – Estructura y semántica.
- **CSS3** – Estilos, layout, estados y accesibilidad visual.
- **JavaScript (ES6+)** – Lógica de negocio (funciones, arrays, condicionales, DOM).
- **Git & GitHub** – Control de versiones, ramas por funcionalidad y *Pull Requests*.

---

## ▶️ Cómo ejecutar el proyecto (local)
1. Clona el repositorio:
   ```bash
   git clone git@github.com:tysontecles/challenge-amigo-secreto_esp-main.git
   cd challenge-amigo-secreto_esp-main
   ```
2. Abre `index.html` en tu navegador (o usa Live Server en VS Code).
3. Interactúa: ingresa nombres, presiona **Añadir**, y luego **Sortear amigo**.

---

## 🧭 Flujo de trabajo aplicado (simulación entorno laboral)
- **Branches por feature**: cada versión (`logica-js-v1`…`logica-js-v5`) se desarrolló aislada y se integró vía **Pull Request** a `main`.
- **Commits semánticos** (conventional commits):
  - `feat(js):` nuevas funciones de lógica
  - `fix(ui):` ajustes visuales
  - `refactor:` mejoras internas sin cambiar comportamiento
- **Code review**: cada PR se describió con **objetivo, alcance y pruebas**.

---

## 📦 Estructura de archivos
```
.
├─ assets/
│  ├─ amigo-secreto.png
│  └─ play_circle_outline.png
├─ index.html
├─ style.css
└─ app.js
```

---

## 📸 Capturas de pantalla (opcional)
> Coloca tus imágenes en `assets/` y actualiza las rutas.

| Vista | Imagen |
|---|---|
| Estado inicial (botón deshabilitado) | `assets/captura-inicial.png` |
| Lista con participantes | `assets/captura-lista.png` |
| Resultado del sorteo (tabla) | `assets/captura-resultado.png` |

---

## 🗒️ CHANGELOG

> Resumen de cambios por versión (ramas `logica-js-vX`).

### v1 — Estructura base del proyecto
- **HTML/CSS** provistos por el challenge, se conectó `app.js` y se armó el **esqueleto JS**:
  - Estado (`amigos`), **selectores** de DOM y **helpers**: `renderLista()`, `renderResultados()`, `toggleSorteo()`, `limpiarMensajes()`.
  - *Stubs* de control: `agregarAmigo()`, `sortearAmigo()`.
- Configuración mínima de accesibilidad y estilos iniciales.

### v2 — Primera versión funcional
- **Validaciones de entrada**: trim, evitar vacíos y **duplicados** (normalización básica).
- **Listado** de participantes con numeración.
- **Habilitar/Deshabilitar** el botón de sorteo según cantidad (≥ 2).
- **Mensajes de feedback** ante errores y confirmaciones.

### v3 — Sorteo completo (pares e impares) + tabla de resultados
- Implementación de **permutación sin autoasignación** (derangement práctico).
- Soporte a **listas impares o pares**: todos **dan** y **reciben**.
- Render en **dos columnas** (“Regala” / “Recibe”).
- Botón cambia a **“Nuevo sorteo”** y permite **reiniciar** resultados sin perder la lista.

### v4 — UX/UI y accesibilidad
- **Estados visuales** del botón (gris deshabilitado / naranja habilitado), **tipografía** más grande y **negrita** para la acción principal.
- **Icono** de “play” estable en todos los estados; texto **centrado** de forma consistente.
- **Reset** visual al “Nuevo sorteo”: limpia resultados y restaura estados.
- Ajustes ARIA y foco para una interacción clara.

### v5 — Pulido final
- Espaciado, alineación y **legibilidad** del listado y de la tabla.
- Normalización de texto (**tildes/acentos** y **casing**) para evitar duplicados “disfrazados”.
- Simplificación de helpers y comentarios de código para mejor **mantenibilidad**.

---

## 🧪 Pruebas manuales sugeridas
- Agregar 1, 2 y 3+ participantes (con y sin tildes / espacios) y validar los **mensajes**.
- Ejecutar sorteos consecutivos y usar **Nuevo sorteo**.
- Verificar que **nadie se asigna a sí mismo** y que **todos** tienen pareja.
- Revisar estados del botón (deshabilitado/habilitado) y visuales en **mobile**.

---

## 🤝 Contribución
1. Crea una rama desde `main`: `git checkout -b feature/tu-mejora`  
2. Haz cambios con commits claros (convención semántica).  
3. Abre un **Pull Request** describiendo objetivo y pruebas.

---

## 📝 Licencia
Este proyecto se comparte para fines educativos dentro del programa **ONE**.  
Puedes usarlo como base para tus estudios, atribuyendo su origen.

---

**Autor:** [@tysontecles](https://github.com/tysontecles) · #IAenAlura · #OracleONE

