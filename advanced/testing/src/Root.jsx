import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { asyncRedux, stateValidator } from 'middlewares';
import reducers from 'reducers';

const composeEnhancer =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const Root = ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    composeEnhancer(applyMiddleware(asyncRedux, stateValidator))
  );
  return <Provider store={store}>{children}</Provider>;
};

export default Root;
