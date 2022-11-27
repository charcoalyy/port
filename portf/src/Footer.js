import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'

function Footer() {
    return(
        <div className="footer">
                <div className="icons">
                    <a id="linkedin-link" href="https://www.linkedin.com/in/alina-yzeng/" target="_blank"><FaLinkedin className="icon" size={30} /></a>
                    <a id="github-link" href="https://github.com/charcoalyy" target="_blank"><FaGithubSquare className="icon" size={30} /></a>
                </div>
        </div>
    )
}

export default Footer;