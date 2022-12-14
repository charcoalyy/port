import BackToHome from "./BackToHome";
import Overview from "./Overview";
import Subheader from "./Subheader";
import content from "./Content";
import Infocard from "./Infocard";
import Image from "./Image";
import SectionStart from "./SectionStart";
import Checklist from "./Checklist";

const Timely = () => {
    const cont = content.timely;

    return(
        <section className="timely">
            <Subheader img={cont.thumbnail} />
            <BackToHome />

            <div className="page-intro">
                <h1 className="page-title">time.ly</h1>
                <h3 className="page-desc">{cont.tagline}</h3>
            </div>

            <Overview chall={cont.challengeOverview} sol={cont.solutionOverview} tools={cont.tools} duration={cont.duration} />
            
            <div className="content-section">
                <SectionStart title="Problem" />
                <a className="section-body timely-link" href="https://www.reddit.com/r/McMaster/comments/sn65dd/the_bus_line_today/" target="_blank">McMaster GO Bus line from February 2022.</a>
                <Image figures={cont.problem[0]} />
                <SectionStart body={cont.problem[1]} space={true} />
            </div>

            <div className="content-section">
                <SectionStart title="Objectives" body={cont.goals} />
                <Infocard cardInfo={cont.objectives}/>
            </div>

            <div className="content-section">
                <SectionStart title="Solution" body={cont.solution[0]} />
                <Checklist items={cont.solution[1]} check="green-check" />
            </div>

            <div className="content-section">
                <SectionStart title="Development" body={cont.development} />
                <SectionStart body={cont.preliminary} />
                <Image figures={cont.lowFi} />
            </div>

            <div className="content-section">
                <SectionStart title="Final Product" body={cont.final[0]} />
                <a className="section-body timely-link" href="https://github.com/charcoalyy/time.ly" target="_blank">View the full code.</a>
                <Image figures={cont.final[1]} />
            </div>

            <div className="content-section last">
                <SectionStart title="Outcome" body={cont.achievements} />
                <h4 className="section-subtitle">Next Steps</h4>
                <Infocard cardInfo={cont.reflection[1]}/>
            </div>


        </section>
    )
}

export default Timely;