import React from "react";

import iacUI from "../../assets/images/projects/iac-ui.png";
import iacLogo from "../../assets/images/projects/iac-logo.png";
import vibeventLaptop from "../../assets/images/projects/vibevent-laptop.png";
import vibeventBG from "../../assets/images/projects/vibevent-bg.png";
import RecentProjects from "../../assets/svg/images/rprojects";
import ctctPhonesOne from "../../assets/images/projects/ctcf-phones-1.png";
import ctctPhonesTwo from "../../assets/images/projects/ctcf-phones-2.png";
import "./styles.scss";

const PROJECTS_LIST = [
    {
        slug: "iac",
        assets: [
            iacUI,
            iacLogo
        ],
        color: "#2B2B2B",
        textColor: "#FFF",
        title: "India Against Covid",
        subtitle: "Volunteer // Sole Developer",
        date: "May 2021",
        description: "Web Application",
        technologies: [
            "React, MaterialUI, Leaflet.Js",
            "Web scraping, GeoJSON, REST API, Firebase"
        ]
    },
    {
        slug: "vibevent",
        assets: [
            vibeventLaptop,
            vibeventBG
        ],
        color: "#F6F6F7",
        textColor: "#000",
        title: "Vibevent",
        subtitle: "Personal Project // Lead Developer",
        date: "June - December 2020",
        description: "Web Application, Video Hosting",
        technologies: [
            "Vue, React, AWS, Docker, Express, MongoDB",
            "Framer, Figma, Zoom API"
        ]
    },
    {
        slug: "ctcf-drug",
        assets: [
            ctctPhonesOne,
            ctctPhonesTwo
        ],
        color: "#3570AC",
        textColor: "#FFF",
        title: "Drug Overdose Prevention",
        subtitle: "Non-profit // Mobile Developer",
        date: "January - June 2020",
        description: "Mobile Application",
        technologies: [
            "React Native, Redux, Expo",
            "Express, PostgreSQL, Redis, MongoDB"
        ]
    }
];

const Projects: React.FunctionComponent = () => {
    return (
        <div className="home-projects">
            <div className="home-projects__title-wrapper" id="home-projects-title-wrapper">
                <div className="home-projects__title-wrapper__spacing"></div>
                <RecentProjects className="home-projects__title" id="home-recent-projects-title"/>
                <div className="home-projects__title-wrapper__spacing"></div>
            </div>

            <div className="home-divider"></div>

            <div className="home-projects-wrapper" id="home-projects-wrapper">
                {PROJECTS_LIST.map((list, index) => (
                    <div key={`project-${index}`} className="home-projects__project-wrapper">
                        <div className={`home-projects__project ${list.slug}
                        ${index === PROJECTS_LIST.length - 1 ? " --last" : ""}
                        ${index === 0 ? " --first" : ""}`}
                        style={{ background: list.color, color: list.textColor }}
                        id={`home-projects-project-${list.slug}`}
                        >
                            <div className="home-projects__project-content-wrapper">
                                <div className="home-projects__project-content">
                                    <h1>{list.title}</h1>
                                    <div className="home-projects__project-content__role">
                                        <h2>{list.subtitle}</h2>
                                        <h2>{list.date}</h2>
                                    </div>
                                    <div className="home-projects__project-content__description">
                                        <h2>{list.description}</h2>
                                        {list.technologies.map((techList, index) => (
                                            <p key={`techList-${index}`}>{techList}</p>
                                        ))}
                                    </div>
                                </div>
                                <div className={`home-projects__project-content-images ${list.slug}`}>
                                    {list.assets.map((source, index) => (
                                        <img key={list.slug}
                                            className={`${list.slug}-image-${index}`}
                                            id={`${list.slug}-image-${index}`}
                                            src={source}
                                            alt={`${list.slug}-${index}`} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>);
};

export default Projects;
