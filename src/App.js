/* eslint-disable */
import React, { useEffect } from 'react';
import './styles/home.css';
import backgroundVideo from '../src/components/ii.mp4';
import logo from '../src/components/gb.png';
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
  useEffect(() => {
    const backgroundVideoElement = document.getElementById('background-video');
    if (backgroundVideoElement) {
      backgroundVideoElement.playbackRate = 0.75;
    }
  }, []);

  return (
    <div>
      <audio id="audio" src="assets/sounds/entry.wav"></audio>

      <div className="mainScreen" id="mainScreen">
        <video id="background-video" autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
        </video>


        <div className="gbar">
          <span>by LendNest</span>
        </div>

        <div className="center-content">
          <p className="maintext">Creating Decentralized world</p>
          <a href="" className="homeButton">See how</a>
        </div>


        <nav className="menuNav">
          <span className="sonar"></span>
          <img src={logo} className="logo_circle" alt="logo" />
          <a href="" className="nav_link">Supposed</a>
          <a href="" className="nav_link">to be</a>
          <a href="" className="nav_link">menu</a>
          <a href="" className="nav_link">nav</a>
        </nav>


      </div>
      <SpeedInsights />
    </div>

  );
};

export default App;
