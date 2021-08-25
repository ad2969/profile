import React from "react";

import HeaderLogo from "../../components/header/headerLogo";
import Parallax from "./Parallax";
import Hero from "./Hero";

import "./styles.scss";

const Home: React.FunctionComponent = () => {
    return (
        <div className="Home">
            <HeaderLogo />
            <Parallax />
            <Hero />
        </div>
    );
};

export default Home;
