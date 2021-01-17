import React from 'react'
import "./ItemDisplay.css"
import ItemProps from "../ItemProps/ItemProps"

export default function ItemDisplay({selectedItem, selectedIcon}) {    

    return (
        <div className="itemDisplay">

            <div className="itemDisplay__top">
                {selectedItem ? <img src={selectedItem} alt="selected item" className="itemDisplay__img"/> : selectedIcon}              
            </div>

            <div className="itemDisplay__bottom">                               
                {selectedItem ? <ItemProps selectedItem={selectedItem}/> : null} 
            </div>

        </div>
    )
}

