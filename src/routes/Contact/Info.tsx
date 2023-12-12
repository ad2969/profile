import React from "react";

// import IconButton from "../../components/buttons/iconButton";
import TooltipButton from "../../components/buttons/tooltipButton";
import MouseScroll from "../../components/ui/mouseScroll";
import LoadSpinner from "../../components/ui/loadSpinner";

import EmailLogo from "../../assets/svg/logos/email";
import GithubLogo from "../../assets/svg/logos/github";
import LinkedinLogo from "../../assets/svg/logos/linkedin";
import SpotifyLogo from "../../assets/svg/logos/spotify";

import { LINKEDIN, GITHUB, SPOTIFY, EMAIL__DEV } from "../../assets/links";

import COLORS from "../../styles/themes/_default.module.scss";
import "./styles.scss";

interface Props {
    statusLoaded: boolean
}

const ContactInfo: React.FunctionComponent<Props> = ({ statusLoaded }) => {
    return (
        <div className="contact-info">
            <div className="contact-info__hero">
                <div className="contact-info__hero-title">Welcome, stranger!</div>
                <div className="contact-info__hero-text">
                    I&apos;m Clarence, and I like to build things.
                </div>
                {/* <div className="contact-info__hiring-bubble button">
                    <a className="t--default contact-info__hiring-bubble__text" href="https://drive.google.com/file/d/1eT5cDgOwDseLEzERlJJ7jEC1SJy54zGu/view?usp=sharing" target="_blacnk" rel="noreferrer">Hiring? Download <span>my resume</span> here</a>
                    <a className="t--default contact-info__hiring-bubble__text-mobile" href="https://drive.google.com/file/d/1eT5cDgOwDseLEzERlJJ7jEC1SJy54zGu/view?usp=sharing" target="_blacnk" rel="noreferrer">Hiring?</a>
                </div> */}
                <div className="contact-info__hero-buttons">
                    <TooltipButton
                        icon={LinkedinLogo} strokeColor={COLORS.primary} hoverColor={COLORS.white}
                        url={LINKEDIN} tooltipText="Linkedin" direction="right"
                    />
                    <TooltipButton
                        icon={GithubLogo} strokeColor={COLORS.primary} hoverColor={COLORS.white}
                        url={GITHUB} tooltipText="Github" direction="right"
                    />
                    <TooltipButton
                        icon={SpotifyLogo} strokeColor={COLORS.primary} hoverColor={COLORS.white}
                        url={SPOTIFY} tooltipText="Spotify" direction="right"
                    />
                    <TooltipButton
                        icon={EmailLogo} strokeColor={COLORS.primary} hoverColor={COLORS.white}
                        url={`mailto:${EMAIL__DEV}`} tooltipText="Email" direction="right"
                    />
                </div>
            </div>

            <div className="contact-info__mouse-scroll" id="contact-mouse-scroll">
                {statusLoaded ? <MouseScroll /> : <LoadSpinner />}
            </div>
        </div>
    );
};

export default ContactInfo;
