import React, { useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import BREAKPOINTS from "../../styles/mixins/_breakpoints.module.scss";
import "./styles.scss";

const Header: React.FunctionComponent = () => {
    const [doShowAll, setDoShowAll] = useState(false);

    useLayoutEffect(() => {
        const updateHeader = () => {
            const breakpoint = parseInt(BREAKPOINTS.tablet.replace("px", ""));
            if (window.innerWidth < breakpoint) setDoShowAll(false);
            else if (window.innerWidth >= breakpoint) setDoShowAll(true);
        };
        window.addEventListener("resize", updateHeader);
        updateHeader();
        return () => window.removeEventListener("resize", updateHeader);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="Header-fixed flex-center">
            <div className="header__links">
                {doShowAll && <span className="header__link button--scale">
                    <NavLink
                        className="t--default t--lowercase t--unselectable"
                        activeClassName="selected"
                        to="/" exact
                    >at a glance</NavLink>
                </span>}
                {doShowAll && <span className="header__link button--scale">
                    <NavLink
                        className="t--default t--lowercase t--unselectable"
                        activeClassName="selected"
                        to="/contact" exact
                    >contact</NavLink>
                </span>}
                <span className="header__link button--scale">
                    <span className="t--default t--lowercase t--unselectable">menu</span>
                </span>
            </div>
        </div>
    );
};

export default Header;