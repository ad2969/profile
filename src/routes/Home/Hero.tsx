import React from "react";

import CustomIcon from "../../components/media/customImageIcon";
import Leenk from "../../components/buttons/leenk";

import semiosLogo from "../../assets/images/logos/semios-logo.png";
import skyrocketLogo from "../../assets/images/logos/skyrocket-logo.png";
import face from "../../assets/images/face.png";

const Hero: React.FunctionComponent = () => {
    return (
        <div className="home-hero">
            <div className="home-hero-content">
                <div className="home-hero__image"><img src={face} alt="face" /></div>
                <div className="home-hero__title">Hello, I&apos;m <span className="">Clarence Adrian</span></div>
                <div className="home-hero__subtitle">
                    {/* I like to build things. <br/> */}
                    Curently building things in <Leenk to="/">&#128205;Vancouver, Canada</Leenk><br/>
                    Working at <Leenk href="https://skyrocket.is/"><CustomIcon img={skyrocketLogo} /> Skyrocket Digital</Leenk>, previously at <Leenk href="https://semios.com/"><CustomIcon img={semiosLogo} /> Semios</Leenk>
                </div>

            </div>
        </div>);
};

export default Hero;
