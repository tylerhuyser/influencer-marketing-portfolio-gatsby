import React, { useState } from "react";

import CaseStudyCard from "../components/CaseStudyCard";

export default function generateCaseStudyCardsJSX (props) {
  
  const cardQuantity = props

  let CaseStudyCardsJSX = []

  for (let i = 0; i < cardQuantity; i++) {
    CaseStudyCardsJSX.push(<CaseStudyCard index={i} />)
  }

  return (CaseStudyCardsJSX.length === cardQuantity ? CaseStudyCardsJSX : <></>)
}