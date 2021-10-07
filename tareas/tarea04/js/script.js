// Crear funcion que permita indicar la cantidad de koders a guardar,
// que pida tantos nombre completos de koders como se haya indicado, y 
// que imprima el nombre del koder y su numero asignado.

// Ejemplo:
// input   
//    - Freddy Krueger
//    - Michael Myers
//    - Jason Vorhees

// output: 
//     koder 1: Freddy Krueger
//     koder 2: Michael Myers
//     koder 3: Jason Vorhees



// solicitar el numero de koders a guardar
// ciclo que pida nombre de koders
// crear array vacío en el cual se almacenarán los nombres de los koders
// iterar array para imprimir los elementos con el número indicado


function inputListItems(){
    let kodersArray = []
    for (index = 0; index < numKoders ; index++){
        koderName = window.prompt(`Ingrese el nombre del Koder ${index + 1}`)
        kodersArray.push(koderName)
    }
    
    for (i = 0; i < kodersArray.length ; i++){
        console.log(`Koder ${i+1}: ${kodersArray[i]}`)
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
