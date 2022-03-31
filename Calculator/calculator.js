const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(request,response) {
	response.sendFile(__dirname + "/index.html");
});


app.post("/", function(req,res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("result is" + result);
});

app.get("/bmi",function(request,response) {
    response.sendFile(__dirname + "/bmiCalculator.html")
});
app.post("/bmi", function(req,res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmiNumber = weight / (height * height);
    res.send("Your bmi is" + bmiNumber);
})

app.listen(3000,function(){
	console.log("Server is running on port 3000");
});