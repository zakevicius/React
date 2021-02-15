import { TOGGLE_AUTH } from 'actions/types';

const authReducer = (state = false, { type, payload }) => {
  switch (type) {
    case TOGGLE_AUTH:
      return payload;
    default:
      return state;
  }
};

export default authReducer;
