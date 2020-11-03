import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import SkillsStyles from './skills.module.css'
import Tags from "./tags"

function Skills() {
    const data = useStaticQuery(graphql`
  {
    allGraphCmsSkills {
        edges {
            node {
                hardSkills
                softSkills
            }
        }
    }
  }
`)

    const SkillList = data.allGraphCmsSkills.edges
    if (SkillList.length !== 0) {
        var SoftTagList = SkillList[0].node.softSkills
        var HardTagList = SkillList[0].node.hardSkills
    }
    else {
        SoftTagList = []
        HardTagList = []
    }

    if (SkillList.length === 0) {
        return (null)
    }
    else {

        return (
            <div className={SkillsStyles.container}>
                <div className={SkillsStyles.skillsContainer}>
                    <div>
                        <h4>
                            Hard Skills
                     </h4>
                    </div>
                    <div className={SkillsStyles.tagsWrapper}>
                        <Tags tagColor={`HardTag`} tags={HardTagList} />
                    </div>
                </div>
                <div className={SkillsStyles.skillsContainer}>
                    <div>
                        <h4>
                            Soft Skills
                     </h4>
                    </div>
                    <div className={SkillsStyles.tagsWrapper}>
                        <Tags tagColor={`SoftTag`} tags={SoftTagList} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills
