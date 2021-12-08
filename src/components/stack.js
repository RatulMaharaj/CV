import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"
import StackStyles from "./stack.module.css"

function Stack() {
  const data = useStaticQuery(graphql`
    {
      allGraphCmsTechStack(sort: { fields: order }) {
        edges {
          node {
            id
            name
            link
            logo {
              url
            }
          }
        }
      }
    }
  `)
  const stack = data.allGraphCmsTechStack.edges
  if (stack.length === 0) {
    return null
  } else {
    return (
      <>
        <div className={StackStyles.container}>
          <div>
            <h4>Software</h4>
          </div>
          <div
            style={{
              display: `flex`,
              flexDirection: `row`,
              paddingBottom: `30px`,
            }}
          >
            {stack.map(edge => {
              return (
                <div>
                  <img
                    src={edge.node.logo.url}
                    style={{ width: `200px` }}
                    alt="Stack"
                  ></img>
                  {/* <p className={StackStyles.logoText}>{edge.node.name}</p> */}
                </div>
              )
            })}
          </div>
        </div>
      </>
    )
  }
}

export default Stack
