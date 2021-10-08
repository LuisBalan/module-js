

function reverseString(){
    let input = window.prompt("Ingrese una cadena:")
    inputArray = input.split("")
    let revertedInputArray = inputArray.reverse()
    let revertedInput = revertedInputArray.join("")
    console.log(revertedInput)

}


reverseString()
