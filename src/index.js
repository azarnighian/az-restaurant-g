import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import SimpleReactLightbox from 'simple-react-lightbox'
  // https://github.com/michelecocuccio/simple-react-lightbox
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <Router basename="/az-restaurant-g">
        <App />
      </Router>      
    </SimpleReactLightbox>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
