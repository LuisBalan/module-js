let number1 = parseFloat(window.prompt("Ingrese un numero: "))
let number2 = parseFloat(window.prompt("Ingrese otro numero: "))

if(number1 - number2 > 0){
    console.log(`${number1} es mayor que ${number2}`)
}else if(number1 - number2 < 0){
    console.log(`${number2} es mayor que ${number1}`)
}else{
    console.log(`${number1} es igual a ${number2}.`)
}