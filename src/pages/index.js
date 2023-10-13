import React, { useEffect, useState } from "react";
// import ReactDOM from 'react-dom';
import { Route, useNavigate, Routes } from "react-router-dom";
import { useStaticQuery, graphql, Link } from 'gatsby';
import { BrowserRouter as Router } from 'react-router-dom';
import {Helmet} from "react-helmet";

import Layout from '../components/shared/Layout'
import Loader from '../components/shared/Loader'

// import Home from '../components/screens/Home'
// import About from '../components/screens/About'
// import CampaignDetail from '../components/screens/CampaignDetail';
// import CampaignsByCategory from './social';

import "../styles/app.css"
import "../styles/home.css"

function App() {

  const [loaded, setLoaded] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
 
  const location = window.location
  const isHome = location.pathname === '/';

  const [campaignCategory, setCampaignCategory] = useState("social")

  // useEffect(() => {
  //   if (6 === 6) {
  //     console.log('App.jsx - UseEffect #XX - App.js LOADED')
  //     setLoaded(true)
  //   }
  // }, [])

  return (

      <Router>
        <div className="app-container">

          {loaded && isMounted ?
                
            <Layout location={location} loaded={loaded} isMounted={isMounted} isHome={isHome} setCampaignCategory={setCampaignCategory} >
              
              <div className="home-container">
                
                <div className="home-hero-container">
                  
              </div>
              
              <h2 className="case-studies-category-cards-title">Case Studies</h2>
                
              <div className="case-studies-category-cards-container">
                
                  <Link className="case-study-category-card" id='social-case-study-category-card' to={`/social`} >
                    
                    <img className="case-study-category-card-image" id="social-case-study-category-card-image" src="https://drive.google.com/uc?export=view&id=175i1x524AGHTKqtJGpcDZ3Khhv3EDR2w" />
                    
                    <p className="case-study-category-card-title" id="social-case-study-category-card-title">Social</p>
  
                  </Link>
                  
                  <Link className="case-study-category-card" id='video-case-study-category-card' to={`/video`} >
                    
                    <img className="case-study-category-card-image" id="video-case-study-category-card-image" src="https://drive.google.com/uc?export=view&id=19EhStLaCuxXVsVY-aAnYyhv_YcfxuyzQ" />
                    
                    <p className="case-study-category-card-title" id="video-case-study-category-card-title">Video</p>

                  </Link>
                  
                  <Link className="case-study-category-card" id='experiential-case-study-category-card' to={`/experiential`} >

                    <img className="case-study-category-card-image" id="experiential-case-study-category-card-image" src="https://drive.google.com/uc?export=view&id=1DMCoEWrSaZT9ntYqhrHO8TmoFpQfxaYi" />
                    
                    <p className="case-study-category-card-title" id="experiential-case-study-category-card-title">Experiential</p>
                    
                  </Link>

                </div>
                
              </div>
            
            </Layout>
            
          :

            <Loader finishLoading={() => setIsMounted(true)} id="app-loader" />

          }

        </div>

      </Router>

  );
}

export default App;
