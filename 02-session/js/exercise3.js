let nombre = window.prompt("Ingrese su nombre: ")
let pesoTierra = parseFloat(window.prompt("Ingres su peso actual en kg: "))
let gTierra = 9.8
let gLuna = 1.62
let pesoLuna = (pesoTierra/gTierra)*gLuna

console.log(`${nombre}, su peso en la Tierra es de ${pesoTierra} kg pero en la Luna usted pesaría ${pesoLuna.toFixed(2)} kg.`)