// Use express library, port 4000
const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// Open connection to db
const ConnectionString = 'mongodb+srv://admin:admin@cluster0.adbwk.mongodb.net/books?retryWrites=true&w=majority';
mongoose.connect(ConnectionString, {useNewUrlParser: true});

// Define Schema
const Schema = mongoose.Schema;

var bookSchema = new Schema({
    Title:String,
    Author:String,
    Genre:String,
    Cover:String
});
var BookModel = mongoose.model("book", bookSchema);

// parse application/x-www.form-urlencoded
app.use(bodyParser.urlencoded({ extend: false}));

// parse application/json
app.use(bodyParser.json());

// Always use for cors
app.use(cors());
app.use(function (req, res, next) { 
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next(); 
});


// Get request for api/books that returns json
app.get('/api/books', (req, res) => {
    BookModel.find((err, data)=>{
        res.json(data);
    })
})

// Pull data from body and log
app.post('/api/books', (req, res) => {
    console.log('Book Recieved!');
    console.log(req.body.Title);
    console.log(req.body.Author);
    console.log(req.body.Genre);
    console.log(req.body.Cover);
    
    BookModel.create({
        Title:req.body.Title,
        Author:req.body.Author,
        Genre:req.body.Genre,
        Cover:req.body.Cover
    })

    res.send('Item Added');
})

// Delete
app.delete('/api/books/:id',(req,res)=>{
    console.log("Delete Book: " + req.params.id);

    BookModel.findByIdAndDelete(req.params.id, (err, data)=>{
        res.send(data);
    })
})

// Find Book for update autofill
app.get('/api/books/:id', (req,res)=>{
    console.log(req.params.id);

    BookModel.findById(req.params.id, (err, data)=>{
        res.json(data);
    })
})

// Update from Edit
app.put('/api/books/:id', (req, res)=>{
    console.log("Update book: " + req.params.id);     
    console.log(req.body);
    
    BookModel.findByIdAndUpdate(req.params.id,req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})