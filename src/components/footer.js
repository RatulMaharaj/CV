import React from 'react'
import FooterStyles from "./footer.module.css"

function Footer(props) {
    return (
        <div className={FooterStyles.container}>
            <div>
                <p>&copy; {props.fullName}</p>
            </div>
        </div>
    )
}

export default Footer
