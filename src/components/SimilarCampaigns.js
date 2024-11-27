import React from 'react'
import { Link } from 'gatsby';

export default function SimilarCampaigns (props) {

  const { similarCampaigns } = props

  return (

    <>
      <div className="similar-campaigns-container">

        {similarCampaigns &&
          similarCampaigns.map(({ node }, i) => {
            const { frontmatter } = node;
            const { client, path, coverImage } = frontmatter;

            return (

              <Link className="similar-campaign-card" id={client} to={`${path}`} key={i} >

                <img className='similar-campaign-image' id={`${client}-campaign-card-image`} src={coverImage} alt={`${client}-cover`} />
                
                <p className="similar-campaign-title" id={`${client} title`}>{client}</p>
                  
              </Link>

            )
        })}
        
      </div>
    </>
  )
}