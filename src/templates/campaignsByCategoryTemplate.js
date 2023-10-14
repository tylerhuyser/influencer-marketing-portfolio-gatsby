import React from "react"
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from '../components/shared/Layout'
import CampaignCards from '../components/CampaignCards'

export default function CampaignByCategoryTemplate({ pageContext }) { 

  const location = window.location
  const isHome = location.pathname === '/';

  console.log(pageContext)

  return (
      
    <Router>

      <Layout location={location} loaded={true} isMounted={true} isHome={isHome}>
      
        <CampaignCards category={`${pageContext.campaignCategory}`} />
          
      </Layout>

    </Router>

  )
}
