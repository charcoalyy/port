import content from "content.json"
import { ProjectLayout } from "layouts"
import { SectionStart, Overview, Checklist, Infocard, Image } from "@bits-projects"

const Timely = () => {
  const cont = content.timely

  return (
    <ProjectLayout title="time.ly" thumbnail={cont.thumbnail} tagline={cont.tagline}>
      <Overview chall={cont.challengeOverview} sol={cont.solutionOverview} tools={cont.tools} duration={cont.duration} />
      <div className="content-section">
        <SectionStart title="Problem" />
        <a className="section-body timely-link" href="https://www.reddit.com/r/McMaster/comments/sn65dd/the_bus_line_today/" target="_blank" rel="noopener noreferrer">McMaster GO Bus line from February 2022.</a>
        <Image figures={cont.problem[0]} />
        <SectionStart body={cont.problem[1]} space={true} />
      </div>

      <div className="content-section">
        <SectionStart title="Objectives" body={cont.goals} />
        <Infocard cardInfo={cont.objectives} />
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
        <Infocard cardInfo={cont.reflection[1]} />
      </div>
    </ProjectLayout>
  )
}

export default Timely;