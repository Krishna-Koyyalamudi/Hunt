// Create express app
var express = require("express");
var path = require('path');
//const ejsLint = require('ejs-lint');
const expressLayouts = require('express-ejs-layouts');
const bodyparser = require("body-parser");
var app = express()
var db = require("./database.js")
var md5 = require("md5")
const routes = require('./routes');

app.use(expressLayouts)
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());



// Server port
var HTTP_PORT = process.env.PORT || 80

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.engine('ejs', engines.ejs)
// setup public folder
app.use(express.static('./public'));

app.use('/', routes)


// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});

