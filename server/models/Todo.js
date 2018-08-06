const mongoose = require('mongoose');

const { Schema } = mongoose;

const TodoSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  active: { type: Boolean },
  complate: { type: Boolean },
  createdAt: { type: String },
});

exports.Todo = mongoose.model('Todo', TodoSchema);
