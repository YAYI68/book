
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer")


// type User = {
//     id:string,
//     email:string
// }

export const comparePassword = (password:string,hash:string)=>{
    return bcrypt.compare(password,hash)
}

export const hashPassword = async(password:string)=>{
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    return bcrypt.hash(password,salt)
}

export const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_SERVER_HOST,
            port: process.env.EMAIL_SERVER_PORT,
            service:process.env.EMAIL_SERVER_SERVICE,
            secure:Boolean(process.env.EMAIL_SERVER_SECURE) ,
            auth: {
              // TODO: replace `user` and `pass` values from <https://forwardemail.net>
              user:process.env.EMAIL_USER,
              pass:process.env.EMAIL_PASSWORD
            },
            tls: {
                rejectUnauthorized: false
            }
});

type JWTUSER={
  _id:string,
  email:string,
}

export const createJwt = (user:JWTUSER,options:any)=>{
    const token = jwt.sign({id:user._id,email:user.email},
        process.env.NEXTAUTH_SECRET,options
        )
        return token;
}




export const messageTemplate=(name:string,url:string)=>{

return`
     <style>
       .confirm{
        width:fit-content;
        text-align:center;
        display:block;
        background:lightblue;
        color:white;
        font-size:1rem;
        border-radius:5px;
       }
     </style>
     <h2>Hi ${name}, </h2>
     <p style="font-size:1.2rem">Welcome to  <b>Studee</b> ! We\'re very excited to have you on board.</p>
     <p style="font-size:1.2rem">To get started with <b>Studee</b>, please confirm your account below.</p>
     <a href="${url}" class="confirm">Confirm your account </a>
     <p style="font-size:1.2rem">Need help, or question reply to this email, we love to help you. </p>
     <p style="margin-top:2rem">Cheers</p>
     <p >Studee</p>
     <hr>
     <p>If you are have trouble clicking on the "Confirm your account " button, copy and paste the URL below into your web browser. </p>
     <a href="${url}">${url}</a>
`}


// export function convertToBase64(file:any){
//   return new Promise((resolve, reject) => {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.onload = () => {
//       resolve(fileReader.result)
//     };
//     fileReader.onerror = (error) => {
//       reject(error)
//     }
//   })
// }