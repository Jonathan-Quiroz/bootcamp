var num_koders = parseInt(prompt("Ingresa el número de koders"))
var koder = []

function add_koders () {
  let name = prompt("Ingresa el nombre del koder")
  let last_name = prompt("ingresa el apellido koder")
  koder.push(`${name} ${last_name}`)
  console.log(name + " " + last_name);
}

for (var i = 0; i < num_koders; i++) {
  add_koders()
}

console.log(koder);

var OP = parseInt(prompt("Si Deseas agregar un nuevo coder preciona 1, si deseas eliminar preciona 2"))

switch (OP) {
  case 1:
    add_koders()
    break;
  case 2:
    delete_koder()
  break;
  default:
    break;
}

function delete_koder() {
  let erease_koder = Math.floor (Math.random() * koder.lenght)
  let erease_random = koder.splice (erease_koder,1)
}

alert(koder)


/*
    -pedir al usuario la cantidad de koders a guardar
    -pedir nombre y apellido de cada koder
    -guardar cada koder en un array 
    -imprimir cada uno de los koders
*/
/*
    permitir guardar koders adicionales
    permitir borrar un koder aleatorio de la lista
*/
