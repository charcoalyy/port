// import BackToHome from "../bits-general/movement/BackToHome";
// import Overview from "../bits-projects/Overview";
// import Subheader from "../bits-general/static/Subheader";
import content from "Content.json";
// import Image from "../bits-projects/Image";
// import Infocard from "../bits-projects/Infocard";
// import Checklist from "../bits-projects/Checklist";
// import SectionStart from "../bits-projects/SectionStart";

import { BackToHome, Subheader } from "@bits-general"
import { SectionStart, Overview, Checklist, Infocard, Image } from "@bits-projects"

const Ecocar = () => {
    const cont = content.ecocar;

    return(
        <section className="ecocar">
            <Subheader img={cont.thumbnail} />
            <BackToHome />

            <div className="page-intro">
                <h1 className="page-title">McMaster EcoCAR</h1>
                <h3 className="page-desc">{cont.tagline}</h3>
            </div>

            <Overview chall={cont.challengeOverview} sol={cont.solutionOverview} tools={cont.tools} duration={cont.duration} />

            <div className="content-section">
                <SectionStart title="Website Redesign Objectives" body={cont.goals} />
                <Infocard cardInfo={cont.objectives}/>
            </div>

            <div className="content-section">
                <SectionStart title="Website Redesign Approach" body={cont.problem[0]} />
                <Checklist items={cont.problem[1]} check="cross" />
                <SectionStart space={true} body={cont.solution[0]} />
                <Checklist items={cont.solution[1]} check="maroon-check" />
            </div>

            <div className="content-section">
                <SectionStart title="Final Website" body={cont.hiFiBlurb[0]} />
                <a className="section-body ecocar-link" href="https://www.macecocar.ca/" target="_blank">View the live site.</a>
                <SectionStart space={true} />
                <Image figures={cont.hiFi[0]} />
            </div>

            <div className="content-section">
                <SectionStart title="Physical Branding" body={cont.hiFiBlurb[2]} />
                <Image figures={cont.hiFi[2]} />
            </div>

            <div className="content-section">
                <SectionStart title="Social Media" body={cont.hiFiBlurb[1]} />
                <Image figures={cont.hiFi[1]} />
            </div>

            <div className="content-section last">
                <SectionStart title="Outcome" body={cont.achievements[0]} />
                <h4 className="section-subtitle">Takeaways</h4>
                <Infocard cardInfo={cont.reflection}/>
            </div>

        </section>
    )
}

export default Ecocar;