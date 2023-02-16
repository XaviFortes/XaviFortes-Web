export const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "youremail@gmail.com",
    pass: "yourpassword",
  },
});

const mailOptions = {
  from: "youremail@gmail.com",
  to: "myfriend@yahoo.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(
  mailOptions,
  function (error: any, info: { response: string }) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  }
);
