import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/shared/Layout"
import SimilarCampaigns from "../components/SimilarCampaigns"

import "../styles/CampaignTemplate.css"

export default function CampaignTemplate( { pageContext, data} ) {

  const { markdownRemark, similarCampaigns } = data
  const { frontmatter, html } = markdownRemark
  const { client, heroImage, sub, subType, stats, tags, press, posts } = frontmatter;

  console.log(similarCampaigns)

  const campaignSelection = similarCampaigns.edges.slice(0, 4);

  return (

    <Layout loaded={true} isMounted={true} title={`${client} | Influencer Campaign`} description={html.replace(/<[^>]*>?/gm, '')} >

        <div className="campaign-detail-container">
                    
          <h1 className="campaign-detail-title" id={`${client} title`}>{client}</h1>             
          <img className='header-image' id="hero-image" src={heroImage} alt="header-hero" />
              
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
          
          {subType === "image" ?
            
            <img className='header-image' id="sub-image" src={sub} alt="non-hero" />
            
            :
          
            <>

            { subType === "video" ?
              
              <iframe className="header-image" title="header-image" id="sub-video" src={sub} />
              
              :

              <>
              </>
          
            }
          
            </>
            
          }
            
          <div className="campaign-detail-section-container" id="influencer-content-section">
            <p className='campaign-detail-section-header' id="influencer-content-header">Select Influencer Content</p>
            <div className="influencer-content-container">

              {posts && posts.map((post, i) => (

                <>
                  
                  {post.frontmatter.livePostLink === "N/A" ? 
                    
                    <div className="influencer-content-link">
                      <img className="influencer-content-image" key={i} src={post.frontmatter.postFileLink} alt="influencer-content" />
                      <p className='influencer-name'>{post.frontmatter.influencerName} {post.frontmatter.influencerHandle}</p>                  
                    </div>
                
                  :
                    
                    <a href={post.frontmatter.livePostLink} className="influencer-content-link">
                      <img className="influencer-content-image" key={i} src={post.frontmatter.postFileLink} alt="influencer-content" />
                      <p className='influencer-name'>{post.frontmatter.influencerName} ({post.frontmatter.influencerHandle})</p>                  
                    </a>
              
                  }

                </>
              ))}

            </div> 
          </div>

          { press && press.length > 0 && press[0] !== null ?

            <div className="campaign-detail-section-container" id="press-section">
              <p className='campaign-detail-section-header' id="press-header">Press</p>
              <div className="press-articles-container">
              {press.map((article, i) => {
                // console.log(article)
                return (
                  <a href={ article.frontmatter.removeLink ? `${article.frontmatter.pressLink.split('.com/')[0]}.com` : article.frontmatter.pressLink} className="press-link" target='_blank'>
                    <img className="publisher-image" key={i} src={article.frontmatter.publisherImage} alt="publisher-logo" />
                    <p className='publisher-name'>{article.frontmatter.publisherName} // ({article.frontmatter.blockQuote})</p>
                  </a>
                )
              })}
              </div>
            </div>
          
            :

            <></>
        }
        
          <div className="campaign-detail-section-container" id="similar-campaigns-section">
          
            <p className='campaign-detail-section-header' id="press-header">Similar Campaigns</p>
          
            <SimilarCampaigns similarCampaigns={campaignSelection} />
          
          </div>
            
        </div>
              
      </Layout>       
        
  )
}


export const pageQuery = graphql`
query ($pathName: String!, $tags: [String!]) {
  markdownRemark(frontmatter: { path: { eq: $pathName } }) {
    html
      frontmatter {
        client
        heroImage 
        sub
        subType
        stats
        tags
        posts {
          frontmatter {
            influencerName
            influencerHandle
            livePostLink
            postFileLink
          }
        }
        press {
          frontmatter {
            publisherName
            publisherImage
            pressLink
            blockQuote
            removeLink
          }
        }
      }
    }
    similarCampaigns: allMarkdownRemark(
      filter: {
        frontmatter: { 
          tags: { in: $tags }
          path: { ne: $pathName }
        }
        fileAbsolutePath: { regex: "/campaigns/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            client
            coverImage
            path
          }
        }
      }
    }
  }
`

