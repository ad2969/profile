import React from "react";
import { useHistory } from "react-router-dom";

import Logo from "../../assets/svg/logo";

import "./styles.scss";

const HeaderLogo: React.FunctionComponent = () => {
    const history = useHistory();

    return (
        <div className="Header-logo">
            <Logo className="button--scale" onClick={() => { history.push("/"); }} />
        </div>
    );
};

export default HeaderLogo;
