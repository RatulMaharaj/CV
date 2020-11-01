import React from 'react'
import ExperienceItemStyles from "./experienceItem.module.css"
import Img from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Tags from "../components/tags"

function ExperienceItem(props) {
    return (
        <div className={ExperienceItemStyles.container}>
            {
                props.startDate && props.endDate ?
                    <div className={ExperienceItemStyles.dates}>
                        <strong>
                            {props.startDate} - {props.endDate}
                        </strong>
                    </div>

                    :
                    null
            }
            <div className={ExperienceItemStyles.wrapper}>
                <div className={ExperienceItemStyles.company}>
                    {
                        props.logo ?
                            <Img className={props.isRecommendation ? ExperienceItemStyles.circle : ExperienceItemStyles.logo} fluid={props.logo.fluid} />
                            :
                            <h5>{props.company}</h5>
                    }
                </div>
                <div className={ExperienceItemStyles.content}>
                    <h5>{props.role}</h5>
                    {documentToReactComponents(props.achievements.json)}
                    <div className={ExperienceItemStyles.tags}>
                        <Tags tags={props.taglist} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceItem
