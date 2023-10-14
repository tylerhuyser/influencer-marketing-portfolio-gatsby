import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from '../components/shared/Layout'

export default function About (props) {

  const location = window.location
  const isHome = location.pathname === '/';

  return (

    <Router>

    <Layout location={location} loaded={true} isMounted={true} isHome={isHome}>
    
        <div className='about-container'>

          <div className='bio-container'>

            <p>Tyler Huyser is an experienced social media consultant, specializing in the creation, optimization, & execution of influencer activations.<br />

                Most recently, Tyler led influencer efforts at the VaynerX collection of companies, including VaynerMedia, Gallery Media Group, PureWow, and ONE37pm. During his time at VaynerX, the projects he contributed to garnered over 11.5 million organic impressions and netted an average $0.37 CPM.<br />

                Complementing his social expertise is Tyler's rich background in film production. After graduating from Columbia University's film program, Tyler has produced, shot, or edited freelance content for the likes of Sharecare, QuickFrame, and Miles4Migrants. <br />

                Furthermore, his cinematic portfolio has earned recognition from the likes of the Miami International Film Festival, Harlem International Film Festival, and the Festival International of Virtual & Augmented Realities (FIVARS). <br />

                With a comprehensive understanding of the freelance equation, I am fully equipped to forge fruitful partnerships between influencers and brands.</p>

          </div>

          <div className='services-container'>

          Services Include
          Social:

          Social Audit & Competitor Analysis
          Strategy Development
          Content Planning
          Community Management
          Paid Media
          Influencers:

          Activation Design/Consulting
          Influencer/Talent Sourcing
          Negotiations & Contracts
          Campaign Management, Communications, & Execution
          Whitelisting
          Analytics, Reporting, & Insights
          Content Production:

          Producing
          Videography
          Editing

          </div>

        </div>
        
    </Layout>

  </Router>
  )
}