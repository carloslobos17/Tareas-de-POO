class Camas {
    constructor(tacto, sensacion){
        this.tacto = tacto
        this.sensacion = sensacion
    }
    acostarse(){
        return `Esta cama esta ${this.tacto} es muy ${this.sensacion}`
    }
}

class CamaEnHotel{
    acostarse(){
        return `Esta cama de hotel esta ${this.tacto} es muy ${this.sensacion}`
    }
}

class CamaEnCasa{
    acostarse(){
        return `Esta cama de mi casa esta ${this.tacto} es muy ${this.sensacion}`
    }
}

const person1 = new CamaEnHotel ("suave", "comoda")
const person2 = new CamaEnCasa ("Dura", "plana")

person1.acostarse()
person2.acostarse()