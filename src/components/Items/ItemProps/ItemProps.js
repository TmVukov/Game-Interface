import React from 'react'
import "./ItemProps.css"
import { motion } from "framer-motion"

export default function ItemProps({selectedItem}) {       
    
    let str=""      
    const len = selectedItem.length 
       
    //get the item number from link (can be one digit or two digit number)
    //two digit number link example: ./assets/items/item15.jpg    
    if(len===24) str = selectedItem.slice(-5,-4)
    else str = selectedItem.slice(-6,-4) 
    
          
    switch(str){
        case "1": return renderItemProps(-80, -20, -50)
        case "2": return renderItemProps(-200, -100, -30)
        case "3": return renderItemProps(-40, -160, -70)
        case "4": return renderItemProps(-110, -90, -20)
        case "5": return renderItemProps(-30, -80, -150)
        case "6": return renderItemProps(-50, -10, -90)
        case "7": return renderItemProps(-10, -20, -30)
        case "8": return renderItemProps(-150, -90, -100)
        case "9": return renderItemProps(-40, -100, -20)
        case "10": return renderItemProps(-70, -30, -80)
        case "11": return renderItemProps(-20, -20, -20)
        case "12": return renderItemProps(-50, -50, -50)
        case "13": return renderItemProps(-190, -10, -70)
        case "14": return renderItemProps(-80, -40, -60)
        case "15": return renderItemProps(-30, -130, -120)
        case "16": return renderItemProps(-100, -120, -150)
        default: return null
    }   
   
}

const renderItemProps = (blue,red,yellow) =>{
    
    return (
        <div className="itemProps">

            <motion.div className="itemProps__blue"
                initial={{x: -250}}
                animate={{x: blue}}
                transition={{duration:0.6}}
            ></motion.div>

            <motion.div className="itemProps__red" 
                initial={{x: -250}}
                animate={{x: red}}
                transition={{duration:0.6}}
            ></motion.div>

            <motion.div className="itemProps__yellow"
                initial={{x: -250}}
                animate={{x: yellow}}
                transition={{duration:0.6}}
            ></motion.div>

        </div>
    )
}


