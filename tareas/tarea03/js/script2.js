// Solicitar al usuario ingresar un numero
// Crear una funcion que genere un string con caracteres aleatorios, 
// la longitud del string debe ser igual que el numero que ingreso el usuario

// input : 6
// output: '?AQX>H'

// --------------------- Solución ------------------------------------------------------------


//función generadora de numeros enteros entre 0 y 15 (para el sistema hexadecimal)

function getRandomNumber(){
    return parseInt(Math.random()*(33-127)+33)
}

console.log(getRandom(33, 127))

// función para elegir un número del sistema hexadecimal de manera aleatoria

// function getRandomHexDigit(){   
//     let arrayHex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
//     let randomNumber = getRandom(0, 16)
//     console.log(getRandom(33, 126))
//     let randomHexDigit = (arrayHex[randomNumber])
//     return randomHexDigit
// }

// función para formar la parte hexadecimal del unicode

// function getHexPart(){
//     let hexPart = ""
//     for (index = 1 ; index <= 4 ; index ++){
//         hexPart += getRandomHexDigit()
//     }
//     // console.log(hexPart)
//     return hexPart
// }

// getHexPart()

// función para ingresar dígitos e imprimir cadena de caracteres

function userRandomCharString(){
    let numberOfChar = parseInt(window.prompt("Ingrese un número entero mayor"))
    let randomChars = ""
    let index = 1
    while(index <= numberOfChar){
        randomChars = randomChars + "\\u"+`${getHexPart()}`
        index ++
    }
    // let userRandomChars = randomChars
 
 
    console.log(`${randomChars}`)
}

// userRandomCharString()


   // console.log(index)


// console.log("\uA108\u2A26")

// for (index = 1; index <= 4 ; index++ ){
//     randomChars = randomChars + `${getHexPart()}`
// }

// userRandomCharString()



// console.log("\u0158\uE80E")















//
// console.log(getHexPart())

// let numberOfChar = parseInt(window.prompt("Ingrese un número entero: "))
// let userCharString = ""
// for (index = 1; index <= numberOfChar; index++){
//     userCharString += getRandomHexChar()
// }

// console.log(userCharString)

// console.log(getRandomHexChar())

// let randomNumber = Math.random()
// console.log(randomNumber)
// let randomIntNumber = Math.floor((randomNumber*10))
// console.log(randomIntNumber)
// // 