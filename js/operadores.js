/*  Operadores Aritméticos */

// + - * /

let puntuacion = .96 * 100;

console.log(puntuacion);

let mensaje = "La puntuación es ";

console.log(mensaje + puntuacion);

let total = mensaje * puntuacion; // devuelve NaN not a number

// console.log(total);

let resultado = "12";
let resultado2 = "20";

console.log(resultado + resultado2);

// Negación unaria

let resultado3 = 6;

let resultado4 = -resultado3;

console.log(resultado4);

// Unario positivo

let mayorEdad = true;

console.log(+mayorEdad);

// Resto %

let resultado5 = 13 % 2;

console.log(resultado5);

// Incremento ++ (suma una unidad al valor de la variable)

let resultado6 = 5;

resultado6++;

console.log(resultado6);

// Pre-incremento

let resultado7 = 10;

console.log(resultado7++);
console.log(resultado7);

let resultado8 = 20;

console.log(++resultado8);
console.log(resultado8);

// Decremento -- (resta una unidad al valor de la variable)

// Idem incremento

// Exponenciación ** ECMA6

let resultado9 = 2 ** 3;

console.log(resultado9);

// Precedencia de operaciones

// De izquierda a derecha y las mismas precedencias que en
// operaciones matemáticas
// La precedencia se rompe con paréntesis

let resultado10 = (12 + 3) * 8;

console.log(resultado10);

/* Operadores de asignación */

// Asignación simple =

let resultado11 = 20;

// Asignación de adicción +=

let resultado12 = 10;

console.log(resultado11 += resultado12); // resultado11 = resultado11 + resultado12;

// Asignación de resta -=
//     "      de multiplicación *=
//     "      de división /=
//     "      de resto %=
//     "      de exponenciación **=      x **= y;   x = x ** y;


/* Operadores de comparación */

// Igualdad ==

let ciudad = 'Getafe';
let termino = 'Getafe';

let existeCoincidencia = ciudad == termino;

console.log(existeCoincidencia);

let password = '1234';
let rePassword = 1234;

let checkPassword = password == rePassword;

console.log(checkPassword);

// Igualdad estricta === (Comprueba tanto valores como tipos)

checkPassword = password === rePassword;

console.log(checkPassword);

// Desigualdad !=

// Desigualdad estricta !==

// Mayor que >

const minimaPuntuacion = 50;
let puntuacion2 = 80;

let superado = puntuacion2 > minimaPuntuacion;

console.log(superado);

// Mayor o igual >=

puntuacion2 = 50;
superado = puntuacion2 >= minimaPuntuacion;

console.log(superado);

// Menor <

// Menor o igual <= (Comprueba lexicográficamente Símbolos, Números, Mayúsculas, Minúsculas)

let nombre1 = 'Pepe';
let nombre2 = 'Luis';

console.log(nombre1 < nombre2);

/* Operadores lógicos */

// And lógico &&

let valor1 = 12;
let valor2 = 14;
let valor3 = 12;

resultado = valor2 > valor1 && valor1 !== valor3;
console.log(resultado);

// Or lógico ||  

resultado = valor2 > valor1 || valor1 !== valor3;
console.log(resultado);


// Not lógico !

mayorEdad = false;

mayorEdad = !mayorEdad;

console.log(!mayorEdad);

// Operador condicional (ternario)

// expresion-condicional ? expresion-si-cumple : expresion-no-cumple

edad = 17;

mayorEdad = edad >= 18 ? 'Adulto' : 'Menor';

console.log(mayorEdad);