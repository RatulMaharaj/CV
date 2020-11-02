import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ExperienceItem from "./experienceItem"
import ExperienceStyles from "./experience.module.css"

function Experience() {
  const data = useStaticQuery(graphql`
  {
    allGraphCmsWorkExperience(sort: {fields: startDate, order: DESC}) {
      edges {
        node {
          id
          companyName
          role
          startDate
          endDate
          currentRole
          tags
          logo {
            handle
            height
            width
          }
          achievements {
            html
          }
        }
      }
    }
  }
`)
  const workExperience = data.allGraphCmsWorkExperience.edges
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <div className={ExperienceStyles.container}>
      <div >
        <h4>Work Experience</h4>
      </div>
      <div>
        {
          workExperience.map(edge => {
            return (
              <ExperienceItem key={edge.node.id}
                startDate={`${months[new Date(edge.node.startDate).getMonth()]} ${new Date(edge.node.startDate).getFullYear()} `}
                endDate={edge.node.currentRole ? `Present` : `${months[new Date(edge.node.endDate).getMonth()]} ${new Date(edge.node.endDate).getFullYear()}`}
                logo={edge.node.logo || false}
                company={edge.node.companyName}
                achievements={edge.node.achievements}
                role={edge.node.role}
                taglist={edge.node.tags}
                isRecommendation={false}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Experience
