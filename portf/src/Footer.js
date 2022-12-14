import { FaLinkedin, FaGithubSquare, FaEnvelopeSquare } from 'react-icons/fa'

function Footer() {
    return(
        <div className="footer">
                <div className="icons">
                    <a id="linkedin-link" href="https://www.linkedin.com/in/alina-yzeng/" target="_blank"><FaLinkedin className="icon" size={30} /></a>
                    <a id="github-link" href="https://github.com/charcoalyy" target="_blank"><FaGithubSquare className="icon" size={30} /></a>
                    <a id="email-link" href="mailto:alina.yzeng@gmail.com" target="_blank"><FaEnvelopeSquare className="icon" size={30} /></a>
                </div>
                <p className="copyright">ⓒ 2022 Alina Zeng</p>
        </div>
    )
}

export default Footer;