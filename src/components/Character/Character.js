import React from "react"
import "./Character.css"


export default function Character({selectChar, charSrc, openModal, removeChar}) {
    return (
        <div className="character" onClick={selectChar}>
             <img alt="img" src={charSrc} onClick={openModal}/>
             <button onClick={removeChar}>
                 <span>✖</span>
            </button> 
        </div>
    )
}
