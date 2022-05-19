import React from "react";

import ubcCCLaptop from "../../assets/images/projects/ubc-cc-laptop.png";
import iacUI from "../../assets/images/projects/iac-ui.png";
import iacLogo from "../../assets/images/projects/iac-logo.png";
import vibeventLaptop from "../../assets/images/projects/vibevent-laptop.png";
import vibeventBG from "../../assets/images/projects/vibevent-bg.png";
import ProjectsTitle from "../../assets/svg/images/projects-title";
import ctctPhonesOne from "../../assets/images/projects/ctcf-phones-1.png";
import ctctPhonesTwo from "../../assets/images/projects/ctcf-phones-2.png";
import "./styles.scss";

// remember to change the 'nth-child' z-index index number on the '.home-projects__project-wrapper' styles
const PROJECTS_LIST = [
    {
        slug: "ubc-cc",
        assets: [
            ubcCCLaptop
        ],
        color: "#4F46E5",
        textColor: "#fff",
        title: "UBC Coursecrawler",
        role: "Open-source Project // Developer",
        subtitle: "Web Application and Scraping API",
        description: "Experimented with graph-traversal algorithms",
        technologies: [
            "Django, NextJS, Redis, Heroku",
            "Web scraping, REST API, Memoization"
        ],
        link: {
            name: "VISIT PREVIEW SITE",
            url: "https://ubc-coursecrawler.netlify.app/"
        }
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
        role: "Personal Project // Lead Developer",
        subtitle: "Web Application, Video Hosting",
        description: "Helped UBC Clubs shift to virtual events",
        technologies: [
            "Vue, React, AWS, Docker, Express, MongoDB",
            "Framer, Figma, Zoom API"
        ],
        link: {
            name: "VISIT PREVIEW SITE",
            url: "https://vibevent-stage.netlify.app/"
        }
    },
    {
        slug: "iac",
        assets: [
            iacUI,
            iacLogo
        ],
        color: "#2B2B2B",
        textColor: "#FFF",
        title: "India Against Covid",
        role: "Volunteer // Sole Developer",
        subtitle: "Web Application",
        description: "Helped list charities for India's COVID response",
        technologies: [
            "React, MaterialUI, Leaflet.Js",
            "Web scraping, GeoJSON, REST API, Firebase"
        ],
        link: {
            name: "VISIT PREVIEW SITE",
            url: "https://india-against-covid-app.netlify.app/"
        }
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
        role: "Non-profit // Mobile Developer",
        subtitle: "Mobile Application",
        description: "Built for Canada's University Health Network",
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
                <ProjectsTitle className="home-projects__title scrollTrigger-fadeUp"/>
            </div>

            <div className="home-projects-wrapper" id="home-projects-wrapper">
                {PROJECTS_LIST.map((list, index) => (
                    <div key={`project-${index}`} className="home-projects__project-wrapper">
                        <div className={`home-projects__project ${list.slug} ${index === PROJECTS_LIST.length - 1 ? " --last" : ""} ${index === 0 ? " --first" : ""}`}
                            style={{ background: list.color, color: list.textColor }}
                            id={`home-projects-project-${list.slug}`}
                        >
                            <div className="home-projects__project-content-wrapper">
                                <div className="home-projects__project-content">
                                    <h1>{list.title}</h1>
                                    <div className="home-projects__project-content__role">
                                        <h2>{list.role}</h2>
                                        <h2>{list.subtitle}</h2>
                                    </div>
                                    <div className="home-projects__project-content__description">
                                        <h2>{list.description}</h2>
                                        {list.technologies.map((techList, index) => (
                                            <p key={`techList-${index}`}>{techList}</p>
                                        ))}
                                    </div>
                                </div>
                                <div className={`home-projects__project-content-images ${list.slug}`}>
                                    {list.assets.length
                                        ? list.assets.map((source, index) => (
                                            <img key={`${list.slug}-cimage-${index}`}
                                                className={`${list.slug}-image-${index}`}
                                                id={`${list.slug}-image-${index}`}
                                                src={source}
                                                alt={`${list.slug}-${index}`} />
                                        ))
                                        : <></>
                                    }
                                </div>
                                {list.link && <a
                                    className="home-projects__project-link button--scale"
                                    href={list.link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <span className="v--tablet-up">&gt;</span> {list.link.name}
                                </a>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>);
};

export default Projects;
