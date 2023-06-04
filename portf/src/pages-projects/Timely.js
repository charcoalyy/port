// import BackToHome from "../bits-general/movement/BackToHome";
// import Overview from "../bits-projects/Overview";
// import Subheader from "../bits-general/static/Subheader";
import content from "Content.json";
// import Infocard from "../bits-projects/Infocard";
// import Image from "../bits-projects/Image";
// import SectionStart from "../bits-projects/SectionStart";
// import Checklist from "../bits-projects/Checklist";

import { BackToHome, Subheader } from "@bits-general"
import { SectionStart, Overview, Checklist, Infocard, Image } from "@bits-projects"

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
                <a className="section-body timely-link" href="https://www.reddit.com/r/McMaster/comments/sn65dd/the_bus_line_today/" target="_blank" rel="noopener noreferrer">McMaster GO Bus line from February 2022.</a>
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
                <a className="section-body timely-link" href="https://github.com/charcoalyy/time.ly" target="_blank" rel="noopener noreferrer">View the full code.</a>
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