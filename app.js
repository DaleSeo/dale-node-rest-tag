const express = require('express');
const bodyParser = require('body-parser');
const svc = require('./svc');

var app = express();
app.use(bodyParser.json());
app.listen(3000, () => {
  console.log("This server is listening through port 3000.")
});

app.get('/todos', (req, res) => {
  res.send(svc.list());
});

app.get('/todos/:id', (req, res) => {
  res.send(svc.detail(req.params.id));
});

app.post('/todos', (req, res) => {
  console.log(req.body);
  res.status(201).send(svc.create(req.body));
});

app.delete('/todos/:id', (req, res) => {
  res.send(svc.remove(req.params.id));
});
