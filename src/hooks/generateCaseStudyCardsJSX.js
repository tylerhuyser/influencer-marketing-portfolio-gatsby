import React from "react";

import CaseStudyCard from "../components/CaseStudyCard";

export default function generateCaseStudyCardsJSX (props) {
  
  const cardQuantity = props

  let CaseStudyCardsJSX = []

  for (let i = 0; i < cardQuantity; i++) {
    CaseStudyCardsJSX.push(<CaseStudyCard index={i} key={i} />)
  }

  return (
    CaseStudyCardsJSX.length === cardQuantity ?
      
      <div className="case-study-section-container">

        <p className="case-study-section-title">Case Studies</p>

        <div className="case-study-cards-container">

          {CaseStudyCardsJSX}

        </div>

      </div>
      
      :
      <></>
  )
}