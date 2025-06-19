  /**
   * Esta funcion devulve el valor del puntaje de la carta
   * @param {String} carta 
   * @returns {Number} Puntaje de la carta
   */
  
  
  export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);

    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
  };