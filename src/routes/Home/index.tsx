import React from "react";

import Layout from "../../components/layouts/magazine";
import Parallax from "./Parallax";
import Hero from "./Hero";

import "./styles.scss";

const Home: React.FunctionComponent = () => {
    return (
        <Layout className="Home">
            <Parallax />
            <Hero />
        </Layout>
    );
};

export default Home;
