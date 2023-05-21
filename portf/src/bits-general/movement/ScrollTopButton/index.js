import { useState } from "react";
import { useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";

export default () => {

    const [ top, setTop ] = useState();

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setTop(false)
            } else {
                setTop(true)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div>
            {!top && <a onClick={() => window.scrollTo(0, 0)} className="nav-button to-top"><BsArrowUp /></a>}
        </div>
    );
}
