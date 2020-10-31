import React from 'react'
import ExperienceItemStyles from "./experienceItem.module.css"
import Img from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Tags from "../components/tags"

function ExperienceItem(props) {
    return (
        <div className={ExperienceItemStyles.container}>
            <div className={ExperienceItemStyles.dates}>
                <strong>
                    {props.startDate} - {props.endDate}
                </strong>
            </div>
            <div className={ExperienceItemStyles.wrapper}>
                <div className={ExperienceItemStyles.company}>
                    {
                        props.logo ?
                            <Img className={ExperienceItemStyles.logo} fluid={props.logo.fluid} />
                            :
                            <h5 style={{ textTransform: `uppercase` }}>{props.company}</h5>
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
