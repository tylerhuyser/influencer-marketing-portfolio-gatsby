import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import "../styles/clientsCarousel.css"

export default function ClientsCarousel() {

  const [xPosition, setXPosition] = useState(0)
  const [animationDirection, setAnimationDirection] = useState("")

  useEffect(() => {
    if (animationDirection.length === 0) {
      const timeout =  setTimeout(() => {
        setXPosition(prevState => prevState - 100)
        setAnimationDirection("rightAuto")
      }, 5000);
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [animationDirection])

  useEffect(() => {
    if (animationDirection === "rightAuto") {
      const timeout = setTimeout(() => {
        setAnimationDirection("")
      }, 201);
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [animationDirection])

  useEffect(() => {
    if (animationDirection === "left" || animationDirection === "right") {
      const timeout = setTimeout(() => {
        setAnimationDirection("")
      }, 201);
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [animationDirection])

  if (xPosition > 1600) {
    setXPosition(100)
  }
  if (xPosition < -1600) {
    setXPosition(-100)
  }

  const changeXPosition = (direction) => {
    (direction === "left") ? setXPosition(prevState => prevState + 100) : setXPosition(prevState => prevState - 100)
  }

  const onClick = (direction) => {
    changeXPosition(direction)
    setAnimationDirection(direction)
  }
  
  const data = useStaticQuery(graphql`
    query {
      clients: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/clients/" } }
        sort: { fields: [frontmatter___client], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              client
              logo
            }
          }
        }
      }
    }
  `);

  const clients = data.clients.edges

  return (
    <div className='clients-carousel-container'>

      <button className='carousel-button' id="left-arrow" onClick={(e) => onClick("left")}>{String.fromCharCode(60)}</button>

      <div className='carousel-slider-container'>

        {clients &&
            clients.map(({ node }, i) => {
              const { frontmatter } = node
              const { client, logo } = frontmatter

              return (

                <div className={`client-logo-container ${animationDirection}`} id={`A${i}-${client}-logo-container`} key={`A${i}`} style={{
                  '--reference-position':`calc(${xPosition}% - (100% * ${clients.length}))`,
                  '--right-original-position': `calc(${xPosition + 100}% - (100% * ${clients.length}))`,
                  '--left-original-position': `calc(${xPosition - 100}% - (100% * ${clients.length}))`,
                }} >
                  <img className='client-logo' id={`${client}-logo`} alt={`${client}-logo`} src={logo} />
                </div>
              )
            })}

          {clients &&
            clients.map(({ node }, i) => {
              const { frontmatter } = node
              const { client, logo } = frontmatter

              return (

                <div className={`client-logo-container  ${animationDirection}`} id={`B${i}-${client}-logo-container`} key={`B${i}`} style={{
                  '--reference-position':`calc(${xPosition}% - (100% * ${clients.length}))`,
                  '--right-original-position': `calc(${xPosition + 100}% - (100% * ${clients.length}))`,
                  '--left-original-position': `calc(${xPosition - 100}% - (100% * ${clients.length}))`,
                }} >
                  <img className='client-logo' id={`${client}-logo`} alt={`${client}-logo`} src={logo} />
                </div>
              )
          })}
        
          {clients &&
            clients.map(({ node }, i) => {
              const { frontmatter } = node
              const { client, logo } = frontmatter

              return (

                <div className={`client-logo-container  ${animationDirection}`} id={`C${i}-${client}-logo-container`} key={`C${i}`} style={{
                  '--reference-position':`calc(${xPosition}% - (100% * ${clients.length}))`,
                  '--right-original-position': `calc(${xPosition + 100}% - (100% * ${clients.length}))`,
                  '--left-original-position': `calc(${xPosition - 100}% - (100% * ${clients.length}))`,
                }} >
                  <img className='client-logo' id={`${client}-logo`} alt={`${client}-logo`} src={logo} />
                </div>
              )
            })}
        
      </div>

      <button className='carousel-button' id="right-arrow" onClick={(e) => onClick("right")}>{String.fromCharCode(62)}</button>

    </div>
  )
}