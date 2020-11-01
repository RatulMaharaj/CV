import React from 'react'
import TagStyles from "./tags.module.css"
function Tags(props) {
    return (
        <>
            {
                props.tags ?
                    (props.tags.map(tag => {
                        return (
                            <div key={tag} className={TagStyles.tagContainer}>
                                <a href={`https://google.com/search?q=${tag}`} target="_blank" rel="noreferrer">
                                    {tag}
                                </a>
                            </div>
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
