import { Fragment } from "react";

export default (figures) => {
    return(
        <Fragment>
            {figures.figures.map(figure => {
                return <img key={figure} className="section-figure" src={require('@figures/' + figure + '.png')}></img>
            })}
        </Fragment>
    )
}

