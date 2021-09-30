import React, { useLayoutEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import Logo from "../../assets/svg/logo";
import MenuButton from "../../assets/svg/menuButton";

import COLORS from "../../styles/themes/_default.module.scss";
import BREAKPOINTS from "../../styles/mixins/_breakpoints.module.scss";
import "./styles.scss";

interface Props {
    variation?: string;
}

const LINK_VARIATIONS = {
    home: [
        {
            text: "at a glance",
            url: "/"
        },
        {
            text: "contact",
            url: "/contact"
        }
    ]
};

const Header: React.FunctionComponent<Props> = ({ variation = "home" }) => {
    const history = useHistory();

    const [menuType, setMenuType] = useState("text");
    const [menuOpen, setMenuOpen] = useState(false);

    useLayoutEffect(() => {
        // dont show any of the stuff if variation = 0
        if (variation === "none") return;

        const updateHeader = () => {
            const breakpoint = parseInt(BREAKPOINTS.tablet.replace("px", ""));
            if (window.innerWidth < breakpoint) setMenuType("none");
            else if (window.innerWidth >= breakpoint) setMenuType("text");
        };
        window.addEventListener("resize", updateHeader);
        updateHeader();
        return () => window.removeEventListener("resize", updateHeader);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const renderMenu = (type) => {
        switch (type) {
            case "button":
                return <span
                    className="header__link header__link-menu button--scale t--default t--lowercase t--unselectable"
                    onClick={() => { setMenuOpen(!menuOpen); }}
                >
                    <MenuButton color={COLORS.primary} active={menuOpen}/>
                </span>;
            default:
                return LINK_VARIATIONS[variation] && LINK_VARIATIONS[variation].map((link) => (
                    <NavLink
                        key={link.url}
                        className="header__link button--scale t--default t--lowercase t--unselectable"
                        activeClassName="current"
                        to={link.url} exact
                    >{link.text}</NavLink>
                ));
        }
    };

    return (
        <div className="Header-fixed flex-center">
            <Logo className="header-logo button--scale" onClick={() => { history.push("/"); }} />
            {renderMenu(menuType)}
        </div>
    );
};

export default Header;
