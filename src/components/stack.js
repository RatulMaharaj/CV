import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import StackStyles from "./stack.module.css"

function Stack() {
  const data = useStaticQuery(graphql`
  {
    allContentfulTechStack(sort: {fields: order}) {
      edges {
        node {
          name
          link
          logo {
            id
            file {
              url
            }
          }
        }
      }
    }
  }
`)
  const stack = data.allContentfulTechStack.edges
  return (
    <>
      <div className={StackStyles.container}>
        <div>
          <h4>Tech Stack</h4>
        </div>
        {
          stack.map(edge => {
            return (
              <a key={edge.node.logo.id} href={edge.node.link} target="_blank" rel="noreferrer">
                <img className={`grayscale`} src={edge.node.logo.file.url} alt="Stack"></img>
                <p className={StackStyles.logoText}>{edge.node.name}</p>
              </a>
            )
          }
          )
        }
      </div>
    </>
  )
}

export default Stack
