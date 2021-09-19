import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/headlines-reducer';
import { Provider } from 'react-redux';
import { ThunkMiddleware } from 'redux-thunk';
import middlewareLogger from './middleware/middleware-logger';

const store = createStore(reducer, applyMiddleware(thunkMiddleware, middlewareLogger));
//first argument is our reducer, the second argument is the applyMiddleware function with the arguments we want to apply to the store - this is how we make our redux store ready to use middleware

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
