
//Crear un array
const array = ["uno", "dos", "tres",]
console.log(array);

//Mostrar longitud de un array
console.log(array.length);
console.log(longitud_array = array.length);

//Acceder a un elemento por posicion mediante su indice
let primera_posicion = [0]
let segunda_posicion = [1]
let tercera_posicion = [2]
console.log(primera_posicion = [0]); 
console.log(segunda_posicion = [1]); 
console.log(tercera_posicion = [2]); 

//Recorrer un array
array.forEach(function(elemento,indice,array){
  console.log(elemento,indice);
})

//Agregar un elemento al final de un array 
let agregar_elemento_al_final = array.push("cuatro")
console.log(array);

//Agregar un elemento al inicio de un array
let agrega_elemento_al_inicio = array.unshift("cero")
console.log(array);

//Elmina el ultimo elemento agregado a un array
let borra_ultimo_elemento = array.pop();
console.log(array);

//Elimina el primer elemento de un array_detalle
let borra_primer_elemento = array.shift("cero")
console.log(array);

//Muestra el indice de un elemento dentro un array_detalle
let muestra_index_de_elemento = array.indexOf("tres")
console.log(array.indexOf("tres"));

//Elimina un unico elemento mediante su index
let elimina_elmento_por_index = array.splice(muestra_index_de_elemento, 1);
console.log(array);

//Elimina elementos de un array y guardar los ementos borrodos en un nuevo array
let array2=[1,2,3,4,5,6,7,8,9]
let index = 1
let elementos = 2
let borra_elementos = array2.splice(index,elementos)
console.log(array2);
console.log(borra_elementos);

//Copiar un array 
let array_dos = array.slice();
console.log(array_dos);

//Acceso a elementos de un array 

//Primer elemento
console.log(array2[0]);
//Ultimo elementos
console.log(array2);
console.log(array2.length-1);
console.log((array2[6]));

