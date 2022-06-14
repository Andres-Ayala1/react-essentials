import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//EXAMPLE OF ARRAY DESTRUCTURING
/*const [,,light] = [
  "boot",
  "tent",
  "headlamp"
];
console.log(light);*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);

