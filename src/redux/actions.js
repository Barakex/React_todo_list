import {
  GET_TODO_LIST,
  SAVE_INPUT_VALUE,
  CLEAR_INPUT_VALUE,
  SEARCH_TASKS,
} from './constants';

export const getTodoList = data => ({
  type: GET_TODO_LIST,
  data,
});

export function itemsFetchData() {
  return (dispatch) => {
    fetch('http://localhost:8080/todo') // eslint-disable-line
      .then(response => response.json())
      .then(items => dispatch(getTodoList(items)))
      .catch(() => console.log('error'));
  };
}

export const saveInputValue = data => ({
  type: SAVE_INPUT_VALUE,
  data,
});

export const clearInputValue = () => ({
  type: CLEAR_INPUT_VALUE,
});

export function postTodoItems(data) {
  return (dispatch) => {
    fetch('http://localhost:8080/todo', { // eslint-disable-line
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json', // eslint-disable-line
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data }),
    })
      .then(() => {
        dispatch(itemsFetchData());
      })
      .catch(() => console.log('error'));
  };
}

export function deleteTodoItem(id) {
  return (dispatch) => {
    fetch(`http://localhost:8080/todo/${id}`, { // eslint-disable-line
      method: 'DELETE',
    })
      .then(() => {
        dispatch(itemsFetchData());
      })
      .catch(() => console.log('error'));
  };
}

export function makeAnItemActive(data) {
  return (dispatch) => {
    fetch(`http://localhost:8080/todo/${data._id}`, { // eslint-disable-line
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data }),
    })
      .then(() => dispatch(itemsFetchData()))
      .catch(() => console.log('error'));
  };
}

export const searchTasks = data => ({
  type: SEARCH_TASKS,
  data,
});

export function makeSearchItems(data) {
  return (dispatch) => {
    fetch('http://localhost:8080/todo/search', { // eslint-disable-line
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    })
      .then(response => response.json())
      .then(items => dispatch(searchTasks(items)))
      .catch(() => console.log('error'));
  };
}
