import React from "react"
import "./Card.css"
import characters from "../../imagesSrc/characters"
import { motion } from "framer-motion"


export default function Card({index, chars, setChars}) {

    const getChar = (id) =>{
        const char = characters.find(e=> e.id === id)              
        
        //if character is already selected return
        if(chars.includes(char)) return        

        //if selected characters are smaller than 3, add new character
        if(chars.length<3) setChars(prevChars => [...prevChars, char]) 
        else return    
    }


    return(
        <motion.div className="card"
            key={index}
            initial={{x: 600, rotate: -45, originX: 0.3}}
            animate={{x: 0, rotate: 0, originX: 0 }}
            transition={{duration:0.6}}       
        >
            <div className="card__box">
                <div className="card__content">
                    <img                   
                        src={characters[index].src} 
                        alt={characters.id} 
                        onClick={() =>getChar(characters[index].id)}                                   
                    />     
                </div>
            </div>            
        </motion.div>        
    )
}

