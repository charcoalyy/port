import content from "Content.json"
import { BackToHome, Subheader } from "@bits-general"
import { SectionStart, Overview, NumberedList, Infocard, Image } from "@bits-projects"

const RoomE = () => {
    const cont = content.roomE;

    return (
        <section className="roomE">
            <Subheader img={cont.thumbnail} />
            <BackToHome />

            <div className="page-intro">
                <h1 className="page-title">RoomE</h1>
                <h3 className="page-desc">{cont.tagline}</h3>
            </div>

            <Overview chall={cont.challengeOverview} sol={cont.solutionOverview} tools={cont.tools} duration={cont.duration} />

            <div className="content-section">
                <SectionStart title="Problem" />
                <Image figures={cont.problem[0]} />
                <SectionStart body={cont.problem[1]} space={true} />
            </div>

            <div className="content-section">
                <SectionStart title="Objectives" body={cont.goals} />
                <Infocard cardInfo={cont.objectives} />
            </div>

            <div className="content-section">
                <SectionStart title="Solution" body={cont.solution[0]} />
                <NumberedList items={cont.solution.slice(1, 4)} />
            </div>

            <div className="content-section">
                <SectionStart title="Design" body={cont.userFlows[0]} />
                <Image figures={cont.userFlows[1]} />
                <SectionStart body={cont.lowFi[0]} space={true} />
                <div className="two-column-figures">
                    <Image figures={cont.lowFi[1]} />
                </div>

            </div>

            <div className="content-section">
                <SectionStart title="Development" body={cont.final[0]} />
                <a className="section-body roomE-link" href="https://github.com/OmarCodes2/DeltaHacks" target="_blank" rel="noopener noreferrer">View the full code.</a>
                <Image figures={cont.final[1]} />
            </div>

            <div className="content-section last">
                <SectionStart title="Outcome" body={cont.achievements} />
                <h4 className="section-subtitle">Next Steps</h4>
                <Infocard cardInfo={cont.reflection} />
            </div>

        </section>
    )
}

export default RoomE;