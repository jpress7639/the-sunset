import React, { useState, useEffect } from "react"
import axios from "axios"

export default function Find() {
    let [city, setCity] = useState('')
    let [location, setLocation] = useState('')
    let [coordinates, setCoordinates] = useState({})
    let [sunsetTime, setTime] = useState('')

const handleChange = (e) => {
    setCity(e.target.value)
}


const findSunset = async () => {
    setLocation(`In your city, ${city}`)
    console.log(coordinates.lat, coordinates.lng)
    try {
        const response = await axios(`https://api.sunrise-sunset.org/json?lat=${coordinates.lat}&lng=${coordinates.lng}`)
        const sunsetTime = response.data.results.sunset
        console.log(sunsetTime)
        setTime(`The sun will set at ${sunsetTime} UTC`)
    } catch(err) {
        console.log(err)
    }
}

// useEffect will run on page load 
useEffect(() => {
    if (coordinates.lat)
    findSunset()
}, [coordinates])

const findCity = async (e) => {
    e.preventDefault()
    try {
        const response = await axios(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=9ed3510decc34b5c848ff57d32b537f7`)
        console.log(response.data.results[0])
        const coordinates = response.data.results[0].bounds.northeast
        setCoordinates(coordinates)
    } catch(err) {
    alert("The city could not be found! Maybe try a neighboring")
    console.log(`City is not found!`)
    }
    // findSunset()
}

    return(
        <>
        <div className="results">
            <h2 className="city">{location}</h2>
            <h3 className="time">{sunsetTime}</h3>
        </div>
        <form>
            <input type="text" placeholder="Put Your City Here!" value={city} onChange={handleChange}></input>
            <button type="submit" onClick={findCity}>Find my Sunset!</button>
        </form>
        </>
    )
}