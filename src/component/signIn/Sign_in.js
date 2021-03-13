import './Sign_in.css';
import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';
import logo from '../../assets/Spotify_img.jpeg';
import fb from '../../assets/facebook.svg';
import google from '../../assets/google.svg';
import linkedin from '../../assets/linkedin.svg'


const SignIn = (props)=>{
    const [Email , setEmail] = useState('');
    const [Password , setPassword] = useState('') ;
    function handleChange(e) {
       setPassword(e.target.value);
     }
   const handleSubmit = (e)=>{
       setPassword('');
       e.preventDefault();
   }
   
    return <div className="auth">

<div class="login-card">
	<div class="login-glass">
		<img className="logo-login-card" src={logo}/>
        <h1 class="challenge-title">Spotify</h1>
	</div>
	<div class="login-form-container">
		<h3 class="login-title">
			Sign in to your account
		</h3>
		<form>
			<div class="form-control">
				<label for="email">Email</label>
				<input id="email" name="email" type="email" autocomplete="off" required />
			</div>
			<div class="form-control">
				<label for="password">Password</label>
				<input id="password" name="password" type="password" required />
			</div>
			<div class="form-control">
				<div class="form-remember">
					<input id="remember" name="remember" type="checkbox" /> <label for="remember">Remember me</label>
				</div>
				<div class="form-forgot">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
			<div class="form-controlsl">
				<button class="btn sign-in-btn">
					Sign in
				</button>
                <span class="btn_for _register"  onClick = {props.handleToggle}>
					{props.isSign_up === false ? "Not Registered Yet Sign up" : ""}
				</span>
			</div>
		</form>
		<div class="divider">or continue with</div>
		<ul class="social-list">
			<li>
				<button class="btn btn-default">
                    <img className="social-icon" src = {google}/>
				</button>
			</li>
			<li>
				<button class="btn btn-default">
                <img className="social-icon" src = {fb}/>
				</button>
			</li>
			<li>
				<button class="btn btn-default">
                <img className="social-icon" src = {linkedin}/>
				</button>
			</li>
		</ul>
	</div>
</div>
    </div>
}

export default withRouter(SignIn)