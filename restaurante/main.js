class Menu {
    constructor() {
      this.items = {
        "burger": 2.00,
        "tacos": 5.00,
        "nachos": 1.50,
        "coca": 0.50,
        "noCoca": 0.25
      };
    }

  
    get precio(){
        return this.items
    }
  }

class Pedidos{
    constructor(nombre){
        this._nombre = nombre
        this.estado = "en cocina"
    }

}

const cliente1 = new Pedidos("Jane")

function resetearPedido(){
    document.getElementById("cuanto").value = "";
    document.getElementById("cuanto2").value = "";
    document.getElementById("cuanto3").value = "";
    document.getElementById("cuanto4").value = "";
    document.getElementById("cuanto5").value = "";
    return alert("Listo!")
}

function burgers(){
C1 = document.getElementById("burger").value;
document.getElementById("cuanto").value = C1;
}
function tacos(){
    C1 = document.getElementById("tacos").value;
    document.getElementById("cuanto2").value = C1;
    }
function nachos(){
    C1 = document.getElementById("nachos").value;
    document.getElementById("cuanto3").value = C1;
    }
function cocas(){
    C1 = document.getElementById("cocas").value;
    document.getElementById("cuanto4").value = C1;
    }
function otrasSodas(){
    C1 = document.getElementById("otrasSodas").value;
    document.getElementById("cuanto5").value = C1;
    }
            









