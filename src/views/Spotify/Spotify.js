import React, { useState, useEffect } from "react";
import "./Spotify.css";
import logo from '../../assets/Spotify_img.jpeg';
import user from '../../assets/user.svg';
import {Link} from 'react-router-dom'
const Spotify = ()=>
{
    const [Albums , setAlbums] = useState('');

    
    useEffect(
        ()=>{
            var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api.spotify.com/v1/albums?ids=15AzUynz7teTdMlQrogKmd,3FX5u4NRsdqBzG4D19yn4L,3fgTNjcIsvJweiSNP6v5xG,2jZGy0iv39ZQTpXZJ8K7pC,2xzGAGgWD6x2MGr2qVcQP0,72qrnM4yUNMDDlWiqKc8iY,6HukFdvHHvXI3EAhjvtnF3,1IeXdR2ptc5Jhxmko89CgE,0MDhZ0yRkugNEg7PmMMUE8,1D0PTM0bg7skufClSUOxTP',
  headers: { 
    'Authorization': 'Bearer BQD1-EMgmNaKb4llz4QK40O9iqS1CzyOekiCufmyct59afg20Tgh3yw1-dsURa-RO1jXXXqJtAkg_NbNz7_vi8XmJWvQeSRMkxucLC1jlgVAwVNGLp746rL1HyKrft3Q0MqQ7j9ZMidVoanDXPP-0AdtRCxu2WD3QCk'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  setAlbums(response.data)
})
.catch(function (error) {
  console.log(error);
});
      },[]
    )
    // console.log("xxxxx" , Albums.albums.length)
    return (
        <div>
        <div className="header">
            <img className = "logo" src={logo}/>
              <Link to='/auth'>
              <img className = "user"  src= {user}/>
              </Link>
            
        </div>
        <div className="content">
               <h2>Albums for Rolling Stone</h2> 
        </div>
            {Array.isArray(Albums.albums) ? Albums.albums.map((data, i)=>{
                return(
           
                <div className = "albums">
               
                   <img className="album-banner" src = {data.images[0].url} />
                <div className="album-detail">
                <span>{data.name}</span> 
                   <span>{data.release_date}</span> 
                                
                </div>
                </div>
                )
            }
            ) : null
            }
        </div>
    )
}

export default Spotify ;
