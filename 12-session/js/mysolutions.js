const koders = [
    {
      name: "Harold",
      lastName: "López",
      birthday: "1996/06/24",
      generation: 9,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 90
        },
        {
          module: "Backend",
          score: 80
        },
        {
          module: "Cloud",
          score: 80
        }
      ]
    },
  
    {
      name: "Arnold",
      lastName: "Osborn",
      birthday: "1998/05/12",
      generation: 1,
      bootcamp: "Python",
      scores: [
        {
          module: "Frontend",
          score: 90
        },
        {
          module: "Backend",
          score: 100
        },
        {
          module: "Cloud",
          score: 100
        }
      ]
    },
    {
      name: "Peter",
      lastName: "Parker",
      birthday: "1994/10/26",
      generation: 10,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 100
        },
        {
          module: "Backend",
          score: 95
        },
        {
          module: "Cloud",
          score: 80
        }
      ]
    },
    {
      name: "Homer",
      lastName: "Simpson",
      birthday: "1996/06/24",
      generation: 1,
      bootcamp: "Python",
      scores: [
        {
          module: "Frontend",
          score: 98
        },
        {
          module: "Backend",
          score: 100
        },
        {
          module: "Cloud",
          score: 70
        }
      ]
    },
    {
      name: "Ren",
      lastName: "López",
      birthday: "1996/06/24",
      generation: 9,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 80
        },
        {
          module: "Backend",
          score: 90
        },
        {
          module: "Cloud",
          score: 100
        }
      ]
    },
  ];
  // console.log(koders)
  
  /*
  Ejercicio en clase:
  Teniendo la siguiente coleccion de Koders generar una coleccion de objetos de tipo Koder. Agregando además las siguientes funciones:
  
  Prototipo de tipo koder
  
  Obtener la edad a partir de la fecha de nacimiento
  
  Obtener promedio de sus scores
  
  ---
  Colección de Koder que pertenezcan a JavaScript
  
  Colección de Koder que pertenezcan a Python
  
  {
    kavascrip: [
      koder1
    ],
    python: [
      
    ]
  
  }
  */



// }

// Función para calcular la edad de cada koder
const getAge = (birthday) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const bornYear = parseInt(birthday.substr(0, 4));
  return currentYear - bornYear;
}

//Función para obtener el promedio de sus módulos
const getAverage = (theArray) => {
  let scoresAverage = theArray.reduce((counter, currentValue) => {
    return counter + currentValue.score/theArray.length
  },0)
  return parseFloat(scoresAverage.toFixed(1))
}

//Función constructora
// function Koder(name, lastName, birthday, generation, bootcamp, scores){
//   this.name = name;
//   this.lastName = lastName;
//   this.birthday = birthday;
//   this.age = getAge(birthday) 
//   this.generation = generation;
//   this.bootcamp = bootcamp;
//   this.scores = scores;
//   this.average = getAverage(scores)
// }

class Koder{
    constructor(name, lastName, birthday, generation, bootcamp, scores){
        this.name = name;
        this.lastName = lastName;
        this.birthday = birthday;
        this.age = getAge(birthday) 
        this.generation = generation;
        this.bootcamp = bootcamp;
        this.scores = scores;
        this.average = getAverage(scores)
    }
}

//Función creadora del nuevo arreglo con objetos tipo koder
const newKodersArray = (theArray) => {
  return theArray.map((item) => {
    let newKoderObject = new Koder(item.name, item.lastName, item.birthday, item.generation, item.bootcamp, item.scores)
    return newKoderObject
  })
}

let koders2 = newKodersArray(koders)
console.log(koders2)



// Colección de Koder que pertenezcan a JavaScript o Python

// Solución 1
const kodersAccordingToBootcamp = (theArray, bootcampName) => {
  return theArray.filter((eachKoder) => eachKoder.bootcamp === bootcampName  
  )
}

console.log(kodersAccordingToBootcamp(koders2, "JavaScript"))
console.log(kodersAccordingToBootcamp(koders2, "Python"))

//Solución 2

const kodersAccordingToBootcamp2 = (theArray) => {
    let bootcampsNameArray = theArray.reduce((counter, currentValue) => {
        if(currentValue.bootcamp == "JavaScript") counter.JavaScript.push(currentValue)
        else if (currentValue.bootcamp == "Python") counter.Python.push(currentValue)
        return counter
    }, {JavaScript:[], Python:[]})
    return bootcampsNameArray
}

// console.log(kodersAccordingToBootcamp2(koders))

//Solución 3

// const kodersAccordingToBootcamp3 = (theArray) => {
//     let allBootcamps = theArray.reduce((counter, currentValue) => {
//         if(!counter.includes(currentValue.bootcamp)) counter.push(currentValue.bootcamp)
//         return counter
//     },[])
//     theArray.reduce((counter, currentValue) => {

//     })
//     let bootcampsNameArray = theArray.reduce((counter, currentValue) => {
//          if(!currentValue.bootcamp in counter) counter.currentValue.bootcamp = []
//     }, {})
//     return allBootcamps
// }


//-------------------------- retomar la siguiente solución ------------------

// const kodersAccordingToBootcamp3 = (theArray) => {

//     let bootcampNames= theArray.reduce((counter, currentValue) => {
//          if(!(currentValue.bootcamp in counter)){
//             counter[currentValue.bootcamp] = new Array;
//         }
//         return counter
//     }, {})
//     return bootcampNames

//     let kodersByBootcamp = theArray.reduce((acumm, current) => {
//         if(current.bootcamp in counter){
//             counter[currentValue.bootcamp].push(currentValue)

//         }
//         return counter
//     }, counter)

//     return kodersByBootcamp




// }

// console.log(kodersAccordingToBootcamp3(koders))


