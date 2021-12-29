const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const MongoClient = require('mongodb').MongoClient;

const url = "MY_BASE"

MongoClient.connect(url, (err,client) => {
    if(err) return console.log(err)
    db = client.db('crud')

    app.listen(3000, function() {
        console.log('O servidor está rodando na porta 3000!');
    });
})

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine','ejs');

app.get('/', (req,res) => {
    res.render('index.ejs');
})

app.post('/show', (req,res) => {
    db.collection('data').insertOne(req.body, (err,result) => {
        if (err) return console.log(err)

        console.log('salvo no banco de dados')
        res.redirect('/')
    });    
});

