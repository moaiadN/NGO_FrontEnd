const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

let data = [];

app.get('/data', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.send(data);
});

app.post('/data', (req, res) => {
    console.log(req.body);
    
    res.send(req.body);
});
