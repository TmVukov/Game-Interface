import React, { useState } from "react"
import './App.css';
import Carousel from "./components/Carousel/Carousel"
import Boxes from "./components/Boxes/Boxes"
import Modal from "./components/Modal/Modal"
import ToggleButton from "./components/ToggleButton/ToggleButton"

function App() {  
  const [chars, setChars] = useState([])
  const [modal, setModal] = useState(false)
  const [selectedChar, setSelectedChar] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedIcon, setSelectedIcon] = useState(null)

  

  return (
    <div className="App">
        <Carousel 
          chars={chars} 
          setChars={setChars}
        />

        <Boxes 
          chars={chars} 
          setChars={setChars} 
          setSelectedChar={setSelectedChar} 
          setModal={setModal}
        />

        <Modal
          modal={modal}
          setModal={setModal}
          chars={chars} 
          selectedChar={selectedChar}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          selectedIcon={selectedIcon}
          setSelectedIcon={setSelectedIcon} 
        />

        <ToggleButton/>
    </div>
  );
}

export default App;
