import React from 'react';
import ReactDom from "react-dom"
import "./Modal.css"
import Items from "../Items/Items"
import ItemDisplay from "../Items/ItemDisplay/ItemDisplay"


export default function Modal({modal, setModal, chars, selectedChar, selectedItem, setSelectedItem, selectedIcon, setSelectedIcon}) {

    if(!modal) return null 
    
    const modalAndItemRemover = () =>{
        setModal(false)
        setSelectedItem(null)
        setSelectedIcon(null)
    }    
    
    return ReactDom.createPortal(
        <>
        <div className="modal__overlay" onClick={modalAndItemRemover}/>
        
        <div className="modal">
                <button onClick={modalAndItemRemover} className="modal__btn">✖</button>
                
                <div className="modal__content">                    
                       <Items 
                            chars={chars}
                            selectedChar={selectedChar}
                            setSelectedItem={setSelectedItem}
                            setSelectedIcon={setSelectedIcon}
                       />

                       <ItemDisplay
                            selectedItem={selectedItem}
                            selectedIcon={selectedIcon}
                       />                    
                </div>     
        </div>
        </>,
        document.getElementById("portal")
    )
}





