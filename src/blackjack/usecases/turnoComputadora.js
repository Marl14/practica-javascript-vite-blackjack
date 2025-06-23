import { pedirCarta } from "./pedir-carta";

export const turnoComputadora = (puntosMinimos, deck=[]) => {
    if(!puntosMinimos) throw new Error('Puntos mínimos es necesario.');

    let puntosComputadora = 0;
    do {
      const carta = pedirCarta(deck);

      puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);

      crearCarta(carta, puntosJugadores.length - 1);

      if (puntosMinimos > 21) {
        break;
      }
    } while (puntosComputadora > puntosMinimos && puntosComputadora < 21);
    determinarGanador();
  };