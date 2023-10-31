import React from "react"

import Layout from '../components/shared/Layout'
import CampaignCards from '../components/CampaignCards'

export default function CampaignByCategoryTemplate({ pageContext }) { 

  const location = window.location

  console.log(pageContext)

  return (  

    <Layout location={location} loaded={true} isMounted={true}>
      
      <CampaignCards category={`${pageContext.campaignCategory}`} />
          
    </Layout>

  )
}
