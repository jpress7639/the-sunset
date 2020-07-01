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
  <Link to="/" style={{ textDecoration: 'none'}}> <h1>The Sunset Chaser <span>☀️</span></h1></Link>
    <ul>
    <Link to="/about" style={{ textDecoration: 'none' }}><li>About</li></Link>
    <Link to="/science" style={{ textDecoration: 'none'}}><li>Behind The Colors</li></Link>
    <Link to="/find-sunset" style={{ textDecoration: 'none'}}><li>Find Sunset</li></Link>
    <Link to="/your-sunset" style={{ textDecoration: 'none'}}><li>Share Your Sunset</li></Link>
    </ul>
  </nav>
</header>
<div className="sun"></div>
<Route path="/about">
<About />
</Route>
<Route path="/science">
<Science />
</Route>
<Route path="/find-sunset">
  <Find />
</Route>
<Route path="/your-sunset">
  <YourSunset />
</Route>
    </div>
  );
}

export default App;
