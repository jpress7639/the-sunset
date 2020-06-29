import React from 'react';
import './App.css';
import About from "./About"
import { Route, Link } from "react-router-dom"

function App() {
  return (
    <div>
<header>
  <nav>
    <h1>The Sunset Chaser</h1>
    <ul>
      <li><Link to="/About">About</Link></li>
      <li>Behind The Colors</li>
      <li>Behind the Mind</li>
      <li>Your Sunset</li>
      <li>Share Your Sunset</li>
    </ul>
  </nav>
</header>
<Route path="/about">
<About />
</Route>
    </div>
  );
}

export default App;
