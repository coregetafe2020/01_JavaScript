/* Metodos y propiedades propios de JavaScript para tipo de dato string */

let nombre = 'Juan';

console.log(nombre.length);
console.log(nombre.toLowerCase());
console.log(nombre.toUpperCase());
console.log(nombre.charAt(2));
console.log(nombre[0]);
console.log(nombre.indexOf('n'));
console.log(nombre.indexOf('k'));

nombre = 'Amanda';

console.log(nombre.lastIndexOf('a'));
console.log(nombre.includes('x'));
console.log(nombre.startsWith('a'));
console.log(nombre.endsWith('a'));

let apellidos = 'Pérez';

let nombreCompleto = nombre.concat(' ' + apellidos);
console.log(nombreCompleto);

let frase = '     En un lugar de La Mancha...          ';
console.log(frase.trim());

// Template literals ECMA 6
// Escribir cadenas multilínea sin secuencias de escape
// y permite interpolación de variables y constantes
// `...caracteres...
//  ....caracteres... ${expresion} ...`

let mensaje = `La jugadora es 
${nombre} ${apellidos}`;

console.log(mensaje);

/* Metodos y propiedades propios de JavaScript para tipo de dato number */

let puntuacion = -2.6;

let puntuacionRedondeada = Math.round(puntuacion);

console.log(puntuacionRedondeada);
console.log(Math.ceil(puntuacion));
console.log(Math.floor(puntuacion));

let resultado = '9.7';

// Parseo de string a number

console.log(parseInt(resultado));
console.log(parseFloat(resultado));

console.log(Number(resultado));

console.log(Number.isInteger(resultado));
// console.log(Number.isNaN(resultado));

// Parseo de number a string

let resultado2 = 9.7;
console.log(resultado2.toString());

// Fechas

// Generación de fechas con el objeto propio Date

// Fecha actual

let ahora = new Date();
console.log(ahora);

// new Date(año, mes, dia, hora, minuto, segundos, milisegundos)

let fechaNacimiento = new Date(73, 10, 18); // Alerta meses indexados a cero
console.log(fechaNacimiento);
let fechaAlta = new Date(2020, 6, 13);
console.log(fechaAlta);

// new Date(fecha-string)

let fechaExpedicion = new Date('2020-06-24'); // Mes no está indexado a cero
console.log(fechaExpedicion);

// new Date(milisegundos) referenciados a Fecha Epoch

// ver ejemplo más abajo

// Métodos de Date

console.log(ahora.getFullYear());
console.log(ahora.getMonth());

let meses = ['E','F','M','Ab','My','Jn','Jl','Ag','S','O','N','D'];

console.log(meses[ahora.getMonth()]);

console.log(ahora.getDate()); // día del mes
console.log(ahora.getMinutes());
console.log(ahora.getSeconds());
console.log(ahora.getMilliseconds());

console.log(ahora.getDay()); // día de la semana (también indexado a cero)

let elPasadoDomingo = new Date(2020, 6, 12);
console.log(elPasadoDomingo.getDay());

console.log(ahora.getTime()); // Milisegundos desde epoch 1 Enero de 1970

let fechaVencimiento = new Date(ahora.getTime() + 3 * 24 * 60 * 60 * 1000);
console.log(fechaVencimiento);

// Pendiente extraer fechas con el resto %

/* Metodos y propiedades propios de JavaScript para tipo de dato 'array' */

let frutas = ['manzanas','naranjas','kiwis'];

console.log(frutas.length);

// Métodos mutables

frutas.pop() // eliminar el último elemento
console.log(frutas);

frutas.push('albaricoques','cerezas'); // añade elementos al final del array
console.log(frutas);

frutas.shift() // extrae el primer elemento y desplaza el resto
console.log(frutas);

frutas.unshift('plátanos','fresas'); // añade elementos al principio y desplaza el resto
console.log(frutas);

frutas.splice(2,2); // elimina elementos con el siguiente criterio:
                    // 1er Digito desde la posición incluida
                    // 2o Digito numero de elementos a eliminar desde la anterior posición incluida
console.log(frutas);

frutas.splice(1,1, 'platanos'); // Sustitución desde la posición del primer dígito
console.log(frutas);

frutas.splice(2,0, 'melones','peras'); // Añade desde la posición del primer dígito y desplaza el resto
console.log(frutas);

frutas.sort(); // Ordena lexicográfico
console.log(frutas);

frutas.reverse(); // Invierte el orden de los elementos
console.log(frutas);

// Los métodos se pueden encadenar

let marcasVehiculos = ['Dacia','VW','SEAT','Audi','Renault'];

marcasVehiculos.sort()
               .reverse();


console.log(marcasVehiculos);