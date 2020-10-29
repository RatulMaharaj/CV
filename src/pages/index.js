import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Education from "../components/education"
import Experience from "../components/experience"
import Skills from "../components/skills"
import Stack from "../components/stack"


function IndexPage({ data }) {
  console.log(data)
  return (
    <Layout>
      <SEO title={data.allContentfulAbout.edges[0].node.fullName} />
      <Intro />
      <Stack />
      <Experience />
      <Education />
      <Skills />
    </Layout>
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