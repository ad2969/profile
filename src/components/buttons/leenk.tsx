import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

interface LeenkProps {
    to?: string;
    href?: string;
    children: React.ReactNode;
}

const Leenk: React.FunctionComponent<LeenkProps> = ({ href = "", to = "/", children }) => {
    if (href) {
        return (
            <a className="t--default button--darken leenk" href={href} target="_blank" rel="noreferrer">
                {children}
            </a>
        );
    } else {
        return (
            <Link className="t--default button--darken leenk" to={to} target="_blank" rel="noopener noreferrer">
                {children}
            </Link>
        );
    }
};

export default Leenk;
