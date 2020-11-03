import React, { useEffect } from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Skills from "../components/skills"
import Stack from "../components/stack"
import Experience from "../components/experience"
import Volunteer from "../components/volunteer"
import Education from "../components/education"
import Footer from "../components/footer"
import Recommendations from "../components/recommendations"
import "./main.css"

function IndexPage({ data }) {

  function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }

  const opacity = 0.05

  useEffect(() => {
    let root = document.documentElement;
    root.style.setProperty('--main-accent', data.allGraphCmsAbout.edges[0].node.mainAccent.hex)
    root.style.setProperty('--main-accent-lo', hexToRGB(data.allGraphCmsAbout.edges[0].node.mainAccent.hex, opacity))
    root.style.setProperty('--secondary-accent', data.allGraphCmsAbout.edges[0].node.secondaryAccent.hex)
    root.style.setProperty('--secondary-accent-lo', hexToRGB(data.allGraphCmsAbout.edges[0].node.secondaryAccent.hex, opacity))
  }, [data.allGraphCmsAbout.edges])

  return (
    <>
      <SEO title={data.allGraphCmsAbout.edges[0].node.fullName} />
      <Intro />
      <Stack />
      <Skills />
      <Experience />
      <Volunteer />
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