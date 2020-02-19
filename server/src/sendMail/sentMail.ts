import * as nodemailer from 'nodemailer';

// async..await is not allowed in global scope, must use a wrapper
export const sendMail = async(email:string,body:string,name:string)=>{

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "hieudeptrai12345zzz@gmail.com", // generated ethereal user
      pass: "hieu12345" // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Thank for Contact" <foo@example.com>', // sender address
    to: email, // list of receivers
    subject: "Thank you", // Subject line
    // text: body, // plain text body
    html: `<b>Dear ${name} </b>
    <p>${body}</p>` // html body
  }); 

}
