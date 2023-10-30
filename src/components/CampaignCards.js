import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby';

import "../styles/CampaignCards.css"

export default function CampaignCard (props) {

  const { category } = props

  console.log(category)

  const data = useStaticQuery(graphql`
    query {
      campaigns: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/campaigns/" } }
        sort: {frontmatter: {client: ASC}}
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
            const { frontmatter } = node;
            const { client, path, coverImage } = frontmatter;

            return (

              <Link className="campaign-card-container" id={client} to={`${path}`} key={i} >

                <img className='campaign-card-image' id="cover-image" src={coverImage} alt={`${client}-cover`} />
                
                <p className="campaign-card-title" id={`${client} title`}>{client}</p>
                  
              </Link>

            )
        })}
        
      </div>
    </>
  )
}