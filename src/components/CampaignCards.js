import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby';
import { useNavigate } from "react-router-dom";

import "../styles/campaignCards.css"

export default function CampaignCard (props) {

  const { category } = props
  const navigate = useNavigate();

  console.log(category)

  const data = useStaticQuery(graphql`
    query {
      campaigns: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/campaigns/" } }
        sort: { fields: [frontmatter___client], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              client
              path
              category
              coverImage
            }
          }
        }
      }
    }
  `);

  // const handleCampaign = () => {
  //   setTimeout(() => { navigate(`/campaigns/9-elements`) }, 1001)
  // }

  console.log(data)

  const campaigns = data.campaigns.edges.filter(({ node }) => node.frontmatter.category === category);

  return (

    <>
      <div className="campaign-cards-container">

        {campaigns &&
          campaigns.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { client, path, category, coverImage } = frontmatter;

            return (

              <div className="campaign-card-container" id={client} to={`${path}`} >

                <img className='campaign-card-image' id="cover-image" src={coverImage} />
                
                <p className="campaign-card-title" id={`${client} title`}>{client}</p>
                  
              </div>

            )
        })}
        
      </div>
    </>
  )
}