// Operadores aritmeticos


//+
//-
//*
// /
// %
// () para separar y agrupar cantidades

const division = 5 / 2;
const resultado = 10 % 2;
console.log(division);
console.log(resultado)
const test = 5 + 5 - 10 * 3
console.log(test)
console.log(`mi nombre es ${resultado}`) //este metodo se llama literal string

//relaciones de comparación

console.log(5 === "5")
console.log(5 == 5)

let numero = 1;
numero = numero + 1
console.log(numero)
console.log(++numero)
console.log(numero++) 

let number = 10
console.log(number)
console.log(++number)
console.log(number)
console.log("-------")

let numberA = 2
numberA *= 100
console.log(numberA)
console.log(++numberA)
console.log(numberA++)
console.log(numberA)

const age = 10

// age < 18: no es adulto 
// 18 <= age < 21 es adulto pero no puede tomar 
// age >= 21 es adulto y puede tomar

if (age >= 21){
    console.log("es adulto y puede tomar")
}else if(age >= 18 && age < 21){
    console.log("es adulto pero no puede tomar")
}else{
    console.log("no es adulto")
}


const newResultado = age > 18 ? "es adulto" : "No es adulto";
console.log(newResultado)