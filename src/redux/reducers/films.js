import { SAVE_INPUT_VALUE } from '../constants';

const initialState = null;

export default (state = initialState, { type }) => {
  switch (type) {
    case SAVE_INPUT_VALUE:
      return state;
    default:
      return state;
  }
};
