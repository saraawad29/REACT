import { useState, useContext } from 'react'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Outlet } from 'react-router-dom'
import { database } from './firebase';
import { ProdContext } from './prodContext';
import { collection, addDoc } from "firebase/firestore";
import { useEffect } from 'react';
import NavBar from './components/navbar';
import Box from './components/accueil';

function App() {
  const [count, setCount] = useState(0);


  // utilisation du hook usecontext pour recuperer la valeur du 
  // context partage par le composant CartContextProvider.js

  const myProdContext = useContext(ProdContext)


  //rajouter les utilisateurs dans firebase
  const createUtilisateus = async (collectionName, documentData)=> {
    try {
      const docRef = await addDoc(collection(database, collectionName), documentData );

      console.log("Document Ref written: ", docRef);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
  };
  return (
    <div >
      <NavBar/>
      <Box/> 
    </div>
    
  )
}

export default App;