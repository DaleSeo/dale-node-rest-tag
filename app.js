const express = require('express');
const svc = require('./svc');
var app = express();
app.listen(3000, () => {
  console.log("This server is listening through port 3000.")
});

app.get('/todos/', (req, res) => {
  res.send(svc.list());
});

app.get('/todos/:id', (req, res) => {
  res.send(svc.detail(req.params.id));
});
