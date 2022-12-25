import BackToHome from "./BackToHome";
import Overview from "./Overview";
import Subheader from "./Subheader";
import content from "./Content.json"

const Timely = () => {
    return(
        <section className="timely">
            <Subheader img={content.timely.thumbnail} />
            <BackToHome />
            <div className="page-intro">
                <h1 className="page-title">time.ly</h1>
                <h3 className="page-desc">{content.timely.tagline}</h3>
            </div>
            <Overview chall={content.timely.challengeOverview} sol={content.timely.solutionOverview} tools={content.timely.tools} duration={content.timely.duration} />
        </section>
    )
}

export default Timely;