import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.component';
import appReducer from './reducers/app.reducers'
import { createStore } from 'redux';
import { Provider } from 'react-redux'

let store = createStore(appReducer);

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));