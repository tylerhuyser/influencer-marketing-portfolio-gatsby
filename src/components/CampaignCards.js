import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { useNavigate } from "react-router-dom";

import "./CampaignCards.css"

export default function CampaignCard (props) {

  const { category } = props
  const navigate = useNavigate();

  console.log(category)

  const data = useStaticQuery(graphql`
    query {
      campaigns: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/campaigns/social/" } }
        sort: { fields: [frontmatter___client], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              client
              coverImage
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
            html
          }
        }
      }
    }
  `);

  const handleCampaign = () => {
    setTimeout(() => { navigate(`/campaigns/9-elements`) }, 1001)
  }

  console.log(data)

  const campaigns = data.campaigns.edges.filter(({ node }) => node);

  return (

    <>
      <div className="campaign-cards-container">

        {campaigns &&
          campaigns.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { client, coverImage, heroImage, subImage, stats, posts } = frontmatter;

            

            return (

              <div className="campaign-card-container" id={client}>

                <img className='header-image' id="cover-image" src={coverImage} onClick={handleCampaign} />
                
                <p className="campaign-card-title" id={`${client} title`}>{client}</p>
              
                <img className='header-image' id="hero-image" src={heroImage} />

                <div className="campaign-card-body-container">
                  <div className="campaign-card-section-container" id="overview-section">
                    <p className='campaign-card-section-header' id="overview-header">Brief Overview</p>
                    <div className="campaign-description" dangerouslySetInnerHTML={{ __html: html }} />
                  </div>

                  <div className="campaign-card-section-container" id="stats-section">
                    <p className='campaign-card-section-header' id="stats-header">Key Stats</p>
                    <ul className="campaign-stats-list">
                        {stats.map((stat, i) => (
                          <li className="campaign-stat" key={i}>{stat}</li>
                        ))}
                    </ul>
                  </div>
                </div> 

                <img className='header-image' id="sub-image" src={subImage} />

                <div className="campaign-card-section-container" id="influencer-content-section">

                  <p className='campaign-card-section-header' id="influencer-content-header">Select Influencer Content</p>

    
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
            )
        })}
        
      </div>
    </>
  )
}