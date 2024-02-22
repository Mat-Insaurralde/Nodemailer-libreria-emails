import express  from "express";
import nodemailer from 'nodemailer';

const app = express();

app.get('/mail',async (req, res) => {
let result = await transport.sendMail({
 from:'coder test <javiermatias115@gmail.com>',  //Tu correo  de origen
to:'javiermatias115@gmail.com',    //Correo a los que se enviara el mensaje
subject:'correo de prueba',    //Asunto del mensaje
html:`<div> 
<h1>¡Esto es un test!</h1>

<img src="cid:img1"/>  

</div>`,
attachments:[{
// Envia documentos o imagenes
//filename:'img1.jpg',
//path:__dirname + '/public/img1.jpg' ,//Ruta donde esta la  imagen
//cid:'img1'

}]    //Agregar archivos adjuntos
});
 res.send({status:'sucess',message:"Mensaje enviado"})
});


const transport = nodemailer.createTransport({
ervice: "gmail",
port:587,
auth: { user: '+++++++++', pass: '+++++++++++++++' } , //Useuario y Contraseña de tu cuenta de Gmail
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(' Server is running on port ', PORT));