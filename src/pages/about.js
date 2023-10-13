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

        </div>
        
    </Layout>

  </Router>
  )
}