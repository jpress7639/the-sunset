import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom"

import About from "./About"
import Science from "./Science"
import Find from "./Find"
import YourSunset from "./YourSunset"

function App() {
  return (
    <div>
<header>
  <nav>
  <Link to="/" style={{ textDecoration: 'none'}}> <h1>The Sunset Chaser <span className="dropdown">☀️</span></h1></Link>
  <div className="drop-btn">
  <p className="dropdown">☀️</p>
    <div className="dropdown-content">
    <Link to="/about" style={{ textDecoration: 'none' }}><li>About</li></Link>
    <Link to="/science" style={{ textDecoration: 'none'}}><li>Behind The Colors</li></Link>
    <Link to="/find-sunset" style={{ textDecoration: 'none'}}><li>Find Sunset</li></Link>
    </div>
    </div>
    <ul className="dropdownlinks">
    <Link to="/about" style={{ textDecoration: 'none' }}><li>About</li></Link>
    <Link to="/science" style={{ textDecoration: 'none'}}><li>Behind The Colors</li></Link>
    <Link to="/find-sunset" style={{ textDecoration: 'none'}}><li>Find Sunset</li></Link>
    </ul>
  </nav>
</header>
<div className="sun"></div>
<Route path="/" exact>
<div className="intro">
  <h2>Welcome to the Sunset Chaser! Look through to find your horizon!</h2>
  <p >And look below to see our Gallery contributed by our fellow Chasers!</p>
  </div>
  <YourSunset />
  </Route>
<Route path="/about">
<About />
</Route>
<Route path="/science">
<Science />
</Route>
<Route path="/find-sunset">
  <Find />
</Route>
    </div>
  );
}

export default App;
