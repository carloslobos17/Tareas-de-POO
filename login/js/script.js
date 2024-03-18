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

    Consulta = new usuario(user,pwd,'lobos','123')
    Consulta.validar()

}

function informacion(){
    let nombre = document.getElementById("nombre").value
    let fecha = document.getElementById("fecha").value
    let genero = document.getElementById("genero").value
    let departamento = document.getElementById("dept").value
    let ciudad = document.getElementById("ciudad").value
    let telefono = document.getElementById("telefono").value
    let descripcion = document.getElementById("descrip").value

    var url = "perfil.html?nombre=" + encodeURIComponent(nombre)+
                "&fecha=" + encodeURIComponent(fecha)+
                "&genero=" + encodeURIComponent(genero)+
                "&dept=" + encodeURIComponent(departamento)+
                "&ciudad=" + encodeURIComponent(ciudad)+
                "&telefono=" + encodeURIComponent(telefono)+
                "&descrip=" + encodeURIComponent(descripcion);
            window.location.href = url;
}
