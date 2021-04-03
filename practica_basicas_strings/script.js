/* // Crear un string
let mi_cadena = "hola que hace";
console.log(mi_cadena);

//Encontrar la logitud de una cadena de

mi_cadena.length;
console.log(mi_cadena.length); */


//1.- Dado un string de dos palabras realizar una función que devuelva la palabra más larga

  // hacer una funcion que realice lo siguiente:

  // a.- guardar un string de dos palabras
  // b.- seprar las dos palabras y guardarlas por separados
  // c.- contar las letras de cada palabras
  // d.- hacer una comparacion para ver cual es mayor que
  // e.- mostrar cual es la palabra con mas caracteres

/*   function compareTwoWords (string) {
    string[0].length > string[1].length ? alert("la palara con mas caracteres es "+ string[0]) : alert("la palara con mas caracteres es "+ string[1])
  }
  compareTwoWords(myString = prompt("Ingresar dos palabras").split(" ")) */



//------>2.- Crear un programa que permita detectar si una frase finaliza con punto. Dicho programa debe estar encapsulada en una función y recibir el o los parametros necesarios.

  // hacer una funcion que realice lo siguiente:

  // a.- Leer una frase y guardarla en algun lugar
  // b.- Leer el ultimo caracter de la frase almacenada
  // c.- Validar su la frase tiene un punto al final
  // d.- mostrar si la frase termina o no con un punto

/* function finisInDots (phrase){
  phrase.charAt(phrase.length -1) === "." ? alert("El parrafo termina con punto final") : alert("El parrafo no termina con punto final")
}
finisInDots(prompt("Ingresar una frase favorita")) */



//3.- Crear un programa que permita al usuario retornar el numero de coincidencias de una palabra en una frase que el mismo usuario ingrese.

  // a.- Leer una frase y guardardarla en algun lugar 
  // b.- Preguntar al usuario que palabra desea buscar en la frase que escribio
  // d.- buscar la palabra que el usuario escribio en la frase
  // e.- Contar cuantas veces se repite la palara que el usuario quiere buscar en la frase
  // f.- Mostrar la palabra que se repite y la cantidad de veces

/* function findWord(phrase, word) {
  const phaseSplit = phrase.split(" ")
  const wordsSeparated = phaseSplit.reduce(( acumulador, elemento ) => {
    if ( word === elemento) {
      acumulador ++
    }
    return acumulador
  },0)
  alert("La palabra " + word + " se repite " + wordsSeparated + " veces en la frase escrita atenriormente")
}

findWord(prompt("Ingresa tu frase favorita"), prompt("Que palabra deseas validar si esta repetida")) */



// ------> 4.- Crear un programa que permita al usuario extraer una subacadena de una frase dada.

/* let frase = prompt("Escribe una frase")
let busca_palabra = prompt("Que palabar deseas buscar en la frase anterior")
let muestra_palabra = ""
  if (muestra_palabra = frase.includes(busca_palabra)) {
      alert("palabra " + busca_palabra + " encontrada")
  } else {
      alert("palabra NO encontrada, " )
  }
 */

//-------> 5.- crear un programa que permita comparar dos palabaras dadas por el usuario y determinar si son iguales.

/* let palabra_uno = prompt("Ingresa una palabra");
let palabra_dos = prompt("Ingresa otra palabra");

if (palabra_uno === palabra_dos) {
    alert("las palabras SON iguales")
} else {
  alert("las palabras NO SON iguales")
} 
 */

//--------> 7.- Realizar un programa que permita a una cadena de texto convertirlo a Mayusculas.

/* let cadena_minuscula = prompt("Inresa una palabra");
let cadena_mayuscula = alert(cadena_minuscula.toUpperCase()) */

//--------> 8.- Crear un programa que permita a una cadena de texto mostrar el sogno '-' entre cada caracter

/* let  frase = prompt("Ingresa una frase");
alert(frase.replace(/\s/g, '').split('').join('-')) */

// 9.- Crear un programa que devuelva la cantidad de vocales que tenga una frase dada por el usuario.


/* function valida_(params) {
  
}

var cadena = "aAeEiIoOuU son vocales";
var numeroVocales = cadena.match(/[aeiou]/gi).length;

console.log(numeroVocales); */