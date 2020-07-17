// Objeto JSON para parseo

let jugador = {
    nombre: 'Cristiano',
    apellidos: 'Ronaldo',
    goles: 0
}

let jugadorEnJson = JSON.stringify(jugador);
console.log(jugadorEnJson);

let nuevoJugador = JSON.parse(jugadorEnJson);
console.log(nuevoJugador);

// localStorage de navegadores

let participantes = [
    {nombre: "Juan", apellidos: "López"},
    {nombre: "Laura", apellidos: "Peŕez"}
];

localStorage.setItem('participantes', JSON.stringify(participantes));

let nuevosParticipantes = JSON.parse(localStorage.getItem('participantes'));
console.log(nuevosParticipantes);

// localStorage.removeItem('participantes');