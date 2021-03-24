import React from 'react';
import ReactDOM from 'react-dom';
import Global from "./components/Global/Global"
import App from './components/App/App';

ReactDOM.render(
   <div>
     <Global> <App /></Global>
   </div>,
  document.getElementById('root')
);

// If you want to strt measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
