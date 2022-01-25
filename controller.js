const html = require('html');
const nodemailer = require('nodemailer');
require('dotenv').config();

module.exports = {
    sendMail: function (req, res) {
        var transporter = nodemailer.createTransport({
            host: "mail.gmx.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        console.log(req.body);

        mailOptions = {
            from: process.env.MAIL_USER,
            to: 'matheo.galu56@gmail.com',
            subject: 'You have a new message from your portfolio contact form',
            text: 'Mathéo, you have a new message from your portfolio contact form.\n\n' +
                'Name: ' + req.body.name + '\n' +
                'Email: ' + req.body.email + '\n' +
                'Message:\n' +
                req.body.message
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.send(error);
            } else {
                console.log('Email sent: ' + info.response);
                res.send('Email sent: ' + info.response)
            }
        });
    }
}