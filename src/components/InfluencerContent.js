import React from "react"
import LazyImage from "./shared/LazyImage"

export default function InfluencerContent(props) {

  const { posts } = props

  return (
    <div className="influencer-content-container">

      {posts && posts.map((post, i) => (

        <>
          
          {post.frontmatter.livePostLink === "N/A" ? 
            
            <div className="influencer-content-link">
              <LazyImage
                src={post.frontmatter.postFileLink}
                placeholder={post.frontmatter.postFileLink.replace('/upload/', '/upload/w_20/e_blur:200/')}
                alt="influencer-content"
                className="influencer-content-image"
                key={i}
              />
              <p className='influencer-name'>{post.frontmatter.influencerName} {post.frontmatter.influencerHandle}</p>                  
            </div>
        
          :
            
            <a href={post.frontmatter.livePostLink} className="influencer-content-link">
              <LazyImage
                src={post.frontmatter.postFileLink}
                placeholder={post.frontmatter.postFileLink.replace('/upload/', '/upload/w_20/e_blur:200/')}
                alt="influencer-content"
                className="influencer-content-image"
                key={i}
              />
              <p className='influencer-name'>{post.frontmatter.influencerName} ({post.frontmatter.influencerHandle})</p>                  
            </a>
      
          }

        </>
      ))}

    </div> 
  )
}