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
        case "1": return renderItemProps(-80, -20, -50) //stapler
        case "2": return renderItemProps(-140, -100, -30) //felt pen
        case "3": return renderItemProps(-40, -160, -70) //pin
        case "4": return renderItemProps(-110, -90, -20) //protractor
        case "5": return renderItemProps(-30, -80, -150) //papers
        case "6": return renderItemProps(-90, -20, -110) //scissors
        case "7": return renderItemProps(-20, -30, -40) //book
        case "8": return renderItemProps(-20, -120, -60) //tape
        case "9": return renderItemProps(-40, -100, -70) //ruler
        case "10": return renderItemProps(-130, -30, -80) //crayon
        case "11": return renderItemProps(-80, -70, -80) //rubber
        case "12": return renderItemProps(-50, -120, -50) //glue
        case "13": return renderItemProps(-150, -20, -70) //sharpener
        case "14": return renderItemProps(-80, -40, -60) //drawing compass
        case "15": return renderItemProps(-30, -130, -120) //scalpel
        case "16": return renderItemProps(-80, -120, -20) //magnifier
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


