import React from "react"

export default function Gallery(props) {
    return(
        <>
        <img src={props.galleryPic}></img>
        <p>{props.location}</p>
        </>
    )
}