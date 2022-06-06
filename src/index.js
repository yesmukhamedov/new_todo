import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from './App';
import TaskReducer from "./redux/reducers/taskReducers";

if (localStorage.getItem('tasks') == null)
    localStorage.setItem('tasks', JSON.stringify([]));
let initialState = {
    currentIndex: -1,
    list: JSON.parse(localStorage.getItem('tasks')),
    compic: 1
}
const store = createStore(TaskReducer, initialState);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,

  document.getElementById('root')
);
