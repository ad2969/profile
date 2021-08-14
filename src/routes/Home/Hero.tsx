import React from "react";
import { Link } from "react-router-dom";

import CustomIcon from "../../components/media/customImageIcon";

import akpsiLogo from "../../assets/images/logos/akpsi-logo.png";
import biztechLogo from "../../assets/images/logos/biztech-logo.png";
import semiosLogo from "../../assets/images/logos/semios-logo.png";
import face from "../../assets/images/face.png";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__image">
                <img src={face} alt="face" />
            </div>
            <ul className="hero__text">
                <div className="hero__text-title">Hello, I&apos;m Clarence. I like to build things.</div>
                <li>Currently based in <Link className="t--default button--darken" to="/">&#128205; Vancouver, Canada</Link></li>
                <li>Studying Electrical Engineering at the <Link className="t--default button--darken" to="/">&#127891; University of British Columbia</Link></li>
                <li>Part of &nbsp;
                    <Link className="t--default button--darken" to="/"><CustomIcon img={biztechLogo} /> UBC Biztech</Link>,&nbsp;
                    <Link className="t--default button--darken" to="/"><CustomIcon img={akpsiLogo} /> Alpha Kappa Psi</Link> Business Fraternity
                </li>
                <br />
                <li>Looking for  <Link className="t--default button--darken" to="/">&#128084; Co-op Internships</Link> for Summer 2022</li>
                <li>Previously a Full-Stack Javascript Developer Co-op at <Link className="t--default button--darken" to="/"><CustomIcon img={semiosLogo} /> Semios</Link></li>
            </ul>
        </div>);
};

export default Hero;
