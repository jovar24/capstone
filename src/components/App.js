import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import '../styles/main.scss';
import Home from "./pages/home"
import "weather-icons/css/weather-icons.css"
import Review from "./pages/reviews"
import NavConatiner from '../navigation/navcontainer';



export default class App extends Component {


  render() {
    return (
      <div className="App" >

        <BrowserRouter>
          <NavConatiner />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/reviews" component={Review} />
          </Switch>
        </BrowserRouter>

      </div>
    )
  }

}

