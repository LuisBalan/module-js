// estructura de un objeto:

const person = {
    name: "luis", 
    height: 1.72,
    weight: 80
}

console.log(person)

class triangles{
    constructor(feature1, feature2, feature3){
        this.side1 = feature1,
        this.side2 = feature2,
        this.side3 = feature3
    }
}

const equilatero = new triangles(5, 5, 5)
const escaleno = new triangles(3, 4, 5)
const isosceles = new triangles(4, 5, 5)

console.log(equilatero)
console.log(escaleno)
console.log(isosceles)

// creating constructor function

function Persona(name){
    this.name = name;
    this.saludar = function(aquiensaludar){
        console.log(`Hola`, aquiensaludar)
    }
}

const Persona1 = new Persona("jose")
console.log(Persona1.saludar("alfredo"))

function Circle (feature1, feature2){
    this.radio = feature1,
    this.color = feature2,
    this.area = Math.PI*this.radio**2

}

let blackCircle = new Circle(2, "black")
console.log(blackCircle)
console.log(blackCircle.area.toFixed(2))