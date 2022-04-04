import React from "react";

// import IconButton from "../../components/buttons/iconButton";
import TooltipButton from "../../components/buttons/tooltipButton";
import MouseScroll from "../../components/ui/mouseScroll";
import LoadSpinner from "../../components/ui/loadSpinner";
import Leenk from "../../components/buttons/leenk";

import InstagramLogo from "../../assets/svg/logos/instagram";
import LinkedinLogo from "../../assets/svg/logos/linkedin";
import TwitterLogo from "../../assets/svg/logos/twitter";
import SpotifyLogo from "../../assets/svg/logos/spotify";

import { LINKEDIN, TWITTER, INSTAGRAM, SPOTIFY } from "../../assets/links";

import COLORS from "../../styles/themes/_default.module.scss";
import "./styles.scss";

interface Props {
    statusLoaded: boolean
}

const ContactInfo: React.FunctionComponent<Props> = ({ statusLoaded }) => {
    return (
        <div className="contact-info">
            <div className="contact-info__hero">
                <div className="contact-info__hero-title">Get in touch</div>
                <div className="contact-info__hero-text">
                    Want to work with me? Have a project in mind? Simply want to chat?
                    <br/>
                    <Leenk href="mailto:clarenceadrian@alumni.ubc.ca">Send me a message</Leenk> or get to know me on social media!
                </div>
                <div className="contact-info__hiring-bubble button">
                    <a className="t--default contact-info__hiring-bubble__text" href="https://drive.google.com/file/d/1eT5cDgOwDseLEzERlJJ7jEC1SJy54zGu/view?usp=sharing" target="_blacnk" rel="noreferrer">Hiring? Download <span>my resume</span> here</a>
                    <a className="t--default contact-info__hiring-bubble__text-mobile" href="https://drive.google.com/file/d/1eT5cDgOwDseLEzERlJJ7jEC1SJy54zGu/view?usp=sharing" target="_blacnk" rel="noreferrer">Hiring?</a>
                </div>
                <div className="contact-info__hero-buttons">
                    <TooltipButton
                        icon={LinkedinLogo} strokeColor={COLORS.primary} hoverColor={COLORS.white}
                        url={LINKEDIN} tooltipText="Linkedin" direction="right"
                    />
                    <TooltipButton
                        icon={TwitterLogo} strokeColor={COLORS.primary} hoverColor={COLORS.white}
                        url={TWITTER} tooltipText="Twitter" direction="right"
                    />
                    <TooltipButton
                        icon={InstagramLogo} strokeColor={COLORS.primary} hoverColor={COLORS.white}
                        url={INSTAGRAM} tooltipText="Instagram" direction="right"
                    />
                    <TooltipButton
                        icon={SpotifyLogo} strokeColor={COLORS.primary} hoverColor={COLORS.white}
                        url={SPOTIFY} tooltipText="Spotify" direction="right"
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
