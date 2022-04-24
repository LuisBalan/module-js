let arrayPersons = [
    {
        name: "Phibee", age: 25, vaccinated: true, gender: "mujer"
    },
    {
        name: "Katrinka", age: 26, vaccinated: false, gender: "mujer"
    },
    {
        name: "Bruno", age: 48, vaccinated: false, gender: "hombre"
    },
    {
        name: "Jon", age: 22, vaccinated: true, gender: "hombre"
    },
    {
        name: "Brian", age: 20, vaccinated: false, gender: "hombre"
    },
    {
        name: "Eugene", age: 38, vaccinated: true, gender: "hombre"
    },
    {
        name: "Big Bob", age: 29, vaccinated: true, gender: "hombre"
    },
    {
        name: "Ximena", age: 40, vaccinated: false, gender: "mujer"
    },
    {
        name: "Paulet", age: 37, vaccinated: false, gender: "mujer"
    },
    {
        name: "Harold", age: 45, vaccinated: true, gender: "hombre"
    },
    {
        name: "Gerald", age: 22, vaccinated: false, gender: "hombre"
    },
    {
        name: "Arnold", age: 35, vaccinated: true, gender: "hombre"
    },
    {
        name: "Gelga", age: 28, vaccinated: true, gender: "mujer"
    },
    {
        name: "Lila", age: 18, vaccinated: true, gender: "mujer"
    },
    {
        name: "Rhonda", age: 18, vaccinated: true, gender: "mujer"
    },
]

/*
Usar reduce para obtener la siguiente informacion
- Un array con aquellas personas que se vacunaron
- la edad promedio de todos los vacunados
- un array con aquellas personas que se vacunaron y que son menores a 30 años
- la edad promedio de los no vacunados
- el porcentaje de vacunados vs no vacunados
- el procentaje de mujeres que se vacunaron
- el porcentaje de los hombres que vacunarion
*/



// - Un array con aquellas personas que se vacunaron -----------------------------------------

const vaccinatedPeopleArray = (dataArray) => {
    let vaxArray = dataArray.reduce((counter, everyPerson) => {
        if(everyPerson.vaccinated === true) counter.push(everyPerson.name)
        return counter
    }, [])

    return vaxArray

}

console.log(vaccinatedPeopleArray(arrayPersons))


// - la edad promedio de todos los vacunados ----------------------------------------

const vaccinatedPeopleMeanAge = (dataArray) => {
    const meanAge = dataArray.reduce((counter, everyPerson) => {
    return counter + everyPerson.age/dataArray.length
    },0)

   return meanAge
}

console.log("La edad promedio de los vacunados es:",vaccinatedPeopleMeanAge(arrayPersons).toFixed(0))


// - un array con aquellas personas que se vacunaron y que son menores a 30 años

const vaccinatedLessThan30People = (dataArray) => {
    let vaccinatedArray = dataArray.reduce((counter, everyPerson) => {
        if(everyPerson.vaccinated === true && everyPerson.age < 30){
            counter.push(everyPerson.name)
        }
        return counter
    }, [])
    return console.log(vaccinatedArray)

}

vaccinatedLessThan30People(arrayPersons)


// // - la edad promedio de los no vacunados

// const notVaccinatedPeopleMeanAge = (dataArray) => {
    

// }


// - el porcentaje de los hombres que vacunarion

const vaccinatedMenPercentage = (dataArray) => {
    
}






//   1-recoger dos dias de tareas
//   2- convertur las duraciones de las tareas en horas, en lugar de minutos
//   3-Filtarar todo lo que tomo dos horas o mas
//   4-Sumar todo
//   5-Multiplica el resultado por una tarifa de hora para facturacion por dia
//   6- produce una cantidad formateada en dolares
//   7-encadenar todos los metodos


  const monday = [
    {
        'name'     : 'Write a tutorial',
        'duration' : 180
    },
    {
        'name'     : 'Some web development',
        'duration' : 120
    }
];

const tuesday = [
    {
        'name'     : 'Keep writing that tutorial',
        'duration' : 240
    },
    {
        'name'     : 'Some more web development',
        'duration' : 180
    },
    {
        'name'     : 'A whole lot of nothing',
        'duration'  : 240
    }
];




// const trueVotants = (totalVotantsArray) => {
//     let onlyTrueVotants = totalVotantsArray.reduce((counter, eachPerson) => {
//         if(eachPerson.voted == true){
//             counter.push(eachPerson)
//         }
//     }, [])
//     return onlyTrueVotants
// }

// console.log(trueVotants(arrayPersons))