import React, { useEffect } from "react";

import "./styles.scss";
import Leenk from "components/buttons/leenk";

interface Props {
    status: boolean;
    doScroll: boolean;
}

const ContactStatus: React.FunctionComponent<Props> = ({ status, doScroll }) => {
    const statusDiv = status
        ? <span className="active">ONLINE</span>
        : <span className="inactive">AFK</span>;

    useEffect(() => {
        if (!doScroll) return;
        const scrollNode = document.getElementById("contact-status");
        if (scrollNode) scrollNode.scrollIntoView({ behavior: "smooth" });
    }, [doScroll]);

    return (
        <div className="contact-status" id="contact-status">
            <div className="contact-status__location">&#128205;Vancouver, Canada</div>
            <div className="contact-status__text">Currently {statusDiv}</div>
            <div className="contact-status__availability">My working hours are Monday to Friday, 09:00 - 18:00 (PST)</div>
            <Leenk
                accent={!status}
                href={process.env.REACT_APP_BOOKING_URL}
            >&gt; Book a Meeting &lt;</Leenk>
        </div>
    );
};

export default ContactStatus;
