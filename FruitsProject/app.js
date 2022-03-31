const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check the name"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
    },
    review: String,
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
})

// fruit.save();

const Personschema = new mongoose.Schema({
    name: String,
    age : Number,
    favoriteFruit: fruitSchema
});


const Person = mongoose.model('Person', Personschema)

const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review: "Great fruit."
});

pineapple.save();

const person = new Person({
    name: "Amy",
    age : 12,
    favoriteFruit: pineapple
})

person.save(); 

const kiwi = new Fruit({
    name: "Kiwi",
    score: 4,
    review: "Too sour for me!"
})

// Fruit.insertMany([fruit, kiwi], function(err){
//     if(err) {
//         console.log(err)
//     } else {
//         console.log("Success!");
//     }
// })

Fruit.find(function(err, fruits){
    if(err) {
        console.log(err)
    } else {

        
        fruits.forEach(function(fruit){
            console.log(fruit.name)
        })
    }
})

// Fruit.updateOne({_id: "61d19e42b8916e1030406dad"},{name: "Peach"},function(err){
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Success!")
//     }
// });

// Fruit.deleteOne({name: "Peach"},function(err){
//     if (err){
//         console.log(err);
//     } else {
//         console.log("Success!")
//     }
// })