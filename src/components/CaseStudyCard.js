import React from "react";
import { Link } from 'gatsby';

export default function CaseStudyCard(props) {

  const { index } = props
  
  const data = [
    {
      title: "Social",
      image: "https://drive.google.com/uc?export=view&id=175i1x524AGHTKqtJGpcDZ3Khhv3EDR2w"
    },
    {
      title: "Video",
      image: "https://drive.google.com/uc?export=view&id=19EhStLaCuxXVsVY-aAnYyhv_YcfxuyzQ"
    },
    {
      title: "Experiential",
      image: "https://drive.google.com/uc?export=view&id=1DMCoEWrSaZT9ntYqhrHO8TmoFpQfxaYi"
    }
  ]

  return (

    <>
      
      <Link className="case-study-category-card" id={`${data[index].title.toLocaleLowerCase()}-case-study-category-card`} to={`/${data[index].title.toLocaleLowerCase()}`} >

        <img className="case-study-category-card-image" id={`${data[index].title.toLocaleLowerCase()}-case-study-category-card-image`} src={`${data[index].image}`} />

        <p className="case-study-category-card-title" id={`${data[index].title.toLocaleLowerCase()}-case-study-category-card-title`}>{`${data[index].title}`}</p>

      </Link>
    
    </>

  )
}
