import express from 'express';
import bodyParser from 'body-parser';
import * as db from './utils/DataBaseUtils';
import { serverPort } from '../etc/config.json';

db.setUpConnection();

const app = express();
app.use(bodyParser.json());

app.get('/todo', (req, res) => {
  db.listTodo().then(data => res.send(data));
});

app.post('/todo', (req, res) => {
  db.createTodo(req.body).then(data => res.send(data));
});

app.delete('/todo/:id', (req, res) => {
  db.deleteTodo(req.params.id).then(data => res.send(data));
});

app.listen(serverPort, () => {
  console.log(`Server is up and running on port ${serverPort}`);
});
