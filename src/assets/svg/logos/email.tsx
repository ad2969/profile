import React from "react";

import { SvgProps } from "../svgtypes";

const EmailLogo: React.FunctionComponent<SvgProps> = ({ color = "#000", ...rest }) => {
    return (
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" { ...rest }>
            <path d="M17.4 17H36.6C37.92 17 39 18.08 39 19.4V33.8C39 35.12 37.92 36.2 36.6 36.2H17.4C16.08 36.2 15 35.12 15 33.8V19.4C15 18.08 16.08 17 17.4 17Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M39 21.5L27 29.9L15 21.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    );
};

export default EmailLogo;
