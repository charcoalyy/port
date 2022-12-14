import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function BackToHome({about}) {
    return(
        <div className="back-home-container">
            {!about && <Link to={'/'} className="nav-button back-home">
                <BsArrowLeft/>
            </Link>}
            {about && <Link to={'/'} className="nav-button back-home" id="back-home-about">
                <BsArrowLeft/>
            </Link>}
        </div>
    )
}

export default BackToHome;