import BackToHome from "./BackToHome";
import Overview from "./Overview";
import Subheader from "./Subheader";
import content from "./Content";
import ContentSection from "./ContentSection";

const InspireMusic = () => {
    return(
        <section className="inspire-music">
            <Subheader img="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2015/01/1-25.jpg?w=2000&ssl=1" />
            <BackToHome/>
            <div className="page-intro">
                <h1 className="page-title">Inspire Music Academy Website</h1>
                <h3 className="page-desc">Designing and developing a new, updated school website using React.</h3>
            </div>
            <Overview chall={content.inspiremusic.challengeOverview} sol={content.inspiremusic.solutionOverview} tools={content.inspiremusic.tools} duration={content.inspiremusic.duration} />

            <div className="content-section">
                <h3 className="section-title">Problem</h3>
                <p className="section-body">{content.inspiremusic.problem}</p>
                <img className="section-figure" src={content.inspiremusic.problemFigures[0]}></img>
                <img className="section-figure" src={content.inspiremusic.problemFigures[1]}></img>
            </div>

            <div className="content-section">
                <h3 className="section-title">Objectives</h3>
                <p className="section-body">{content.inspiremusic.goals}</p>
            </div>
        </section>
    )
}

export default InspireMusic;