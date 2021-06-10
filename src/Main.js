import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Scp from "./SCP";
import {apikey} from "./helper.js";

class Main extends Component 
{
         render ()
         {
             return(
                <HashRouter>
                  <div>
                    <div className="nav-gradientbg">
                      <nav className="navbar navbar-expand-lg navbar-dark nav-gradient">
                          <img src="images/logo.png" className="logo" alt="SCP Foundation logo" />
                          <a className="navbar-brand font-weight-bold" href="index.html">SCP Foundation - Secure, Contain, Protect</a>
                      </nav>

                      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                          </button>

                          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav mr-auto">
                                  <li className="nav-item active">
                                    <NavLink exact to="/" className="nav-link">Home</NavLink>
                                  </li>
                                  <li className="nav-item active">
                                    <NavLink exact to="/SCP" className="nav-link">SCP</NavLink>
                                  </li>
                              </ul>
                          </div>
                      </nav>
                    </div>
                    <div className="content">
                      <Route exact path="/" component={Home} />
                      <Route exact path="/Scp" component={Scp} />
                    </div>
                  </div>
                </HashRouter>
             );
         }
}

let eventSource = new EventSource(`https://scp6210-cb70.restdb.io/realtime?apikey=${apikey}`);

export default Main;