import React from "react";
import { Link } from 'gatsby';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faImages,
  faFilm,
  faCalendar
} from "@fortawesome/free-solid-svg-icons"

import "../styles/CaseStudyCard.css"

export default function CaseStudyCard(props) {

  const { index } = props
  
  const data = [
    {
      title: "Social",
      image: "https://drive.google.com/uc?export=view&id=175i1x524AGHTKqtJGpcDZ3Khhv3EDR2w",
      icon: faImages
    },
    {
      title: "Video",
      image: "https://drive.google.com/uc?export=view&id=19EhStLaCuxXVsVY-aAnYyhv_YcfxuyzQ",
      icon: faFilm
    },
    {
      title: "Experiential",
      image: "https://drive.google.com/uc?export=view&id=1DMCoEWrSaZT9ntYqhrHO8TmoFpQfxaYi",
      icon: faCalendar
    }
  ]

  console.log(data[index].icon)

  return (

    <>
      
      <Link className="case-study-card" id={`${data[index].title.toLocaleLowerCase()}-case-study-category-card`} key={`${data[index].title}-link`} to={`/${data[index].title.toLowerCase()}`} >

        {/* <img className="case-study-category-card-image" id={`${data[index].title.toLocaleLowerCase()}-case-study-category-card-image`} key={`${data[index].title}-image`} src={`${data[index].image}`} />

        <p className="case-study-category-card-title" id={`${data[index].title.toLocaleLowerCase()}-case-study-category-card-title`} key={`${data[index].title}-title`}>{`${data[index].title}`}</p> */}

        <FontAwesomeIcon icon={data[index].icon} className="case-study-icon" />

      </Link>
    
    </>

  )
}
