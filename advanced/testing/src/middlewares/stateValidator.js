import tv4 from 'tv4';

const schema = require('./stateSchema.json');

const stateValidator = ({ dispatch, getState }) => (next) => (action) => {
  next(action);

  if (!tv4.validate(getState(), schema)) {
    console.warn('Invalid state. Schema validation did not pass');
  }
};

export default stateValidator;
