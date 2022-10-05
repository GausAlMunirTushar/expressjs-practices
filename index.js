const express = require('express');
const app = express();
const port = 8080;

app.get('/', function (req, res){
    res.send('Hello, Home Page');
});
app.get('/about', function (req, res){
    res.send('About page');
});
// Response Status Code
app.get('/three',function(req, res){
    res.status(404).send('Sorry, cant find that!');
}); 
let person = {
	"name":"John",
	"age":30,
	"cars":[ "Ford", "BMW", "Fiat" ]
}
app.get('/person', function (req, res){
    res.json(person);
});
app.get('/re', function(req,res){
    res.redirect('/about');
})
app.get('/download',function(req, res){
    res.download('./index.html');
});
app.listen(port, function() {
    console.log(`app listening on port http://localhost:${port}`)
});