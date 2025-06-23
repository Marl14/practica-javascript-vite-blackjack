
export  const crearCarta = (carta, turno, divCartasJugador) => {

    if(!carta )throw new Error('Carta es necesario.');
    if(!turno )throw new Error('Turno es necesario.');
    if(!divCartasJugador )throw new Error('divCartasJugador es necesario.');
   
    const imgCarta = document.createElement("img");
    imgCarta.src = `./assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasJugador[turno].append(imgCarta);
  };
  