let calif = parseInt(window.prompt("Ingrese la calificación (valores permitidos van del 0 al 100): "))

if(calif <= 100 && calif >= 0){
    if (calif >= 90){
        console.log("Tu nota es A")
    }else if (calif >= 80 && calif < 90){
        console.log("Tu nota es B")
    }else if(calif >= 70 && calif < 80){
        console.log("Tu nota es C")
    }else if(calif >= 60 && calif < 70){
        console.log("Tu nota es D")
    }else if(calif >= 50 && calif < 60){
        console.log("Tu nota es E")
    }else{
        console.log("Tu nota es F")
    }
}else{
    console.log("El numero ingresado no cumple con lo solicitado. Ingrese un numero entre 0 y 100.")
}

