import React from "react";

import "../styles/About.css"

export default function About() {
  
  return (
    <div className="about-container">

      <img className="about-headshot" alt="about-section-image" src='https://drive.google.com/uc?export=view&id=1ZHH1tsOlWbTDICNWINhoo0Hj29Mu-x-z' />

      <p className="about-bio" id="bio-column-a">
        Tyler Huyser is an experienced social media consultant, specializing in the creation, optimization, & execution of influencer activations.<br /><br />
        Most recently, Tyler led influencer efforts at the VaynerX collection of companies, including VaynerMedia, Gallery Media Group, PureWow, and ONE37pm. During his time at VaynerX, the projects he contributed to garnered over 11.5 million organic impressions and netted an average $0.37 CPM.<br /><br />
      </p>

      <p className="about-bio"id="bio-column-b">
        Complementing his social expertise is Tyler's rich background in film production. After graduating from Columbia University's film program, Tyler has produced, shot, or edited freelance content for the likes of Sharecare, QuickFrame, and Miles4Migrants. <br /><br />
        With a comprehensive understanding of the freelance equation, I am fully equipped to forge fruitful partnerships between influencers and brands.
      </p>
      
    </div>
  )
}