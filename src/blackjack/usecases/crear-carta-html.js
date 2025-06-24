/**
 * Crea la carta en la pantalla
 * @param {String} carta String que identifica a una carta
 * @return {HTMLImageElement} retorna Nodo de imagen html
 */
export  const crearCarta = (carta) => {

    if(!carta )throw new Error('Carta es necesario.');
   
    const imgCarta = document.createElement("img");
    imgCarta.src = `./assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    return imgCarta;
  };
  