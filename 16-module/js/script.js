// Métodos para acceder a elementos del DOM
// let items = document.getElementsByTagName("item")
// let items = document.getElementsByClassName("item-list")
// let items = document.getElementById("onelist")
// console.log(items)




const itemQuery = document.querySelector("li")
const itemQueryAll = document.querySelectorAll("li.item-list")
// console.log(itemQuery)
// console.log(itemQueryAll)

itemQueryAll.forEach((li) => {
    console.log(li)
    li.classList.add('bg-success')
})

const button1 = document.querySelector('#button-one')
// console.log(button1)


// function action(param){
//     console.log("Cliiick")
// }
button1.addEventListener("click", (action) => {
    console.log(action)
    console.log("cliick")
})
// items.forEach(element => {
//     console.log(element)
// });

// creación de botones

const buttonINC = document.createElement("BUTTON")
const buttonDEC = document.createElement("BUTTON")
const data = document.createElement("p")

buttonINC.textContent = "Increment";
buttonDEC.textContent = "Decrement";

document.body.appendChild(data)
document.body.appendChild(buttonINC)
document.body.appendChild(buttonDEC)

let value = 0;
 
buttonINC.addEventListener('click',() => {
    value += 1
    console.log("click");
    data.textContent = value;
})

buttonDEC.addEventListener('click', () => {
    value -= 1;
    console.log('click');
    data.textContent = value;
})

/*
Crear botones desde JS
Crear el div donde estará el contador
Crear un listener para detectar el evento de los botones
crear una función que calcule el contador
Crear una función que actualice el contador en el DOM
*/
counter = 0
const buttonSUM = document.createElement("button");
buttonSUM.textContent = "Sumar"
buttonSUM.classList.add("btn", "btn-danger")
buttonSUM.setAttribute("data-calculate", "sum")

const buttonREST = document.createElement("button")
buttonREST.textContent = "Restar"
buttonREST.classList.add("btn", "btn-success")
buttonREST.setAttribute("data-calculate", "rest")
document.body.appendChild(buttonSUM)
document.body.appendChild(buttonREST)

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const operationType = event.target.dataset.calculate
        count.textContent = calculate(operationType);
        document.body.appendChild(count)
        console.log(calculate(operationType))
    
    })
})

const calculate = (operationType) => {
    let count = 0;
    if(operationType  === "suma"){
        count ++;
        return count
    }
        count --;
        return count
}


// DOM practica from freeCodeCamp

const masterEl = document.getElementById('mater')
console.log(masterEl)
