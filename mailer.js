var nodemailer = require('nodemailer');

sendMail = function () {
    var transporter = nodemailer.createTransport({
        host: "mail.gmx.com",
        port: 587,
        secure: false,
        auth: {
            user: 'mathe0@gmx.fr',
            pass: '7w,<KT4K6/+mMcJw3UC3ij2&4t]7~g'
        }
    });

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = sendMail;