import React, { useEffect, useState } from "react";
// import ReactDOM from 'react-dom';
import { Route, useNavigate, Routes } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import {Helmet} from "react-helmet";

import Layout from '../components/shared/Layout'
import Loader from '../components/shared/Loader'

// import Home from '../components/screens/Home'
// import About from '../components/screens/About'
// import CampaignDetail from '../components/screens/CampaignDetail';
// import CampaignsByCategory from './social';

import "../styles/app.css"

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

              <Routes>
                  
                {/* <Route exact path="/"
                  element={<Home />}
                />

                <Route path="/about"
                  element={<About />}
                /> */}

                {/* <Route path="/campaigns/:slug"
                  element={<CampaignDetail />}
                />

                <Route path="/categories/:name"
                  element={<CampaignsByCategory/>}
                  /> */}
                  
              </Routes>

            </Layout>
            
          :

            <Loader finishLoading={() => setIsMounted(true)} id="app-loader" />
                  
            // <p>LOADING</p>

          }

        </div>

      </Router>

  );
}

export default App;
