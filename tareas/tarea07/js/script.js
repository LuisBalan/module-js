console.log(document)

const h1 = document.createElement("h1");
const text = document.createTextNode("Hola Koders")
h1.appendChild(text)

document.body.appendChild(h1)

console.log(h1)

const personas = [
    "arnold", 
    "gerald",
    "helga"
]

const ul = document.createElement("ul")
personas.forEach((persona) => {
    const li = document.createElement("li");
    const text = document.createTextNode(persona);
    li.appendChild(text);
    ul.appendChild(li)
});

document.body.appendChild(ul)