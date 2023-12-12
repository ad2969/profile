import React from "react";

import Leenk from "../../components/buttons/leenk";
import TooltipButton from "../../components/buttons/tooltipButton";

import EmailLogo from "../../assets/svg/logos/email";
import GithubLogo from "../../assets/svg/logos/github";
import LinkedinLogo from "../../assets/svg/logos/linkedin";
import SpotifyLogo from "../../assets/svg/logos/spotify";
import Logo from "../../assets/svg/logo";

import { LINKEDIN, SPOTIFY, EMAIL__DEV, GITHUB } from "../../assets/links";

import COLORS from "../../styles/themes/_default.module.scss";

const Footer: React.FunctionComponent = () => {
    return (
        <div className="home-footer">
            <hr />
            <div className="home-footer-content">
                <Logo color1={COLORS.black} color2={COLORS.black}/>
                <p>Designed and built by me, 2021</p>
                <Leenk href="mailto:clarenceadrian@alumni.ubc.ca">clarenceadrian@alumni.ubc.ca</Leenk>
                <div className="home-footer-space"></div>
                <div className="home-footer__buttons">
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
                <div className="home-footer-space"></div>
                <p>My website and brand are always a WIP, so feel free to share your thoughts</p>
            </div>
        </div>);
};

export default Footer;
