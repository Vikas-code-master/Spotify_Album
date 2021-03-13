import React, { useState, useEffect } from "react";
import "./Spotify.css"
const Spotify = ()=>
{
    const [Albums , setAlbums] = useState({"albums" : []});

    
    useEffect(
        ()=>{
            let myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer BQC9NAyBvEy2n2SiVLuxdVOyNyglmmbhtvkzwc9vbYTjnXFIrFl1lii3tXCceIKUpEIv-807mKSS4cEXoVlowUPUFo73-O39vJ-LM7I6gEUPosPiVjC6W23bn2vjMnSapSskdDD4uuiAFo26VMpO5Ui6fXru7fw-51U");

let requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.spotify.com/v1/albums?ids=15AzUynz7teTdMlQrogKmd,3FX5u4NRsdqBzG4D19yn4L,3fgTNjcIsvJweiSNP6v5xG,2jZGy0iv39ZQTpXZJ8K7pC,2xzGAGgWD6x2MGr2qVcQP0,72qrnM4yUNMDDlWiqKc8iY,6HukFdvHHvXI3EAhjvtnF3,1IeXdR2ptc5Jhxmko89CgE,0MDhZ0yRkugNEg7PmMMUE8,1D0PTM0bg7skufClSUOxTP", requestOptions)
  .then(response => response.json())
  .then(result => {setAlbums(result)
 console.log("yyyyy", result)
})
  .catch(error => console.log('error', error));
      },[]
    )
    console.log("xxxxx" , Albums.albums.length)
    return (
        <div>
            {Albums.albums.length > 0 ? Albums.albums.map((data, i)=>{
                return(
                <div className = "albums">
                   <span>{data.name}</span> 
                   <span>{data.release_date}</span> 
                   <img style ={{height: "300px" , width : "300px" }} src = {data.images[0].url} />

                </div>

                )
            }
            ) : null
            }
        </div>
    )
}

export default Spotify ;