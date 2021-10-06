// for-loop //

myArray = ["a", "b", "c", "d", "e"]
for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i])
}

let capitals = {
    "spain": "madrid",
    "mexico": "cdmx",
    "peru": "lima"
}

for (city in capitals){
    console.log(city)
    console.log(capitals[city])
}

// while-loop

let vuelta = 0
while(vuelta <= 10){
    if(vuelta%2 == 0){
        console.log(`el numero ${vuelta} es par`)
    }else{
        console.log(`el numero ${vuelta} es impar`)
    }
    vuelta ++
}


