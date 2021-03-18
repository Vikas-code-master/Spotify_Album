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
                    'Authorization': 'Bearer BQCJaP1YprAyuNG-G-3iHfKaiDu8jxambqBOQEeqFZZPASF9F5nxLk9JRX4_8yqSBvSJn40Kw4qH4yfQDMef0al9E-2RI4H2nMrSvvHioKRzNN52RtCaofTiRyIrDNYqpNn3ety3VdZivKU5r_Uv2Ar3skyGKRZuug4'
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

        },[])
    
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
