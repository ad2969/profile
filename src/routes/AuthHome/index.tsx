import React from "react";

import logo from "../../assets/logo.svg";
import "./styles.scss";

const AuthHome: React.FunctionComponent = () => {
    return (
        <div className="Page AuthHome">
            <h2>Welcome to Authenticated Home</h2>
            <img src={logo} className="React-logo" alt="logo" />
        </div>
    );
};

export default AuthHome;
