🎁 Challenge Amigo Secreto

Aplicación desarrollada en JavaScript, HTML y CSS como parte del programa ONE – Oracle Next Education.
El objetivo principal fue practicar lógica de programación en un entorno que simula un flujo de trabajo real con Git y GitHub, integrando mejoras iterativas en distintas versiones del proyecto.

⸻

🚀 Funcionalidades principales
	•	Agregar nombres a una lista dinámica.
	•	Visualizar la lista de participantes.
	•	Realizar el sorteo del Amigo Secreto:
	•	Se generan automáticamente las parejas “Regala → Recibe”.
	•	Se garantiza que nadie se asigne a sí mismo.
	•	Funciona con listas pares o impares de participantes.
	•	Botón dinámico:
	•	Deshabilitado al inicio (gris).
	•	Habilitado al añadir participantes (naranja).
	•	Cambia a “Nuevo sorteo” tras ejecutar un sorteo.
	•	UI mejorada:
	•	Botones con jerarquía visual clara (tipografía, color y estados).
	•	Resultados organizados en una tabla de dos columnas (“Regala” / “Recibe”).
	•	Accesibilidad con etiquetas aria y feedback visual consistente.

⸻

🛠️ Tecnologías utilizadas
	•	HTML5 → Estructura base de la aplicación.
	•	CSS3 → Estilos con enfoque en accesibilidad y jerarquía visual (colores, tipografía, estados).
	•	JavaScript (ES6+) → Lógica de negocio: funciones, arrays, condicionales, loops y manipulación del DOM.
	•	Git & GitHub → Control de versiones, ramas por funcionalidad y Pull Requests simulando flujo de equipo.

⸻

📂 Flujo de trabajo y buenas prácticas aplicadas

Este proyecto se gestionó simulando un entorno laboral real:
	1.	Versión inicial: estructura del proyecto con HTML y CSS provistos.
	2.	Branchs por feature: cada mejora (v1, v2, v3, v4, v5) se desarrolló en ramas independientes (logica-js-vX).
	3.	Pull Requests (PRs): cada cambio fue revisado y fusionado con la rama main simulando un ciclo de code review.
	4.	Commits semánticos siguiendo convención Conventional Commits (ej: feat(js): versión funcional v1).
	5.	UI/UX: mejoras graduales para mostrar un enfoque de diseño iterativo:
	•	v3: resultado de sorteo en tabla de dos columnas.
	•	v4: botones con estados (activo/inactivo) y feedback visual.
	•	v5: correcciones de layout y centrado tipográfico en el botón principal.

⸻

📖 Changelog

v1 – Lógica inicial
	•	Agregar y listar participantes.
	•	Sorteo básico sin repetición.

v2 – Condiciones iniciales
	•	Validación mínima de cantidad de participantes antes de sortear.

v3 – Mejora en experiencia de sorteo
	•	Implementación de lista completa de resultados.
	•	Presentación en dos columnas: “Regala” y “Recibe”.

v4 – Interactividad y estados de botones
	•	Botón de sorteo deshabilitado (gris) hasta tener participantes.
	•	Cambio dinámico a “Nuevo sorteo”.
	•	Reinicio automático de listas tras un nuevo sorteo.

v5 – Correcciones de UI/UX
	•	Botón principal centrado y con tipografía destacada.
	•	Icono de play persistente en todas las interacciones.
	•	Ajustes de layout y listas para mejor legibilidad.

⸻

🤝 Contribución y aprendizaje

Este challenge se utilizó como entrenamiento en lógica de programación y simulación de flujo de equipo, aplicando control de versiones y documentación.
Es un ejemplo de cómo incluso un proyecto simple puede gestionarse con buenas prácticas profesionales, destacando la importancia de la iteración continua y la claridad en la experiencia de usuario.

⸻

📌 Estado del proyecto

✅ Completo – Entregado como parte del programa ONE, con mejoras adicionales en UI/UX más allá del enunciado original.

⸻

📄 Licencia

Este proyecto se desarrolló con fines educativos como parte del programa ONE – Oracle Next Education.

⸻