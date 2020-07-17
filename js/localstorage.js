let jugador = {
    nombre: 'Cristiano',
    apellidos: 'Ronaldo',
    goles: 0
}

let jugadorEnJson = JSON.stringify(jugador);
console.log(jugadorEnJson);

let nuevoJugador = JSON.parse(jugadorEnJson);
console.log(nuevoJugador);