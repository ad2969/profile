import React from "react";

import Layout from "../../components/layouts/magazine";
import City from "./city";
import ContactInfo from "./Info";
import ContactStatus from "./Status";

import "./styles.scss";

const Contact: React.FunctionComponent = () => {
    return (
        <Layout className="Contact">
            <div className="city">
                <City />
            </div>
            <ContactInfo />
            <div className="contact-divider"></div>
            <ContactStatus />
        </Layout>
    );
};

export default Contact;
