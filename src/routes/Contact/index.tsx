import React from "react";

import Layout from "../../components/layouts/magazine";
import City from "./city";

import "./styles.scss";

const Contact: React.FunctionComponent = () => {
    return (
        <Layout className="Contact">
            <div className="city">
                <City />
            </div>
        </Layout>
    );
};

export default Contact;
