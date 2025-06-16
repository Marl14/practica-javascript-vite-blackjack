
import _ from "underscore";
import { crearDeck } from "./usecases/crear-deck";

const miModulo = (() => {
  "use strict";

  let deck = [];
  const tipos = ["H", "S", "C", "D"];
  const especiales = ["A", "J", "Q", "K"];
  let puntosJugadores = [];

  //html
  const btnPedir = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnDetener"),
    btnNuevo = document.querySelector("#btnNuevo");

  const marcadores = document.querySelectorAll("small"),
    divCartasJugador = document.querySelectorAll(".divCartas");

  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck();
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
      console.log({ puntosJugadores });
    }

    marcadores.forEach((elem) => (elem.innerText = 0));
    divCartasJugador.forEach((elem) => (elem.innerHTML = ""));

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };
 

  const pedirCarta = () => {
    if (deck.length === 0) {
      throw "No hay mas cartas en el deck";
    }
    return deck.pop();
  };

  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    marcadores[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  };

  const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasJugador[turno].append(imgCarta);
  };
  const turnoComputadora = (puntosMinimos) => {
    let puntosComputadora = 0;
    do {
      const carta = pedirCarta();

      puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);

      crearCarta(carta, puntosJugadores.length - 1);

      if (puntosMinimos > 21) {
        break;
      }
    } while (puntosComputadora > puntosMinimos && puntosComputadora < 21);
    determinarGanador();
  };
  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);

    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
  };

  // eventos
  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta();

    const puntosJugador = acumularPuntos(carta, 0);

    crearCarta(carta, 0);

    if (puntosJugador > 21) {
      console.warn("Lo siento, has perdido");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      console.warn("21, genial!");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    }
  });
  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0]);
  });

  const determinarGanador = () => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => {
      if (puntosMinimos > 21) {
        alert("Lo siento, has perdido");
      } else if (puntosComputadora > 21) {
        alert("Felicidades, has ganado");
      } else if (puntosMinimos === puntosComputadora) {
        alert("Nadie gana, es un empate");
      } else if (puntosMinimos < puntosComputadora) {
        alert("Lo siento, has perdido");
      } else {
        alert("Felicidades, has ganado");
      }
    }, 1000);
  };

  /*  btnNuevo.addEventListener('click',()=>{
        inicializarJuego();
    
    }); */

  return {
    nuevoJuego: inicializarJuego,
  };
})();

export default miModulo;
