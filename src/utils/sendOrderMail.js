const transporter = require("../utils/mailer");

const sendOrderMail = (email) => {
  transporter
    .sendMail({
      from: "smavilp@gmail.com",
      to: email,
      subject: "Gracias!",
      text: "Mensaje en texto plano",
      html: "<h1>Gracias por tu compra. En estos momentos estamos preparando tu orden.</h1>"
    })
    .then(() => console.log("mensaje enviado"))
    .catch((error) => console.error(error));
};

module.exports = sendOrderMail;
