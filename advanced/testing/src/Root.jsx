import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

const Root = (props) => {
  return (
    <Provider
      store={createStore(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      {props.children}
    </Provider>
  );
};

export default Root;
