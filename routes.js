const express = require('express');
const controller = require('./controller');
var router = express.Router();

// home page.
router.get('/', function (req, res) {
    console.log(req.ip + ' is requesting /');
    res.render('index');
});

// contact page.
router.get('/contact', function (req, res) {
    console.log(req.ip + ' is requesting /contact');
    res.render('contact');
});

// privacy page.
router.get('/privacy', function (req, res) {
    console.log(req.ip + ' is requesting /privacy');
    res.render('privacyPolicy');
});

// project page.
router.get('/project', function (req, res) {
    console.log(req.ip + ' is requesting /project');
    controller.renderProject(req, res);
});

// project page.
router.get('/content/projects', function (req, res) {
    console.log(req.ip + ' is requesting /content/projects');
    controller.sendAllProjects(req, res);
});

// 404 error page
router.get('*', function (req, res) {
    console.log(req.ip + ' is requesting ' + req.path);
    res.status(404);
    res.render('error/404');
});

// mailer API
router.post('/contact/sendmail', function (req, res) {
    console.log(req.ip + ' is requesting /contact/sendmail');
    controller.sendMail(req, res);
});

module.exports = router;