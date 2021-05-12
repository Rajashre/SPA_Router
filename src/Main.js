import React, { Component } from "react";
import {
      Route,
      NavLink,
    BrowserRouter as HashRouter
    } from "react-router-dom";
    import Australia from "./Australia";
    import Canada from "./Canada";
    import India from "./India";
 
class Main extends Component {
  render() {
    return (
    <HashRouter>
        <div>
            
                <h1>Creating a Single-Page App in React using React Router</h1>
                <ul className="header">
                    <li><NavLink to="/">Australia</NavLink></li>
                    <li><NavLink to="/Canada">Canada</NavLink></li>
                    <li><NavLink to="/India">India</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Australia}/>
                    <Route exact path="/Canada" component={Canada}/>
                    <Route exact path="/India" component={India}/>
                </div>
        </div>
 </HashRouter> 
       );
  }
}
export  default Main

