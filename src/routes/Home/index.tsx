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
        // timeline for pinning
        const stMatchCriteria: {[key: string]: any} = {};
        stMatchCriteria[`(max-width: ${BREAKPOINTS.tablet})`] = () => {
            ScrollTrigger.create({
                trigger: "#humanoid-image-wrapper",
                start: "center center",
                endTrigger: "#humanoid-divider",
                end: "top center",
                pin: true,
                pinSpacing: false
            });
        };
        stMatchCriteria[`(min-width: ${BREAKPOINTS.laptop})`] = () => {
            ScrollTrigger.create({
                trigger: "#humanoid-image-wrapper",
                start: "center center",
                endTrigger: "#home-info__strengths-text",
                end: "center+=100px center",
                pin: true,
                pinSpacing: false
            });
        };

        ScrollTrigger.matchMedia(stMatchCriteria);

        // timeline for transformations
        const humanoidTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#humanoid-divider",
                start: "top center",
                endTrigger: "#home-info__strengths-text",
                end: "center center",
                scrub: true
            }
        });
        humanoidTl.to(
            ".home-info__image--muscles", { transform: "skew(0, 30deg) scale(0.8)" }
        ).to(".home-info__image--circulatory", { transform: "skew(0, 30deg) scale(0.8)" }, "<"
        ).to(".home-info__image--skeleton", { transform: "skew(0, 30deg) scale(0.8)" }, "<"
        ).to(".home-info__image--muscles", { transform: "skew(0, 30deg) scale(0.8) translate3d(-12rem, 12rem, 0px)" }
        ).to(".home-info__image--circulatory", { transform: "skew(0, 30deg) scale(0.8) translate3d(-4rem, 4rem, 0px)" }, "<"
        ).to(".home-info__image--skeleton", { transform: "skew(0, 30deg) scale(0.8) translate3d(4rem, -4rem, 0px)" }, "<"
        ).to("#home-info__strengths-text", { opacity: 1 }, "<");
    }, []);

    return (<>
        <HeaderZero/>
        <div className="Route Home">
            <Parallax />
            <Hero />
            <br /><br />
            <Title main="about me" sub="who i am and where i've been" />
            <Info />
            <div className="home-divider"></div>
            <div> NEXT CONTENT --</div>
            <div className="home-divider"> NEXT CONTENT --</div>
            <div className="home-divider"> NEXT CONTENT --</div>
            <div className="home-divider"> NEXT CONTENT --</div>
            <div className="home-divider"> NEXT CONTENT --</div>
            <div className="home-divider"> NEXT CONTENT --</div>
            <div className="home-divider"> NEXT CONTENT --</div>
            <div className="home-divider"> NEXT CONTENT --</div>
            <div className="home-divider"> NEXT CONTENT --</div>
            <div className="home-divider"> NEXT CONTENT --</div>

        </div>
    </>);
};

export default Home;
