import React from "react"

import Layout from '../components/shared/Layout'
import CampaignCards from '../components/CampaignCards'

export default function CampaignByCategoryTemplate({ pageContext }) { 

  return (  

    <Layout loaded={true} isMounted={true}>
      
      <CampaignCards category={`${pageContext.campaignCategory}`} />
          
    </Layout>

  )
}
