import React, { useState } from "react"
import axios from "axios"

export default function findSunset() {

const handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
        city: e.target.value
    })
}

const getCoordinates = async () => {
    try {
        const location = await axios(`https://api.opencagedata.com/geocode/v1/json?q=${this.city}&key=9ed3510decc34b5c848ff57d32b537f7`)
        console.log(location.data.bounds.northeast)
    } catch(err) {
    console.log(err)
    }
}

    return(
        <>
        <form>
            <input type="text" placeholder="Put Your City Here!" onChange={handleSubmit}></input>
            <button type="submit" onClick={getCoordinates}>Find my Sunset!</button>
        </form>
        </>
    )
}