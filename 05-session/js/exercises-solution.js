input = "a very large string"
output = ""
for (i = 0; i < input.length; i++){
    if(i%2 == 0){
        output = output + input[i]

    }else{
        output = output + input[i].toUpperCase()
    }
}

console.log(output)


//-----------------------


input = "a very large string"
// let newOutput = input
let newString
for (i = 0; i < input.length; i = i + 2){
    newString = input.replace(input[i], input[i].toUpperCase())
}
console.log(newString)


//-----------------------------------------


function textUpperLower2(text){
    let recorrido
    for(let i=0;i<input.length;i=i+2){
        recorrido = text.replace(text[i],input[i].toUpperCase())
    }
}
textUpperLower("recorrer en la cadena") 
