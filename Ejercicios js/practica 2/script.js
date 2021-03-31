/* 1. Crear un script para calcular el IMC (Indice de masa corporal) de cualquier persona, y determinar la composición corporal de dicha persona bajo los siguientes criterios:
Peso inferior al normal : IMC Menos de 18.5
Normal  : IMC 18.5 – 24.9
Peso superior al normal : IMC 25.0 – 29.9
Obesidad : IMC Más de 30.0 */

/* alert("Hola, vamos a calcular tu indice de masa corporal IMC, por favor a continuación ingresa los datos que se te solicitan")
var peso = parseInt(prompt("Ingresa tu peso especificado en kilogramos"))
var altura = parseInt(prompt("Ingresa tu estatura especificada en centimetros"))
var calcula_imc = parseInt(((peso / (altura ** 2)) * 10000 ))

switch (true){
  case (calcula_imc)<=18.5:
    alert("Tu IMC es " + calcula_imc + " esto es inferior al normal, por favor consulta a tu medico familiar");
    break;
  case (calcula_imc)>18.5 && (calcula_imc)<=24.9:
    alert("Tu IMC es " + calcula_imc + " esto es normal");
    break;
  case (calcula_imc)>25 && (calcula_imc)<=29.9:
    alert("Tu IMC es " + calcula_imc + " esto es superior al normal, se recomienda hacer ejercicio");
    break;
  case (calcula_imc)>30:
    alert("Tu IMC es " + calcula_imc + " Tienes obesidad, por favor consuta a tu medico familiar");
    break;
  default:
    alert("Por favor ingresa un dato valido");
    break;
}  */

/* 2. Usando como referencia los siguientes datos de estaturas promedio:
            General Varón   Mujer
México      169.9   170.0   160.8   cm's
Australia   172.6   179.2   165.9   cm's
Canadá      171.0   178.1   163.9   cm's
Brasil      167.3   173.6   160.9   cm's
Reino Unido 171.0   177.5   164.4   cm's

crear un script que me permita conocer si mi estatura es superior, inferior o igual al promedio dependiendo de mi país y género. Si mi país no se encuentra en la lista, indicar que no se cuenta con el dato de estatura para ese país.*/

