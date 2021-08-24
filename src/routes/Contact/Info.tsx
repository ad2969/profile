import React from "react";

import IconButton from "../../components/buttons/iconButton";
import TooltipButton from "../../components/buttons/tooltipButton";
import MouseScroll from "../../components/ui/mouseScroll";

import InstagramLogo from "../../assets/svg/instagram";
import LinkedinLogo from "../../assets/svg/linkedin";
import MailLogo from "../../assets/svg/mail";
import TwitterLogo from "../../assets/svg/twitter";
import CalendarLogo from "../../assets/svg/calendar";
import SpotifyLogo from "../../assets/svg/spotify";

import COLORS from "../../styles/themes/_default.module.scss";
import "./styles.scss";

const ContactInfo: React.FunctionComponent = () => {
    return (
        <div className="contact-info">
            <div className="contact-info__hero">
                <div className="contact-info__hero-title">Get in touch</div>
                <div className="contact-info__hero-text">Want to work with me? Have a project in mind? Simply want to chat?</div>
                <div className="contact-info__hero-buttons">
                    <IconButton
                        icon={MailLogo} strokeColor={COLORS.primary} hoverColor={COLORS.white}
                        url="mailto:clarenceadrian@alumni.ubc.ca"
                    />
                    <IconButton
                        icon={LinkedinLogo} strokeColor={COLORS.primary} hoverColor={COLORS.white}
                        url="https://www.linkedin.com/in/clarence-adrian/"
                    />
                    <IconButton
                        icon={TwitterLogo} strokeColor={COLORS.primary} hoverColor={COLORS.white}
                        url="https://twitter.com/ad2969"
                    />
                    <IconButton
                        icon={InstagramLogo} strokeColor={COLORS.primary} hoverColor={COLORS.white}
                        url="https://www.instagram.com/ad2969_/"
                    />
                </div>
            </div>

            <div className="contact-info__mouse-scroll"><MouseScroll /></div>

            <div className="contact-info__more-links">
                <TooltipButton
                    icon={SpotifyLogo} strokeColor={COLORS.primary} hoverColor={COLORS.white}
                    url="https://open.spotify.com/user/21zjm64qokoaly5je5kostekq" tooltipText="My Playlists"
                />
                <TooltipButton
                    icon={CalendarLogo} strokeColor={COLORS.primary} hoverColor={COLORS.white}
                    url="https://calendar.google.com/calendar/embed?src=clarence.ad29@gmail.com&ctz=America/Vancouver&mode=WEEK&title=Clarence%27s%20Schedule" tooltipText="My Calendar"
                />
            </div>

        </div>
    );
};

export default ContactInfo;
