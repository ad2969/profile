import React from "react";

import { SvgProps } from "../svgtypes";

const AlertTriangleIcon: React.FunctionComponent<SvgProps> = ({ color = "#000", ...rest }) => {
    return (
        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path d="M22.5 16.875V26.25" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            <path d="M22.5 32.8125V33.75" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            <path d="M4.185 35.6555L19.4062 5.72297C20.7431 3.09234 24.2625 3.09234 25.5975 5.72297L40.8169 35.6555C42.0937 38.1755 40.395 41.2505 37.7175 41.2505H7.28062C4.605 41.2505 2.90437 38.1755 4.18687 35.6555H4.185Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default AlertTriangleIcon;
