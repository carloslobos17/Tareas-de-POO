class Sesion {
    constructor(usuario, pass, bdusuario, bdpwd){
        this.usuario=usuario
        this.pass= pass
        this.bdusuario=bdusuario
        this.bdpwd=bdpwd
    }

    validar (){
        if(this.usuario== this.bdusuario && this.pass == this.bdpwd){
            alertify.success('Inicio de sesión exitoso');
            window.location.href = 'registro.html'
        }else if(this.usuario== this.bdusuario && this.pass != this.bdpwd){
            alertify.success('La contraseña no es correcta');
        }else if(this.usuario != this.bdusuario && this.pass == this.bdpwd){
            alertify.success('El usuario no es correcto');
        }else if(this.usuario != this.bdusuario && this.pass != this.bdpwd){
            alertify.success('Los datos ingresados no son correctos');
        }
    }
}


class usuario extends Sesion{
    constructor(usuario, pass, bdusuario, bdpwd){
        super(usuario, pass, bdusuario, bdpwd)
    }
}

function login (){
    let user = document.getElementById('user').value
    let pwd = document.getElementById('pwd').value

    Consulta = new usuario(user,pwd,'made','123')
    Consulta.validar()

}

function mostrar(){
    window.location.href = 'datos.html'
    let nom = document.getElementById("nombre").value
    document.getElementById("nombrei").value = nom
    let fec = document.getElementById("fecha").value
    document.getElementById("fechai").value = fec
    let gen = document.getElementById("genero").value
    document.getElementById("generoi").value = gen
    let dep = document.getElementById("dept").value
    document.getElementById("depti").value = dep
    let ciu = document.getElementById("ciudad").value
    document.getElementById("ciudadi").value = ciu
    let tel = document.getElementById("telefono").value
    document.getElementById("telefonoi").value = tel
    let des = document.getElementById("descrip").value
    document.getElementById("descripi").value = des

}

