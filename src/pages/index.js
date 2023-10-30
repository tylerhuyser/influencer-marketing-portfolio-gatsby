import React, { useEffect, useState } from "react";
// import ReactDOM from 'react-dom';
import { Route, useNavigate, Routes } from "react-router-dom";
import { useStaticQuery, graphql, Link } from 'gatsby';
import { BrowserRouter as Router } from 'react-router-dom';
import {Helmet} from "react-helmet";

import Layout from '../components/shared/Layout'
import Loader from '../components/shared/Loader'

import About from "../components/About";
import generateCaseStudyCardsJSX from "../hooks/generateCaseStudyCardsJSX";
import ClientsCarousel from "../components/ClientsCarousel";
import SelectInfluencerContent from "../components/SelectInfluencerContent";
import ContactForm from "../components/ContactForm";

import "../styles/App.css"
import "../styles/Home.css"

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

  const CaseStudyCardsJSX = generateCaseStudyCardsJSX(3)

  return (

      <Router>
        <div className="app-container">

          {loaded && isMounted ?
                
            <Layout loaded={loaded} isMounted={isMounted} isHome={isHome} setCampaignCategory={setCampaignCategory} >
              
            <div className="home-container">
                
              <About />
                
              <ClientsCarousel />
              
              {CaseStudyCardsJSX}
                
              <SelectInfluencerContent />
                
              <ContactForm />
              
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
