const nodemailer = require('nodemailer');


enviarEmail = async () =>{
    
    const config = {
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: "pruebadonprueba@gmail.com",
            pass: "prueba123"
        }
    }
    const mensaje = {
        from: "pruebadonprueba@gmail.com",
        to: "loboscarlos1704@gmail.com",
        subject: "funciona?¡",
        text: "prbando porbadno probando"
    }

    const transport =  nodemailer.createTransport(config);

    const info = await transport.sendMail(mensaje);

    console.log(info);
}

enviarEmail()
// function enviar() {

//     let asunto = document.getElementById("asunto").value 
//     let dest = document.getElementById("para").value 
//     let cuerpo = document.getElementById("para").value 
    
//     return console.log(asunto + "para:" + dest + cuerpo)
// }
