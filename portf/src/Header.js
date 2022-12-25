import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Header = ({ setWorkNav }) => {
    const handleWorkNav = () => {
        setWorkNav(true)
    }

    return (
        <section className="header">
            <section className="introduction">
                <h1>alina.</h1>
                <p>Full-time design and frontend enthusiast, part-time cloud gazer</p>
                <div className="icons">
                    <a id="linkedin-link" href="https://www.linkedin.com/in/alina-yzeng/" target="_blank"><FaLinkedin className="icon" size={30} /></a>
                    <a id="github-link" href="https://github.com/charcoalyy" target="_blank"><FaGithubSquare className="icon" size={30} /></a>
                </div>
            </section>
            
            <section className="nav">
                <Link to={"/"}>
                    <div className='nav-link'>
                        <p>About</p>
                    </div>
                </Link>
                <Link to={"/"} onClick={handleWorkNav}>
                    <div className='nav-link'>
                        <p>Work</p>
                    </div>
                </Link>
                <Link to={"/"}>
                    <div className='nav-link'>
                        <p>Resume</p>
                    </div>
                </Link>
            </section>
        </section>
    )
}

export default Header;