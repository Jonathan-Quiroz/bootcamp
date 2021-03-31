/* function producto (nombre,descripcion,precio_de_costo,clasificacion,porcentaje_de_ganancia, precio_de_venta,precio_ultimos_6_meses,cantidades_vendidas,caducidad){
  this.nombre = nombre,
  this.descripcion = descripcion,
  this.precio_de_costo = precio_de_costo,
  this.clasificacion = clasificacion,
  this.porcentaje_de_ganancia =porcentaje_de_ganancia,
  this.precio_de_venta = precio_de_venta,
  this.precio_ultimos_6_meses = precio_ultimos_6_meses,
  this.cantidades_vendidas = cantidades_vendidas,
  this.caducidad = caducidad
}

const limon = new producto("Limon","Verdura",2.00,"verdura",5,4,3.[0],20,"Mayo-2021"); 
console.log(limon); */

const kodersCollection = [
  {
      name: 'Javier', 
      lastName: 'López',
      birthday: '1996/06/24',
      generation: 9,
      bootcamp: 'JavaScript',
      scores: [
          {
              module: 'Frontend',
              score: 90
          },
          {
              module: 'Backend',
              score: 80
          },
          {
              module: 'Cloud',
              score: 80
          },
      ]
  },
  {
      name: 'Ale', 
      lastName: 'Paez',
      birthday: '1998/05/12',
      generation: 1,
      bootcamp: 'Python',
      scores: [
          {
              module: 'Frontend',
              score: 90
          },
          {
              module: 'Backend',
              score: 100
          },
          {
              module: 'Cloud',
              score: 100
          },
      ]
  },
  {
      name: 'Juan Pablo', 
      lastName: 'Sánchez',
      birthday: '1994/10/26',
      generation: 10,
      bootcamp: 'JavaScript',
      scores: [
          {
              module: 'Frontend',
              score: 100
          },
          {
              module: 'Backend',
              score: 95
          },
          {
              module: 'Cloud',
              score: 80
          },
      ]
  },
  {
      name: 'Oscar', 
      lastName: 'Ruiz',
      birthday: '1996/06/24',
      generation: 1,
      bootcamp: 'Python',
      scores: [
          {
              module: 'Frontend',
              score: 98
          },
          {
              module: 'Backend',
              score: 100
          },
          {
              module: 'Cloud',
              score: 70
          },
      ]
  },
  {
      name: 'Javier', 
      lastName: 'López',
      birthday: '1996/06/24',
      generation: 9,
      bootcamp: 'JavaScript',
      scores: [
          {
              module: 'Frontend',
              score: 80
          },
          {
              module: 'Backend',
              score: 90
          },
          {
              module: 'Cloud',
              score: 100
          },
      ]
  }
]

function koder (name,lastName,birthday,generation,bootcamp,scores){
  this.name = name;
  this.lastName = lastName;
  this.birthday = birthday;
  this.generation = generation;
  this.bootcamp = bootcamp;
  this.scores = scores;
  this.getAge = function(){
    let currentYear = new Date() 
    let birthYear = new Date(this.birthday)
    return (currentYear.getFullYear()-birthYear.getFullYear())
  } 
  this.avarage = function(){
    return (this.scores.reduce((acumulador, element)=>{
      return acumulador += element.score 
    },0)/this.scores.length).toFixed(2)
  }
}

const koderMap = kodersCollection.map((element,index)=>{
  return new koder (element.name,element.lastName,element.birthday,element.generation,element.bootcamp,element.scores)
})

const gpoJs = kodersCollection.filter((element=> element.bootcamp === "JavaScript"))
const gpoPython = kodersCollection.filter((element=> element.bootcamp === "Python"))
 
const today = new Date()
console.log(koderMap[0].getAge());
console.log(koderMap[0].avarage());
console.log(gpoJs);
console.log(gpoPython);



