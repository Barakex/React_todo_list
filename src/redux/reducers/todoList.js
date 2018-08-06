import {
  SAVE_INPUT_VALUE,
  GET_TODO_LIST,
  CLEAR_INPUT_VALUE,
} from '../constants';

const initialState = {
  todoValue: {
    title: '',
    text: '',
  },
  items: null,
};

export default (state = initialState, { type, data }) => {
  switch (type) {
    case SAVE_INPUT_VALUE:
      return { ...state, todoValue: data };
    case GET_TODO_LIST:
      return { ...state, items: data };
    case CLEAR_INPUT_VALUE:
      return { ...state, todoValue: { title: '', text: '' } };
    default:
      return state;
  }
};
