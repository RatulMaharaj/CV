import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import StackStyles from "./stack.module.css"

function Stack() {
  const data = useStaticQuery(graphql`
  {
    allContentfulTechStack {
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
  console.log(data)
  return (
    <div className={StackStyles.container}>
      <h4>Stack</h4>
    </div>
  )
}

export default Stack
