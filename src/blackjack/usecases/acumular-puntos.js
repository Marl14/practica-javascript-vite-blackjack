import { valorCarta } from "./valor-carta";


 export const acumularPuntos = (carta, turno, puntosJugadores) => {
    if()throw new Error('')
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    marcadores[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  };