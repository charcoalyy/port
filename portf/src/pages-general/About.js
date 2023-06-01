import { BackToHome } from "@bits-general"

const About = () => {
    return(
        <section className="about">
            <div className="about-section" id="about-para">
                <p>First year engineering student at McMaster University planning to specialize in software next fall.</p> 
                <p>Lover of people-first design, problem-solving, and aesthetics, working to change the world by making our quotidian just a little easier.</p>
                <p>Currently a software developer @ FYELABS & national technology analyst @ HOSA Canada. Seeking more opportunities to immerse myself in designing and/or developing products.</p>
                <p id="above-about">In my free time: swimmer, creative writer, artist, anime devotee, and <a href="https://open.spotify.com/playlist/4TzNj3RTeH7S7D8t6FxiNW?si=a56f6789299c40ba" target="_blank">KR&B playlist curator</a>. Message me about Hunter × Hunter <3</p>
                <BackToHome about={true} />
            </div>
        </section>
    )
}

export default About;
