import React, { useState, useEffect } from "react";
import "./Spotify.css"
const Spotify = ()=>
{
    const [Albums , setAlbums] = useState({"albums" : []});

    
    useEffect(
        ()=>{
            let myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer BQDoagBV8_55nNRjkOoOkNj0avXsN4o-tB9LaYxOCRBKzJm2y1kw_FAhaYCgCY1g_arAeVR8TO5TX_fHYnJI40zl4jTu_D8V9SU3qlP02RA08wJlTquf0beuuxgsA5RDJUHQ5dxHI_PqQGwnt8Ckzqtwjm0nfr9AlyA");

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
