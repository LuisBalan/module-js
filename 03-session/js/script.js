// todos los ejercicios están comentados

// Ejercicio 1

// function converterName(){
//     let name = prompt("Ingrese su nombre")
//     let lastName = prompt("Ingrese sus apellidos")

//     function fullName(){
//         let lowerName = name.toLowerCase()
//         let upperLastName = lastName.toUpperCase()
//         return console.log(`${lowerName} ${upperLastName}`)
//     }
//     fullName()
// }

// converterName()

//----------------------------------------------------------------------------------------------------------------

// Ejercicio 2 //

// let userName = prompt("Ingrese su nombre")
// userNameLength = userName.length
// console.log(`\'${userName}\' tiene ${userNameLength} caracteres.`)

//-----------------------------------------------------------------------------------------------------------------


// Ejercicio 3 //


// let myWord = prompt("Ingrese su nombre: ")
// let findVocals = /[aeiou]/gi
// let vocalsArray = myWord.match(findVocals)
// console.log(`Su nombre tiene ${vocalsArray.length} vocales.`)


//-------------------------------------------------------------------------------------------------------------------


//Ejercicio 4// ready!

// const quote = `Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
// al estudiante que tiene a su lado`
// quotesArray = quote.match(/estudiante/g)
// console.log(`La palabra \'estudiante\' aparece ${quotesArray.length} veces.`)
// newQuote = quote.replace(/estudiante/g, "koder")
// console.log(newQuote)



//-------------------------------------------------------------------------------------------------------------------------


//Ejercicio 5// ready!

// function theLargestWord(arg){

//     let splittedInput = arg.split(" ")
//     let largestWord = ""

//     if(splittedInput[0].length > splittedInput[1].length){
//         largestWord = splittedInput[0]
//     }else if(splittedInput[0].length < splittedInput[1].length){
//         largestWord = splittedInput[1]
//     }else{
//         console.log("Ambas palabras tiene el mismo número de caracteres")
//     }

//     return(largestWord)
// }

// console.log(theLargestWord("ozzy osbourne"))


