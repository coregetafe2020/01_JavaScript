/* Objetos en JavaScript */

// 1ª Forma de declara objetos mediante literal
// {
//     propiedad1: valor,
//     propiedad2: valor,
//     ...
//     metodo() {
//        //
//     }
//  }   

let jugador1 = {
    nombre: 'Cristiano Ronaldo',
    apellidos: 'Dos Santos Aveiro',
    dorsal: '7',
    goles: 0,
    equipos: ['Real Madrid','Manchester United'],
    marcarGol() {
        this.goles++;
    }
}

// Acceso a objetos con notación del punto

console.log(jugador1.nombre);
console.log(jugador1.equipos[0]);

jugador1.dorsal = '9';
jugador1.balonesOro = 5;
jugador1.marcarGol();

console.log(jugador1);