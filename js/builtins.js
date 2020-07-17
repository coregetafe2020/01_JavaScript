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

let fin = new Date(2020, 6, 20, 14); // Lunes próximo

let tiempoRestante = fin.getTime() - ahora.getTime();
console.log(typeof tiempoRestante);

let dd = Math.floor(tiempoRestante / (24 * 60 * 60 * 1000));
let hh = Math.floor((tiempoRestante / (60 * 60 * 1000)) % 24);
let mm = Math.floor((tiempoRestante / (60 * 1000)) % 60);
let ss = Math.floor((tiempoRestante / 1000) % 60);

console.log(`Dentro de ${dd} días ${hh} horas ${mm} minutos y ${ss} segundos`);

/* Metodos y propiedades propios de JavaScript para tipo de dato 'array' */

let frutas = ['manzanas','naranjas','kiwis'];

console.log(frutas.length);

// Métodos mutables

frutas.pop() // eliminar el último elemento
console.log(frutas);

frutas.push('albaricoques','cerezas'); // añade elementos al final del array
console.log(frutas);

// Importante push sobre undefined lanza error

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

frutas.sort(); // Ordena lexicográfico ó numérico
console.log(frutas);

frutas.reverse(); // Invierte el orden de los elementos
console.log(frutas);

// Los métodos se pueden encadenar

let marcasVehiculos = ['Dacia','VW','SEAT','Audi','Renault'];

marcasVehiculos.sort()
               .reverse();


console.log(marcasVehiculos);

// Sort permite pasar como argumento una función de ordenación

let participantes = [
    {nombre: "Juan", apellidos: "López"},
    {nombre: "Yolanda", apellidos: "Gómez"},
    {nombre: "Laura", apellidos: "Peŕez"}
];

function compararAsc(a, b) {
    if ( a.nombre < b.nombre) {
        return -1;
    }
    if (a.nombre > b.nombre) {
        return 1;
    }
    return 0;
}

function compararDesc(a, b) {
    if ( a.nombre < b.nombre) {
        return 1;
    }
    if (a.nombre > b.nombre) {
        return -1;
    }
    return 0;
}

participantes.sort(compararDesc);
console.log(participantes);

// Métodos para arrays inmutables

frutas = ['manzanas','naranjas','kiwis','plátanos'];

let frutasSeleccionadas = frutas.slice(1,4); // primera posición incluida y segunda no incluida
console.log(frutas);
console.log(frutasSeleccionadas);

frutasSeleccionadas = frutas.slice(-2);
console.log(frutasSeleccionadas);

// slice() también se puede utilizar en strings

hh = ('0'+ hh).slice(-2);
mm = ('0'+ mm).slice(-2);
ss = ('0'+ ss).slice(-2);

console.log(`${hh}:${mm}:${ss}`);

console.log(frutas.includes('pomelos'));

console.log(frutas.join(' '));

// Vemos de nuevo concat para arrays

let marcasEuropeas = ['SEAT','Reanult','Mercedes'];
let marcasAsiaticas = ['Toyota','Mazda'];

let marcas = marcasEuropeas.concat(marcasAsiaticas);
console.log(marcas);

// Concat sirve también para romper el paso por referencia

let marcasSeleccionadas = marcasEuropeas.concat();
marcasEuropeas.push('Dacia');
console.log(marcasSeleccionadas);

// Spread operator ...

let marcasCoreanas = ['Hyundai', 'KIA'];
marcasAsiaticas.push(marcasCoreanas);
console.log(marcasAsiaticas);

// Parámetros rest ...

function setCategorias (...categorias) {
    return categorias;
}

let categoriasCalzado = setCategorias('Zapatos','Zapatillas','Botas');
console.log(categoriasCalzado);

// Ciclo forEach para arrays ECMAScript 6 2015
// array.forEach((elemento, i) => {
//    // código con cada elemento
// })

let alumnos = [
    {nombre: 'María', apellidos: 'Pérez', puntuacion: 4.6},
    {nombre: 'Juan', apellidos: 'Gómez', puntuacion: 7},
    {nombre: 'Laura', apellidos: 'García', puntuacion: 9.2}
];

alumnos.forEach((alumno, i) => {
    alumno._id = i + 1;
    if (alumno.puntuacion >= 5) {
        alumno.apto = 'APTO';
    } else {
        alumno.apto = 'NO APTO';
    }
})

console.table(alumnos);

// Map ECMAScript 6
// Devuelve un array con el resultado de cada iteracion
// array.map((elemento, i) => {
//    // código con cada elemento
// })

let nombresAlumnos = alumnos.map((alumno, i) => {
    return alumno._id + '.-' + alumno.nombre + ' ' + alumno.apellidos;
})

console.log(nombresAlumnos);

// Filter ECMAScript 6
// Idem map pero con filtro

let alumnosAptos = alumnos.filter((alumno) => {
    return alumno.apto === 'APTO';
})

console.log(alumnosAptos);

// Reduce ECMAScript 6
// Recorre los valores y en cada ciclo de iteración
// actualiza un valor inicio u otro de fin a partir
// de los valores de cada elemento

// array.reduce((inicio, fin) => {
//    código con ese valor inicio y ese valor fin
// })

alumnos[0].puntuacion = [4.5, 6.5, 7.8];
alumnos[1].puntuacion = [9.4, 3.5, 6.8];
alumnos[2].puntuacion = [7.5, 4.5, 7.9];

alumnos.forEach((alumno) => {
    let suma = alumno.puntuacion.reduce((a, b) => {
        console.log(a, b)
        return a + b;
    })
    alumno.promedio = suma / alumno.puntuacion.length;
})

// console.table(alumnos);