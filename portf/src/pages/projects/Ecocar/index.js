import content from "content.json";
import { SectionStart, Overview, Checklist, Infocard, Image } from "@bits-projects"
import { ProjectLayout } from "layouts";

const Ecocar = () => {
  const cont = content.ecocar;

  return (
    <ProjectLayout title="McMaster EcoCAR" thumbnail={cont.thumbnail} tagline={cont.tagline}>
      <Overview chall={cont.challengeOverview} sol={cont.solutionOverview} tools={cont.tools} duration={cont.duration} />
      <div className="content-section">
        <SectionStart title="Website Redesign Objectives" body={cont.goals} />
        <Infocard cardInfo={cont.objectives} />
      </div>

      <div className="content-section">
        <SectionStart title="Website Redesign Approach" body={cont.problem[0]} />
        <Checklist items={cont.problem[1]} check="cross" />
        <SectionStart space={true} body={cont.solution[0]} />
        <Checklist items={cont.solution[1]} check="maroon-check" />
      </div>

      <div className="content-section">
        <SectionStart title="Final Website" body={cont.hiFiBlurb[0]} />
        <a className="section-body ecocar-link" href="https://www.macecocar.ca/" target="_blank" rel="noopener noreferrer">View the live site.</a>
        <SectionStart space={true} />
        <Image figures={cont.hiFi[0]} />
      </div>

      {/* <div className="content-section">
        <SectionStart title="Physical Branding" body={cont.hiFiBlurb[2]} />
        <Image figures={cont.hiFi[2]} />
      </div>

      <div className="content-section">
        <SectionStart title="Social Media" body={cont.hiFiBlurb[1]} />
        <Image figures={cont.hiFi[1]} />
      </div> */}

      <div className="content-section last">
        <SectionStart title="Outcome" body={cont.achievements[0]} />
        <h4 className="section-subtitle">Takeaways</h4>
        <Infocard cardInfo={cont.reflection} />
      </div>
    </ProjectLayout>
  )
}

export default Ecocar;