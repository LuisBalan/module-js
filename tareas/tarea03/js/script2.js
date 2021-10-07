// Solicitar al usuario ingresar un numero
// Crear una funcion que genere un string con caracteres aleatorios, 
// la longitud del string debe ser igual que el numero que ingreso el usuario

// input : 6
// output: '?AQX>H'

// --------------------- Solución ------------------------------------------------------------


//función generadora de numeros enteros entre 0 y 15 (para el sistema hexadecimal)

function getRandomNumber(min, max){
    return parseInt(Math.random()*(max-min) + min)
}

function randomCharPrinter(){
    let randomCharString = ""
    
    index = 0
    while(index < numberOfChar){
        randomCharString += String.fromCharCode(getRandomNumber(33, 127))
        index ++
    }
    return console.log(`La cadena formada por ${numberOfChar} caracteres aleatorios es:\n ${randomCharString}`)
}

function randomCharGen(){
    numberOfChar = window.prompt("Ingrese el número de caracteres que desea imprimir: ")
    if(isNaN(numberOfChar)){
        console.log("No es posible elaborar una cadena. Por favor inserte un número.")
    }else if(numberOfChar-parseInt(numberOfChar) != 0){
        console.log(`No se puede elaborar una cadena con ${numberOfChar} elementos. Inserte un número entero igual o mayor que 1.`)
    }else if(numberOfChar == 0){
        console.log(`No se puede elaborar una cadena con ${numberOfChar} elementos. Inserte un número entero igual o mayor que 1.`)
    }else{
        randomCharPrinter()
    }    
}

randomCharGen()

// randomCharPrinter()