/* alert("Hola, vamos a calcular tu altura de acuerdo a tu pais de origen");
var sexo = prompt("Ingresa tu genero. Escribe una M para masculino o una F para femenino")
var estatura = prompt("Ingresa tu estatura en centimetros")
var pais_residencia = prompt("Ingresa tu pais de origen: MX para México, AU para Australia, CA para Canada, BR para Brazil, RU para Reuno Unido")

switch (true) {
  case pais_residencia == "MX" && sexo == "M" && estatura < 170:
    alert("Tu altura es INFERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "MX" && sexo == "M" && estatura > 170:
    alert("Tu altura es SUPERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "MX" && sexo == "M" && estatura == 170:
    alert("Tu altura es IGUAL al promedio de tu genero en tu país")
    break;
  case pais_residencia == "MX" && sexo == "F" && estatura < 160.8:
    alert("Tu altura es INFERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "MX" && sexo == "F" && estatura > 160.8:
    alert("Tu altura es SUPERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "MX" && sexo == "F" && estatura == 160.8:
    alert("Tu altura es IGUAL al promedio de tu genero en tu país")
    break;
  case pais_residencia == "AU" && sexo == "M" && estatura < 179.2:
    alert("Tu altura es INFERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "AU" && sexo == "M" && estatura > 179.2:
    alert("Tu altura es SUPERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "AU" && sexo == "M" && estatura == 179.2:
    alert("Tu altura es IGUAL al promedio de tu genero en tu país")
    break;
  case pais_residencia == "AU" && sexo == "F" && estatura < 165.9:
    alert("Tu altura es INFERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "AU" && sexo == "F" && estatura > 165.9:
    alert("Tu altura es SUPERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "AU" && sexo == "F" && estatura == 165.9:
    alert("Tu altura es IGUAL al promedio de tu genero en tu país")
    break;
  case pais_residencia == "CA" && sexo == "M" && estatura < 178.1:
    alert("Tu altura es INFERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "CA" && sexo == "M" && estatura > 178.1:
    alert("Tu altura es SUPERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "CA" && sexo == "M" && estatura == 178.1:
    alert("Tu altura es IGUAL al promedio de tu genero en tu país")
    break;
  case pais_residencia == "CA" && sexo == "F" && estatura < 163,9:
    alert("Tu altura es INFERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "CA" && sexo == "F" && estatura > 163,9:
    alert("Tu altura es SUPERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "CA" && sexo == "F" && estatura == 163,9:
    alert("Tu altura es IGUAL al promedio de tu genero en tu país")
    break;
  case pais_residencia == "BR" && sexo == "M" && estatura < 173.6:
    alert("Tu altura es INFERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "BR" && sexo == "M" && estatura > 173.6:
    alert("Tu altura es SUPERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "BR" && sexo == "M" && estatura == 173.6:
    alert("Tu altura es IGUAL al promedio de tu genero en tu país")
    break;
  case pais_residencia == "BR" && sexo == "F" && estatura < 160.9:
    alert("Tu altura es INFERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "BR" && sexo == "F" && estatura > 160.9:
    alert("Tu altura es SUPERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "BR" && sexo == "F" && estatura == 160.9:
    alert("Tu altura es IGUAL al promedio de tu genero en tu país")
    break;
  case pais_residencia == "RU" && sexo == "M" && estatura < 177.5:
    alert("Tu altura es INFERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "RU" && sexo == "M" && estatura > 177.5:
    alert("Tu altura es SUPERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "RU" && sexo == "M" && estatura == 177.5:
    alert("Tu altura es IGUAL al promedio de tu genero en tu país")
    break;
  case pais_residencia == "RU" && sexo == "F" && estatura < 164.4:
    alert("Tu altura es INFERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "RU" && sexo == "F" && estatura > 164.4:
    alert("Tu altura es SUPERIOR al promedio de tu genero en tu país")
    break;
  case pais_residencia == "RU" && sexo == "F" && estatura == 164.4:
    alert("Tu altura es IGUAL al promedio de tu genero en tu país")
    break;
  case pais_residencia != "MX" || pais_residencia != "AU" || pais_residencia != "CA" || pais_residencia != "BR" || pais_residencia != "RU":
    alert("El pais seleccionado no exite, intentalo nuevamente")
    break;
}  */

/* 3. Tomando como referencia los siguientes datos de densidades:
Sustancia       Densidad (kg/m3)
Acero           7850
Cobre           8940
Oro             19300
Plata           10490
Diamante        3515
crear un script que me permita conocer el peso de un cubo de cualquier material (pedir al usuario la dimensión del lado del cubo y el material a consultar). Si el material no se encuentra en la lista, informar que no se cuentan con datos sobre la densidad de dicho material. */
 
/* alert ("Vamos a calcular la densidad de un cubo según el material con el que esta echo")
var medida = prompt("Ingresa el valor de la medida de un lado del cubo")
var material = prompt("Ingresa el material del cuál esta echo el cubo, ingresa A para acero, C para cobre, O para oro, P para plata, D para diamante")
var volumen = (medida ** 3)

switch (true) {
  case material == "A":
    alert("El peso del cubo de acero es de " + volumen * 7850)
    break;
  case material == "C":
    alert("El peso del cubo de Cobre es de " + volumen * 8940)
    break;
  case material == "O":
    alert("El peso del cubo de Oro es de " + volumen * 19300)
    break;
  case material == "P":
    alert("El peso del cubo de Plata es de " + volumen * 10490)
    break;
  case material == "D":
    alert("El peso del cubo de Diamante es de " + volumen * 3515)
    break;
  case material != "A" || material != "C" || material != "O" || material != "P" || material != "D":
    alert("El material no existe, intenta nuevamente")
    break;
} */
 


