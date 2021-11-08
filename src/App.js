import './App.css';
import React from 'react'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Navbar/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="contenedor">
      <Navbar/> 
      <ItemListContainer titulo='desafio 1 de code'/>
    </div>
  )
}

export default App



