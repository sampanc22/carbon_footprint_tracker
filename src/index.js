import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Transportation from './WebPages/Transportation';
import Food from './WebPages/Food';
import Housing from './WebPages/Housing';
import Summary from './WebPages/Summary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/Transportation' element={<Transportation />} />
      <Route path='/Food' element={<Food />} />
      <Route path='/Housing' element={<Housing />} />
      <Route path='/Summary' element={<Summary />} />
    </Routes>
  </Router>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
