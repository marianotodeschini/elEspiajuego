let jugadores = [];
let palabraSecreta = "";
let espias = [];
let jugadorActual = 0;
let votos = {};
let indexVotacion = 0;

function mostrarPantalla(id) {
    document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('visible'));
    document.getElementById(id).classList.add('visible');
}

function agregarJugador() {
    let nombre = document.getElementById("nombre-jugador").value;
    if (nombre.trim() !== "") {
        jugadores.push(nombre);
        actualizarLista();
        document.getElementById("nombre-jugador").value = "";
    }
}

function actualizarLista() {
    let lista = document.getElementById("lista-jugadores");
    lista.innerHTML = "";
    jugadores.forEach((jugador, index) => {
        let li = document.createElement("li");
        li.textContent = jugador;
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.classList.add("eliminar");
        btnEliminar.onclick = () => eliminarJugador(index);
        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

function eliminarJugador(index) {
    jugadores.splice(index, 1);
    actualizarLista();
}

function limpiarLista() {
    jugadores = [];
    actualizarLista();
}

function iniciarJuego() {
    if (jugadores.length < 3) {
        alert("Debe haber al menos 3 jugadores.");
        return;
    }

    let numEspias = parseInt(document.getElementById("cantidad-espias").value);
    palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
    
    espias = [];
    while (espias.length < numEspias) {
        let posibleEspia = jugadores[Math.floor(Math.random() * jugadores.length)];
        if (!espias.includes(posibleEspia)) {
            espias.push(posibleEspia);
        }
    }

    jugadorActual = 0;
    mostrarPantalla('pantalla-reparto');
    mostrarSiguienteJugador();
}

function mostrarSiguienteJugador() {
    if (jugadorActual < jugadores.length) {
        document.getElementById("mensaje-reparto").textContent = `Pasar el celular a ${jugadores[jugadorActual]}`;
        document.getElementById("btn-confirmar").style.display = "block";
        document.getElementById("palabra-secreta").style.display = "none";
        document.getElementById("btn-siguiente").style.display = "none";
    } else {
        mostrarPantalla("pantalla-juego-activo");
        iniciarTemporizador();
    }
}

function confirmarJugador() {
    let jugador = jugadores[jugadorActual];
    document.getElementById("mensaje-reparto").textContent = "Mira tu rol y presiona siguiente";
    document.getElementById("palabra-secreta").textContent = espias.includes(jugador) ? "Eres el ESPÍA" : `Palabra: ${palabraSecreta}`;
    document.getElementById("palabra-secreta").style.display = "block";
    document.getElementById("btn-confirmar").style.display = "none";
    document.getElementById("btn-siguiente").style.display = "block";
}

function siguienteJugador() {
    jugadorActual++;
    mostrarSiguienteJugador();
}

function iniciarTemporizador() {
    let tiempo = 60;
    let timer = setInterval(() => {
        document.getElementById("temporizador").textContent = `Tiempo restante: ${tiempo} segundos`;
        tiempo--;
        if (tiempo < 0) {
            clearInterval(timer);
            comenzarVotacion();
        }
    }, 1000);
}

function comenzarVotacion() {
    votos = {};
    indexVotacion = 0;
    mostrarPantalla("pantalla-votacion");
    pedirVoto();
}

function pedirVoto() {
    if (indexVotacion < jugadores.length) {
        document.getElementById("mensaje-votacion").textContent = `${jugadores[indexVotacion]}, elige al espía`;
        let select = document.getElementById("voto-jugador");
        select.innerHTML = "";
        jugadores.forEach(jugador => {
            let option = document.createElement("option");
            option.value = jugador;
            option.textContent = jugador;
            select.appendChild(option);
        });
    } else {
        mostrarResultados();
    }
}

function registrarVoto() {
    let voto = document.getElementById("voto-jugador").value;
    votos[voto] = (votos[voto] || 0) + 1;
    indexVotacion++;
    pedirVoto();
}

function mostrarResultados() {
    let ganador = Object.keys(votos).reduce((a, b) => votos[a] > votos[b] ? a : b);
    let mensaje = espias.includes(ganador) ? `¡Adivinaron! ${ganador} era el espía.` : `Fallaron, el espía era ${espias.join(", ")}.`;
    document.getElementById("resultado-final").textContent = mensaje;
    mostrarPantalla("pantalla-resultados");
}
