import React from "react";

import "./styles.scss";

const ContactStatus: React.FunctionComponent = () => {
    const status = false;
    const statusDiv = status
        ? <span className="active button">ONLINE</span>
        : <span className="inactive button">AFK</span>;

    return (
        <div className="contact-status">
            <div className="contact-status__location">&#128205;Vancouver, Canada</div>
            <div className="contact-status__text">I am currently {statusDiv}</div>
        </div>
    );
};

export default ContactStatus;
