import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Logo from "../../assets/svg/logo";
// import MenuButton from "../../assets/svg/buttons/menuButton";

// import COLORS from "../../styles/themes/_default.module.scss";
import "./styles.scss";

interface Props {
    variation?: string;
}

const LINK_VARIATIONS = {
    main: [
        {
            text: "at a glance",
            url: "/at-a-glance"
        },
        {
            text: "contact",
            url: "/"
        }
    ]
};

const Header: React.FunctionComponent<Props> = ({ variation = "main" }) => {
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="Header Header-fixed">
            <Logo className="header-logo button--scale" onClick={() => { navigate("/"); }} />

            <span className="header-links">
                {LINK_VARIATIONS[variation] && LINK_VARIATIONS[variation].map((link) => (
                    <NavLink
                        key={link.url}
                        className={({ isActive }) => "header__link button--scale t--default t--lowercase t--unselectable" + (isActive ? " current" : "")}
                        to={link.url}
                    >{link.text}</NavLink>
                ))}

                {/* <NavLink
                    className="header__link button--scale t--default t--lowercase t--unselectable"
                    activeClassName="current"
                    to="/portfolios" exact
                >portfolios</NavLink> */}
            </span>

            <span className="header-links--mobile header__link header__link-menu button--scale" onClick={() => { setMenuOpen(!menuOpen); }}>
                {/* <MenuButton color={COLORS.primary} active={menuOpen}/> */}
            </span>
        </div>
    );
};

export default Header;
