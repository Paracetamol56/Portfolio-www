const express = require('express');
var router = express.Router();

/* home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

/* about page. */
router.get('/about', function (req, res, next) {
    res.render('about');
});

/* contact page. */
router.get('/contact', function (req, res, next) {
    res.render('contact');
});

/* github page. */
router.get('/githubdashboard', function (req, res, next) {
    res.render('githubDashboard');
});

module.exports = router;