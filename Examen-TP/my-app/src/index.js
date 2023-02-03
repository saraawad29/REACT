import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('root')
// const root = ReactDOM.createRoot(container);
// // const root = ReactDOM(document.getElementById('root'));
// // root.render(<App />);
// root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//   );