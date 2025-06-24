/**
 * Muestra un mensaje con los resultados de la partida
 * @param {Array<Number>} puntosJugadores 
 */

export const determinarGanador = (puntosJugadores) => {
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