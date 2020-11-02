import React from 'react'
import ExperienceItemStyles from "./experienceItem.module.css"
import GraphImg from "graphcms-image";
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
                            <GraphImg
                                className={props.isRecommendation ? ExperienceItemStyles.circle : ExperienceItemStyles.logo}
                                image={props.logo}
                            />
                            :
                            <h5>{props.company}</h5>
                    }
                    {
                        props.isRecommendation ?
                            <div>
                                <h5 style={{ marginBottom: `0` }}>
                                    {props.recommender}
                                </h5>
                                <p>{props.recommenderTitle}</p>
                            </div>
                            :
                            null
                    }
                </div>
                <div className={ExperienceItemStyles.content}>
                    <h5>{props.role}</h5>
                    <div
                        dangerouslySetInnerHTML={{ __html: props.achievements.html }}
                        className={ExperienceItemStyles.richText}
                    >
                    </div>
                    <div className={ExperienceItemStyles.tags}>
                        <Tags tags={props.taglist} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ExperienceItem
