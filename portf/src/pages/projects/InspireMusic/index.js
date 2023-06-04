import content from "Content.json"
import { SectionStart, Overview, Checklist, Infocard, Image } from "@bits-projects"
import { ProjectLayout } from "layouts"

const InspireMusic = () => {
  const cont = content.inspiremusic

  return (
    <ProjectLayout title="Inspire Music Academy" thumbnail={cont.thumbnail} tagline={cont.tagline}>
      <Overview chall={cont.challengeOverview} sol={cont.solutionOverview} tools={cont.tools} duration={cont.duration} />

      <div className="content-section">
        <SectionStart title="Problem" body={cont.problem} />
        <Image figures={cont.problemFigures} />
      </div>

      <div className="content-section">
        <SectionStart title="Objectives" body={cont.goals} />
        <Infocard cardInfo={cont.objectives} />
      </div>

      <div className="content-section">
        <SectionStart title="User Flow" body={cont.userFlow} />
        <Image figures={cont.userFlows} />
      </div>

      <div className="content-section">
        <SectionStart title="Preliminary Sketches" body={cont.preliminary} />
        <Image figures={cont.lowFi} />
      </div>

      <div className="content-section">
        <SectionStart title="Visual Identity" body={cont.visualIdentity} />
        <Image figures={cont.designSys} />
      </div>

      <div className="content-section">
        <SectionStart title="Development" body={cont.development} />
        <a className="section-body inspiremusic-link" href="https://inspiremusicacademy.netlify.app/" target="_blank" rel="noopener noreferrer">View the full site.</a>
        <SectionStart space={true} />
        <Image figures={cont.hiFi[0]} />
        <Checklist title="Achievements" items={cont.hiFi[1]} check="red-check" />
      </div>

      <div className="content-section last">
        <SectionStart title="Outcome" body={cont.reflection[0]} />
        <h4 className="section-subtitle">Takeaways</h4>
        <Infocard cardInfo={cont.reflection[1]} />
        <h4 className="section-subtitle">Next Steps</h4>
        <Infocard cardInfo={cont.reflection[2]} />
      </div>
    </ProjectLayout>

  )
}

export default InspireMusic;