
import _ from "underscore";
import { pedirCarta,crearDeck,acumularPuntos, crearCarta, turnoComputadora} from "./usecases";


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
    deck = crearDeck(tipos,especiales);
    console.log(deck);
    
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
 

  // eventos
  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta(deck);

    const puntosJugador = acumularPuntos(carta,0,puntosJugadores);

    const imgCarta=crearCarta(carta);
    divCartasJugador[0].append(imgCarta);

    if (puntosJugador > 21) {
      console.warn("Lo siento, has perdido");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador,deck,puntosJugadores,divCartasJugador);
    } else if (puntosJugador === 21) {
      console.warn("21, genial!");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador,deck,puntosJugadores,divCartasJugador);
    }
  });
  
  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0],deck,puntosJugadores,divCartasJugador);
  });

    btnNuevo.addEventListener('click',()=>{
      inicializarJuego();
  });

