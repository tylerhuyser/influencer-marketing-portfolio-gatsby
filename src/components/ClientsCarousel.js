import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby';

import "../styles/clientsCarousel.css"

export default function ClientsCarousel() {

  const [xPosition, setXPosition] = useState(0)

  if (xPosition > 1600 || xPosition < -1600) {
    setXPosition(0)
  }

  const onClick = (direction) => {
    (direction === "left") ? setXPosition(prevState => prevState + 100) : setXPosition(prevState => prevState - 100)
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

  
  console.log(data)

  const clients = data.clients.edges

  console.log(clients)

  let style = {
    transform: `translateX(calc(${xPosition}% - (100% * ${clients.length})))`
  }

  return (
    <div className='clients-carousel-container'>

      <button className='carousel-button' id="left-arrow" onClick={(e) => onClick("left")}>{String.fromCharCode(60)}</button>

      <div className='carousel-slider-container'>

        {clients &&
            clients.map(({ node }, i) => {
              const { frontmatter } = node
              const { client, logo } = frontmatter

              return (

                <div className='client-logo-container' id={`A${i}-${client}-logo-container`} key={`A${i}`} style={style}>
                  <img className='client-logo' id={`${client}-logo`} alt={`${client}-logo`} src={logo} />
                </div>
              )
            })}

          {clients &&
            clients.map(({ node }, i) => {
              const { frontmatter } = node
              const { client, logo } = frontmatter

              return (

                <div className='client-logo-container' id={`B${i}-${client}-logo-container`} key={`B${i}`} style={style}>
                  <img className='client-logo' id={`${client}-logo`} alt={`${client}-logo`} src={logo} />
                </div>
              )
          })}
        
          {clients &&
            clients.map(({ node }, i) => {
              const { frontmatter } = node
              const { client, logo } = frontmatter

              return (

                <div className='client-logo-container' id={`C${i}-${client}-logo-container`} key={`C${i}`} style={style}>
                  <img className='client-logo' id={`${client}-logo`} alt={`${client}-logo`} src={logo} />
                </div>
              )
            })}
        
      </div>

      <button className='carousel-button' id="right-arrow" onClick={(e) => onClick("right")}>{String.fromCharCode(62)}</button>

    </div>
  )
}