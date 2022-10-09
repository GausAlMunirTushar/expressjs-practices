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
app.get('/header', function(req, res){
    res.append("name", "Gaus Al Munir ");
    res.append("age", "21");
    res.append("cars", "BMW");
    res.status(200).send("Header Set");
    res.end();
});
app.get('/cookie', function(req, res){
    res.cookie("name", "Gaus Al Munir");
    res.cookie("age", "21");
    res.cookie("City", "Dhaka");
    res.end("Cookie Set");
});
app.get('/clear', function(req, res){
    res.clearCookie("name" , "Gaus Al Munir");
    res.clearCookie("age", "21");
    res.end("Cookie Clear");
});
app.listen(port, function() {
    console.log(`app listening on port http://localhost:${port}`)
});