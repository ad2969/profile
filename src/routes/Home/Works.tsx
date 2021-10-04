import React, { useState } from "react";

import Leenk from "../../components/buttons/leenk";

import DefaultPlaceHolder from "../../assets/images/default-placeholder.png";
import IndiaAgainstCovid from "../../assets/images/projects/india-against-covid.png";
import Sphvere from "../../assets/images/projects/sphvere.jpeg";
import Vibevent from "../../assets/images/projects/vibevent.jpeg";

import ExternalLink from "../../assets/svg/buttons/externalLink";
import "./styles.scss";

const PROJECTS_LIST = [
    {
        image: DefaultPlaceHolder,
        title: "Unnamed Project",
        subtitle: "Ongoing // Lead Developer",
        description: [
            "Designed and built prototypes to quickly test design interfaces and feature ideas",
            "Conducted user research to gather feedback and determine best course of action",
            "Created user personas, user job stories, and user flow diagrams to help optimize designs and brainstorm new features"
        ],
        tags: [
            "Flutter",
            "UX Design",
            "Social Media",
        ],
        hiring: true,
        hiringLink: "https://scrawny-glitter-da7.notion.site/Hiring-597c6d09179d46b29db1f17e7280d8e2"
    },
    {
        image: IndiaAgainstCovid,
        title: "India Against COVID",
        subtitle: "May 2021 // Sole Developer",
        link: "https://india-against-covid-app.netlify.app/",
        description: [
            "Built a web application that collects local Indian charity data and displays them in a convenient map format",
            "Queried data from multiple external sources to build a public API that serves our collected local Indian charity data",
            "Worked through bi-weekly sprints and iterations to launch by a tight deadline"
        ],
        tags: [
            "React",
            "REST API",
            "Leaflet.Js",
            "Firebase",
            "MaterialUI"
        ],
        hiring: false,
        hiringLink: ""
    },
    {
        image: Sphvere,
        title: "Sphvere",
        subtitle: "Sep - Dec 2020 // Developer",
        link: "https://www.instagram.com/sphvere/?hl=en",
        description: [
            "Helped build a prototype of a social platform for people to connect with each other through ideas",
            "Designed and developed a GraphQL API with search, filter, pagination, and user authentication/authorization support",
            "Wrote tests and setup an automated testing environment (pytest) for Django GraphQL (graphene) API"
        ],
        tags: [
            "Gatsby.js",
            "React",
            "Django",
            "GraphQL",
            "Pytest",
            "Docker"
        ],
        hiring: false,
        hiringLink: ""
    },
    {
        image: Vibevent,
        title: "VIBEVENT",
        subtitle: "Jun - Dec 2020 // Lead Developer",
        link: "https://onlinker-prod.netlify.app/",
        description: [
            "Managed a team of 5 developers and designers to organize monthly milestone/ progress meetings and delegate tasks through weekly sprints",
            "Spearheaded the migration of a MEVN (Vue) to MERN (React) stack application, including repository setup, documentation, and dev efforts",
            "Developed a REST-ful Express API connected to a NoSQL database (MongoDB), with unit/integration tests and API blueprints (Aglio, Apiary)",
            "Set up automated pipeline to allow continuous integration and deployment of multiple environments to AWS EC2 and Netlify CDN"
        ],
        tags: [
            "Vue",
            "React",
            "AWS",
            "Docker",
            "Framer",
            "Express",
            "MongoDB"
        ],
        hiring: false,
        hiringLink: ""
    }
];

const Works: React.FunctionComponent = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    return (
        <div className="home-works">
            <div className="home-works-content">
                <div className="home-works__titles">
                    <span></span>
                    {
                        PROJECTS_LIST.map((list, index) => (
                            <div
                                key={index}
                                className={`home-works__title button ${selectedProjectIndex === index && "active"}`}
                                onClick={() => { setSelectedProjectIndex(index); }}
                            >
                                {list.title} {list.hiring && "*"}
                            </div>
                        ))
                    }
                </div>
                <div className="home-works__description">
                    <div className="home-works__description__top-wrapper">
                        <img src={PROJECTS_LIST[selectedProjectIndex].image} alt={`home-works__description-top-image ${selectedProjectIndex}`} />
                        <div className="home-works__description__top-text">
                            <div className="home-works__description__top-text__title">
                                {PROJECTS_LIST[selectedProjectIndex].title}
                            </div>
                            <div className="home-works__description__top-text__subtitle">
                                {PROJECTS_LIST[selectedProjectIndex].subtitle}
                            </div>
                        </div>
                        {PROJECTS_LIST[selectedProjectIndex].link && <ExternalLink href={PROJECTS_LIST[selectedProjectIndex].link}/>}
                    </div>
                    <div className="home-works__description__main-wrapper">
                        <div className="home-works__description__main-tags">
                            {PROJECTS_LIST[selectedProjectIndex].tags.map((tag, jindex) => (
                                <div className="home-works__description__main-tag" key={`desc-tag-${jindex}`}>{tag}</div>
                            ))}
                        </div>
                        <ul className="home-works__description__main-text">
                            {PROJECTS_LIST[selectedProjectIndex].description.map((desc, dIndex) => (
                                <li key={dIndex}>{desc}</li>
                            ))}
                            <br/>
                            {PROJECTS_LIST[selectedProjectIndex].hiring && <Leenk href={PROJECTS_LIST[selectedProjectIndex].hiringLink}>&gt; [LOOKING FOR CONTRIBUTORS] &lt;</Leenk>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>);
};

export default Works;
