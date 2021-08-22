import React from "react";
import { Link } from "react-router-dom";

import CustomIcon from "../../components/media/customImageIcon";

import akpsiLogo from "../../assets/images/logos/akpsi-logo.png";
import biztechLogo from "../../assets/images/logos/biztech-logo.png";
import semiosLogo from "../../assets/images/logos/semios-logo.png";
import skyrocketLogo from "../../assets/images/logos/skyrocket-logo.png";
import face from "../../assets/images/face.png";

interface LeenkProps {
    to?: string;
    href?: string;
    children: React.ReactNode;
}

const Leenk: React.FunctionComponent<LeenkProps> = ({ href = "", to = "/", children }) => {
    if (href) {
        return (
            <a className="t--default button--darken" href={href} target="_blank" rel="noreferrer">
                {children}
            </a>
        );
    } else {
        return (
            <Link className="t--default button--darken" to={to}>
                {children}
            </Link>
        );
    }
};

const Hero: React.FunctionComponent = () => {
    return (
        <div className="hero">
            <div className="hero-title">Hello, I&apos;m Clarence. I like to build things.</div>
            <div className="hero-content">
                <div className="hero-content__image">
                    <img src={face} alt="face" />
                </div>
                <ul className="hero-content__text">
                    <li>Currently based in <Leenk to="/">&#128205;Vancouver, Canada</Leenk></li>
                    <li>Studying Electrical Engineering at the <Leenk href="https://ece.ubc.ca/undergraduates/programs/electrical-engineering-program/">&#127891;University of British Columbia</Leenk></li>
                    <li>Part of &nbsp;
                        <Leenk href="https://www.ubcbiztech.com/"><CustomIcon img={biztechLogo} /> UBC Biztech</Leenk>,&nbsp;
                        <Leenk href="https://www.akpsiubc.com/"><CustomIcon img={akpsiLogo} /> Alpha Kappa Psi</Leenk> Business Fraternity
                    </li>
                    <br />
                    <li>Doing work at <Leenk href="https://skyrocket.is/"><CustomIcon img={skyrocketLogo} /> Skyrocket Digital</Leenk></li>
                    <li>Looking for <Leenk href="https://drive.google.com/file/d/1Joy0TLwtRjUDR-ELOJdS9ZibIYoAIMcI/view?usp=sharing">&#128084;Co-op Internships</Leenk> for Summer 2022</li>
                    <li>Previously a Full-Stack Javascript Developer Co-op at <Leenk href="https://semios.com/"><CustomIcon img={semiosLogo} /> Semios</Leenk></li>
                </ul>

            </div>
        </div>);
};

export default Hero;
