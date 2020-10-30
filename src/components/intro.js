import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa'
import Img from "gatsby-image"
import IntroStyles from "./intro.module.css"

function Intro() {
  const data = useStaticQuery(graphql`
    {
      allContentfulAbout {
        edges {
          node {
            id
            fullName
            linkedIn
            blog
            email
            location
            currentJobTitle
            bio {
              content {
                content {
                  value
                }
              }
            }
            pdf {
              file {
                url
              }
            }
            profilePicture {
              id
              fluid(maxWidth: 500) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)
  const about = data.allContentfulAbout.edges[0].node
  return (
    <div className={IntroStyles.container}>
      <div className={IntroStyles.imageContainer}>
        <Img
          fluid={about.profilePicture.fluid}
          key={about.profilePicture.fluid.src}
          alt={about.profilePicture.title}
        />
      </div>
      <div className={IntroStyles.introContentContainer}>
        <div>
          {about.fullName}
          <p>{about.currentJobTitle}</p>
        </div>
        <div>
          <p>
            {about.location}
          </p>
          <div className={IntroStyles.social}>
            <a className={IntroStyles.linkedin} href={about.linkedIn} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a className={IntroStyles.email} href={`mailto:${about.email}`}>
              <FaEnvelope />
            </a>
            <a className={IntroStyles.pdf} href={about.pdf.file.url} target="_blank" rel="noreferrer">
              <FaFilePdf />
            </a>
          </div>
        </div>
      </div>
      <div className={IntroStyles.belowContainer}>
        {about.bio.content[0].content[0].value}
      </div>
    </div>
  )
}

export default Intro
