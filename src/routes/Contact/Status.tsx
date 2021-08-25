import React, { useEffect } from "react";

import "./styles.scss";

interface Props {
    status: boolean;
    doScroll: boolean;
}

const ContactStatus: React.FunctionComponent<Props> = ({ status, doScroll }) => {
    const statusDiv = status
        ? <span className="active button">ONLINE</span>
        : <span className="inactive button">AFK</span>;

    useEffect(() => {
        if (!doScroll) return;
        const scrollNode = document.getElementById("contact-status");
        if (scrollNode) scrollNode.scrollIntoView();
    }, [doScroll]);

    return (
        <div className="contact-status" id="contact-status">
            <div className="contact-status__location">&#128205;Vancouver, Canada</div>
            <div className="contact-status__text">Currently {statusDiv}</div>
        </div>
    );
};

export default ContactStatus;
