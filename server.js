const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/', (req,res) => {
    res.render('index.ejs');
})

app.post('/show', (req,res) => {
    console.log('Olá denovo!');
})

app.listen(3000, function() {
    console.log('O servidor está rodando na porta 3000!');
});