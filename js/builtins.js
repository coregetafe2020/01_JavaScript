/* Metodos y propiedad propios de JavaScript para tipo de dato string */

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