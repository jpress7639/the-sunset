import React from "react"

export default function YourSunset() {
    return (
        <>
        <h2 className="instruction">The Sunset Gallery</h2>
        <p className="instruction">Submit Your Favorite Sunset Pic and Place below!</p>
        <form className="add-sunset">
            <input placeholder="Add A Link to Your Sunset Pic"></input>
            <input placeholder="Add The Location of the Sunset"></input>
            <button>Add Your Sunset!</button>
        </form>
        <div className="gallery">
            <div className="gallery-pic">
            <img src="https://res.cloudinary.com/dkhiieq9p/image/upload/v1589318496/lbi-sunset_ltim3g.jpg"></img>  
            <p>Harvey Cedars, NJ</p>
            </div> 
        </div>
        </>
    )
}