import React from 'react'

import Header from '../shared/Header'
import Footer from './Footer'

import "../../styles/Layout.css"
import "../../fonts/Fonts.css"


export default function Layout (props) {

  const { isMounted } = props
  
  return(
    <>
      
      {isMounted ?
      
        <div className="layout-container">

          <Header />

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