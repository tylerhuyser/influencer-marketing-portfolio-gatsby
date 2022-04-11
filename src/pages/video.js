import React, {useState} from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from '../components/shared/Layout'
import CampaignCards from '../components/CampaignCards'

export default function Video (props) {

  const [loaded, setLoaded] = useState(true)
  const [isMounted, setIsMounted] = useState(true)

  const location = window.location

  const isHome = location.pathname === '/';

  return (
      
      <Router>

        <Layout location={location} loaded={loaded} isMounted={isMounted} isHome={isHome}>
      
          <CampaignCards category={"video"} />
          
        </Layout>

      </Router>

  )
}