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

import MusclesImage from "../../assets/images/humanoid/muscles.png";
import CirculatoryImage from "../../assets/images/humanoid/circulatory.png";
import SkeletonImage from "../../assets/images/humanoid/skeleton.png";

const Info: React.FunctionComponent = () => {
    const imageLayerHover = (variant) => {
        document.getElementById(`home-info__text-strengths--${variant}`)?.classList.toggle("active");
    };

    return (
        <div className="home-info">
            <div></div>
            <p>I’m Clarence, but people like to call me AD. I’m an engineering student interested in  consulting, entrepreneurship, and all things product development. Simply put, <strong>I like to build things.</strong></p>
            <div className="home-info__timeline-content">
                <div className="home-info__image" id="humanoid-image-wrapper">
                    <img className="home-info__image--muscles"
                        src={MusclesImage} alt="humanoid-1" draggable="false"
                        onMouseEnter={() => imageLayerHover("muscles")} onMouseLeave={() => imageLayerHover("muscles")}/>
                    <img className="home-info__image--circulatory"
                        src={CirculatoryImage} alt="humanoid-2" draggable="false"
                        onMouseEnter={() => imageLayerHover("circulatory")} onMouseLeave={() => imageLayerHover("circulatory")}/>
                    <img className="home-info__image--skeleton"
                        src={SkeletonImage} alt="humanoid-3" draggable="false"
                        onMouseEnter={() => imageLayerHover("skeleton")} onMouseLeave={() => imageLayerHover("skeleton")}/>
                </div>
                <ul className="home-info__timeline">
                    <div className="">What I&apos;ve been up to:</div>

                    <br/>

                    <li>
                        <strong>&apos;16</strong>&nbsp;-&nbsp;
                        Graduated from <Leenk href="https://www.acsjakarta.sch.id">&#127979;ACS Jakarta</Leenk> High School,&nbsp;
                        interned at <Leenk href="https://www.jtoon.net/"><CustomIcon img={jtoonLogo} />&nbsp; PT. PKG (now JToon Studios)</Leenk>
                    </li>

                    <br />

                    <li>
                        <strong>&apos;17</strong>&nbsp;-&nbsp;
                        Moved to <Leenk href="/">&#128205;Vancouver, Canada</Leenk>&nbsp;
                        and began attending <Leenk href="https://ece.ubc.ca/undergraduates/programs/electrical-engineering-program/">
                            <CustomIcon img={ubcLogo} /> University of British Columbia
                        </Leenk>
                    </li>

                    <br />

                    <li>
                        <strong>&apos;18</strong>&nbsp;-&nbsp;
                        Ran a <Leenk href="https://studentworks.ca/">&#x1F58C;summer painting franchise</Leenk>
                    </li>

                    <br />

                    <li>
                        <strong>&apos;19</strong>&nbsp;-&nbsp;
                        Made my <Leenk href="https://ad2969-2019-og.netlify.app/">&#127760;first website</Leenk>,&nbsp;
                        built apps for &nbsp;
                        <Leenk href="https://turing-club.github.io/"><CustomIcon img={turingLogo} /> UBC Turing Club</Leenk>&nbsp;
                        and <Leenk href="http://eml.ubc.ca/projects-2/"><CustomIcon img={emlLogo} /> Emerging Media Lab</Leenk>,&nbsp;
                        Joined <Leenk href="http://www.akpsiubc.com/"><CustomIcon img={akpsiLogo} /> Alpha Kappa Psi</Leenk> (Omega Gamma Chapter)
                    </li>

                    <br />

                    <li>
                        <strong>&apos;20</strong>&nbsp;-&nbsp;
                        Interned at <Leenk href="https://semios.com/"><CustomIcon img={semiosLogo} /> Semios</Leenk>,&nbsp;
                        ran <Leenk href="https://semios.com/">&#x1f4c8;VIBEVENT</Leenk>,&nbsp;
                        built apps for &nbsp;
                        <Leenk href="https://www.ubcbiztech.com/"><CustomIcon img={ctcfLogo} /> CTCF</Leenk>&nbsp;
                        and <Leenk href="https://www.akpsiubc.com/"><CustomIcon img={biztechLogo} /> UBC Biztech</Leenk>,&nbsp;
                        won <Leenk href="/">&#127942;some competitions</Leenk>
                    </li>

                    <br />

                    <li>
                        <strong>&apos;21</strong>&nbsp;-&nbsp;
                        Mentored for <Leenk href="https://hackthenorth.com/"><CustomIcon img={hackthenorthLogo} /> Hack the North</Leenk>,&nbsp;
                        joined <Leenk href="https://skyrocket.is/"><CustomIcon img={skyrocketLogo} /> Skyrocket Digital</Leenk>
                    </li>

                    <br />
                    <br />

                    <div className="home-info__timeline-button button">&gt; See a full list of my experiences &lt;</div>
                </ul>
            </div>

            <div className="humanoid-divider" id="humanoid-divider"></div>

            <div className="home-info__strengths-content">
                <div className="home-info__image strengths"></div>
                <ul className="home-info__strengths" id="home-info__strengths-text">
                    <div className="">How I&apos;d describe myself:</div>

                    <br/>

                    <li id="home-info__strengths--skeleton">
                        <span className="taitul t--bold">CURIOUS.</span>&nbsp;
                        I love learning new things and gaining new perspectives. I believe that curiosity is what drives human achievement and I am always in a constant search to establish a deeper understanding of the world and how it works.
                    </li>

                    <br />

                    <li id="home-info__strengths--circulatory">
                        <span className="taitul t--bold">DEDICATED.</span>&nbsp;
                        I am willing to go the extra mile to ensure that the challenges I take on are completed to satisfaction. I take pride in the work I do and strive to exceed the average.
                    </li>

                    <br />

                    <li id="home-info__strengths--muscles">
                        <span className="taitul t--bold">ORGANIZED.</span>&nbsp;
                        I am exceptionally great at planning and maintaining organization. I enjoy streamlining processes to increase convenience and optimize efficiency.
                    </li>
                </ul>
            </div>
        </div>);
};

export default Info;
