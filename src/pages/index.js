import React, { useState } from "react";

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

  const CaseStudyCardsJSX = generateCaseStudyCardsJSX(3)

  return (

        <div className="app-container">

          {loaded && isMounted ?
                
            <Layout loaded={loaded} isMounted={isMounted} >
              
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

  );
}

export default App;
