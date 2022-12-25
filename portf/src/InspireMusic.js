import BackToHome from "./BackToHome";
import Overview from "./Overview";
import Subheader from "./Subheader";
import content from "./Content";
import Infocard from "./Infocard";
import Image from "./Image";
import SectionStart from "./SectionStart";

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
                <SectionStart title="Problem" body={content.inspiremusic.problem} />
                <Image figures={content.inspiremusic.problemFigures} />
            </div>

            <div className="content-section">
                <SectionStart title="Objectives" body={content.inspiremusic.goals} />
                <Infocard cardInfo={content.inspiremusic.objectives}/>
            </div>

            <div className="content-section">
                <SectionStart title="User flow" body={content.inspiremusic.userFlow} />
                <Image figures={content.inspiremusic.userFlows} />
            </div>

            <div className="content-section">
                <SectionStart title="Preliminary sketches" body={content.inspiremusic.preliminary} />
                <Image figures={content.inspiremusic.lowFi} />
            </div>

            <div className="content-section">
                <SectionStart title="Visual Identity" body={content.inspiremusic.visualIdentity} />
                <Image figures={content.inspiremusic.designSys} />
            </div>

            <div className="content-section">
                <SectionStart title="Development Results" body={content.inspiremusic.development} />
                <Image figures={content.inspiremusic.hiFi[0]} />
                
            </div>

        </section>
    )
}

export default InspireMusic;