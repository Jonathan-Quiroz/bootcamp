/* /* var procesar = false
var my_array = [1,2,3,4,5,6,7,8,9,10]
var suma = 0
var calificaciones = [6,7,8,9,7,10,9,8]
var minimo_aprobatorio = 7


for (let index = 0; index < my_array.length; index++) {
  const element = my_array[index]; */
  /* suma = suma + element */
/*   suma += element
}
if (suma > 25) {
  procesar = true
}

if (procesar == true) {
  alert("si puedo procesar")
}else{
  alert("no puedo procesar")
}
document.body.innerHTML = "<table>"
for (let index = 0; index < calificaciones.length; index++) {
  const element = calificaciones[index];
  if (element < minimo_aprobatorio) {
    console.log(element);
    document.body.innerHTML= "<tr><td>"+element+"</td><td><input></td></tr>"

  }else{

  }

} */



/*
  -crear un nuevo array que contenga los nombres completos de todos los koders de kodersList
*/

/* var kodersList = [
  [
      "Fernanda",
      "Palacios Vera"
  ],
  [
      "Jorge",
      "Ochoa"
  ],
  [
      "Naomi",
      "Puertos"
  ],
  [
      "Rurick",
      "Maqueo Poissot"
  ]
]

var array_nombre_completo = []

for (let index = 0; index < kodersList.length; index++) {
  const element = kodersList[index];
  var nombre = element[0]
  var apellido = element[1]
  var nombre_completo = nombre + " " + apellido;
  array_nombre_completo.push(nombre_completo)
}

console.log(array_nombre_completo);
 */

/*
    -quiero conocer la cantidad de productos en el array
    -quiero conocer el costo total de todos los productos del array
    -quiero conocer la cantidad de productos de cada categoría
        (Vegetables, Cloths, Miscellaneous, Computers)
    -quiero un nuevo array para cada categoría
    -quiero un nuevo array de strings que tenga lo siguiente
        [
            "El { productName } tiene un costo de { price }"
        ]
*/
/* 
var productsList = [
  {
      name:"producto 1",
      price:12.45,
      category:"Miscellaneous"
  },
  {
      name:"producto 2",
      price:25.13,
      category:"Vegetables"
  },
  {
      name:"producto 3",
      price:45.00,
      category:"Cloths"
  },
  {
      name:"producto 4",
      price:12500.00,
      category:"Computers"
  },
  {
      name:"producto 5",
      price:15500.00,
      category:"Computers"
  },
  {
      name:"producto 6",
      price:8729.00,
      category:"Computers"
  },{
      name:"producto 7",
      price:150.00,
      category:"Cloths"
  },{
      name:"producto 8",
      price:100.00,
      category:"Miscellaneous"
  },{
      name:"producto 9",
      price:50.00,
      category:"Vegetables"
  },{
      name:"producto 10",
      price:200.00,
      category:"Cloths"
  }
]

var cantidad_productos = productsList.length
document.write("Tienes " + cantidad_productos + " productos")

var precio_total = 0;
var categoria = "";
var array_categorias = [];
var Vegetables= Cloths= Miscellaneous= Computers=0;
var array_detalle = [];

function agrega_categoria(arreglo, cadena) {
  var indetificado = false;
  var pos = 0;
  var posicion = 0;
  arreglo.forEach(elemento => {
    if (elemento.categoria == cadena) {
      indetificado = true
      posicion = pos
    }
      pos++
  });
    if (indetificado == false) {
      arreglo.push(
        {
          "categoria":cadena,
          "total":1
        }
      )
    }else{
      arreglo[posicion].total++
    }
    return arreglo
}


productsList.forEach(producto => {
  precio_total = producto.price + precio_total
  categoria = producto.category 

  array_categorias = agrega_categoria(array_categorias, categoria)
 */

  /* if (array_categorias.indexOf(categoria)<0) {
    array_categorias.push(categoria)
  }
  if (categoria == "Vegetables") {
    Vegetables++
  }else if(categoria =="Cloths") {
    Cloths++
  }else if(categoria =="Miscellaneous") {
    Miscellaneous++
  }else if(categoria =="Computers") {
    Computers++
  } */