/*
    var phrase = "La mejor forma de predecir el futuro es creándolo"
    1- saber la cantidad de palabras
    2- saber la cantidad de "a"
    3- crear una nueva frase usando sólo los caracteres que esten en posiciones nones
        "amjrf"
    4- crear una nueva frase usando sólo los caracteres que esten en posiciones pares
*/


/* var phrase = "La mejor forma de predecir el futuro es creándolo" */

/* 1- saber la cantidad de palabras */

/* for ( var i = 0; i < phrase.length; i++ ) {
  var character = phrase.charAt(i)
  if ( character === " " ) {
    spaces = spaces + 1
  }
  var words = spaces + 1
}  
console.log('La cantidad de palabras es : ' + words ) */

/* 2- saber la cantidad de "a" */

/* 
var phrase = "La mejor forma de predecir el futuro es creándolo"
var letra_a = 0

for ( var i = 0; i < phrase.length; i++ ) {
  var character = phrase.charAt(i)
  if (  character == "a" || character == "á" || character == "A" || character == "Á" ) {
    letra_a = letra_a + 1
  }
}  
console.log('La cantidad de letras a son : ' + letra_a ) */

/* 3- crear una nueva frase usando sólo los caracteres que esten en posiciones nones */
/* 4- crear una nueva frase usando sólo los caracteres que esten en posiciones pares */

/* var phrase = "La mejor forma de predecir el futuro es creándolo"
var par = 0
var none = 0
for (var i = 0; i < phrase.length; i++) {
  if ( i % 2 == 0) {
    par += phrase.charAt(i)
  } else {
    none += phrase.charAt(i)
  }
}
console.log(par);
console.log(none); */

/*
    Usando la frase "La mejor forma de predecir el futuro es creándolo" lograr los siguientes resultados:
    1.- Mostrar la misma frase en snake_case
    2.- Mostrar la misma frase en kebab-case
    3.- Mostrar la misma frase con todas las vocales en mayúscula
    4.- Mostrar los primeros 10 caracteres de la frase
    5.- Mostrar los últimos 10 caracteres de la frase 
*/

/* 1.- Mostrar la misma frase en snake_case */
/* var phrase = "La mejor forma de predecir el futuro es creándolo"
var new_phrase = ""
var character = ""

for (var i = 0; i < phrase.length; i++) {
  var character = phrase.charAt(i)
  if ( character === " " ) {
    phrase = phrase.replace(phrase.charAt(i),"_")
  }
}
console.log(phrase); */

/* var phrase = "La mejor forma de predecir el futuro es creándolo"
var new_phrase = ""
var character = ""

for (var i = 0; i < phrase.length; i++) {
  var character = phrase.charAt(i)
  if ( character === " " ) {
    phrase = phrase.replace(phrase.charAt(i),"-")
  }
}
console.log(phrase); */

/* 3.- Mostrar la misma frase con todas las vocales en mayúscula */

/* var phrase = "La mejor forma de predecir el futuro es creándolo"
var character = ""

for (var i = 0; i < phrase.length; i++) {
  var character = phrase.charAt(i)
  if ( character === "a"|| character === "e"|| character === "i"|| character === "o"|| character === "u"|| character === "á"|| character === "é"|| character === "í"|| character === "ó"|| character === "ú") {
    phrase = phrase.replace(phrase.charAt(i),(character.toUpperCase()))
  }
}
console.log(phrase); */

/* 4.- Mostrar los primeros 10 caracteres de la frase */

/* var phrase = "La mejor forma de predecir el futuro es creándolo"
var new_phrase = phrase.slice(0,10)

console.log(new_phrase); */

/* 5.- Mostrar los últimos 10 caracteres de la frase  */

/* var phrase = "La mejor forma de predecir el futuro es creándolo"
var new_phrase = phrase.slice(phrase.length-10, phrase.length-0)

console.log(new_phrase); */






const suma_dos_numeros = (a,b) => a + b

console.log(suma_dos_numeros(1,2));