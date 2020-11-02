import React, { useEffect } from "react"
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
  useEffect(() => {
    let root = document.documentElement;
    root.style.setProperty('--main-accent', data.allGraphCmsAbout.edges[0].node.mainAccent.hex)
    root.style.setProperty('--secondary-accent', data.allGraphCmsAbout.edges[0].node.secondaryAccent.hex)
  }, [data.allGraphCmsAbout.edges])

  return (
    <>
      <SEO title={data.allGraphCmsAbout.edges[0].node.fullName} />
      <Intro />
      <Stack />
      <Experience />
      <Education />
      <Recommendations />
      <Footer fullName={data.allGraphCmsAbout.edges[0].node.fullName} />
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
        mainAccent {
          hex
        }
        secondaryAccent {
          hex
        }
      }
    }
  }
}
`