import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainComponent from './MainPage';
import {CarouseComponent} from './StoreManager/componentManager';
import reportWebVitals from './reportWebVitals';
import RouterComponten from './RouteControl';
ReactDOM.render(
  <React.StrictMode>
   <RouterComponten/>
   </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
