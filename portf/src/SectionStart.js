import { Fragment } from "react";

const SectionStart = ({title, body, space}) => {
    return(
        <Fragment>
            {space && <div className="section-space"></div>}
            {title && <h3 className="section-title">{title}</h3>}
            {body && <p className="section-body">{body}</p>}
        </Fragment>
    )
}

export default SectionStart;