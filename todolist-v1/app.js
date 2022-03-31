const express = require('express');
const app = express(); //enable express service
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
const date = require(__dirname + '/views/date.js');

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];
app.get("/", function(req, res){
let day = date.getDate();
        res.render("list", {
            kindOfDay: day, newListItems: items});

});
app.post("/", function(req, res){
    let item = req.body.newItem;
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        item.push(item);
        res.redirect("/");
    }
})
app.get("/work",function(req, res){
    res.render("list", {kindOfDay:"Work List", newListItems: workItems});
})
app.get("/about", function(req, res){
    res.render("about");
})

app.post("/work", function(req,res){
    let item = req.body.newItem;
    items.push(item)
    res.redirect("/work")
})
app.listen(3000, function() {
    console.log("Server")
})//test local server in port 3000