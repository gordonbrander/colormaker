import React from 'react';
import ReactDOM from 'react-dom';
import {App, View, init, update} from './App';
import './index.css';

ReactDOM.render(
  <App init={init} update={update} view={View} />,
  document.getElementById('root')
);
