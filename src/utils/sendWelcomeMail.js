const transporter = require("../utils/mailer");

const sendWelcomeMail = (data) => {
  transporter
    .sendMail({
      from: "smavilp@gmail.com",
      to: data.email,
      subject: "Bienvenido!",
      text: "Mensaje en texto plano",
      html: `<h1>Hola ${data.username}</h1><b> <h2>Gracias por registrarte </h2>`
    })
    .then(() => console.log("mensaje enviado"))
    .catch((error) => console.error(error));
};

module.exports = sendWelcomeMail;
