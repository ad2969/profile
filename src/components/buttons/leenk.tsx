import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

interface LeenkProps {
    to?: string;
    href?: string;
    children: React.ReactNode;
    accent?: boolean;
}

const Leenk: React.FunctionComponent<LeenkProps> = ({ href = "", to = "/", children, accent }) => {
    if (href) {
        return (
            <a className={`t--default button leenk ${accent ? "accent" : ""}`} href={href} target="_blank" rel="noreferrer">
                {children}
            </a>
        );
    } else {
        return (
            <Link className={`t--default button leenk ${accent && "accent"}`} to={to} target="_blank" rel="noopener noreferrer">
                {children}
            </Link>
        );
    }
};

export default Leenk;
