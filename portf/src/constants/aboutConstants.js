import { FaLinkedin, FaGithubSquare, FaEnvelopeSquare } from 'react-icons/fa'

export const aboutText = [
    {
        text: "Making our quotidian just a little easier via combination of people-first design, problem-solving, and aesthetics.",
        variant: "h2"
    },
    {
        text: "Seeking opportunities to immerse myself in designing and/or developing products.",
        variant: "h3"
    },
]

export const aboutRoles = {
    professional: [
        "SE × BME student @ McMaster",
        "SWE intern @ FYELABS",
        "Tech analyst @ HOSA Canada"
    ],
    leisure: [
        "Creative writer",
        "Swimmer",
        "Artist",
        "KR&B listener",
        "Anime fan"
    ]
}

export const aboutLinks = [
    {
        id: "linkedin-link",
        href: "https://www.linkedin.com/in/alina-yzeng/",
        icon: <FaLinkedin className="icon" size={30} />
    },
    {
        id: "github-link",
        href: "https://github.com/charcoalyy",
        icon: <FaGithubSquare className="icon" size={30} />
    },
    {
        id: "email-link",
        href: "mailto:alina.yzeng@gmail.com",
        icon: <FaEnvelopeSquare className="icon" size={30} />
    }
]
