import React from 'react';
import './App.css';
import About from "./About"
import Science from "./Science"
import Psych from "./Psych"
import Find from "./Find"
import { Route, Link } from "react-router-dom"

function App() {
  return (
    <div>
<header>
  <nav>
  <Link to="/" style={{ textDecoration: 'none'}}> <h1>The Sunset Chaser <span>☀️</span></h1></Link>
    <ul>
    <Link to="/about" style={{ textDecoration: 'none' }}><li>About</li></Link>
    <Link to="/science" style={{ textDecoration: 'none'}}><li>Behind The Colors</li></Link>
    <Link to="/psych" style={{ textDecoration: 'none'}}><li>Behind the Mind</li></Link>
    <Link to="/your-sunset" style={{ textDecoration: 'none'}}><li>Your Sunset</li></Link>
    <Link to="/blog" style={{ textDecoration: 'none'}}><li>Share Your Sunset</li></Link>
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
<Route>
  <Psych />
</Route>
<Route path="/your-sunset">
  <Find />
</Route>
    </div>
  );
}

export default App;
