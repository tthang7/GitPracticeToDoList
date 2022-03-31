const express = require('express');

const app = express();

app.get("/", function(request, response){
    response.send("<h1>Hi</h1>");
    /* res.send("hi") */
})

app.get("/contact",function(req, res){
    res.send("Contact me at: ...")
})
app.get("/about",function(req, res){
    res.send("This web is developed by Justin")
})

app.get("/hobbies",function(req, res){
    res.send("video games")
})
app.listen(3000, function() {
    console.log("Server started on port 3000");
});