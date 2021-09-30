import React from "react";

import Parallax from "./Parallax";
import Hero from "./Hero";

import "./styles.scss";

const Home: React.FunctionComponent = () => {
    return (
        <div className="Route Home">
            <Parallax />
            <div className="Home-content">
                <Hero />
            </div>
        </div>
    );
};

export default Home;
