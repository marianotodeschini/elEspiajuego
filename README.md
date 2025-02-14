Documentación - Juego "El Espía"
1. Introducción
"El Espía" es un juego de roles ocultos en el que los jugadores reciben una palabra secreta, excepto uno o dos espías que deben adivinarla. Durante el juego, los participantes conversan tratando de identificar a los espías antes de ser descubiertos. Al finalizar el tiempo, se realiza una votación para determinar quiénes creen que son los espías.

2. Estructura del Juego
El juego está desarrollado en HTML, CSS y JavaScript puro, sin frameworks adicionales, asegurando compatibilidad con cualquier navegador moderno.

📌 Flujo del juego:

Pantalla de inicio: Muestra el logo y un botón para iniciar.
Configuración: Se ingresan los nombres de los jugadores y se elige la cantidad de espías.
Reparto de roles: Cada jugador recibe su palabra secreta o el rol de espía.
Tiempo de conversación: Los jugadores conversan para descubrir a los espías.
Votación: Cada jugador vota quién cree que es el espía.
Resultados: Se revela el espía y se muestra si los jugadores acertaron.
3. Componentes del Juego
📌 HTML (index.html)
El archivo define la estructura del juego con varias pantallas dinámicas:

pantalla-inicial: Inicio con el logo y el botón "Jugar".
pantalla-juego: Configuración de jugadores y espías.
pantalla-reparto: Asigna los roles y muestra la palabra secreta.
pantalla-juego-activo: Indica el tiempo restante para la conversación.
pantalla-votacion: Pregunta a cada jugador quién es el espía.
pantalla-resultados: Muestra el espía y los resultados de la votación.
📌 CSS (styles.css)
Se encarga del diseño y presentación del juego:

Diseño responsivo: Se adapta a distintos dispositivos móviles y de escritorio.
Estilo limpio y moderno: Uso de colores neutros y tipografía clara.
Animaciones sutiles: Para transiciones entre pantallas.
📌 JavaScript (main.js)
La lógica del juego está contenida en este archivo:

Manejo de pantallas: Función mostrarPantalla(id) para cambiar entre secciones.
Gestión de jugadores:
agregarJugador(), eliminarJugador(), limpiarLista().
Asignación de roles:
iniciarJuego(): Asigna la palabra secreta y selecciona espías.
mostrarSiguienteJugador(), confirmarJugador(), siguienteJugador().
Temporizador:
iniciarTemporizador(): Cuenta regresiva hasta la votación.
Votación:
comenzarVotacion(), pedirVoto(), registrarVoto().
Resultados:
mostrarResultados(): Determina si los jugadores descubrieron al espía.
4. Requisitos Técnicos
Lenguajes utilizados:
HTML5
CSS3
JavaScript (Vanilla JS)
Compatibilidad:
Navegadores modernos: Chrome, Firefox, Edge, Safari.
Dispositivos: Móviles y escritorio.
Hosting recomendado:
GitHub Pages, Vercel o Netlify para publicación gratuita.
5. Instalación y Uso
Opción 1: Uso en Local
Descargar los archivos (index.html, styles.css, main.js).
Abrir index.html en un navegador.
Opción 2: Publicación Online
Subir los archivos a un hosting estático como GitHub Pages o Netlify.
Compartir la URL del juego con los jugadores.
6. Posibles Mejoras y Expansiones
💡 Futuras versiones podrían incluir:
✅ Soporte para más de 2 espías.
✅ Modo con tiempo configurable.
✅ Registro de partidas y puntuaciones.
✅ Animaciones más avanzadas y diseño personalizable.
✅ Versión en formato app móvil con React Native.

