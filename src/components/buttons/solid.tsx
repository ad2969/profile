import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

interface SolidProps {
    to?: string;
    href?: string;
    children: React.ReactNode;
    accent?: boolean;
}

const SolidButton: React.FunctionComponent<SolidProps> = ({ href = "", to = "/", children, accent }) => {
    if (href) {
        return (
            <a className={`t--default button solid ${accent ? "accent" : ""}`} href={href} target="_blank" rel="noreferrer">
                {children}
            </a>
        );
    } else {
        return (
            <Link className={`t--default button solid ${accent && "accent"}`} to={to} target="_blank" rel="noopener noreferrer">
                {children}
            </Link>
        );
    }
};

export default SolidButton;
