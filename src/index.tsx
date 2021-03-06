// React
import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import {Provider} from "react-redux"
import store from './store/store'
// utils
import * as serviceWorker from './serviceWorker';
// Root component
import App from './App';
// Helpers
import {initType} from "./utils/helpers"

initType()

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
