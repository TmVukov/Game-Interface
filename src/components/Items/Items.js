import React from 'react'
import "./Items.css"
import Item from "./Item/Item"
import itemImages from "../../imagesSrc/itemImages"
import { IconContext } from "react-icons/lib"
import { MdAddCircleOutline } from "react-icons/md"

export default function Items({chars, selectedChar, setSelectedItem, setSelectedIcon}) {

    const renderItems = () =>{       
               
        switch(selectedChar){
            case 1: return renderItemImg(1,2,5)            
            case 2: return renderItemImg(15,16,10,8)
            case 3: return renderItemImg(10,12)
            case 4: return renderItemImg(3,7,15)
            case 5: return renderItemImg(4,9)
            case 6: return renderItemImg(6)
            case 7: return renderItemImg(11,13,14,2)
            case 8: return renderItemImg(12,1,8)
            case 9: return renderItemImg(8,9,7)            
            default: return null
        }       
    } 
    
    
    const renderItemImg = (...itemIDs) =>{ 
        //there is total of 9 item boxes available in the modal 
        const itemImagesLength = 9
        
        //filter images by selected id
        let filteredImgs = itemImages.filter(e=>itemIDs.includes(e.id))        

        //get the rest of empty item boxes 
        let restLength = itemImagesLength - filteredImgs.length 

        //fill the item boxes with images of selected item
        let items = filteredImgs.map((e,i)=>
            <Item key={i}>
                <img 
                    src={e.src} 
                    alt="itemImg" 
                    className="item__image" 
                    onClick={()=>setSelectedItem(e.src)}
                />
            </Item>)
        
        //fill the rest of item boxes with icon 
        let icons = Array(restLength).fill().map((e,i)=>
            <Item key={i}>
                <IconContext.Provider value={{className: "add-icon"}}>
                    <MdAddCircleOutline onClick={renderDisplayMessage}/>
                </IconContext.Provider>
            </Item>)     
        
        return <>{items}{icons}</>        
    }


    const renderDisplayMessage = () =>{
        setSelectedIcon(<p className="itemDisplay__message">No item to add currently!</p>)
        setSelectedItem(null)
    }

    return (
        <div className="items">
            {chars.length && renderItems()} 
        </div>
    )
}
