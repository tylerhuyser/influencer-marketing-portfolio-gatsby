import React, { useEffect, useState } from "react";
// import ReactDOM from 'react-dom';
import { Route, useNavigate, Routes } from "react-router-dom";
import { useStaticQuery, graphql, Link } from 'gatsby';
import { BrowserRouter as Router } from 'react-router-dom';
import {Helmet} from "react-helmet";

import Layout from '../components/shared/Layout'
import Loader from '../components/shared/Loader'

import generateCaseStudyCardsJSX from "../hooks/generateCaseStudyCardsJSX";
import ClientsCarousel from "../components/ClientsCarousel";
import SelectInfluencerContent from "../components/SelectInfluencerContent";

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

  const caseStudyCardsJSX = generateCaseStudyCardsJSX(3)

  return (

      <Router>
        <div className="app-container">

          {loaded && isMounted ?
                
            <Layout location={location} loaded={loaded} isMounted={isMounted} isHome={isHome} setCampaignCategory={setCampaignCategory} >
              
              <div className="home-container">
                
                <div className="home-hero-container">
                  
                </div>
              
                <h2 className="home-page-title" id="case-studies-title">Case Studies</h2>
                
                <div className="case-studies-category-cards-container">
                
                  {caseStudyCardsJSX}
              
                </div>
              
                <h2 className="home-page-title" id="clients-studies-title">Select Clients</h2>
                
                <ClientsCarousel />
                             
                <h2 className="home-page-title" id="influencer-content-title">Select Influencer Content</h2>
                
                <SelectInfluencerContent />
                
                <h2 className="home-page-title" id="contact-form-title">Let's Work.</h2>
                
                <div className="contact-form-container">
                
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
