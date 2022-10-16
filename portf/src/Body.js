import Header from "./Header";
import Thumb from "./Thumb";

const Body = () => {
    return(
        <section className="home">
            <Header />
            <section className="body">
                <Thumb name="Inspire Music Academy" link="/inspire-music" desc="Designing and developing a new, updated school website using React." img="https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png" />
                <Thumb name="time.ly" link="/timely" desc="Designing and developing a web application to eliminate public transit waiting lines." img="https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png" />
            </section>
        </section>
    )
}

export default Body;