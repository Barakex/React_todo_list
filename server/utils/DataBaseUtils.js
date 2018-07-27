import mongoose from 'mongoose';
import '../models/Todo';
import config from '../../etc/config.json';

const Todo = mongoose.model('Todo');

export function setUpConnection() {
  mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listTodo() {
  return Todo.find();
}

export function createTodo(data) {
  const todo = new Todo({
    title: data.title,
    text: data.text,
    createdAt: new Date(),
  });

  return todo.save();
}

export function deleteTodo(id) {
  return Todo.findById(id).remove();
}
