const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const cors = require("cors");
const PORT = process.env.PORT || 8180;
require("dotenv").config()

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.get("/", (req, res) => {
  res.send({ message: "get route is not available" });
});

app.post("/", (req, res) => {
  const { name, email, phone, message } = req.body;

  const tranporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const options = {
    from: "<Sanket Gawande>",
    to: email, // array of emails or comma seperated email string can be passedfor sending mail to multiple recepients
    subject: "This is mail from Contact form",
    html: `
    <b>Name</b> : ${name}
    <b>Phone</b> : ${phone}
    <p>${message}</p>

    ` // html template can be sent from here using html option
  };
  
  async function mail() {
    const sent = await tranporter.sendMail(options);
    res.send({
      sent,
      status: "sent",
      message: "We got your message , team well respond you very soon !",
    });
  }
  mail();
});

app.listen(PORT,(ERROR) => {
  if (ERROR) console.log(error);
  console.log("server running");
});
