import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const data = {
  places: [
    {
      id: 1,
      price: 120,
    },
    {
      id: 2,
      price: 220,
    },
    {
      id: 3,
      price: 320,
    },
    {
      id: 4,
      price: 420,
    },
    {
      id: 5,
      price: 520,
    },
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <App places={data.places}/>
  </React.StrictMode>,
  document.getElementById('root'));
