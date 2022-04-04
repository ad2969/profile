import React from "react";

import Leenk from "../../components/buttons/leenk";
import TooltipButton from "../../components/buttons/tooltipButton";

import InstagramLogo from "../../assets/svg/logos/instagram";
import LinkedinLogo from "../../assets/svg/logos/linkedin";
import TwitterLogo from "../../assets/svg/logos/twitter";
import SpotifyLogo from "../../assets/svg/logos/spotify";
import Logo from "../../assets/svg/logo";

import { LINKEDIN, TWITTER, INSTAGRAM, SPOTIFY } from "../../assets/links";

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
                <div className="home-footer-space"></div>
                <p>My website and brand are always a WIP, so feel free to share your thoughts</p>
            </div>
        </div>);
};

export default Footer;
