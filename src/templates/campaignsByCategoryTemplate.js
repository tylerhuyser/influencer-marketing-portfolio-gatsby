import React from "react"

import Layout from '../components/shared/Layout'
import CampaignCards from '../components/CampaignCards'

import "../styles/CampaignsByCategory.css"

export default function CampaignByCategoryTemplate({ pageContext }) { 

  return (  

    <Layout loaded={true} isMounted={true} title={`${pageContext.campaignCategory.charAt(0).toUpperCase()}${pageContext.campaignCategory.slice(1)} | Influencer Campaigns`} >

      <div className="campaigns-by-category-container" id={`${pageContext.campaignCategory}-campaigns-container`}>

        <h1 className="campaigns-by-category-title">{`${pageContext.campaignCategory.charAt(0).toUpperCase()}${pageContext.campaignCategory.slice(1)} Campaigns`}</h1>
        
        <CampaignCards category={`${pageContext.campaignCategory}`} />

      </div>
          
    </Layout>

  )
}
