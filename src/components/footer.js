import React from 'react'
import FooterStyles from "./footer.module.css"

function Footer(props) {
    return (
        <div className={FooterStyles.container}>
            <p>
                &copy; {props.fullName}
            </p>
        </div>
    )
}

export default Footer
