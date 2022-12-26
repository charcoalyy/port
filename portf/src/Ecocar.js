import BackToHome from "./BackToHome";
import Overview from "./Overview";
import Subheader from "./Subheader";
import content from "./Content";
import Infocard from "./Infocard";
import Image from "./Image";
import SectionStart from "./SectionStart";

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

        </section>
    )
}

export default Ecocar;