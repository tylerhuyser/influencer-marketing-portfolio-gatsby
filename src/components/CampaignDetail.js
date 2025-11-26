import React from "react"

export default function CampaignDetail(props) {
  const { html, stats } = props
  
  return (

    <div className="campaign-detail-body-container">    

      <div className="campaign-detail-section-container" id="overview-section">
        <p className='campaign-detail-section-header' id="overview-header">Brief Overview</p>
        <div className="campaign-description" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
        
      <div className="campaign-detail-section-container" id="stats-section">
        <p className='campaign-detail-section-header' id="stats-header">Key Stats</p>
        <ul className="campaign-stats-list">
          {stats.map((stat, i) => (
            <li className="campaign-stat" key={i}>{stat}</li>
          ))}
        </ul>
      </div>

    </div>
  )
}