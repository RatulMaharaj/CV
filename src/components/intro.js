import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa'
import Img from "gatsby-image"
import { motion } from "framer-motion";
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
            pdfUrl
            bio {
              content {
                content {
                  value
                }
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
      <div
        className={IntroStyles.imageContainer}
      >
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
            <motion.a className={IntroStyles.linkedin}
              href={about.linkedIn}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.5, y: 10 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              className={IntroStyles.email}
              href={`mailto:${about.email}`}
              whileHover={{ scale: 1.5, y: 10 }}>
              <FaEnvelope />
            </motion.a>
            <motion.a
              className={IntroStyles.pdf}
              href={about.pdfUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.5, y: 10 }}
            >
              <FaFilePdf />
            </motion.a>
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
