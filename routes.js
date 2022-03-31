const express = require('express');
const controller = require('./controller');
var router = express.Router();

// home page.
router.get('/', function (req, res) {
    console.log(req.ip + ' is requesting ' + req.path);
    res.status(200).render('index');
});

// contact page.
router.get('/contact', function (req, res) {
    console.log(req.ip + ' is requesting ' + req.path);
    res.status(200).render('contact');
});

// privacy page.
router.get('/privacy', function (req, res) {
    console.log(req.ip + ' is requesting ' + req.path);
    res.status(200).render('privacyPolicy');
});

// project page.
router.get('/project', function (req, res) {
    console.log(req.ip + ' is requesting ' + req.path);
    controller.renderProject(req, res);
});

// project page.
router.get('/content/projects', function (req, res) {
    console.log(req.ip + ' is requesting ' + req.path);
    controller.sendAllProjects(req, res);
});

// 404 error page
router.get('*', function (req, res) {
    console.log(req.ip + ' is requesting ' + req.path);
    res.status(404).render('error/404');
});

// mailer API
router.post('/contact/sendmail', function (req, res) {
    console.log(req.ip + ' is posing /contact/sendmail');
    controller.sendMail(req, res);
});

module.exports = router;