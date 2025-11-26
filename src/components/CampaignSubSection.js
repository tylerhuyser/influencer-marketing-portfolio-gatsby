import React from "react"
import LazyImage from "./shared/LazyImage"


export default function CampaignSubSection(props) {
  const { subType, sub, subVideo } = props

  return (

    <>
    
      {subType === "image" && sub.length > 0 ?
        
        <LazyImage
          src={sub}
          placeholder={sub.replace('/upload/', '/upload/w_20/e_blur:200/')}
          alt="non-hero"
          className='header-image'
          id="sub-image"
        />
        
        :
      
        <>

          {subType === "video" ?
            
            <div
              className={`campaign-video-wrapper ${subVideo}-video`}
            >
          
              <iframe
                src={sub}
                title="header-image"
                className={"campaign-video"}
                id="sub-video"
                loading="lazy"
              />
              
            </div>
          
          :

          <>
          </>
      
        }
      
        </>
        
      }

    </>

  )
}