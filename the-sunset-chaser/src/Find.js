import React, { useState } from "react"
import axios from "axios"

export default function Find() {
    let [city, setCity] = useState('')
    let [coordinates, setCoordinates] = useState({})

const handleChange = (e) => {
    setCity(e.target.value)
    console.log(city)
}

const findSunset = async () => {
    try {
        const response = await axios(`https://api.sunrise-sunset.org/json?lat=${coordinates.lat}&lng=${coordinates.lng}`)
        console.log(response.data.results.sunset)
    } catch(err) {
        console.log(err)
    }
}

const findCity = async (e) => {
    e.preventDefault()
    try {
        const response = await axios(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=9ed3510decc34b5c848ff57d32b537f7`)
        const coordinates = response.data.results[0].bounds.northeast
        setCoordinates(coordinates)
    } catch(err) {
    console.log(err)
    }
    findSunset()
}

    return(
        <>
        <form>
            <input type="text" placeholder="Put Your City Here!" value={city} onChange={handleChange}></input>
            <button type="submit" onClick={findCity}>Find my Sunset!</button>
        </form>
        </>
    )
}