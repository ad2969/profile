import React from "react";
import Hello from "../../assets/svg/images/hello";

const Hero: React.FunctionComponent = () => {
    return (
        // <div className="home-hero">
        <div className="home-hero-content" id="home-hero-content-fixed">
            <div className="home-hero__image"><Hello /></div>
            <div className="home-hero__title">I&apos;m Clarence. I like to build things.</div>
        </div>
        // </div>
    );
};

export default Hero;
