import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProdContextProvider from './prodContext'
import Test from './components/Test'
import Boucle from './components/boucle'
import Collier from './components/collier'
import Bague from './components/bague'
import  Connexion from './components/Connexion'
import  Box from './components/accueil'



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "Connexion",
    element: <Connexion />
  },
  {
  path: "Box",
    element: <Box />
  },
  {
    path: "Boucle",
    element: <Boucle />
  },
  {
    path: "Collier",
    element: <Collier />
  },
  {
    path: "Bague",
    element: <Bague />
  }
]);
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)