import BackToHome from "./BackToHome";
import Overview from "./Overview";
import Subheader from "./Subheader";

const InspireMusic = () => {
    return(
        <section className="inspire-music">
            <Subheader img="https://i0.wp.com/inspiremusiclesson.com/wp-content/uploads/2015/01/1-25.jpg?w=2000&ssl=1" />
            <BackToHome/>
            <div className="page-intro">
                <h1 className="page-title">Inspire Music Academy Website</h1>
                <h3 className="page-desc">Designing and developing a new, updated school website using React.</h3>
            </div>
            <Overview chall="X" sol="X" tools="ReactJS, Figma" duration="3 weeks" />
        </section>
    )
}

export default InspireMusic;