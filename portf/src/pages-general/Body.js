import { useEffect, useRef, useState } from "react";
// import Header from "../bits-general/static/Header";
// import Thumb from "../bits-general/static/Thumb";
import content from "Content.json";

import { Header, Thumb } from "@bits-general"

const Body = () => {
    const bodyRef = useRef();
    const [ workNav, setWorkNav ] = useState(false);

    useEffect(() => {
        if (workNav) {
            bodyRef.current.scrollIntoView();
            setWorkNav(false)
        }
    }, [workNav])

    return(
        <section className="home">
            <Header workNav={workNav} setWorkNav={setWorkNav} />
            <section className="body" ref={bodyRef}>
                <Thumb name="Inspire Music Academy" link="/inspire-music" desc={content.inspiremusic.tagline} img={content.inspiremusic.thumbnail} tags={content.inspiremusic.tags} />
                <Thumb name="TickMe" link="/tickme" desc={content.tickme.tagline} img={content.tickme.thumbnail} tags={content.tickme.tags} />
                <Thumb name="time.ly" link="/timely" desc={content.timely.tagline} img={content.timely.thumbnail} tags={content.timely.tags} />
                <Thumb name="RoomE" link="/roomE" desc={content.roomE.tagline} img={content.roomE.thumbnail} tags={content.roomE.tags} />
                <Thumb name="McMaster EcoCAR" link="/ecocar" desc={content.ecocar.tagline} img={content.ecocar.thumbnail} tags={content.ecocar.tags} />
            </section>
        </section>
    )
}

export default Body;