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
    'Authorization': 'Bearer BQD4969ecHCaFZVHYKJ-tDRPtmbZUggd6DEc03y7YP881tFglxQkvMARWvv4S30pk8WWj57RZFc5-yW4gcbPc7d7PsLIIGSwpcp35k55nbr-9wbj7QrGKx693-m4_2rdyRzuiYIIbQwvijUdaF5iYzOprnw5XZUeTZ0'
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
