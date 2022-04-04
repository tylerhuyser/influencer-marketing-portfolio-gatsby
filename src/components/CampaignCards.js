import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { useNavigate } from "react-router-dom";

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
    localStorage.setItem("currentCampaign", JSON.stringify(data.content.edge.filter()))
    setTimeout(() => { navigate(`/campaigns/${data.content.edge.filter()}`) }, 1001)
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

              <div className="campaign-card" id={client} onClick={handleCampaign}>
                <p className="comapign-card-title" id={`${client} title`}>{client}</p>
                <img src={coverImage} />
                <img src={heroImage} />
                <ul className="campaign-stats-list">
                      {stats.map((stat, i) => (
                        <li key={i}>{stat}</li>
                      ))}
                    </ul>
                <div className="project-description" dangerouslySetInnerHTML={{ __html: html }} />
                <img src={subImage} />
                <p>INFLUENCER CONTENT</p>
                <div className="influencer-content-container">
                  {posts.map((post, i) => (
                    <img src={post.frontmatter.postFileLink} />
                  ))}
                </div>
                {/* {coverImage} */}
              </div>
            )
        })}
        
      </div>
    </>
  )
}