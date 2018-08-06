const mongoose = require('mongoose');
const config = require('../../etc/config.json');
const moment = require('moment');
const { Todo } = require('../models/Todo');

module.exports.setUpConnection = function () {
  mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
};

function listTodoFunc() {
  return Todo.find();
}
module.exports.listTodo = listTodoFunc;

module.exports.createTodo = function (data) {
  const todo = new Todo({
    title: data.title,
    text: data.text,
    active: false,
    complate: false,
    createdAt: moment().format('LLL'),
  });

  return todo.save();
};

module.exports.deleteTodo = function (id) {
  return Todo.findById(id).remove();
};

module.exports.putTodo = function (data) {
  return Todo.findById(data._id).update(data);
};
