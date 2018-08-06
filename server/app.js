const express = require('express');
const bodyParser = require('body-parser');
const db = require('./utils/DataBaseUtils');
const { serverPort } = require('../etc/config.json');
const cors = require('cors');

db.setUpConnection();

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/todo', (req, res) => {
  db.listTodo().then(data => res.send(data));
});


app.post('/todo', (req, res) => {
  db.createTodo(req.body).then(data => res.send(data));
});

app.delete('/todo/:id', (req, res) => {
  db.deleteTodo(req.params.id).then(data => res.send(data));
});

app.put('/todo/:id', (req, res) => {
  db.putTodo(req.body).then(data => res.send(data));
});

app.listen(serverPort, () => {
  console.log(`Server is up and running on port ${serverPort}`);
});
