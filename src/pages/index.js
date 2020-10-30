import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Stack from "../components/stack"
import Experience from "../components/experience"
import Education from "../components/education"
// import Skills from "../components/skills"
import "./main.css"

function IndexPage({ data }) {
  return (
    <>
      <SEO title={data.allContentfulAbout.edges[0].node.fullName} />
      <Intro />
      <Stack />
      <Experience />
      <Education />
      {/* <Skills /> */}
      <div style={{ height: `5rem` }}>
        <p>
          &copy; {data.allContentfulAbout.edges[0].node.fullName}
        </p>
      </div>
    </>
  )
}
export default IndexPage

export const query = graphql`
{
  allContentfulAbout {
    edges {
      node {
        fullName
      }
    }
  }
}
`