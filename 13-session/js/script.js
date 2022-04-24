class PersonaOther{
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;

    }
}

const randomPersona = new PersonaOther("luis", "balan")
console.log(randomPersona)


class Persona{
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }
}

class Koder extends Persona {
    constructor(bootcamp, generation){
        super(name, lastName)
        this.bootcamp = bootcamp;
        this.generation = generation;
    }
}

const koder1 = new Koder("JavaScript", 14);
console.log(koder1)

