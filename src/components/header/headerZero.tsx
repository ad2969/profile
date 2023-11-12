import React from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/svg/logo";
import "./styles.scss";

const Header: React.FunctionComponent = () => {
    const navigate = useNavigate();
    return (
        <div className="Header Header-zero">
            <Logo className="header-logo button--scale" onClick={() => { navigate("/"); }} />
        </div>
    );
};

export default Header;
