import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContextHabilidadesEstudiosProvider from  './Components/Context/ContextHabilidadesEstudios'
import JuegosProvider from './Components/Context/Juegos';
ReactDOM.render(
  <React.StrictMode>
    <ContextHabilidadesEstudiosProvider>
      <JuegosProvider>
        <App />
      </JuegosProvider>
    </ContextHabilidadesEstudiosProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
