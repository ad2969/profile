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
            <div className="about__timeline">
                <div className="about__timeline__era">
                    <span className="about__timeline__era__year t--bold">&apos;16</span>
                    <ul className="about__timeline__era__content">
                        <li>Graduated from <Leenk href="https://www.acsjakarta.sch.id">&#127979;ACS Jakarta</Leenk> High School with an IB diploma</li>
                        <li>interned at <Leenk href="https://www.jtoon.net/"><CustomIcon img={jtoonLogo} />&nbsp; PT. PKG (now JToon Studios)</Leenk></li>
                    </ul>
                </div>

                <div className="about__timeline__era">
                    <span className="about__timeline__era__year t--bold">&apos;17</span>
                    <ul className="about__timeline__era__content">
                        <li>Moved to <Leenk to="/contact?status">&#128205;Vancouver, Canada</Leenk> and began attending&nbsp;
                            <Leenk href="https://www.ubc.ca/"><CustomIcon img={ubcLogo} /> University of British Columbia</Leenk>
                        </li>
                    </ul>
                </div>

                <div className="about__timeline__era">
                    <span className="about__timeline__era__year t--bold">&apos;18</span>
                    <ul className="about__timeline__era__content">
                        <li>Specialized studies in Electrical Engineering</li>
                        <li>Ran a <Leenk href="https://studentworks.ca/">&#x1F58C;summer painting franchise</Leenk> (worth &gt;CAD 50,000) with a 90% customer satisfaciton rate</li>
                    </ul>
                </div>

                <div className="about__timeline__era">
                    <span className="about__timeline__era__year t--bold">&apos;19</span>
                    <ul className="about__timeline__era__content">
                        <li>Started learning web development and built <Leenk href="https://github.com/ad2969/finanx">&#127760;my first web application</Leenk></li>
                        <li>Started building apps for &nbsp;
                            <Leenk href="https://turing-club.github.io/"><CustomIcon img={turingLogo} /> UBC Turing Club</Leenk>&nbsp;
                            and <Leenk href="http://eml.ubc.ca/projects-2/"><CustomIcon img={emlLogo} /> Emerging Media Lab</Leenk>
                        </li>
                        <li>Initiated in Phi Class of <Leenk href="http://www.akpsiubc.com/"><CustomIcon img={akpsiLogo} /> Alpha Kappa Psi</Leenk> (Omega Gamma Chapter)</li>
                    </ul>
                </div>

                <div className="about__timeline__era">
                    <span className="about__timeline__era__year t--bold">&apos;20</span>
                    <ul className="about__timeline__era__content">
                        <li>Interned at <Leenk href="https://semios.com/"><CustomIcon img={semiosLogo} /> Semios</Leenk> as a full-stack-developer</li>
                        <li>Founded and ran <Leenk href="https://semios.com/">&#x1f4c8;VIBEVENT</Leenk> to help student-run clubs migrate to virtual events</li>
                        <li>Built and launched an Drug Overdose Prevention mobile app for <Leenk href="https://www.ubcbiztech.com/"><CustomIcon img={ctcfLogo} /> CTCT</Leenk> (valued at &gt;USD 60,000)</li>
                        <li>Refactored <Leenk href="https://www.akpsiubc.com/"><CustomIcon img={biztechLogo} /> UBC Biztech</Leenk>&apos;s applications and development process</li>
                        <li>Participated in some competitions and hackathons, including&nbsp;
                            <Leenk href="https://www.facebook.com/BizTechUBC/posts/-we-are-excited-to-announce-the-winning-teams-for-deloitte-thinktech-2020-congra/3797002770330706/">Deloitte ThinkTECH</Leenk> (1st place),&nbsp;
                            <Leenk href="https://devpost.com/software/university-path-explorer">OakHacks</Leenk> (1st place), and&nbsp;
                            <Leenk href="https://devpost.com/software/nudge-txm34z">nwHacks</Leenk> (Wolfram Award)
                        </li>
                    </ul>
                </div>

                <div className="about__timeline__era">
                    <span className="about__timeline__era__year t--bold">&apos;21</span>
                    <ul className="about__timeline__era__content">
                        <li>Mentored for <Leenk href="https://hackthenorth.com/"><CustomIcon img={hackthenorthLogo} /> Hack the North</Leenk> 2021</li>
                        <li>Joined <Leenk href="https://skyrocket.is/"><CustomIcon img={skyrocketLogo} /> Skyrocket Digital</Leenk> as a frontend developer</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
