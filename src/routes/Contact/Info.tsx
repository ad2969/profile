import React from "react";

// import IconButton from "../../components/buttons/iconButton";
import TooltipButton from "../../components/buttons/tooltipButton";
import MouseScroll from "../../components/ui/mouseScroll";
import LoadSpinner from "../../components/ui/loadSpinner";

import InstagramLogo from "../../assets/svg/icons/instagram";
import LinkedinLogo from "../../assets/svg/icons/linkedin";
// import MailLogo from "../../assets/svg/icons/mail";
import TwitterLogo from "../../assets/svg/icons/twitter";
// import CalendarLogo from "../../assets/svg/calendar";
import SpotifyLogo from "../../assets/svg/icons/spotify";

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
                    <a className="t--default button" href="mailto:clarenceadrian@alumni.ubc.ca">Send me a message</a> or get to know me on social media!
                </div>
                <div className="contact-info__hiring-bubble button">
                    <a className="t--default contact-info__hiring-bubble__text" href="https://drive.google.com/file/d/1Joy0TLwtRjUDR-ELOJdS9ZibIYoAIMcI/view">Hiring? Download <span>my resume</span> here</a>
                    <a className="t--default contact-info__hiring-bubble__text-mobile" href="https://drive.google.com/file/d/1Joy0TLwtRjUDR-ELOJdS9ZibIYoAIMcI/view">Hiring?</a>
                </div>
                <div className="contact-info__hero-buttons">
                    <TooltipButton
                        icon={LinkedinLogo} strokeColor={COLORS.primary} hoverColor={COLORS.white}
                        url="https://www.linkedin.com/in/clarence-adrian/" tooltipText="Linkedin" direction="right"
                    />
                    <TooltipButton
                        icon={TwitterLogo} strokeColor={COLORS.primary} hoverColor={COLORS.white}
                        url="https://twitter.com/ad2969" tooltipText="Twitter" direction="right"
                    />
                    <TooltipButton
                        icon={InstagramLogo} strokeColor={COLORS.primary} hoverColor={COLORS.white}
                        url="https://www.instagram.com/ad2969_/" tooltipText="Instagram" direction="right"
                    />
                    <TooltipButton
                        icon={SpotifyLogo} strokeColor={COLORS.primary} hoverColor={COLORS.white}
                        url="https://open.spotify.com/user/21zjm64qokoaly5je5kostekq" tooltipText="Spotify" direction="right"
                    />
                </div>
            </div>

            <div className="contact-info__mouse-scroll" id="contact-mouse-scroll">
                {statusLoaded ? <MouseScroll /> : <LoadSpinner />}
            </div>

            {/* <div className="contact-info__more-links">
                <TooltipButton
                    icon={SpotifyLogo} strokeColor={COLORS.black} hoverColor={COLORS.primary}
                    url="https://open.spotify.com/user/21zjm64qokoaly5je5kostekq" tooltipText="My Playlists"
                />
                <TooltipButton
                    icon={CalendarLogo} strokeColor={COLORS.black} hoverColor={COLORS.primary}
                    url="https://calendar.google.com/calendar/embed?src=clarence.ad29@gmail.com&ctz=America/Vancouver&mode=WEEK&title=Clarence%27s%20Schedule" tooltipText="My Calendar"
                />
            </div> */}

        </div>
    );
};

export default ContactInfo;
