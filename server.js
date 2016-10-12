// dependencies being required
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// express
var app = express();

//serve static content for the app from the public directory
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({
    extended: false
}));


app.use(methodOverride("_method"));
var expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//routing
var routes = require('./controllers/burgers_controller');
app.use('/', routes);

var PORT = process.env.PORT || '3000';

//listen on port 3K
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});