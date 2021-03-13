import './Auth.css';
import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';
import logo from '../../assets/document.svg';
import fb from '../../assets/facebook.svg';
import google from '../../assets/google.svg';
import linkedin from '../../assets/linkedin.svg'
import Sign_up from '../../component/SignUp/Sign_up';
import Sign_in from '../../component/signIn/Sign_in';


const Auth = ()=>{
	const [isSign_up , setisSign_up] = useState(false) ;
	
	const handleToggle = ()=>{
		setisSign_up(!isSign_up);
	}

return(
	<>
     {isSign_up === true ? <Sign_up isSign_up = {isSign_up} handleToggle={handleToggle} /> 
	 : <Sign_in isSign_up = {isSign_up} handleToggle={handleToggle}/> }
	 <button  className = "but" onClick = {()=>{setisSign_up(!isSign_up)}}>hello</button>
	</>
)
}

export default withRouter(Auth)