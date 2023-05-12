import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);


reportWebVitals();


if(module.hot){
  module.hot.accept();
}
