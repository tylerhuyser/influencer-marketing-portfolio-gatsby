import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby';
import { useNavigate } from "react-router-dom";

export default function SelectInfluencerContent() {

  const data = useStaticQuery(graphql`
  {
    posts: allMarkdownRemark(
      filter: {frontmatter: {selectInfluencerContent: {eq: true}}}
      sort: {fields: [frontmatter___influencerName], order: ASC}
    ) {
      edges {
        node {
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
    <>
    </>
  )
}