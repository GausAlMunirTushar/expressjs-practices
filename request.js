const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.end(firstName + " " + lastName);
});
app.get('/query',(req,res)=>{
   
});


app.listen(port, () => console.log(`Exam app listening on port http://localhost:${port}`));