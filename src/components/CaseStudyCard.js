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
      
      <Link className="case-study-card" id={`${data[index].title.toLocaleLowerCase()}-case-study-card`} key={`${data[index].title}-link`} to={`/${data[index].title.toLowerCase()}`} >

        <FontAwesomeIcon icon={data[index].icon} className="case-study-card-icon" />
        <p className="case-study-card-title" id={`${data[index].title.toLocaleLowerCase()}-title`} key={`${data[index].title.toLocaleLowerCase()}-title`}>{`${data[index].title}`}</p>

      </Link>
    
    </>

  )
}
