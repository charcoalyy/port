import BackToHome from "./BackToHome";
import Overview from "./Overview";
import Subheader from "./Subheader";
import content from "./Content";
import Infocard from "./Infocard";
import Image from "./Image";
import SectionStart from "./SectionStart";
import Checklist from "./Checklist";

const InspireMusic = () => {
    const cont = content.inspiremusic;

    return(
        <section className="inspire-music">
            <Subheader img={cont.thumbnail} />
            <BackToHome/>

            <div className="page-intro">
                <h1 className="page-title">Inspire Music Academy Website</h1>
                <h3 className="page-desc">{cont.tagline}</h3>
            </div>

            <Overview chall={cont.challengeOverview} sol={cont.solutionOverview} tools={cont.tools} duration={cont.duration} />

            <div className="content-section">
                <SectionStart title="Problem" body={cont.problem} />
                <Image figures={cont.problemFigures} />
            </div>

            <div className="content-section">
                <SectionStart title="Objectives" body={cont.goals} />
                <Infocard cardInfo={cont.objectives}/>
            </div>

            <div className="content-section">
                <SectionStart title="User flow" body={cont.userFlow} />
                <Image figures={cont.userFlows} />
            </div>

            <div className="content-section">
                <SectionStart title="Preliminary sketches" body={cont.preliminary} />
                <Image figures={cont.lowFi} />
            </div>

            <div className="content-section">
                <SectionStart title="Visual Identity" body={cont.visualIdentity} />
                <Image figures={cont.designSys} />
            </div>

            <div className="content-section">
                <SectionStart title="Development" body={cont.development} />
                <Image figures={cont.hiFi[0]} />
                <Checklist title="Achievements" items={cont.hiFi[1]} check="red-check" />
            </div>

            <div className="content-section last">
                <SectionStart title="Outcome" body={cont.reflection[0]} />
                <h4 className="section-subtitle">Takeaways</h4>
                <Infocard cardInfo={cont.reflection[1]}/>
                <h4 className="section-subtitle">Next Steps</h4>
                <Infocard cardInfo={cont.reflection[2]}/>
            </div>

        </section>
    )
}

export default InspireMusic;