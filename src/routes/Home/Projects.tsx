import React from "react";

import SolidButton from "../../components/buttons/solid";

import IndiaAgainstCovid from "../../assets/images/projects/india-against-covid.png";
import Ctcf from "../../assets/images/projects/ctcf.png";
import Vibevent from "../../assets/images/projects/vibevent.png";

import "./styles.scss";

const PROJECTS_LIST = [
    {
        image: IndiaAgainstCovid,
        title: "India Against Covid",
        subtitle: "Personal Project // Sole Developer // May 2021",
        description: "A dynamic web application that queries data on region-specific COVID cases and local COVID-related charities in India to display in a convenient map format. The collected data is also served on a public API.",
        tags: [
            "Web Application",
            "React",
            "REST API",
            "Firebase",
            "MaterialUI"
        ],
        scale: 0.8
    },
    {
        image: Vibevent,
        title: "Vibevent",
        subtitle: "Personal Project // Lead Developer // Jun - Dec 2020",
        link: "https://india-against-covid-app.netlify.app/",
        description: "A virtual event management web application used briefly by student clubs at UBC to host, promote, and manage their virtual events during the early stages of the COVID-19 pandemic.",
        tags: [
            "Vue",
            "React",
            "AWS",
            "Docker",
            "Framer",
            "Express",
            "MongoDB"
        ],
        scale: 1.1
    },
    {
        image: Ctcf,
        title: "Drug Overdose Prevention",
        subtitle: "Code The Change Foundation // Mobile Developer // Jan - Jun 2020",
        link: "https://www.instagram.com/sphvere/?hl=en",
        description: "A mobile application used by the University Health Network to address the problem of opioid drug overdose in an area in downtown Toronto. At launch, the app was valued at $60,000 and served ~100 dependent patients.",
        tags: [
            "Mobile Application",
            "React Native",
            "PostgreSQL",
            "Redis",
            "MongoDB"
        ],
        scale: 1
    }
];

const Projects: React.FunctionComponent = () => {
    return (
        <div className="home-projects">
            <div className="home-projects-wrapper">
                {PROJECTS_LIST.map((list, index) => (
                    <div key={`project-${index}`} className="home-projects__project">
                        <div className="home-projects__project-content">
                            <h2 className="home-projects__project-content__title">{list.title}</h2>
                            <div className="home-projects__project-content__subtitle">{list.subtitle}</div>
                            <p className="home-projects__project-content__description">{list.description}</p>
                            <div className="home-projects__project-content__tags">
                                {list.tags.map((tag, jindex) => (
                                    <div className="home-projects__project-content__tag" key={`desc-tag-${jindex}`}>{tag}</div>
                                ))}
                            </div>
                        </div>
                        <img className="home-projects__project-image" src={list.image} alt={`home-projects-image-${index}`} style={{ transform: `scale(${list.scale})` }} />
                    </div>
                ))}
            </div>
            <SolidButton to="/projects">More projects -&gt;</SolidButton>
        </div>);
};

export default Projects;
