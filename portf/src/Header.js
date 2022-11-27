import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <section className="header">
            <section className="introduction">
                <h1>Hey, I'm Alina.</h1>
                <p>Design and frontend enthusiast.</p>
                <div className="icons">
                    <a id="linkedin-link" href="https://www.linkedin.com/in/alina-yzeng/" target="_blank"><FaLinkedin className="icon" size={30} /></a>
                    <a id="github-link" href="https://github.com/charcoalyy" target="_blank"><FaGithubSquare className="icon" size={30} /></a>
                </div>
            </section>
            <section className="introduction-image">
                <Link to={"/"}><p>Projects</p></Link>
                <Link to={"/"}><p>About</p></Link>
                <Link to={"/"}><p>Resume</p></Link>
            </section>
        </section>
    )
}

export default Header;