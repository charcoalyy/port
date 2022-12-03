import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Thumb from "./Thumb";

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
                <Thumb name="Inspire Music Academy" link="/inspire-music" desc="Designing and developing a new, updated school website using React." img="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" />
                <Thumb name="time.ly" link="/timely" desc="Designing and developing a web application to eliminate public transit waiting lines." img="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" />
            </section>
        </section>
    )
}

export default Body;