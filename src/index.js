import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap the App Component in BrowserRouter so the routing links provided in App will work */}
    <BrowserRouter>
    {/* Render the imported App Component, which will contain the other necessary components */}
     <App />
    </BrowserRouter>
    
  </React.StrictMode>
);


