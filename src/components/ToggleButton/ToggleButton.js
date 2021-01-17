import React, { useRef } from 'react'
import "./ToggleButton.css"
import music from "./Audio/music.mp3"

export default function ToggleButton() {    
    const audio = useRef()
    const slide = useRef()

    const clickButton = () =>{
        if(slide.current.classList.contains("slide")){
            slide.current.classList.remove("slide")
            audio.current.pause()
                      
        }
        else{
            slide.current.classList.add("slide")            
            audio.current.play()
        }
    }       

    return (
        <div className="toggle__container"> 

            <audio loop className="audio__container" ref={audio} > 
                <source src={music} type="audio/mp3"/>
            </audio>         
                     
            <p className="toggle__title">sound</p>

            <button className="toggle__btn" ref={slide}>
                <span>On</span>
                <span>Off</span>
                <span className="toggle__over" onClick={clickButton}></span>
            </button>

        </div>    
    )
}


