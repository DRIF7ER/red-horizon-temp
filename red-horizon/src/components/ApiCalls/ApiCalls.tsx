// import React from "react"
// import { Routes, Route } from "react-router-dom"
const apiKey = import.meta.env.VITE_API_KEY

function ApiCalls() {

  // let getNasaData = async () => {
  //     let fetchNasaStuff = await fetch(`https://images-api.nasa.gov/search?q=mars`)
  //     let nasaStuffFetched = await fetchNasaStuff.json()
  //     let nasaStuff = nasaStuffFetched.collection.items
  //     console.log(nasaStuff)
  //     return nasaStuff
  //   };

  // console.log(apiKey, "<-- API KEY")

  // This call is to the mars rover photos end point. This link grabs all the pictures sorted by 'sol day'.
  // There are other based off Earth day, rover, and type of camera. will pull alot from here. 
  // |
  // |
  // V

  let getNasaData = async () => {
    let fetchNasaStuff = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${apiKey}&sol=1000`)
    let nasaStuffFetched = await fetchNasaStuff.json()
    let nasaStuff = nasaStuffFetched
    console.log(nasaStuff)
    return nasaStuff
  };

  // console.log(getNasaData(), '<-- HERE')
  



  return (
    <h1>This will be something...</h1>
  )
}

export default ApiCalls;