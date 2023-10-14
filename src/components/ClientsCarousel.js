import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby';

import "../styles/ClientsCarousel.css"

export default function ClientsCarousel() {
  
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

  return (
    <div className='clients-carousel-container'>

      {clients &&
        clients.map(({ node }, i) => {
          const { frontmatter } = node
          const { client, logo } = frontmatter

          return (

            <div className='client-logo-container' id={`${client}-logo-container`}>
              <img className='client-logo' id={`${client}-logo`} alt={`${client}-logo`} src={logo} />
            </div>
          )
        })}

    </div>
  )
}