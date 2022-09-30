import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContextHabilidadesEstudiosProvider from  './Components/Context/ContextHabilidadesEstudios'
ReactDOM.render(
  <React.StrictMode>
    <ContextHabilidadesEstudiosProvider>
        <App />
    </ContextHabilidadesEstudiosProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
