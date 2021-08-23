import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Layout from "../../components/layouts/magazine";
import City from "./city";
import ContactInfo from "./Info";
import ContactStatus from "./Status";

import "./styles.scss";

const Contact: React.FunctionComponent = () => {
    const history = useHistory();
    const doScroll = history.location.search.includes("status");

    // TODO: Get actual db data
    const [status, setStatus] = useState(false);

    return (
        <Layout className="Contact">
            <div className="city">
                <City status={status}/>
            </div>
            <ContactInfo />
            <div className="contact-divider"></div>
            <ContactStatus status={status} setStatus={setStatus} doScroll={doScroll}/>
        </Layout>
    );
};

export default Contact;
