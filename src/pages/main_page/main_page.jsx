// import React from 'react'
// import GMap from './GMap/GMap'
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// const center = {
//     lat: 49.83514,
//     lng: 24.00825
// };

// const Main_page = () => {
//   return (
//     <div>
//       <GMap center={center}></GMap>
//     </div>
//   )
// }

// export default Main_page

import { useState} from 'react'

function GPS() {
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    const [userAddress, setUserAddress] = useState()

    const [GPSLatitude, seGPSLatitude] = useState()
    const [GPSLongitude, setGPSLongitude] = useState()

    const geo = navigator.geolocation

    geo.getCurrentPosition(userCoords)
    function userCoords(position){
        let userLatitude = position.coords.latitude
        let userLongitude = position.coords.longitude
        // console.log('Latitude: ',userLatitude)
        // console.log('Longitude: ',userLongitude)
        setLatitude(userLatitude)
        setLongitude(userLongitude)
    }
    function KOZAKXYU(){
        geo.getCurrentPosition(userCoords)
    }

    const getUserAddress = async () =>{
        let url = `https://api.opencagedata.com/geocode/v1/json?key=ed1a4f1a861d43cdbbc7cab1db3fb90a&q=${latitude}%2C+${longitude}&pretty=1&no_annotations=1`
        const loc = await fetch(url)
        const data = await loc.json()
        console.log("User Address: ", data)
        // console.log("User city: ", data.results[0].components.city)
        setUserAddress(data.results[0].formatted)
    }

    const handleGetUserAddress = () => {
        getUserAddress()
    }


    const watchID = geo.watchPosition(userGPSCoords)
    function userGPSCoords(position){
        let userGPSLatitude = position.coords.latitude
        let userGPSLongitude = position.coords.longitude
        console.log('Latitude: ',userGPSLatitude)
        console.log('Longitude: ',userGPSLongitude)
        seGPSLatitude(userGPSLatitude)
        setGPSLongitude(userGPSLongitude)
    }

    const stopGPS = () =>{
        geo.clearWatch(watchID)
    }
    return (
        <>
        <h1>Current Location</h1>
        <h2>Latitude:   {latitude}</h2>
        <h2>Longitude:  {longitude}</h2>
        <h2>Address:    {userAddress}</h2>
        <button onClick={handleGetUserAddress}>Address</button>
        <hr/>
        <h1>GPS Tracking</h1>
        <h2>GPS Latitude:   {GPSLatitude}</h2>
        <h2>GPS Longitude:  {GPSLongitude}</h2>
        </>
    )
}

export default GPS
