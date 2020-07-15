/* Este programita
nos sirve para aprender JavaScript */


// La siguiente instrucción va a pintar en consola un mensaje

console.log("¡Hola Universo!"); // esta línea es provisional

// Declaración de variables con la palabra reservada var

var edad;

// Inicialización de la variable (usa el operador de asignación =)

edad = 40;

console.log(edad);

edad = 37;

// Declarar e inicializar una variable al mismo tiempo;

var localidad = 'Getafe';

console.log(edad);

// Declaración de varias variables al mismo tiempo

var email, telefono, codigoPostal;

// ECMAScript 6 (2015) nueva palabra para declarar let

let primerApellido; // Implementa es el ámbito a nivel de bloque de código

primerApellido = "Pérez";

// Declaración como variable global (sin palabra reservada)

segundoApellido = "Pérez"; // Es imprescindible inicializar

console.log(segundoApellido);

// Declaración e incialización de constantes ECMAScript 6 (2015)

const urlPedidos = "https://176.98.4.1:443";

// urlPedidos = "https://192.45.6.78:300"; No se puede modificar posteriormente su valor

var nombre = "María";

document.getElementById("usuario").innerHTML = nombre;


/* TIPOS DE DATOS */

// string o cadenas de caracteres alfanuméricos

let ciudad = 'Villa de \n Madrid'; // Comillas simples

let calle = 'O\'Donell';

console.log(ciudad, calle);

// number o números

let resultado = 8.6;

// boolean

let mayorEdad = true; // true o false

// Undefined tipo-valor asignado cuando la variable aún no ha sido inicializada

let categoria;

console.log(categoria);

// Null tipo-valor

categoria = null; 

// Object

// Tanto objetos como arrays

// Operador typeof nos devuelve el tipo de dato de una variable (en ese momento)

console.log(typeof resultado);

// Particularidad de JavaScript los tipos primitivos son también objetos.

console.log(nombre.length);