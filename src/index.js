import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HoroscopeContext } from './context/HoroscopeContext';
import App from './App';

const Root = () => {
  return (
    <HoroscopeContext.Provider value={{sign: "Leo"}}>
      <App />
    </HoroscopeContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);