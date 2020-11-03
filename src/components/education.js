import React from "react"
import EducationStyles from "./education.module.css"
import { useStaticQuery, graphql } from "gatsby"
import ExperienceItem from "./experienceItem"


function Education() {
  const data = useStaticQuery(graphql`
  {
    allGraphCmsEducation(sort: {fields: startDate, order: DESC}) {
      edges {
        node {
          startDate
          achievements {
            html
          }
          endDate
          id
          school
          qualification
          stillEnrolled
          logo {
            handle
            width
            height
          }
        }
      }
    }
  }
`)
  const eduExperience = data.allGraphCmsEducation.edges
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  if (eduExperience.length === 0) {
    return (null)
  }
  else {
    return (
      <div className={EducationStyles.container}>
        <div>
          <h4>Education</h4>
        </div>
        <div>
          {
            eduExperience.map(edge => {
              return (
                <ExperienceItem key={edge.node.id}
                  startDate={`${months[new Date(edge.node.startDate).getMonth()]} ${new Date(edge.node.startDate).getFullYear()} `}
                  endDate={edge.node.stillEnrolled ? `Present` : `${months[new Date(edge.node.endDate).getMonth()]} ${new Date(edge.node.endDate).getFullYear()}`}
                  logo={edge.node.logo}
                  company={edge.node.school}
                  achievements={edge.node.achievements}
                  role={edge.node.qualification}
                  isRecommendation={false}
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Education
