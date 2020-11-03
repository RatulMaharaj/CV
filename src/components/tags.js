import React from 'react'
import TagStyles from "./tags.module.css"
import { motion } from "framer-motion";

function Tags(props) {
    return (
        <>
            {
                props.tags ?
                    (props.tags.map(tag => {
                        return (
                            <motion.div
                                key={tag}
                                className={`${TagStyles.tagContainer} ${props.tagColor}`}
                                whileHover={{ scale: 1.1 }}
                            >
                                <a href={`https://google.com/search?q=${tag}`} target="_blank" rel="noreferrer">
                                    {tag}
                                </a>
                            </motion.div>
                        )
                    })
                    )

                    :
                    null
            }
        </>
    )
}

export default Tags
