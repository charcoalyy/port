import { Fragment } from "react";

const SectionStart = ({title, body}) => {
    return(
        <Fragment>
            <h3 className="section-title">{title}</h3>
            <p className="section-body">{body}</p>
        </Fragment>
    )
}

export default SectionStart;