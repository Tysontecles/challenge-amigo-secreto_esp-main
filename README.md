# 🎁 Challenge Amigo Secreto

Este proyecto forma parte del programa **One Oracle Next Education (ONE)** y tiene como objetivo practicar lógica de programación utilizando **JavaScript**.  
La interfaz y estilos ya estaban predefinidos (HTML y CSS), por lo que el foco estuvo en el desarrollo de la lógica del juego en `app.js`.

---

## 🚀 Funcionalidades principales
- Agregar participantes a una lista dinámica.
- Validación de entradas (no permite nombres vacíos ni duplicados).
- Visualización en pantalla de la lista de amigos agregados.
- Sorteo automático de "Amigo Secreto", generando una tabla de asignaciones:
  - Cada persona regala a otra distinta de sí misma.
  - Todos dan y todos reciben un regalo.
- Botones dinámicos:
  - **Sortear amigo** se habilita solo cuando hay al menos 2 participantes.
  - Tras un sorteo exitoso cambia a **Nuevo sorteo**, limpia resultados y permite volver a jugar.

---

## 🎨 Mejoras de UI/UX
- Botones con estados visuales claros:  
  - Activos en **naranja**.  
  - Deshabilitados en **gris**.  
- Tipografía y tamaños jerarquizados: el botón de sorteo es más grande y en negrita para destacar la acción principal.
- Listas organizadas en dos columnas: **Regala** y **Recibe**, simulando un cuadro de asignaciones.
- Mensajes claros de error o validación para mejorar la experiencia de usuario.

---

## 📸 Capturas de pantalla
![Estado inicial (botón deshabilitado)](assets/captura-inicial.png)
![Lista con participantes](assets/captura-lista.png)
![Resultado del sorteo (tabla)](assets/captura-resultado.png)

---

## 🛠️ Tecnologías utilizadas
- **HTML5**: estructura base.  
- **CSS3**: estilos y diseño responsivo.  
- **JavaScript (ES6)**: lógica del juego (arrays, funciones, condicionales, DOM).  
- **Git & GitHub**: control de versiones y portafolio profesional.

---

## 📂 Estructura del proyecto
```
challenge-amigo-secreto_esp-main/
│── assets/              # Imágenes y recursos
│── index.html           # Página principal
│── style.css            # Estilos del proyecto
│── app.js               # Lógica en JavaScript
│── README.md            # Documentación del proyecto
```

---

## 📈 Changelog

### v1.0.0
- Creación del repositorio con archivos base (HTML + CSS).

### v2.0.0
- Se agregó la lógica inicial en `app.js`:
  - Añadir amigos a la lista.
  - Evitar nombres vacíos.

### v3.0.0
- Implementación del sorteo automático mostrando resultados en dos columnas.

### v4.0.0
- Mejora de UI/UX:
  - Botones dinámicos con estados (habilitado/deshabilitado).
  - Cambio de texto dinámico en botón de sorteo.

### v5.0.0
- Correcciones visuales y de usabilidad:
  - Alineación y tipografía de botones.  
  - Mantenimiento del ícono en el botón de sorteo.  
  - Limpieza automática de listas al iniciar un nuevo sorteo.

---

## 👨‍💻 Autor
**Patricio Moreno Brevis**  
[GitHub @tysontecles](https://github.com/tysontecles)

---

## 📜 Licencia
Este proyecto es de uso educativo y forma parte del programa **Oracle ONE - Alura Latam**.
