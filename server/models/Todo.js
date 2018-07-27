import mongoose from 'mongoose';

const { Schema } = mongoose;

const TodoSchema = new Schema({
  title: { type: String },
  text: { type: String, required: true },
  createdAt: { type: Number },
});

const Todo = mongoose.model('Todo', TodoSchema); // eslint-disable-line
