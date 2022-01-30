const nodemailer = require('nodemailer');
const fs = require('fs');
require('dotenv').config();

module.exports = {
    renderProject: function (req, res) {
        var id = req.query.id;
        if (id == null) {
            res.render('projects');
            return;
        }
        if (!fs.existsSync(`./views/projects/${id}.html`)) {
            res.status(404);
            res.render('error/404');
            return;
        }
        res.render('projects/' + id);
    },

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