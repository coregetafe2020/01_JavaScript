/* Estructuras de control */

// Estructura condicional if

// if (condición) {
    // código a ejecutar si se cumple la condición
// }

let nombre = "Laura";
let edad = 20;
let mayorEdad;

if (edad >= 18 && nombre !== undefined) {
    mayorEdad = true;
    console.log(nombre + ' es mayor de edad');
}

if (mayorEdad)
    console.log('Es mayor de edad'); // No se suele emplear el alivio de las llaves

// Estructura condicional if else 

// if (condición) {
    // código a ejecutar si se cumple la condición
// } else {
    // código a ejecutar si no se cumple la condición
// }

let a = 10;
let b = 20;

if (a > b) {
    console.log('a es mayor que b');
} else {
    console.log('a es menor o igual que b');
}

// Estructura if else if else

// if (condición1) {
    // código a ejecutar si se cumple la condición1
// } else if (condición2) {
    // código a ejecutar si se cumple la condición2
// } else {
    // código a ejecutar si no se cumple ninguna de las condiciones
// }

if (a > b) {
    console.log('a es mayor que b');
} else if (a === b) {
    console.log('a es igual a b');
} else {
    console.log('a es menor que b');
}

// Las estructuras if else se pueden anidar

// Estructuras condicionales switch

// switch (expresión) {
    // case valor1:
        // código a ejecutar
        // break
    // case valor2:
        // código a ejecutar
        // break
    // ...
    // default
        // código a ejecutar en caso de no coincidencia
// }

let diaSemana = 2;

switch (diaSemana) {
    case 1:
       console.log('Lunes');
       break;
    case 2:
       console.log('Martes');
       break;
    case 3:
       console.log('Miércoles');
       break;
    case 4:
       console.log('Jueves');
       break;
    case 5:
       console.log('Viernes');
       break;
    case 6:
       console.log('Sábado');
       break;
    case 7:
       console.log('Domingo');
       break;
    default:
        console.log('Día erróneo');
}

let mes = 4;

switch (mes) {
    case 1:
    case 2:
    case 3:
        console.log('1er Trimestre');
        break;
    case 4:
    case 5:
    case 6:
        console.log('2º Trimestre');
        break;
    case 7:
    case 8:
    case 9:
        console.log('3er Trimestre');
        break;
    case 10:
    case 11:
    case 12:
        console.log('4º Trimestre');
        break;
    default:
        console.log('Mes erróneo');
}

// Estructura iterativa For

// for (valor inicial; condición; actualización) {
//    código a ejecutar mientras se cumpla la condición
// }

for (i = 0; i < 10; i++) {
    console.log('En cada iteración i tendrá el valor ' + i);
}


// Otro ejemplazo de for All credits to Jose María de Bona

let password;
let contador = 1;
for (password = prompt("Escribe tu contraseña");
     password !== "1234";
     password = prompt("Contraseña no válida, intente de nuevo")) {
        contador++;
}

alert("Contraseña correcta. Intentos: " + contador)

// Estructura iterativa While

// while (condicion) {
    // código a ejecutar mientras se cumpla esa condición
// }

// let password;

// while (password !== '1234') {
//     password = prompt('Escriba su contraseña');
// }

// Estructura iterativa do while

// do {
//     código a ejecutar mientras se cumpla la condición   
// } while (condición)

do {
    password = prompt('Escriba su contraseña');
} while (password !== '1234');