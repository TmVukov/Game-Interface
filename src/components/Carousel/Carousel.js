import React, { useState } from 'react'
import "./Carousel.css"
import Card from "../Card/Card"
import characters from "../../imagesSrc/characters"

export default function Carousel({chars, setChars}) {
    const [index, setIndex] = useState(0)

    const slideRight = () =>{        
        setIndex((index+1) % characters.length)        
    }

    const slideLeft = () =>{        
        const prevIndex = index - 1       
        return prevIndex < 0 ? setIndex(characters.length - 1) : setIndex(prevIndex)        
    }


    return (
        <div className="carousel__container">
            <p className="carousel__message">Pick your team!</p>

            <div className="carousel">
                <button onClick={slideLeft} className="carousel__btn">
                    <span className="carousel__icon">&#8249;</span>
                </button>       
                
                <Card 
                    index={index} 
                    chars={chars} 
                    setChars={setChars}
                />                                                                           
                
                <button onClick={slideRight} className="carousel__btn">
                    <span className="carousel__icon">&#8250;</span>
                </button>           
            </div>            
        </div>
    )
}
