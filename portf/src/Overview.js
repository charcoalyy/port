const Overview = ({chall, sol, tools, duration}) => {
    return(
        <section className="overview">
            <div className="overview-section overview-chall">
                <h3 className="overview-section-title">Challenge</h3>
                <p>{chall}</p>
            </div>
            <div className="overview-section overview-sol">
                <h3 className="overview-section-title">Solution</h3>
                <p>{sol}</p>
            </div>
            <div className="overview-section overview-tools-duration">
                <div>
                    <h3 className="overview-section-title">Tools</h3>
                    <p>{tools}</p>
                </div>
                <div>
                    <h3 className="overview-section-title">Duration</h3>
                    <p>{duration}</p>
                </div>
            </div>
        </section>
    )
}

export default Overview;