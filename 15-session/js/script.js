// Métodos para acceder a elementos del DOM
// let items = document.getElementsByTagName("item")
// let items = document.getElementsByClassName("item-list")
// let items = document.getElementById("onelist")
// console.log(items)




const itemQuery = document.querySelector("li")
const itemQueryAll = document.querySelectorAll("li.item-list")
console.log(itemQuery)
console.log(itemQueryAll)

itemQueryAll.forEach((li) => {
    console.log(li)
    li.classList.add('bg-success')
})

const button1 = document.querySelector('#button-one')
console.log(button1)


// function action(param){
//     console.log("Cliiick")
// }
// button1.addEventListener("click", action)
// items.forEach(element => {
//     console.log(element)
// });

button1.addEventListener("click", (action) => {
    console.log(action)
    console.log("cliick")
})