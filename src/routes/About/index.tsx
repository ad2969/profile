import React from "react";

import CustomIcon from "../../components/media/customImageIcon";
import Leenk from "../../components/buttons/leenk";

import akpsiLogo from "../../assets/images/logos/akpsi-logo.png";
import biztechLogo from "../../assets/images/logos/biztech-logo.png";
import ctcfLogo from "../../assets/images/logos/ctcf-logo.png";
import emlLogo from "../../assets/images/logos/eml-logo.png";
import hackthenorthLogo from "../../assets/images/logos/hackthenorth-logo.png";
import jtoonLogo from "../../assets/images/logos/jtoon-logo.png";
import semiosLogo from "../../assets/images/logos/semios-logo.png";
import skyrocketLogo from "../../assets/images/logos/skyrocket-logo.png";
import turingLogo from "../../assets/images/logos/turing-logo.png";
import ubcLogo from "../../assets/images/logos/ubc-logo.png";

import "./styles.scss";

const About: React.FunctionComponent = () => {
    return (
        <div className="Route About">
            <ul className="about__timeline">
                <li>
                    <strong>&apos;16</strong>&nbsp;-&nbsp;
                    Graduated from <Leenk href="https://www.acsjakarta.sch.id">&#127979;ACS Jakarta</Leenk> High School,&nbsp;
                    interned at <Leenk href="https://www.jtoon.net/"><CustomIcon img={jtoonLogo} />&nbsp; PT. PKG (now JToon Studios)</Leenk>
                </li>

                <li>
                    <strong>&apos;17</strong>&nbsp;-&nbsp;
                    Moved to <Leenk to="/contact?status">&#128205;Vancouver, Canada</Leenk>&nbsp;
                    and began attending <Leenk href="https://ece.ubc.ca/undergraduates/programs/electrical-engineering-program/">
                        <CustomIcon img={ubcLogo} /> University of British Columbia
                    </Leenk>
                </li>

                <li>
                    <strong>&apos;18</strong>&nbsp;-&nbsp;
                    Ran a <Leenk href="https://studentworks.ca/">&#x1F58C;summer painting franchise</Leenk>
                </li>

                <li>
                    <strong>&apos;19</strong>&nbsp;-&nbsp;
                    Made my <Leenk href="https://ad2969-2019-og.netlify.app/">&#127760;first website</Leenk>,&nbsp;
                    built apps for &nbsp;
                    <Leenk href="https://turing-club.github.io/"><CustomIcon img={turingLogo} /> UBC Turing Club</Leenk>&nbsp;
                    and <Leenk href="http://eml.ubc.ca/projects-2/"><CustomIcon img={emlLogo} /> Emerging Media Lab</Leenk>,&nbsp;
                    joined <Leenk href="http://www.akpsiubc.com/"><CustomIcon img={akpsiLogo} /> Alpha Kappa Psi</Leenk> (Omega Gamma Chapter)
                </li>

                <li>
                    <strong>&apos;20</strong>&nbsp;-&nbsp;
                    Interned at <Leenk href="https://semios.com/"><CustomIcon img={semiosLogo} /> Semios</Leenk>,&nbsp;
                    ran <Leenk href="https://semios.com/">&#x1f4c8;VIBEVENT</Leenk>,&nbsp;
                    built apps for &nbsp;
                    <Leenk href="https://www.ubcbiztech.com/"><CustomIcon img={ctcfLogo} /> CTCF</Leenk>&nbsp;
                    and <Leenk href="https://www.akpsiubc.com/"><CustomIcon img={biztechLogo} /> UBC Biztech</Leenk>,&nbsp;
                    won <Leenk href="/">&#127942;some competitions</Leenk>
                </li>

                <li>
                    <strong>&apos;21</strong>&nbsp;-&nbsp;
                    Mentored for <Leenk href="https://hackthenorth.com/"><CustomIcon img={hackthenorthLogo} /> Hack the North</Leenk>,&nbsp;
                    joined <Leenk href="https://skyrocket.is/"><CustomIcon img={skyrocketLogo} /> Skyrocket Digital</Leenk>
                </li>
            </ul>
        </div>
    );
};

export default About;
