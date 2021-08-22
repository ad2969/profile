import React from "react";

import { SvgProps } from "./svgtypes";

const MailLogo: React.FunctionComponent<SvgProps> = ({ color = "#000", ...rest }) => {
    return (
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" { ...rest }>
            <path d="M16.5 17H36.5C37.875 17 39 18.125 39 19.5V34.5C39 35.875 37.875 37 36.5 37H16.5C15.125 37 14 35.875 14 34.5V19.5C14 18.125 15.125 17 16.5 17Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M39 19.5L26.5 28.25L14 19.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default MailLogo;
