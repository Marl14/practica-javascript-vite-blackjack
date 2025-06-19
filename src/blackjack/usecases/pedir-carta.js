  /**
   * Esta funcion devuelve una carta del deck
   * @param {Array<String>} deck 
   * @returns {String} retorna una carta
   */
  
  export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) {
      throw new Error("No hay mas cartas en el deck") ;
    }
    return deck.pop();
  };