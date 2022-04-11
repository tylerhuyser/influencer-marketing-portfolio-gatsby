import React, { useState } from "react"
import { graphql } from "gatsby"
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from "../components/shared/Layout"
import Loader from '../components/shared/Loader'

import "../styles/CampaignTemplate.css"

export default function CampaignTemplate({ data }) {

  const location = window.location

  const isHome = location.pathname === '/';

  console.log(data)

  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { client, heroImage, subImage, stats, posts } = frontmatter;

  console.log(frontmatter)

  return (

    <Router>

      <Layout location={location} loaded={true} isMounted={true} isHome={isHome}>

        <div className="campaign-detail-container">
                    
          <p className="campaign-detail-title" id={`${client} title`}>{client}</p>             
          <img className='header-image' id="hero-image" src={heroImage} />
              
          <div className="campaign-detail-body-container">      
            <div className="campaign-detail-section-container" id="overview-section">
              <p className='campaign-detail-section-header' id="overview-header">Brief Overview</p>
              <div className="campaign-description" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
              
            <div className="campaign-detail-section-container" id="stats-section">
              <p className='campaign-detail-section-header' id="stats-header">Key Stats</p>
              <ul className="campaign-stats-list">
                {stats.map((stat, i) => (
                  <li className="campaign-stat" key={i}>{stat}</li>
                ))}
              </ul>
            </div>
          </div>
              
          <img className='header-image' id="sub-image" src={subImage} />
              
          <div className="campaign-detail-section-container" id="influencer-content-section">
            <p className='campaign-detail-section-header' id="influencer-content-header">Select Influencer Content</p>
            <div className="influencer-content-container">
              {posts.map((post, i) => (
                <a href={post.frontmatter.livePostLink} className="influencer-content-link">
                  <img className="influencer-content-image" key={i} src={post.frontmatter.postFileLink} />
                  <p className='influencer-name'>{post.frontmatter.influencerName} ({post.frontmatter.influencerHandle})</p>                  
                </a>
              ))}
            </div>
              
          </div>
              
        </div>
              
      </Layout>
          
   </Router>
        
  )
}

export const pageQuery = graphql`
query ($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
      frontmatter {
        client
        heroImage 
        subImage
        stats
        posts {
          frontmatter {
            influencerName
            influencerHandle
            livePostLink
            postFileLink
          }
        }
      }
    }
  }
`