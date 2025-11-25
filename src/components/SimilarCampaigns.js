import React from 'react'
import { Link } from 'gatsby';
import LazyImage from './shared/LazyImage';

export default function SimilarCampaigns (props) {

  const { similarCampaigns } = props

  return (

    <>
      <div className="similar-campaigns-container">

        {similarCampaigns &&
          similarCampaigns.map(({ node }, i) => {
            const { frontmatter } = node;
            const { client, path, coverImage } = frontmatter;
            const key = `${client}-${i}`

            return (

              <Link className="similar-campaign-card" id={client} to={`${path}`} key={i} >

                <LazyImage
                  src={coverImage}
                  placeholder={coverImage.replace('/upload/', '/upload/w_20/e_blur:200/')}
                  alt={`${client}-cover`}
                  className='similar-campaign-image'
                  id={`${client}-campaign-card-image`}
                />
                
                <p className="similar-campaign-title" id={`${client} title`}>{client}</p>
                  
              </Link>

            )
        })}
        
      </div>
    </>
  )
}