var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8081;

var app = express();

// ===== SERVE STATIC CONTENT FOR THE APP FROM THE PUBLIC DIRECTORY IN THE APPLICATION DIRECTORY =====
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false}));

// ===== PARSE REQUEST BODY AS JSON =====
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// ===== SETTING HANDLEBARS =====
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// ===== IMPORTING ROUTES AND GIVES THE SERVER ACCESS =====
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("App is listening at localhost: " + PORT);
});


