import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from '../components/shared/Layout'
import CampaignCards from '../components/CampaignCards'

export default function Experiential () {

  const location = window.location
  const isHome = location.pathname === '/';

  return (
      
    <Router>

      <Layout location={location} loaded={true} isMounted={true} isHome={isHome}>
      
        <CampaignCards category={"experiential"} />
          
      </Layout>

    </Router>

  )
}