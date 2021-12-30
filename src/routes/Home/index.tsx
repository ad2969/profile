import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Parallax from "./Parallax";
import Toolbox from "./Toolbox";
import Projects from "./Projects";
import Footer from "./Footer";
import HumanoidHome from "./humanoid";

import BREAKPOINTS from "../../styles/mixins/_breakpoints.module.scss";
import HeaderFixed from "../../components/header/headerFixed";
import Leenk from "../../components/buttons/leenk";

import BrainImage from "../../assets/images/brain.png";
import RotatingGears from "../../assets/svg/images/rotatingGears";
import ICPOne from "../../assets/svg/images/icp-1";
import ICPTwo from "../../assets/svg/images/icp-2";
import Connect from "../../assets/svg/images/connect";
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

        const fadeLeft = gsap.utils.toArray(".scrollTrigger-fadeLeft");

        (fadeLeft as Element[]).forEach((el) => {
            const anim = gsap.fromTo(el, { autoAlpha: 0, x: 100 }, { delay: 0.2, duration: 1, autoAlpha: 1, x: 0 });
            ScrollTrigger.create({
                trigger: el,
                animation: anim,
                toggleActions: "play none none none",
                once: true
            });
        });

        // timeline for HUMANOID transformations
        const humanoidTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#home-about__strengths",
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

        setTimeout(() => {
            // animations for zigzag text
            gsap.timeline({
                scrollTrigger: {
                    trigger: "#home-situation-bg-text-right",
                    start: "top bottom",
                    endTrigger: "#home-situation-bg-text-left",
                    end: "bottom top",
                    scrub: true
                }
            }).from("#home-situation-bg-text-left", { x: "-30%" }
            ).from("#home-situation-bg-text-right", { x: "30%" }, "<"
            ).to("#home-situation-bg-text-left", { x: "20%" }
            ).to("#home-situation-bg-text-right", { x: "-20%" }, "<");

            // pinning recent projects title
            gsap.timeline({
                scrollTrigger: {
                    trigger: "#home-recent-projects-title",
                    start: "center center",
                    endTrigger: "#home-projects-wrapper",
                    end: "bottom 90%",
                    scrub: true,
                    pin: true,
                    pinSpacing: false
                }
            });

            let tabletMinusOne:string|number = BREAKPOINTS.tablet.replace("px", "");
            tabletMinusOne = parseInt(tabletMinusOne) - 1;

            // parallax effects for projects section (PHONE)
            const stMatchCriteria: {[key: string]: any} = {};
            stMatchCriteria[`(max-width: ${tabletMinusOne}px)`] = () => {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: "#home-projects-project-vibevent",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }).from("#vibevent-image-1", { x: "10%" }
                ).to("#vibevent-image-1", { x: "-10%" });
            };
            // parallax effects for projects section (TABLET AND UP)
            stMatchCriteria[`(min-width: ${BREAKPOINTS.tablet})`] = () => {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: "#home-projects-project-vibevent",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }).from("#vibevent-image-1", { y: "10%" }
                ).to("#vibevent-image-1", { y: "-10%" });
            };

            ScrollTrigger.matchMedia(stMatchCriteria);

            gsap.timeline({
                scrollTrigger: {
                    trigger: "#home-projects-project-ctcf-drug",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            }).from("#ctcf-drug-image-0", { y: "-10%" }
            ).from("#ctcf-drug-image-1", { y: "10%" }, "<"
            ).to("#ctcf-drug-image-0", { y: "10%" }
            ).to("#ctcf-drug-image-1", { y: "-10%" }, "<");
        }, 1000);
    }, []);

    return (<>
        <HeaderFixed/>
        <div className="Route Home">
            <Parallax />
            <div className="home-hero-spacing"></div>

            <div className="home-divider"></div>

            <HumanoidHome />

            <div className="home-divider"></div>

            <div className="home-brand">
                <div className="home-brand__slogan-wrapper">
                    <div className="home-brand__slogan slogan-line-1">
                        <h1 className="slogan-text scrollTrigger-fadeRight">Dedicated to</h1>
                        <RotatingGears className="slogan-image"/>
                    </div>
                    <h1 className="home-brand__slogan slogan-line-2 scrollTrigger-fadeRight"><span className="t--c1">lifelong learning</span> &amp; building</h1>
                    <div className="home-brand__slogan slogan-line-3">
                        <h1 className="slogan-text scrollTrigger-fadeRight">things that matter</h1>
                        <div className="slogan-subtext scrollTrigger-fadeLeft">I&apos;m interested in utilizing innovative technologies to engineer solutions that improve the quality of human life.
                            <br /><span className="t--c1s">Simply put, I like to build things.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-divider"></div>

            <div className="home-brand-2">
                <img className="home-brand-2__image" src={BrainImage} alt="brain" />
                <div className="home-brand-2__content">
                    <h1 className="slogan-text scrollTrigger-fadeLeft">Constantly <span className="t--c1">curious</span> and <span className="t--c1">forward-thinking</span></h1>
                    <div className="slogan-subtext scrollTrigger-fadeLeft">A tinkerer at heart, I enjoy learning about how things work, breaking things down into their most basic elements in order to gain even newer insights to solve future problems.</div>
                </div>
                {/* <div className="scrollTrigger-fadeUp"><SolidButton to="/about">More about me -&gt;</SolidButton></div> */}
            </div>

            <div className="home-divider"></div>

            <div className="home-situation">
                <ICPOne className="home-situation__bg-text" id="home-situation-bg-text-right" />
                <ICPTwo className="home-situation__bg-text" id="home-situation-bg-text-left" />
            </div>

            <div className="home-divider"></div>

            <Toolbox />

            <Projects />

            <div className="home-divider"></div>

            <div className="home-call-to-action">
                <h2>If that&apos;s it, here&apos;s a <span className="t--c1">call to action</span></h2>
                <Connect className="home-call-to-action-title"/>
                <div className="home-call-to-action__cta">If you have <strong>an opportunity</strong> for me, take a peek at <Leenk href="https://drive.google.com/file/d/1Joy0TLwtRjUDR-ELOJdS9ZibIYoAIMcI/view" >my resume</Leenk></div>
                <div className="home-call-to-action__cta">Have <strong>a project</strong> that you think I might be interested in? <Leenk to="/contact" >let’s talk!</Leenk></div>
                <div className="home-call-to-action__extra-text">Otherwise, let’s share our ideas about interesting topics. Here are some things that are currently big in my world: <strong>applications of blockchain, music production, human psychology</strong>, and anything business!</div>
            </div>
            <Footer />
        </div>
    </>);
};

export default Home;
