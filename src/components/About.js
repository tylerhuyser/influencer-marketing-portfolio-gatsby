import React from "react";
import LazyImage from "./shared/LazyImage";

import "../styles/About.css"

export default function About() {

  const ABOUTIMAGESRC = 'https://res.cloudinary.com/tylerhuyser/image/upload/v1763767997/influencer-campaigns/Headshot_-_2020_-_Occam.webp'
  
  return (
    <div className="about-container" id="about-section">

      <div className="headshot-container">
        <LazyImage
          src={ABOUTIMAGESRC}
          placeHolder={ABOUTIMAGESRC.replace('/upload/', '/upload/w_20/e_blur:200/')}
          alt="about-headshot"
          className="about-headshot" />
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