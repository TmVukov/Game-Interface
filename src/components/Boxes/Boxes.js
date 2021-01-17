import React from 'react'
import "./Boxes.css"
import Box from "./Box/Box"
import Character from "../Character/Character"
import { FaQuestion } from "react-icons/fa"
import { IconContext } from "react-icons/lib"


export default function Boxes({chars, setChars, setSelectedChar, setModal}) {    

    const renderChar = (i) =>{ 

        switch(i){
            case 0: return <Character 
                charSrc={chars[0].src}
                selectChar={()=>setSelectedChar(chars[0].id)}                
                removeChar={()=>removeChar(0)} 
                openModal={()=>setModal(true)}               
            />

            case 1: return <Character 
                charSrc={chars[1].src} 
                selectChar={()=>setSelectedChar(chars[1].id)}                
                removeChar={()=>removeChar(1)} 
                openModal={()=>setModal(true)}
            />

            case 2: return <Character 
                charSrc={chars[2].src} 
                selectChar={()=>setSelectedChar(chars[2].id)}                
                removeChar={()=>removeChar(2)} 
                openModal={()=>setModal(true)}
            />

            default: return null
        }                
    }

    const renderQuestionIcon = () =>{
        return (
            <IconContext.Provider value={{ className: "question-icon" }} >
                <FaQuestion/>
            </IconContext.Provider>
        )
    }

    const removeChar = (i) =>{
        const temp = [...chars]
        temp.splice(i,1)
        setChars(temp)       
    }


    return (
        <>
        {chars.length === 3 && <p className="boxes__message">Your team is selected!</p>}

        <div className="boxes">
            <Box>
                {chars.length >= 1 ? renderChar(0) : renderQuestionIcon()}
            </Box>

            <Box>
                {chars.length >= 2 ? renderChar(1) : renderQuestionIcon()}
            </Box>

            <Box>
                {chars.length > 2 ? renderChar(2) : renderQuestionIcon()}
            </Box>
        </div>
        </>
    )
}
