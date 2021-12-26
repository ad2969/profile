import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Parallax from "./Parallax";
import Hero from "./Hero";
import Toolbox from "./Toolbox";
import Works from "./Works";
import Footer from "./Footer";

import Title from "./title";
import HeaderFixed from "../../components/header/headerFixed";
import SolidButton from "../../components/buttons/solid";

import BREAKPOINTS from "../../styles/mixins/_breakpoints.module.scss";
import "./styles.scss";

const Home: React.FunctionComponent = () => {
    useLayoutEffect(() => {
        // reset all scroll trigger stuff
        const allTriggers = ScrollTrigger.getAll();
        allTriggers.forEach((trigger) => {
            trigger.kill(true);
        });

        // simple fade animations
        const fadeUp = gsap.utils.toArray(".scrollTrigger-fadeUp");

        (fadeUp as Element[]).forEach((el) => {
            const anim = gsap.fromTo(el, { autoAlpha: 0, y: 100 }, { delay: 0.2, duration: 1, autoAlpha: 1, y: 0 });
            ScrollTrigger.create({
                trigger: el,
                animation: anim,
                toggleActions: "play none none none",
                once: true,
            });
        });

        const fadeRight = gsap.utils.toArray(".scrollTrigger-fadeRight");

        (fadeRight as Element[]).forEach((el) => {
            const anim = gsap.fromTo(el, { autoAlpha: 0, x: -100 }, { delay: 0.2, duration: 1, autoAlpha: 1, x: 0 });
            ScrollTrigger.create({
                trigger: el,
                animation: anim,
                toggleActions: "play none none none",
                once: true
            });
        });

        const imageWrapper = document.getElementById("humanoid-image-wrapper")?.children[0];
        const offsetHeight = (imageWrapper as HTMLElement)?.offsetWidth * 9 / 14 || 0; // h/w ratio
        const startTrigger = offsetHeight ? `top+=${offsetHeight}px` : "center";

        const stMatchCriteria: {[key: string]: any} = {};
        stMatchCriteria[`(min-width: ${BREAKPOINTS.laptop})`] = () => {
            // timeline for pinning
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
        <HeaderFixed/>
        <div className="Route Home">
            <Parallax />
            <Hero />
            <br /><br />
            <Title main="about me" sub="who i am" />
            <div className="home-divider extended"></div>
            <Title main="my toolbox" sub="what i can do" />
            <Toolbox />
            <div className="home-divider"></div>
            <Title main="my work" sub="what i'm working on" />
            <Works />
            <div className="home-divider"></div>
            <Title main="moving forward" sub="what you should do" />
            <div className="home-call-to-action scrollTrigger-fadeUp">
                Interested in contributing to any of my ongoing projects?<br/>
                Want to collaborate on new projects?<br/><br/><br/>
                <SolidButton to="/contact">contact me</SolidButton>
                <SolidButton href="https://drive.google.com/file/d/1Joy0TLwtRjUDR-ELOJdS9ZibIYoAIMcI/view" accent>download my resume</SolidButton>
            </div>
            <Footer />
        </div>
    </>);
};

export default Home;
