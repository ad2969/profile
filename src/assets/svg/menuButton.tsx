import React from "react";

import "./menuButton.scss";

interface Props {
    color: string;
    active: boolean;
}

const MenuButton: React.FunctionComponent<Props> = ({ color, active }) => {
    return (
        <svg version="1.1" id="menu-button" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="100 0 600 600" xmlSpace="preserve" className={active ? "cross" : ""}>
            {/* <linearGradient id="menubutton_paint" gradientUnits="userSpaceOnUse" x1="150" y1="300" x2="650" y2="300" gradientTransform="matrix(1 0 0 -1 0 600)">
                <stop offset="0" stopColor={color1}/>
                <stop offset="1" stopColor={color2}/>
            </linearGradient> */}
            {/* <circle className="st0" cx="400" cy="300" r="300" fill="url(#menubutton_paint)"/> */}
            <path stroke={color} d="M290,210 C290,210 510,210 530,210 C730,210 630,530 510,410 C430,330 290,190 290,190" id="top"></path>
            <path stroke={color} d="M290,310 L530,310" id="middle"></path>
            <path stroke={color} d="M290,210 C290,210 510,210 530,210 C730,210 630,530 510,410 C430,330 290,190 290,190" id="bottom" transform="translate(470, 310) scale(1, -1) translate(-470, -310) "></path>
        </svg>
    );
};

export default MenuButton;
