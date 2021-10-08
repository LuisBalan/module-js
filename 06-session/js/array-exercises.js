// ---------- Exercise One ---------------

// Solution 1

function reverseString(){
    let input = window.prompt("Ingrese una cadena:")
    inputArray = input.split("")
    let revertedInputArray = inputArray.reverse()
    let revertedInput = revertedInputArray.join("")
    console.log(revertedInput)

}


// Solution 2
function reverseString2(){
    let input = window.prompt("Ingrese una cadena: ")
    let output = input.split("").reverse().join("")
    console.log(output)
}

// reverseString()
// reverseString2()



//----------- Exercise Two ------------------------
// Añadir iniciales al final de los nombres de los koders.

function inputListItems(){
    let kodersArray = []
    for (index = 0; index < numKoders ; index++){
        koderName = window.prompt(`Ingrese el nombre del Koder ${index + 1}`)
        kodersArray.push(koderName)
    }
    
    for (i = 0; i < kodersArray.length ; i++){
        let splittedName = kodersArray[i].split(" ")
        let kName = splittedName[0][0].toUpperCase()
        let kLastName = splittedName[1][0].toUpperCase()
        console.log(`Koder ${i+1}: ${kodersArray[i]} (${kName}. ${kLastName}.)`)
    }
}

function listMaker(){
    numKoders = window.prompt("¿Cuántos koders desea ingresar?")

    if (numKoders == 0){
        console.log(`No se puede hacer una lista con 0 elementos. Ingrese una cantida válida.`)
    }else if(isNaN(numKoders)){
        console.log("Ingrese una cantidad válida.")
    }else if(numKoders - parseInt(numKoders) != 0){
        console.log(`No se puede hacer una lista con ${numKoders} elementos. Ingrese un número válido.`)
    }else {
        inputListItems()
    }

}

listMaker()


