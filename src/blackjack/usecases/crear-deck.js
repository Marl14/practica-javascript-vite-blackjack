 import _ from "underscore";

 /**
  * Esta funcion crea un nuevo deck
  * @param {Array<String>} tipoDeCartas Ejemplo: ["H", "S", "C", "D"]
  * @param {Array<String>} tiposEspeciales Ejemplo: ["A", "J", "Q", "K"]
  * @returns {Array<String>} retorna un nuevo deck de cartas
  */
 export const crearDeck = (tipoDeCartas,tiposEspeciales) => {
    if(!tipoDeCartas || tipoDeCartas.length===0) 
      throw new Error('TipoDeCarta es obligatorio como un arreglo de string');
    if(!tiposEspeciales ||tiposEspeciales.length===0) 
      throw new Error('TipoEspeciales es obligatorio como un arreglo de string');
    let deck = [];
    for (let i = 2; i <= 10; i++) {
      for (const tipo of tipoDeCartas) {
        deck.push(i + tipo);
      }
    }
    for (const tipo of tipoDeCartas) {
      for (const esp of tiposEspeciales) {
        deck.push(esp + tipo);
      }
    }
    return _.shuffle(deck);
  };