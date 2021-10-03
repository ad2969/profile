import React from "react";

import { SvgProps } from "../svgtypes";

const CalendarLogo: React.FunctionComponent<SvgProps> = ({ color = "#000", ...rest }) => {
    return (
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" { ...rest }>
            <path d="M36.2222 17.5H16.7778C15.2437 17.5 14 18.6193 14 20V37.5C14 38.8807 15.2437 40 16.7778 40H36.2222C37.7563 40 39 38.8807 39 37.5V20C39 18.6193 37.7563 17.5 36.2222 17.5Z" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M32.0557 15V20" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.9443 15V20" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 25H39" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    );
};

export default CalendarLogo;
