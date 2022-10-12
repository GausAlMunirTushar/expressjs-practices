const express = require('express');
const app = express();
const port = 8080;

app.get('/', function (req, res){
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.end(firstName + " " + lastName);
});
app.get('/get', function(req, res){
    let firstName = req.header('firstName');
    let lastName = req.header('lastName');
    let Connection = req.header('Connection')
    res.end(firstName + " " + lastName + " connection :" + Connection);
})
app.post('/post', (req, res) => {
    let userName = req.header('userName');
    let password = req.header('password');
    res.end("UserName:" + userName + " Password:" + password);
});
app.post('/query', function(req, res){
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.end(firstName + " " + lastName);
})

app.listen(port, function() {
    console.log(`app listening on port http://localhost:${port}`)
});