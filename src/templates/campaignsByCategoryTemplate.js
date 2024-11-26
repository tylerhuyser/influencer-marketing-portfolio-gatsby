import React from "react"

import Layout from '../components/shared/Layout'
import CampaignCards from '../components/CampaignCards'

export default function CampaignByCategoryTemplate({ pageContext }) { 

  return (  

    <Layout loaded={true} isMounted={true} title={`${pageContext.campaignCategory.charAt(0).toUpperCase()}${pageContext.campaignCategory.slice(1)} | Influencer Campaigns`} >

      <h1>{`${pageContext.campaignCategory.charAt(0).toUpperCase()}${pageContext.campaignCategory.slice(1)} Campaigns`}</h1>
      
      <CampaignCards category={`${pageContext.campaignCategory}`} />
          
    </Layout>

  )
}
