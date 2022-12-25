import { Fragment } from "react";

const SectionStart = ({title, body}) => {
    return(
        <Fragment>
            {title && <h3 className="section-title">{title}</h3>}
            {body && <p className="section-body">{body}</p>}
        </Fragment>
    )
}

export default SectionStart;