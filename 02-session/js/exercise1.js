// 1. Pedir al usuario por prompt un numero entre 1 y 100
//    - Verificar si es un par o impar e imprimir en resultado en consola

let number = parseInt(window.prompt("Ingrese un numero entero entre 1 y 100: "))

if(number >= 1 && number <= 100){
    
    if(number%2 == 0){
        console.log(`El ${number} es un numero par`)
    }else{
        console.log(`El ${number} es un numero impar`)
    }
}else{
    console.log("El numero ingreso no cumple con lo solicitado.")

}
