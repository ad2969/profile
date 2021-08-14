import React from "react";

import Layout from "../../components/layouts/magazine";
import Parallax from "./Parallax";

import "./styles.scss";

const Home: React.FunctionComponent = () => {
    return (
        <Layout className="Home">
            <Parallax />
            <h1>HELLO</h1>
        </Layout>
    );
};

export default Home;
