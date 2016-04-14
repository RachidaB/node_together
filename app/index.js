const express = require('express');
const app = express();
const motivations = require('motivations');
const pickOne = require('pick-one');
var exphbs = require('express-handlebars');


app.engine('handlebars', exphbs({
  defaultLayout : "main",
  layoutDir: "./app/views/layouts"
}));

app.set('views','./app/views');
app.set('view engine','handlebars');

app.get('/about',function(request,response){
  response.send("A propos");
});

app.get('/motivations', function (request,response) {
  response.render(pickOne(motivations));
});

app.get('/',function(request,response){
  response.send("Page d'accueil");
});

module.exports = app;
