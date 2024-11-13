import React from "react";

import "../styles/About.css"

export default function About() {
  
  return (
    <div className="about-container" id="about-section">

      <div className="headshot-container">
        <img className="about-headshot" alt="about-headshot" src='https://lh3.google.com/u/0/d/1ZHH1tsOlWbTDICNWINhoo0Hj29Mu-x-z' />
      </div>

      <p className="about-stat" id="campaigns"><span className="about-stat-quantity">50+</span><br />Campaigns</p>
      <p className="about-stat" id="posts"><span className="about-stat-quantity">750+</span><br />Posts</p>
      <p className="about-stat" id="impressions"><span className="about-stat-quantity">11.5M+</span><br />Impressions</p>

      <a className="follow-button" href="#contact-form">Contact</a>

      <div className="about-bio-container">
        <h1 className="bio-title">Tyler Huyser</h1>
        <p className="bio-subtitle">Influencer Marketing Specialist</p>
        <p className="bio-blurb">
          Experienced influencer marketing specialist.
          Ideation, Optimization, Execution.
          Previously, VaynerMedia, GMG, & PureWow.
          Looking to leverage influencers at scale? Drop me a note.
        </p>
        <p className="bio-location">New York, New York</p>
      </div>
    </div>
  )
}