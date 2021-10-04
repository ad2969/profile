import React from "react";
import { useHistory } from "react-router-dom";

import Logo from "../../assets/svg/logo";
import "./styles.scss";

const Header: React.FunctionComponent = () => {
    const history = useHistory();
    return (
        <div className="Header Header-zero">
            <Logo className="header-logo button--scale" onClick={() => { history.push("/"); }} />
        </div>
    );
};

export default Header;
