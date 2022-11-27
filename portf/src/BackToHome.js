import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function BackToHome() {
    return(
        <div className="back-home-container">
            <Link to={'/'} className="nav-button back-home">
                <BsArrowLeft/>
            </Link>
        </div>
    )
}

export default BackToHome;