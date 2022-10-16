const Overview = ({chall, sol, tools, duration}) => {
    return(
        <section className="overview">
            <div className="overview-section">
                <h3>Challenge</h3>
                <p>{chall}</p>
            </div>
            <div className="overview-section">
                <h3>Solution</h3>
                <p>{sol}</p>
            </div>
            <div className="overview-section">
                <div>
                    <h3>Tools</h3>
                    <p>{tools}</p>
                </div>
                <div>
                    <h3>Duration</h3>
                    <p>{duration}</p>
                </div>
            </div>
        </section>
    )
}

export default Overview;