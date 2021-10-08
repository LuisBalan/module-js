// [
//     {   id: 1,
//         nombre: "freddy",
//         apellido: "kruegger",
//         iniciales: "()"
//     },
//     {
//         id: 2,
//         nombre: "freddy",
//         apellido: "kruegger",
//         iniciales: "()"
//     }
// ]


function createKoder () {
    const cantidad = prompt('Ingresa la cantidad de koders a crear ');
    let koders = [];
    // let kodersObject = {}    

    for (let index = 1; index <= cantidad; index++) {
        let kodersObject = {}
        const fullName = prompt('Ingresa nombre y apellido del koder ');
        const splittedName = fullName.split(' ');
        const name = splittedName[0]
        const lastName = splittedName[1]
        const initialName = splittedName[0].charAt(0).toUpperCase();
        const initialLastName = splittedName[1].charAt(0).toUpperCase();
        const initials = `${initialName}. ${initialLastName}.`
        kodersObject.id = index
        kodersObject.nombre = `${name}`
        kodersObject.apellido = `${lastName}`
        kodersObject.iniciales = initials
        koders.push(kodersObject)
    };
    console.log(koders);
};

createKoder()