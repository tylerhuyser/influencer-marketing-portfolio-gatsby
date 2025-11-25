import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby';
import LazyImage from './shared/LazyImage';
 
import "../styles/SelectInfluencerContent.css"

export default function SelectInfluencerContent() {

  const data = useStaticQuery(graphql`
  {
    posts: allMarkdownRemark(
      filter: {frontmatter: {selectInfluencerContent: {eq: true}}}
      sort: {frontmatter: {influencerName: ASC}}
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
  
  return (
    <div className="select-influencer-content-container">
      
      {selectContent && selectContent.map(({ node }, i) => {
        const { fileAbsolutePath, frontmatter } = node
        const { influencerName, postFileLink } = frontmatter

        return (

          <Link className='influencer-post-container' id={`${influencerName}-post-container`} key={`${influencerName}-container`} to={`/campaigns/${fileAbsolutePath.split("/")[fileAbsolutePath.split("/").length - 2]}`} >

            {/* <GatsbyImage image={postFileLink} alt={`${influencerName}-${postFileLink}`} src={postFileLink} /> */}

            <LazyImage
              src={postFileLink}
              placeholder={postFileLink.replace('/upload/', '/upload/w_20/e_blur:200/')}
              alt={`${influencerName}-${postFileLink}`}
              className='influencer-post'
              id={`${influencerName}-post`} key={influencerName}
            />
            
          </Link>

        )
      })}


    </div>
  )
}