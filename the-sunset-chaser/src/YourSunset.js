import React, { useState } from "react"
import Gallery from "./Gallery"


export default function YourSunset() {
    let [image, setimageURL] = useState('')
    let [place, setPlaceName] = useState('')
    let [gallery, setGallery] = useState([])

    const handleURL = (e) => {
        setimageURL(e.target.value)
        console.log(image)
    }
    
    const handlePlace = (e) => {
        setPlaceName(e.target.value)
        console.log(place)
    }

    const addToGallery = (e) => {
        e.preventDefault()

        let newGallery = [
            ...gallery
        ]
        newGallery.push({
            name: place, 
            imageSRC: image
        })
        setGallery(newGallery)
    }
    

 
    return (
        <div className="your-sunset">
        <h2 className="instruction">The Sunset Gallery</h2>
        <p className="instruction">Submit Your Favorite Sunset Pic and Place below!</p>
        <form className="add-sunset">
            <input placeholder="Add A Link to Your Sunset Pic" onChange={handleURL}></input>
            <input placeholder="Add The Location of the Sunset" onChange={handlePlace}></input>
            <button onClick={addToGallery}>Add Your Sunset!</button>
        </form>
        <div className="gallery">
            <div className="gallery-pic">
            <img src="https://res.cloudinary.com/dkhiieq9p/image/upload/v1589318496/lbi-sunset_ltim3g.jpg"></img>  
            <p>Harvey Cedars, NJ</p>
            {gallery.map(image => <Gallery galleryPic={image.imageSRC} location={image.name}/>)}
            </div> 
        </div>
        </div>
        )
    }

