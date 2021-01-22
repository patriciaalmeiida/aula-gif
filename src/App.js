import React, { useState } from 'react'
import './App.css';
import MostraGif from './components/MostraGif'

function App() {

const [mostrarGif, setMostraGif] = useState(false)

const toggleMostrarGif = () => {
  setMostraGif(!mostrarGif)
}


  return (
   <div>
     { mostrarGif ? <MostraGif/> : "" }
     <button onClick={toggleMostrarGif}>Clica Aqui</button>
   </div> 
  );
}

export default App;
