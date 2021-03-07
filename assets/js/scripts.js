//console.log("hola");

/******************** Ejercicio 1 ********************/
console.log("Ejercicio 1");
let numero = Number(prompt("Ingresa un numero entre 1 a 100:"));
//console.log(numero);

for (let i = 0; i <= numero; i++) {
  console.log(i);
}

/******************** Ejercicio 2 ********************/

console.log("Ejercicio 2");
let resp = "";
do {
  resp = prompt("¿De qué color es el caballo blanco de Napoleón?");
} while (!(resp.trim().toLowerCase() === "blanco"));

/******************** Ejercicio 3 ********************/

console.log("Ejercicio 3");
let proMatematica = Number(prompt("¿Cúal es tu promedio de Matemáticas?:"));
let proFisica = Number(prompt("¿Cúal es tu promedio de Fisica?:"));
let proCiencias = Number(prompt("¿Cúal es tu promedio de Ciencias?:"));

let proArreglo = [proMatematica, proFisica, proCiencias];
const promedio = (arreglo) =>
  Math.round(arreglo.reduce((uno, dos) => uno + dos) / arreglo.length);
alert(`el promedio es: ${promedio(proArreglo)}`);

/******************** Ejercicio 4 ********************/

/* console.log("Ejercicio 4");

let frutas = ["", "", ""];

let fruta1 = prompt("ingresa la primera fruta");
let fruta2 = prompt("ingresa la segunda fruta");
let fruta3 = prompt("ingresa la tercera fruta");

let arrFruta = [fruta1, fruta2, fruta3];

arrFruta.filter(fr => fr != "manzana").forEach(el => console.log(el));
 */
/******************** Ejercicio 5 ********************/

console.log("Ejercicio 5");
let nomb = prompt(
  "ingresa tu nombre y te indicaremos cuantas vocales y consonantes tiene tu nombre:"
);
let numVocales = nomb.match(/[aeiou]/gi).length;
let numTotal = nomb.match(/[a-z]/gi).length;

let numConsonantes = numTotal - numVocales;

console.log(
  `La cantidad de vocales que tiene tu nombre es de: ${numVocales} y de consonantes es de: ${numConsonantes}`
);
