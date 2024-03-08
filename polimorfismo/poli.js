class Personas{
    constructor(nombre){
        this.nombre = nombre
    }

    ComprarCon1(){
        return `${this.nombre} compro un producto con un dolar`
    }
}

class PersonasEnFrancia extends Personas{
    ComprarCon1(){
        return `${this.nombre} compro un baguette con un dolar`
    }
}

class PersonasEnElSalvador extends Personas{
    ComprarCon1(){
        return `${this.nombre} compro dos pupusas con un dolar`
    }
}

const person1 = new PersonasEnFrancia ("Fernando")
const person2 = new PersonasEnElSalvador ("Juan")

person1.ComprarCon1()
person2.ComprarCon1()