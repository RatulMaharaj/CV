import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion";
import StackStyles from "./stack.module.css"

function Stack() {
    const data = useStaticQuery(graphql`
    {
        allGraphCmsTechStack(sort: {fields: order}) {
        edges {
            node {
            id
            name
            link
            logo {
                url
            }
            }
        }
        }
    }
    `)
    const stack = data.allGraphCmsTechStack.edges
    if (stack.length === 0) {
        return (null)
    }
    else {

        return (
            <>
                <div className={StackStyles.container}>
                    <div>
                        <h4>Tech Stack</h4>
                    </div>
                    {
                        stack.map(edge => {
                            return (
                                <a
                                    key={edge.node.id}
                                    href={edge.node.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <motion.img
                                        className={`grayscale`}
                                        src={edge.node.logo.url}
                                        alt="Stack"
                                        whileHover={{ scale: 1.3, rotate: 360 }}></motion.img>
                                    <p className={StackStyles.logoText}>{edge.node.name}</p>
                                </a>
                            )
                        }
                        )
                    }
                </div>
            </>
        )
    }
}

export default Stack
