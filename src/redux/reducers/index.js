import { combineReducers } from 'redux';
import films from './films';
import todoList from './todoList';

export default combineReducers({
  films,
  todoList,
});
