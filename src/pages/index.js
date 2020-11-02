import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Stack from "../components/stack"
import Experience from "../components/experience"
import Education from "../components/education"
import Footer from "../components/footer"
import Recommendations from "../components/recommendations"
import "./main.css"

function IndexPage({ data }) {
  return (
    <>
      <SEO title={data.allGraphCmsAbout.edges[0].node.fullName} />
      <Intro />
      <Stack />
      {/* <Experience /> */}
      {/* <Education /> */}
      {/* <Recommendations /> */}
      {/* <Footer fullName={data.allContentfulAbout.edges[0].node.fullName} /> */}
    </>
  )
}
export default IndexPage

export const query = graphql`
{
  allGraphCmsAbout {
    edges {
      node {
        fullName
      }
    }
  }
}
`