/*   array_detalle.push("El " +  producto.name + " tiene un costo de " + producto.price)

});

console.log(array_categorias);
document.write("el costo total del los productos es " + precio_total + "<br>")
document.write("Total de Vegetables " + Vegetables + "<br>")
document.write("Total de Cloths " + Cloths + "<br>")
document.write("Total de Miscellaneous " + Miscellaneous + "<br>")
document.write("Total de Computers " + Computers + "<br>")

for (let index = 0; index < array_detalle.length; index++) {
  const element = array_detalle[index];
  document.write(element + " <br>") 
}

array_detalle.forEach(element => {
  document.write(element + " <br>") 
});
 */



let mentorsArray = [
  {
      name:"Israel Salinas Martinez",
      scores:[
          {
              signature:"HTML",
              score:8
          },
          {
              signature:"CSS",
              score:10
          },
          {
              signature:"JS",
              score:8
          },
          {
              signature:"ReactJS",
              score:8
          }
      ]
  },
  {
      name:"David Cermeño Moranchel",
      scores:[
          {
              signature:"HTML",
              score:8
          },
          {
              signature:"CSS",
              score:7
          },
          {
              signature:"JS",
              score:10
          },
          {
              signature:"ReactJS",
              score:10
          }
      ]
  },
  {
      name:"Charles Silva",
      scores:[
          {
              signature:"HTML",
              score:9
          },
          {
              signature:"CSS",
              score:9
          },
          {
              signature:"JS",
              score:10
          },
          {
              signature:"ReactJS",
              score:9
          }
      ]
  },
  {
      name:"Michael Villalba Sotelo",
      scores:[
          {
              signature:"HTML",
              score:8
          },
          {
              signature:"CSS",
              score:10
          },
          {
              signature:"JS",
              score:9
          },
          {
              signature:"ReactJS",
              score:10
          }
      ]
  }
]

var html= css= js= ReactJS = 0;
var array_alumnos = []
const cal_superior = 9;

mentorsArray.forEach(alumno => {
  var calificacion = 0;
  alumno.scores.forEach(asignaturas => {
    calificacion = calificacion + asignaturas.score
    console.log(alumno.name + " " + asignaturas.signature + " " + asignaturas.score);
    if (asignaturas.signature == "HTML") {
      html+=asignaturas.score
    }else if (asignaturas.signature == "CSS") {
      css+= asignaturas.score
    }else if (asignaturas.signature == "JS") {
      js+= asignaturas.score
    }else if (asignaturas.signature == "ReactJS") {
      ReactJS+= asignaturas.score
    }
  });
  if (calificacion/alumno.scores.length>=cal_superior) {
    document.write("el mento " + alumno.name + " tiene un promedio superior a " + cal_superior + "<br>")
  }else{
    document.write("el mentor " + alumno.name + " tiene un promedio inferior a " + cal_superior + "<br>")
  }
  array_alumnos.push("Mi nombre es " + alumno.name + "y mi promedio es de " + calificacion/alumno.scores.length) 
});

array_alumnos.forEach(element => {
  document.write(element + "<br>");

});
document.write("el promedo de HTML es " + html/mentorsArray.length + "<br>");
document.write("el promedo de CSS es " + css/mentorsArray.length + "<br>");
document.write("el promedo de JS es " + js/mentorsArray.length+ "<br>");
document.write("el promedo de ReactJS es " + ReactJS/mentorsArray.length + "<br>");

/* la práctica :
usando mentorsArray, realizar lo siguiente:
-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
-Obtener el promedio individual de cada mentor
-Obtener un array de strings con la siguiente forma:
     "Mi nombre es {nombre} y mi promedio es de {promedio}"
-Obtener la lista de mentores cuyo promedio sea mayor a 9.5 */




var equipo = {
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}

console.log(equipo.squadName + " " +equipo.formed );

equipo.members.forEach(element => {
  if (element.age <=35) {
    console.log(element.name + " " + element.age);
  }
  element.powers.forEach(poder => {
    if (poder == "Immortality") {
      console.log(element.name + " " + poder);
    }
  });
});