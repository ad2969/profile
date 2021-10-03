import React, { useEffect } from "react";

import COLORS from "../../styles/themes/_default.module.scss";
import "./styles.scss";

interface Props {
    status: boolean;
    doScroll: boolean;
}

const ContactStatus: React.FunctionComponent<Props> = ({ status, doScroll }) => {
    const statusDiv = status
        ? <span className="active">ONLINE</span>
        : <span className="inactive">AFK</span>;

    const availabilityTextStyle = { "--text-color": status ? COLORS.primary : COLORS.accent };

    useEffect(() => {
        if (!doScroll) return;
        const scrollNode = document.getElementById("contact-status");
        if (scrollNode) scrollNode.scrollIntoView({ behavior: "smooth" });
    }, [doScroll]);

    return (
        <div className="contact-status" id="contact-status">
            <div className="contact-status__location">&#128205;Vancouver, Canada</div>
            <div className="contact-status__text">Currently {statusDiv}</div>
            <div className="contact-status__availability">My Working Hours are Mon to Fri: 0900 - 1800</div>
            <a className="contact-status__availability t--default button"
                // @ts-ignore
                style={availabilityTextStyle}
                href="https://calendar.google.com/calendar/embed?src=clarence.ad29@gmail.com&ctz=America/Vancouver&mode=WEEK&title=Clarence%27s%20Schedule"
                target="_blank" rel="noreferrer"
            >&gt; See my public schedule &lt;</a>
        </div>
    );
};

export default ContactStatus;
