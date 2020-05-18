const express = require('express'); 
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars'); 

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use(express.static("public")); 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 

app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars'); 

const routes = require("./controllers/burgers_controller")
app.use(routes)
app.listen(PORT, function (){
 console.log("Server Listening on: http://localhost:" + PORT);
}); 

