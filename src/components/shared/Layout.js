import React, { useEffect } from 'react'

import Header from '../shared/Header'
import Footer from './Footer'

import "../../styles/Layout.css"


export default function Layout (props) {

  const { isMounted, isHome } = props

    // Sets target="_blank" rel="noopener noreferrer" on external links
    const handleExternalLinks = () => {
      const allLinks = Array.from(document.querySelectorAll('a'));
      if (allLinks.length > 0) {
        allLinks.forEach(link => {
          if (link.host !== window.location.host) {
            link.setAttribute('rel', 'noopener noreferrer');
            link.setAttribute('target', '_blank');
          }
        });
      }
    };
  
    useEffect(() => {
      handleExternalLinks();
    }, []);
  
  return(
    <>
      
      {isMounted ?
      
        <div className="layout-container">

          <Header isHome={isHome} />

          <div className="body-container">

            {props.children}

          </div>

          <Footer />

        </div>

        :

        <div className="logo-wrapper" id="layout-loader">

          <p>LOADING...</p>

        </div>
      
      }
          
    </>
    
  )

}