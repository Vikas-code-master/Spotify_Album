import React, { useEffect } from "react";
import { Switch, Route, withRouter} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Auth from "./views/Auth/Auth";
import Spotify from "./views/Spotify/Spotify";
const App = (props)=> {
  return (
    <BrowserRouter>
    <div className="App">
        <Switch>
       
          <Route path='/albums' component = {Spotify} /> 
          <Route path='/auth' component = {Auth} />
      
        </Switch>
    </div>
    </BrowserRouter>)
}
export default App;