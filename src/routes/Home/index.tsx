import React from "react";

import Parallax from "./Parallax";
import Hero from "./Hero";

import "./styles.scss";

const Home: React.FunctionComponent = () => {
    return (
        <div className="Home">
            <Parallax />
            <Hero />
        </div>
    );
};

export default Home;
