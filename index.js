const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.get('/', (req, res) => {
    res.send('Ok')
})

app.listen(port);
