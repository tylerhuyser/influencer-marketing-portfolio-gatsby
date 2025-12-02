import React from "react"
import { graphql } from "gatsby"
import LazyImage from "../components/shared/LazyImage"

import Layout from "../components/shared/Layout"
import CampaignDetail from "../components/CampaignDetail"
import CampaignSubSection from "../components/CampaignSubSection"
import InfluencerContent from "../components/InfluencerContent"
import PressArticles from "../components/PressArticles"
import SimilarCampaigns from "../components/SimilarCampaigns"

import "../styles/CampaignTemplate.css"

export default function CampaignTemplate({ pageContext, data }) {

  const { markdownRemark, similarCampaigns } = data
  const { frontmatter, html } = markdownRemark
  const { client, heroImage, sub, subType, subVideo, stats, press, posts } = frontmatter;
  // const { tags } = frontmatter
  // console.log(press)
  // console.log(frontmatter)

  const campaignSelection = similarCampaigns.edges.slice(0, 4);

  return (

    <Layout title={`${client} | Influencer Campaign`} description={html.replace(/<[^>]*>?/gm, '')} >

        <div className="campaign-detail-container">
                    
          <h1 className="campaign-detail-title" id={`${client} title`}>{client}</h1>             
          <LazyImage
            src={heroImage}
            placeholder={heroImage.replace('/upload/', '/upload/w_20/e_blur:200/')}
            alt="header-hero"
            className='header-image'
            id="hero-image"
          />
              
          <CampaignDetail html={html} stats={stats} />
          
          <CampaignSubSection subType={subType} sub={sub} subVideo={subVideo} />
            
          <div className="campaign-detail-section-container" id="influencer-content-section">
            <p className='campaign-detail-section-header' id="influencer-content-header">Select Influencer Content</p>
            <InfluencerContent posts={posts} />
          </div>

          { press && press.length > 0 && press[0] !== null ?

            <div className="campaign-detail-section-container" id="press-section">
              <p className='campaign-detail-section-header' id="press-header">Press</p>
              <PressArticles press={press} />
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
        subVideo
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

