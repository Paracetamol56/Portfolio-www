const express = require('express');
const path = require('path');
const port = 8880;

var app = express();

// Rendering engine setup
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routers
var router = require('./routes');
app.use('/', router);

// error handler
app.use(function (req, res) {
    console.log(req);
    console.log(res);
    // render the error page
    res.status(500).render('error/500.html');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

module.exports = app;