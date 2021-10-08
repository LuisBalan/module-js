const persona = {
    nombre: "freddy",
};

const test = "nombre"
// acceder a atributo

console.log(persona)
console.log(persona.nombre)
console.log(persona[test])

persona["apellido"] = "krueger"
persona.edad = 25
console.log(persona)

persona.saludar = function(saludo){
    return console.log(saludo)
}

persona.saludar("hola soy luis")

persona.despedirse = function(despedida){
    return despedida
}


// agregar valor  a una propiedad 
console.log(persona.despedirse("hasta la vista baby"))
console.log(persona["despedirse"]("hasta la vista baby"))
persona.saludar(persona.nombre)

// destructuring objects

const { nombre: nombreNuevo, saludar, apellido, edad } = persona;
console.log(nombreNuevo, "destructuring")
console.log(persona)

// destructuring arrays

const personArray = ["isaac", "richard", "max", "niels"]
const[item1, item2, item3, item4] = personArray
console.log(item1)



const personas = [
    {
    nombre: "freddy",
    apellido: "krueger"
    },

    {
    nombre: "jason",
    apellido: "vorhees"
    }
]
    


