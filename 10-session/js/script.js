const person = {
    nombre: "ivan",
    apellido: "diaz",
    direccion: "manga"
}


const property = "direccion"
person.nombre = "luis"
person["nombre"] = "carlos"



console.log(person["nombre"])
console.log(person["apellido"])
console.log(person[property])

if(property in person){
    console.log("existe")
} else {
    person["direccion"] = "asdfasdd"
}

console.log(person)

const otherNumbers = [3, 23, 530];
const numbersWithOutSpread = [1, 3, otherNumbers, 5, 6];
console.log(numbersWithOutSpread)

const number = [3, 5, 3, ...otherNumbers, 2, 5]
console.log(number)

numbersWithOutSpread.forEach(elemen => {
    console.log(elemen)
})

number.forEach(elemen => {
    console.log(elemen)
})

const person2 ={
    nombre: "ivan",
    apellido: "diaz"
}

const addressPerson = {
    avenue: "ave.revolucion",
    numberHouse: "120",
    cp : "55039"
}


const {avenue, numberHouse, ...rest} = addressPerson;
console.log(rest.cp)

let numbersArray = [3, 5, 9, 10, 12]
let suma = numbersArray.reduce((accum, current) => {
    return accum + current
}, 0)

console.log(suma)

const getNewCoverage = () => {
    
}