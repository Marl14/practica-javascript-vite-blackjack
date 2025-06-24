import { acumularPuntos } from "./acumular-puntos";
import { crearCarta } from "./crear-carta-html";
import { determinarGanador } from "./determinar-ganador";
import { pedirCarta } from "./pedir-carta";

export const turnoComputadora = (puntosMinimos, deck=[],puntosJugadores,divCartasJugador) => {
    if(!puntosMinimos) throw new Error('Puntos mínimos es necesario.');

    let puntosComputadora = 0;
    do {
      const carta = pedirCarta(deck);

      puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1,puntosJugadores);

      const imgCarta=crearCarta(carta, puntosJugadores.length - 1);
      divCartasJugador[puntosJugadores.length - 1].append(imgCarta);

      if (puntosMinimos > 21) {
        break;
      }
    } while (puntosComputadora > puntosMinimos && puntosComputadora < 21);
    determinarGanador(puntosJugadores);
  };