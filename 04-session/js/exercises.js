/*
    Ejercicio 1:
    Pedir al usuario usuario un numero entre 1 y 10
    Imprimir la tabla de multiplicar de ese número
    p.ej.
    3 x 1 = 3
    3 x 2 = 6
*/

Solucion:

// solicitar numero
// definir ciclo a usar
// establecer el index
// hacer el producto del numero ingresado por el index
// imprimir resultados
// incrementar el index en una unidad



function multTable(){
    let userNumber1 = parseInt(window.prompt("Ingrese un numero entre 1 y 10:"))
    index = 1
    while(index <= 10){
        let product = userNumber1 * index
        console.log(`${userNumber1} X ${index} = ${product}`)
        index++
    }
}

// multTable()



/*
Ejercicio 2:
Pedir al usuario un numero entre 10 y 100
Imprimir todos los numeros pares que existen entre 1 y ese numero
*/

// Solucion:

function evenNumbers(){
    let userNumber2 = parseInt(window.prompt("Ingrese un número entre 10 y 100:"))
    i = 1
    while(i <= userNumber2){
        if(i%2 == 0){
            console.log(i)
        }
        i++
    }
}

// evenNumbers()




/*
Ejercicio 3:
Imprimir en consola la suma total de todos los digitos de una cantidad p.ej. "1234" -> 10
*/

function quantitySum(){
    let userNumber3 = window.prompt("Ingrese una cantidad: ")
    stringUserNumber3 = userNumber3.split("")
    let sum = 0
    for (let element = 0; element < stringUserNumber3.length ; element++){
        sum = sum + parseInt(stringUserNumber3[element])
    }

console.log(sum)

}

// quantitySum()



/*
Ejercicio 4:
Imprimir en consola el siguiente patrón

*
**
***
****
*****
******
*******
********
*********
**********

*/

function asterisks(){
    let i = 1
    let nSymbols = "*"
    while(i < 11){
        nSymbols = nSymbols + "*"
        console.log(`${nSymbols}`)
        i ++
    }
}

// asterisks()



//------------------- Extra --------------------

// let i = 1
// let printDigits = `${i}`
// while(i <= 10){
//     console.log(`${printDigits}`)
//     printDigits = printDigits + `${i}`  
//     i++
// }


let i = 1
let nSymbols = `${i}`

console.log(nSymbols)

let symb = "2"
let nSymb = 2*symb
console.log(nSymb)
// while(i < 11){
//     nSymbols = nSymbols + `${i}`
//     console.log(`${nSymbols}`)
//     i ++
// }