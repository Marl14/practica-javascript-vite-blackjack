import { valorCarta } from "./valor-carta";

/**
 * Almacena los puntos de los jugadores y los muestra en pantalla
 * @param {String} carta String que describe la carta otorgada
 * @param {Number} turno Numero de jugador
 * @param {Array<Number>} puntosJugadores Arreglo que acumula los puntos
 * @returns {Number} Numero de puntos acumulado por el jugador
 */

 export const acumularPuntos = (carta, turno, puntosJugadores) => {
  
    if(!carta)throw new Error('La carta es necesaria');
    //if(!turno)throw new Error('El turno es necesario');
    if(!puntosJugadores || puntosJugadores.length ==0 )throw new Error('Los puntos son necesarios');

    const marcadores = document.querySelectorAll("small");

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    marcadores[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  };