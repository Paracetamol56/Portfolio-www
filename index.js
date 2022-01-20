const express = require('express');
const path = require('path');
const port = 8880;

var app = express();

// Routers
var pageRouter = require('./routes');

// Rendering engine setup
// app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'src')));

// Setup routes
app.use('/', pageRouter.get('/'));

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

module.exports = app;