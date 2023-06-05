import { FaLinkedin, FaGithubSquare, FaEnvelopeSquare } from 'react-icons/fa'

export const aboutText = [
    {
        text: "Making our quotidian just a little easier via combination of people-first design, code, and aesthetics.",
        variant: "h2"
    },
    {
        text: "Seeking opportunities to design and/or develop products. Reach out if it fits the bill ♡",
        variant: "h3"
    },
]

export const aboutRoles = {
    professional: [
        "SWE intern @ FYELABS",
        "Tech @ HOSA Canada",
        "SE × BME student @ McMaster",
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
