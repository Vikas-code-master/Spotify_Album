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
    'Authorization': 'Bearer BQCOWl_v4Ljt48yqiL9eXWO_wxmn5fKh8-QI8YiSV9JOwlddFy1Y0bVwrS2Cq2nlM9G2mwESdAkprBqrRX5Zi1gqB6bffAJ1ZPcnwNGOqD9MNW1DLAzBFWN1S4FlPYivuxBS4Acn7LAleveQ07UAAdtGFz64UZZTJPk'
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
