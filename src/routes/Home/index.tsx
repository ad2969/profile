import React from "react";

import logo from "../../assets/logo.svg";
import "./styles.scss";

const Home: React.FunctionComponent = () => {
    return (
        <div className="Page Home">
            <h2>Welcome to Public Home</h2>
            <img src={logo} className="React-logo" alt="logo" />
        </div>
    );
};

export default Home;
