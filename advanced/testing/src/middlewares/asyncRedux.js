const asyncRedux = ({ dispatch }) => (next) => (action) => {
  // Skip if not a Promise
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  action.payload.then((response) => {
    const newAction = { ...action, payload: response };

    dispatch(newAction);
  });
};

export default asyncRedux;
