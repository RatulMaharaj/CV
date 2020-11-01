import React from "react"
import RecommendationsStyles from "./recommendations.module.css"
import { useStaticQuery, graphql } from "gatsby"
import ExperienceItem from "./experienceItem"

function Recommendations() {
  const data = useStaticQuery(graphql`
  {
    allContentfulRecommendations {
      edges {
        node {
          id
          company
          name
          title
          show
          profilePicture {
            id
            fluid(maxHeight: 500){
              ...GatsbyContentfulFluid
            }
          }
          recommendation {
            json
          }
        }
      }
    }
  }
`)
  const recommendations = data.allContentfulRecommendations.edges
  const show = []
  recommendations.map(edge => show.push(edge.node.show))

  if (show.indexOf(true) === -1) {
    return (
      null
    )
  }
  else {
    return (
      <div className={RecommendationsStyles.container}>
        <div>
          <h4>Recommendations</h4>
        </div>
        <div>
          {
            recommendations.map(edge => {
              if (edge.node.show) {
                return (
                  <ExperienceItem key={edge.node.id}
                    startDate={null}
                    endDate={null}
                    isRecommendation={true}
                    logo={edge.node.profilePicture}
                    company={edge.node.company}
                    achievements={edge.node.recommendation}
                    role={`${edge.node.name}, ${edge.node.title} (${edge.node.company})`}
                  />
                )
              }
              else { return (null) }
            })
          }
        </div>
      </div>
    )
  }
}

export default Recommendations
