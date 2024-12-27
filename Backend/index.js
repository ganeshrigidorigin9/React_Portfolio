require('dotenv').config();
const express=require('express');
const nodemailer=require('nodemailer');
const cors=require('cors');

const app=express();


//middleware
app.use(cors());
app.use(express.json());

  

//nodemailer configuration
const transporter=nodemailer.createTransport({
    service:'gmail', //different email services(gmail,outlook)
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS,
    },
});


transporter.verify((error, success) => {
    if (error) {
      console.error('Email server connection failed:', error);
    } else {
      console.log('Email server is ready to send messages!',success);
    }
  });


app.post('/send',async (req,res)=>
{
    const {name,email,message}=req.body;

    try{
        await transporter.sendMail({
            from:email,
            to:'ganeshganssh8@gmail.com',
            subject:`New message from ${name}`,
            text:message,
        });
        res.status(200).send({ success: true, message: 'Email sent successfully!' });
   } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: 'Failed to send email' });
   }
 });

 app.listen(4000, () => {
    console.log("server is running at 8000");
  });