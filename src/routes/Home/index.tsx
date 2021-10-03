import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Parallax from "./Parallax";
import Hero from "./Hero";
import Info from "./Info";

import Title from "./title";
import HeaderZero from "../../components/header/headerZero";

import BREAKPOINTS from "../../styles/mixins/_breakpoints.module.scss";
import "./styles.scss";

const Home: React.FunctionComponent = () => {
    useLayoutEffect(() => {
        // reset all scroll trigger stuff
        const allTriggers = ScrollTrigger.getAll();
        allTriggers.forEach((trigger) => {
            trigger.kill(true);
        });

        const imageWrapper = document.getElementById("humanoid-image-wrapper")?.children[0];
        const offsetHeight = (imageWrapper as HTMLElement)?.offsetWidth * 9 / 14 || 0; // h/w ratio
        const startTrigger = offsetHeight ? `top+=${offsetHeight}px` : "center";

        // timeline for pinning
        const stMatchCriteria: {[key: string]: any} = {};
        stMatchCriteria[`(min-width: ${BREAKPOINTS.laptop})`] = () => {
            ScrollTrigger.create({
                trigger: "#humanoid-image-wrapper",
                start: `${startTrigger} center`,
                endTrigger: "#home-about__strengths",
                end: "center center",
                pin: true
            });
        };

        ScrollTrigger.matchMedia(stMatchCriteria);

        // timeline for transformations
        const humanoidTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#humanoid-divider",
                start: "top center",
                endTrigger: "#home-about__strengths",
                end: "center center",
                scrub: true
            }
        });
        humanoidTl.to(
            ".home-about__humanoid-image--muscles", { transform: "skew(0, 30deg) scale(0.8)" }
        ).to(".home-about__humanoid-image--circulatory", { transform: "skew(0, 30deg) scale(0.8)" }, "<"
        ).to(".home-about__humanoid-image--skeleton", { transform: "skew(0, 30deg) scale(0.8)" }, "<"
        ).to(".home-about__humanoid-image--muscles", { transform: "skew(0, 30deg) scale(0.8) translate3d(-12rem, 12rem, 0px)" }
        ).to(".home-about__humanoid-image--circulatory", { transform: "skew(0, 30deg) scale(0.8) translate3d(-4rem, 4rem, 0px)" }, "<"
        ).to(".home-about__humanoid-image--skeleton", { transform: "skew(0, 30deg) scale(0.8) translate3d(4rem, -4rem, 0px)" }, "<");
    }, []);

    return (<>
        <HeaderZero/>
        <div className="Route Home">
            <Parallax />
            <Hero />
            <br /><br />
            <Title main="about me" sub="who i am" />
            <Info />
            <div className="home-divider"></div>

        </div>
    </>);
};

export default Home;
