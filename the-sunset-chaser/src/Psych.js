import React from "react"

export default function Psych(props) {
        return(
            <>
            <div className="psyche">
    <h2>{props.chapter}</h2>
    <img src={props.image}></img>
    <p>{props.description}</p>
             </div>
            </>
        )
    }



