import React from 'react'

import Head from "../shared/Head"

import Header from '../shared/Header'
import Footer from './Footer'

import "../../styles/Layout.css"
import "../../fonts/Fonts.css"


export default function Layout (props) {

  const { title, description } = props
  
  return(
    <>
          
      <Head title={title} description={description} />
      
      <div className="layout-container">

        <Header />

        <div className="body-container">

          {props.children}

          </div>

        <Footer />

      </div>
          
    </>
    
  )

}