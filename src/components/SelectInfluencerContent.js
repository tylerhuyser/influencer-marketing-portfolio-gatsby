import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby';
import { useNavigate } from "react-router-dom";

import "../styles/selectInfluencerContent.css"

export default function SelectInfluencerContent() {

  const data = useStaticQuery(graphql`
  {
    posts: allMarkdownRemark(
      filter: {frontmatter: {selectInfluencerContent: {eq: true}}}
      sort: {fields: [frontmatter___influencerName], order: ASC}
    ) {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            influencerName
            influencerHandle
            livePostLink
            postFileLink
            selectInfluencerContent
          }
        }
      }
    }
  }
  `)

  const selectContent = data.posts.edges

  console.log(selectContent)
  
  return (
    <div className="select-influencer-content-container">
      
      {selectContent && selectContent.map(({ node }, i) => {
        const { fileAbsolutePath, frontmatter } = node
        const { influencerHandle, influencerName, livePostLink, postFileLink } = frontmatter

        return (

          <Link className='influencer-post-container' id={`${influencerName}-post-container`} key={`${influencerName}-container`} to={`/campaigns/${fileAbsolutePath.split("/")[fileAbsolutePath.split("/").length - 2]}`} >

            <img className='influencer-post' id={`${influencerName}-post`} key={influencerName} src={postFileLink} />
            
          </Link>

        )
      })}


    </div>
  )
}