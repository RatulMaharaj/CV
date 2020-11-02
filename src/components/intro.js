import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa'
import GraphImg from "graphcms-image";
import { motion } from "framer-motion";
import IntroStyles from "./intro.module.css"

function Intro() {
  const data = useStaticQuery(graphql`
    {
      allGraphCmsAbout {
        edges {
          node {
            id
            fullName
            linkedIn
            email
            location
            bio
            currentJobTitle
            pdfUrl
            profilePicture {
              handle
              height
              width
            }
          }
        }
      }
    }
  `)
  const about = data.allGraphCmsAbout.edges[0].node
  const bio = about.bio
  console.log(data)
  return (
    <div className={IntroStyles.container}>
      <div
        className={IntroStyles.imageContainer}
      >
        <GraphImg
          className={IntroStyles.profilePicture}
          image={about.profilePicture} maxWidth={500}
        />
      </div>
      <div className={IntroStyles.introContentContainer}>
        <div>
          {about.fullName}
          <p>{about.currentJobTitle}</p>
        </div>
        <div>
          <p>
            {about.location || ``}
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
        {bio || ``}
      </div>
    </div>
  )
}

export default Intro
