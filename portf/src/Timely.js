import Overview from "./Overview";
import Subheader from "./Subheader";

const Timely = () => {
    return(
        <section className="timely">
            <Subheader img="https://beta.ctvnews.ca/local/toronto/2020/6/18/1_4989617/_jcr_content/root/responsivegrid/image.coreimg.jpg" />
            <div className="page-intro">
                <h1 className="page-title">Time.ly</h1>
                <h3 className="page-desc">Designing and developing a web application to eliminate public transit waiting lines.</h3>
            </div>
            <Overview chall="X" sol="X" tools="X" duration="X" />
        </section>
    )
}

export default Timely;