import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const Header: React.FunctionComponent = () => {
    return (
        <ul className="Header flex-center">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/auth/home">AuthHome</Link></li>
            <li><Link to="/404">NotFound</Link></li>
        </ul>
    );
};

export default Header;
