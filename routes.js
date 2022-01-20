var express = require('express');
var router = express.Router();

/* home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

/* githubDashboard page. */
router.get('/githubDashboard', function (req, res, next) {
    res.render('githubDashboard');
});

module.exports = router;