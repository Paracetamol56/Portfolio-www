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
        if (!fs.existsSync(`./public/content/projects/${id}.json`)) {
            res.status(404);
            res.render('error/404');
            return;
        }
        res.render('project');
    },

    sendAllProjects: function (req, res) {
        // Combine all projects json into one json and send it as json
        var projects = [];
        var projectFiles = fs.readdirSync('./public/content/projects');
        for (var i = projectFiles.length - 1; i >= 0; i--) {
            var project = JSON.parse(fs.readFileSync(`./public/content/projects/${projectFiles[i]}`));
            project.id = projectFiles[i].replace('.json', '');
            projects.push(project);
        }
        res.json(projects);
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