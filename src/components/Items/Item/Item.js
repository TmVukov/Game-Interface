import React from 'react'
import "./Item.css"

export default function Item({children}) {
    return (
        <div className="item">
            {children}
        </div>
    )
}
