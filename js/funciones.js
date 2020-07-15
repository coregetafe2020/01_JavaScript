// Sintaxis de declaración

// function nombreFuncion (paramétros) {
        // código que ejecuta la función
        // return lo que devuelva
// }

function suma (a, b) {
    console.log(a + b);
}

function multiplicacion (a, b) {
    let c = a * b;
    return c;
}

// Sintaxis de invocación 

// nombreFuncion(argumentos)

suma(4,6);

let resultado;

resultado = multiplicacion(2,3);
console.log(resultado);

// Funciones anónimas

let cuadrado = function (a) {
    return a * a;
}

console.log(cuadrado(3));

setTimeout(function () {
    console.log('Hola a los 5 segundos');
}, 5000) // Método propio de JavaScript para el retardo de la ejecución de un bloque de código

// Funciones flecha ECMAScript 6 (2015)

// let cubo = (a) => {
//     return a * a * a;
// }

let cubo = a => a * a * a;

console.log(cubo(10));

setTimeout(() => {
    console.log('Hola a los 5 segundos ');
}, 5000)

// Callbacks JavaScript permite introducir funciones como argumentos

let segundos = 10;

function cuentaAtras(mostrarReloj) {
    setInterval(function () {
        if (segundos > 0) {
            --segundos;
            mostrarReloj(segundos);
        }
    }, 1000)
}

function tiempoSegundos(s) {
    console.log(s);
}

function tiempoMilisegundos(s) {
    console.log(s * 1000);
}

cuentaAtras(tiempoMilisegundos); // Pasamos como argumento el nombre de la función que queremos ejecutar


// Ámbito de las variables y constantes

// Ámbito de las variables declaradas con var
// es el de la función más próxima

var apellidos = "López"; // ámbito global

function mayorEdad(edad) {
    if (edad >= 18) {
        var adulto = true;
    } else {
        var adulto = false;
    }
    console.log(adulto);
    var nombre = 'Juan';
    console.log(apellidos);
}

mayorEdad(40);
// console.log(nombre); error nombre queda en el ámbito de la función mayorEdad

// Ámbito de las variables declaradas con let
// será el del bloque de código más próximo

function setPuntuacion(puntuacion) {
    if (puntuacion >= 5) {
        let apto = true;
    } else {
        let apto = false;
        console.log(apto);
    }
    // console.log(apto); error
}


setPuntuacion(3);

// Variables globales

function triangulo(a, b) {
    area = 0.5 * a * b;
}

triangulo(2,4);
console.log(area);