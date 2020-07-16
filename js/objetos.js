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

// 2ª Forma de declarar objetos con new Object

// new Object()

let jugador2 = new Object(); // Establece el tipo de dato como objeto
jugador2.nombre = 'Lionel';
jugador2.apellidos = 'Messi';
jugador2.dorsal = '10';
jugador2.goles = 0;
jugador2.marcarGol = function () {
    this.goles++;
}

jugador2.marcarGol();
console.log(jugador2);

// 3ª Forma de declarar objetos con función constructora

// function Identificador (parámetros) {
//    código para instanciar el objeto con this
// }

function Jugador(nombre, apellidos, dorsal, goles) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.dorsal = dorsal;
    this.goles = goles;

    this.marcarGol = function () {
        this.goles++;
        alert('¡Gol de ' + this.nombre + ' ' + this.apellidos + '!');
    }
}

let jugador3 = new Jugador('Sergio', 'Ramos', '4', 0);
let jugador4 = new Jugador('Julio', 'Iglesias', '1', 0);

// jugador3.marcarGol();

// 4ª Forma de declarar objetos mediante Clases (ECMAScript 6 2015)

class Vehiculo {
    marca;
    modelo;
    color;
    stock = 10;

    constructor(marca, modelo, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        let precio;
        this.setPrecio = valor =>  precio = valor;
        this.getPrecio = _ => precio;  // All credits to Eduardo
    }

    ventaVehiculo() {
        this.stock--;
    }

    cambioColor(color) {
        this.color = color;
    }
}

let vehiculo1 = new Vehiculo('Renault', 'Megane', 'Rojo');
vehiculo1.ventaVehiculo();
vehiculo1.cambioColor('Rojo');

vehiculo1.setPrecio(15000);

console.log(vehiculo1.getPrecio());
console.log(vehiculo1);

