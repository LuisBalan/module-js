const personList = []
const button = document.getElementById("savePerson");
const inputs = document.querySelectorAll('input')


const createPerson = () => {
    const person = {
        name: '',
        lastName: ''
    }

    inputs.forEach((input) => {
        personList[input.name] = input.value
    });
    personList.push(person)
}

const createRow = () => {
    const row = document.createElement('tr');
    personList.forEach((person) => {
        const name = document.createElement('td')
        const lastName = document.createElement('td')
        name.textContent = person.name;
        lastName.textContent = person.lastName;
        row.appendChild('name')
        row.appendChild('lastName')
    });
    tbody.appendChild('row')
}

button.addEventListener('click', (e) => {
    console.log(e)
    createPerson()
    createRow()
    console.log(inputs, "inputs")
})