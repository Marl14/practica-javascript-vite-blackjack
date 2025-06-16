 import _ from "underscore";

 export const crearDeck = (tipoDeCartas,tiposEspeciales) => {
    deck = [];
    for (let i = 2; i <= 10; i++) {
      for (const tipo of tipoDeCartas) {
        deck.push(i + tipoDeCartas);
      }
    }
    for (const tipo of tipoDeCartas) {
      for (const esp of tiposEspeciales) {
        deck.push(esp + tipo);
      }
    }
    return _.shuffle(deck);
  };