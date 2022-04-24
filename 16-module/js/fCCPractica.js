const masterEl = document.getElementById('master')
console.log(masterEl)
const masterAnchor = document.getElementById("firstAnchor")
console.log(masterAnchor)

const elementOne = document.getElementById('master2')
console.log(elementOne)

// const reactPar = document.getElementsByClassName('master2')
// console.log(reactPar)


// const btn = document.getElementById('btn')

// btn.addEventListener('click', function master(){
//     let master = document.getElementsByClassName('master2');
//     console.log(master)
//     master[2].innerHTML = 'i need a job';
// })


// second exercise
// const btn2 = document.getElementById('btn2')

// btn2.addEventListener('click', function master(){
//     let master = document.getElementsByTagName('p');
//     let masterEl = master[1];
//     master[1].innerHTML = 'Code editors';
//     console.log(masterEl)
// })


// 3rd exercise -------------------------------------------
// const master = document.querySelector('#master')
// console.log(master)

// const master = document.querySelectorAll('.master')
// console.log(master[1])

// const anotherMaster = document.querySelector('.master#reactID')
// console.log(anotherMaster)



//How to manipulate elements in the DOM  .------------

// const parent = document.getElementById('parent').lastElementChild
// console.log(parent)

// const parent2 = document.getElementById('parent').children[3]
// console.log(parent2)

// const secondChild = document.getElementById('secondchild')
// console.log(secondChild)

// console.log(secondChild.parentNode)
// console.log(secondChild.nextElementSibling)
// console.log(secondChild.previousElementSibling)


// - HOw to create elements

// const createEl = document.createElement('div')
// console.log(createEl)

// // How to Set innerHTML--------------------------------------------

// const innerHTML = createEl.innerHTML = 'i am a frontend developer'
// console.log(createEl)

// createEl.textContent = "soy un desarrollador frontend"
// console.log(createEl)

// How to append an element ----------------------

// const createEl = document.createElement('div')

// const innerhtml = createEl.innerHTML = 'i am frontend developer'

// const parentEl = document.getElementById('parent')

// parentEl.appendChild(createEl)

// console.log(parentEl)

// insert an elemento before another existing

// const firstchildEl = document.getElementById('firstchild')

// parentEl.insertBefore(createEl, firstchildEl)

// How to Replace a Child Element

// parentEl.replaceChild(createEl, firstchildEl)
// console.log(parentEl)

// const firstchildAgain = document.createElement('div')
// firstchildAgain.textContent = 'i am the first child'
// parentEl.insertBefore(firstchildAgain, createEl)

// Add CSS style

const buttonEl = document.getElementById('master')
buttonEl.addEventListener('click', addFunction)

// function addFunction(){
//     buttonEl.classList.remove('button')
// }
function addFunction(){
    buttonEl.classList.toggle('button')
}


// How to remove a class
