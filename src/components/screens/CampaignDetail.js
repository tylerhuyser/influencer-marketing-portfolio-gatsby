import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { useParams, useNavigate } from "react-router-dom";

import "./CampaignDetail.css"

export default function CampaignDetail (props) {

  const params = useParams()
  const slug = params.slug

  console.log(params)
  console.log(slug)

  // const data = useStaticQuery(graphql`
  //   query ($path: String) {
  //     campaigns: allMarkdownRemark(
  //       filter: { fileAbsolutePath: { regex: $path } }
  //       sort: { fields: [frontmatter___client], order: ASC }
  //     ) {
  //       edges {
  //         node {
  //           frontmatter {
  //             client
  //             coverImage
  //             heroImage 
  //             subImage
  //             stats
  //             posts {
  //               frontmatter {
  //                 influencerName
  //                 influencerHandle
  //                 livePostLink
  //                 postFileLink
  //               }
  //             }
  //           }
  //           html
  //         }
  //       }
  //     }
  //   }
  // `);

  // const handleCampaign = () => {
  //   localStorage.setItem("currentCampaign", JSON.stringify(data.content.edge.filter()))
  //   setTimeout(() => { navigate(`/campaigns/${data.content.edge.filter()}`) }, 1001)
  // }

  // console.log(data)

  // const campaign = data.campaigns.edges.filter(({ node }) => node);

  // console.log(campaign)

  return (

    <div className="campaign-detail-container">
                
      {/* <p className="campaign-detail-title" id={`${client} title`}>{client}</p>
              
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

        </div> */}

    </div>
  )

}