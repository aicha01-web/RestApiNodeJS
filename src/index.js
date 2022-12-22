
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

app.get('/helloworld', (req, res) => {
    res.json({ message: 'Hello World' })
})

var jsonParser = bodyParser.json()

app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

app.post('/helloclasse', jsonParser,(req ,res) => {
    console.log(req.body);
    res.send('Je suis '+req.body.prenom + ' d\'id ' + req.body.id);
})

app.listen(3001);