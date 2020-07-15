// Arrays

// let identificador = [elemento1, elemento2, ...];
// let identificador = new Array(elemento1, elemento2, ...);

let frutas = ['pera','manzana','naranja']; // permite elementos de cualquier tipo

console.log(frutas);

// Indexación a 0
// Acceso a elementos emplea la sintaxis identificador[i]

let frutaSeleccionada = frutas[1];

console.log(frutaSeleccionada);

// Es muy común usar arrays de objetos

let participantes = [
    {nombre: "Juan", apellidos: "López"},
    {nombre: "Laura", apellidos: "Peŕez"}
];

console.table(participantes[0]);