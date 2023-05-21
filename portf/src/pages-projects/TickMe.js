// import BackToHome from "../bits-general/movement/BackToHome";
// import Overview from "../bits-projects/Overview";
// import Subheader from "../bits-general/static/Subheader";
import content from "Content.json";
// import Infocard from "../bits-projects/Infocard";
// import Image from "../bits-projects/Image";
// import SectionStart from "../bits-projects/SectionStart";
// import Checklist from "../bits-projects/Checklist";
// import NumberedList from "../bits-projects/NumberedList";
// import Challenge from "../bits-projects/Challenge";

import { BackToHome, Subheader } from "@bits-general"
import { SectionStart, Overview, NumberedList, Challenge, Checklist, Infocard, Image } from "@bits-projects"

const TickMe = () => {
    const cont = content.tickme;

    return(
        <section className="tickme">
            <Subheader img={cont.thumbnail} />
            <BackToHome/>

            <div className="page-intro">
                <h1 className="page-title">TickMe</h1>
                <h3 className="page-desc">{cont.tagline}</h3>
            </div>

            <Overview chall={cont.challengeOverview} sol={cont.solutionOverview} tools={cont.tools} duration={cont.duration} />

            <div className="content-section">
                <SectionStart title="Problem" />
                <NumberedList items={cont.problem[1]} />
                <SectionStart body={cont.problem[0]} />
            </div>
            
            <div className="content-section">
                <SectionStart title="Objectives" body={cont.goals} />
                <Infocard cardInfo={cont.objectives}/>
            </div>

            <div className="content-section">
                <SectionStart title="Solution" body={cont.solution[0]} />
                <Checklist items={cont.solution[1]} check="yellow-check" />
                <SectionStart body={cont.solution[2]} space={true} />
            </div>

            <div className="content-section">
                <SectionStart title="User flow" body={cont.userFlow} />
                <Image figures={cont.userFlows} />
            </div>

            <div className="content-section">
                <SectionStart title="Low-fidelity Wireframes" body={cont.preliminary[0]} />
                <Image figures={cont.lowFi} />
                <Challenge num={1} title={"Challenge: Progress Page"} body={cont.preliminary[1]} />
                <Challenge num={2} title={"Challenge: Drag and Drop"} body={cont.preliminary[2]} />
            </div>

            <div className="content-section">
                <SectionStart title="High-fidelity Prototype" body={cont.hiFi[0]} />
                <Image figures={cont.hiFi[1]} />
                <div className="two-column-figures">
                    <Image figures={cont.hiFi[2]} />
                </div>
            </div>

            <div className="content-section last">
                <SectionStart title="Outcome" body={cont.achievements} />
                <h4 className="section-subtitle">Takeaways</h4>
                <Infocard cardInfo={cont.reflection[0]}/>
                <h4 className="section-subtitle">Next Steps</h4>
                <Infocard cardInfo={cont.reflection[1]}/>
            </div>

        </section>
    )
}

export default TickMe;