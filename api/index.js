const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send({message: 'Acessou a API'});
})

app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
})

module.exports = app;